import { adaptPlayerBanEvent, adaptPlayerChatEvent } from './adapter'
import {
  Command,
  CoreCommandHandler,
  ServerClientCommandHandler,
  ServerCommandHandler,
} from './command'
import { EventManage } from './event'
import { Seq } from './struct'

const Plugin = Java.type('net.rwhps.server.plugin.Plugin')
/** 插件选项 */
export type CreatePluginOptions = {
  /** 最先执行 可以进行Plugin的数据读取 */
  onEnable?: () => void
  /** 创建所有插件并注册命令后调用 */
  init?: () => void
  /** (注意 将会强制继承) Server退出时执行 可以进行Plugin的数据保存 */
  onDisable?: () => void
  /**
   * 注册要在服务器端使用的Core命令，例如从控制台
   * 这里注册的命令无论启动什么协议 都会存在
   */
  registerCoreCommands?: (handler: CoreCommandHandler) => void
  /**
   * 注册要在服务器端使用的Server命令，例如从控制台-Server
   * 这里注册的命令只有启动Server协议 才会存在
   */
  registerServerCommands?: (handler: ServerCommandHandler) => void
  /**
   * 注册要在客户端使用的任何命令，例如来自游戏内玩家 -3
   *
   * ## 使用
   * 这里不会多次调用
   *
   * 默认只会调用服务器主 Hess 的 Command
   */
  registerServerClientCommands?: (handler: ServerClientCommandHandler) => void
  /**
   * 注册无头端事件
   *
   * ## 使用
   * 这里不会多次调用
   *
   * 因为 `RW-HPS` 虽然支持多个 `Hess` 端运行, 但是, 由于多个端将会让Event支持多端, 但我没有精力, 所以只会在 `Main` 端上执行 Event
   *
   * 同样的, 如果需要多个 `Hess` 端注入, 您不应该使用这个方法, 请使用
   * ```
   * object: EventListener {
   *     @EventListenerHandler
   *     fun registerServerHessLoadEvent(serverHessLoadEvent: ServerHessLoadEvent) {
   *         // 需要 Event 支持同时多个Hess运行, 不建议多个 Hess 共用一个Event实例
   *         serverHessLoadEvent.eventManage.registerListener(您的Event())
   *     }
   * }
   * ```
   *
   * 在不同的 `Hess` 端, Event是不共用的, 每一个 `Hess` 端, 就有一个新的 Event 管理器
   *
   * @param eventManage Hess事件管理器
   */
  registerEvents?: (eventManage: EventManage) => void
}
export function createPlugin(options: CreatePluginOptions): unknown {
  const Adapter = Java.extend<'net.rwhps.server.plugin.Plugin'>(Plugin)
  const obj = new Adapter({
    onEnable() {
      options.onEnable?.()
    },
    init() {
      options.init?.()
    },
    onDisable() {
      options.onDisable?.()
    },
    registerCoreCommands(handler) {
      options.registerCoreCommands?.({
        removeCommand(text) {
          handler.removeCommand(text)
        },
        register(text, description, runner) {
          const result = handler.register(
            text,
            description,
            new (Java.extend<'net.rwhps.server.util.game.CommandHandler$CommandRunner'>(
              Java.type(
                'net.rwhps.server.util.game.CommandHandler$CommandRunner',
              ),
            ))({
              accept(args, parameter) {
                const param = parameter as unknown as {
                  invoke(str: string): void
                  invoke(str: string, ...obj: unknown[]): void
                }
                runner(args, (str, ...objs: unknown[]) => {
                  if (objs.length > 0) {
                    param.invoke(str, objs)
                  } else {
                    param.invoke(str)
                  }
                })
              },
            }),
          )
          return {
            text: result.text,
            description: result.description,
            paramText: result.paramText,
            params: result.params,
          }
        },
        registerWithParams(text, params, description, runner) {
          const result = handler.register(
            text,
            params,
            description,
            new (Java.extend<'net.rwhps.server.util.game.CommandHandler$CommandRunner'>(
              Java.type(
                'net.rwhps.server.util.game.CommandHandler$CommandRunner',
              ),
            ))({
              accept(args, parameter) {
                const param = parameter as unknown as {
                  invoke(str: string): void
                  invoke(str: string, ...obj: unknown[]): void
                }
                runner(args, (str, ...objs: unknown[]) => {
                  if (objs.length > 0) {
                    param.invoke(str, objs)
                  } else {
                    param.invoke(str)
                  }
                })
              },
            }),
          )
          return {
            text: result.text,
            description: result.description,
            paramText: result.paramText,
            params: result.params,
          }
        },
        getCommandList() {
          return handler.getCommandList() as unknown as Seq<Command>
        },
      })
    },
    registerServerCommands(handler) {
      options.registerServerCommands?.({
        removeCommand(text) {
          handler.removeCommand(text)
        },
        register(text, description, runner) {
          const result = handler.register(
            text,
            description,
            new (Java.extend<'net.rwhps.server.util.game.CommandHandler$CommandRunner'>(
              Java.type(
                'net.rwhps.server.util.game.CommandHandler$CommandRunner',
              ),
            ))({
              accept(args, parameter) {
                const param = parameter as unknown as {
                  invoke(str: string): void
                  invoke(str: string, ...obj: unknown[]): void
                }
                runner(args, (str, ...objs: unknown[]) => {
                  if (objs.length > 0) {
                    param.invoke(str, objs)
                  } else {
                    param.invoke(str)
                  }
                })
              },
            }),
          )
          return {
            text: result.text,
            description: result.description,
            paramText: result.paramText,
            params: result.params,
          }
        },
        registerWithParams(text, params, description, runner) {
          const result = handler.register(
            text,
            params,
            description,
            new (Java.extend<'net.rwhps.server.util.game.CommandHandler$CommandRunner'>(
              Java.type(
                'net.rwhps.server.util.game.CommandHandler$CommandRunner',
              ),
            ))({
              accept(args, parameter) {
                const param = parameter as unknown as {
                  invoke(str: string): void
                  invoke(str: string, ...obj: unknown[]): void
                }
                runner(args, (str, ...objs: unknown[]) => {
                  if (objs.length > 0) {
                    param.invoke(str, objs)
                  } else {
                    param.invoke(str)
                  }
                })
              },
            }),
          )
          return {
            text: result.text,
            description: result.description,
            paramText: result.paramText,
            params: result.params,
          }
        },
        getCommandList() {
          return handler.getCommandList() as unknown as Seq<Command>
        },
      })
    },
    registerServerClientCommands(handler) {
      options.registerServerClientCommands?.({
        removeCommand(text) {
          handler.removeCommand(text)
        },
        register(text, description, runner) {
          const result = handler.register(
            text,
            description,
            new (Java.extend<'net.rwhps.server.util.game.CommandHandler$CommandRunner'>(
              Java.type(
                'net.rwhps.server.util.game.CommandHandler$CommandRunner',
              ),
            ))({
              accept(args, parameter) {
                const param = parameter as unknown as {
                  invoke(str: string): void
                  invoke(str: string, ...obj: unknown[]): void
                }
                runner(args, (str, ...objs: unknown[]) => {
                  if (objs.length > 0) {
                    param.invoke(str, objs)
                  } else {
                    param.invoke(str)
                  }
                })
              },
            }),
          )
          return {
            text: result.text,
            description: result.description,
            paramText: result.paramText,
            params: result.params,
          }
        },
        registerWithParams(text, params, description, runner) {
          const result = handler.register(
            text,
            params,
            description,
            new (Java.extend<'net.rwhps.server.util.game.CommandHandler$CommandRunner'>(
              Java.type(
                'net.rwhps.server.util.game.CommandHandler$CommandRunner',
              ),
            ))({
              accept(args, parameter) {
                const param = parameter as unknown as {
                  invoke(str: string): void
                  invoke(str: string, ...obj: unknown[]): void
                }
                runner(args, (str, ...objs: unknown[]) => {
                  if (objs.length > 0) {
                    param.invoke(str, objs)
                  } else {
                    param.invoke(str)
                  }
                })
              },
            }),
          )
          return {
            text: result.text,
            description: result.description,
            paramText: result.paramText,
            params: result.params,
          }
        },
        getCommandList() {
          return handler.getCommandList() as unknown as Seq<Command>
        },
      })
    },
    registerEvents(eventManage) {
      options.registerEvents?.({
        registerListener(type, consumer) {
          switch (type) {
            case 'PlayerBanEvent':
              eventManage.registerListener(
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                Java.type('net.rwhps.server.game.event.game.PlayerBanEvent'),
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                (ev) => consumer(adaptPlayerBanEvent(ev)),
              )
              break
            case 'PlayerChatEvent':
              eventManage.registerListener(
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                Java.type('net.rwhps.server.game.event.game.PlayerChatEvent'),
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                (ev) => consumer(adaptPlayerChatEvent(ev)),
              )
              break
            case 'PlayerIpBanEvent':
              eventManage.registerListener(
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                Java.type('net.rwhps.server.game.event.game.PlayerIpBanEvent'),
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                (ev) => consumer(adaptPlayerChatEvent(ev)),
              )
              break
            case 'PlayerIpUnBanEvent':
              eventManage.registerListener(
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                Java.type(
                  'net.rwhps.server.game.event.game.PlayerIpUnBanEvent',
                ),
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                (ev) => consumer(adaptPlayerChatEvent(ev)),
              )
              break
            case 'PlayerUnBanEvent':
              eventManage.registerListener(
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                Java.type('net.rwhps.server.game.event.game.PlayerUnBanEvent'),
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                (ev) => consumer(adaptPlayerChatEvent(ev)),
              )
              break
            default:
              throw new Error('Unknown event')
          }
        },
      })
    },
  })
  return obj
}
