import { CommandHandler } from '../command/types'
import { AbstractGameModule } from '../data/index'
import { EventManage } from '../event/manage'
import { NetConnectCloseEvent, Packet as JPacket, NetConnectNewEvent, ConnectionAgreement as JConnectionAgreement, ServerHessLoadEvent, ServerStartTypeEvent, Seq, ObjectMap, ServerStatus as JServerStatus, AbstractNetConnectServer as JAbstractNetConnectServer, PlayerHess, AbstractPlayerData, PlayerUnBanEvent, PlayerBanEvent, PlayerChatEvent, PlayerJoinEvent, PlayerIpBanEvent, PlayerIpUnBanEvent, PlayerLeaveEvent, PlayerOperationUnitEvent, ServerGameOverEvent, ServerGameStartEvent, ServerHessStartPort, GameUnits, GameOverData, NetType, CommandHandler as JCommandHandler, GameVersionRelay, AbstractGameModule as JAbstractGameModule, ServerRoom, PlayerHessManage } from '../javatypes'
import { ObjMap, SeqArray } from '../struct'

const javaObjSymbol = Symbol('javaObj')

function simpleProxy<To extends object>(options?: {
  prefixGet?(obj: JavaObject, prop: string | symbol): unknown | undefined,
  prefixSet?(obj: JavaObject, prop: string | symbol): boolean | undefined,
}) {
  return (obj: JavaObject) => {
    let ownProperyDescriptors = Object.getOwnPropertyDescriptors(obj)
    const newDescriptors = {}
    function createDescriptor(name: string | symbol) {
      if (!(name in newDescriptors)) {
        newDescriptors[name] = {
          value: undefined,
          writable: false,
          get: undefined,
          set: undefined,
          configurable: false,
          enumerable: true,
        }
      }
    }
    const ownKeys: string[] = []
    for (const name of Object.getOwnPropertyNames(obj)) {
      if (name.match(/^get/) && typeof obj[name] == 'function' && name != 'get' && name != 'getClass') {
        const attrh = name.replace(/^get/, '')
        const attr = `${attrh.slice(0, 1).toLowerCase()}${attrh.slice(1)}`
        createDescriptor(attr)
        newDescriptors[attr].get = () => proxy(
          (obj[name] as () => unknown)()
        )
        if (!ownKeys.includes(attr)) {
          ownKeys.push(attr)
        }
      } else if (name.match(/^set/) && typeof obj[name] == 'function' && name != 'set') {
        const attrh = name.replace(/^set/, '')
        const attr = `${attrh.slice(0, 1).toLowerCase()}${attrh.slice(1)}`
        createDescriptor(attr)
        newDescriptors[attr].writable = true
        newDescriptors[attr].set = (arg: unknown) => (
          obj[name] as (arg: unknown) => void
        )(value2java(arg))
        if (!ownKeys.includes(attr)) {
          ownKeys.push(attr)
        }
      } else if (name == 'length') {
        if (!ownKeys.includes('length')) {
          ownKeys.push('length')
        }
        continue
      } else if (name) {
        if (ownProperyDescriptors[name].enumerable) {
          ownKeys.push(name)
        }
        ownProperyDescriptors[name].get = () => proxy(obj[name])
      }
    }
    ownProperyDescriptors = {
      ...ownProperyDescriptors,
      ...newDescriptors,
      [javaObjSymbol]: {
        get: () => obj
      }
    }

    return new Proxy(obj as unknown as To, {
      get(target, property) {
        if (options && options.prefixGet) {
          const prefix = options.prefixGet(obj, property)
          if (prefix !== undefined) {
            return proxy(prefix)
          }
        }
        if (ownProperyDescriptors[property]) {
          if (ownProperyDescriptors[property].get) {
            return ownProperyDescriptors[property].get()
          } else {
            return undefined
          }
        } else {
          return proxy(obj[property])
        }
      },
      set(target, property, newValue) {
        if (options && options.prefixSet) {
          const prefix = options.prefixSet(obj, property)
          if (prefix !== undefined) {
            return prefix
          }
        }
        if (
          property in ownProperyDescriptors
          && 'set' in ownProperyDescriptors[property]
          && ownProperyDescriptors[property].writable
        ) {
          ownProperyDescriptors[property].set(value2java(newValue))
          return true
        } else {
          return false
        }
      },
      ownKeys() {
        return [...ownKeys]
      },
      has(target, prop) {
        return prop in ownProperyDescriptors
      },
      isExtensible: () => false,
      getOwnPropertyDescriptor(target, prop) {
        if (prop in ownProperyDescriptors) {
          return {
            ...ownProperyDescriptors[prop]
          }
        }
      },
    })
  }
}

