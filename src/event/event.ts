import { GameOverData, GameUnits, PlayerHess } from '../data/index'

export type EventType =
  | 'PlayerBan'
  | 'PlayerChat'
  | 'PlayerIpBan'
  | 'PlayerIpUnBan'
  | 'PlayerJoin'
  | 'PlayerLeave'
  | 'PlayerOperationUnit'
  | 'PlayerUnBan'
  | 'ServerGameOver'
  | 'ServerGameStart'
  | 'ServerHessStartPort'

export type EventMap = [
  ['PlayerBan', PlayerBanData],
  ['PlayerChat', PlayerChatData],
  ['PlayerIpBan', PlayerIpBanData],
  ['PlayerIpUnBan', PlayerIpUnBanData],
  ['PlayerJoin', PlayerJoinData],
  ['PlayerLeave', PlayerLeaveData],
  ['PlayerOperationUnit', PlayerOperationUnitData],
  ['PlayerUnBan', PlayerUnBanData],
  ['ServerGameOver', ServerGameOverData],
  ['ServerGameStart', undefined],
  ['ServerHessStartPort', undefined],
]

export interface PlayerBanData {
  readonly player: PlayerHess
}

export interface PlayerChatData {
  readonly player: PlayerHess
  readonly message: string
}

export interface PlayerIpBanData {
  readonly player: PlayerHess
}

export interface PlayerIpUnBanData {
  readonly player: PlayerHess
}

export interface PlayerJoinData {
  readonly player: PlayerHess
}

export interface PlayerLeaveData {
  readonly player: PlayerHess
}

export interface PlayerOperationUnitData {
  readonly player: PlayerHess
  readonly gameUnits: GameUnits
  readonly x: number
  readonly y: number
  resultStatus: boolean
}

export interface PlayerUnBanData {
  readonly player: PlayerHess
}

export interface ServerGameOverData {
  readonly gameOverData: GameOverData
}