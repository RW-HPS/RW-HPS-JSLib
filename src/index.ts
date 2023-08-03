import { Plugin as JavaPlugin, Log } from './javatypes'

export { createPlugin, Plugin } from './plugin'
export { proxy, value2java, args2java } from './proxy'
export * as event from './event'
export * as net from './net'
export * as data from './data'
export { HessModuleManage } from './data'
export * as io from './io'
export * from './util'
export * as command from './command'
export * as struct from './struct'
export { SeqArray, ObjMap } from './struct'
export * as JavaTypes from './javatypes'
export { Log } from './javatypes'

export default new (Java.extend(JavaPlugin))({
  onEnable() {
    Log.clog('JSLib加载完成！')
  }
})