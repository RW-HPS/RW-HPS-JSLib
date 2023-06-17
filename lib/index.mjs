import { Plugin } from 'java:net.rwhps.server.plugin';
import { Log } from 'java:net.rwhps.server.util.log';

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

function createPlugin(impl) {
    return new (Java.extend(Plugin, impl))();
}

export { createPlugin, templates };
