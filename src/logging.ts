import { Log } from 'java:net.rwhps.server.util.log'

/** 信息输出 */
export function info(message: string) {
  Log.info(message)
}

/** 调试输出 */
export function debug(message: string) {
  Log.debug(message)
}

/** 致命错误输出 */
export function fatal(message: string) {
  Log.fatal(message)
}

/** 警告输出 */
export function warn(message: string) {
  Log.warn(message)
}