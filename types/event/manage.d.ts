import { MapType } from '../util';
import { EventMap, EventType } from './event';
import { GlobalEventMap, GlobalEventType } from './globalEvent';
export interface GlobalEventManage {
    fire(event: GlobalEventType): void;
    listen<T extends GlobalEventType>(event: T, callback: (v: MapType<T, GlobalEventMap>) => void): void;
}
export interface EventManage {
    fire(event: EventType): void;
    listen<T extends EventType>(event: T, callback: (v: MapType<T, EventMap>) => void): void;
}
