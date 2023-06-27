import * as _ from 'lodash'
import { createPlugin } from './plugin'

export {
  createPlugin
}
export * as plugin from './plugin'
export * as templates from './templates'
export * as logging from './logging'

export {
  createEvent
} from './event'
export * as event from './event'

const plugin = createPlugin({})
export default plugin