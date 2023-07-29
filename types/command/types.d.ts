import { SeqArray } from '../struct';
export type CommandRunner<T> = (args: string[], parameter: T) => void;
export interface CommandHandler<T> {
    readonly commandList: SeqArray<unknown>;
    removeCommand(text: string): void;
    register(text: string, description: string, runner: CommandRunner<T>): void;
    register(text: string, params: string, description: string, runner: CommandRunner<T>): void;
    register(text: string, description: string, runner: (v: string[]) => void): void;
    register(text: string, params: string, description: string, runner: (v: string[]) => void): void;
}
