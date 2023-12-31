import { EventManage } from '../event/manage'
import { CompressOutputStream } from '../io/index'
import { ServerStatus, Packet } from '../net/index'
import { defaultProxy } from '../proxy/util'
import { ObjMap, SeqArray } from '../struct'


export interface GameOverData {
  readonly gameTime: number
  readonly allPlayerList: SeqArray<string>
  readonly winPlayerList: SeqArray<string>
  readonly mapName: string
  readonly playerData: ObjMap<string, ObjMap<string, string>>
  readonly replayName: string
  toString(): string
}

// TODO
export interface I18NBundle {
  _
}



export interface PlayerHess {
  con: AbstractNetConnectServer | undefined
  readonly i18NBundle: I18NBundle
  playerPrivateData: AbstractPlayerData
  isAdmin: boolean
  autoAdmin: boolean
  superAdmin: boolean
  site: AbstractPlayerData['site']
  team: AbstractPlayerData['team']
  lastMoveTime: number
  muteTime: number
  kickTime: number
  timeTemp: number
  lastMessageTime: number
  lastSentMessage: string
  noSay: boolean
  credits: AbstractPlayerData['credits']
  startUnit: AbstractPlayerData['startUnit']
  readonly survive: AbstractPlayerData['survive']
  readonly unitsKilled: AbstractPlayerData['unitsKilled']
  readonly buildingsKiled: AbstractPlayerData['buildingsKilled']
  readonly experimentalsKilled: AbstractPlayerData['experimentalsKilled']
  readonly unitsLost: AbstractPlayerData['unitsLost']
  readonly buildingsLost: AbstractPlayerData['buildingsLost']
  readonly name: AbstractPlayerData['name']
  readonly connectHhexID: AbstractPlayerData['connectHexID']
  readonly statusData: Record<string, number>
  updateDate(): void
  sendSystemMessage(text: string): void
  sendMessage(player: PlayerHess, text: string): void
  sendPopUps(msg: string, run: (v: string) => void): void
  sync(): void
  kickPlayer(text: string, time?: number): void
  getinput(input: string, ...params: unknown[]): string
  addData<T>(dataName: string, value: T): void
  getData<T>(dataName: string): T | undefined
  getData<T>(dataName: string, defValue: T): T | undefined
  getData<T>(dataName: string, defProv: () => T): T
  removeData(dataName: string): void
  playerJumpsToAnotherServer(ip: string, port?: number): void
  clear(): void
  equals(): boolean
  hashCode(): number
}

export interface AbstractPlayerData {
  updateDate(): void

  readonly survive: boolean
  /** 单位击杀数 */
  readonly unitsKilled: number
  /** 建筑毁灭数 */
  readonly buildingsKilled: number
  /** 单实验单位击杀数 */
  readonly experimentalsKilled: number
  /** 单位被击杀数 */
  readonly unitsLost: number
  /** 建筑被毁灭数 */
  readonly buildingsLost: number
  /** 单实验单位被击杀数 */
  readonly experimentalsLost: number

  credits: number

  readonly name: string
  readonly connectHexID: string
  site: number
  team: number
  startUnit: number
  color: number
}

export interface AbstractNetConnectServer {
  readonly permissionStatus: ServerStatus
  readonly supportedversionBeta: boolean
  readonly supportedversionGame: string
  readonly supportedVersionInt: number

  readonly player: PlayerHess

  sendSystemMessage(msg: string): void
  sendChatMessage(msg: string, sendBy: string, team: number): void
  sendServerInfo(unitData: boolean): void
  sendTeamData(gzip: CompressOutputStream): void
  sendSurrender(): void
  sendKick(reason: string): void
  sendPing(): void
  sendStartGame(): void
  sendErrorPasswd(): void
  sendGameSave(packet: Packet): void
  receiveChat(packet: Packet): void
  receiveCommand(packet: Packet): void
  receiveCheckPacket(packet: Packet): void
  getGameSaveData(packet: Packet): void
  getPlayerInfo(packet: Packet): void
  registerConnection(packet: Packet): void
  gameSummon(unit: string, x: number, y: number): void
  reconnect(): void
  sync(fastSync?: boolean): void
  sendRelayServerType(msg: string, run?: (v: string) => void): void
}

export const HessModuleManage = 
  defaultProxy(
    Java.type('net.rwhps.server.game.HessModuleManage') as unknown as JavaObject
  ) as {
  hps?: AbstractGameModule
  hpsLoader?: string
}

//TODO
export interface AbstractGameModule {
  readonly useClassLoader: unknown // ClassLoader

  readonly eventManage: EventManage

  readonly gameHessData: unknown // AbstractGameHessData
  readonly gameNet: unknown // AbstractGameNet
  readonly gameUnitData: unknown // AbstractGameUnitData
  readonly gameFast: unknown // AbstractGameFast

  readonly gameData: unknown //AbstractGameLinkFunction
  readonly gameDataLink: unknown // AbstractGameLinkData

  readonly room: ServerRoom
}

//TODO
export interface ServerRoom {
  roomID?: string
  readonly call: unknown // CallHess
  readonly playerManage: PlayerHessManage
  isStartGame: boolean
  startTime: number
  endTime: number
  isAfk: boolean
  flagData: unknown // ServerCacheFlag
  forceReturn: boolean
  checkGameStatusFlag: boolean
  mapName: string
  replayFileName: string
  closeServer(): void
  startServer(): void
}

//TODO
export interface PlayerHessManage {
  readonly playerGroup: SeqArray<PlayerHess>
  readonly playerAll: SeqArray<PlayerHess>
  findPlayer(writeConsole: (v: string) => void, findIn: string): PlayerHess | null
}

export type GameInternalUnits =
  | 'extractor'
  | 'landFactory'
  | 'airFactory'
  | 'seaFactory'
  | 'commandCenter'
  | 'turret'
  | 'antiAirTurret'
  | 'builder'
  | 'tank'
  | 'hoverTank'
  | 'artillery'
  | 'helicopter'
  | 'airShip'
  | 'gunShip'
  | 'missileShip'
  | 'gunBoat'
  | 'megaTank'
  | 'laserTank'
  | 'hovercraft'
  | 'ladybug'
  | 'battleShip'
  | 'tankDestroyer'
  | 'heavyTank'
  | 'heavyHoverTank'
  | 'laserDefence'
  | 'dropship'
  | 'tree'
  | 'repairbay'
  | 'NukeLaucher'
  | 'AntiNukeLaucher'
  | 'mammothTank'
  | 'experimentalTank'
  | 'experimentalLandFactory'
  | 'crystalResource'
  | 'wall_v'
  | 'fabricator'
  | 'attackSubmarine'
  | 'builderShip'
  | 'amphibiousJet'
  | 'supplyDepot'
  | 'experimentalHoverTank'
  | 'turret_artillery'
  | 'turret_flamethrower'
  | 'fogRevealer'
  | 'spreadingFire'
  | 'antiAirTurretT2'
  | 'turretT2'
  | 'turretT3'
  | 'damagingBorder'
  | 'zoneMarker'
  | 'editorOrBuilder'
  | 'UNKNOWN'