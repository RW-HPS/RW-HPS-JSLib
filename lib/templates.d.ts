import { PluginObjectType } from 'java:net.rwhps.server.plugin';
/**
 * 插件模板：你好，世界！
 *
 * 这个模板会在插件被启用时输出一行"Hello World!"
 * @author ZeroDegres
 * @returns 你好，世界！模板插件
 */
export declare function createHelloWorldTemplate(): PluginObjectType;
/**
 * 插件模板: 铁锈，启动！
 *
 * 这个模板会在游戏开始时输出一行"RustedWarefare, Start!"
 * @author ZeroDegres
 * @returns 铁锈，启动！模板插件
 */
export declare function createGameStartHelloTemplate(): PluginObjectType;
export declare function createWasmTemplate(): PluginObjectType;
