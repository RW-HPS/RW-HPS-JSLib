import { MapType } from '../util';
import { EventMap, EventType } from './event';
import { GlobalEventMap, GlobalEventType } from './globalEvent';
export interface GlobalEventManage {
    fire(event: GlobalEventType): void;
    listen<T extends GlobalEventType = never>(event: T, callback: <F extends GlobalEventType = never>(v: MapType<F extends never ? T : F, GlobalEventMap>) => void): void;
}
export interface EventManage {
    fire(event: EventType): void;
    listen<T extends EventType>(event: T, callback: <F extends EventType = never>(v: MapType<F extends never ? T : F, EventMap>) => void): void;
}
