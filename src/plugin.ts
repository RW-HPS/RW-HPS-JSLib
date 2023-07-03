import { Plugin, PluginObjectType } from 'java:net.rwhps.server.plugin'
import { mergeObject } from './util'

/** 
 * 创建标准插件 
 * @author ZeroDegres
 * @param impl 插件具体实现
 * @return 可以被 RW-HPS 直接加载的标准插件
 */
export function createPlugin(impl: PluginObjectType): PluginObjectType {
  return new (Java.extend(Plugin, impl))()
}

/** 
 * 合并两个插件实现
 * 不会相互覆盖
 * @author ZeroDegres
 * @param lhs 左实现
 * @param rhs 右实现
 * @return 可以被 RW-HPS 直接加载的标准插件
 */
export function mergePluginImpl(lhs: PluginObjectType, rhs: PluginObjectType): PluginObjectType {
  return mergeObject(lhs, rhs)
}