import { EventManage, GlobalEventManage } from './event/manage'
import { CommandHandler } from './handler'
import { Plugin as JavaPlugin, NetConnectCloseEvent, NetConnectNewEvent, ServerHessLoadEvent, ServerLoadEvent, ServerStartTypeEvent } from './javatypes'
import { proxy } from './proxy/index'

export interface Plugin {
  /**
   * 插件被启用后执行
   */
  onEnable?(): void
  /**
   * 注册要在服务器端使用的Core命令，例如从控制台
   * 这里注册的命令无论启动什么协议 都会存在
   */
  registerCoreCommands?(handler: CommandHandler): void
  /**
   * 注册要在服务器端使用的Server命令，例如从控制台-Server
   * 这里注册的命令只有启动Server协议 才会存在
   */
  registerServerCommands?(handler: CommandHandler): void 
  /**
   * 注册要在服务器端使用的Relay命令，例如从控制台-Relay
   * 这里注册的命令只有启动Relay协议 才会存在
   */
  registerRelayCommands?(handler: CommandHandler): void
  /** 注册要在客户端使用的任何命令，例如来自游戏内玩家 -3  */
  registerServerClientCommands?(handler: CommandHandler): void
  /** 注册要在客户端使用的RELAY命令，例如来自RELAY内玩家 -3  */
  registerRelayClientCommands?(handler: CommandHandler): void
  /** 注册全局事件 */
  registerEvents?(hessLoadID: string, eventManage: EventManage): void
  /** 注册全局事件 */
  registerGlobalEvents?(eventManage: GlobalEventManage): void
  /** 所有插件创建完之后，命令也创建完之后调用 */
  init?(): void
  /** Server退出时执行 可以进行Plugin的数据保存 -6 */
  onDisable?(): void
}

export function createPlugin(plugin: Plugin): JavaObject {
  return new (Java.extend(JavaPlugin))({
    onEnable: plugin.onEnable,
    init: plugin.init,
    onDisable: plugin.onDisable,
    registerGlobalEvents(eventManage) {
      plugin.registerGlobalEvents && plugin.registerGlobalEvents({
        fire(event) {
          switch (event) {
            case 'NetConnectClose':
              return eventManage['fire'](NetConnectCloseEvent)
            case 'NetConnectNew':
              return eventManage['fire'](NetConnectNewEvent)
            case 'ServerHessLoad':
              return eventManage['fire'](ServerHessLoadEvent)
            case 'ServerLoad':
              return eventManage['fire'](ServerLoadEvent)
            case 'ServerStartType':
              return eventManage['fire'](ServerStartTypeEvent)
          }
        },
        listen(event, callback) {
          switch (event) {
            case 'NetConnectClose':
              return eventManage['registerListener'](
                NetConnectCloseEvent, 
                (e: JavaObject) => callback<'NetConnectClose'>(proxy(e))
              )
            case 'NetConnectNew':
              return eventManage['registerListener'](
                NetConnectNewEvent, 
                (e: JavaObject) => callback<'NetConnectNew'>(proxy(e))
              )
            case 'ServerHessLoad':
              return eventManage['registerListener'](
                ServerHessLoadEvent,
                (e: JavaObject) => callback<'ServerHessLoad'>(proxy(e))
              )
            case 'ServerLoad':
              return eventManage['registerListener'](
                ServerLoadEvent,
                (e: JavaObject) => callback<'ServerLoad'>(proxy(e))
              )
            case 'ServerStartType':
              return eventManage['registerListener'](
                ServerStartTypeEvent,
                (e: JavaObject) => callback<'ServerStartType'>(proxy(e))
              )
          }
        }
      })
    }
  })
}