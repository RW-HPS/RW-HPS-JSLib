import {
  PlayerBanEvent,
  PlayerChatEvent,
  PlayerIpBanEvent,
  PlayerIpUnBanEvent,
  PlayerJoinEvent,
  PlayerLeaveEvent,
  PlayerOperationUnitEvent,
  PlayerUnBanEvent,
  ServerGameOverEvent,
} from './event'
import { GameCommandActions, GameInternalUnits, GameOverData } from './game'
import {
  AbstractGameModule,
  HessModuleManage,
  PlayerHess,
  javaObj,
} from './hess'
import { AbstractNetConnectServer, ServerStatus } from './server'
import { ObjectMap, Seq } from './struct'

export function adaptAbstractGameModule(
  obj: JavaInstanceTypeOf<'net.rwhps.server.game.simulation.core.AbstractGameModule'>,
): AbstractGameModule {
  obj
  return {}
}

export function adaptHessModuleManage(
  obj: JavaInstanceTypeOf<'net.rwhps.server.game.HessModuleManage'>,
): HessModuleManage {
  return {
    get hps() {
      return obj.getHps()
    },
  }
}

export function adaptServerGameOverEvent(
  obj: JavaInstanceTypeOf<'net.rwhps.server.game.event.game.ServerGameOverEvent'>,
): ServerGameOverEvent {
  return {
    get gameOverData() {
      return adaptGameOverData(obj.getGameOverData())
    },
  }
}

export function adaptGameOverData(
  obj: JavaInstanceTypeOf<'net.rwhps.server.game.event.game.ServerGameOverEvent$GameOverData'>,
): GameOverData {
  return {
    get gameTime() {
      return obj.getGameTime()
    },
    get allPlayerList() {
      return obj.getAllPlayerList() as unknown as Seq<string>
    },
    get winPlayerList() {
      return obj.getWinPlayerList() as unknown as Seq<string>
    },
    get mapName() {
      return obj.getMapName()
    },
    get playerData() {
      return obj.getPlayerData() as unknown as ObjectMap<
        string,
        ObjectMap<string, number>
      >
    },
    get replayName() {
      return obj.getReplayName()
    },
  }
}

export function adaptPlayerOpeartionUnitEvent(
  obj: JavaInstanceTypeOf<'net.rwhps.server.game.event.game.PlayerOperationUnitEvent'>,
): PlayerOperationUnitEvent {
  return {
    get player() {
      return adaptPlayerHess(obj.getPlayer())
    },
    get gameCommandActions() {
      return adaptGameCommandActions(obj.getGameCommandActions())
    },
    get gameInternalUnits() {
      return adaptGameInternalUnits(obj.getGameInternalUnits())
    },
  }
}

export function adaptPlayerLeaveEvent(
  obj: JavaInstanceTypeOf<'net.rwhps.server.game.event.game.PlayerLeaveEvent'>,
): PlayerLeaveEvent {
  return {
    get player() {
      return adaptPlayerHess(obj.getPlayer())
    },
  }
}

export function adaptPlayerJoinEvent(
  obj: JavaInstanceTypeOf<'net.rwhps.server.game.event.game.PlayerJoinEvent'>,
): PlayerJoinEvent {
  return {
    get player() {
      return adaptPlayerHess(obj.getPlayer())
    },
  }
}

export function adaptPlayerUnBanEvent(
  obj: JavaInstanceTypeOf<'net.rwhps.server.game.event.game.PlayerUnBanEvent'>,
): PlayerUnBanEvent {
  return {
    get player() {
      return adaptPlayerHess(obj.getPlayer())
    },
  }
}

export function adaptPlayerIpUnBanEvent(
  obj: JavaInstanceTypeOf<'net.rwhps.server.game.event.game.PlayerIpUnBanEvent'>,
): PlayerIpUnBanEvent {
  return {
    get player() {
      return adaptPlayerHess(obj.getPlayer())
    },
  }
}

export function adaptPlayerIpBanEvent(
  obj: JavaInstanceTypeOf<'net.rwhps.server.game.event.game.PlayerIpBanEvent'>,
): PlayerIpBanEvent {
  return {
    get player() {
      return adaptPlayerHess(obj.getPlayer())
    },
  }
}

export function adaptPlayerChatEvent(
  obj: JavaInstanceTypeOf<'net.rwhps.server.game.event.game.PlayerChatEvent'>,
): PlayerChatEvent {
  return {
    get player() {
      return adaptPlayerHess(obj.getPlayer())
    },
    get message() {
      return obj.getMessage()
    },
  }
}

export function adaptGameInternalUnits(
  obj: JavaInstanceTypeOf<'net.rwhps.server.game.enums.GameInternalUnits'>,
): GameInternalUnits {
  return obj.name() as GameInternalUnits
}

