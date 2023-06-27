import { AbstractEvent, AbstractEventObjectType } from "java:net.rwhps.server.plugin.event";

export function createEvent(
  impl: AbstractEventObjectType
): AbstractEventObjectType {
  return new (Java.extend(AbstractEvent, impl))
}