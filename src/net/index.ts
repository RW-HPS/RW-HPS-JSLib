// TODO
export type PacketType =
  | 'SERVER_DEBUG_RECEIVE'
  | 'SERVER_DEBUG'
  | 'GET_SERVER_INFO_RECEIVE'
  | 'GET_SERVER_INFO'
  | 'UPDATA_CLASS_RECEIVE'
  | 'STATUS_RESULT'
  | 'PREREGISTER_INFO_RECEIVE'
  | 'PREREGISTER_INFO'
  | 'PASSWD_ERROR'
  | 'REGISTER_PLAYER'
  | 'SERVER_INFO'
  | 'TEAM_LIST'
  | 'HEART_BEAT'
  | 'HEART_BEAT_RESPONSE'
  | 'CHAT_RECEIVE'
  | 'CHAT'
  | 'PACKET_DOWNLOAD_PENDING'
  | 'KICK'
  | 'DISCONNECT'
  | 'START_GAME'
  | 'ACCEPT_START_GAME'
  | 'RETURN_TO_BATTLEROOM'
  | 'TICK'
  | 'GAMECOMMAND_RECEIVE'
  | 'SYNCCHECKSUM_STATUS'
  | 'SYNC_CHECK'
  | 'SYNC'
  | 'RELAY_117'
  | 'RELAY_118_117_RETURN'
  | 'RELAY_POW'
  | 'RELAY_POW_RECEIVE'
  | 'RELAY_VERSION_INFO'
  | 'RELAY_BECOME_SERVER'
  | 'FORWARD_CLIENT_ADD'
  | 'FORWARD_CLIENT_REMOVE'
  | 'PACKET_FORWARD_CLIENT_FROM'
  | 'PACKET_FORWARD_CLIENT_TO'
  | 'PACKET_FORWARD_CLIENT_TO_REPEATED'
  | 'PACKET_RECONNECT_TO'
  | 'EMPTYP_ACKAGE'
  | 'NOT_RESOLVED'

export interface Packet {
  readonly type: PacketType
  readonly bytes: Uint8Array
  equals(other: unknown): boolean
  hashCode(): number
  toString(): string
}

// TODO
export type Channel = unknown

// TODO
export type ChannelGroup = unknown

export interface GroupNet {
  add(channel: Channel): void
  add(connectionAgreement: ConnectionAgreement): void
  broadcast(msg: unknown): void
  broadcastAndUDP(msg: unknown): void
  remove(channel: Channel): void
  remove(connectionAgreement: ConnectionAgreement): void
  flush(): ChannelGroup
  disconnect(): void
}

export interface ConnectionAgreement {
  readonly isClosed: () => boolean
  readonly useAgreement: string
  readonly ip: string
  readonly ipLong24: string
  readonly ipCountry: string
  readonly ipCountryAll: string
  readonly id: string
  add(groupNet: GroupNet): void
  remove(groupNet?: GroupNet): void
  send(packet: Packet): void
  close(groupNet?: GroupNet): void
  equals(other: unknown): boolean
  hashCode(): number
}


export type ServerStatus =
  | 'InitialConnection'
  | 'CertifiedEnd'



export type NetType =
  | 'ServerProtocol'
  | 'ServerProtocolOld'
  | 'ServerTestProtocol'
  | 'RelayProtocol'
  | 'RelayMulticastProtocol'
  | 'DedicatedToTheBackend'
  | 'NullProtocol'