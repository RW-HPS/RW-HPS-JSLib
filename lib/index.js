import { Plugin } from 'java:net.rwhps.server.plugin';
import { Log } from 'java:net.rwhps.server.util.log';
import { AbstractEvent } from 'java:net.rwhps.server.plugin.event';

function createPlugin(impl) {
    return new (Java.extend(Plugin, impl))();
}

var plugin$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createPlugin: createPlugin
});

function createHelloWorldPlugin() {
    return createPlugin({
        onEnable() {
            Log.clog('Hello World!');
        }
    });
}

var templates = /*#__PURE__*/Object.freeze({
    __proto__: null,
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

function createEvent(impl) {
    return new (Java.extend(AbstractEvent, impl));
}

var event = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createEvent: createEvent
});

const plugin = createPlugin({});

export { createEvent, createPlugin, plugin as default, event, logging, plugin$1 as plugin, templates };
