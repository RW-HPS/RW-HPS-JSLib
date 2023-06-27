/// <reference path="../src/graaljs.d.ts" />
import { createPlugin } from './plugin';
export { createPlugin };
export * as plugin from './plugin';
export * as templates from './templates';
export * as logging from './logging';
export { createEvent } from './event';
export * as event from './event';
declare const plugin: import("java:net.rwhps.server.plugin").PluginObjectType;
export default plugin;
