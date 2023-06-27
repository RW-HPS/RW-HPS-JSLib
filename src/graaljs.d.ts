declare type ExtendableJavaClass<ObjectType, NewerType> = {
    /**
     *  类型推断辅助属性，不要使用，恒为空值
     *  @deprecated
     */
    _?: (_: [ObjectType, NewerType]) => never,
}

declare type Newer<T> = {
    new (): T
}

declare type Null = null | undefined

declare module 'java:net.rwhps.server.struct' {
    class Seq<T> implements Iterable<T> {
        constructor(capacity: number)
        constructor(capacity: number, threadSafety: boolean)
        constructor(array: T[])
        constructor(array: T[], threadSafety: boolean)
        [Symbol.iterator](): Iterator<T>
    }

    class ObjectMapEntry<K, V> {
        key: K
        value: V
        toString(): string
    }

    class ObjectMap<K, V> implements Iterable<ObjectMapEntry<K, V>> {
        //TODO
        [Symbol.iterator](): Iterator<ObjectMapEntry<K, V>>
    }

    class OrderedMap<K, V> extends ObjectMap<K, V> {
        //TODO
    }

    class IntMap<V> {
        //TODO
    }
    //TODO
}

declare module 'java:net.rwhps.server.util' {
    class PacketType {
        //TODO
    }
}

declare module 'java:net.rwhps.server.util.log' {
    namespace Log {
        const errorDispose: unknown
        function set(log: string): void
        function setCopyPrint(system: boolean): void
        function skipping(e: unknown): void
        function skipping(tag: unknown, e: unknown): void
        function fatal(e: unknown): void
        function fatal(tag: unknown, e: unknown): void
        function error(e: unknown): void
        function error(tag: unknown, e: unknown): void
        function warn(e: unknown): void
        function warn(tag: unknown, e: unknown): void
        function info(e: unknown): void
        function info(tag: unknown, e: unknown): void
        function debug(e: unknown): void
        function debug(tag: unknown, e: unknown): void
        function all(e: unknown): void
        function all(tag: unknown, e: unknown): void
        function clog(text: string): void
        function clog(text: string, ...obj: unknown[]): void
        function testPrint(object: unknown): void
        function savelog(): void
        //TODO
    }
}

declare module 'java:net.rwhps.server.util.game' {
    import { Seq } from 'java:net.rwhps.server.struct'
    import { Cons } from 'java:net.rwhps.server.func'

    class CommandHandler {
        constructor(prefix: string)
        setPrefix(prefix: string): void
        handleMessage(message: string): void
        handleMessage(message: string, params: unknown): void
        removeCommand(text: string): void
        register<T>(
            text: string, 
            description: string, 
            runner: CommandRunner<T>,
        ): Command
        register<T>(
            text: string,
            params: string,
            description: string, 
            runner: CommandRunner<T>,
        ): Command
        register(
            text: string, 
            description: string, 
            runner: Cons<string[]>,
        ): Command
        register(
            text: string, 
            params: string, 
            description: string, 
            runner: Cons<string[]>,
        ): Command
        getCommandList(): Seq<Command[]>
    }

    class CommandResponse {
        readonly type: ResponseType
        readonly command: Command
        readonly runCommand: string
        constructor(
            type: ResponseType, 
            command: Command, 
            runCommand: string
        )
    }

    enum ResponseType {
        noCommand, 
        unknownCommand, 
        fewArguments, 
        manyArguments, 
        valid,
    }

    class CommandParam {
        readonly name: string
        readonly optional: boolean
        readonly variadic: boolean
        constructor(
            name: string, 
            optional: boolean, 
            variadic: boolean
        )
    }

    class Command {
        readonly text: string
        readonly paramText: string
        readonly description: string
        readonly params: CommandParam[]
        constructor(
            text: string, 
            paramText: string, 
            description: string, 
            runner: CommandRunner<unknown>
        )
    }

    type CommandRunner<T> = (args: string[], parameter: T) => void
}

declare module 'java:net.rwhps.server.plugin' {
    import { CommandHandler } from 'java:net.rwhps.server.util.game'
    import { AbstractEventType, AbstractGlobalEventType } from 'java:net.rwhps.server.plugin.event'

    type PluginObjectType = {
        init?(): void,
        onEnable?(): void,
        registerCoreCommands?(handler: CommandHandler): void,
        registerServerCommands?(handler: CommandHandler): void,
        registerRelayCommands?(handler: CommandHandler): void,
        registerServerClientCommands?(handler: CommandHandler): void,
        registerRelayClientCommands?(handler: CommandHandler): void,
        registerEvents?(): AbstractEventType | Null,
        registerGlobalEvents?(): AbstractGlobalEventType | Null,
        onDisable?(): void,
    }
    type PluginNewerType = {new (): PluginObjectType}
    type PluginType = ExtendableJavaClass<
        PluginObjectType,
        PluginNewerType
    >
    const Plugin: PluginType
}

declare module 'java:net.rwhps.server.plugin.event' {
    import { AbstractPlayerObjectType } from 'java:net.rwhps.server.data.player'
    import { GameOverData } from 'java:net.rwhps.server.data.event'
    import { GameActions, GameUnits } from 'java:net.rwhps.server.game'
    import { NetType, ConnectionAgreement } from 'java:net.rwhps.server.net.core'

