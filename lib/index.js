import { Plugin } from 'java:net.rwhps.server.plugin';
import { Log } from 'java:net.rwhps.server.util.log';
import { AbstractEvent, AbstractGlobalEvent } from 'java:net.rwhps.server.plugin.event';

function createPlugin(impl) {
    return new (Java.extend(Plugin, impl))();
}

var plugin$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createPlugin: createPlugin
});

function createEvent(impl) {
    return new (Java.extend(AbstractEvent, impl));
}
function createGlobalEvent(impl) {
    return new (Java.extend(AbstractGlobalEvent, impl));
}

var event = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createEvent: createEvent,
    createGlobalEvent: createGlobalEvent
});

function createHelloWorldPlugin() {
    return createPlugin({
        onEnable() {
            Log.clog('Hello World!');
        }
    });
}
function createGameStartHelloPlugin() {
    return createPlugin({
        registerEvents() {
            return createEvent({
                registerGameStartEvent() {
                    Log.clog('RustedWarfare, Start!');
                }
            });
        },
    });
}

var templates = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createGameStartHelloPlugin: createGameStartHelloPlugin,
    createHelloWorldPlugin: createHelloWorldPlugin
});

function info(message) {
    Log.info(message);
}
function debug(message) {
    Log.debug(message);
}
function fatal(message) {
    Log.fatal(message);
}
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

export { createEvent, createPlugin, plugin as default, event, logging, plugin$1 as plugin, templates };
