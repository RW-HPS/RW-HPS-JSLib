import { createPlugin } from 'rw-hps-jslib'

export default createPlugin({
  registerEvents(eventManage) {
    eventManage.registerListener('PlayerChatEvent', (ev) => {
      switch (ev.message) {
        case '1+1':
          ev.player.sendSystemMessage('=2')
          break
        case 'kickme':
          ev.player.kickPlayer('kicked')
          break
      }
    })
  },
})
