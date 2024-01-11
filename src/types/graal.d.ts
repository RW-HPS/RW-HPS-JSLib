interface AllJavaClasses {}
const console: {
  log: (...objs: unknown[]) => void
  info: (...objs: unknown[]) => void
  debug: (...objs: unknown[]) => void
  error: (...objs: unknown[]) => void
  warn: (...objs: unknown[]) => void
  assert: (check: unknown, message: string) => void
  clear: () => void
  count: () => void
  countReset: () => void
  group: () => void
  groupEnd: () => void
  time: () => void
  timeLog: () => void
  timeEnd: () => void
}

const Java: {
  type: <ClassName extends keyof AllJavaClasses>(
    className: ClassName,
  ) => AllJavaClasses[ClassName]['staticObject']
  extend: <K extends keyof AllJavaClasses>(
    javaClass: AllJavaClasses[K]['staticObject'],
  ) => {
    new (
      impls: Partial<AllJavaClasses[K]['instanceObject']>,
    ): AllJavaClasses[K]['instanceObject']
  }
}

type JavaInstanceTypeOf<K extends keyof AllJavaClasses> =
  AllJavaClasses[K]['instanceObject']

type JavaStaticTypeOf<K extends keyof AllJavaClasses> =
  AllJavaClasses[K]['staticObject']
