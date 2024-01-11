import {
  Command,
  CoreCommandHandler,
  ServerClientCommandHandler,
  ServerCommandHandler,
} from './command'
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
  })
  return obj
}
