import { proxy } from '../proxy/index'
import { NetConnectCloseEvent, NetConnectNewEvent, ServerHessLoadEvent, ServerLoadEvent, ServerStartTypeEvent, PlayerBanEvent, PlayerChatEvent, PlayerIpBanEvent, PlayerIpUnBanEvent, PlayerJoinEvent, PlayerOperationUnitEvent, PlayerUnBanEvent, ServerGameOverEvent, ServerGameStartEvent, ServerHessStartPort, PlayerLeaveEvent } from '../javatypes'
import { Plugin } from './data'

export function registerAllEvents(plugin: Plugin, eventManage: unknown) {

  plugin.registerGlobalEvents && plugin.registerGlobalEvents({
    fire(event) {
      switch (event) {
        case 'NetConnectClose':
          return eventManage['fire'](NetConnectCloseEvent)
        case 'NetConnectNew':
          return eventManage['fire'](NetConnectNewEvent)
        case 'ServerHessLoad':
          return eventManage['fire'](ServerHessLoadEvent)
        case 'ServerLoad':
          return eventManage['fire'](ServerLoadEvent)
        case 'ServerStartType':
          return eventManage['fire'](ServerStartTypeEvent)
      }
    },
    listen(event, callback) {
      switch (event) {
        case 'NetConnectClose':
          return eventManage['registerListener'](
            NetConnectCloseEvent,
            (e: JavaObject) => callback<'NetConnectClose'>(proxy(e))
          )
        case 'NetConnectNew':
          return eventManage['registerListener'](
            NetConnectNewEvent,
            (e: JavaObject) => callback<'NetConnectNew'>(proxy(e))
          )
        case 'ServerHessLoad':
          return eventManage['registerListener'](
            ServerHessLoadEvent,
            (e: JavaObject) => callback<'ServerHessLoad'>(proxy(e))
          )
        case 'ServerLoad':
          return eventManage['registerListener'](
            ServerLoadEvent,
            (e: JavaObject) => callback<'ServerLoad'>(proxy(e))
          )
        case 'ServerStartType':
          return eventManage['registerListener'](
            ServerStartTypeEvent,
            (e: JavaObject) => callback<'ServerStartType'>(proxy(e))
          )
      }
    }
  })
  if (plugin.registerEvents) {
    eventManage['registerListener'](
      ServerHessLoadEvent,
      (e: JavaObject) => {
        const eventManage = (e['getEventManage'] as () => unknown)()
        plugin.registerEvents({
          fire(event) {
            switch (event) {
              case 'PlayerBan':
                return eventManage['fire'](PlayerBanEvent)
              case 'PlayerChat':
                return eventManage['fire'](PlayerChatEvent)
              case 'PlayerIpBan':
                return eventManage['fire'](PlayerIpBanEvent)
              case 'PlayerIpUnBan':
                return eventManage['fire'](PlayerIpUnBanEvent)
              case 'PlayerJoin':
                return eventManage['fire'](PlayerJoinEvent)
              case 'PlayerLeave':
                return eventManage['fire'](PlayerJoinEvent)
              case 'PlayerOperationUnit':
                return eventManage['fire'](PlayerOperationUnitEvent)
              case 'PlayerUnBan':
                return eventManage['fire'](PlayerUnBanEvent)
              case 'ServerGameOver':
                return eventManage['fire'](ServerGameOverEvent)
              case 'ServerGameStart':
                return eventManage['fire'](ServerGameStartEvent)
              case 'ServerHessStartPort':
                return eventManage['fire'](ServerHessStartPort)
            }
          },
          listen(event, callback) {
            switch (event) {
              case 'PlayerBan':
                return eventManage['registerListener'](
                  PlayerBanEvent,
                  (e: JavaObject) => callback<'PlayerBan'>(proxy(e))
                )
              case 'PlayerChat':
                return eventManage['registerListener'](
                  PlayerChatEvent,
                  (e: JavaObject) => callback<'PlayerChat'>(proxy(e))
                )
              case 'PlayerIpBan':
                return eventManage['registerListener'](
                  PlayerIpBanEvent,
                  (e: JavaObject) => callback<'PlayerIpBan'>(proxy(e))
                )
              case 'PlayerIpUnBan':
                return eventManage['registerListener'](
                  PlayerIpUnBanEvent,
                  (e: JavaObject) => callback<'PlayerIpUnBan'>(proxy(e))
                )
              case 'PlayerJoin':
                return eventManage['registerListener'](
                  PlayerJoinEvent,
                  (e: JavaObject) => callback<'PlayerJoin'>(proxy(e))
                )
              case 'PlayerLeave':
                return eventManage['registerListener'](
                  PlayerLeaveEvent,
                  (e: JavaObject) => callback<'PlayerLeave'>(proxy(e))
                )
              case 'PlayerOperationUnit':
                return eventManage['registerListener'](
                  PlayerOperationUnitEvent,
                  (e: JavaObject) => callback<'PlayerOperationUnit'>(proxy(e))
                )
              case 'PlayerUnBan':
                return eventManage['registerListener'](
                  PlayerUnBanEvent,
                  (e: JavaObject) => callback<'PlayerUnBan'>(proxy(e))
                )
              case 'ServerGameOver':
                return eventManage['registerListener'](
                  ServerGameOverEvent,
                  (e: JavaObject) => callback<'ServerGameOver'>(proxy(e))
                )
              case 'ServerGameStart':
                return eventManage['registerListener'](
                  ServerGameStartEvent,
                  (e: JavaObject) => callback<'ServerGameStart'>(proxy(e))
                )
              case 'ServerHessStartPort':
                return eventManage['registerListener'](
                  ServerHessStartPort,
                  (e: JavaObject) => callback<'ServerHessStartPort'>(proxy(e))
                )
            }
          }
        })
      }
    )
  }
}