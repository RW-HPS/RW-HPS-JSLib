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
      function invoke(event: JavaType) {
        return eventManage['registerListener'](
          event,
          (e: JavaObject) => callback(proxy(e))
        )
      }
      switch (event) {
        case 'NetConnectClose':
          return invoke(NetConnectCloseEvent)
        case 'NetConnectNew':
          return invoke(NetConnectNewEvent)
        case 'ServerHessLoad':
          return invoke(ServerHessLoadEvent)
        case 'ServerLoad':
          return invoke(ServerLoadEvent)
        case 'ServerStartType':
          return invoke(ServerStartTypeEvent)
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
            function invoke(event: JavaType) {
              return eventManage['registerListener'](
                event,
                (e: JavaObject) => callback(proxy(e))
              )
            }
            switch (event) {
              case 'PlayerBan':
                return invoke(PlayerBanEvent)
              case 'PlayerChat':
                return invoke(PlayerChatEvent)
              case 'PlayerIpBan':
                return invoke(PlayerIpBanEvent)
              case 'PlayerIpUnBan':
                return invoke(PlayerIpUnBanEvent)
              case 'PlayerJoin':
                return invoke(PlayerJoinEvent)
              case 'PlayerLeave':
                return invoke(PlayerLeaveEvent)
              case 'PlayerOperationUnit':
                return invoke(PlayerOperationUnitEvent)
              case 'PlayerUnBan':
                return invoke(PlayerUnBanEvent)
              case 'ServerGameOver':
                return invoke(ServerGameOverEvent)
              case 'ServerGameStart':
                return invoke(ServerGameStartEvent)
              case 'ServerHessStartPort':
                return invoke(ServerHessStartPort)
            }
          }
        })
      }
    )
  }
}