import { GameOverData, PlayerHess } from '../data/index';
export type EventType = 'PlayerBan' | 'PlayerChat' | 'PlayerIpBan' | 'PlayerIpUnBan' | 'PlayerJoin' | 'PlayerLeave' | 'PlayerOperationUnit' | 'PlayerUnBan' | 'ServeGameOver' | 'ServerGameStart' | 'ServerHessStartPort';
export type EventMap = [
    [
        'PlayerBan',
        PlayerBanData
    ],
    [
        'PlayerChat',
        PlayerChatData
    ],
    [
        'PlayerIpBan',
        PlayerIpBanData
    ],
    [
        'PlayerIpUnBan',
        PlayerIpUnBanData
    ],
    [
        'PlayerJoin',
        PlayerJoinData
    ],
    [
        'PlayerLeave',
        PlayerLeaveData
    ],
    [
        'PlayerOperationUnit',
        PlayerOperationUnitData
    ],
    [
        'PlayerUnBan',
        PlayerUnBanData
    ],
    [
        'ServerGameOver',
        ServerGameOverData
    ],
    [
        'ServerGameStart',
        undefined
    ],
    [
        'ServerHessStartPort',
        undefined
    ]
];
export interface PlayerBanData {
    readonly player: PlayerHess;
}
export interface PlayerChatData {
    readonly player: PlayerHess;
    readonly message: string;
}
export interface PlayerIpBanData {
    readonly player: PlayerHess;
}
export interface PlayerIpUnBanData {
    readonly player: PlayerHess;
}
export interface PlayerJoinData {
    readonly player: PlayerHess;
}
export interface PlayerLeaveData {
    readonly player: PlayerHess;
}
export type GameUnits = 'extractor' | 'landFactory' | 'airFactory' | 'seaFactory' | 'commandCenter' | 'turret' | 'antiAirTurret' | 'builder' | 'tank' | 'hoverTank' | 'artillery' | 'helicopter' | 'airShip' | 'gunShip' | 'missileShip' | 'gunBoat' | 'megaTank' | 'laserTank' | 'hovercraft' | 'ladybug' | 'battleShip' | 'tankDestroyer' | 'heavyTank' | 'heavyHoverTank' | 'laserDefence' | 'dropship' | 'tree' | 'repairbay' | 'NukeLaucher' | 'AntiNukeLaucher' | 'mammothTank' | 'experimentalTank' | 'experimentalLandFactory' | 'crystalResource' | 'wall_v' | 'fabricator' | 'attackSubmarine' | 'builderShip' | 'amphibiousJet' | 'supplyDepot' | 'experimentalHoverTank' | 'turret_artillery' | 'turret_flamethrower' | 'fogRevealer' | 'spreadingFire' | 'antiAirTurretT2' | 'turretT2' | 'turretT3' | 'damagingBorder' | 'zoneMarker' | 'editorOrBuilder' | 'UNKNOWN';
export interface PlayerOperationUnitData {
    readonly player: PlayerHess;
    readonly gameUnits: GameUnits;
    readonly x: number;
    readonly y: number;
    resultStatus: boolean;
}
export interface PlayerUnBanData {
    readonly player: PlayerHess;
}
export interface ServerGameOverData {
    readonly gameOverData: GameOverData;
}
