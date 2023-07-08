import { ConnectionAgreement, NetType } from '../net/index';
import { EventManage } from './manage';
export type GlobalEventType = 'NetConnectNew' | 'NetConnectClose' | 'ServerHessLoad' | 'ServerLoad' | 'ServerStartType';
export type GlobalEventMap = [
    [
        'NetConnectNew',
        NetConnectNewData
    ],
    [
        'NetConnectClose',
        NetConnectCloseData
    ],
    [
        'ServerHessLoad',
        ServerHessLoadData
    ],
    [
        'ServerLoad',
        undefined
    ],
    [
        'ServerStartType',
        ServerStartData
    ]
];
export interface NetConnectNewData {
    readonly connectionAgreement: ConnectionAgreement;
    readonly result: boolean;
}
export interface NetConnectCloseData {
    readonly connectionAgreement: ConnectionAgreement;
}
export interface ServerHessLoadData {
    readonly loadId: string;
    readonly eventManage: EventManage;
}
export interface ServerStartData {
    readonly serverNetType: NetType;
}
