declare type ExtendableJavaClass<ImplType, ReturnType> = {
    _: (_1: ImplType, _2: ReturnType) => never,
}

declare type Null = null | undefined

declare module 'java:java.util' {
    type Properties = unknown
}

declare module 'java:net.rwhps.server.util.log' {
    namespace Log {
        const errorDispose: unknown
        function set(log: string): void
        function setCopyPrint(system: boolean): void
        function skipping(e: unknown): void
        function skipping(tag: unknown, e: unknown): void
        //TODO
    }
}

declare module 'java:net.rwhps.server.util.game' {
    type CommandHandler = unknown
    type CommandResponse = unknown
    type ResponseType = unknown
    type Command = unknown
    type CommandRunner<T> = ExtendableJavaClass<{}, {}>
}

declare module 'java:net.rwhps.server.plugin' {
    import { CommandHandler } from 'java:net.rwhps.server.util.game'
    import { AbstractEvent, AbstractGlobalEvent } from 'java:net.rwhps.server.plugin.event'

    type PluginImplType = {
        init?(): void,
        onEnable?(): void,
        registerCoreCommands?(handler: CommandHandler): void,
        registerServerCommands?(handler: CommandHandler): void,
        registerRelayCommands?(handler: CommandHandler): void,
        registerServerClientCommands?(handler: CommandHandler): void,
        registerRelayClientCommands?(handler: CommandHandler): void,
        registerEvents?(): AbstractEvent | Null,
        registerGlobalEvents?(): (AbstractGlobalEvent | Null),
        onDisable?(): void,
    }

    type PluginNewerType = {new (): unknown}

    type PluginType = ExtendableJavaClass<
        PluginImplType, 
        PluginNewerType
    >
    const Plugin: PluginType
}

declare module 'java:net.rwhps.server.plugin.event' {
    type AbstractEvent = ExtendableJavaClass<{}, {}>
    type AbstractGlobalEvent = ExtendableJavaClass<{}, {}>
}

declare module 'java:net.rwhps.server.data.player' {
    type AbstractPlayer = ExtendableJavaClass<{}, {}>
}

declare module 'java:net.rwhps.server.data.event' {
    type GameOverData = unknown
}

declare module 'java:net.rwhps.server.game' {
    type GameActions = unknown
    type GameUnits = unknown
}

declare module 'java:net.rwhps.server.net.core' {
    type NetType = unknown
    type ConnectionAgreement = unknown
}

declare namespace Java {
    function type(classname: string): unknown;
    function extend<Parent>(
        parent: Parent, 
        impl: Parent extends ExtendableJavaClass<infer ImplType, infer ReturnType> ? ImplType : never
    ): Parent extends ExtendableJavaClass<infer ImplType, infer ReturnType> ? ReturnType : never
}