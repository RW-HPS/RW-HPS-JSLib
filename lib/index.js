const Plugin = Java.type('net.rwhps.server.plugin.Plugin');
// global event
const NetConnectCloseEvent = Java.type('net.rwhps.server.game.event.global.NetConnectCloseEvent');
const NetConnectNewEvent = Java.type('net.rwhps.server.game.event.global.NetConnectNewEvent');
const ServerHessLoadEvent = Java.type('net.rwhps.server.game.event.global.ServerHessLoadEvent');
const ServerLoadEvent = Java.type('net.rwhps.server.game.event.global.ServerLoadEvent');
const ServerStartTypeEvent = Java.type('net.rwhps.server.game.event.global.ServerStartTypeEvent');
const AbstractGlobalEvent = Java.type('net.rwhps.server.game.event.AbstractGlobalEvent');
// event
const PlayerBanEvent = Java.type('net.rwhps.server.game.event.game.PlayerBanEvent');
const PlayerChatEvent = Java.type('net.rwhps.server.game.event.game.PlayerChatEvent');
const PlayerIpBanEvent = Java.type('net.rwhps.server.game.event.game.PlayerIpBanEvent');
const PlayerIpUnBanEvent = Java.type('net.rwhps.server.game.event.game.PlayerIpUnBanEvent');
const PlayerJoinEvent = Java.type('net.rwhps.server.game.event.game.PlayerJoinEvent');
const PlayerLeaveEvent = Java.type('net.rwhps.server.game.event.game.PlayerLeaveEvent');
const PlayerOperationUnitEvent = Java.type('net.rwhps.server.game.event.game.PlayerOperationUnitEvent');
const PlayerUnBanEvent = Java.type('net.rwhps.server.game.event.game.PlayerUnBanEvent');
const ServerGameOverEvent = Java.type('net.rwhps.server.game.event.game.ServerGameOverEvent');
const ServerGameStartEvent = Java.type('net.rwhps.server.game.event.game.ServerGameStartEvent');
const ServerHessStartPort = Java.type('net.rwhps.server.game.event.game.ServerHessStartPort');
// net
const Packet = Java.type('net.rwhps.server.io.packet.Packet');
const ConnectionAgreement = Java.type('net.rwhps.server.net.core.ConnectionAgreement');

var javatypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AbstractGlobalEvent: AbstractGlobalEvent,
    ConnectionAgreement: ConnectionAgreement,
    NetConnectCloseEvent: NetConnectCloseEvent,
    NetConnectNewEvent: NetConnectNewEvent,
    Packet: Packet,
    PlayerBanEvent: PlayerBanEvent,
    PlayerChatEvent: PlayerChatEvent,
    PlayerIpBanEvent: PlayerIpBanEvent,
    PlayerIpUnBanEvent: PlayerIpUnBanEvent,
    PlayerJoinEvent: PlayerJoinEvent,
    PlayerLeaveEvent: PlayerLeaveEvent,
    PlayerOperationUnitEvent: PlayerOperationUnitEvent,
    PlayerUnBanEvent: PlayerUnBanEvent,
    Plugin: Plugin,
    ServerGameOverEvent: ServerGameOverEvent,
    ServerGameStartEvent: ServerGameStartEvent,
    ServerHessLoadEvent: ServerHessLoadEvent,
    ServerHessStartPort: ServerHessStartPort,
    ServerLoadEvent: ServerLoadEvent,
    ServerStartTypeEvent: ServerStartTypeEvent
});

