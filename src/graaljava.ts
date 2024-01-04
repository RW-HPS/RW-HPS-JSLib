declare global {
  interface JavaType {
    class: unknown
    equals(other: unknown): boolean
  }

  interface JavaAdapter {
    new (...impl: [...unknown[], Record<string, (...args: unknown[]) => unknown>]): JavaObject
  }

  interface JavaObject {
    getClass(): JavaType
    equals(obj: JavaObject): boolean
    hashCode(): number
    toString(): string
    [name: string | symbol]: unknown
  }

  type JavaURL =
    & JavaObject

  type JavaFile =
    & JavaObject
}

export {}