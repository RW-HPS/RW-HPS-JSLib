import { Plugin as JavaPlugin } from '../javatypes'
import { proxy } from '../proxy/index'
import { Plugin } from './data'
import { registerAllEvents } from './event'

export {
  Plugin
}

export function createPlugin(plugin: Plugin): JavaObject {
  return new (Java.extend(JavaPlugin))({
    onEnable: plugin.onEnable,
    init: plugin.init,
    onDisable: plugin.onDisable,
    registerGlobalEvents(eventManage) {
      registerAllEvents(plugin, eventManage)
    },
    registerCoreCommands(handler) {
      plugin.registerCoreCommands && plugin.registerCoreCommands(proxy(handler))
    },
    registerServerCommands(handler) {
      plugin.registerServerCommands && plugin.registerServerCommands(proxy(handler))
    },
    registerRelayCommands(handler) {
      plugin.registerRelayCommands && plugin.registerRelayCommands(proxy(handler))
    },
    registerServerClientCommands(handler) {
      plugin.registerServerClientCommands && plugin.registerServerClientCommands(proxy(handler))
    },
    registerRelayClientCommands(handler) {
      plugin.registerRelayClientCommands && plugin.registerRelayClientCommands(proxy(handler))
    },
  })
}