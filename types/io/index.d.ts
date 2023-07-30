import { SeqArray } from '../struct';
export interface CompressOutputStream {
    _: any;
}
export interface FileUtils {
    exists(): boolean;
    notExists(): boolean;
    delete(): boolean;
    length(): number;
    toFile(filename: string): FileUtils;
    toFolder(filename: string): FileUtils;
    readonly fileList: SeqArray<unknown>;
    readonly fileListNotNullSize: SeqArray<unknown>;
    readonly md5: string;
    setReadonly(): boolean;
    writeFile(log: unknown, tail?: boolean): void;
    writeFileByte(bytes: Uint8Array, tail?: boolean): void;
    readFileByte(): Uint8Array;
    readFileStringDate(): string;
}