export function value2java(v: { [javaObjSymbol]?: JavaObject } & unknown) {
  if (
    v === null
    || v === undefined
    || typeof v != 'object'
  ) {
    return v
  }
  return javaObjSymbol in v ? v[javaObjSymbol] : v
}

export function args2java(...args: ({ [javaObjSymbol]?: JavaObject } & unknown)[]) {
  return args.map(arg => {
    if (
      arg === null
      || arg === undefined
      || typeof arg != 'object'
    ) {
      return arg
    }
    return javaObjSymbol in arg ? arg[javaObjSymbol] : arg
  })
}

export const defaultProxy = simpleProxy<{ _ }>()
const proxySeq = simpleProxy<SeqArray<unknown>>({
  prefixGet(obj, prop) {
    if (typeof prop == 'number') {
      return proxy(obj[prop])
    } else if (typeof prop == 'symbol') {
      if (prop == Symbol.iterator) {
        const it = (obj as unknown as {
          iterator(): {
            hasNext(): boolean,
            next(): unknown
          }
        }).iterator()
        return {
          next: () => {
            if (it.hasNext()) {
              return {
                value: it.next(),
                done: false,
              }
            } else {
              return { done: true }
            }
          }
        }
      }
    } else if (typeof prop == 'string') {
      switch (prop) {
        case 'push':
          return (v: unknown) => {
            return (obj as unknown as { add(v: unknown): boolean }).add(value2java(v)) && v
          }
        case 'pop':
          return () => {
            return proxy((obj as unknown as { pop(): unknown }).pop())
          }
        case 'length':
          return obj.getSize
      }
    }
    return undefined
  }
})
const proxyObjectMap = simpleProxy<ObjMap<unknown, unknown>>({
  prefixGet(obj, prop) {
    switch (typeof prop) {
      case 'symbol':
        if (prop == Symbol.iterator) {
          const it = (obj as unknown as {
            iterator(): {
              hasNext(): boolean,
              next(): { getKey(): unknown, getValue(): unknown }
            }
          }).iterator()
          return {
            next() {
              if (it.hasNext()) {
                const next = it.next()
                return [proxy(next.getKey()), proxy(next.getValue())]
              }
            }
          }
        }
        break
      case 'string':
        switch (prop) {
          case 'get':
            return (k: unknown) => proxy((obj as unknown as { get(k: unknown): unknown }).get(value2java(k)))
          case 'set':
            return (k: unknown, v: unknown) => proxy(
              (obj as unknown as { put(k: unknown, v: unknown): unknown }).put(value2java(k), value2java(v))
            )
        }
        break
    }
  }
})
const proxyByteArray = (obj: JavaObject) => {
  const u8array = new Uint8Array(obj as unknown as number[])
  return new Proxy(u8array, {
    get(target, prop) {
      if (prop == javaObjSymbol) {
        return obj
      }
      return target[prop]
    },
    set(target, prop, newValue) {
      if(prop == javaObjSymbol) {
        return false
      }
      target[prop] = newValue
      return true
    },
  })
}
const proxyEnum = (obj: JavaObject) => {
  const name = (obj as unknown as { name(): string }).name()
  name[javaObjSymbol] = obj
  return name
}
const proxyAbstractGameModule = simpleProxy<AbstractGameModule>({
  prefixGet(obj, prop) {
    if(prop == 'eventManage') {
      const eventManageJ = (obj['getEventManage'] as () => unknown)()
      const eventManage: EventManage = {
        fire(event) {
          switch (event) {
            case 'PlayerBan':
              return eventManageJ['fire'](PlayerBanEvent)
            case 'PlayerChat':
              return eventManageJ['fire'](PlayerChatEvent)
            case 'PlayerIpBan':
              return eventManageJ['fire'](PlayerIpBanEvent)
            case 'PlayerIpUnBan':
              return eventManageJ['fire'](PlayerIpUnBanEvent)
            case 'PlayerJoin':
              return eventManageJ['fire'](PlayerJoinEvent)
            case 'PlayerLeave':
              return eventManageJ['fire'](PlayerJoinEvent)
            case 'PlayerOperationUnit':
              return eventManageJ['fire'](PlayerOperationUnitEvent)
            case 'PlayerUnBan':
              return eventManageJ['fire'](PlayerUnBanEvent)
            case 'ServerGameOver':
              return eventManageJ['fire'](ServerGameOverEvent)
            case 'ServerGameStart':
              return eventManageJ['fire'](ServerGameStartEvent)
            case 'ServerHessStartPort':
              return eventManageJ['fire'](ServerHessStartPort)
          }
        },
        listen(event, callback)  {
          function invoke(event: JavaType) {
            return eventManageJ['registerListener'](
              event,
              (e: JavaObject) => callback(proxy(e))
            )
          }
          switch (event) {
            case 'PlayerBan':
              return invoke(PlayerBanEvent)
            case 'PlayerChat':
              return invoke(PlayerChatEvent)
            case 'PlayerIpBan':
              return invoke(PlayerIpBanEvent)
            case 'PlayerIpUnBan':
              return invoke(PlayerIpUnBanEvent)
            case 'PlayerJoin':
              return invoke(PlayerJoinEvent)
            case 'PlayerLeave':
              return invoke(PlayerLeaveEvent)
            case 'PlayerOperationUnit':
              return invoke(PlayerOperationUnitEvent)
            case 'PlayerUnBan':
              return invoke(PlayerUnBanEvent)
            case 'ServerGameOver':
              return invoke(ServerGameOverEvent)
            case 'ServerGameStart':
              return invoke(ServerGameStartEvent)
            case 'ServerHessStartPort':
              return invoke(ServerHessStartPort)
          }
        }
      }
      return eventManage
    }
    return undefined
  },
})
const proxyCommandHandler = simpleProxy<CommandHandler<unknown>>({
  prefixGet(obj, prop) {
    if(prop == 'register') {
      return (text, descOrParams, descOrRunner, OrRunner) => {
        if(typeof descOrRunner == 'string') {
          const params = descOrParams
          const desc = descOrRunner
          const runner = OrRunner;
          (obj['register'] as (...args: unknown[]) => unknown)(
            text, 
            params, 
            desc, 
            new (Java.extend(Java.type('net.rwhps.server.util.game.CommandHandler.CommandRunner')))({
              accept: (args, param) => value2java(runner(args, proxy(param)))
            }))
            
        } else {
          const desc = descOrParams
          const runner = descOrRunner;
          (obj['register'] as (...args: unknown[]) => unknown)(
            text,
            desc, 
            new (Java.extend(Java.type('net.rwhps.server.util.game.CommandHandler.CommandRunner')))({
              accept: runner
            }))
        }
      }
    }
    return undefined
  },
})

