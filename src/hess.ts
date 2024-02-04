import { adaptHessModuleManage } from './adapter'

export const HessModuleManage = adaptHessModuleManage(
  Java.type('net.rwhps.server.game.manage.HeadlessModuleManage'),
)
