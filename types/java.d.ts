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
  [name: string | symbol]: unknown | ((...args: unknown[]) => unknown)
}

declare type JavaURL =
  & JavaObject

declare type JavaFile =
  & JavaObject