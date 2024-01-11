import { PlayerHess } from './hess'

export interface PlayerBanEvent {
  get player(): PlayerHess
}

export interface PlayerChatEvent {
  get player(): PlayerHess
  get message(): string
}

export interface PlayerIpBanEvent {
  get player(): PlayerHess
}

export interface PlayerIpUnBanEvent {
  get player(): PlayerHess
}

export interface PlayerJoinEvent {
  get player(): PlayerHess
}

export interface PlayerLeaveEvent {
  get player(): PlayerHess
}

export interface PlayerUnBanEvent {
  get player(): PlayerHess
}

export interface Events {
  PlayerBanEvent: PlayerBanEvent
  PlayerChatEvent: PlayerChatEvent
  PlayerIpBanEvent: PlayerIpBanEvent
  PlayerIpUnBanEvent: PlayerIpUnBanEvent
  PlayerJoinEvent: PlayerJoinEvent
  PlayerLeaveEvent: PlayerLeaveEvent
  PlayerUnBanEvent: PlayerUnBanEvent
}

export type EventType = keyof Events

export interface EventManage {
  registerListener<T extends EventType>(
    type: T,
    consumer: (v: Events[T]) => void,
  ): void
}
