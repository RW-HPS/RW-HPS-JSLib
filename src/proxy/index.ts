import { NetConnectCloseData, NetConnectNewData, ServerHessLoadData, ServerStartData } from '../event/globalEvent'
import { NetConnectCloseEvent, Packet as JPacket, NetConnectNewEvent, ConnectionAgreement as JConnectionAgreement, ServerHessLoadEvent, ServerStartTypeEvent } from '../javatypes'
import { ConnectionAgreement, Packet } from '../net/index'

const javaObjSymbol = Symbol('javaObj')

function simpleProxy<To extends object>(options?: ProxyHandler<To>) {
  return (obj: JavaObject) => {
    return new Proxy(obj as unknown as To, {
      get(target, property) {
        switch(property) {
          case javaObjSymbol:
            return obj
          default:
            return getGet(obj, property)
        }
      },
      set(target, property, newValue) {
        switch(property) {
          case javaObjSymbol:
            return false
          default:
            return setSet(obj, property, newValue)
        }
      },
      ownKeys() {
        const keys = [...Object.keys(obj)]
        keys.forEach(k => {
          if((k.startsWith('get') || k.startsWith('set')) && typeof obj[k] == 'function') {
            const rest = k.replace(/^get|set/, '')
            if(rest.length > 0) {
              const nKey = `${rest.slice(0,1).toLowerCase()}${rest.slice(1)}`
              if(!keys.includes(rest)) {
                keys.push(nKey)
              }
            }
          }
        })
        return keys
      },
      ...options
    })
  } 
}

function setSet(obj: JavaObject, property: string | symbol, newValue: unknown): boolean {
  if(typeof property == 'string') {
    if(property.length == 0) {
      obj[property] = (value2java)
      return true
    }
    const setter = `set${property.slice(0,1).toUpperCase()}${property.slice(1)}`
    if(
      setter in obj
      && typeof obj[setter] == 'function'
    ) {
      (obj[setter] as (...args: unknown[]) => void)(...args2java(newValue))
      return true
    }
  } else {
    obj[property] = value2java(newValue)
    return true
  }
}

function getGet(obj: JavaObject, property: string | symbol) {
  if(typeof property == 'string' ) {
    if(property.length == 0) {
      return proxy(obj[property])
    }
    const getter = `get${property.slice(0,1).toUpperCase()}${property.slice(1)}`
    if(
      getter in obj
      && typeof obj[getter] == 'function'
    ) {
      // 如果找到对应getter方法，代理getter
      return proxy((obj[getter] as () => unknown)())
    } else if(typeof obj[property] == 'function') {
      // 如果是函数，转换为代理函数
      return (...args: unknown[]) => {
        const r = (obj[property] as (...args: unknown[]) => unknown)(...args2java(...args))
        return proxy(r)
      }
    } else {
      return proxy(obj[property])
    }
  } else {
    // 考虑Symbol
    if(typeof obj[property] == 'function') {
      // 如果是函数，转换为代理函数
      return (...args: unknown[]) => proxy((obj[property] as (...args: unknown[]) => unknown)(...args2java(...args)))
    } else {
      return proxy(obj[property])
    }
  }
}

export function value2java(v: { [javaObjSymbol]?: JavaObject } & unknown) {
  if(
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
    if(
      arg === null 
      || arg === undefined 
      || typeof arg != 'object'
    ) {
      return arg
    }
    return javaObjSymbol in arg ? arg[javaObjSymbol] : arg
  })
}

const proxyNetConnectCloseData = simpleProxy<NetConnectCloseData>()
const proxyConnectionAgreement = simpleProxy<ConnectionAgreement>()
const proxyPacket = simpleProxy<Packet>()
const proxyNetConnectNewData = simpleProxy<NetConnectNewData>()
const proxyServerHessLoadData = simpleProxy<ServerHessLoadData>()
const proxyServerStartData = simpleProxy<ServerStartData>()

const proxyRuleMap: [JavaType, (v: JavaObject) => unknown][] = [
  [NetConnectCloseEvent, proxyNetConnectCloseData],
  [JPacket, proxyPacket],
  [NetConnectNewEvent, proxyNetConnectNewData],
  [JConnectionAgreement, proxyConnectionAgreement],
  [ServerHessLoadEvent, proxyServerHessLoadData],
  [ServerStartTypeEvent, proxyServerStartData]
]

export function proxy<T>(obj: { getClass?: unknown } & unknown) {
  if(
    obj === null 
    || obj === undefined 
    || typeof obj != 'object'
  ) {
    return obj as T
  }
  if('getClass' in obj && typeof obj.getClass == 'function') {
    const o = obj as JavaObject
    for(const [cls, pro] of proxyRuleMap) {
      if(o.getClass().equals(cls.class)) {
        return pro(o) as T
      }
    }
  }
  return obj as T
}