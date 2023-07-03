import { AbstractEventObjectType, AbstractGlobalEventObjectType } from 'java:net.rwhps.server.plugin.event';
/**
 * 创建一个能被 RW-HPS 加载的标准事件
 * @author ZeroDegress
 * @param impl 事件具体实现
 * @returns 标准事件
 */
export declare function createEvent(impl: AbstractEventObjectType): AbstractEventObjectType;
/**
 * 创建一个能被 RW-HPS 加载的标准全局事件
 * @author ZeroDegress
 * @param impl 全局事件具体实现
 * @returns 标准全局事件
 */
export declare function createGlobalEvent(impl: AbstractGlobalEventObjectType): AbstractGlobalEventObjectType;
