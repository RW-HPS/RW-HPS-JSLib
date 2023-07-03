declare type ExtendableJavaClass<ObjectType, NewerType> = {
  /**
   *  类型推断辅助属性，不要使用，恒为空值
   *  @deprecated
   */
  _?: (_: [ObjectType, NewerType]) => never,
}

declare type Newer<T> = {
  new(): T
}

declare type Null = null | undefined

declare module 'java:java.util.function' {
  type BiConsumer<T, U> = (t: T, u: U) => void;
}

declare module 'java:net.rwhps.server.struct' {
  import { BiConsumer } from 'java:java.util.function'

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
    getSize(): number;

    clear(): void;
    forEach(p0: BiConsumer<number, V>): void;
    get(key: number): V | Null;
    put(key: number, value: V): V | Null;
    remove(key: number, value: V): boolean;
    remove(key: number): V | Null;
    replace(p0: number, p1: V): V | Null;
    toString(): string;
  }
  //TODO
}

declare module 'java:net.rwhps.server.util' {
  class PacketType {
    //TODO
  }
  class I18NBundle {
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
    getType(): ResponseType
    getCommand(): Command
    getRunCommand(): string
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
    getName(): string
    getOptional(): boolean
    getVariadic(): boolean
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
  import { AbstractEventObjectType, AbstractGlobalEventObjectType } from 'java:net.rwhps.server.plugin.event'

  type PluginObjectType = {
    init?(): void,
    onEnable?(): void,
    registerCoreCommands?(handler: CommandHandler): void,
    registerServerCommands?(handler: CommandHandler): void,
    registerRelayCommands?(handler: CommandHandler): void,
    registerServerClientCommands?(handler: CommandHandler): void,
    registerRelayClientCommands?(handler: CommandHandler): void,
    registerEvents?(): AbstractEventObjectType | Null,
    registerGlobalEvents?(): AbstractGlobalEventObjectType | Null,
    onDisable?(): void,
  }
  type PluginNewerType = { new(): PluginObjectType }
  type PluginType = ExtendableJavaClass<
    PluginObjectType,
    PluginNewerType
  >
  const Plugin: PluginType
}

declare module 'java:net.rwhps.server.plugin.event' {
  import { AbstractPlayer } from 'java:net.rwhps.server.data.player'
  import { GameOverData } from 'java:net.rwhps.server.data.event'
  import { GameActions, GameUnits } from 'java:net.rwhps.server.game'
  import { NetType, ConnectionAgreement } from 'java:net.rwhps.server.net.core'

