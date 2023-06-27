import { Log } from 'java:net.rwhps.server.util.log';
import { createPlugin } from './plugin';

export function createHelloWorldPlugin() {
  return createPlugin({
    onEnable() {
      Log.clog('Hello World!')
    }
  })
}