    type AbstractEventNewerType = Newer<AbstractEventObjectType>
    type AbstractEventObjectType = {
        registerServerHessStartPort?(): void;
        registerPlayerJoinEvent?(player: AbstractPlayerObjectType): void;
        registerPlayerLeaveEvent?(player: AbstractPlayerObjectType): void;
        registerPlayerChatEvent?(player: AbstractPlayerObjectType, message: String): void;
        registerGameStartEvent?(): void;
        registerGameOverEvent?(gameOverData?: GameOverData): void;
        registerPlayerBanEvent?(player: AbstractPlayerObjectType): void;
        registerPlayerUnbanEvent?(player: AbstractPlayerObjectType): void;
        registerPlayerIpBanEvent?(player: AbstractPlayerObjectType): void;
        registerPlayerIpUnbanEvent?(ip: String): void;
        registerPlayerOperationUnitEvent?(
            player: AbstractPlayerObjectType, 
            gameActions: GameActions, 
            gameUnits: GameUnits, 
            x: number,
            y: number,
        ): boolean;
    }
    type AbstractEventType = ExtendableJavaClass<
        AbstractEventObjectType, 
        AbstractEventNewerType
    >
    const AbstractEvent: AbstractEventType;
    
    type AbstractGlobalEventNewerType = Newer<AbstractGlobalEventObjectType>
    type AbstractGlobalEventObjectType = {
        registerGameLibLoadEvent?(loadID: string): void;
        registerServerLoadEvent?(): void;
        registerServerStartTypeEvent?(serverNetType: NetType): void;
        registerNewConnectEvent?(connectionAgreement: ConnectionAgreement): boolean;
        registerNewCloseEvent?(connectionAgreement: ConnectionAgreement): void;
    }
    type AbstractGlobalEventType = ExtendableJavaClass<
        AbstractGlobalEventObjectType, 
        AbstractGlobalEventNewerType
    >
    const AbstractGlobalEvent: AbstractGlobalEventType;
}

declare module 'java:net.rwhps.server.data.player' {
    //TODO
    type AbstractPlayerNewerType = Newer<AbstractPlayerObjectType>
    type AbstractPlayerObjectType = {
    }
    type AbstractPlayerType = ExtendableJavaClass<AbstractPlayerObjectType, AbstractPlayerNewerType>
    const AbstractPlayer: AbstractPlayerType
}

declare module 'java:net.rwhps.server.data.event' {
    import { Seq, ObjectMap } from 'java:net.rwhps.server.struct'
    class GameOverData {
        readonly gameTime: number
        readonly allPlayerList: Seq<string>
        readonly winPlayerList: Seq<string>
        readonly mapName: string
        readonly playerData: ObjectMap<string, number>
        readonly relayName: string
        toString(): string
    }
}

declare module 'java:net.rwhps.server.game' {
    enum GameActions {
        MOVE,
        ATTACK,
        BUILD,
        REPAIR,
        LOADINTO,
        UNLOADAT,
        RECLAIM,
        ATTACKMOVE,
        LOADUP,
        PATROL,
        GUARD,
        GUARDAT,
        TOUCHTARGET,
        FOLLOW,
        TRIGGERACTION,
        TRIGGERACTIONWHENINRANGE,
        SETPASSIVETARGET,
        UNKNOWN,
    }

    namespace GameActions {
        function from(type?: string): GameActions | Null
        function from(type: number): GameActions
    }

    enum GameUnits {
        extractor,
        landFactory,
        airFactory,
        seaFactory,
        commandCenter,
        turret,
        antiAirTurret,
        builder,
        tank,
        hoverTank,
        artillery,
        helicopter,
        airShip,
        gunShip,
        missileShip,
        gunBoat,
        megaTank,
        laserTank,
        hovercraft,
        ladybug,
        battleShip,
        tankDestroyer,
        heavyTank,
        heavyHoverTank,
        laserDefence,
        dropship,
        tree,
        repairbay,
        NukeLaucher,
        AntiNukeLaucher,
        mammothTank,
        experimentalTank,
        experimentalLandFactory,
        crystalResource,
        wall_v,
        fabricator,
        attackSubmarine,
        builderShip,
        amphibiousJet,
        supplyDepot,
        experimentalHoverTank,
        turret_artillery,
        turret_flamethrower,
        fogRevealer,
        spreadingFire,
        antiAirTurretT2,
        turretT2,
        turretT3,
        damagingBorder,
        zoneMarker,
        editorOrBuilder,
        UNKNOWN,
    }

    namespace GameUnits {
        function from(type?: string): GameUnits | Null
        function from(type: number): GameUnits
    }
}

declare module 'java:net.rwhps.server.net' {
    class GroupNet {
        //TODO
    }
}

declare module 'java:net.rwhps.server.net.io.packet' {
    class Packet {
        //TODO
    }


}

declare module 'java:net.rwhps.server.net.core' {
    enum NetType {
        /** (默认) Server协议 原汁原味服务器实现 */
        ServerProtocol,
        /** Server旧协议 提供过去版本的服务器实现 */
        ServerProtocolOld,
        /** Server协议 Server服务器实现 加入测试功能 */
        ServerTestProtocol,
        /** Relay协议 普通RELAY实现 */
        RelayProtocol,
        /** Relay协议 多播RELAY实现 */
        RelayMulticastProtocol,
        /** 专用后端 */
        DedicatedToTheBackend,
        /** 无实现 找不到对应实现 */
        NullProtocol,
    }
    namespace NetType {
        function from(type?: string): NetType | Null
    }

    class ConnectionAgreement {
        isClosed(): boolean
        readonly useAgreement: string
        readonly ip: string
        readonly ipLong24: string
        readonly ipCountry: string
        readonly ipCountryAll: string
        readonly id: string
        constructor()
    }
}

declare module 'java:net.rwhps.server.func' {
    type Cons<T> = (t: T) => void
    type Prov<T> = () => T
}

declare namespace Java {
    function type(classname: string): unknown;
    function extend<Parent>(
        parent: Parent, 
        impl: Parent extends ExtendableJavaClass<infer ImplType, infer _> ? ImplType : never
    ): Parent extends ExtendableJavaClass<infer _, infer ReturnType> ? ReturnType : never
}