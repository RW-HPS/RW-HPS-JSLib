import { Plugin, PluginObjectType } from "java:net.rwhps.server.plugin";

export function createPlugin(impl: PluginObjectType): PluginObjectType {
  return new (Java.extend(Plugin, impl))()
}