const JavaGameCommandActions = Java.type(
  'net.rwhps.server.game.enums.GameCommandActions',
)
export function adaptGameCommandActions(
  obj: JavaInstanceTypeOf<'net.rwhps.server.game.enums.GameCommandActions'>,
): GameCommandActions {
  switch (obj) {
    case JavaGameCommandActions.ATTACK:
      return 'attack'
    case JavaGameCommandActions.ATTACKMOVE:
      return 'attackMove'
    case JavaGameCommandActions.BUILD:
      return 'build'
    case JavaGameCommandActions.FOLLOW:
      return 'follow'
    case JavaGameCommandActions.GUARD:
      return 'guard'
    case JavaGameCommandActions.GUARDAT:
      return 'guardAt'
    case JavaGameCommandActions.LOADINTO:
      return 'loadInto'
    case JavaGameCommandActions.LOADUP:
      return 'loadup'
    case JavaGameCommandActions.MOVE:
      return 'move'
    case JavaGameCommandActions.PATROL:
      return 'patrol'
    case JavaGameCommandActions.RECLAIM:
      return 'reclaim'
    case JavaGameCommandActions.REPAIR:
      return 'repair'
    case JavaGameCommandActions.SETPASSIVETARGET:
      return 'setPassiveTarget'
    case JavaGameCommandActions.TOUCHTARGET:
      return 'touchTarget'
    case JavaGameCommandActions.TRIGGERACTION:
      return 'triggerAction'
    case JavaGameCommandActions.TRIGGERACTIONWHENINRANGE:
      return 'triggerActionWhenInRange'
    case JavaGameCommandActions.UNKNOWN:
      return 'unknown'
    case JavaGameCommandActions.UNLOADAT:
      return 'unloadAt'
    default:
      throw new Error(`Unexpected GameCommandActions type: ${obj.toString()}`)
  }
}

const JavaServerStatus = Java.type(
  'net.rwhps.server.net.core.DataPermissionStatus$ServerStatus',
)
export function adaptServerStatus(
  obj: JavaInstanceTypeOf<'net.rwhps.server.net.core.DataPermissionStatus$ServerStatus'>,
): ServerStatus {
  switch (obj) {
    case JavaServerStatus.InitialConnection:
      return 'InitialConnection'
    case JavaServerStatus.CertifiedEnd:
      return 'CertifiedEnd'
    default:
      throw new Error(`Unexpected ServerStatus type: ${obj.toString()}`)
  }
}

export function adaptAbstractNetConnectServer(
  obj: JavaInstanceTypeOf<'net.rwhps.server.net.core.server.AbstractNetConnectServer'>,
): AbstractNetConnectServer {
  return {
    get permissionStatus() {
      return adaptServerStatus(obj.getPermissionStatus())
    },
    get supportedversionBeta() {
      return obj.getSupportedversionBeta()
    },
    get supportedversionGame() {
      return obj.getSupportedversionGame()
    },
    get supportedVersionInt() {
      return obj.getSupportedVersionInt()
    },
    get player() {
      return adaptPlayerHess(obj.getPlayer())
    },
    sendSystemMessage(msg) {
      obj.sendSystemMessage(msg)
    },
    sendChatMessage(msg, sendBy, team) {
      obj.sendChatMessage(msg, sendBy, team)
    },
    sendServerInfo(utilData) {
      obj.sendServerInfo(utilData)
    },
    sendSurrender() {
      obj.sendSurrender()
    },
    sendKick(reason) {
      obj.sendKick(reason)
    },
    sendPing() {
      obj.sendPing()
    },
    sendStartGame() {
      obj.sendStartGame()
    },
    sendErrorPasswd() {
      obj.sendErrorPasswd()
    },
    gameSummon(unit, x, y) {
      obj.gameSummon(unit, x, y)
    },
  }
}

export function adaptPlayerHess(
  obj: JavaInstanceTypeOf<'net.rwhps.server.data.player.PlayerHess'>,
): PlayerHess {
  return {
    [javaObj]: obj,
    get con() {
      return adaptAbstractNetConnectServer(obj.getCon())
    },
    get isAdmin() {
      return obj.isAdmin()
    },
    sendMessage(player, text) {
      obj.sendMessage(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        player[javaObj],
        text,
      )
    },
    sendSystemMessage(text) {
      obj.sendSystemMessage(text)
    },
    sendPopUps(msg, run) {
      obj.sendPopUps(
        msg,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        run,
      )
    },
    kickPlayer(text, time) {
      if (time) {
        obj.kickPlayer(text, time)
      } else {
        obj.kickPlayer(text)
      }
    },
    getinput(input, ...params) {
      return obj.getinput(
        input,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ...params,
      )
    },
  }
}

export function adaptPlayerBanEvent(
  obj: JavaInstanceTypeOf<'net.rwhps.server.game.event.game.PlayerBanEvent'>,
): PlayerBanEvent {
  return {
    get player() {
      return adaptPlayerHess(obj.getPlayer())
    },
  }
}
