import { Log } from 'java:net.rwhps.server.util.log'
import { createEvent } from './event'
import { PluginObjectType } from 'java:net.rwhps.server.plugin'

/**
 * 插件模板：你好，世界！
 * 
 * 这个模板会在插件被启用时输出一行"Hello World!"
 * @author ZeroDegres
 * @returns 你好，世界！模板插件
 */
export function createHelloWorldTemplate(): PluginObjectType {
  return {
    onEnable() {
      Log.clog('Hello World!')
    }
  }
}

/**
 * 插件模板: 铁锈，启动！
 * 
 * 这个模板会在游戏开始时输出一行"RustedWarefare, Start!"
 * @author ZeroDegres
 * @returns 铁锈，启动！模板插件
 */
export function createGameStartHelloTemplate(): PluginObjectType {
  return {
    registerEvents() {
      return createEvent({
        registerGameStartEvent() {
          Log.clog('RustedWarfare, Start!')
        }
      })
    },
  }
}

export function createWasmTemplate(): PluginObjectType {
  return {
    onEnable() {
      Log.clog(`is wasm enabled? ${globalThis['WebAssembly']}`)
    }
  }
}