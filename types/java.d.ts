/**
 * @module Global
 * @description 全局
 */

declare interface JavaType {
  class: unknown
  equals(other: unknown): boolean
}

declare interface JavaExtendableType {
  class: unknown
}

declare interface JavaAdapter {
  new (...impl: [...unknown[], Record<string, (...args: unknown[]) => unknown>]): JavaObject
}

declare interface JavaObject {
  getClass(): JavaType
  equals(obj: JavaObject): boolean
  hashCode(): number
  toString(): string
  [name: string | symbol]: unknown
}

declare type JavaURL =
  & JavaObject

declare type JavaFile =
  & JavaObject