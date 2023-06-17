declare type ExtendableJavaClass<ObjectType, NewerType> = {
    /**
     *  类型推断辅助属性，不要使用，恒为空值
     *  @deprecated
     */
    _?: (_: [ObjectType, NewerType]) => never,
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
    //TODO
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

    type CommandResponseObjectType = {
        readonly type: ResponseType
        readonly command: Command
        readonly runCommand: string
    }
    type CommandResponseNewerType = {
        new (
            type: ResponseType, 
            command: Command, 
            runCommand: string
        ): CommandResponseObjectType
    }
    const CommandResponse: CommandResponseObjectType

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
    import { AbstractEvent, AbstractGlobalEvent } from 'java:net.rwhps.server.plugin.event'

    type PluginObjectType = {
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
    type PluginNewerType = {new (): PluginObjectType}
    type PluginType = ExtendableJavaClass<
        PluginObjectType,
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

declare module 'java:net.rwhps.server.func' {
    type Cons<T> = (t: T) => void 
}

declare namespace Java {
    function type(classname: string): unknown;
    function extend<Parent>(
        parent: Parent, 
        impl: Parent extends ExtendableJavaClass<infer ImplType, infer _> ? ImplType : never
    ): Parent extends ExtendableJavaClass<infer _, infer ReturnType> ? ReturnType : never
}