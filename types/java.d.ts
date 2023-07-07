declare interface JavaType {
  class: unknown
}

declare interface JavaExtendableType {
  class: unknown
}

declare interface JavaObject {
  getClass(): JavaType
}

declare type JavaURL =
  & JavaObject

declare type JavaFile =
  & JavaObject