const javaObjSymbol = Symbol('javaObj');
function simpleProxy(options) {
    return (obj) => {
        return new Proxy(obj, {
            get(target, property) {
                switch (property) {
                    case javaObjSymbol:
                        return obj;
                    default:
                        return getGet(obj, property);
                }
            },
            set(target, property, newValue) {
                switch (property) {
                    case javaObjSymbol:
                        return false;
                    default:
                        return setSet(obj, property, newValue);
                }
            },
            ownKeys() {
                const keys = [...Object.keys(obj)];
                keys.forEach(k => {
                    if ((k.startsWith('get') || k.startsWith('set')) && typeof obj[k] == 'function') {
                        const rest = k.replace(/^get|set/, '');
                        if (rest.length > 0) {
                            const nKey = `${rest.slice(0, 1).toLowerCase()}${rest.slice(1)}`;
                            if (!keys.includes(rest)) {
                                keys.push(nKey);
                            }
                        }
                    }
                });
                return keys;
            },
            ...options
        });
    };
}
function setSet(obj, property, newValue) {
    if (typeof property == 'string') {
        if (property.length == 0) {
            obj[property] = (value2java);
            return true;
        }
        const setter = `set${property.slice(0, 1).toUpperCase()}${property.slice(1)}`;
        if (setter in obj
            && typeof obj[setter] == 'function') {
            obj[setter](...args2java(newValue));
            return true;
        }
    }
    else {
        obj[property] = value2java(newValue);
        return true;
    }
}
function getGet(obj, property) {
    if (typeof property == 'string') {
        if (property.length == 0) {
            return proxy(obj[property]);
        }
        const getter = `get${property.slice(0, 1).toUpperCase()}${property.slice(1)}`;
        if (getter in obj
            && typeof obj[getter] == 'function') {
            // 如果找到对应getter方法，代理getter
            return proxy(obj[getter]());
        }
        else if (typeof obj[property] == 'function') {
            // 如果是函数，转换为代理函数
            return (...args) => {
                const r = obj[property](...args2java(...args));
                return proxy(r);
            };
        }
        else {
            return proxy(obj[property]);
        }
    }
    else {
        // 考虑Symbol
        if (typeof obj[property] == 'function') {
            // 如果是函数，转换为代理函数
            return (...args) => proxy(obj[property](...args2java(...args)));
        }
        else {
            return proxy(obj[property]);
        }
    }
}
function value2java(v) {
    if (v === null
        || v === undefined
        || typeof v != 'object') {
        return v;
    }
    return javaObjSymbol in v ? v[javaObjSymbol] : v;
}
function args2java(...args) {
    return args.map(arg => {
        if (arg === null
            || arg === undefined
            || typeof arg != 'object') {
            return arg;
        }
        return javaObjSymbol in arg ? arg[javaObjSymbol] : arg;
    });
}
const proxyNetConnectCloseData = simpleProxy();
const proxyConnectionAgreement = simpleProxy();
const proxyPacket = simpleProxy();
const proxyNetConnectNewData = simpleProxy();
const proxyServerHessLoadData = simpleProxy();
const proxyServerStartData = simpleProxy();
const proxyRuleMap = [
    [NetConnectCloseEvent, proxyNetConnectCloseData],
    [Packet, proxyPacket],
    [NetConnectNewEvent, proxyNetConnectNewData],
    [ConnectionAgreement, proxyConnectionAgreement],
    [ServerHessLoadEvent, proxyServerHessLoadData],
    [ServerStartTypeEvent, proxyServerStartData]
];
function proxy(obj) {
    if (obj === null
        || obj === undefined
        || typeof obj != 'object') {
        return obj;
    }
    if ('getClass' in obj && typeof obj.getClass == 'function') {
        const o = obj;
        for (const [cls, pro] of proxyRuleMap) {
            if (o.getClass().equals(cls.class)) {
                return pro(o);
            }
        }
    }
    return obj;
}

function createPlugin(plugin) {
    return new (Java.extend(Plugin))({
        onEnable: plugin.onEnable,
        init: plugin.init,
        onDisable: plugin.onDisable,
        registerGlobalEvents(eventManage) {
            plugin.registerGlobalEvents && plugin.registerGlobalEvents({
                fire(event) {
                    switch (event) {
                        case 'NetConnectClose':
                            return eventManage['fire'](NetConnectCloseEvent);
                        case 'NetConnectNew':
                            return eventManage['fire'](NetConnectNewEvent);
                        case 'ServerHessLoad':
                            return eventManage['fire'](ServerHessLoadEvent);
                        case 'ServerLoad':
                            return eventManage['fire'](ServerLoadEvent);
                        case 'ServerStartType':
                            return eventManage['fire'](ServerStartTypeEvent);
                    }
                },
                listen(event, callback) {
                    switch (event) {
                        case 'NetConnectClose':
                            return eventManage['registerListener'](NetConnectCloseEvent, (e) => callback(proxy(e)));
                        case 'NetConnectNew':
                            return eventManage['registerListener'](NetConnectNewEvent, (e) => callback(proxy(e)));
                        case 'ServerHessLoad':
                            return eventManage['registerListener'](ServerHessLoadEvent, (e) => callback(proxy(e)));
                        case 'ServerLoad':
                            return eventManage['registerListener'](ServerLoadEvent, (e) => callback(proxy(e)));
                        case 'ServerStartType':
                            return eventManage['registerListener'](ServerStartTypeEvent, (e) => callback(proxy(e)));
                    }
                }
            });
        }
    });
}

var index$4 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var index$3 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var handler = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var index$2 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var index = new (Java.extend(Plugin))({
    onEnable() {
        console.log('JSLib已加载！');
    }
});

export { javatypes as JavaTypes, args2java, createPlugin, index$2 as data, index as default, index$4 as event, handler, index$1 as io, index$3 as net, proxy, value2java };
