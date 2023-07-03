import { createPlugin } from './plugin'

export * as plugin from './plugin'
export {
  createPlugin
}
export * as templates from './templates'
export * as logging from './logging'

export * as event from './event'
export {
  createEvent,
  createGlobalEvent,
} from './event'

const plugin = createPlugin({})
export default plugin