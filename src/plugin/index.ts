import { Plugin as JavaPlugin } from '../javatypes'
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
  })
}