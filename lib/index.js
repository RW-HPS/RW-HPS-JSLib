import { Plugin } from 'java:net.rwhps.server.plugin';
import { Log } from 'java:net.rwhps.server.util.log';
import { AbstractEvent, AbstractGlobalEvent } from 'java:net.rwhps.server.plugin.event';

function mergeObject(lhs, rhs) {
    const obj = { ...lhs };
    for (const [key, value] of Object.entries(rhs)) {
        if (obj[key]) {
            switch (typeof obj[key]) {
                case 'function':
                    obj[key] = (() => {
                        const func = function (...args) {
                            obj[key].call(obj, ...args);
                            value.call(obj, ...args);
                        };
                        func.bind(obj);
                        return func;
                    })();
                    break;
                case 'object':
                    obj[key] = mergeObject(obj[key], value);
                    break;
                default:
                    obj[key] = value;
            }
        }
    }
    return obj;
}

/**
 * 创建标准插件
 * @author ZeroDegres
 * @param impl 插件具体实现
 * @return 可以被 RW-HPS 直接加载的标准插件
 */
function createPlugin(impl) {
    return new (Java.extend(Plugin, impl))();
}
/**
 * 合并两个插件实现
 * 不会相互覆盖
 * @author ZeroDegres
 * @param lhs 左实现
 * @param rhs 右实现
 * @return 可以被 RW-HPS 直接加载的标准插件
 */
function mergePluginImpl(lhs, rhs) {
    return mergeObject(lhs, rhs);
}

var plugin$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createPlugin: createPlugin,
    mergePluginImpl: mergePluginImpl
});

/**
 * 创建一个能被 RW-HPS 加载的标准事件
 * @author ZeroDegress
 * @param impl 事件具体实现
 * @returns 标准事件
 */
function createEvent(impl) {
    return new (Java.extend(AbstractEvent, impl));
}
/**
 * 创建一个能被 RW-HPS 加载的标准全局事件
 * @author ZeroDegress
 * @param impl 全局事件具体实现
 * @returns 标准全局事件
 */
function createGlobalEvent(impl) {
    return new (Java.extend(AbstractGlobalEvent, impl));
}

var event = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createEvent: createEvent,
    createGlobalEvent: createGlobalEvent
});

/**
 * 插件模板：你好，世界！
 *
 * 这个模板会在插件被启用时输出一行"Hello World!"
 * @author ZeroDegres
 * @returns 你好，世界！模板插件
 */
function createHelloWorldTemplate() {
    return {
        onEnable() {
            Log.clog('Hello World!');
        }
    };
}
/**
 * 插件模板: 铁锈，启动！
 *
 * 这个模板会在游戏开始时输出一行"RustedWarefare, Start!"
 * @author ZeroDegres
 * @returns 铁锈，启动！模板插件
 */
function createGameStartHelloPlugin() {
    return {
        registerEvents() {
            return createEvent({
                registerGameStartEvent() {
                    Log.clog('RustedWarfare, Start!');
                }
            });
        },
    };
}

var templates = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createGameStartHelloPlugin: createGameStartHelloPlugin,
    createHelloWorldTemplate: createHelloWorldTemplate
});

/** 信息输出 */
function info(message) {
    Log.info(message);
}
/** 调试输出 */
function debug(message) {
    Log.debug(message);
}
/** 致命错误输出 */
function fatal(message) {
    Log.fatal(message);
}
/** 警告输出 */
function warn(message) {
    Log.warn(message);
}

var logging = /*#__PURE__*/Object.freeze({
    __proto__: null,
    debug: debug,
    fatal: fatal,
    info: info,
    warn: warn
});

const plugin = createPlugin({});

export { createEvent, createGlobalEvent, createPlugin, plugin as default, event, logging, plugin$1 as plugin, templates };
