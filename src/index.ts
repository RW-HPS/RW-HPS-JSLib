import { Plugin as JavaPlugin } from './javatypes'

export { createPlugin, Plugin } from './plugin/index'
export { proxy, value2java, args2java } from './proxy/index'
export * as event from './event/index'
export * as net from './net/index'
export * as data from './data/index'
export * as io from './io/index'
export * from './util'
export * as command from './command/index'
export * as struct from './struct'
export { SeqArray, ObjMap } from './struct'
export * as JavaTypes from './javatypes'

export default new (Java.extend(JavaPlugin))({
  onEnable() {
    console.log('JSLib已加载！')
  }
})