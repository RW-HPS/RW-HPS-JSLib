import { Plugin, PluginObjectType } from 'java:net.rwhps.server.plugin';

export function createPlugin(impl: PluginObjectType) {
    return new (Java.extend(Plugin, impl))()
}

export * as templates from './templates'