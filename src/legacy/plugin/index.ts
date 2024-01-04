import { FileUtils } from '../io/index'
import { Plugin as JavaPlugin } from '../javatypes'
import { proxy } from '../proxy'
import { Plugin } from './data'
import { registerGlobalEvents, registerEvents } from './event'

export {
  Plugin
}

export function createPlugin(plugin: Plugin | ((context: {fileUtils: FileUtils}) => Plugin)): JavaObject {
  const context: { fileUtils: FileUtils } = {
    fileUtils: null
  }
  const pluginN = typeof plugin == 'function' ? plugin(context) : plugin
  const jplugin = new (Java.extend(JavaPlugin))({
    onEnable: pluginN.onEnable,
    init: pluginN.init,
    onDisable: pluginN.onDisable,
    registerGlobalEvents(eventManage) {
      registerGlobalEvents(pluginN, eventManage)
    },
    registerEvents(eventManage) {
      registerEvents(pluginN, eventManage)
    },
    registerCoreCommands(handler) {
      pluginN.registerCoreCommands && pluginN.registerCoreCommands(proxy(handler))
    },
    registerServerCommands(handler) {
      pluginN.registerServerCommands && pluginN.registerServerCommands(proxy(handler))
    },
    registerServerClientCommands(handler) {
      pluginN.registerServerClientCommands && pluginN.registerServerClientCommands(proxy(handler))
    },
  })
  Object.defineProperty(context, 'fileUtils', {
    get() {
      try {
        return proxy((jplugin['getPluginDataFileUtils'] as () => unknown)())
      } catch (e) {
        return null
      }
    },
  })
  return jplugin
}