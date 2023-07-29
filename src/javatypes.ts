export const Plugin = Java.type('net.rwhps.server.plugin.Plugin')

// commands
export const CommandHandler = Java.type('net.rwhps.server.util.game.CommandHandler')

// global event
export const NetConnectCloseEvent = Java.type('net.rwhps.server.game.event.global.NetConnectCloseEvent')
export const NetConnectNewEvent = Java.type('net.rwhps.server.game.event.global.NetConnectNewEvent')
export const ServerHessLoadEvent = Java.type('net.rwhps.server.game.event.global.ServerHessLoadEvent')
export const ServerLoadEvent = Java.type('net.rwhps.server.game.event.global.ServerLoadEvent')
export const ServerStartTypeEvent = Java.type('net.rwhps.server.game.event.global.ServerStartTypeEvent')
export const AbstractGlobalEvent = Java.type('net.rwhps.server.game.event.AbstractGlobalEvent')

// event
export const PlayerBanEvent = Java.type('net.rwhps.server.game.event.game.PlayerBanEvent')
export const PlayerChatEvent = Java.type('net.rwhps.server.game.event.game.PlayerChatEvent')
export const PlayerIpBanEvent = Java.type('net.rwhps.server.game.event.game.PlayerIpBanEvent')
export const PlayerIpUnBanEvent = Java.type('net.rwhps.server.game.event.game.PlayerIpUnBanEvent')
export const PlayerJoinEvent = Java.type('net.rwhps.server.game.event.game.PlayerJoinEvent')
export const PlayerLeaveEvent = Java.type('net.rwhps.server.game.event.game.PlayerLeaveEvent')
export const PlayerOperationUnitEvent = Java.type('net.rwhps.server.game.event.game.PlayerOperationUnitEvent')
export const PlayerUnBanEvent = Java.type('net.rwhps.server.game.event.game.PlayerUnBanEvent')
export const ServerGameOverEvent = Java.type('net.rwhps.server.game.event.game.ServerGameOverEvent')
export const ServerGameStartEvent = Java.type('net.rwhps.server.game.event.game.ServerGameStartEvent')
export const ServerHessStartPort = Java.type('net.rwhps.server.game.event.game.ServerHessStartPort')

// data
export const PlayerHess = Java.type('net.rwhps.server.data.player.PlayerHess')
export const AbstractPlayerData = Java.type('net.rwhps.server.game.simulation.core.AbstractPlayerData')
export const GameOverData = Java.type('net.rwhps.server.data.event.GameOverData')
export const GameVersionRelay = Java.type('net.rwhps.server.net.netconnectprotocol.realize.GameVersionRelay')

// net
export const Packet = Java.type('net.rwhps.server.io.packet.Packet')
export const ConnectionAgreement = Java.type('net.rwhps.server.net.core.ConnectionAgreement')
export const AbstractNetConnectServer = Java.type('net.rwhps.server.net.core.server.AbstractNetConnectServer')

// struct
export const Seq = Java.type('net.rwhps.server.struct.Seq')
export const ObjectMap = Java.type('net.rwhps.server.struct.ObjectMap')

// enum
export const ServerStatus = Java.type('net.rwhps.server.net.core.DataPermissionStatus$ServerStatus')
export const GameUnits = Java.type('net.rwhps.server.game.GameUnitType$GameUnits')
export const NetType = Java.type('net.rwhps.server.net.core.IRwHps$NetType')
export const CommandRunner = Java.type('net.rwhps.server.util.game.CommandHandler.CommandRunner')