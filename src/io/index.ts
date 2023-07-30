import { SeqArray } from '../struct'

export interface CompressOutputStream {
  _
  //TODO: 需要个合适的接口描述
}

//TODO:需要补充
export interface FileUtils {
  exists(): boolean
  notExists(): boolean
  delete(): boolean
  length(): number
  toFile(filename: string): FileUtils
  toFolder(filename: string): FileUtils
  readonly fileList: SeqArray<unknown> //File
  readonly fileListNotNullSize: SeqArray<unknown> //File
  readonly md5: string
  setReadonly(): boolean
  writeFile(log: unknown, tail?: boolean): void
  writeFileByte(bytes: Uint8Array, tail?: boolean): void
  readFileByte(): Uint8Array
  readFileStringDate(): string
}