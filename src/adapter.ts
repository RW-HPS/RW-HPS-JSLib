import { PlayerBanEvent } from './event'
import { PlayerHess } from './hess'
import { AbstractNetConnectServer, ServerStatus } from './server'

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
      throw new Error(`Unexpected ServerStatusType: ${obj.toString()}`)
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
    get con() {
      return adaptAbstractNetConnectServer(obj.getCon())
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
