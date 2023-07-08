import { EventManage, GlobalEventManage } from '../event/manage'
import { CommandHandler } from '../handler'


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
  /** 注册事件 */
  registerEvents?(eventManage: EventManage): void
  /** 注册全局事件 */
  registerGlobalEvents?(eventManage: GlobalEventManage): void
  /** 所有插件创建完之后，命令也创建完之后调用 */
  init?(): void
  /** Server退出时执行 可以进行Plugin的数据保存 -6 */
  onDisable?(): void
}