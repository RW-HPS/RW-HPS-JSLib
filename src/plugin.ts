import { Plugin, PluginObjectType } from 'java:net.rwhps.server.plugin'

/** 
 * 创建标准插件 
 * @author ZeroDegres
 * @param impl 插件具体实现
 * @return 可以被 RW-HPS 直接加载的标准插件
 */
export function createPlugin(impl: PluginObjectType): PluginObjectType {
  return new (Java.extend(Plugin, impl))()
}