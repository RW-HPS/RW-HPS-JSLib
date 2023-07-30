import { Plugin as JavaPlugin, Log } from './javatypes'

export { createPlugin, Plugin } from './plugin/index'
export { proxy, value2java, args2java } from './proxy/index'
export * as event from './event/index'
export * as net from './net/index'
export * as data from './data/index'
export { HessModuleManage } from './data/index'
export * as io from './io/index'
export * from './util'
export * as command from './command/index'
export * as struct from './struct'
export { SeqArray, ObjMap } from './struct'
export * as JavaTypes from './javatypes'
export { Log } from './javatypes'

export default new (Java.extend(JavaPlugin))({
  onEnable() {
    Log.clog('JSLib加载完成！')
  }
})