
/**
 * 加载（解析并执行）特定的JavsScript源代码
 * 
 * 默认可用，除非`js.load`置false
 * @param source JavaScript源代码
 */
declare function load(source: string): void
/**
 * 加载（解析并执行）特定的JavsScript源代码
 * 
 * 默认可用，除非`js.load`置false
 * @param source JavaScript源代码URL
 */
declare function load(source: JavaURL): void
/**
 * 加载（解析并执行）特定的JavsScript源代码
 * 
 * 默认可用，除非`js.load`置false
 * @param source JavaScript源代码文件
 */
declare function load(source: JavaFile): void

/**
 * 向标准输出打印参数
 * 
 * 默认可用，除非`js.print`置false
 * @param arg 打印参数
 */
declare function print(...arg: unknown[]): void

/**
 * 向标准错误输出打印参数
 * 
 * 默认可用，除非`js.print`置false
 * @param arg 打印参数
 */
declare function printErr(...arg: unknown[]): void

/**
 * console对象
 * 
 * 默认可用，除非`js.console`置false
 */
declare const console: {
  /**
   * {@link print}的别名
   * @param arg 打印参数
   * @see {@link print}
   */
  log(...arg: unknown[]): void
  /**
   * {@link print}的别名
   * @param arg 打印参数
   * @see {@link print}
   */
  info(...arg: unknown[]): void
  /**
   * {@link print}的别名
   * @param arg 打印参数
   * @see {@link print}
   */
  debug(...arg: unknown[]): void
  /**
   * 类似{@link print}，但是使用错误输入输出流
   * @param arg 打印参数
   */
  error(...arg: unknown[]): void
  /**
   * 类似{@link print}，但是使用错误输入输出流
   * @param arg 打印参数
   */
  warn(...arg: unknown[]): void
  /**
   * 如果{@link check}为似假，则打印一条消息
   * @param check 被检查的值
   * @param message 打印消息
   */
  asserts(check: unknown, message: string): void
  /**
   * 计数并输出本方法被调用的次数
   * 
   * @returns 本方法被调用次数
   * @see {@link console.countReset}
   */
  count(): number
  /**
   * 重置计数器
   * 
   * @see {@link console.count}
   */
  countReset(): void
  /**
   * 增加输出的缩进
   * 
   * @see {@link console.groupEnd}
   */
  group(): void
  /**
   * 减少输出的缩进
   * 
   * @see {@link console.group}
   */
  groupEnd(): void
  /**
   * 启动一个计时器
   * @see {@link console.timeLog}, {@link console.timeEnd}
   */
  time(): void
  /**
   * 输出当前计时器计时
   * @see {@link console.time}, {@link console.timeEnd}
   */
  timeLog(): void
  /**
   * 结束计时器
   * @see {@link console.time}, {@link console.timeLog}
   */
  timeEnd(): void
}

// TODO:有一些Object下的扩展方法没有写，不过反正它们是被弃用的

/**
 * Graal对象被作为全局对象的的属性提供。
 * 
 * 它提供了Graal特有的信息。这个属性的存在
 * 可以被用于甄别GraalVM JavaScript引擎是否
 * 为当前的语言引擎
 * ```js
 * if (typeof Graal != 'undefined') {
    print(Graal.versionECMAScript);
    print(Graal.versionGraalVM);
    print(Graal.isGraalRuntime());
    }
 * ```
 * Graal对象在GraalVM JavaScript默认
 * 可用，除非`js.gral-builtin`置false
 */
declare const Graal: {
  /**
   * 提供GraalVM JavaScript的
   * ECMAScript相容性版本数字（年）
   * @returns ECMAScript相容性版本数字（年）
   */
  readonly versionECMAScript: number
  /**
   * 提供GraalVM的版本，
   * 如果当前引擎是在GraalVM执行的话
   * @returns GraalVM版本
   */
  readonly versionGraalVM: string
  /**
   * 提供GraalVM JavaScript是否在
   * 启用GraalVM的运行时上运行
   * 
   * - 如果是，热代码会被GraalVM编译器编译，
   * 并获得高峰性能
   * - 如果不是，GraalVM JavaScript不会被GraalVM
   * 编译器优化，一般地造成较低的性能
   * @returns GraalVM是否
   */
  isGraalRuntime(): boolean
  /**
   * 在使用选项(`js.unhandled- rejects =handler`)时
   * 提供未处理的承诺拒绝处理程序。
   * @param handler 处理程序
   */
  setUnhandledPromiseRejectionHandler(
    handler: (
      // TODO:需要测试下这两个参数是干嘛的
      rejection: unknown,
      promise: unknown,
    ) => void
  ): void

  /**
   * 在使用选项(`js.unhandled- rejects =handler`)时
   * 清空未处理的承诺拒绝处理程序。
   */
  setUnhandledPromiseRejectionHandler(): void
}

declare const Java: {
  /**
   * 加载特定的Java类型并将其提供为一个对象
   * 
   * 这个对象的字段可以从中直接地读取，而创建
   * 新的对象可以通过JavaScript `new`关键字
   * @param classname Java类型全名
   */
  type(classname: string): JavaType
  /**
   * 创建一个Java数据结构（数组,ArrayList）
   * 的浅拷贝作为一个JavaScript数组
   * 在很多情况下，这不是必要的；你可以一般地
   * 直接从JavaScript使用Java数据结构
   * @param javaData Java数据结构
   */
  from(javaData: JavaObject): unknown[]
  /**
   * 将JavaScript数据结构转换为指定的Java类型对象
   * 通常来说{@link jsData}应该是JavaScript数组或者具有
   * length字段的对象，转换到
   * @param jsData 
   * @param toType 
   */
  to(jsData: unknown, toType: JavaType): JavaObject
  /**
   * 判断{@link obj}是不是一个Java对象
   * @param obj 被判断的对象
   * @returns 是否为Java对象
   */
  isJavaObject(obj: unknown): obj is JavaObject
  /**
   * 判断{@link obj}是不是一个Java类型
   * @param obj 被判断的对象
   * @returns 是否为Java类型
   */
  isJavaType(obj: unknown): obj is JavaType
  /**
   * 将指定路径加入到Java Classpath中
   * @param location 指定路径名
   */
  addToClasspath(location: string): void
  /**
   * 继承一系列Java类型
   * @param types 被继承的Java类型
   * @returns 相应的JavaAdapter
   */
  extend(...types: JavaType[]): JavaAdapter
}

/**
 * Polyglot对象
 */
declare const Polyglot: {
  /**
   * 将一个JavaScript值导出到polyglot绑定
   * @param key 绑定的键
   * @param value 导出的值
   * @throws 如果{@link key}不是一个{@link String}或者缺失的话，抛出{@link TypeError}
   */
  export(key: string, value: unknown): void
  /**
   * 导入一个polyglot绑定
   * @param key 绑定的键
   * @returns 绑定的值
   * @throws 如果{@link key}不是一个{@link String}或者缺失的话，抛出{@link TypeError}
   */
  import(key: string): unknown
  /**
   * 解析并执行指定polyglot语言源码
   * @param languageId 语言ID
   * @param sourceCode 源码
   * @returns 执行结果
   */
  eval(languageId: string, sourceCode: string): unknown
  /**
   * 解析并执行指定polyglot语言源码
   * @param languageId 语言ID
   * @param sourceFileName 源码文件路径
   * @returns 执行结果
   */
  evalFile(languageId: string, sourceFileName: string): unknown
}

// TODO: 还有更多的类型定义没写