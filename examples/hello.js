import { createPlugin, Log } from 'rw-hps-jslib'

export default createPlugin({
  init() {
    Log.clog('Hello World!')
  },
  onDisable() {
    Log.clog('Good Bye World!')
  },
})
