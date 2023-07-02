import { Log } from 'java:net.rwhps.server.util.log'

export function info(message: string) {
  Log.info(message)
}

export function debug(message: string) {
  Log.debug(message)
}

export function fatal(message: string) {
  Log.fatal(message)
}

export function warn(message: string) {
  Log.warn(message)
}