  type AbstractEventNewerType = Newer<AbstractEventObjectType>
  type AbstractEventObjectType = {
    registerServerHessStartPort?(): void;
    registerPlayerJoinEvent?(player: AbstractPlayer): void;
    registerPlayerLeaveEvent?(player: AbstractPlayer): void;
    registerPlayerChatEvent?(player: AbstractPlayer, message: string): void;
    registerGameStartEvent?(): void;
    registerGameOverEvent?(gameOverData?: GameOverData): void;
    registerPlayerBanEvent?(player: AbstractPlayer): void;
    registerPlayerUnbanEvent?(player: AbstractPlayer): void;
    registerPlayerIpBanEvent?(player: AbstractPlayer): void;
    registerPlayerIpUnbanEvent?(ip: string): void;
    registerPlayerOperationUnitEvent?(
      player: AbstractPlayer,
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
  const AbstractEvent: AbstractEventType

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
  const AbstractGlobalEvent: AbstractGlobalEventType
}

declare module 'java:net.rwhps.server.data.player' {
  import { I18NBundle } from 'java:net.rwhps.server.util'
  import { AbstractNetConnectServerObjectType } from 'java:net.rwhps.server.core.server'
  import { AbstractPlayerDataObjectType } from 'java:net.rwhps.server.game.simulation.core'
  import { ObjectMap } from 'java:net.rwhps.server.struct'
  import { Prov } from 'java:net.rwhps.server.func'

  /** 注意：该类型不能实例化，仅用作类型提示 */
  class Player extends AbstractPlayer {
    setHeadlessDevice(v: boolean): void;
    getHeadlessDevice(): boolean;
    getColor(): number;
    setColor(v: number): void;
    getPing(): number;
    setPing(v: number): void;
    getStart(): boolean;
    setBoolean(v: boolean): void;
    getWatch(): boolean;
    getTurnStoneIntoGold(): boolean;
    setTurnStoneIntoGold(v: boolean): void;
    getSyncAllSumFlag(): boolean;
    setSyncAllSumFlag(v: boolean): void;
    getLastSyncTick(): number;
    setLastSyncTick(v: number): void;
    getSharedControl(): boolean;
    setSharedControl(v: boolean): void;
    getControlThePlayer(): boolean;
    getLastVoteTime(): number;
    setLastViteTime(v: number): void;
    canBuy(price: number): boolean;
    isEnemy(other: Player): boolean;
    static checkHess(uuid: string): boolean;
  }

  class AbstractPlayer {
    constructor(
      con: AbstractNetConnectServerObjectType,
      i18NBundle: I18NBundle,
      playerPrivateData: AbstractPlayerDataObjectType,
    );

    setCon(v: AbstractNetConnectServerObjectType): void;
    getCon(): AbstractNetConnectServerObjectType;
    getI18NBundle(): I18NBundle;
    getPlayerPrivateData(): AbstractPlayerDataObjectType;
    setPlayerPrivateData(v: AbstractPlayerDataObjectType): void;
    getIsAdmin(): boolean;
    setIsAdmin(v: boolean): void;
    getAutoAdmin(): boolean;
    setAutoAdmin(v: boolean): void;
    getSuperAdmin(): boolean;
    setSuperAdmin(v: boolean): void;

    /** List position  */
    getSite(): number;
    setSite(v: number): void;

    /** Team number  */
    getTeam(): number;
    setTeam(v: number): void;

    /** Last move time  */
    getLastMoveTime(): number;
    setLastMoveTime(v: number): void;
    /** Mute expiration time */
    getMuteTime(): number;
    setMuteTime(v: number): void;
    /** Kick expiration time */
    getKickTime(): number;
    setKickTime(v: number): void;
    getTimeTemp(): number;
    setTimeTemp(v: number): void;
    getLastMessageTime(): number;
    setLastMessageTime(v: number): void;
    getLastSentMessage(): string | Null;
    setLastSentMessage(v: string | Null): void;
    getNoSay(): boolean;
    setNoSay(v: boolean): void;
    getCredits(): number;
    setCredits(v: number): void;
    getStartUnit(): number;
    setStartUnit(v: number): void;
    getSurvive(): boolean;
    getUnitsKilled(): number;
    getBuildingsKilled(): number;
    getExperimentalsKilled(): number;
    /** 单位被击杀数 */
    getUnitsLost(): number;
    /** 建筑被毁灭数 */
    getBuildingsLost(): number;
    /** 单实验单位被击杀数 */
    getExperimentalsLost(): number;
    getName(): string;
    getConnectHexID(): string;
    getStatusData(): ObjectMap<string, number>;
    updateDate(): void;
    sendSystemMessage(text: string): void;
    sendMessage(player: Player, text: string): void;
    sendTeamData(): void;
    sendPopUps(msg: string, run: (s: string) => void): void;
    sync(): void;
    kickPlayer(text: string, time?: number): void;
    getinput(input: string, ...params: unknown[]): string;
    addData<T>(dataName: string, value: T): void;
    getData<T>(dataName: string): T;
    getData<T>(dataName: string, defValue: T): T;
    getData<T>(dataName: string, defProv: Prov<T>): T;
    removeData(dataName: string): void;
    playerJumpsToAnotherServer(ip: string, port?: number): void;
    clear(): void;
    equals(other?: unknown): boolean;
    hashCode(): number;
  }
}

declare module 'java:net.rwhps.server.data.event' {
  import { Seq, ObjectMap } from 'java:net.rwhps.server.struct'
  class GameOverData {
    constructor(
      gameTime: number,
      allPlayerList: Seq<string>,
      winPlayerList: Seq<string>,
      mapName: string,
      playerData: ObjectMap<string, ObjectMap<string, number>>,
      replayName: string
    );

    getGameTime(): number;
    getAllPlayerList(): Seq<string>;
    getWinPlayerList(): Seq<string>;
    getMapName(): string;
    getPlayerData(): ObjectMap<string, number>;
    getRelayName(): string;
    toString(): string;
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
  import { GroupNet } from 'java:net.rwhps.server.net'
  import { Packet } from 'java:net.rwhps.server.net.io.packet'

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
    getUseAgreement(): string
    getIp(): string
    getIpLong24(): string
    getIpCountry(): string
    getIpCountryAll(): string
    getId(): string
    constructor()
    add(groupNet: GroupNet): void;
    close(groupNet?: GroupNet): void;
    equals(other?: unknown): boolean;
    hashCode(): number;
    remove(groupNet?: GroupNet): void;
    send(packet: Packet): void;
  }
}

declare module 'java:net.rwhps.server.core' {
  enum ServerStatus {
    InitialConnection,
    CertifiedEnd,
  }
}

declare module 'java:net.rwhps.server.core.server' {
  import { ServerStatus } from 'java:net.rwhps.server.core'
  import { AbstractPlayer } from 'java:net.rwhps.server.data.player'
  import { Packet } from 'java:net.rwhps.server.net.io.packet'
  import { CompressOutputStream } from 'java:net.rwhps.server.io.output'

  type AbstractNetConnectServerNewerType = Newer<AbstractNetConnectServerObjectType>
  type AbstractNetConnectServerObjectType = {
    getPermissionStatus(): ServerStatus;
    getSupportedversionBeta(): boolean;
    getSupportedversionGame(): string;
    getSupportedVersionInt(): number;
    getPlayer(): AbstractPlayer;
    sendSystemMessage(msg: string): void;
    sendChatMessage(msg: string, sendBy: string, team: number): void;
    sendServerInfo(utilData: boolean): void;
    sendTeamData(gzip: CompressOutputStream): void;
    sendSurrender(): void;
    sendKick(reason: string): void;
    sendPing(): void;
    sendStartGame(): void;
    sendErrorPasswd(): void;
    sendGameSave(packet: Packet): void;
    receiveChat(packet: Packet): void;
    receiveCommand(packet: Packet): void;
    receiveCheckPacket(packet: Packet): void;
    getGameSaveData(packet: Packet): Uint8Array;
    getPlayerInfo(packet: Packet): void;
    registerConnection(packet: Packet): void;
    gameSummon(unit: string, x: number, y: number): void;
    reConnect?(): void;
    sync?(fastSync?: boolean): void;
    sendRelayServerType(msg: string, run?: (s: string) => void): void;
    sendRelayServerTypeReply?(packet: Packet): void;
  }
  type AbstractNetConnectServerType =
    ExtendableJavaClass<AbstractNetConnectServerObjectType, AbstractNetConnectServerNewerType>
  const AbstractNetConnectServer: AbstractNetConnectServerType
}

declare module 'java:net.rwhps.server.io.output' {
  import { InputStreamObjectType, OutputStreamObjectType } from 'java:java.io'

  class CompressOutputStream {
    constructor(head: string, outputStream: DisableSyncByteArrayOutputStream);
    static getGzipOutputStream(head: string, isGzip: boolean): CompressOutputStream;
    static getZipOutputStream(head: string, isZip: boolean): CompressOutputStream;
    static get7zOutputStream(head: string, is7z: boolean): CompressOutputStream;
  }

  class DisableSyncByteArrayOutputStream {
    constructor(size?: number);
    write(b: Uint8Array, off: number, len: number): void;
    write(b: number): void;
    write(in_: InputStreamObjectType): number;
    writeBytes(b: Uint8Array): void;
    size(): number;
    reset(): void;
    writeTo(out: OutputStreamObjectType): void;
    toByteArray(): Uint8Array;
  }
}

declare module 'java:net.rwhps.server.game.simulation.core' {
  type AbstractPlayerDataNewerType = Newer<AbstractPlayerDataObjectType>
  type AbstractPlayerDataObjectType = {
    updateDate(): void;
    getSurvive(): boolean;
    /** 单位击杀数 */
    getUnitsKilled(): number;
    /** 建筑毁灭数 */
    getBuildingsKilled(): number;
    /** 单实验单位击杀数 */
    getExperimentalsKilled(): number;
    /** 单位被击杀数 */
    getUnitsLost(): number;
    /** 建筑被毁灭数 */
    getBuildingsLost(): number;
    /** 单实验单位被击杀数 */
    getExperimentalsLost(): number;

    getCredits(): number;
    setCredits(v: number): void;

    getName(): string;
    getConnectHexID(): string;

    getSite(): number;
    setSite(v: number): void;
    getTeam(): number;
    setTeam(v: number): void;
    getStartUnit(): number;
    setStartUnit(v: number): void;
    getColor(): number;
    setColor(v: number): void;
  }
  type AbstractPlayerDataType = ExtendableJavaClass<AbstractPlayerDataObjectType, AbstractPlayerDataNewerType>
  const AbstractPlayerData: AbstractPlayerDataType
}

declare module 'java:net.rwhps.server.func' {
  type Cons<T> = (t: T) => void
  type Prov<T> = () => T
}

declare module 'java:java.io' {
  type OutputStreamObjectType = unknown
  type OutputStreamType = unknown

  type InputStreamObjectType = unknown
  type InputStreamType = unknown
}

declare namespace Java {
  function type(classname: string): unknown;
  function extend<Parent>(
    parent: Parent,
    impl: Parent extends ExtendableJavaClass<infer ImplType, infer _> ? ImplType : never
  ): Parent extends ExtendableJavaClass<infer _, infer ReturnType> ? ReturnType : never
}