const proxyRuleMap: [JavaType | string, (v: JavaObject) => unknown][] = [
  [NetConnectCloseEvent, defaultProxy],
  [JPacket, defaultProxy],
  [NetConnectNewEvent, defaultProxy],
  [JConnectionAgreement, defaultProxy],
  [ServerHessLoadEvent, defaultProxy],
  [ServerStartTypeEvent, defaultProxy],
  [JAbstractNetConnectServer, defaultProxy],
  [PlayerHess, defaultProxy],
  [AbstractPlayerData, defaultProxy],
  [Seq, proxySeq],
  [ObjectMap, proxyObjectMap],
  ['byte[]', proxyByteArray],
  [JServerStatus, proxyEnum],
  [PlayerUnBanEvent, defaultProxy],
  [PlayerBanEvent, defaultProxy],
  [PlayerChatEvent, defaultProxy],
  [PlayerJoinEvent, defaultProxy],
  [PlayerIpBanEvent, defaultProxy],
  [PlayerIpUnBanEvent, defaultProxy],
  [PlayerLeaveEvent, defaultProxy],
  [PlayerOperationUnitEvent, defaultProxy],
  [ServerGameOverEvent, defaultProxy],
  [ServerGameStartEvent, defaultProxy],
  [ServerHessStartPort, defaultProxy],
  [GameUnits, proxyEnum],
  [GameOverData, defaultProxy],
  [NetType, proxyEnum],
  [JCommandHandler, proxyCommandHandler],
  [GameVersionRelay, defaultProxy],
  [JAbstractGameModule, proxyAbstractGameModule],
  [ServerRoom, defaultProxy],
  [PlayerHessManage, defaultProxy],
]

export function proxy<T>(obj: { getClass?: unknown } & unknown) {
  if (
    obj === null
    || obj === undefined
    || (typeof obj != 'object' && typeof obj != 'function')
  ) {
    return obj as T
  }
  if ('getClass' in obj && typeof obj.getClass == 'function') {
    const o = obj as JavaObject
    for (const [cls, pro] of proxyRuleMap) {
      if (typeof cls == 'string') {
        try {
          const clss = Java.type(cls)
          if (o.getClass().equals(clss.class)) {
            return pro(o) as T
          }
        } catch (e) { null }
      } else if ('class' in (cls as JavaType)) {
        const clss = cls as JavaType
        if (o.getClass().equals(clss.class)) {
          return pro(o) as T
        }
      }
    }
  }
  return obj as T
}

export function proxyClass<T>(obj: { class?: unknown } & unknown) {
  if (
    obj === null
    || obj === undefined
    || (typeof obj != 'object' && typeof obj != 'function')
  ) {
    return obj as T
  }
}