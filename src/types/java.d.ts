type AllJavaClass_net_rwhps_server_game_event_global_NetConnectCloseEvent = {
  staticObject: {
    new (
      arg0: AllJavaClasses['net.rwhps.server.net.core.ConnectionAgreement']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.event.global.NetConnectCloseEvent']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.game.event.global.NetConnectCloseEvent'
    status(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
    getConnectionAgreement(): AllJavaClasses['net.rwhps.server.net.core.ConnectionAgreement']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['net.rwhps.server.game.event.core.AbstractGlobalEvent']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_net_rwhps_server_net_core_ConnectionAgreement = {
  staticObject: {
    new (): AllJavaClasses['net.rwhps.server.net.core.ConnectionAgreement']['instanceObject']
    new (
      arg0: boolean,
    ): AllJavaClasses['net.rwhps.server.net.core.ConnectionAgreement']['instanceObject']
    new (
      arg0: AllJavaClasses['io.netty.channel.ChannelHandlerContext']['instanceObject'],
      arg1: AllJavaClasses['io.netty.util.AttributeKey']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.net.core.ConnectionAgreement']['instanceObject']
    new (
      arg0: AllJavaClasses['net.rwhps.server.net.handler.bio.PackagingSocket']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.net.core.ConnectionAgreement']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.net.core.ConnectionAgreement'
    remove(
      arg0: AllJavaClasses['net.rwhps.server.net.GroupNet']['instanceObject'],
    ): void
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    hashCode(): number
    add(
      arg0: AllJavaClasses['net.rwhps.server.net.GroupNet']['instanceObject'],
    ): void
    getId(): string
    close(
      arg0: AllJavaClasses['net.rwhps.server.net.GroupNet']['instanceObject'],
    ): void
    getIpCountryAll(): string
    getIpLong24(): string
    getUseAgreement(): string
    getIpCountry(): string
    getLocalPort$Server_Core(): number
    getIp(): string
    send(
      arg0: AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject'],
    ): void
    isClosed(): AllJavaClasses['kotlin.jvm.functions.Function0']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_io_netty_channel_ChannelHandlerContext = {
  staticObject: object
  instanceObject: (({
    __javaClass: 'io.netty.channel.ChannelHandlerContext'
    name(): string
    flush(): AllJavaClasses['io.netty.channel.ChannelHandlerContext']['instanceObject']
    read(): AllJavaClasses['io.netty.channel.ChannelHandlerContext']['instanceObject']
    handler(): AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject']
    attr(
      arg0: AllJavaClasses['io.netty.util.AttributeKey']['instanceObject'],
    ): AllJavaClasses['io.netty.util.Attribute']['instanceObject']
    channel(): AllJavaClasses['io.netty.channel.Channel']['instanceObject']
    executor(): AllJavaClasses['io.netty.util.concurrent.EventExecutor']['instanceObject']
    fireChannelActive(): AllJavaClasses['io.netty.channel.ChannelHandlerContext']['instanceObject']
    fireChannelRead(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelHandlerContext']['instanceObject']
    fireChannelWritabilityChanged(): AllJavaClasses['io.netty.channel.ChannelHandlerContext']['instanceObject']
    fireExceptionCaught(
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelHandlerContext']['instanceObject']
    fireChannelInactive(): AllJavaClasses['io.netty.channel.ChannelHandlerContext']['instanceObject']
    fireChannelUnregistered(): AllJavaClasses['io.netty.channel.ChannelHandlerContext']['instanceObject']
    fireUserEventTriggered(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelHandlerContext']['instanceObject']
    fireChannelRegistered(): AllJavaClasses['io.netty.channel.ChannelHandlerContext']['instanceObject']
    fireChannelReadComplete(): AllJavaClasses['io.netty.channel.ChannelHandlerContext']['instanceObject']
    isRemoved(): boolean
    alloc(): AllJavaClasses['io.netty.buffer.ByteBufAllocator']['instanceObject']
    hasAttr(
      arg0: AllJavaClasses['io.netty.util.AttributeKey']['instanceObject'],
    ): boolean
    pipeline(): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
  } & Omit<
    AllJavaClasses['io.netty.util.AttributeMap']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['io.netty.channel.ChannelInboundInvoker']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['io.netty.channel.ChannelOutboundInvoker']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_io_netty_channel_ChannelHandler = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.channel.ChannelHandler'
    handlerRemoved(
      arg0: AllJavaClasses['io.netty.channel.ChannelHandlerContext']['instanceObject'],
    ): void
    handlerAdded(
      arg0: AllJavaClasses['io.netty.channel.ChannelHandlerContext']['instanceObject'],
    ): void
    exceptionCaught(
      arg0: AllJavaClasses['io.netty.channel.ChannelHandlerContext']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): void
  }
}
type AllJavaClass_java_lang_Throwable = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['java.lang.Throwable']['instanceObject']
    new (
      arg0: string,
      arg1: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['java.lang.Throwable']['instanceObject']
    new (arg0: string): AllJavaClasses['java.lang.Throwable']['instanceObject']
    new (): AllJavaClasses['java.lang.Throwable']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.lang.Throwable'
    printStackTrace(
      arg0: AllJavaClasses['java.io.PrintWriter']['instanceObject'],
    ): void
    printStackTrace(): void
    printStackTrace(
      arg0: AllJavaClasses['java.io.PrintStream']['instanceObject'],
    ): void
    getStackTrace(): AllJavaClasses['java.lang.StackTraceElement']['instanceObject'][]
    fillInStackTrace(): AllJavaClasses['java.lang.Throwable']['instanceObject']
    getCause(): AllJavaClasses['java.lang.Throwable']['instanceObject']
    initCause(
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['java.lang.Throwable']['instanceObject']
    toString(): string
    getMessage(): string
    getSuppressed(): AllJavaClasses['java.lang.Throwable']['instanceObject'][]
    getLocalizedMessage(): string
    setStackTrace(
      arg0: AllJavaClasses['java.lang.StackTraceElement']['instanceObject'][],
    ): void
    addSuppressed(
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): void
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_io_PrintWriter = {
  staticObject: {
    new (
      arg0: string,
      arg1: string,
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    new (arg0: string): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    new (
      arg0: string,
      arg1: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
      arg1: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.Writer']['instanceObject'],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.Writer']['instanceObject'],
      arg1: boolean,
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: boolean,
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: boolean,
      arg2: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.io.PrintWriter'
    println(arg0: AllJavaClasses['char']['instanceObject'][]): void
    println(arg0: number): void
    println(arg0: number): void
    println(arg0: string): void
    println(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
    println(): void
    println(arg0: AllJavaClasses['char']['instanceObject']): void
    println(arg0: number): void
    println(arg0: number): void
    println(arg0: boolean): void
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.io.Writer']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.io.Writer']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.io.Writer']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    flush(): void
    format(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    format(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    printf(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    printf(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    write(arg0: number): void
    write(
      arg0: AllJavaClasses['char']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): void
    write(arg0: AllJavaClasses['char']['instanceObject'][]): void
    write(arg0: string, arg1: number, arg2: number): void
    write(arg0: string): void
    print(arg0: number): void
    print(arg0: number): void
    print(arg0: number): void
    print(arg0: AllJavaClasses['char']['instanceObject']): void
    print(arg0: boolean): void
    print(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
    print(arg0: string): void
    print(arg0: AllJavaClasses['char']['instanceObject'][]): void
    print(arg0: number): void
    close(): void
    checkError(): boolean
  } & Omit<AllJavaClasses['java.io.Writer']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_charset_Charset = {
  staticObject: {
    forName(
      arg0: string,
      arg1: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): AllJavaClasses['java.nio.charset.Charset']['instanceObject']
    forName(
      arg0: string,
    ): AllJavaClasses['java.nio.charset.Charset']['instanceObject']
    defaultCharset(): AllJavaClasses['java.nio.charset.Charset']['instanceObject']
    isSupported(arg0: string): boolean
    availableCharsets(): AllJavaClasses['java.util.SortedMap']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.nio.charset.Charset'
    name(): string
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): number
    newDecoder(): AllJavaClasses['java.nio.charset.CharsetDecoder']['instanceObject']
    decode(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    newEncoder(): AllJavaClasses['java.nio.charset.CharsetEncoder']['instanceObject']
    encode(
      arg0: AllJavaClasses['java.nio.CharBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    encode(
      arg0: string,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    canEncode(): boolean
    contains(
      arg0: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): boolean
    isRegistered(): boolean
    aliases(): AllJavaClasses['java.util.Set']['instanceObject']
    displayName(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    displayName(): string
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_Object = {
  staticObject: { new (): AllJavaClasses['java.lang.Object']['instanceObject'] }
  instanceObject: {
    __javaClass: 'java.lang.Object'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getClass(): AllJavaClasses['java.lang.Class']['instanceObject']
    notify(): void
    notifyAll(): void
    wait(arg0: number): void
    wait(arg0: number, arg1: number): void
    wait(): void
  }
}
type AllJavaClass_java_lang_Class = {
  staticObject: {
    forName(
      arg0: string,
      arg1: boolean,
      arg2: AllJavaClasses['java.lang.ClassLoader']['instanceObject'],
    ): AllJavaClasses['java.lang.Class']['instanceObject']
    forName(
      arg0: AllJavaClasses['java.lang.Module']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['java.lang.Class']['instanceObject']
    forName(arg0: string): AllJavaClasses['java.lang.Class']['instanceObject']
  }
  instanceObject: (((((({
    __javaClass: 'java.lang.Class'
    getName(): string
    toString(): string
    getModule(): AllJavaClasses['java.lang.Module']['instanceObject']
    getProtectionDomain(): AllJavaClasses['java.security.ProtectionDomain']['instanceObject']
    isAssignableFrom(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): boolean
    isInstance(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    getModifiers(): number
    isInterface(): boolean
    isArray(): boolean
    isPrimitive(): boolean
    isHidden(): boolean
    getSuperclass(): AllJavaClasses['java.lang.Class']['instanceObject']
    cast(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    componentType(): AllJavaClasses['java.lang.invoke.TypeDescriptor$OfField']['instanceObject']
    componentType(): AllJavaClasses['java.lang.Class']['instanceObject']
    describeConstable(): AllJavaClasses['java.util.Optional']['instanceObject']
    getComponentType(): AllJavaClasses['java.lang.Class']['instanceObject']
    isAnnotation(): boolean
    isEnum(): boolean
    isRecord(): boolean
    getTypeParameters(): AllJavaClasses['java.lang.reflect.TypeVariable']['instanceObject'][]
    getClassLoader(): AllJavaClasses['java.lang.ClassLoader']['instanceObject']
    newInstance(): AllJavaClasses['java.lang.Object']['instanceObject']
    getInterfaces(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    isMemberClass(): boolean
    isLocalClass(): boolean
    isAnonymousClass(): boolean
    getEnclosingClass(): AllJavaClasses['java.lang.Class']['instanceObject']
    isUnnamedClass(): boolean
    getSimpleName(): string
    getCanonicalName(): string
    isSynthetic(): boolean
    getResourceAsStream(
      arg0: string,
    ): AllJavaClasses['java.io.InputStream']['instanceObject']
    getResource(arg0: string): AllJavaClasses['java.net.URL']['instanceObject']
    getPackageName(): string
    desiredAssertionStatus(): boolean
    getMethod(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Class']['instanceObject'][],
    ): AllJavaClasses['java.lang.reflect.Method']['instanceObject']
    isAnnotationPresent(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): boolean
    getNestHost(): AllJavaClasses['java.lang.Class']['instanceObject']
    descriptorString(): string
    getPermittedSubclasses(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    arrayType(): AllJavaClasses['java.lang.Class']['instanceObject']
    arrayType(): AllJavaClasses['java.lang.invoke.TypeDescriptor$OfField']['instanceObject']
    toGenericString(): string
    getGenericSuperclass(): AllJavaClasses['java.lang.reflect.Type']['instanceObject']
    getPackage(): AllJavaClasses['java.lang.Package']['instanceObject']
    getGenericInterfaces(): AllJavaClasses['java.lang.reflect.Type']['instanceObject'][]
    accessFlags(): AllJavaClasses['java.util.Set']['instanceObject']
    getSigners(): AllJavaClasses['java.lang.Object']['instanceObject'][]
    getEnclosingMethod(): AllJavaClasses['java.lang.reflect.Method']['instanceObject']
    getEnclosingConstructor(): AllJavaClasses['java.lang.reflect.Constructor']['instanceObject']
    getDeclaringClass(): AllJavaClasses['java.lang.Class']['instanceObject']
    getTypeName(): string
    getClasses(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    getFields(): AllJavaClasses['java.lang.reflect.Field']['instanceObject'][]
    getMethods(): AllJavaClasses['java.lang.reflect.Method']['instanceObject'][]
    getConstructors(): AllJavaClasses['java.lang.reflect.Constructor']['instanceObject'][]
    getField(
      arg0: string,
    ): AllJavaClasses['java.lang.reflect.Field']['instanceObject']
    getConstructor(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'][],
    ): AllJavaClasses['java.lang.reflect.Constructor']['instanceObject']
    getDeclaredClasses(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    getDeclaredFields(): AllJavaClasses['java.lang.reflect.Field']['instanceObject'][]
    getRecordComponents(): AllJavaClasses['java.lang.reflect.RecordComponent']['instanceObject'][]
    getDeclaredMethods(): AllJavaClasses['java.lang.reflect.Method']['instanceObject'][]
    getDeclaredConstructors(): AllJavaClasses['java.lang.reflect.Constructor']['instanceObject'][]
    getDeclaredField(
      arg0: string,
    ): AllJavaClasses['java.lang.reflect.Field']['instanceObject']
    getDeclaredMethod(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Class']['instanceObject'][],
    ): AllJavaClasses['java.lang.reflect.Method']['instanceObject']
    getDeclaredConstructor(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'][],
    ): AllJavaClasses['java.lang.reflect.Constructor']['instanceObject']
    getEnumConstants(): AllJavaClasses['java.lang.Object']['instanceObject'][]
    asSubclass(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.Class']['instanceObject']
    getAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getAnnotationsByType(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getDeclaredAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getDeclaredAnnotationsByType(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getDeclaredAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getAnnotatedSuperclass(): AllJavaClasses['java.lang.reflect.AnnotatedType']['instanceObject']
    getAnnotatedInterfaces(): AllJavaClasses['java.lang.reflect.AnnotatedType']['instanceObject'][]
    isNestmateOf(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): boolean
    getNestMembers(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    isSealed(): boolean
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.reflect.GenericDeclaration']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.reflect.Type']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.reflect.AnnotatedElement']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.invoke.TypeDescriptor$OfField']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.constant.Constable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_ClassLoader = {
  staticObject: {
    getPlatformClassLoader(): AllJavaClasses['java.lang.ClassLoader']['instanceObject']
    getSystemClassLoader(): AllJavaClasses['java.lang.ClassLoader']['instanceObject']
    getSystemResourceAsStream(
      arg0: string,
    ): AllJavaClasses['java.io.InputStream']['instanceObject']
    getSystemResource(
      arg0: string,
    ): AllJavaClasses['java.net.URL']['instanceObject']
    getSystemResources(
      arg0: string,
    ): AllJavaClasses['java.util.Enumeration']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.lang.ClassLoader'
    getName(): string
    loadClass(arg0: string): AllJavaClasses['java.lang.Class']['instanceObject']
    getResourceAsStream(
      arg0: string,
    ): AllJavaClasses['java.io.InputStream']['instanceObject']
    getResource(arg0: string): AllJavaClasses['java.net.URL']['instanceObject']
    getResources(
      arg0: string,
    ): AllJavaClasses['java.util.Enumeration']['instanceObject']
    getDefinedPackage(
      arg0: string,
    ): AllJavaClasses['java.lang.Package']['instanceObject']
    resources(
      arg0: string,
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    isRegisteredAsParallelCapable(): boolean
    getParent(): AllJavaClasses['java.lang.ClassLoader']['instanceObject']
    getUnnamedModule(): AllJavaClasses['java.lang.Module']['instanceObject']
    getDefinedPackages(): AllJavaClasses['java.lang.Package']['instanceObject'][]
    setDefaultAssertionStatus(arg0: boolean): void
    setPackageAssertionStatus(arg0: string, arg1: boolean): void
    setClassAssertionStatus(arg0: string, arg1: boolean): void
    clearAssertionStatus(): void
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_io_InputStream = {
  staticObject: {
    new (): AllJavaClasses['java.io.InputStream']['instanceObject']
    nullInputStream(): AllJavaClasses['java.io.InputStream']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.io.InputStream'
    reset(): void
    read(arg0: number[]): number
    read(arg0: number[], arg1: number, arg2: number): number
    read(): number
    close(): void
    readAllBytes(): number[]
    mark(arg0: number): void
    readNBytes(arg0: number[], arg1: number, arg2: number): number
    readNBytes(arg0: number): number[]
    transferTo(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
    ): number
    skip(arg0: number): number
    available(): number
    markSupported(): boolean
    skipNBytes(arg0: number): void
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<AllJavaClasses['java.io.Closeable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_io_OutputStream = {
  staticObject: {
    new (): AllJavaClasses['java.io.OutputStream']['instanceObject']
    nullOutputStream(): AllJavaClasses['java.io.OutputStream']['instanceObject']
  }
  instanceObject: (({
    __javaClass: 'java.io.OutputStream'
    flush(): void
    write(arg0: number[]): void
    write(arg0: number[], arg1: number, arg2: number): void
    write(arg0: number): void
    close(): void
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Closeable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<AllJavaClasses['java.io.Flushable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_io_Closeable = {
  staticObject: object
  instanceObject: { __javaClass: 'java.io.Closeable'; close(): void } & Omit<
    AllJavaClasses['java.lang.AutoCloseable']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_AutoCloseable = {
  staticObject: object
  instanceObject: { __javaClass: 'java.lang.AutoCloseable'; close(): void }
}
type AllJavaClass_java_io_Flushable = {
  staticObject: object
  instanceObject: { __javaClass: 'java.io.Flushable'; flush(): void }
}
type AllJavaClass_java_net_URL = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.net.URL']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.net.URLStreamHandler']['instanceObject'],
    ): AllJavaClasses['java.net.URL']['instanceObject']
    new (
      arg0: AllJavaClasses['java.net.URL']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['java.net.URL']['instanceObject']
    new (arg0: string): AllJavaClasses['java.net.URL']['instanceObject']
    new (
      arg0: string,
      arg1: string,
      arg2: number,
      arg3: string,
    ): AllJavaClasses['java.net.URL']['instanceObject']
    new (
      arg0: string,
      arg1: string,
      arg2: string,
    ): AllJavaClasses['java.net.URL']['instanceObject']
    new (
      arg0: string,
      arg1: string,
      arg2: number,
      arg3: string,
      arg4: AllJavaClasses['java.net.URLStreamHandler']['instanceObject'],
    ): AllJavaClasses['java.net.URL']['instanceObject']
    of(
      arg0: AllJavaClasses['java.net.URI']['instanceObject'],
      arg1: AllJavaClasses['java.net.URLStreamHandler']['instanceObject'],
    ): AllJavaClasses['java.net.URL']['instanceObject']
    setURLStreamHandlerFactory(
      arg0: AllJavaClasses['java.net.URLStreamHandlerFactory']['instanceObject'],
    ): void
  }
  instanceObject: ({
    __javaClass: 'java.net.URL'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    openStream(): AllJavaClasses['java.io.InputStream']['instanceObject']
    getHost(): string
    getPort(): number
    getDefaultPort(): number
    sameFile(arg0: AllJavaClasses['java.net.URL']['instanceObject']): boolean
    toExternalForm(): string
    openConnection(): AllJavaClasses['java.net.URLConnection']['instanceObject']
    openConnection(
      arg0: AllJavaClasses['java.net.Proxy']['instanceObject'],
    ): AllJavaClasses['java.net.URLConnection']['instanceObject']
    getContent(): AllJavaClasses['java.lang.Object']['instanceObject']
    getContent(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getProtocol(): string
    getAuthority(): string
    getFile(): string
    getRef(): string
    getQuery(): string
    getPath(): string
    getUserInfo(): string
    toURI(): AllJavaClasses['java.net.URI']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_net_URLStreamHandler = {
  staticObject: {
    new (): AllJavaClasses['java.net.URLStreamHandler']['instanceObject']
  }
  instanceObject: { __javaClass: 'java.net.URLStreamHandler' } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_net_URI = {
  staticObject: {
    new (
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: string,
    ): AllJavaClasses['java.net.URI']['instanceObject']
    new (
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
    ): AllJavaClasses['java.net.URI']['instanceObject']
    new (
      arg0: string,
      arg1: string,
      arg2: string,
    ): AllJavaClasses['java.net.URI']['instanceObject']
    new (arg0: string): AllJavaClasses['java.net.URI']['instanceObject']
    new (
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: number,
      arg4: string,
      arg5: string,
      arg6: string,
    ): AllJavaClasses['java.net.URI']['instanceObject']
    create(arg0: string): AllJavaClasses['java.net.URI']['instanceObject']
  }
  instanceObject: (({
    __javaClass: 'java.net.URI'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(arg0: AllJavaClasses['java.net.URI']['instanceObject']): number
    isAbsolute(): boolean
    resolve(arg0: string): AllJavaClasses['java.net.URI']['instanceObject']
    resolve(
      arg0: AllJavaClasses['java.net.URI']['instanceObject'],
    ): AllJavaClasses['java.net.URI']['instanceObject']
    getScheme(): string
    isOpaque(): boolean
    getRawAuthority(): string
    getRawFragment(): string
    getRawQuery(): string
    getRawPath(): string
    getHost(): string
    getPort(): number
    getAuthority(): string
    getQuery(): string
    getPath(): string
    getUserInfo(): string
    toURL(): AllJavaClasses['java.net.URL']['instanceObject']
    normalize(): AllJavaClasses['java.net.URI']['instanceObject']
    relativize(
      arg0: AllJavaClasses['java.net.URI']['instanceObject'],
    ): AllJavaClasses['java.net.URI']['instanceObject']
    getRawSchemeSpecificPart(): string
    parseServerAuthority(): AllJavaClasses['java.net.URI']['instanceObject']
    getSchemeSpecificPart(): string
    getRawUserInfo(): string
    getFragment(): string
    toASCIIString(): string
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_Comparable = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.Comparable'
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
  }
}
type AllJavaClass_java_io_Serializable = {
  staticObject: object
  instanceObject: { __javaClass: 'java.io.Serializable' }
}
type AllJavaClass_java_net_URLConnection = {
  staticObject: {
    getFileNameMap(): AllJavaClasses['java.net.FileNameMap']['instanceObject']
    guessContentTypeFromStream(
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
    ): string
    guessContentTypeFromName(arg0: string): string
    getDefaultUseCaches(arg0: string): boolean
    setFileNameMap(
      arg0: AllJavaClasses['java.net.FileNameMap']['instanceObject'],
    ): void
    setDefaultAllowUserInteraction(arg0: boolean): void
    getDefaultAllowUserInteraction(): boolean
    setDefaultUseCaches(arg0: string, arg1: boolean): void
    setDefaultRequestProperty(arg0: string, arg1: string): void
    getDefaultRequestProperty(arg0: string): string
    setContentHandlerFactory(
      arg0: AllJavaClasses['java.net.ContentHandlerFactory']['instanceObject'],
    ): void
  }
  instanceObject: {
    __javaClass: 'java.net.URLConnection'
    toString(): string
    connect(): void
    getInputStream(): AllJavaClasses['java.io.InputStream']['instanceObject']
    getContent(): AllJavaClasses['java.lang.Object']['instanceObject']
    getContent(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getPermission(): AllJavaClasses['java.security.Permission']['instanceObject']
    getDate(): number
    setUseCaches(arg0: boolean): void
    getLastModified(): number
    getContentLength(): number
    getURL(): AllJavaClasses['java.net.URL']['instanceObject']
    setRequestProperty(arg0: string, arg1: string): void
    getHeaderFields(): AllJavaClasses['java.util.Map']['instanceObject']
    getHeaderField(arg0: number): string
    getHeaderField(arg0: string): string
    getHeaderFieldKey(arg0: number): string
    getContentLengthLong(): number
    addRequestProperty(arg0: string, arg1: string): void
    getRequestProperty(arg0: string): string
    getRequestProperties(): AllJavaClasses['java.util.Map']['instanceObject']
    getContentType(): string
    getDefaultUseCaches(): boolean
    getHeaderFieldLong(arg0: string, arg1: number): number
    getHeaderFieldDate(arg0: string, arg1: number): number
    setConnectTimeout(arg0: number): void
    getConnectTimeout(): number
    setReadTimeout(arg0: number): void
    getReadTimeout(): number
    getContentEncoding(): string
    getExpiration(): number
    getHeaderFieldInt(arg0: string, arg1: number): number
    getOutputStream(): AllJavaClasses['java.io.OutputStream']['instanceObject']
    setDoInput(arg0: boolean): void
    getDoInput(): boolean
    setDoOutput(arg0: boolean): void
    getDoOutput(): boolean
    setAllowUserInteraction(arg0: boolean): void
    getAllowUserInteraction(): boolean
    getUseCaches(): boolean
    setIfModifiedSince(arg0: number): void
    getIfModifiedSince(): number
    setDefaultUseCaches(arg0: boolean): void
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_security_Permission = {
  staticObject: {
    new (
      arg0: string,
    ): AllJavaClasses['java.security.Permission']['instanceObject']
  }
  instanceObject: (({
    __javaClass: 'java.security.Permission'
    getName(): string
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    implies(
      arg0: AllJavaClasses['java.security.Permission']['instanceObject'],
    ): boolean
    getActions(): string
    newPermissionCollection(): AllJavaClasses['java.security.PermissionCollection']['instanceObject']
    checkGuard(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.security.Guard']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_security_PermissionCollection = {
  staticObject: {
    new (): AllJavaClasses['java.security.PermissionCollection']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.security.PermissionCollection'
    toString(): string
    add(
      arg0: AllJavaClasses['java.security.Permission']['instanceObject'],
    ): void
    elements(): AllJavaClasses['java.util.Enumeration']['instanceObject']
    setReadOnly(): void
    implies(
      arg0: AllJavaClasses['java.security.Permission']['instanceObject'],
    ): boolean
    isReadOnly(): boolean
    elementsAsStream(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_util_Enumeration = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.Enumeration'
    asIterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    hasMoreElements(): boolean
    nextElement(): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_java_util_Iterator = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.Iterator'
    remove(): void
    forEachRemaining(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): void
    hasNext(): boolean
    next(): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_java_util_function_Consumer = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.Consumer'
    accept(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
    andThen(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): AllJavaClasses['java.util.function.Consumer']['instanceObject']
  }
}
type AllJavaClass_java_util_stream_Stream = {
  staticObject: {
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    builder(): AllJavaClasses['java.util.stream.Stream$Builder']['instanceObject']
    concat(
      arg0: AllJavaClasses['java.util.stream.Stream']['instanceObject'],
      arg1: AllJavaClasses['java.util.stream.Stream']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    empty(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    iterate(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.UnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    iterate(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.UnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    ofNullable(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    generate(
      arg0: AllJavaClasses['java.util.function.Supplier']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.stream.Stream'
    min(
      arg0: AllJavaClasses['java.util.Comparator']['instanceObject'],
    ): AllJavaClasses['java.util.Optional']['instanceObject']
    max(
      arg0: AllJavaClasses['java.util.Comparator']['instanceObject'],
    ): AllJavaClasses['java.util.Optional']['instanceObject']
    toArray(): AllJavaClasses['java.lang.Object']['instanceObject'][]
    toArray(
      arg0: AllJavaClasses['java.util.function.IntFunction']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject'][]
    map(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    collect(
      arg0: AllJavaClasses['java.util.function.Supplier']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    collect(
      arg0: AllJavaClasses['java.util.stream.Collector']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    toList(): AllJavaClasses['java.util.List']['instanceObject']
    count(): number
    limit(
      arg0: number,
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    filter(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    anyMatch(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): boolean
    flatMap(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    forEach(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): void
    findAny(): AllJavaClasses['java.util.Optional']['instanceObject']
    skip(
      arg0: number,
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    peek(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    reduce(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.BinaryOperator']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    reduce(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.BinaryOperator']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    reduce(
      arg0: AllJavaClasses['java.util.function.BinaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.Optional']['instanceObject']
    distinct(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    findFirst(): AllJavaClasses['java.util.Optional']['instanceObject']
    allMatch(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): boolean
    noneMatch(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): boolean
    sorted(
      arg0: AllJavaClasses['java.util.Comparator']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    sorted(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    forEachOrdered(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): void
    mapToInt(
      arg0: AllJavaClasses['java.util.function.ToIntFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    mapToLong(
      arg0: AllJavaClasses['java.util.function.ToLongFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    mapToDouble(
      arg0: AllJavaClasses['java.util.function.ToDoubleFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    mapMulti(
      arg0: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    takeWhile(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    dropWhile(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    flatMapToInt(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    flatMapToDouble(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    flatMapToLong(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    mapMultiToInt(
      arg0: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    mapMultiToLong(
      arg0: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    mapMultiToDouble(
      arg0: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.stream.BaseStream']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_Optional = {
  staticObject: {
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Optional']['instanceObject']
    empty(): AllJavaClasses['java.util.Optional']['instanceObject']
    ofNullable(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Optional']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.Optional'
    get(): AllJavaClasses['java.lang.Object']['instanceObject']
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    isEmpty(): boolean
    map(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.util.Optional']['instanceObject']
    stream(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    filter(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): AllJavaClasses['java.util.Optional']['instanceObject']
    flatMap(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.util.Optional']['instanceObject']
    isPresent(): boolean
    orElse(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    orElseThrow(
      arg0: AllJavaClasses['java.util.function.Supplier']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    orElseThrow(): AllJavaClasses['java.lang.Object']['instanceObject']
    ifPresent(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): void
    ifPresentOrElse(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Runnable']['instanceObject'],
    ): void
    or(
      arg0: AllJavaClasses['java.util.function.Supplier']['instanceObject'],
    ): AllJavaClasses['java.util.Optional']['instanceObject']
    orElseGet(
      arg0: AllJavaClasses['java.util.function.Supplier']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_util_function_Function = {
  staticObject: {
    identity(): AllJavaClasses['java.util.function.Function']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.function.Function'
    apply(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    compose(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.util.function.Function']['instanceObject']
    andThen(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.util.function.Function']['instanceObject']
  }
}
type AllJavaClass_java_util_function_Predicate = {
  staticObject: {
    not(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): AllJavaClasses['java.util.function.Predicate']['instanceObject']
    isEqual(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.function.Predicate']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.function.Predicate'
    test(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    or(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): AllJavaClasses['java.util.function.Predicate']['instanceObject']
    negate(): AllJavaClasses['java.util.function.Predicate']['instanceObject']
    and(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): AllJavaClasses['java.util.function.Predicate']['instanceObject']
  }
}
type AllJavaClass_java_util_function_Supplier = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.Supplier'
    get(): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_java_lang_Runnable = {
  staticObject: object
  instanceObject: { __javaClass: 'java.lang.Runnable'; run(): void }
}
type AllJavaClass_java_util_Comparator = {
  staticObject: {
    reverseOrder(): AllJavaClasses['java.util.Comparator']['instanceObject']
    comparing(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.util.Comparator']['instanceObject']
    comparing(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
      arg1: AllJavaClasses['java.util.Comparator']['instanceObject'],
    ): AllJavaClasses['java.util.Comparator']['instanceObject']
    comparingInt(
      arg0: AllJavaClasses['java.util.function.ToIntFunction']['instanceObject'],
    ): AllJavaClasses['java.util.Comparator']['instanceObject']
    comparingLong(
      arg0: AllJavaClasses['java.util.function.ToLongFunction']['instanceObject'],
    ): AllJavaClasses['java.util.Comparator']['instanceObject']
    comparingDouble(
      arg0: AllJavaClasses['java.util.function.ToDoubleFunction']['instanceObject'],
    ): AllJavaClasses['java.util.Comparator']['instanceObject']
    naturalOrder(): AllJavaClasses['java.util.Comparator']['instanceObject']
    nullsFirst(
      arg0: AllJavaClasses['java.util.Comparator']['instanceObject'],
    ): AllJavaClasses['java.util.Comparator']['instanceObject']
    nullsLast(
      arg0: AllJavaClasses['java.util.Comparator']['instanceObject'],
    ): AllJavaClasses['java.util.Comparator']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.Comparator'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    compare(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    reversed(): AllJavaClasses['java.util.Comparator']['instanceObject']
    thenComparing(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
      arg1: AllJavaClasses['java.util.Comparator']['instanceObject'],
    ): AllJavaClasses['java.util.Comparator']['instanceObject']
    thenComparing(
      arg0: AllJavaClasses['java.util.Comparator']['instanceObject'],
    ): AllJavaClasses['java.util.Comparator']['instanceObject']
    thenComparing(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.util.Comparator']['instanceObject']
    thenComparingInt(
      arg0: AllJavaClasses['java.util.function.ToIntFunction']['instanceObject'],
    ): AllJavaClasses['java.util.Comparator']['instanceObject']
    thenComparingLong(
      arg0: AllJavaClasses['java.util.function.ToLongFunction']['instanceObject'],
    ): AllJavaClasses['java.util.Comparator']['instanceObject']
    thenComparingDouble(
      arg0: AllJavaClasses['java.util.function.ToDoubleFunction']['instanceObject'],
    ): AllJavaClasses['java.util.Comparator']['instanceObject']
  }
}
type AllJavaClass_java_util_function_ToIntFunction = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.ToIntFunction'
    applyAsInt(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
  }
}
type AllJavaClass_java_util_function_ToLongFunction = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.ToLongFunction'
    applyAsLong(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
  }
}
type AllJavaClass_java_util_function_ToDoubleFunction = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.ToDoubleFunction'
    applyAsDouble(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
  }
}
type AllJavaClass_java_util_function_IntFunction = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.IntFunction'
    apply(arg0: number): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_java_util_function_BiConsumer = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.BiConsumer'
    accept(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    andThen(
      arg0: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
    ): AllJavaClasses['java.util.function.BiConsumer']['instanceObject']
  }
}
type AllJavaClass_java_util_stream_Collector = {
  staticObject: {
    of(
      arg0: AllJavaClasses['java.util.function.Supplier']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.BinaryOperator']['instanceObject'],
      arg3: AllJavaClasses['java.util.function.Function']['instanceObject'],
      arg4: AllJavaClasses['java.util.stream.Collector$Characteristics']['instanceObject'][],
    ): AllJavaClasses['java.util.stream.Collector']['instanceObject']
    of(
      arg0: AllJavaClasses['java.util.function.Supplier']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.BinaryOperator']['instanceObject'],
      arg3: AllJavaClasses['java.util.stream.Collector$Characteristics']['instanceObject'][],
    ): AllJavaClasses['java.util.stream.Collector']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.stream.Collector'
    characteristics(): AllJavaClasses['java.util.Set']['instanceObject']
    combiner(): AllJavaClasses['java.util.function.BinaryOperator']['instanceObject']
    supplier(): AllJavaClasses['java.util.function.Supplier']['instanceObject']
    accumulator(): AllJavaClasses['java.util.function.BiConsumer']['instanceObject']
    finisher(): AllJavaClasses['java.util.function.Function']['instanceObject']
  }
}
type AllJavaClass_java_util_function_BinaryOperator = {
  staticObject: {
    minBy(
      arg0: AllJavaClasses['java.util.Comparator']['instanceObject'],
    ): AllJavaClasses['java.util.function.BinaryOperator']['instanceObject']
    maxBy(
      arg0: AllJavaClasses['java.util.Comparator']['instanceObject'],
    ): AllJavaClasses['java.util.function.BinaryOperator']['instanceObject']
  }
  instanceObject: { __javaClass: 'java.util.function.BinaryOperator' } & Omit<
    AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_function_BiFunction = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.BiFunction'
    apply(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    andThen(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.util.function.BiFunction']['instanceObject']
  }
}
type AllJavaClass_java_util_stream_Collector$Characteristics = {
  staticObject: {
    CONCURRENT: AllJavaClasses['java.util.stream.Collector$Characteristics']['instanceObject']
    UNORDERED: AllJavaClasses['java.util.stream.Collector$Characteristics']['instanceObject']
    IDENTITY_FINISH: AllJavaClasses['java.util.stream.Collector$Characteristics']['instanceObject']
    values(): AllJavaClasses['java.util.stream.Collector$Characteristics']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['java.util.stream.Collector$Characteristics']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.stream.Collector$Characteristics'
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_lang_Enum = {
  staticObject: {
    valueOf(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['java.lang.Enum']['instanceObject']
  }
  instanceObject: ((({
    __javaClass: 'java.lang.Enum'
    name(): string
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(arg0: AllJavaClasses['java.lang.Enum']['instanceObject']): number
    describeConstable(): AllJavaClasses['java.util.Optional']['instanceObject']
    getDeclaringClass(): AllJavaClasses['java.lang.Class']['instanceObject']
    ordinal(): number
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.constant.Constable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_constant_Constable = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.constant.Constable'
    describeConstable(): AllJavaClasses['java.util.Optional']['instanceObject']
  }
}
type AllJavaClass_java_util_Set = {
  staticObject: {
    copyOf(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): AllJavaClasses['java.util.Set']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Set']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Set']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Set']['instanceObject']
    of(): AllJavaClasses['java.util.Set']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg6: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg7: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg8: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg9: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Set']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg6: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg7: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg8: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Set']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg6: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg7: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Set']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg6: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Set']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.util.Set']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Set']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Set']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Set']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.Set'
    remove(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    size(): number
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    hashCode(): number
    clear(): void
    isEmpty(): boolean
    add(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toArray(): AllJavaClasses['java.lang.Object']['instanceObject'][]
    toArray(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject'][]
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    contains(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    spliterator(): AllJavaClasses['java.util.Spliterator']['instanceObject']
    addAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    removeAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    retainAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    containsAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
  } & Omit<
    AllJavaClasses['java.util.Collection']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_Collection = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.Collection'
    remove(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    size(): number
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    hashCode(): number
    clear(): void
    isEmpty(): boolean
    add(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toArray(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject'][]
    toArray(
      arg0: AllJavaClasses['java.util.function.IntFunction']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject'][]
    toArray(): AllJavaClasses['java.lang.Object']['instanceObject'][]
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    stream(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    contains(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    spliterator(): AllJavaClasses['java.util.Spliterator']['instanceObject']
    addAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    removeIf(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): boolean
    removeAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    retainAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    containsAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    parallelStream(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Iterable']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_Spliterator = {
  staticObject: {
    ORDERED: number
    DISTINCT: number
    SORTED: number
    SIZED: number
    NONNULL: number
    IMMUTABLE: number
    CONCURRENT: number
    SUBSIZED: number
  }
  instanceObject: {
    __javaClass: 'java.util.Spliterator'
    forEachRemaining(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): void
    characteristics(): number
    tryAdvance(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): boolean
    trySplit(): AllJavaClasses['java.util.Spliterator']['instanceObject']
    estimateSize(): number
    getExactSizeIfKnown(): number
    hasCharacteristics(arg0: number): boolean
    getComparator(): AllJavaClasses['java.util.Comparator']['instanceObject']
  }
}
type AllJavaClass_java_lang_Iterable = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.Iterable'
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    spliterator(): AllJavaClasses['java.util.Spliterator']['instanceObject']
    forEach(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): void
  }
}
type AllJavaClass_java_util_List = {
  staticObject: {
    copyOf(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg6: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg7: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg8: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg9: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg6: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg7: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg8: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    of(): AllJavaClasses['java.util.List']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg6: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg6: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg7: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.util.List']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.List'
    remove(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    remove(arg0: number): AllJavaClasses['java.lang.Object']['instanceObject']
    size(): number
    get(arg0: number): AllJavaClasses['java.lang.Object']['instanceObject']
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    hashCode(): number
    indexOf(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): number
    clear(): void
    lastIndexOf(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    isEmpty(): boolean
    replaceAll(
      arg0: AllJavaClasses['java.util.function.UnaryOperator']['instanceObject'],
    ): void
    add(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    add(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    subList(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.util.List']['instanceObject']
    toArray(): AllJavaClasses['java.lang.Object']['instanceObject'][]
    toArray(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject'][]
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    contains(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    spliterator(): AllJavaClasses['java.util.Spliterator']['instanceObject']
    addAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    addAll(
      arg0: number,
      arg1: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    set(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    sort(arg0: AllJavaClasses['java.util.Comparator']['instanceObject']): void
    getFirst(): AllJavaClasses['java.lang.Object']['instanceObject']
    getLast(): AllJavaClasses['java.lang.Object']['instanceObject']
    addFirst(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
    addLast(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
    removeFirst(): AllJavaClasses['java.lang.Object']['instanceObject']
    removeLast(): AllJavaClasses['java.lang.Object']['instanceObject']
    removeAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    retainAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    listIterator(): AllJavaClasses['java.util.ListIterator']['instanceObject']
    listIterator(
      arg0: number,
    ): AllJavaClasses['java.util.ListIterator']['instanceObject']
    reversed(): AllJavaClasses['java.util.SequencedCollection']['instanceObject']
    reversed(): AllJavaClasses['java.util.List']['instanceObject']
    containsAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
  } & Omit<
    AllJavaClasses['java.util.SequencedCollection']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_function_UnaryOperator = {
  staticObject: {
    identity(): AllJavaClasses['java.util.function.UnaryOperator']['instanceObject']
  }
  instanceObject: { __javaClass: 'java.util.function.UnaryOperator' } & Omit<
    AllJavaClasses['java.util.function.Function']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_ListIterator = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.ListIterator'
    remove(): void
    add(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
    hasNext(): boolean
    next(): AllJavaClasses['java.lang.Object']['instanceObject']
    set(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
    nextIndex(): number
    previousIndex(): number
    hasPrevious(): boolean
    previous(): AllJavaClasses['java.lang.Object']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.Iterator']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_SequencedCollection = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.SequencedCollection'
    getFirst(): AllJavaClasses['java.lang.Object']['instanceObject']
    getLast(): AllJavaClasses['java.lang.Object']['instanceObject']
    addFirst(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
    addLast(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
    removeFirst(): AllJavaClasses['java.lang.Object']['instanceObject']
    removeLast(): AllJavaClasses['java.lang.Object']['instanceObject']
    reversed(): AllJavaClasses['java.util.SequencedCollection']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.Collection']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_stream_Stream$Builder = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.stream.Stream$Builder'
    add(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream$Builder']['instanceObject']
    accept(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
    build(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_stream_IntStream = {
  staticObject: {
    of(
      arg0: number,
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    of(
      arg0: number[],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    builder(): AllJavaClasses['java.util.stream.IntStream$Builder']['instanceObject']
    concat(
      arg0: AllJavaClasses['java.util.stream.IntStream']['instanceObject'],
      arg1: AllJavaClasses['java.util.stream.IntStream']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    empty(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    range(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    iterate(
      arg0: number,
      arg1: AllJavaClasses['java.util.function.IntUnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    iterate(
      arg0: number,
      arg1: AllJavaClasses['java.util.function.IntPredicate']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.IntUnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    generate(
      arg0: AllJavaClasses['java.util.function.IntSupplier']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    rangeClosed(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.stream.IntStream'
    min(): AllJavaClasses['java.util.OptionalInt']['instanceObject']
    max(): AllJavaClasses['java.util.OptionalInt']['instanceObject']
    toArray(): number[]
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    iterator(): AllJavaClasses['java.util.PrimitiveIterator$OfInt']['instanceObject']
    map(
      arg0: AllJavaClasses['java.util.function.IntUnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    collect(
      arg0: AllJavaClasses['java.util.function.Supplier']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.ObjIntConsumer']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    count(): number
    limit(
      arg0: number,
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    spliterator(): AllJavaClasses['java.util.Spliterator$OfInt']['instanceObject']
    spliterator(): AllJavaClasses['java.util.Spliterator']['instanceObject']
    filter(
      arg0: AllJavaClasses['java.util.function.IntPredicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    anyMatch(
      arg0: AllJavaClasses['java.util.function.IntPredicate']['instanceObject'],
    ): boolean
    flatMap(
      arg0: AllJavaClasses['java.util.function.IntFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    forEach(
      arg0: AllJavaClasses['java.util.function.IntConsumer']['instanceObject'],
    ): void
    findAny(): AllJavaClasses['java.util.OptionalInt']['instanceObject']
    skip(
      arg0: number,
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    peek(
      arg0: AllJavaClasses['java.util.function.IntConsumer']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    sum(): number
    reduce(
      arg0: number,
      arg1: AllJavaClasses['java.util.function.IntBinaryOperator']['instanceObject'],
    ): number
    reduce(
      arg0: AllJavaClasses['java.util.function.IntBinaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.OptionalInt']['instanceObject']
    parallel(): AllJavaClasses['java.util.stream.BaseStream']['instanceObject']
    parallel(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    distinct(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    findFirst(): AllJavaClasses['java.util.OptionalInt']['instanceObject']
    allMatch(
      arg0: AllJavaClasses['java.util.function.IntPredicate']['instanceObject'],
    ): boolean
    noneMatch(
      arg0: AllJavaClasses['java.util.function.IntPredicate']['instanceObject'],
    ): boolean
    mapToObj(
      arg0: AllJavaClasses['java.util.function.IntFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    sorted(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    sequential(): AllJavaClasses['java.util.stream.BaseStream']['instanceObject']
    sequential(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    forEachOrdered(
      arg0: AllJavaClasses['java.util.function.IntConsumer']['instanceObject'],
    ): void
    boxed(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    asLongStream(): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    asDoubleStream(): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    mapToLong(
      arg0: AllJavaClasses['java.util.function.IntToLongFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    mapToDouble(
      arg0: AllJavaClasses['java.util.function.IntToDoubleFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    mapMulti(
      arg0: AllJavaClasses['java.util.stream.IntStream$IntMapMultiConsumer']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    takeWhile(
      arg0: AllJavaClasses['java.util.function.IntPredicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    dropWhile(
      arg0: AllJavaClasses['java.util.function.IntPredicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    average(): AllJavaClasses['java.util.OptionalDouble']['instanceObject']
    summaryStatistics(): AllJavaClasses['java.util.IntSummaryStatistics']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.stream.BaseStream']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_OptionalInt = {
  staticObject: {
    of(arg0: number): AllJavaClasses['java.util.OptionalInt']['instanceObject']
    empty(): AllJavaClasses['java.util.OptionalInt']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.OptionalInt'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    isEmpty(): boolean
    stream(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    isPresent(): boolean
    orElse(arg0: number): number
    orElseThrow(
      arg0: AllJavaClasses['java.util.function.Supplier']['instanceObject'],
    ): number
    orElseThrow(): number
    ifPresent(
      arg0: AllJavaClasses['java.util.function.IntConsumer']['instanceObject'],
    ): void
    ifPresentOrElse(
      arg0: AllJavaClasses['java.util.function.IntConsumer']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Runnable']['instanceObject'],
    ): void
    orElseGet(
      arg0: AllJavaClasses['java.util.function.IntSupplier']['instanceObject'],
    ): number
    getAsInt(): number
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_util_function_IntConsumer = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.IntConsumer'
    accept(arg0: number): void
    andThen(
      arg0: AllJavaClasses['java.util.function.IntConsumer']['instanceObject'],
    ): AllJavaClasses['java.util.function.IntConsumer']['instanceObject']
  }
}
type AllJavaClass_java_util_function_IntSupplier = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.IntSupplier'
    getAsInt(): number
  }
}
type AllJavaClass_java_util_PrimitiveIterator$OfInt = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.PrimitiveIterator$OfInt'
    forEachRemaining(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    forEachRemaining(
      arg0: AllJavaClasses['java.util.function.IntConsumer']['instanceObject'],
    ): void
    forEachRemaining(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): void
    next(): AllJavaClasses['java.lang.Object']['instanceObject']
    next(): AllJavaClasses['java.lang.Integer']['instanceObject']
    nextInt(): number
  } & Omit<
    AllJavaClasses['java.util.PrimitiveIterator']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_Integer = {
  staticObject: {
    MIN_VALUE: number
    MAX_VALUE: number
    TYPE: AllJavaClasses['java.lang.Class']['instanceObject']
    SIZE: number
    BYTES: number
    new (arg0: string): AllJavaClasses['java.lang.Integer']['instanceObject']
    new (arg0: number): AllJavaClasses['java.lang.Integer']['instanceObject']
    numberOfLeadingZeros(arg0: number): number
    numberOfTrailingZeros(arg0: number): number
    bitCount(arg0: number): number
    toString(arg0: number): string
    toString(arg0: number, arg1: number): string
    hashCode(arg0: number): number
    min(arg0: number, arg1: number): number
    max(arg0: number, arg1: number): number
    signum(arg0: number): number
    expand(arg0: number, arg1: number): number
    compareUnsigned(arg0: number, arg1: number): number
    divideUnsigned(arg0: number, arg1: number): number
    remainderUnsigned(arg0: number, arg1: number): number
    reverse(arg0: number): number
    reverseBytes(arg0: number): number
    compress(arg0: number, arg1: number): number
    compare(arg0: number, arg1: number): number
    valueOf(arg0: string): AllJavaClasses['java.lang.Integer']['instanceObject']
    valueOf(arg0: number): AllJavaClasses['java.lang.Integer']['instanceObject']
    valueOf(
      arg0: string,
      arg1: number,
    ): AllJavaClasses['java.lang.Integer']['instanceObject']
    toHexString(arg0: number): string
    decode(arg0: string): AllJavaClasses['java.lang.Integer']['instanceObject']
    parseInt(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: number,
    ): number
    parseInt(arg0: string): number
    parseInt(arg0: string, arg1: number): number
    toUnsignedLong(arg0: number): number
    sum(arg0: number, arg1: number): number
    toUnsignedString(arg0: number, arg1: number): string
    toUnsignedString(arg0: number): string
    parseUnsignedInt(arg0: string, arg1: number): number
    parseUnsignedInt(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: number,
    ): number
    parseUnsignedInt(arg0: string): number
    getInteger(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Integer']['instanceObject'],
    ): AllJavaClasses['java.lang.Integer']['instanceObject']
    getInteger(
      arg0: string,
    ): AllJavaClasses['java.lang.Integer']['instanceObject']
    getInteger(
      arg0: string,
      arg1: number,
    ): AllJavaClasses['java.lang.Integer']['instanceObject']
    toOctalString(arg0: number): string
    toBinaryString(arg0: number): string
    highestOneBit(arg0: number): number
    lowestOneBit(arg0: number): number
    rotateLeft(arg0: number, arg1: number): number
    rotateRight(arg0: number, arg1: number): number
  }
  instanceObject: ((({
    __javaClass: 'java.lang.Integer'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Integer']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    byteValue(): number
    shortValue(): number
    intValue(): number
    longValue(): number
    floatValue(): number
    doubleValue(): number
    resolveConstantDesc(
      arg0: AllJavaClasses['java.lang.invoke.MethodHandles$Lookup']['instanceObject'],
    ): AllJavaClasses['java.lang.Integer']['instanceObject']
    resolveConstantDesc(
      arg0: AllJavaClasses['java.lang.invoke.MethodHandles$Lookup']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    describeConstable(): AllJavaClasses['java.util.Optional']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Number']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.constant.Constable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.constant.ConstantDesc']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_invoke_MethodHandles$Lookup = {
  staticObject: {
    PUBLIC: number
    PRIVATE: number
    PROTECTED: number
    PACKAGE: number
    MODULE: number
    UNCONDITIONAL: number
    ORIGINAL: number
  }
  instanceObject: {
    __javaClass: 'java.lang.invoke.MethodHandles$Lookup'
    toString(): string
    findClass(arg0: string): AllJavaClasses['java.lang.Class']['instanceObject']
    defineClass(
      arg0: number[],
    ): AllJavaClasses['java.lang.Class']['instanceObject']
    in(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodHandles$Lookup']['instanceObject']
    ensureInitialized(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.Class']['instanceObject']
    revealDirect(
      arg0: AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodHandleInfo']['instanceObject']
    lookupClass(): AllJavaClasses['java.lang.Class']['instanceObject']
    previousLookupClass(): AllJavaClasses['java.lang.Class']['instanceObject']
    findVirtual(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.invoke.MethodType']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    findStatic(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.invoke.MethodType']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    unreflect(
      arg0: AllJavaClasses['java.lang.reflect.Method']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    unreflectConstructor(
      arg0: AllJavaClasses['java.lang.reflect.Constructor']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    lookupModes(): number
    hasFullPrivilegeAccess(): boolean
    accessClass(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.Class']['instanceObject']
    dropLookupMode(
      arg0: number,
    ): AllJavaClasses['java.lang.invoke.MethodHandles$Lookup']['instanceObject']
    defineHiddenClass(
      arg0: number[],
      arg1: boolean,
      arg2: AllJavaClasses['java.lang.invoke.MethodHandles$Lookup$ClassOption']['instanceObject'][],
    ): AllJavaClasses['java.lang.invoke.MethodHandles$Lookup']['instanceObject']
    defineHiddenClassWithClassData(
      arg0: number[],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: boolean,
      arg3: AllJavaClasses['java.lang.invoke.MethodHandles$Lookup$ClassOption']['instanceObject'][],
    ): AllJavaClasses['java.lang.invoke.MethodHandles$Lookup']['instanceObject']
    findConstructor(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: AllJavaClasses['java.lang.invoke.MethodType']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    findSpecial(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.invoke.MethodType']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    findGetter(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    findSetter(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    findVarHandle(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.VarHandle']['instanceObject']
    findStaticGetter(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    findStaticSetter(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    findStaticVarHandle(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.VarHandle']['instanceObject']
    bind(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.invoke.MethodType']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    unreflectSpecial(
      arg0: AllJavaClasses['java.lang.reflect.Method']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    unreflectGetter(
      arg0: AllJavaClasses['java.lang.reflect.Field']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    unreflectSetter(
      arg0: AllJavaClasses['java.lang.reflect.Field']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    unreflectVarHandle(
      arg0: AllJavaClasses['java.lang.reflect.Field']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.VarHandle']['instanceObject']
    hasPrivateAccess(): boolean
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_lang_invoke_MethodHandleInfo = {
  staticObject: {
    REF_getField: number
    REF_getStatic: number
    REF_putField: number
    REF_putStatic: number
    REF_invokeVirtual: number
    REF_invokeStatic: number
    REF_invokeSpecial: number
    REF_newInvokeSpecial: number
    REF_invokeInterface: number
    toString(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg2: string,
      arg3: AllJavaClasses['java.lang.invoke.MethodType']['instanceObject'],
    ): string
    referenceKindToString(arg0: number): string
  }
  instanceObject: {
    __javaClass: 'java.lang.invoke.MethodHandleInfo'
    getName(): string
    getModifiers(): number
    getDeclaringClass(): AllJavaClasses['java.lang.Class']['instanceObject']
    isVarArgs(): boolean
    getReferenceKind(): number
    getMethodType(): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    reflectAs(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: AllJavaClasses['java.lang.invoke.MethodHandles$Lookup']['instanceObject'],
    ): AllJavaClasses['java.lang.reflect.Member']['instanceObject']
  }
}
type AllJavaClass_java_lang_invoke_MethodType = {
  staticObject: {
    methodType(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Class']['instanceObject'][],
    ): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    methodType(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    methodType(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    methodType(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Class']['instanceObject'][],
    ): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    methodType(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: AllJavaClasses['java.util.List']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    methodType(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: AllJavaClasses['java.lang.invoke.MethodType']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    genericMethodType(
      arg0: number,
    ): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    genericMethodType(
      arg0: number,
      arg1: boolean,
    ): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    fromMethodDescriptorString(
      arg0: string,
      arg1: AllJavaClasses['java.lang.ClassLoader']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
  }
  instanceObject: ((({
    __javaClass: 'java.lang.invoke.MethodType'
    returnType(): AllJavaClasses['java.lang.Class']['instanceObject']
    returnType(): AllJavaClasses['java.lang.invoke.TypeDescriptor$OfField']['instanceObject']
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    wrap(): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    describeConstable(): AllJavaClasses['java.util.Optional']['instanceObject']
    descriptorString(): string
    parameterType(
      arg0: number,
    ): AllJavaClasses['java.lang.Class']['instanceObject']
    parameterType(
      arg0: number,
    ): AllJavaClasses['java.lang.invoke.TypeDescriptor$OfField']['instanceObject']
    insertParameterTypes(
      arg0: number,
      arg1: AllJavaClasses['java.util.List']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    insertParameterTypes(
      arg0: number,
      arg1: AllJavaClasses['java.lang.invoke.TypeDescriptor$OfField']['instanceObject'][],
    ): AllJavaClasses['java.lang.invoke.TypeDescriptor$OfMethod']['instanceObject']
    insertParameterTypes(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Class']['instanceObject'][],
    ): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    changeReturnType(
      arg0: AllJavaClasses['java.lang.invoke.TypeDescriptor$OfField']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.TypeDescriptor$OfMethod']['instanceObject']
    changeReturnType(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    dropParameterTypes(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.invoke.TypeDescriptor$OfMethod']['instanceObject']
    dropParameterTypes(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    appendParameterTypes(
      arg0: AllJavaClasses['java.util.List']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    appendParameterTypes(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'][],
    ): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    parameterCount(): number
    lastParameterType(): AllJavaClasses['java.lang.Class']['instanceObject']
    parameterList(): AllJavaClasses['java.util.List']['instanceObject']
    erase(): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    toMethodDescriptorString(): string
    hasPrimitives(): boolean
    unwrap(): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    parameterArray(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    parameterArray(): AllJavaClasses['java.lang.invoke.TypeDescriptor$OfField']['instanceObject'][]
    changeParameterType(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    changeParameterType(
      arg0: number,
      arg1: AllJavaClasses['java.lang.invoke.TypeDescriptor$OfField']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.TypeDescriptor$OfMethod']['instanceObject']
    hasWrappers(): boolean
    generic(): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.constant.Constable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.invoke.TypeDescriptor$OfMethod']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_invoke_TypeDescriptor$OfField = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.invoke.TypeDescriptor$OfField'
    isArray(): boolean
    isPrimitive(): boolean
    componentType(): AllJavaClasses['java.lang.invoke.TypeDescriptor$OfField']['instanceObject']
    arrayType(): AllJavaClasses['java.lang.invoke.TypeDescriptor$OfField']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.invoke.TypeDescriptor']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_invoke_TypeDescriptor = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.invoke.TypeDescriptor'
    descriptorString(): string
  }
}
type AllJavaClass_java_lang_invoke_TypeDescriptor$OfMethod = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.invoke.TypeDescriptor$OfMethod'
    returnType(): AllJavaClasses['java.lang.invoke.TypeDescriptor$OfField']['instanceObject']
    parameterType(
      arg0: number,
    ): AllJavaClasses['java.lang.invoke.TypeDescriptor$OfField']['instanceObject']
    insertParameterTypes(
      arg0: number,
      arg1: AllJavaClasses['java.lang.invoke.TypeDescriptor$OfField']['instanceObject'][],
    ): AllJavaClasses['java.lang.invoke.TypeDescriptor$OfMethod']['instanceObject']
    changeReturnType(
      arg0: AllJavaClasses['java.lang.invoke.TypeDescriptor$OfField']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.TypeDescriptor$OfMethod']['instanceObject']
    dropParameterTypes(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.invoke.TypeDescriptor$OfMethod']['instanceObject']
    parameterCount(): number
    parameterList(): AllJavaClasses['java.util.List']['instanceObject']
    parameterArray(): AllJavaClasses['java.lang.invoke.TypeDescriptor$OfField']['instanceObject'][]
    changeParameterType(
      arg0: number,
      arg1: AllJavaClasses['java.lang.invoke.TypeDescriptor$OfField']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.TypeDescriptor$OfMethod']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.invoke.TypeDescriptor']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_reflect_Member = {
  staticObject: { PUBLIC: number; DECLARED: number }
  instanceObject: {
    __javaClass: 'java.lang.reflect.Member'
    getName(): string
    getModifiers(): number
    isSynthetic(): boolean
    accessFlags(): AllJavaClasses['java.util.Set']['instanceObject']
    getDeclaringClass(): AllJavaClasses['java.lang.Class']['instanceObject']
  }
}
type AllJavaClass_java_lang_invoke_MethodHandle = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.lang.invoke.MethodHandle'
    invoke(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    invokeExact(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    asFixedArity(): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    type(): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    toString(): string
    describeConstable(): AllJavaClasses['java.util.Optional']['instanceObject']
    asType(
      arg0: AllJavaClasses['java.lang.invoke.MethodType']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    invokeWithArguments(
      arg0: AllJavaClasses['java.util.List']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    invokeWithArguments(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    asSpreader(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    asSpreader(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg2: number,
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    isVarargsCollector(): boolean
    asVarargsCollector(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    asCollector(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg2: number,
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    asCollector(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    withVarargs(
      arg0: boolean,
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    bindTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.constant.Constable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_reflect_Method = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.reflect.Method'
    invoke(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getName(): string
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getModifiers(): number
    getTypeParameters(): AllJavaClasses['java.lang.reflect.TypeVariable']['instanceObject'][]
    getReturnType(): AllJavaClasses['java.lang.Class']['instanceObject']
    getParameterTypes(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    isSynthetic(): boolean
    toGenericString(): string
    getDeclaringClass(): AllJavaClasses['java.lang.Class']['instanceObject']
    getAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getDeclaredAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    setAccessible(arg0: boolean): void
    isVarArgs(): boolean
    getParameterCount(): number
    getParameterAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][][]
    getGenericParameterTypes(): AllJavaClasses['java.lang.reflect.Type']['instanceObject'][]
    getGenericExceptionTypes(): AllJavaClasses['java.lang.reflect.Type']['instanceObject'][]
    isDefault(): boolean
    getGenericReturnType(): AllJavaClasses['java.lang.reflect.Type']['instanceObject']
    getExceptionTypes(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    isBridge(): boolean
    getDefaultValue(): AllJavaClasses['java.lang.Object']['instanceObject']
    getAnnotatedReturnType(): AllJavaClasses['java.lang.reflect.AnnotatedType']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.reflect.Executable']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_reflect_TypeVariable = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.lang.reflect.TypeVariable'
    getName(): string
    getBounds(): AllJavaClasses['java.lang.reflect.Type']['instanceObject'][]
    getGenericDeclaration(): AllJavaClasses['java.lang.reflect.GenericDeclaration']['instanceObject']
    getAnnotatedBounds(): AllJavaClasses['java.lang.reflect.AnnotatedType']['instanceObject'][]
  } & Omit<
    AllJavaClasses['java.lang.reflect.Type']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.reflect.AnnotatedElement']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_reflect_Type = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.reflect.Type'
    getTypeName(): string
  }
}
type AllJavaClass_java_lang_reflect_GenericDeclaration = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.reflect.GenericDeclaration'
    getTypeParameters(): AllJavaClasses['java.lang.reflect.TypeVariable']['instanceObject'][]
  } & Omit<
    AllJavaClasses['java.lang.reflect.AnnotatedElement']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_reflect_AnnotatedElement = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.reflect.AnnotatedElement'
    isAnnotationPresent(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): boolean
    getAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getAnnotationsByType(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getDeclaredAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getDeclaredAnnotationsByType(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getDeclaredAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
  }
}
type AllJavaClass_java_lang_annotation_Annotation = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.annotation.Annotation'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    annotationType(): AllJavaClasses['java.lang.Class']['instanceObject']
  }
}
type AllJavaClass_java_lang_reflect_AnnotatedType = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.reflect.AnnotatedType'
    getAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getDeclaredAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getType(): AllJavaClasses['java.lang.reflect.Type']['instanceObject']
    getAnnotatedOwnerType(): AllJavaClasses['java.lang.reflect.AnnotatedType']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.reflect.AnnotatedElement']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_reflect_Executable = {
  staticObject: object
  instanceObject: (({
    __javaClass: 'java.lang.reflect.Executable'
    getName(): string
    getModifiers(): number
    getTypeParameters(): AllJavaClasses['java.lang.reflect.TypeVariable']['instanceObject'][]
    getParameterTypes(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    isSynthetic(): boolean
    toGenericString(): string
    accessFlags(): AllJavaClasses['java.util.Set']['instanceObject']
    getDeclaringClass(): AllJavaClasses['java.lang.Class']['instanceObject']
    getAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getAnnotationsByType(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getDeclaredAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    isVarArgs(): boolean
    getAnnotatedParameterTypes(): AllJavaClasses['java.lang.reflect.AnnotatedType']['instanceObject'][]
    getParameterCount(): number
    getParameterAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][][]
    getGenericParameterTypes(): AllJavaClasses['java.lang.reflect.Type']['instanceObject'][]
    getGenericExceptionTypes(): AllJavaClasses['java.lang.reflect.Type']['instanceObject'][]
    getExceptionTypes(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    getAnnotatedReturnType(): AllJavaClasses['java.lang.reflect.AnnotatedType']['instanceObject']
    getParameters(): AllJavaClasses['java.lang.reflect.Parameter']['instanceObject'][]
    getAnnotatedReceiverType(): AllJavaClasses['java.lang.reflect.AnnotatedType']['instanceObject']
    getAnnotatedExceptionTypes(): AllJavaClasses['java.lang.reflect.AnnotatedType']['instanceObject'][]
  } & Omit<
    AllJavaClasses['java.lang.reflect.AccessibleObject']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.reflect.Member']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.reflect.GenericDeclaration']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_reflect_Parameter = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.lang.reflect.Parameter'
    getName(): string
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getModifiers(): number
    isSynthetic(): boolean
    accessFlags(): AllJavaClasses['java.util.Set']['instanceObject']
    getAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getAnnotationsByType(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getDeclaredAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getDeclaredAnnotationsByType(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getDeclaredAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getType(): AllJavaClasses['java.lang.Class']['instanceObject']
    getAnnotatedType(): AllJavaClasses['java.lang.reflect.AnnotatedType']['instanceObject']
    getParameterizedType(): AllJavaClasses['java.lang.reflect.Type']['instanceObject']
    isVarArgs(): boolean
    isNamePresent(): boolean
    getDeclaringExecutable(): AllJavaClasses['java.lang.reflect.Executable']['instanceObject']
    isImplicit(): boolean
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.reflect.AnnotatedElement']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_reflect_AccessibleObject = {
  staticObject: {
    setAccessible(
      arg0: AllJavaClasses['java.lang.reflect.AccessibleObject']['instanceObject'][],
      arg1: boolean,
    ): void
  }
  instanceObject: ({
    __javaClass: 'java.lang.reflect.AccessibleObject'
    isAnnotationPresent(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): boolean
    getAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getAnnotationsByType(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getDeclaredAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getDeclaredAnnotationsByType(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getDeclaredAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    setAccessible(arg0: boolean): void
    trySetAccessible(): boolean
    canAccess(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    isAccessible(): boolean
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.reflect.AnnotatedElement']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_reflect_Constructor = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.reflect.Constructor'
    getName(): string
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getModifiers(): number
    getTypeParameters(): AllJavaClasses['java.lang.reflect.TypeVariable']['instanceObject'][]
    newInstance(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getParameterTypes(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    isSynthetic(): boolean
    toGenericString(): string
    getDeclaringClass(): AllJavaClasses['java.lang.Class']['instanceObject']
    getAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getDeclaredAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    setAccessible(arg0: boolean): void
    isVarArgs(): boolean
    getParameterCount(): number
    getParameterAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][][]
    getGenericParameterTypes(): AllJavaClasses['java.lang.reflect.Type']['instanceObject'][]
    getGenericExceptionTypes(): AllJavaClasses['java.lang.reflect.Type']['instanceObject'][]
    getExceptionTypes(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    getAnnotatedReturnType(): AllJavaClasses['java.lang.reflect.AnnotatedType']['instanceObject']
    getAnnotatedReceiverType(): AllJavaClasses['java.lang.reflect.AnnotatedType']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.reflect.Executable']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_invoke_MethodHandles$Lookup$ClassOption = {
  staticObject: {
    NESTMATE: AllJavaClasses['java.lang.invoke.MethodHandles$Lookup$ClassOption']['instanceObject']
    STRONG: AllJavaClasses['java.lang.invoke.MethodHandles$Lookup$ClassOption']['instanceObject']
    values(): AllJavaClasses['java.lang.invoke.MethodHandles$Lookup$ClassOption']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['java.lang.invoke.MethodHandles$Lookup$ClassOption']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.lang.invoke.MethodHandles$Lookup$ClassOption'
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_lang_invoke_VarHandle = {
  staticObject: {
    storeStoreFence(): void
    fullFence(): void
    loadLoadFence(): void
    acquireFence(): void
    releaseFence(): void
  }
  instanceObject: ({
    __javaClass: 'java.lang.invoke.VarHandle'
    get(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    toString(): string
    describeConstable(): AllJavaClasses['java.util.Optional']['instanceObject']
    set(arg0: AllJavaClasses['java.lang.Object']['instanceObject'][]): void
    varType(): AllJavaClasses['java.lang.Class']['instanceObject']
    coordinateTypes(): AllJavaClasses['java.util.List']['instanceObject']
    accessModeType(
      arg0: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodType']['instanceObject']
    isAccessModeSupported(
      arg0: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject'],
    ): boolean
    hasInvokeExactBehavior(): boolean
    getVolatile(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    setVolatile(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): void
    getOpaque(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    setOpaque(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): void
    getAcquire(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    setRelease(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): void
    compareAndSet(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): boolean
    compareAndExchange(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    compareAndExchangeAcquire(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    compareAndExchangeRelease(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    weakCompareAndSetPlain(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): boolean
    weakCompareAndSet(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): boolean
    weakCompareAndSetAcquire(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): boolean
    weakCompareAndSetRelease(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): boolean
    getAndSet(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getAndSetAcquire(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getAndSetRelease(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getAndAdd(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getAndAddAcquire(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getAndAddRelease(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getAndBitwiseOr(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getAndBitwiseOrAcquire(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getAndBitwiseOrRelease(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getAndBitwiseAnd(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getAndBitwiseAndAcquire(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getAndBitwiseAndRelease(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getAndBitwiseXor(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getAndBitwiseXorAcquire(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getAndBitwiseXorRelease(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    withInvokeExactBehavior(): AllJavaClasses['java.lang.invoke.VarHandle']['instanceObject']
    withInvokeBehavior(): AllJavaClasses['java.lang.invoke.VarHandle']['instanceObject']
    toMethodHandle(
      arg0: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject'],
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.constant.Constable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_invoke_VarHandle$AccessMode = {
  staticObject: {
    GET: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    SET: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    GET_VOLATILE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    SET_VOLATILE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    GET_ACQUIRE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    SET_RELEASE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    GET_OPAQUE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    SET_OPAQUE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    COMPARE_AND_SET: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    COMPARE_AND_EXCHANGE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    COMPARE_AND_EXCHANGE_ACQUIRE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    COMPARE_AND_EXCHANGE_RELEASE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    WEAK_COMPARE_AND_SET_PLAIN: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    WEAK_COMPARE_AND_SET: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    WEAK_COMPARE_AND_SET_ACQUIRE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    WEAK_COMPARE_AND_SET_RELEASE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    GET_AND_SET: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    GET_AND_SET_ACQUIRE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    GET_AND_SET_RELEASE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    GET_AND_ADD: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    GET_AND_ADD_ACQUIRE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    GET_AND_ADD_RELEASE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    GET_AND_BITWISE_OR: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    GET_AND_BITWISE_OR_RELEASE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    GET_AND_BITWISE_OR_ACQUIRE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    GET_AND_BITWISE_AND: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    GET_AND_BITWISE_AND_RELEASE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    GET_AND_BITWISE_AND_ACQUIRE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    GET_AND_BITWISE_XOR: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    GET_AND_BITWISE_XOR_RELEASE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    GET_AND_BITWISE_XOR_ACQUIRE: AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    values(): AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
    valueFromMethodName(
      arg0: string,
    ): AllJavaClasses['java.lang.invoke.VarHandle$AccessMode']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.lang.invoke.VarHandle$AccessMode'
    methodName(): string
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_lang_reflect_Field = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.lang.reflect.Field'
    getName(): string
    get(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getModifiers(): number
    getBoolean(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    getByte(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): number
    getShort(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): number
    getChar(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['char']['instanceObject']
    getInt(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): number
    getLong(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): number
    getFloat(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): number
    getDouble(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    isSynthetic(): boolean
    toGenericString(): string
    accessFlags(): AllJavaClasses['java.util.Set']['instanceObject']
    getDeclaringClass(): AllJavaClasses['java.lang.Class']['instanceObject']
    getAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getAnnotationsByType(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getDeclaredAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    set(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    setAccessible(arg0: boolean): void
    getGenericType(): AllJavaClasses['java.lang.reflect.Type']['instanceObject']
    getType(): AllJavaClasses['java.lang.Class']['instanceObject']
    setBoolean(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: boolean,
    ): void
    setByte(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: number,
    ): void
    setChar(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['char']['instanceObject'],
    ): void
    setShort(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: number,
    ): void
    setInt(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: number,
    ): void
    setLong(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: number,
    ): void
    setFloat(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: number,
    ): void
    setDouble(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: number,
    ): void
    isEnumConstant(): boolean
    getAnnotatedType(): AllJavaClasses['java.lang.reflect.AnnotatedType']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.reflect.AccessibleObject']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.reflect.Member']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_char = {
  staticObject: object
  instanceObject: { __javaClass: 'char' }
}
type AllJavaClass_java_lang_CharSequence = {
  staticObject: {
    compare(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): number
  }
  instanceObject: {
    __javaClass: 'java.lang.CharSequence'
    length(): number
    toString(): string
    charAt(arg0: number): AllJavaClasses['char']['instanceObject']
    isEmpty(): boolean
    codePoints(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    subSequence(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.CharSequence']['instanceObject']
    chars(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
  }
}
type AllJavaClass_java_lang_Number = {
  staticObject: { new (): AllJavaClasses['java.lang.Number']['instanceObject'] }
  instanceObject: ({
    __javaClass: 'java.lang.Number'
    byteValue(): number
    shortValue(): number
    intValue(): number
    longValue(): number
    floatValue(): number
    doubleValue(): number
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_constant_ConstantDesc = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.constant.ConstantDesc'
    resolveConstantDesc(
      arg0: AllJavaClasses['java.lang.invoke.MethodHandles$Lookup']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_java_util_PrimitiveIterator = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.PrimitiveIterator'
    forEachRemaining(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
  } & Omit<
    AllJavaClasses['java.util.Iterator']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_function_IntUnaryOperator = {
  staticObject: {
    identity(): AllJavaClasses['java.util.function.IntUnaryOperator']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.function.IntUnaryOperator'
    applyAsInt(arg0: number): number
    compose(
      arg0: AllJavaClasses['java.util.function.IntUnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.function.IntUnaryOperator']['instanceObject']
    andThen(
      arg0: AllJavaClasses['java.util.function.IntUnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.function.IntUnaryOperator']['instanceObject']
  }
}
type AllJavaClass_java_util_function_ObjIntConsumer = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.ObjIntConsumer'
    accept(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: number,
    ): void
  }
}
type AllJavaClass_java_util_stream_IntStream$Builder = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.stream.IntStream$Builder'
    add(
      arg0: number,
    ): AllJavaClasses['java.util.stream.IntStream$Builder']['instanceObject']
    accept(arg0: number): void
    build(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.function.IntConsumer']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_Spliterator$OfInt = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.Spliterator$OfInt'
    forEachRemaining(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    forEachRemaining(
      arg0: AllJavaClasses['java.util.function.IntConsumer']['instanceObject'],
    ): void
    forEachRemaining(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): void
    tryAdvance(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    tryAdvance(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): boolean
    tryAdvance(
      arg0: AllJavaClasses['java.util.function.IntConsumer']['instanceObject'],
    ): boolean
    trySplit(): AllJavaClasses['java.util.Spliterator$OfPrimitive']['instanceObject']
    trySplit(): AllJavaClasses['java.util.Spliterator']['instanceObject']
    trySplit(): AllJavaClasses['java.util.Spliterator$OfInt']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.Spliterator$OfPrimitive']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_Spliterator$OfPrimitive = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.Spliterator$OfPrimitive'
    forEachRemaining(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    tryAdvance(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    trySplit(): AllJavaClasses['java.util.Spliterator']['instanceObject']
    trySplit(): AllJavaClasses['java.util.Spliterator$OfPrimitive']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.Spliterator']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_function_IntPredicate = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.IntPredicate'
    test(arg0: number): boolean
    or(
      arg0: AllJavaClasses['java.util.function.IntPredicate']['instanceObject'],
    ): AllJavaClasses['java.util.function.IntPredicate']['instanceObject']
    negate(): AllJavaClasses['java.util.function.IntPredicate']['instanceObject']
    and(
      arg0: AllJavaClasses['java.util.function.IntPredicate']['instanceObject'],
    ): AllJavaClasses['java.util.function.IntPredicate']['instanceObject']
  }
}
type AllJavaClass_java_util_function_IntBinaryOperator = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.IntBinaryOperator'
    applyAsInt(arg0: number, arg1: number): number
  }
}
type AllJavaClass_java_util_stream_BaseStream = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.stream.BaseStream'
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    spliterator(): AllJavaClasses['java.util.Spliterator']['instanceObject']
    close(): void
    parallel(): AllJavaClasses['java.util.stream.BaseStream']['instanceObject']
    onClose(
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
    ): AllJavaClasses['java.util.stream.BaseStream']['instanceObject']
    sequential(): AllJavaClasses['java.util.stream.BaseStream']['instanceObject']
    isParallel(): boolean
    unordered(): AllJavaClasses['java.util.stream.BaseStream']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.AutoCloseable']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_stream_LongStream = {
  staticObject: {
    of(
      arg0: number,
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    of(
      arg0: number[],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    builder(): AllJavaClasses['java.util.stream.LongStream$Builder']['instanceObject']
    concat(
      arg0: AllJavaClasses['java.util.stream.LongStream']['instanceObject'],
      arg1: AllJavaClasses['java.util.stream.LongStream']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    empty(): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    range(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    iterate(
      arg0: number,
      arg1: AllJavaClasses['java.util.function.LongUnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    iterate(
      arg0: number,
      arg1: AllJavaClasses['java.util.function.LongPredicate']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.LongUnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    generate(
      arg0: AllJavaClasses['java.util.function.LongSupplier']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    rangeClosed(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.stream.LongStream'
    min(): AllJavaClasses['java.util.OptionalLong']['instanceObject']
    max(): AllJavaClasses['java.util.OptionalLong']['instanceObject']
    toArray(): number[]
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    iterator(): AllJavaClasses['java.util.PrimitiveIterator$OfLong']['instanceObject']
    map(
      arg0: AllJavaClasses['java.util.function.LongUnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    collect(
      arg0: AllJavaClasses['java.util.function.Supplier']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.ObjLongConsumer']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    count(): number
    limit(
      arg0: number,
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    spliterator(): AllJavaClasses['java.util.Spliterator$OfLong']['instanceObject']
    spliterator(): AllJavaClasses['java.util.Spliterator']['instanceObject']
    filter(
      arg0: AllJavaClasses['java.util.function.LongPredicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    anyMatch(
      arg0: AllJavaClasses['java.util.function.LongPredicate']['instanceObject'],
    ): boolean
    flatMap(
      arg0: AllJavaClasses['java.util.function.LongFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    forEach(
      arg0: AllJavaClasses['java.util.function.LongConsumer']['instanceObject'],
    ): void
    findAny(): AllJavaClasses['java.util.OptionalLong']['instanceObject']
    skip(
      arg0: number,
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    peek(
      arg0: AllJavaClasses['java.util.function.LongConsumer']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    sum(): number
    reduce(
      arg0: AllJavaClasses['java.util.function.LongBinaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.OptionalLong']['instanceObject']
    reduce(
      arg0: number,
      arg1: AllJavaClasses['java.util.function.LongBinaryOperator']['instanceObject'],
    ): number
    parallel(): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    parallel(): AllJavaClasses['java.util.stream.BaseStream']['instanceObject']
    distinct(): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    findFirst(): AllJavaClasses['java.util.OptionalLong']['instanceObject']
    allMatch(
      arg0: AllJavaClasses['java.util.function.LongPredicate']['instanceObject'],
    ): boolean
    noneMatch(
      arg0: AllJavaClasses['java.util.function.LongPredicate']['instanceObject'],
    ): boolean
    mapToObj(
      arg0: AllJavaClasses['java.util.function.LongFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    sorted(): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    sequential(): AllJavaClasses['java.util.stream.BaseStream']['instanceObject']
    sequential(): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    forEachOrdered(
      arg0: AllJavaClasses['java.util.function.LongConsumer']['instanceObject'],
    ): void
    boxed(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    mapToInt(
      arg0: AllJavaClasses['java.util.function.LongToIntFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    asDoubleStream(): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    mapToDouble(
      arg0: AllJavaClasses['java.util.function.LongToDoubleFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    mapMulti(
      arg0: AllJavaClasses['java.util.stream.LongStream$LongMapMultiConsumer']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    takeWhile(
      arg0: AllJavaClasses['java.util.function.LongPredicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    dropWhile(
      arg0: AllJavaClasses['java.util.function.LongPredicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    average(): AllJavaClasses['java.util.OptionalDouble']['instanceObject']
    summaryStatistics(): AllJavaClasses['java.util.LongSummaryStatistics']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.stream.BaseStream']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_OptionalLong = {
  staticObject: {
    of(arg0: number): AllJavaClasses['java.util.OptionalLong']['instanceObject']
    empty(): AllJavaClasses['java.util.OptionalLong']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.OptionalLong'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    isEmpty(): boolean
    stream(): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    isPresent(): boolean
    orElse(arg0: number): number
    orElseThrow(
      arg0: AllJavaClasses['java.util.function.Supplier']['instanceObject'],
    ): number
    orElseThrow(): number
    ifPresent(
      arg0: AllJavaClasses['java.util.function.LongConsumer']['instanceObject'],
    ): void
    ifPresentOrElse(
      arg0: AllJavaClasses['java.util.function.LongConsumer']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Runnable']['instanceObject'],
    ): void
    orElseGet(
      arg0: AllJavaClasses['java.util.function.LongSupplier']['instanceObject'],
    ): number
    getAsLong(): number
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_util_function_LongConsumer = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.LongConsumer'
    accept(arg0: number): void
    andThen(
      arg0: AllJavaClasses['java.util.function.LongConsumer']['instanceObject'],
    ): AllJavaClasses['java.util.function.LongConsumer']['instanceObject']
  }
}
type AllJavaClass_java_util_function_LongSupplier = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.LongSupplier'
    getAsLong(): number
  }
}
type AllJavaClass_java_util_PrimitiveIterator$OfLong = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.PrimitiveIterator$OfLong'
    forEachRemaining(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    forEachRemaining(
      arg0: AllJavaClasses['java.util.function.LongConsumer']['instanceObject'],
    ): void
    forEachRemaining(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): void
    next(): AllJavaClasses['java.lang.Object']['instanceObject']
    next(): AllJavaClasses['java.lang.Long']['instanceObject']
    nextLong(): number
  } & Omit<
    AllJavaClasses['java.util.PrimitiveIterator']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_Long = {
  staticObject: {
    MIN_VALUE: number
    MAX_VALUE: number
    TYPE: AllJavaClasses['java.lang.Class']['instanceObject']
    SIZE: number
    BYTES: number
    new (arg0: string): AllJavaClasses['java.lang.Long']['instanceObject']
    new (arg0: number): AllJavaClasses['java.lang.Long']['instanceObject']
    numberOfLeadingZeros(arg0: number): number
    numberOfTrailingZeros(arg0: number): number
    bitCount(arg0: number): number
    toString(arg0: number): string
    toString(arg0: number, arg1: number): string
    hashCode(arg0: number): number
    min(arg0: number, arg1: number): number
    max(arg0: number, arg1: number): number
    signum(arg0: number): number
    expand(arg0: number, arg1: number): number
    compareUnsigned(arg0: number, arg1: number): number
    divideUnsigned(arg0: number, arg1: number): number
    remainderUnsigned(arg0: number, arg1: number): number
    reverse(arg0: number): number
    reverseBytes(arg0: number): number
    compress(arg0: number, arg1: number): number
    getLong(
      arg0: string,
      arg1: number,
    ): AllJavaClasses['java.lang.Long']['instanceObject']
    getLong(arg0: string): AllJavaClasses['java.lang.Long']['instanceObject']
    getLong(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Long']['instanceObject'],
    ): AllJavaClasses['java.lang.Long']['instanceObject']
    compare(arg0: number, arg1: number): number
    valueOf(
      arg0: string,
      arg1: number,
    ): AllJavaClasses['java.lang.Long']['instanceObject']
    valueOf(arg0: string): AllJavaClasses['java.lang.Long']['instanceObject']
    valueOf(arg0: number): AllJavaClasses['java.lang.Long']['instanceObject']
    toHexString(arg0: number): string
    decode(arg0: string): AllJavaClasses['java.lang.Long']['instanceObject']
    sum(arg0: number, arg1: number): number
    toUnsignedString(arg0: number, arg1: number): string
    toUnsignedString(arg0: number): string
    parseLong(arg0: string): number
    parseLong(arg0: string, arg1: number): number
    parseLong(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: number,
    ): number
    toOctalString(arg0: number): string
    toBinaryString(arg0: number): string
    highestOneBit(arg0: number): number
    lowestOneBit(arg0: number): number
    rotateLeft(arg0: number, arg1: number): number
    rotateRight(arg0: number, arg1: number): number
    parseUnsignedLong(arg0: string): number
    parseUnsignedLong(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: number,
    ): number
    parseUnsignedLong(arg0: string, arg1: number): number
  }
  instanceObject: ((({
    __javaClass: 'java.lang.Long'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(arg0: AllJavaClasses['java.lang.Long']['instanceObject']): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    byteValue(): number
    shortValue(): number
    intValue(): number
    longValue(): number
    floatValue(): number
    doubleValue(): number
    resolveConstantDesc(
      arg0: AllJavaClasses['java.lang.invoke.MethodHandles$Lookup']['instanceObject'],
    ): AllJavaClasses['java.lang.Long']['instanceObject']
    resolveConstantDesc(
      arg0: AllJavaClasses['java.lang.invoke.MethodHandles$Lookup']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    describeConstable(): AllJavaClasses['java.util.Optional']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Number']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.constant.Constable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.constant.ConstantDesc']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_util_function_LongUnaryOperator = {
  staticObject: {
    identity(): AllJavaClasses['java.util.function.LongUnaryOperator']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.function.LongUnaryOperator'
    applyAsLong(arg0: number): number
    compose(
      arg0: AllJavaClasses['java.util.function.LongUnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.function.LongUnaryOperator']['instanceObject']
    andThen(
      arg0: AllJavaClasses['java.util.function.LongUnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.function.LongUnaryOperator']['instanceObject']
  }
}
type AllJavaClass_java_util_function_ObjLongConsumer = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.ObjLongConsumer'
    accept(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: number,
    ): void
  }
}
type AllJavaClass_java_util_stream_LongStream$Builder = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.stream.LongStream$Builder'
    add(
      arg0: number,
    ): AllJavaClasses['java.util.stream.LongStream$Builder']['instanceObject']
    accept(arg0: number): void
    build(): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.function.LongConsumer']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_Spliterator$OfLong = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.Spliterator$OfLong'
    forEachRemaining(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    forEachRemaining(
      arg0: AllJavaClasses['java.util.function.LongConsumer']['instanceObject'],
    ): void
    forEachRemaining(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): void
    tryAdvance(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    tryAdvance(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): boolean
    tryAdvance(
      arg0: AllJavaClasses['java.util.function.LongConsumer']['instanceObject'],
    ): boolean
    trySplit(): AllJavaClasses['java.util.Spliterator$OfPrimitive']['instanceObject']
    trySplit(): AllJavaClasses['java.util.Spliterator']['instanceObject']
    trySplit(): AllJavaClasses['java.util.Spliterator$OfLong']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.Spliterator$OfPrimitive']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_function_LongPredicate = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.LongPredicate'
    test(arg0: number): boolean
    or(
      arg0: AllJavaClasses['java.util.function.LongPredicate']['instanceObject'],
    ): AllJavaClasses['java.util.function.LongPredicate']['instanceObject']
    negate(): AllJavaClasses['java.util.function.LongPredicate']['instanceObject']
    and(
      arg0: AllJavaClasses['java.util.function.LongPredicate']['instanceObject'],
    ): AllJavaClasses['java.util.function.LongPredicate']['instanceObject']
  }
}
type AllJavaClass_java_util_function_LongFunction = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.LongFunction'
    apply(arg0: number): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_java_util_function_LongBinaryOperator = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.LongBinaryOperator'
    applyAsLong(arg0: number, arg1: number): number
  }
}
type AllJavaClass_java_util_function_LongToIntFunction = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.LongToIntFunction'
    applyAsInt(arg0: number): number
  }
}
type AllJavaClass_java_util_stream_DoubleStream = {
  staticObject: {
    of(
      arg0: number,
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    of(
      arg0: number[],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    builder(): AllJavaClasses['java.util.stream.DoubleStream$Builder']['instanceObject']
    concat(
      arg0: AllJavaClasses['java.util.stream.DoubleStream']['instanceObject'],
      arg1: AllJavaClasses['java.util.stream.DoubleStream']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    empty(): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    iterate(
      arg0: number,
      arg1: AllJavaClasses['java.util.function.DoubleUnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    iterate(
      arg0: number,
      arg1: AllJavaClasses['java.util.function.DoublePredicate']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.DoubleUnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    generate(
      arg0: AllJavaClasses['java.util.function.DoubleSupplier']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.stream.DoubleStream'
    min(): AllJavaClasses['java.util.OptionalDouble']['instanceObject']
    max(): AllJavaClasses['java.util.OptionalDouble']['instanceObject']
    toArray(): number[]
    iterator(): AllJavaClasses['java.util.PrimitiveIterator$OfDouble']['instanceObject']
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    map(
      arg0: AllJavaClasses['java.util.function.DoubleUnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    collect(
      arg0: AllJavaClasses['java.util.function.Supplier']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.ObjDoubleConsumer']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    count(): number
    limit(
      arg0: number,
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    spliterator(): AllJavaClasses['java.util.Spliterator']['instanceObject']
    spliterator(): AllJavaClasses['java.util.Spliterator$OfDouble']['instanceObject']
    filter(
      arg0: AllJavaClasses['java.util.function.DoublePredicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    anyMatch(
      arg0: AllJavaClasses['java.util.function.DoublePredicate']['instanceObject'],
    ): boolean
    flatMap(
      arg0: AllJavaClasses['java.util.function.DoubleFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    forEach(
      arg0: AllJavaClasses['java.util.function.DoubleConsumer']['instanceObject'],
    ): void
    findAny(): AllJavaClasses['java.util.OptionalDouble']['instanceObject']
    skip(
      arg0: number,
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    peek(
      arg0: AllJavaClasses['java.util.function.DoubleConsumer']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    sum(): number
    reduce(
      arg0: number,
      arg1: AllJavaClasses['java.util.function.DoubleBinaryOperator']['instanceObject'],
    ): number
    reduce(
      arg0: AllJavaClasses['java.util.function.DoubleBinaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.OptionalDouble']['instanceObject']
    parallel(): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    parallel(): AllJavaClasses['java.util.stream.BaseStream']['instanceObject']
    distinct(): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    findFirst(): AllJavaClasses['java.util.OptionalDouble']['instanceObject']
    allMatch(
      arg0: AllJavaClasses['java.util.function.DoublePredicate']['instanceObject'],
    ): boolean
    noneMatch(
      arg0: AllJavaClasses['java.util.function.DoublePredicate']['instanceObject'],
    ): boolean
    mapToObj(
      arg0: AllJavaClasses['java.util.function.DoubleFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    sorted(): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    sequential(): AllJavaClasses['java.util.stream.BaseStream']['instanceObject']
    sequential(): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    forEachOrdered(
      arg0: AllJavaClasses['java.util.function.DoubleConsumer']['instanceObject'],
    ): void
    boxed(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    mapToInt(
      arg0: AllJavaClasses['java.util.function.DoubleToIntFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    mapToLong(
      arg0: AllJavaClasses['java.util.function.DoubleToLongFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    mapMulti(
      arg0: AllJavaClasses['java.util.stream.DoubleStream$DoubleMapMultiConsumer']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    takeWhile(
      arg0: AllJavaClasses['java.util.function.DoublePredicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    dropWhile(
      arg0: AllJavaClasses['java.util.function.DoublePredicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    average(): AllJavaClasses['java.util.OptionalDouble']['instanceObject']
    summaryStatistics(): AllJavaClasses['java.util.DoubleSummaryStatistics']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.stream.BaseStream']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_OptionalDouble = {
  staticObject: {
    of(
      arg0: number,
    ): AllJavaClasses['java.util.OptionalDouble']['instanceObject']
    empty(): AllJavaClasses['java.util.OptionalDouble']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.OptionalDouble'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    isEmpty(): boolean
    stream(): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    isPresent(): boolean
    orElse(arg0: number): number
    orElseThrow(
      arg0: AllJavaClasses['java.util.function.Supplier']['instanceObject'],
    ): number
    orElseThrow(): number
    ifPresent(
      arg0: AllJavaClasses['java.util.function.DoubleConsumer']['instanceObject'],
    ): void
    ifPresentOrElse(
      arg0: AllJavaClasses['java.util.function.DoubleConsumer']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Runnable']['instanceObject'],
    ): void
    orElseGet(
      arg0: AllJavaClasses['java.util.function.DoubleSupplier']['instanceObject'],
    ): number
    getAsDouble(): number
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_util_function_DoubleConsumer = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.DoubleConsumer'
    accept(arg0: number): void
    andThen(
      arg0: AllJavaClasses['java.util.function.DoubleConsumer']['instanceObject'],
    ): AllJavaClasses['java.util.function.DoubleConsumer']['instanceObject']
  }
}
type AllJavaClass_java_util_function_DoubleSupplier = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.DoubleSupplier'
    getAsDouble(): number
  }
}
type AllJavaClass_java_util_PrimitiveIterator$OfDouble = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.PrimitiveIterator$OfDouble'
    forEachRemaining(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    forEachRemaining(
      arg0: AllJavaClasses['java.util.function.DoubleConsumer']['instanceObject'],
    ): void
    forEachRemaining(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): void
    next(): AllJavaClasses['java.lang.Object']['instanceObject']
    next(): AllJavaClasses['java.lang.Double']['instanceObject']
    nextDouble(): number
  } & Omit<
    AllJavaClasses['java.util.PrimitiveIterator']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_Double = {
  staticObject: {
    POSITIVE_INFINITY: number
    NEGATIVE_INFINITY: number
    NaN: number
    MAX_VALUE: number
    MIN_NORMAL: number
    MIN_VALUE: number
    SIZE: number
    PRECISION: number
    MAX_EXPONENT: number
    MIN_EXPONENT: number
    BYTES: number
    TYPE: AllJavaClasses['java.lang.Class']['instanceObject']
    new (arg0: number): AllJavaClasses['java.lang.Double']['instanceObject']
    new (arg0: string): AllJavaClasses['java.lang.Double']['instanceObject']
    toString(arg0: number): string
    hashCode(arg0: number): number
    min(arg0: number, arg1: number): number
    max(arg0: number, arg1: number): number
    isInfinite(arg0: number): boolean
    isFinite(arg0: number): boolean
    doubleToRawLongBits(arg0: number): number
    doubleToLongBits(arg0: number): number
    longBitsToDouble(arg0: number): number
    compare(arg0: number, arg1: number): number
    valueOf(arg0: string): AllJavaClasses['java.lang.Double']['instanceObject']
    valueOf(arg0: number): AllJavaClasses['java.lang.Double']['instanceObject']
    toHexString(arg0: number): string
    isNaN(arg0: number): boolean
    sum(arg0: number, arg1: number): number
    parseDouble(arg0: string): number
  }
  instanceObject: ((({
    __javaClass: 'java.lang.Double'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    isInfinite(): boolean
    compareTo(
      arg0: AllJavaClasses['java.lang.Double']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    byteValue(): number
    shortValue(): number
    intValue(): number
    longValue(): number
    floatValue(): number
    doubleValue(): number
    resolveConstantDesc(
      arg0: AllJavaClasses['java.lang.invoke.MethodHandles$Lookup']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    resolveConstantDesc(
      arg0: AllJavaClasses['java.lang.invoke.MethodHandles$Lookup']['instanceObject'],
    ): AllJavaClasses['java.lang.Double']['instanceObject']
    describeConstable(): AllJavaClasses['java.util.Optional']['instanceObject']
    isNaN(): boolean
  } & Omit<
    AllJavaClasses['java.lang.Number']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.constant.Constable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.constant.ConstantDesc']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_util_function_DoubleUnaryOperator = {
  staticObject: {
    identity(): AllJavaClasses['java.util.function.DoubleUnaryOperator']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.function.DoubleUnaryOperator'
    applyAsDouble(arg0: number): number
    compose(
      arg0: AllJavaClasses['java.util.function.DoubleUnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.function.DoubleUnaryOperator']['instanceObject']
    andThen(
      arg0: AllJavaClasses['java.util.function.DoubleUnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.function.DoubleUnaryOperator']['instanceObject']
  }
}
type AllJavaClass_java_util_function_ObjDoubleConsumer = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.ObjDoubleConsumer'
    accept(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: number,
    ): void
  }
}
type AllJavaClass_java_util_stream_DoubleStream$Builder = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.stream.DoubleStream$Builder'
    add(
      arg0: number,
    ): AllJavaClasses['java.util.stream.DoubleStream$Builder']['instanceObject']
    accept(arg0: number): void
    build(): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.function.DoubleConsumer']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_Spliterator$OfDouble = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.Spliterator$OfDouble'
    forEachRemaining(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    forEachRemaining(
      arg0: AllJavaClasses['java.util.function.DoubleConsumer']['instanceObject'],
    ): void
    forEachRemaining(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): void
    tryAdvance(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    tryAdvance(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): boolean
    tryAdvance(
      arg0: AllJavaClasses['java.util.function.DoubleConsumer']['instanceObject'],
    ): boolean
    trySplit(): AllJavaClasses['java.util.Spliterator$OfPrimitive']['instanceObject']
    trySplit(): AllJavaClasses['java.util.Spliterator']['instanceObject']
    trySplit(): AllJavaClasses['java.util.Spliterator$OfDouble']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.Spliterator$OfPrimitive']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_function_DoublePredicate = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.DoublePredicate'
    test(arg0: number): boolean
    or(
      arg0: AllJavaClasses['java.util.function.DoublePredicate']['instanceObject'],
    ): AllJavaClasses['java.util.function.DoublePredicate']['instanceObject']
    negate(): AllJavaClasses['java.util.function.DoublePredicate']['instanceObject']
    and(
      arg0: AllJavaClasses['java.util.function.DoublePredicate']['instanceObject'],
    ): AllJavaClasses['java.util.function.DoublePredicate']['instanceObject']
  }
}
type AllJavaClass_java_util_function_DoubleFunction = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.DoubleFunction'
    apply(arg0: number): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_java_util_function_DoubleBinaryOperator = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.DoubleBinaryOperator'
    applyAsDouble(arg0: number, arg1: number): number
  }
}
type AllJavaClass_java_util_function_DoubleToIntFunction = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.DoubleToIntFunction'
    applyAsInt(arg0: number): number
  }
}
type AllJavaClass_java_util_function_DoubleToLongFunction = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.DoubleToLongFunction'
    applyAsLong(arg0: number): number
  }
}
type AllJavaClass_java_util_stream_DoubleStream$DoubleMapMultiConsumer = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.stream.DoubleStream$DoubleMapMultiConsumer'
    accept(
      arg0: number,
      arg1: AllJavaClasses['java.util.function.DoubleConsumer']['instanceObject'],
    ): void
  }
}
type AllJavaClass_java_util_DoubleSummaryStatistics = {
  staticObject: {
    new (): AllJavaClasses['java.util.DoubleSummaryStatistics']['instanceObject']
    new (
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.util.DoubleSummaryStatistics']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.util.DoubleSummaryStatistics'
    toString(): string
    accept(arg0: number): void
    combine(
      arg0: AllJavaClasses['java.util.DoubleSummaryStatistics']['instanceObject'],
    ): void
    getCount(): number
    getSum(): number
    getMin(): number
    getAverage(): number
    getMax(): number
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.util.function.DoubleConsumer']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_util_function_LongToDoubleFunction = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.LongToDoubleFunction'
    applyAsDouble(arg0: number): number
  }
}
type AllJavaClass_java_util_stream_LongStream$LongMapMultiConsumer = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.stream.LongStream$LongMapMultiConsumer'
    accept(
      arg0: number,
      arg1: AllJavaClasses['java.util.function.LongConsumer']['instanceObject'],
    ): void
  }
}
type AllJavaClass_java_util_LongSummaryStatistics = {
  staticObject: {
    new (): AllJavaClasses['java.util.LongSummaryStatistics']['instanceObject']
    new (
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.util.LongSummaryStatistics']['instanceObject']
  }
  instanceObject: (({
    __javaClass: 'java.util.LongSummaryStatistics'
    toString(): string
    accept(arg0: number): void
    accept(arg0: number): void
    combine(
      arg0: AllJavaClasses['java.util.LongSummaryStatistics']['instanceObject'],
    ): void
    getCount(): number
    getSum(): number
    getMin(): number
    getAverage(): number
    getMax(): number
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.util.function.LongConsumer']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.util.function.IntConsumer']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_util_function_IntToLongFunction = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.IntToLongFunction'
    applyAsLong(arg0: number): number
  }
}
type AllJavaClass_java_util_function_IntToDoubleFunction = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.IntToDoubleFunction'
    applyAsDouble(arg0: number): number
  }
}
type AllJavaClass_java_util_stream_IntStream$IntMapMultiConsumer = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.stream.IntStream$IntMapMultiConsumer'
    accept(
      arg0: number,
      arg1: AllJavaClasses['java.util.function.IntConsumer']['instanceObject'],
    ): void
  }
}
type AllJavaClass_java_util_IntSummaryStatistics = {
  staticObject: {
    new (): AllJavaClasses['java.util.IntSummaryStatistics']['instanceObject']
    new (
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.util.IntSummaryStatistics']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.util.IntSummaryStatistics'
    toString(): string
    accept(arg0: number): void
    combine(
      arg0: AllJavaClasses['java.util.IntSummaryStatistics']['instanceObject'],
    ): void
    getCount(): number
    getSum(): number
    getMin(): number
    getAverage(): number
    getMax(): number
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.util.function.IntConsumer']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_security_Guard = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.security.Guard'
    checkGuard(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
  }
}
type AllJavaClass_java_net_FileNameMap = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.net.FileNameMap'
    getContentTypeFor(arg0: string): string
  }
}
type AllJavaClass_java_util_Map = {
  staticObject: {
    copyOf(
      arg0: AllJavaClasses['java.util.Map']['instanceObject'],
    ): AllJavaClasses['java.util.Map']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg6: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg7: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Map']['instanceObject']
    of(): AllJavaClasses['java.util.Map']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Map']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Map']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Map']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg6: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg7: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg8: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg9: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg10: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg11: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg12: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg13: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg14: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg15: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg16: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg17: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg18: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg19: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Map']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg6: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg7: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg8: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg9: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg10: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg11: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg12: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg13: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg14: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg15: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg16: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg17: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Map']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg6: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg7: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg8: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg9: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg10: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg11: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg12: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg13: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg14: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg15: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Map']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg6: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg7: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg8: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg9: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg10: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg11: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg12: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg13: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Map']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg6: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg7: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg8: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg9: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg10: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg11: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Map']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg6: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg7: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg8: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg9: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Map']['instanceObject']
    entry(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Map$Entry']['instanceObject']
    ofEntries(
      arg0: AllJavaClasses['java.util.Map$Entry']['instanceObject'][],
    ): AllJavaClasses['java.util.Map']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.Map'
    remove(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    remove(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    size(): number
    get(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    put(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    values(): AllJavaClasses['java.util.Collection']['instanceObject']
    hashCode(): number
    clear(): void
    isEmpty(): boolean
    replace(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    replace(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    replaceAll(
      arg0: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
    ): void
    merge(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    entrySet(): AllJavaClasses['java.util.Set']['instanceObject']
    putAll(arg0: AllJavaClasses['java.util.Map']['instanceObject']): void
    putIfAbsent(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    compute(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    forEach(
      arg0: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
    ): void
    containsKey(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    computeIfAbsent(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    keySet(): AllJavaClasses['java.util.Set']['instanceObject']
    containsValue(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    getOrDefault(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    computeIfPresent(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_java_util_Map$Entry = {
  staticObject: {
    copyOf(
      arg0: AllJavaClasses['java.util.Map$Entry']['instanceObject'],
    ): AllJavaClasses['java.util.Map$Entry']['instanceObject']
    comparingByKey(
      arg0: AllJavaClasses['java.util.Comparator']['instanceObject'],
    ): AllJavaClasses['java.util.Comparator']['instanceObject']
    comparingByKey(): AllJavaClasses['java.util.Comparator']['instanceObject']
    comparingByValue(): AllJavaClasses['java.util.Comparator']['instanceObject']
    comparingByValue(
      arg0: AllJavaClasses['java.util.Comparator']['instanceObject'],
    ): AllJavaClasses['java.util.Comparator']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.Map$Entry'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    hashCode(): number
    getValue(): AllJavaClasses['java.lang.Object']['instanceObject']
    getKey(): AllJavaClasses['java.lang.Object']['instanceObject']
    setValue(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_java_net_ContentHandlerFactory = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.net.ContentHandlerFactory'
    createContentHandler(
      arg0: string,
    ): AllJavaClasses['java.net.ContentHandler']['instanceObject']
  }
}
type AllJavaClass_java_net_ContentHandler = {
  staticObject: {
    new (): AllJavaClasses['java.net.ContentHandler']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.net.ContentHandler'
    getContent(
      arg0: AllJavaClasses['java.net.URLConnection']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getContent(
      arg0: AllJavaClasses['java.net.URLConnection']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Class']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_net_Proxy = {
  staticObject: {
    NO_PROXY: AllJavaClasses['java.net.Proxy']['instanceObject']
    new (
      arg0: AllJavaClasses['java.net.Proxy$Type']['instanceObject'],
      arg1: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): AllJavaClasses['java.net.Proxy']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.net.Proxy'
    type(): AllJavaClasses['java.net.Proxy$Type']['instanceObject']
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    address(): AllJavaClasses['java.net.SocketAddress']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_net_Proxy$Type = {
  staticObject: {
    DIRECT: AllJavaClasses['java.net.Proxy$Type']['instanceObject']
    HTTP: AllJavaClasses['java.net.Proxy$Type']['instanceObject']
    SOCKS: AllJavaClasses['java.net.Proxy$Type']['instanceObject']
    values(): AllJavaClasses['java.net.Proxy$Type']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['java.net.Proxy$Type']['instanceObject']
  }
  instanceObject: { __javaClass: 'java.net.Proxy$Type' } & Omit<
    AllJavaClasses['java.lang.Enum']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_net_SocketAddress = {
  staticObject: {
    new (): AllJavaClasses['java.net.SocketAddress']['instanceObject']
  }
  instanceObject: ({ __javaClass: 'java.net.SocketAddress' } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_net_URLStreamHandlerFactory = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.net.URLStreamHandlerFactory'
    createURLStreamHandler(
      arg0: string,
    ): AllJavaClasses['java.net.URLStreamHandler']['instanceObject']
  }
}
type AllJavaClass_java_lang_Package = {
  staticObject: {
    getPackage(
      arg0: string,
    ): AllJavaClasses['java.lang.Package']['instanceObject']
    getPackages(): AllJavaClasses['java.lang.Package']['instanceObject'][]
  }
  instanceObject: ({
    __javaClass: 'java.lang.Package'
    getName(): string
    toString(): string
    hashCode(): number
    isAnnotationPresent(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): boolean
    getAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getAnnotationsByType(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getDeclaredAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getDeclaredAnnotationsByType(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getDeclaredAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    isSealed(arg0: AllJavaClasses['java.net.URL']['instanceObject']): boolean
    isSealed(): boolean
    getSpecificationTitle(): string
    getSpecificationVersion(): string
    getSpecificationVendor(): string
    getImplementationTitle(): string
    getImplementationVersion(): string
    getImplementationVendor(): string
    isCompatibleWith(arg0: string): boolean
  } & Omit<
    AllJavaClasses['java.lang.NamedPackage']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.reflect.AnnotatedElement']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_NamedPackage = {
  staticObject: object
  instanceObject: { __javaClass: 'java.lang.NamedPackage' } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_Module = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.lang.Module'
    getName(): string
    toString(): string
    addReads(
      arg0: AllJavaClasses['java.lang.Module']['instanceObject'],
    ): AllJavaClasses['java.lang.Module']['instanceObject']
    addExports(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Module']['instanceObject'],
    ): AllJavaClasses['java.lang.Module']['instanceObject']
    addOpens(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Module']['instanceObject'],
    ): AllJavaClasses['java.lang.Module']['instanceObject']
    addUses(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.Module']['instanceObject']
    getClassLoader(): AllJavaClasses['java.lang.ClassLoader']['instanceObject']
    getDescriptor(): AllJavaClasses['java.lang.module.ModuleDescriptor']['instanceObject']
    isNamed(): boolean
    getResourceAsStream(
      arg0: string,
    ): AllJavaClasses['java.io.InputStream']['instanceObject']
    isOpen(arg0: string): boolean
    isOpen(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Module']['instanceObject'],
    ): boolean
    getAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getDeclaredAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getPackages(): AllJavaClasses['java.util.Set']['instanceObject']
    isNativeAccessEnabled(): boolean
    canRead(arg0: AllJavaClasses['java.lang.Module']['instanceObject']): boolean
    canUse(arg0: AllJavaClasses['java.lang.Class']['instanceObject']): boolean
    getLayer(): AllJavaClasses['java.lang.ModuleLayer']['instanceObject']
    isExported(arg0: string): boolean
    isExported(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Module']['instanceObject'],
    ): boolean
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.reflect.AnnotatedElement']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_module_ModuleDescriptor = {
  staticObject: {
    read(
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.Supplier']['instanceObject'],
    ): AllJavaClasses['java.lang.module.ModuleDescriptor']['instanceObject']
    read(
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
    ): AllJavaClasses['java.lang.module.ModuleDescriptor']['instanceObject']
    read(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.Supplier']['instanceObject'],
    ): AllJavaClasses['java.lang.module.ModuleDescriptor']['instanceObject']
    read(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['java.lang.module.ModuleDescriptor']['instanceObject']
    newModule(
      arg0: string,
      arg1: AllJavaClasses['java.util.Set']['instanceObject'],
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    newModule(
      arg0: string,
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    newOpenModule(
      arg0: string,
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    newAutomaticModule(
      arg0: string,
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.lang.module.ModuleDescriptor'
    modifiers(): AllJavaClasses['java.util.Set']['instanceObject']
    name(): string
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    version(): AllJavaClasses['java.util.Optional']['instanceObject']
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.module.ModuleDescriptor']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    packages(): AllJavaClasses['java.util.Set']['instanceObject']
    isOpen(): boolean
    accessFlags(): AllJavaClasses['java.util.Set']['instanceObject']
    exports(): AllJavaClasses['java.util.Set']['instanceObject']
    opens(): AllJavaClasses['java.util.Set']['instanceObject']
    isAutomatic(): boolean
    uses(): AllJavaClasses['java.util.Set']['instanceObject']
    provides(): AllJavaClasses['java.util.Set']['instanceObject']
    requires(): AllJavaClasses['java.util.Set']['instanceObject']
    mainClass(): AllJavaClasses['java.util.Optional']['instanceObject']
    toNameAndVersion(): string
    rawVersion(): AllJavaClasses['java.util.Optional']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_nio_ByteBuffer = {
  staticObject: {
    wrap(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    wrap(
      arg0: number[],
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    allocate(
      arg0: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    allocateDirect(
      arg0: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.nio.ByteBuffer'
    reset(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    get(arg0: number[]): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    get(arg0: number): number
    get(): number
    get(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    get(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    get(
      arg0: number,
      arg1: number[],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    put(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    put(arg0: number[]): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: number[],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    put(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    put(arg0: number): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    getShort(): number
    getShort(arg0: number): number
    putShort(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    putShort(
      arg0: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    getChar(arg0: number): AllJavaClasses['char']['instanceObject']
    getChar(): AllJavaClasses['char']['instanceObject']
    putChar(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    putChar(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    getInt(arg0: number): number
    getInt(): number
    putInt(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    putInt(
      arg0: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    getLong(arg0: number): number
    getLong(): number
    putLong(
      arg0: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    putLong(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    getFloat(): number
    getFloat(arg0: number): number
    putFloat(
      arg0: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    putFloat(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    getDouble(arg0: number): number
    getDouble(): number
    putDouble(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    putDouble(
      arg0: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    clear(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    clear(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    position(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    mismatch(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): number
    limit(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    limit(arg0: number): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    isDirect(): boolean
    hasArray(): boolean
    array(): AllJavaClasses['java.lang.Object']['instanceObject']
    array(): number[]
    arrayOffset(): number
    mark(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    mark(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    alignmentOffset(arg0: number, arg1: number): number
    asReadOnlyBuffer(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    compact(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    order(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    order(): AllJavaClasses['java.nio.ByteOrder']['instanceObject']
    alignedSlice(
      arg0: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    asCharBuffer(): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    asShortBuffer(): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    asIntBuffer(): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    asLongBuffer(): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    asFloatBuffer(): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    asDoubleBuffer(): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
  } & Omit<
    AllJavaClasses['java.nio.Buffer']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_nio_Buffer = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.Buffer'
    reset(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    clear(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    position(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    position(): number
    limit(): number
    limit(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    remaining(): number
    isDirect(): boolean
    hasArray(): boolean
    array(): AllJavaClasses['java.lang.Object']['instanceObject']
    arrayOffset(): number
    capacity(): number
    mark(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    hasRemaining(): boolean
    isReadOnly(): boolean
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.Buffer']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_ByteOrder = {
  staticObject: {
    BIG_ENDIAN: AllJavaClasses['java.nio.ByteOrder']['instanceObject']
    LITTLE_ENDIAN: AllJavaClasses['java.nio.ByteOrder']['instanceObject']
    nativeOrder(): AllJavaClasses['java.nio.ByteOrder']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.nio.ByteOrder'
    toString(): string
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_CharBuffer = {
  staticObject: {
    wrap(
      arg0: AllJavaClasses['char']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    wrap(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    wrap(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    wrap(
      arg0: AllJavaClasses['char']['instanceObject'][],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    allocate(
      arg0: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
  }
  instanceObject: (((({
    __javaClass: 'java.nio.CharBuffer'
    reset(): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    get(
      arg0: AllJavaClasses['char']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    get(arg0: number): AllJavaClasses['char']['instanceObject']
    get(): AllJavaClasses['char']['instanceObject']
    get(
      arg0: AllJavaClasses['char']['instanceObject'][],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    get(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'][],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    get(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'][],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    put(
      arg0: AllJavaClasses['char']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'][],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    put(
      arg0: AllJavaClasses['char']['instanceObject'][],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    put(
      arg0: AllJavaClasses['java.nio.CharBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: AllJavaClasses['java.nio.CharBuffer']['instanceObject'],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'][],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    put(arg0: string): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    put(
      arg0: string,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    put(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    length(): number
    toString(): string
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.nio.CharBuffer']['instanceObject'],
    ): number
    clear(): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    clear(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    position(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    charAt(arg0: number): AllJavaClasses['char']['instanceObject']
    mismatch(
      arg0: AllJavaClasses['java.nio.CharBuffer']['instanceObject'],
    ): number
    isEmpty(): boolean
    subSequence(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.CharSequence']['instanceObject']
    subSequence(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    limit(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    limit(arg0: number): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    chars(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    isDirect(): boolean
    hasArray(): boolean
    array(): AllJavaClasses['java.lang.Object']['instanceObject']
    array(): AllJavaClasses['char']['instanceObject'][]
    arrayOffset(): number
    read(arg0: AllJavaClasses['java.nio.CharBuffer']['instanceObject']): number
    mark(): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    mark(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.Buffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    asReadOnlyBuffer(): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    compact(): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    order(): AllJavaClasses['java.nio.ByteOrder']['instanceObject']
  } & Omit<
    AllJavaClasses['java.nio.Buffer']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.Appendable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      '__javaClass'
    >) &
    Omit<AllJavaClasses['java.lang.Readable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_lang_Appendable = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.Appendable'
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
  }
}
type AllJavaClass_java_lang_Readable = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.Readable'
    read(arg0: AllJavaClasses['java.nio.CharBuffer']['instanceObject']): number
  }
}
type AllJavaClass_java_nio_ShortBuffer = {
  staticObject: {
    wrap(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    wrap(
      arg0: number[],
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    allocate(
      arg0: number,
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.nio.ShortBuffer'
    reset(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    get(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    get(arg0: number): number
    get(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    get(
      arg0: number[],
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    get(
      arg0: number,
      arg1: number[],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    get(): number
    put(
      arg0: number,
      arg1: number[],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: AllJavaClasses['java.nio.ShortBuffer']['instanceObject'],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    put(
      arg0: number[],
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    put(
      arg0: AllJavaClasses['java.nio.ShortBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    put(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    put(arg0: number): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.nio.ShortBuffer']['instanceObject'],
    ): number
    clear(): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    clear(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    position(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    mismatch(
      arg0: AllJavaClasses['java.nio.ShortBuffer']['instanceObject'],
    ): number
    limit(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    limit(
      arg0: number,
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    isDirect(): boolean
    hasArray(): boolean
    array(): number[]
    array(): AllJavaClasses['java.lang.Object']['instanceObject']
    arrayOffset(): number
    mark(): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    mark(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    asReadOnlyBuffer(): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    compact(): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    order(): AllJavaClasses['java.nio.ByteOrder']['instanceObject']
  } & Omit<
    AllJavaClasses['java.nio.Buffer']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_nio_IntBuffer = {
  staticObject: {
    wrap(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    wrap(arg0: number[]): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    allocate(
      arg0: number,
    ): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.nio.IntBuffer'
    reset(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    get(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    get(arg0: number): number
    get(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    get(arg0: number[]): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    get(
      arg0: number,
      arg1: number[],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    get(): number
    put(
      arg0: number,
      arg1: number[],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: AllJavaClasses['java.nio.IntBuffer']['instanceObject'],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    put(arg0: number[]): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    put(
      arg0: AllJavaClasses['java.nio.IntBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    put(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    put(arg0: number): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.nio.IntBuffer']['instanceObject'],
    ): number
    clear(): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    clear(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    position(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    mismatch(
      arg0: AllJavaClasses['java.nio.IntBuffer']['instanceObject'],
    ): number
    limit(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    limit(arg0: number): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    isDirect(): boolean
    hasArray(): boolean
    array(): number[]
    array(): AllJavaClasses['java.lang.Object']['instanceObject']
    arrayOffset(): number
    mark(): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    mark(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    asReadOnlyBuffer(): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    compact(): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    order(): AllJavaClasses['java.nio.ByteOrder']['instanceObject']
  } & Omit<
    AllJavaClasses['java.nio.Buffer']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_nio_LongBuffer = {
  staticObject: {
    wrap(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    wrap(
      arg0: number[],
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    allocate(
      arg0: number,
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.nio.LongBuffer'
    reset(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    get(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    get(arg0: number): number
    get(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    get(arg0: number[]): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    get(
      arg0: number,
      arg1: number[],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    get(): number
    put(
      arg0: number,
      arg1: number[],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: AllJavaClasses['java.nio.LongBuffer']['instanceObject'],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    put(arg0: number[]): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    put(
      arg0: AllJavaClasses['java.nio.LongBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    put(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    put(arg0: number): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.nio.LongBuffer']['instanceObject'],
    ): number
    clear(): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    clear(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    position(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    mismatch(
      arg0: AllJavaClasses['java.nio.LongBuffer']['instanceObject'],
    ): number
    limit(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    limit(arg0: number): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    isDirect(): boolean
    hasArray(): boolean
    array(): number[]
    array(): AllJavaClasses['java.lang.Object']['instanceObject']
    arrayOffset(): number
    mark(): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    mark(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    asReadOnlyBuffer(): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    compact(): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    order(): AllJavaClasses['java.nio.ByteOrder']['instanceObject']
  } & Omit<
    AllJavaClasses['java.nio.Buffer']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_nio_FloatBuffer = {
  staticObject: {
    wrap(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    wrap(
      arg0: number[],
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    allocate(
      arg0: number,
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.nio.FloatBuffer'
    reset(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    get(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    get(arg0: number): number
    get(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    get(
      arg0: number[],
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    get(
      arg0: number,
      arg1: number[],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    get(): number
    put(
      arg0: number,
      arg1: number[],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: AllJavaClasses['java.nio.FloatBuffer']['instanceObject'],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    put(
      arg0: number[],
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    put(
      arg0: AllJavaClasses['java.nio.FloatBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    put(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    put(arg0: number): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.nio.FloatBuffer']['instanceObject'],
    ): number
    clear(): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    clear(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    position(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    mismatch(
      arg0: AllJavaClasses['java.nio.FloatBuffer']['instanceObject'],
    ): number
    limit(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    limit(
      arg0: number,
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    isDirect(): boolean
    hasArray(): boolean
    array(): number[]
    array(): AllJavaClasses['java.lang.Object']['instanceObject']
    arrayOffset(): number
    mark(): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    mark(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    asReadOnlyBuffer(): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    compact(): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    order(): AllJavaClasses['java.nio.ByteOrder']['instanceObject']
  } & Omit<
    AllJavaClasses['java.nio.Buffer']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_nio_DoubleBuffer = {
  staticObject: {
    wrap(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    wrap(
      arg0: number[],
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    allocate(
      arg0: number,
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.nio.DoubleBuffer'
    reset(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    get(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    get(arg0: number): number
    get(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    get(
      arg0: number[],
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    get(
      arg0: number,
      arg1: number[],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    get(): number
    put(
      arg0: number,
      arg1: number[],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: AllJavaClasses['java.nio.DoubleBuffer']['instanceObject'],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    put(
      arg0: number[],
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    put(
      arg0: AllJavaClasses['java.nio.DoubleBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    put(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    put(arg0: number): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.nio.DoubleBuffer']['instanceObject'],
    ): number
    clear(): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    clear(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    position(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    mismatch(
      arg0: AllJavaClasses['java.nio.DoubleBuffer']['instanceObject'],
    ): number
    limit(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    limit(
      arg0: number,
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    isDirect(): boolean
    hasArray(): boolean
    array(): number[]
    array(): AllJavaClasses['java.lang.Object']['instanceObject']
    arrayOffset(): number
    mark(): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    mark(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    asReadOnlyBuffer(): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    compact(): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    order(): AllJavaClasses['java.nio.ByteOrder']['instanceObject']
  } & Omit<
    AllJavaClasses['java.nio.Buffer']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_module_ModuleDescriptor$Builder = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.module.ModuleDescriptor$Builder'
    version(
      arg0: string,
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    version(
      arg0: AllJavaClasses['java.lang.module.ModuleDescriptor$Version']['instanceObject'],
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    packages(
      arg0: AllJavaClasses['java.util.Set']['instanceObject'],
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    exports(
      arg0: string,
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    exports(
      arg0: AllJavaClasses['java.util.Set']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.util.Set']['instanceObject'],
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    exports(
      arg0: string,
      arg1: AllJavaClasses['java.util.Set']['instanceObject'],
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    exports(
      arg0: AllJavaClasses['java.util.Set']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    exports(
      arg0: AllJavaClasses['java.lang.module.ModuleDescriptor$Exports']['instanceObject'],
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    opens(
      arg0: string,
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    opens(
      arg0: AllJavaClasses['java.util.Set']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.util.Set']['instanceObject'],
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    opens(
      arg0: string,
      arg1: AllJavaClasses['java.util.Set']['instanceObject'],
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    opens(
      arg0: AllJavaClasses['java.lang.module.ModuleDescriptor$Opens']['instanceObject'],
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    opens(
      arg0: AllJavaClasses['java.util.Set']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    uses(
      arg0: string,
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    provides(
      arg0: AllJavaClasses['java.lang.module.ModuleDescriptor$Provides']['instanceObject'],
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    provides(
      arg0: string,
      arg1: AllJavaClasses['java.util.List']['instanceObject'],
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    build(): AllJavaClasses['java.lang.module.ModuleDescriptor']['instanceObject']
    requires(
      arg0: AllJavaClasses['java.lang.module.ModuleDescriptor$Requires']['instanceObject'],
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    requires(
      arg0: AllJavaClasses['java.util.Set']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.module.ModuleDescriptor$Version']['instanceObject'],
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    requires(
      arg0: string,
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    requires(
      arg0: AllJavaClasses['java.util.Set']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
    mainClass(
      arg0: string,
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Builder']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_lang_module_ModuleDescriptor$Version = {
  staticObject: {
    parse(
      arg0: string,
    ): AllJavaClasses['java.lang.module.ModuleDescriptor$Version']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.lang.module.ModuleDescriptor$Version'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.module.ModuleDescriptor$Version']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_module_ModuleDescriptor$Exports = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.lang.module.ModuleDescriptor$Exports'
    modifiers(): AllJavaClasses['java.util.Set']['instanceObject']
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.module.ModuleDescriptor$Exports']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    accessFlags(): AllJavaClasses['java.util.Set']['instanceObject']
    source(): string
    isQualified(): boolean
    targets(): AllJavaClasses['java.util.Set']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_module_ModuleDescriptor$Opens = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.lang.module.ModuleDescriptor$Opens'
    modifiers(): AllJavaClasses['java.util.Set']['instanceObject']
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.module.ModuleDescriptor$Opens']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    accessFlags(): AllJavaClasses['java.util.Set']['instanceObject']
    source(): string
    isQualified(): boolean
    targets(): AllJavaClasses['java.util.Set']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_module_ModuleDescriptor$Provides = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.lang.module.ModuleDescriptor$Provides'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.module.ModuleDescriptor$Provides']['instanceObject'],
    ): number
    service(): string
    providers(): AllJavaClasses['java.util.List']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_module_ModuleDescriptor$Requires = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.lang.module.ModuleDescriptor$Requires'
    modifiers(): AllJavaClasses['java.util.Set']['instanceObject']
    name(): string
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.module.ModuleDescriptor$Requires']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    accessFlags(): AllJavaClasses['java.util.Set']['instanceObject']
    rawCompiledVersion(): AllJavaClasses['java.util.Optional']['instanceObject']
    compiledVersion(): AllJavaClasses['java.util.Optional']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_ModuleLayer = {
  staticObject: {
    empty(): AllJavaClasses['java.lang.ModuleLayer']['instanceObject']
    boot(): AllJavaClasses['java.lang.ModuleLayer']['instanceObject']
    defineModules(
      arg0: AllJavaClasses['java.lang.module.Configuration']['instanceObject'],
      arg1: AllJavaClasses['java.util.List']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.lang.ModuleLayer$Controller']['instanceObject']
    defineModulesWithOneLoader(
      arg0: AllJavaClasses['java.lang.module.Configuration']['instanceObject'],
      arg1: AllJavaClasses['java.util.List']['instanceObject'],
      arg2: AllJavaClasses['java.lang.ClassLoader']['instanceObject'],
    ): AllJavaClasses['java.lang.ModuleLayer$Controller']['instanceObject']
    defineModulesWithManyLoaders(
      arg0: AllJavaClasses['java.lang.module.Configuration']['instanceObject'],
      arg1: AllJavaClasses['java.util.List']['instanceObject'],
      arg2: AllJavaClasses['java.lang.ClassLoader']['instanceObject'],
    ): AllJavaClasses['java.lang.ModuleLayer$Controller']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.lang.ModuleLayer'
    toString(): string
    modules(): AllJavaClasses['java.util.Set']['instanceObject']
    configuration(): AllJavaClasses['java.lang.module.Configuration']['instanceObject']
    parents(): AllJavaClasses['java.util.List']['instanceObject']
    findModule(
      arg0: string,
    ): AllJavaClasses['java.util.Optional']['instanceObject']
    defineModules(
      arg0: AllJavaClasses['java.lang.module.Configuration']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.lang.ModuleLayer']['instanceObject']
    defineModulesWithOneLoader(
      arg0: AllJavaClasses['java.lang.module.Configuration']['instanceObject'],
      arg1: AllJavaClasses['java.lang.ClassLoader']['instanceObject'],
    ): AllJavaClasses['java.lang.ModuleLayer']['instanceObject']
    defineModulesWithManyLoaders(
      arg0: AllJavaClasses['java.lang.module.Configuration']['instanceObject'],
      arg1: AllJavaClasses['java.lang.ClassLoader']['instanceObject'],
    ): AllJavaClasses['java.lang.ModuleLayer']['instanceObject']
    findLoader(
      arg0: string,
    ): AllJavaClasses['java.lang.ClassLoader']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_lang_module_Configuration = {
  staticObject: {
    empty(): AllJavaClasses['java.lang.module.Configuration']['instanceObject']
    resolve(
      arg0: AllJavaClasses['java.lang.module.ModuleFinder']['instanceObject'],
      arg1: AllJavaClasses['java.util.List']['instanceObject'],
      arg2: AllJavaClasses['java.lang.module.ModuleFinder']['instanceObject'],
      arg3: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): AllJavaClasses['java.lang.module.Configuration']['instanceObject']
    resolveAndBind(
      arg0: AllJavaClasses['java.lang.module.ModuleFinder']['instanceObject'],
      arg1: AllJavaClasses['java.util.List']['instanceObject'],
      arg2: AllJavaClasses['java.lang.module.ModuleFinder']['instanceObject'],
      arg3: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): AllJavaClasses['java.lang.module.Configuration']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.lang.module.Configuration'
    toString(): string
    resolve(
      arg0: AllJavaClasses['java.lang.module.ModuleFinder']['instanceObject'],
      arg1: AllJavaClasses['java.lang.module.ModuleFinder']['instanceObject'],
      arg2: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): AllJavaClasses['java.lang.module.Configuration']['instanceObject']
    modules(): AllJavaClasses['java.util.Set']['instanceObject']
    parents(): AllJavaClasses['java.util.List']['instanceObject']
    findModule(
      arg0: string,
    ): AllJavaClasses['java.util.Optional']['instanceObject']
    resolveAndBind(
      arg0: AllJavaClasses['java.lang.module.ModuleFinder']['instanceObject'],
      arg1: AllJavaClasses['java.lang.module.ModuleFinder']['instanceObject'],
      arg2: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): AllJavaClasses['java.lang.module.Configuration']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_lang_module_ModuleFinder = {
  staticObject: {
    of(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'][],
    ): AllJavaClasses['java.lang.module.ModuleFinder']['instanceObject']
    compose(
      arg0: AllJavaClasses['java.lang.module.ModuleFinder']['instanceObject'][],
    ): AllJavaClasses['java.lang.module.ModuleFinder']['instanceObject']
    ofSystem(): AllJavaClasses['java.lang.module.ModuleFinder']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.lang.module.ModuleFinder'
    find(arg0: string): AllJavaClasses['java.util.Optional']['instanceObject']
    findAll(): AllJavaClasses['java.util.Set']['instanceObject']
  }
}
type AllJavaClass_java_nio_file_Path = {
  staticObject: {
    of(
      arg0: string,
      arg1: string[],
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    of(
      arg0: AllJavaClasses['java.net.URI']['instanceObject'],
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
  }
  instanceObject: (({
    __javaClass: 'java.nio.file.Path'
    getName(
      arg0: number,
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    startsWith(arg0: string): boolean
    startsWith(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): boolean
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    endsWith(arg0: string): boolean
    endsWith(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): boolean
    register(
      arg0: AllJavaClasses['java.nio.file.WatchService']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.WatchEvent$Kind']['instanceObject'][],
      arg2: AllJavaClasses['java.nio.file.WatchEvent$Modifier']['instanceObject'][],
    ): AllJavaClasses['java.nio.file.WatchKey']['instanceObject']
    register(
      arg0: AllJavaClasses['java.nio.file.WatchService']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.WatchEvent$Kind']['instanceObject'][],
    ): AllJavaClasses['java.nio.file.WatchKey']['instanceObject']
    isAbsolute(): boolean
    resolve(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    resolve(
      arg0: string,
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    getParent(): AllJavaClasses['java.nio.file.Path']['instanceObject']
    getRoot(): AllJavaClasses['java.nio.file.Path']['instanceObject']
    toRealPath(
      arg0: AllJavaClasses['java.nio.file.LinkOption']['instanceObject'][],
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    toFile(): AllJavaClasses['java.io.File']['instanceObject']
    getFileName(): AllJavaClasses['java.nio.file.Path']['instanceObject']
    normalize(): AllJavaClasses['java.nio.file.Path']['instanceObject']
    getFileSystem(): AllJavaClasses['java.nio.file.FileSystem']['instanceObject']
    relativize(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    getNameCount(): number
    toAbsolutePath(): AllJavaClasses['java.nio.file.Path']['instanceObject']
    resolveSibling(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    resolveSibling(
      arg0: string,
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    subpath(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    toUri(): AllJavaClasses['java.net.URI']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Comparable']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Iterable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.nio.file.Watchable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_nio_file_WatchKey = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.file.WatchKey'
    reset(): boolean
    cancel(): void
    isValid(): boolean
    pollEvents(): AllJavaClasses['java.util.List']['instanceObject']
    watchable(): AllJavaClasses['java.nio.file.Watchable']['instanceObject']
  }
}
type AllJavaClass_java_nio_file_Watchable = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.file.Watchable'
    register(
      arg0: AllJavaClasses['java.nio.file.WatchService']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.WatchEvent$Kind']['instanceObject'][],
      arg2: AllJavaClasses['java.nio.file.WatchEvent$Modifier']['instanceObject'][],
    ): AllJavaClasses['java.nio.file.WatchKey']['instanceObject']
    register(
      arg0: AllJavaClasses['java.nio.file.WatchService']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.WatchEvent$Kind']['instanceObject'][],
    ): AllJavaClasses['java.nio.file.WatchKey']['instanceObject']
  }
}
type AllJavaClass_java_nio_file_WatchService = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.file.WatchService'
    close(): void
    poll(
      arg0: number,
      arg1: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): AllJavaClasses['java.nio.file.WatchKey']['instanceObject']
    poll(): AllJavaClasses['java.nio.file.WatchKey']['instanceObject']
    take(): AllJavaClasses['java.nio.file.WatchKey']['instanceObject']
  } & Omit<AllJavaClasses['java.io.Closeable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_util_concurrent_TimeUnit = {
  staticObject: {
    NANOSECONDS: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject']
    MICROSECONDS: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject']
    MILLISECONDS: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject']
    SECONDS: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject']
    MINUTES: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject']
    HOURS: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject']
    DAYS: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject']
    values(): AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject']
    of(
      arg0: AllJavaClasses['java.time.temporal.ChronoUnit']['instanceObject'],
    ): AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.concurrent.TimeUnit'
    convert(
      arg0: AllJavaClasses['java.time.Duration']['instanceObject'],
    ): number
    convert(
      arg0: number,
      arg1: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): number
    toNanos(arg0: number): number
    toMillis(arg0: number): number
    sleep(arg0: number): void
    toDays(arg0: number): number
    toSeconds(arg0: number): number
    toHours(arg0: number): number
    toMinutes(arg0: number): number
    toMicros(arg0: number): number
    timedWait(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: number,
    ): void
    timedJoin(
      arg0: AllJavaClasses['java.lang.Thread']['instanceObject'],
      arg1: number,
    ): void
    toChronoUnit(): AllJavaClasses['java.time.temporal.ChronoUnit']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_time_Duration = {
  staticObject: {
    ZERO: AllJavaClasses['java.time.Duration']['instanceObject']
    of(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    between(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    ofSeconds(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    ofSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    ofNanos(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    ofDays(arg0: number): AllJavaClasses['java.time.Duration']['instanceObject']
    ofHours(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    ofMinutes(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    ofMillis(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
  }
  instanceObject: ((({
    __javaClass: 'java.time.Duration'
    get(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    abs(): AllJavaClasses['java.time.Duration']['instanceObject']
    compareTo(
      arg0: AllJavaClasses['java.time.Duration']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    toNanos(): number
    toMillis(): number
    isZero(): boolean
    getNano(): number
    toDays(): number
    toSeconds(): number
    isNegative(): boolean
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.Duration']['instanceObject'],
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    isPositive(): boolean
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.Duration']['instanceObject'],
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    getUnits(): AllJavaClasses['java.util.List']['instanceObject']
    negated(): AllJavaClasses['java.time.Duration']['instanceObject']
    getSeconds(): number
    plusNanos(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    plusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    plusMillis(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    multipliedBy(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    plusDays(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    plusHours(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    plusMinutes(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    toHours(): number
    toMinutes(): number
    withSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    withNanos(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    minusDays(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    minusHours(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    minusMinutes(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    minusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    minusMillis(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    minusNanos(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    dividedBy(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    dividedBy(
      arg0: AllJavaClasses['java.time.Duration']['instanceObject'],
    ): number
    addTo(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    subtractFrom(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    toDaysPart(): number
    toHoursPart(): number
    toMinutesPart(): number
    toSecondsPart(): number
    toMillisPart(): number
    toNanosPart(): number
    truncatedTo(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.Duration']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_temporal_TemporalUnit = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.time.temporal.TemporalUnit'
    toString(): string
    between(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): number
    isDurationEstimated(): boolean
    getDuration(): AllJavaClasses['java.time.Duration']['instanceObject']
    addTo(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    isSupportedBy(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): boolean
    isTimeBased(): boolean
    isDateBased(): boolean
  }
}
type AllJavaClass_java_time_temporal_Temporal = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.time.temporal.Temporal'
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    until(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
  } & Omit<
    AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_time_temporal_TemporalField = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.time.temporal.TemporalField'
    toString(): string
    resolve(
      arg0: AllJavaClasses['java.util.Map']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
      arg2: AllJavaClasses['java.time.format.ResolverStyle']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject']
    range(): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    getDisplayName(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    isSupportedBy(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): boolean
    isTimeBased(): boolean
    getFrom(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): number
    adjustInto(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    rangeRefinedBy(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    isDateBased(): boolean
    getBaseUnit(): AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject']
    getRangeUnit(): AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject']
  }
}
type AllJavaClass_java_time_temporal_TemporalAccessor = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.time.temporal.TemporalAccessor'
    get(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    getLong(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
  }
}
type AllJavaClass_java_time_temporal_TemporalQuery = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.time.temporal.TemporalQuery'
    queryFrom(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_java_time_temporal_ValueRange = {
  staticObject: {
    of(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    of(
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    of(
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.time.temporal.ValueRange'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getMaximum(): number
    checkValidIntValue(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    checkValidValue(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    isIntValue(): boolean
    isValidValue(arg0: number): boolean
    getMinimum(): number
    isValidIntValue(arg0: number): boolean
    isFixed(): boolean
    getLargestMinimum(): number
    getSmallestMaximum(): number
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_format_ResolverStyle = {
  staticObject: {
    STRICT: AllJavaClasses['java.time.format.ResolverStyle']['instanceObject']
    SMART: AllJavaClasses['java.time.format.ResolverStyle']['instanceObject']
    LENIENT: AllJavaClasses['java.time.format.ResolverStyle']['instanceObject']
    values(): AllJavaClasses['java.time.format.ResolverStyle']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['java.time.format.ResolverStyle']['instanceObject']
  }
  instanceObject: { __javaClass: 'java.time.format.ResolverStyle' } & Omit<
    AllJavaClasses['java.lang.Enum']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_Locale = {
  staticObject: {
    ENGLISH: AllJavaClasses['java.util.Locale']['instanceObject']
    FRENCH: AllJavaClasses['java.util.Locale']['instanceObject']
    GERMAN: AllJavaClasses['java.util.Locale']['instanceObject']
    ITALIAN: AllJavaClasses['java.util.Locale']['instanceObject']
    JAPANESE: AllJavaClasses['java.util.Locale']['instanceObject']
    KOREAN: AllJavaClasses['java.util.Locale']['instanceObject']
    CHINESE: AllJavaClasses['java.util.Locale']['instanceObject']
    SIMPLIFIED_CHINESE: AllJavaClasses['java.util.Locale']['instanceObject']
    TRADITIONAL_CHINESE: AllJavaClasses['java.util.Locale']['instanceObject']
    FRANCE: AllJavaClasses['java.util.Locale']['instanceObject']
    GERMANY: AllJavaClasses['java.util.Locale']['instanceObject']
    ITALY: AllJavaClasses['java.util.Locale']['instanceObject']
    JAPAN: AllJavaClasses['java.util.Locale']['instanceObject']
    KOREA: AllJavaClasses['java.util.Locale']['instanceObject']
    UK: AllJavaClasses['java.util.Locale']['instanceObject']
    US: AllJavaClasses['java.util.Locale']['instanceObject']
    CANADA: AllJavaClasses['java.util.Locale']['instanceObject']
    CANADA_FRENCH: AllJavaClasses['java.util.Locale']['instanceObject']
    ROOT: AllJavaClasses['java.util.Locale']['instanceObject']
    CHINA: AllJavaClasses['java.util.Locale']['instanceObject']
    PRC: AllJavaClasses['java.util.Locale']['instanceObject']
    TAIWAN: AllJavaClasses['java.util.Locale']['instanceObject']
    PRIVATE_USE_EXTENSION: AllJavaClasses['char']['instanceObject']
    UNICODE_LOCALE_EXTENSION: AllJavaClasses['char']['instanceObject']
    new (arg0: string): AllJavaClasses['java.util.Locale']['instanceObject']
    new (
      arg0: string,
      arg1: string,
      arg2: string,
    ): AllJavaClasses['java.util.Locale']['instanceObject']
    new (
      arg0: string,
      arg1: string,
    ): AllJavaClasses['java.util.Locale']['instanceObject']
    getDefault(): AllJavaClasses['java.util.Locale']['instanceObject']
    getDefault(
      arg0: AllJavaClasses['java.util.Locale$Category']['instanceObject'],
    ): AllJavaClasses['java.util.Locale']['instanceObject']
    of(
      arg0: string,
      arg1: string,
    ): AllJavaClasses['java.util.Locale']['instanceObject']
    of(
      arg0: string,
      arg1: string,
      arg2: string,
    ): AllJavaClasses['java.util.Locale']['instanceObject']
    of(arg0: string): AllJavaClasses['java.util.Locale']['instanceObject']
    lookup(
      arg0: AllJavaClasses['java.util.List']['instanceObject'],
      arg1: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): AllJavaClasses['java.util.Locale']['instanceObject']
    filter(
      arg0: AllJavaClasses['java.util.List']['instanceObject'],
      arg1: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    filter(
      arg0: AllJavaClasses['java.util.List']['instanceObject'],
      arg1: AllJavaClasses['java.util.Collection']['instanceObject'],
      arg2: AllJavaClasses['java.util.Locale$FilteringMode']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    getAvailableLocales(): AllJavaClasses['java.util.Locale']['instanceObject'][]
    setDefault(arg0: AllJavaClasses['java.util.Locale']['instanceObject']): void
    setDefault(
      arg0: AllJavaClasses['java.util.Locale$Category']['instanceObject'],
      arg1: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): void
    filterTags(
      arg0: AllJavaClasses['java.util.List']['instanceObject'],
      arg1: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    filterTags(
      arg0: AllJavaClasses['java.util.List']['instanceObject'],
      arg1: AllJavaClasses['java.util.Collection']['instanceObject'],
      arg2: AllJavaClasses['java.util.Locale$FilteringMode']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    lookupTag(
      arg0: AllJavaClasses['java.util.List']['instanceObject'],
      arg1: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): string
    availableLocales(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    getISOCountries(
      arg0: AllJavaClasses['java.util.Locale$IsoCountryCode']['instanceObject'],
    ): AllJavaClasses['java.util.Set']['instanceObject']
    getISOCountries(): string[]
    getISOLanguages(): string[]
    caseFoldLanguageTag(arg0: string): string
    forLanguageTag(
      arg0: string,
    ): AllJavaClasses['java.util.Locale']['instanceObject']
  }
  instanceObject: (({
    __javaClass: 'java.util.Locale'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    clone(): AllJavaClasses['java.lang.Object']['instanceObject']
    getLanguage(): string
    getDisplayName(): string
    getDisplayName(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    getUnicodeLocaleType(arg0: string): string
    getCountry(): string
    stripExtensions(): AllJavaClasses['java.util.Locale']['instanceObject']
    hasExtensions(): boolean
    getVariant(): string
    getScript(): string
    getUnicodeLocaleAttributes(): AllJavaClasses['java.util.Set']['instanceObject']
    getUnicodeLocaleKeys(): AllJavaClasses['java.util.Set']['instanceObject']
    getDisplayLanguage(): string
    getDisplayLanguage(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    getDisplayScript(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    getDisplayScript(): string
    getDisplayCountry(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    getDisplayCountry(): string
    getDisplayVariant(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    getDisplayVariant(): string
    getExtension(arg0: AllJavaClasses['char']['instanceObject']): string
    getExtensionKeys(): AllJavaClasses['java.util.Set']['instanceObject']
    toLanguageTag(): string
    getISO3Language(): string
    getISO3Country(): string
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Cloneable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_util_Locale$Category = {
  staticObject: {
    DISPLAY: AllJavaClasses['java.util.Locale$Category']['instanceObject']
    FORMAT: AllJavaClasses['java.util.Locale$Category']['instanceObject']
    values(): AllJavaClasses['java.util.Locale$Category']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['java.util.Locale$Category']['instanceObject']
  }
  instanceObject: { __javaClass: 'java.util.Locale$Category' } & Omit<
    AllJavaClasses['java.lang.Enum']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_Locale$FilteringMode = {
  staticObject: {
    AUTOSELECT_FILTERING: AllJavaClasses['java.util.Locale$FilteringMode']['instanceObject']
    EXTENDED_FILTERING: AllJavaClasses['java.util.Locale$FilteringMode']['instanceObject']
    IGNORE_EXTENDED_RANGES: AllJavaClasses['java.util.Locale$FilteringMode']['instanceObject']
    MAP_EXTENDED_RANGES: AllJavaClasses['java.util.Locale$FilteringMode']['instanceObject']
    REJECT_EXTENDED_RANGES: AllJavaClasses['java.util.Locale$FilteringMode']['instanceObject']
    values(): AllJavaClasses['java.util.Locale$FilteringMode']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['java.util.Locale$FilteringMode']['instanceObject']
  }
  instanceObject: { __javaClass: 'java.util.Locale$FilteringMode' } & Omit<
    AllJavaClasses['java.lang.Enum']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_Locale$IsoCountryCode = {
  staticObject: {
    PART1_ALPHA2: AllJavaClasses['java.util.Locale$IsoCountryCode']['instanceObject']
    PART1_ALPHA3: AllJavaClasses['java.util.Locale$IsoCountryCode']['instanceObject']
    PART3: AllJavaClasses['java.util.Locale$IsoCountryCode']['instanceObject']
    values(): AllJavaClasses['java.util.Locale$IsoCountryCode']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['java.util.Locale$IsoCountryCode']['instanceObject']
  }
  instanceObject: { __javaClass: 'java.util.Locale$IsoCountryCode' } & Omit<
    AllJavaClasses['java.lang.Enum']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_Cloneable = {
  staticObject: object
  instanceObject: { __javaClass: 'java.lang.Cloneable' }
}
type AllJavaClass_java_time_temporal_TemporalAdjuster = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.time.temporal.TemporalAdjuster'
    adjustInto(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
  }
}
type AllJavaClass_java_time_temporal_TemporalAmount = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.time.temporal.TemporalAmount'
    get(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
    getUnits(): AllJavaClasses['java.util.List']['instanceObject']
    addTo(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    subtractFrom(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
  }
}
type AllJavaClass_java_time_temporal_ChronoUnit = {
  staticObject: {
    NANOS: AllJavaClasses['java.time.temporal.ChronoUnit']['instanceObject']
    MICROS: AllJavaClasses['java.time.temporal.ChronoUnit']['instanceObject']
    MILLIS: AllJavaClasses['java.time.temporal.ChronoUnit']['instanceObject']
    SECONDS: AllJavaClasses['java.time.temporal.ChronoUnit']['instanceObject']
    MINUTES: AllJavaClasses['java.time.temporal.ChronoUnit']['instanceObject']
    HOURS: AllJavaClasses['java.time.temporal.ChronoUnit']['instanceObject']
    HALF_DAYS: AllJavaClasses['java.time.temporal.ChronoUnit']['instanceObject']
    DAYS: AllJavaClasses['java.time.temporal.ChronoUnit']['instanceObject']
    WEEKS: AllJavaClasses['java.time.temporal.ChronoUnit']['instanceObject']
    MONTHS: AllJavaClasses['java.time.temporal.ChronoUnit']['instanceObject']
    YEARS: AllJavaClasses['java.time.temporal.ChronoUnit']['instanceObject']
    DECADES: AllJavaClasses['java.time.temporal.ChronoUnit']['instanceObject']
    CENTURIES: AllJavaClasses['java.time.temporal.ChronoUnit']['instanceObject']
    MILLENNIA: AllJavaClasses['java.time.temporal.ChronoUnit']['instanceObject']
    ERAS: AllJavaClasses['java.time.temporal.ChronoUnit']['instanceObject']
    FOREVER: AllJavaClasses['java.time.temporal.ChronoUnit']['instanceObject']
    values(): AllJavaClasses['java.time.temporal.ChronoUnit']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['java.time.temporal.ChronoUnit']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.time.temporal.ChronoUnit'
    toString(): string
    between(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): number
    isDurationEstimated(): boolean
    getDuration(): AllJavaClasses['java.time.Duration']['instanceObject']
    addTo(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    isSupportedBy(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): boolean
    isTimeBased(): boolean
    isDateBased(): boolean
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>) &
    Omit<
      AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_Thread = {
  staticObject: {
    MIN_PRIORITY: number
    NORM_PRIORITY: number
    MAX_PRIORITY: number
    new (): AllJavaClasses['java.lang.Thread']['instanceObject']
    new (
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
    ): AllJavaClasses['java.lang.Thread']['instanceObject']
    new (
      arg0: AllJavaClasses['java.lang.ThreadGroup']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Runnable']['instanceObject'],
      arg2: string,
      arg3: number,
      arg4: boolean,
    ): AllJavaClasses['java.lang.Thread']['instanceObject']
    new (
      arg0: AllJavaClasses['java.lang.ThreadGroup']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Runnable']['instanceObject'],
      arg2: string,
      arg3: number,
    ): AllJavaClasses['java.lang.Thread']['instanceObject']
    new (
      arg0: AllJavaClasses['java.lang.ThreadGroup']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Runnable']['instanceObject'],
      arg2: string,
    ): AllJavaClasses['java.lang.Thread']['instanceObject']
    new (
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['java.lang.Thread']['instanceObject']
    new (
      arg0: AllJavaClasses['java.lang.ThreadGroup']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Runnable']['instanceObject'],
    ): AllJavaClasses['java.lang.Thread']['instanceObject']
    new (arg0: string): AllJavaClasses['java.lang.Thread']['instanceObject']
    new (
      arg0: AllJavaClasses['java.lang.ThreadGroup']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['java.lang.Thread']['instanceObject']
    currentThread(): AllJavaClasses['java.lang.Thread']['instanceObject']
    onSpinWait(): void
    dumpStack(): void
    interrupted(): boolean
    activeCount(): number
    enumerate(
      arg0: AllJavaClasses['java.lang.Thread']['instanceObject'][],
    ): number
    setDefaultUncaughtExceptionHandler(
      arg0: AllJavaClasses['java.lang.Thread$UncaughtExceptionHandler']['instanceObject'],
    ): void
    yield(): void
    sleep(arg0: number, arg1: number): void
    sleep(arg0: AllJavaClasses['java.time.Duration']['instanceObject']): void
    sleep(arg0: number): void
    ofPlatform(): AllJavaClasses['java.lang.Thread$Builder$OfPlatform']['instanceObject']
    ofVirtual(): AllJavaClasses['java.lang.Thread$Builder$OfVirtual']['instanceObject']
    startVirtualThread(
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
    ): AllJavaClasses['java.lang.Thread']['instanceObject']
    holdsLock(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    getAllStackTraces(): AllJavaClasses['java.util.Map']['instanceObject']
    getDefaultUncaughtExceptionHandler(): AllJavaClasses['java.lang.Thread$UncaughtExceptionHandler']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.lang.Thread'
    getName(): string
    getStackTrace(): AllJavaClasses['java.lang.StackTraceElement']['instanceObject'][]
    run(): void
    interrupt(): void
    toString(): string
    isVirtual(): boolean
    join(arg0: number): void
    join(arg0: number, arg1: number): void
    join(): void
    join(arg0: AllJavaClasses['java.time.Duration']['instanceObject']): boolean
    setContextClassLoader(
      arg0: AllJavaClasses['java.lang.ClassLoader']['instanceObject'],
    ): void
    getThreadGroup(): AllJavaClasses['java.lang.ThreadGroup']['instanceObject']
    checkAccess(): void
    setPriority(arg0: number): void
    setDaemon(arg0: boolean): void
    start(): void
    getContextClassLoader(): AllJavaClasses['java.lang.ClassLoader']['instanceObject']
    getPriority(): number
    isDaemon(): boolean
    isAlive(): boolean
    threadId(): number
    getUncaughtExceptionHandler(): AllJavaClasses['java.lang.Thread$UncaughtExceptionHandler']['instanceObject']
    stop(): void
    isInterrupted(): boolean
    suspend(): void
    resume(): void
    setName(arg0: string): void
    countStackFrames(): number
    getId(): number
    getState(): AllJavaClasses['java.lang.Thread$State']['instanceObject']
    setUncaughtExceptionHandler(
      arg0: AllJavaClasses['java.lang.Thread$UncaughtExceptionHandler']['instanceObject'],
    ): void
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<AllJavaClasses['java.lang.Runnable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_lang_ThreadGroup = {
  staticObject: {
    new (
      arg0: string,
    ): AllJavaClasses['java.lang.ThreadGroup']['instanceObject']
    new (
      arg0: AllJavaClasses['java.lang.ThreadGroup']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['java.lang.ThreadGroup']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.lang.ThreadGroup'
    getName(): string
    interrupt(): void
    toString(): string
    list(): void
    getParent(): AllJavaClasses['java.lang.ThreadGroup']['instanceObject']
    checkAccess(): void
    setDaemon(arg0: boolean): void
    getMaxPriority(): number
    isDaemon(): boolean
    activeCount(): number
    enumerate(
      arg0: AllJavaClasses['java.lang.ThreadGroup']['instanceObject'][],
    ): number
    enumerate(
      arg0: AllJavaClasses['java.lang.ThreadGroup']['instanceObject'][],
      arg1: boolean,
    ): number
    enumerate(
      arg0: AllJavaClasses['java.lang.Thread']['instanceObject'][],
    ): number
    enumerate(
      arg0: AllJavaClasses['java.lang.Thread']['instanceObject'][],
      arg1: boolean,
    ): number
    uncaughtException(
      arg0: AllJavaClasses['java.lang.Thread']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): void
    stop(): void
    suspend(): void
    resume(): void
    parentOf(
      arg0: AllJavaClasses['java.lang.ThreadGroup']['instanceObject'],
    ): boolean
    activeGroupCount(): number
    setMaxPriority(arg0: number): void
    isDestroyed(): boolean
    destroy(): void
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Thread$UncaughtExceptionHandler']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_Thread$UncaughtExceptionHandler = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.Thread$UncaughtExceptionHandler'
    uncaughtException(
      arg0: AllJavaClasses['java.lang.Thread']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): void
  }
}
type AllJavaClass_java_lang_StackTraceElement = {
  staticObject: {
    new (
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: string,
      arg5: string,
      arg6: number,
    ): AllJavaClasses['java.lang.StackTraceElement']['instanceObject']
    new (
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: number,
    ): AllJavaClasses['java.lang.StackTraceElement']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.lang.StackTraceElement'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getClassName(): string
    isNativeMethod(): boolean
    getFileName(): string
    getLineNumber(): number
    getModuleName(): string
    getModuleVersion(): string
    getClassLoaderName(): string
    getMethodName(): string
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_Thread$Builder$OfPlatform = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.Thread$Builder$OfPlatform'
    name(
      arg0: string,
      arg1: number,
    ): AllJavaClasses['java.lang.Thread$Builder']['instanceObject']
    name(
      arg0: string,
    ): AllJavaClasses['java.lang.Thread$Builder']['instanceObject']
    name(
      arg0: string,
      arg1: number,
    ): AllJavaClasses['java.lang.Thread$Builder$OfPlatform']['instanceObject']
    name(
      arg0: string,
    ): AllJavaClasses['java.lang.Thread$Builder$OfPlatform']['instanceObject']
    priority(
      arg0: number,
    ): AllJavaClasses['java.lang.Thread$Builder$OfPlatform']['instanceObject']
    group(
      arg0: AllJavaClasses['java.lang.ThreadGroup']['instanceObject'],
    ): AllJavaClasses['java.lang.Thread$Builder$OfPlatform']['instanceObject']
    daemon(): AllJavaClasses['java.lang.Thread$Builder$OfPlatform']['instanceObject']
    daemon(
      arg0: boolean,
    ): AllJavaClasses['java.lang.Thread$Builder$OfPlatform']['instanceObject']
    uncaughtExceptionHandler(
      arg0: AllJavaClasses['java.lang.Thread$UncaughtExceptionHandler']['instanceObject'],
    ): AllJavaClasses['java.lang.Thread$Builder$OfPlatform']['instanceObject']
    uncaughtExceptionHandler(
      arg0: AllJavaClasses['java.lang.Thread$UncaughtExceptionHandler']['instanceObject'],
    ): AllJavaClasses['java.lang.Thread$Builder']['instanceObject']
    stackSize(
      arg0: number,
    ): AllJavaClasses['java.lang.Thread$Builder$OfPlatform']['instanceObject']
    inheritInheritableThreadLocals(
      arg0: boolean,
    ): AllJavaClasses['java.lang.Thread$Builder$OfPlatform']['instanceObject']
    inheritInheritableThreadLocals(
      arg0: boolean,
    ): AllJavaClasses['java.lang.Thread$Builder']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Thread$Builder']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_Thread$Builder = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.Thread$Builder'
    name(
      arg0: string,
    ): AllJavaClasses['java.lang.Thread$Builder']['instanceObject']
    name(
      arg0: string,
      arg1: number,
    ): AllJavaClasses['java.lang.Thread$Builder']['instanceObject']
    factory(): AllJavaClasses['java.util.concurrent.ThreadFactory']['instanceObject']
    start(
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
    ): AllJavaClasses['java.lang.Thread']['instanceObject']
    uncaughtExceptionHandler(
      arg0: AllJavaClasses['java.lang.Thread$UncaughtExceptionHandler']['instanceObject'],
    ): AllJavaClasses['java.lang.Thread$Builder']['instanceObject']
    inheritInheritableThreadLocals(
      arg0: boolean,
    ): AllJavaClasses['java.lang.Thread$Builder']['instanceObject']
    unstarted(
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
    ): AllJavaClasses['java.lang.Thread']['instanceObject']
  }
}
type AllJavaClass_java_util_concurrent_ThreadFactory = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.concurrent.ThreadFactory'
    newThread(
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
    ): AllJavaClasses['java.lang.Thread']['instanceObject']
  }
}
type AllJavaClass_java_lang_Thread$Builder$OfVirtual = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.Thread$Builder$OfVirtual'
    name(
      arg0: string,
      arg1: number,
    ): AllJavaClasses['java.lang.Thread$Builder']['instanceObject']
    name(
      arg0: string,
    ): AllJavaClasses['java.lang.Thread$Builder']['instanceObject']
    name(
      arg0: string,
    ): AllJavaClasses['java.lang.Thread$Builder$OfVirtual']['instanceObject']
    name(
      arg0: string,
      arg1: number,
    ): AllJavaClasses['java.lang.Thread$Builder$OfVirtual']['instanceObject']
    uncaughtExceptionHandler(
      arg0: AllJavaClasses['java.lang.Thread$UncaughtExceptionHandler']['instanceObject'],
    ): AllJavaClasses['java.lang.Thread$Builder']['instanceObject']
    uncaughtExceptionHandler(
      arg0: AllJavaClasses['java.lang.Thread$UncaughtExceptionHandler']['instanceObject'],
    ): AllJavaClasses['java.lang.Thread$Builder$OfVirtual']['instanceObject']
    inheritInheritableThreadLocals(
      arg0: boolean,
    ): AllJavaClasses['java.lang.Thread$Builder$OfVirtual']['instanceObject']
    inheritInheritableThreadLocals(
      arg0: boolean,
    ): AllJavaClasses['java.lang.Thread$Builder']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Thread$Builder']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_Thread$State = {
  staticObject: {
    NEW: AllJavaClasses['java.lang.Thread$State']['instanceObject']
    RUNNABLE: AllJavaClasses['java.lang.Thread$State']['instanceObject']
    BLOCKED: AllJavaClasses['java.lang.Thread$State']['instanceObject']
    WAITING: AllJavaClasses['java.lang.Thread$State']['instanceObject']
    TIMED_WAITING: AllJavaClasses['java.lang.Thread$State']['instanceObject']
    TERMINATED: AllJavaClasses['java.lang.Thread$State']['instanceObject']
    values(): AllJavaClasses['java.lang.Thread$State']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['java.lang.Thread$State']['instanceObject']
  }
  instanceObject: { __javaClass: 'java.lang.Thread$State' } & Omit<
    AllJavaClasses['java.lang.Enum']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_nio_file_WatchEvent$Kind = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.file.WatchEvent$Kind'
    name(): string
    type(): AllJavaClasses['java.lang.Class']['instanceObject']
  }
}
type AllJavaClass_java_nio_file_WatchEvent$Modifier = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.file.WatchEvent$Modifier'
    name(): string
  }
}
type AllJavaClass_java_nio_file_LinkOption = {
  staticObject: {
    NOFOLLOW_LINKS: AllJavaClasses['java.nio.file.LinkOption']['instanceObject']
    values(): AllJavaClasses['java.nio.file.LinkOption']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['java.nio.file.LinkOption']['instanceObject']
  }
  instanceObject: (({ __javaClass: 'java.nio.file.LinkOption' } & Omit<
    AllJavaClasses['java.lang.Enum']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.nio.file.OpenOption']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.nio.file.CopyOption']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_nio_file_OpenOption = {
  staticObject: object
  instanceObject: { __javaClass: 'java.nio.file.OpenOption' }
}
type AllJavaClass_java_nio_file_CopyOption = {
  staticObject: object
  instanceObject: { __javaClass: 'java.nio.file.CopyOption' }
}
type AllJavaClass_java_io_File = {
  staticObject: {
    separatorChar: AllJavaClasses['char']['instanceObject']
    separator: string
    pathSeparatorChar: AllJavaClasses['char']['instanceObject']
    pathSeparator: string
    new (arg0: string): AllJavaClasses['java.io.File']['instanceObject']
    new (
      arg0: string,
      arg1: string,
    ): AllJavaClasses['java.io.File']['instanceObject']
    new (
      arg0: AllJavaClasses['java.net.URI']['instanceObject'],
    ): AllJavaClasses['java.io.File']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['java.io.File']['instanceObject']
    listRoots(): AllJavaClasses['java.io.File']['instanceObject'][]
    createTempFile(
      arg0: string,
      arg1: string,
    ): AllJavaClasses['java.io.File']['instanceObject']
    createTempFile(
      arg0: string,
      arg1: string,
      arg2: AllJavaClasses['java.io.File']['instanceObject'],
    ): AllJavaClasses['java.io.File']['instanceObject']
  }
  instanceObject: (({
    __javaClass: 'java.io.File'
    getName(): string
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    length(): number
    toString(): string
    hashCode(): number
    isHidden(): boolean
    compareTo(arg0: AllJavaClasses['java.io.File']['instanceObject']): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    list(): string[]
    list(
      arg0: AllJavaClasses['java.io.FilenameFilter']['instanceObject'],
    ): string[]
    isAbsolute(): boolean
    getParent(): string
    delete(): boolean
    setReadOnly(): boolean
    canRead(): boolean
    getPath(): string
    toURI(): AllJavaClasses['java.net.URI']['instanceObject']
    toURL(): AllJavaClasses['java.net.URL']['instanceObject']
    getAbsolutePath(): string
    exists(): boolean
    createNewFile(): boolean
    renameTo(arg0: AllJavaClasses['java.io.File']['instanceObject']): boolean
    isDirectory(): boolean
    getCanonicalPath(): string
    getAbsoluteFile(): AllJavaClasses['java.io.File']['instanceObject']
    mkdir(): boolean
    getCanonicalFile(): AllJavaClasses['java.io.File']['instanceObject']
    getParentFile(): AllJavaClasses['java.io.File']['instanceObject']
    mkdirs(): boolean
    setWritable(arg0: boolean): boolean
    setWritable(arg0: boolean, arg1: boolean): boolean
    setReadable(arg0: boolean, arg1: boolean): boolean
    setReadable(arg0: boolean): boolean
    setExecutable(arg0: boolean, arg1: boolean): boolean
    setExecutable(arg0: boolean): boolean
    canWrite(): boolean
    isFile(): boolean
    lastModified(): number
    deleteOnExit(): void
    listFiles(
      arg0: AllJavaClasses['java.io.FileFilter']['instanceObject'],
    ): AllJavaClasses['java.io.File']['instanceObject'][]
    listFiles(
      arg0: AllJavaClasses['java.io.FilenameFilter']['instanceObject'],
    ): AllJavaClasses['java.io.File']['instanceObject'][]
    listFiles(): AllJavaClasses['java.io.File']['instanceObject'][]
    setLastModified(arg0: number): boolean
    canExecute(): boolean
    getTotalSpace(): number
    getFreeSpace(): number
    getUsableSpace(): number
    toPath(): AllJavaClasses['java.nio.file.Path']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_io_FilenameFilter = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.io.FilenameFilter'
    accept(
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
      arg1: string,
    ): boolean
  }
}
type AllJavaClass_java_io_FileFilter = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.io.FileFilter'
    accept(arg0: AllJavaClasses['java.io.File']['instanceObject']): boolean
  }
}
type AllJavaClass_java_nio_file_FileSystem = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.nio.file.FileSystem'
    isOpen(): boolean
    provider(): AllJavaClasses['java.nio.file.spi.FileSystemProvider']['instanceObject']
    close(): void
    getPath(
      arg0: string,
      arg1: string[],
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    isReadOnly(): boolean
    getSeparator(): string
    getRootDirectories(): AllJavaClasses['java.lang.Iterable']['instanceObject']
    getFileStores(): AllJavaClasses['java.lang.Iterable']['instanceObject']
    supportedFileAttributeViews(): AllJavaClasses['java.util.Set']['instanceObject']
    getPathMatcher(
      arg0: string,
    ): AllJavaClasses['java.nio.file.PathMatcher']['instanceObject']
    getUserPrincipalLookupService(): AllJavaClasses['java.nio.file.attribute.UserPrincipalLookupService']['instanceObject']
    newWatchService(): AllJavaClasses['java.nio.file.WatchService']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<AllJavaClasses['java.io.Closeable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_file_spi_FileSystemProvider = {
  staticObject: {
    installedProviders(): AllJavaClasses['java.util.List']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.nio.file.spi.FileSystemProvider'
    isHidden(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): boolean
    delete(arg0: AllJavaClasses['java.nio.file.Path']['instanceObject']): void
    checkAccess(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.AccessMode']['instanceObject'][],
    ): void
    copy(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg2: AllJavaClasses['java.nio.file.CopyOption']['instanceObject'][],
    ): void
    getScheme(): string
    getPath(
      arg0: AllJavaClasses['java.net.URI']['instanceObject'],
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    exists(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.LinkOption']['instanceObject'][],
    ): boolean
    createDirectory(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.attribute.FileAttribute']['instanceObject'][],
    ): void
    getFileSystem(
      arg0: AllJavaClasses['java.net.URI']['instanceObject'],
    ): AllJavaClasses['java.nio.file.FileSystem']['instanceObject']
    newFileSystem(
      arg0: AllJavaClasses['java.net.URI']['instanceObject'],
      arg1: AllJavaClasses['java.util.Map']['instanceObject'],
    ): AllJavaClasses['java.nio.file.FileSystem']['instanceObject']
    newFileSystem(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.util.Map']['instanceObject'],
    ): AllJavaClasses['java.nio.file.FileSystem']['instanceObject']
    newInputStream(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.OpenOption']['instanceObject'][],
    ): AllJavaClasses['java.io.InputStream']['instanceObject']
    newOutputStream(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.OpenOption']['instanceObject'][],
    ): AllJavaClasses['java.io.OutputStream']['instanceObject']
    newByteChannel(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.util.Set']['instanceObject'],
      arg2: AllJavaClasses['java.nio.file.attribute.FileAttribute']['instanceObject'][],
    ): AllJavaClasses['java.nio.channels.SeekableByteChannel']['instanceObject']
    newDirectoryStream(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.DirectoryStream$Filter']['instanceObject'],
    ): AllJavaClasses['java.nio.file.DirectoryStream']['instanceObject']
    createSymbolicLink(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg2: AllJavaClasses['java.nio.file.attribute.FileAttribute']['instanceObject'][],
    ): void
    createLink(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): void
    deleteIfExists(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): boolean
    move(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg2: AllJavaClasses['java.nio.file.CopyOption']['instanceObject'][],
    ): void
    readSymbolicLink(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    getFileStore(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): AllJavaClasses['java.nio.file.FileStore']['instanceObject']
    isSameFile(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): boolean
    getFileAttributeView(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg2: AllJavaClasses['java.nio.file.LinkOption']['instanceObject'][],
    ): AllJavaClasses['java.nio.file.attribute.FileAttributeView']['instanceObject']
    readAttributes(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg2: AllJavaClasses['java.nio.file.LinkOption']['instanceObject'][],
    ): AllJavaClasses['java.nio.file.attribute.BasicFileAttributes']['instanceObject']
    readAttributes(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.nio.file.LinkOption']['instanceObject'][],
    ): AllJavaClasses['java.util.Map']['instanceObject']
    setAttribute(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.nio.file.LinkOption']['instanceObject'][],
    ): void
    readAttributesIfExists(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg2: AllJavaClasses['java.nio.file.LinkOption']['instanceObject'][],
    ): AllJavaClasses['java.nio.file.attribute.BasicFileAttributes']['instanceObject']
    newFileChannel(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.util.Set']['instanceObject'],
      arg2: AllJavaClasses['java.nio.file.attribute.FileAttribute']['instanceObject'][],
    ): AllJavaClasses['java.nio.channels.FileChannel']['instanceObject']
    newAsynchronousFileChannel(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.util.Set']['instanceObject'],
      arg2: AllJavaClasses['java.util.concurrent.ExecutorService']['instanceObject'],
      arg3: AllJavaClasses['java.nio.file.attribute.FileAttribute']['instanceObject'][],
    ): AllJavaClasses['java.nio.channels.AsynchronousFileChannel']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_file_AccessMode = {
  staticObject: {
    READ: AllJavaClasses['java.nio.file.AccessMode']['instanceObject']
    WRITE: AllJavaClasses['java.nio.file.AccessMode']['instanceObject']
    EXECUTE: AllJavaClasses['java.nio.file.AccessMode']['instanceObject']
    values(): AllJavaClasses['java.nio.file.AccessMode']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['java.nio.file.AccessMode']['instanceObject']
  }
  instanceObject: { __javaClass: 'java.nio.file.AccessMode' } & Omit<
    AllJavaClasses['java.lang.Enum']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_nio_file_attribute_FileAttribute = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.file.attribute.FileAttribute'
    name(): string
    value(): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_java_nio_channels_SeekableByteChannel = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.channels.SeekableByteChannel'
    size(): number
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.channels.SeekableByteChannel']['instanceObject']
    position(): number
    write(arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject']): number
    read(arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject']): number
    truncate(
      arg0: number,
    ): AllJavaClasses['java.nio.channels.SeekableByteChannel']['instanceObject']
  } & Omit<
    AllJavaClasses['java.nio.channels.ByteChannel']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_nio_channels_ByteChannel = {
  staticObject: object
  instanceObject: ({ __javaClass: 'java.nio.channels.ByteChannel' } & Omit<
    AllJavaClasses['java.nio.channels.ReadableByteChannel']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.nio.channels.WritableByteChannel']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_nio_channels_ReadableByteChannel = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.channels.ReadableByteChannel'
    read(arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject']): number
  } & Omit<
    AllJavaClasses['java.nio.channels.Channel']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_nio_channels_Channel = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.channels.Channel'
    isOpen(): boolean
    close(): void
  } & Omit<AllJavaClasses['java.io.Closeable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_channels_WritableByteChannel = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.channels.WritableByteChannel'
    write(arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject']): number
  } & Omit<
    AllJavaClasses['java.nio.channels.Channel']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_nio_file_DirectoryStream = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.nio.file.DirectoryStream'
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
  } & Omit<
    AllJavaClasses['java.io.Closeable']['instanceObject'],
    '__javaClass'
  >) &
    Omit<AllJavaClasses['java.lang.Iterable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_file_DirectoryStream$Filter = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.file.DirectoryStream$Filter'
    accept(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
  }
}
type AllJavaClass_java_nio_file_FileStore = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.file.FileStore'
    name(): string
    type(): string
    isReadOnly(): boolean
    getTotalSpace(): number
    getUsableSpace(): number
    getAttribute(
      arg0: string,
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getUnallocatedSpace(): number
    getBlockSize(): number
    supportsFileAttributeView(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): boolean
    supportsFileAttributeView(arg0: string): boolean
    getFileStoreAttributeView(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.nio.file.attribute.FileStoreAttributeView']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_file_attribute_FileStoreAttributeView = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.file.attribute.FileStoreAttributeView'
  } & Omit<
    AllJavaClasses['java.nio.file.attribute.AttributeView']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_nio_file_attribute_AttributeView = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.file.attribute.AttributeView'
    name(): string
  }
}
type AllJavaClass_java_nio_file_attribute_FileAttributeView = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.file.attribute.FileAttributeView'
  } & Omit<
    AllJavaClasses['java.nio.file.attribute.AttributeView']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_nio_file_attribute_BasicFileAttributes = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.file.attribute.BasicFileAttributes'
    size(): number
    isDirectory(): boolean
    isRegularFile(): boolean
    isSymbolicLink(): boolean
    lastModifiedTime(): AllJavaClasses['java.nio.file.attribute.FileTime']['instanceObject']
    lastAccessTime(): AllJavaClasses['java.nio.file.attribute.FileTime']['instanceObject']
    creationTime(): AllJavaClasses['java.nio.file.attribute.FileTime']['instanceObject']
    isOther(): boolean
    fileKey(): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_java_nio_file_attribute_FileTime = {
  staticObject: {
    from(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
    ): AllJavaClasses['java.nio.file.attribute.FileTime']['instanceObject']
    from(
      arg0: number,
      arg1: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): AllJavaClasses['java.nio.file.attribute.FileTime']['instanceObject']
    fromMillis(
      arg0: number,
    ): AllJavaClasses['java.nio.file.attribute.FileTime']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.nio.file.attribute.FileTime'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.nio.file.attribute.FileTime']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    to(
      arg0: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): number
    toMillis(): number
    toInstant(): AllJavaClasses['java.time.Instant']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_Instant = {
  staticObject: {
    EPOCH: AllJavaClasses['java.time.Instant']['instanceObject']
    MIN: AllJavaClasses['java.time.Instant']['instanceObject']
    MAX: AllJavaClasses['java.time.Instant']['instanceObject']
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    now(): AllJavaClasses['java.time.Instant']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.Clock']['instanceObject'],
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    ofEpochSecond(
      arg0: number,
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    ofEpochSecond(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    ofEpochMilli(
      arg0: number,
    ): AllJavaClasses['java.time.Instant']['instanceObject']
  }
  instanceObject: (((({
    __javaClass: 'java.time.Instant'
    get(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    getLong(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    getEpochSecond(): number
    getNano(): number
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    toEpochMilli(): number
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    until(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
    plusNanos(
      arg0: number,
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    plusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    plusMillis(
      arg0: number,
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    minusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    minusMillis(
      arg0: number,
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    minusNanos(
      arg0: number,
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    truncatedTo(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    adjustInto(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    atOffset(
      arg0: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    atZone(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    isAfter(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
    ): boolean
    isBefore(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
    ): boolean
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_Clock = {
  staticObject: {
    offset(
      arg0: AllJavaClasses['java.time.Clock']['instanceObject'],
      arg1: AllJavaClasses['java.time.Duration']['instanceObject'],
    ): AllJavaClasses['java.time.Clock']['instanceObject']
    system(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.Clock']['instanceObject']
    fixed(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.Clock']['instanceObject']
    systemUTC(): AllJavaClasses['java.time.Clock']['instanceObject']
    systemDefaultZone(): AllJavaClasses['java.time.Clock']['instanceObject']
    tickMillis(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.Clock']['instanceObject']
    tickSeconds(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.Clock']['instanceObject']
    tickMinutes(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.Clock']['instanceObject']
    tick(
      arg0: AllJavaClasses['java.time.Clock']['instanceObject'],
      arg1: AllJavaClasses['java.time.Duration']['instanceObject'],
    ): AllJavaClasses['java.time.Clock']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.time.Clock'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    hashCode(): number
    millis(): number
    instant(): AllJavaClasses['java.time.Instant']['instanceObject']
    getZone(): AllJavaClasses['java.time.ZoneId']['instanceObject']
    withZone(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.Clock']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.time.InstantSource']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_ZoneId = {
  staticObject: {
    SHORT_IDS: AllJavaClasses['java.util.Map']['instanceObject']
    of(
      arg0: string,
      arg1: AllJavaClasses['java.util.Map']['instanceObject'],
    ): AllJavaClasses['java.time.ZoneId']['instanceObject']
    of(arg0: string): AllJavaClasses['java.time.ZoneId']['instanceObject']
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.ZoneId']['instanceObject']
    systemDefault(): AllJavaClasses['java.time.ZoneId']['instanceObject']
    getAvailableZoneIds(): AllJavaClasses['java.util.Set']['instanceObject']
    ofOffset(
      arg0: string,
      arg1: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.ZoneId']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.time.ZoneId'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getId(): string
    normalized(): AllJavaClasses['java.time.ZoneId']['instanceObject']
    getDisplayName(
      arg0: AllJavaClasses['java.time.format.TextStyle']['instanceObject'],
      arg1: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    getRules(): AllJavaClasses['java.time.zone.ZoneRules']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_format_TextStyle = {
  staticObject: {
    FULL: AllJavaClasses['java.time.format.TextStyle']['instanceObject']
    FULL_STANDALONE: AllJavaClasses['java.time.format.TextStyle']['instanceObject']
    SHORT: AllJavaClasses['java.time.format.TextStyle']['instanceObject']
    SHORT_STANDALONE: AllJavaClasses['java.time.format.TextStyle']['instanceObject']
    NARROW: AllJavaClasses['java.time.format.TextStyle']['instanceObject']
    NARROW_STANDALONE: AllJavaClasses['java.time.format.TextStyle']['instanceObject']
    values(): AllJavaClasses['java.time.format.TextStyle']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['java.time.format.TextStyle']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.time.format.TextStyle'
    isStandalone(): boolean
    asStandalone(): AllJavaClasses['java.time.format.TextStyle']['instanceObject']
    asNormal(): AllJavaClasses['java.time.format.TextStyle']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_time_zone_ZoneRules = {
  staticObject: {
    of(
      arg0: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
      arg2: AllJavaClasses['java.util.List']['instanceObject'],
      arg3: AllJavaClasses['java.util.List']['instanceObject'],
      arg4: AllJavaClasses['java.util.List']['instanceObject'],
    ): AllJavaClasses['java.time.zone.ZoneRules']['instanceObject']
    of(
      arg0: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.zone.ZoneRules']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.time.zone.ZoneRules'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getOffset(
      arg0: AllJavaClasses['java.time.LocalDateTime']['instanceObject'],
    ): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    getOffset(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
    ): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    getTransition(
      arg0: AllJavaClasses['java.time.LocalDateTime']['instanceObject'],
    ): AllJavaClasses['java.time.zone.ZoneOffsetTransition']['instanceObject']
    isFixedOffset(): boolean
    getStandardOffset(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
    ): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    getValidOffsets(
      arg0: AllJavaClasses['java.time.LocalDateTime']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    getDaylightSavings(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    isDaylightSavings(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
    ): boolean
    isValidOffset(
      arg0: AllJavaClasses['java.time.LocalDateTime']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): boolean
    nextTransition(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
    ): AllJavaClasses['java.time.zone.ZoneOffsetTransition']['instanceObject']
    previousTransition(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
    ): AllJavaClasses['java.time.zone.ZoneOffsetTransition']['instanceObject']
    getTransitions(): AllJavaClasses['java.util.List']['instanceObject']
    getTransitionRules(): AllJavaClasses['java.util.List']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_ZoneOffset = {
  staticObject: {
    UTC: AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    MIN: AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    MAX: AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    of(arg0: string): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    ofHours(
      arg0: number,
    ): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    ofHoursMinutesSeconds(
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    ofTotalSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    ofHoursMinutes(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
  }
  instanceObject: (((({
    __javaClass: 'java.time.ZoneOffset'
    get(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    getLong(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    getId(): string
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    normalized(): AllJavaClasses['java.time.ZoneId']['instanceObject']
    adjustInto(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    getRules(): AllJavaClasses['java.time.zone.ZoneRules']['instanceObject']
    getTotalSeconds(): number
  } & Omit<
    AllJavaClasses['java.time.ZoneId']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_LocalDateTime = {
  staticObject: {
    MIN: AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    MAX: AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    of(
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
      arg4: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    of(
      arg0: number,
      arg1: AllJavaClasses['java.time.Month']['instanceObject'],
      arg2: number,
      arg3: number,
      arg4: number,
      arg5: number,
      arg6: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    of(
      arg0: number,
      arg1: AllJavaClasses['java.time.Month']['instanceObject'],
      arg2: number,
      arg3: number,
      arg4: number,
      arg5: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    of(
      arg0: number,
      arg1: AllJavaClasses['java.time.Month']['instanceObject'],
      arg2: number,
      arg3: number,
      arg4: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    of(
      arg0: AllJavaClasses['java.time.LocalDate']['instanceObject'],
      arg1: AllJavaClasses['java.time.LocalTime']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    of(
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
      arg4: number,
      arg5: number,
      arg6: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    of(
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
      arg4: number,
      arg5: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    now(): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.Clock']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    ofEpochSecond(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    ofInstant(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
  }
  instanceObject: (((({
    __javaClass: 'java.time.LocalDateTime'
    get(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    getLong(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    format(
      arg0: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
    ): string
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    getNano(): number
    getYear(): number
    getMonthValue(): number
    getDayOfMonth(): number
    getHour(): number
    getMinute(): number
    getSecond(): number
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    until(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
    plusNanos(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    plusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    plusDays(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    plusHours(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    plusMinutes(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    minusDays(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    minusHours(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    minusMinutes(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    minusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    minusNanos(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    truncatedTo(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    adjustInto(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    atOffset(
      arg0: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    atZone(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    atZone(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    isAfter(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject'],
    ): boolean
    isBefore(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject'],
    ): boolean
    getMonth(): AllJavaClasses['java.time.Month']['instanceObject']
    getDayOfWeek(): AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    getDayOfYear(): number
    withDayOfMonth(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    withDayOfYear(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    plusWeeks(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    withMonth(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    plusMonths(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    withYear(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    plusYears(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    minusMonths(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    toLocalTime(): AllJavaClasses['java.time.LocalTime']['instanceObject']
    isEqual(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject'],
    ): boolean
    minusYears(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    minusWeeks(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    withHour(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    withMinute(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    withSecond(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    withNano(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    toLocalDate(): AllJavaClasses['java.time.LocalDate']['instanceObject']
    toLocalDate(): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_chrono_ChronoLocalDateTime = {
  staticObject: {
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    timeLineOrder(): AllJavaClasses['java.util.Comparator']['instanceObject']
  }
  instanceObject: (({
    __javaClass: 'java.time.chrono.ChronoLocalDateTime'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject'],
    ): number
    format(
      arg0: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
    ): string
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    toInstant(
      arg0: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    adjustInto(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    atZone(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    isAfter(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject'],
    ): boolean
    isBefore(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject'],
    ): boolean
    toLocalTime(): AllJavaClasses['java.time.LocalTime']['instanceObject']
    isEqual(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject'],
    ): boolean
    getChronology(): AllJavaClasses['java.time.chrono.Chronology']['instanceObject']
    toEpochSecond(
      arg0: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): number
    toLocalDate(): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
  } & Omit<
    AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_format_DateTimeFormatter = {
  staticObject: {
    ISO_LOCAL_DATE: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    ISO_OFFSET_DATE: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    ISO_DATE: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    ISO_LOCAL_TIME: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    ISO_OFFSET_TIME: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    ISO_TIME: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    ISO_LOCAL_DATE_TIME: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    ISO_OFFSET_DATE_TIME: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    ISO_ZONED_DATE_TIME: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    ISO_DATE_TIME: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    ISO_ORDINAL_DATE: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    ISO_WEEK_DATE: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    ISO_INSTANT: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    BASIC_ISO_DATE: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    RFC_1123_DATE_TIME: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    ofPattern(
      arg0: string,
    ): AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    ofPattern(
      arg0: string,
      arg1: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    ofLocalizedDate(
      arg0: AllJavaClasses['java.time.format.FormatStyle']['instanceObject'],
    ): AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    ofLocalizedTime(
      arg0: AllJavaClasses['java.time.format.FormatStyle']['instanceObject'],
    ): AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    ofLocalizedDateTime(
      arg0: AllJavaClasses['java.time.format.FormatStyle']['instanceObject'],
      arg1: AllJavaClasses['java.time.format.FormatStyle']['instanceObject'],
    ): AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    ofLocalizedDateTime(
      arg0: AllJavaClasses['java.time.format.FormatStyle']['instanceObject'],
    ): AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    ofLocalizedPattern(
      arg0: string,
    ): AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    parsedExcessDays(): AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject']
    parsedLeapSecond(): AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.time.format.DateTimeFormatter'
    toString(): string
    format(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): string
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.text.ParsePosition']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject']
    getLocale(): AllJavaClasses['java.util.Locale']['instanceObject']
    getZone(): AllJavaClasses['java.time.ZoneId']['instanceObject']
    withZone(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    getChronology(): AllJavaClasses['java.time.chrono.Chronology']['instanceObject']
    formatTo(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Appendable']['instanceObject'],
    ): void
    withLocale(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    localizedBy(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    getDecimalStyle(): AllJavaClasses['java.time.format.DecimalStyle']['instanceObject']
    withDecimalStyle(
      arg0: AllJavaClasses['java.time.format.DecimalStyle']['instanceObject'],
    ): AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    withChronology(
      arg0: AllJavaClasses['java.time.chrono.Chronology']['instanceObject'],
    ): AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    getResolverStyle(): AllJavaClasses['java.time.format.ResolverStyle']['instanceObject']
    withResolverStyle(
      arg0: AllJavaClasses['java.time.format.ResolverStyle']['instanceObject'],
    ): AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    getResolverFields(): AllJavaClasses['java.util.Set']['instanceObject']
    withResolverFields(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'][],
    ): AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    withResolverFields(
      arg0: AllJavaClasses['java.util.Set']['instanceObject'],
    ): AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    parseBest(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'][],
    ): AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject']
    parseUnresolved(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.text.ParsePosition']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject']
    toFormat(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.text.Format']['instanceObject']
    toFormat(): AllJavaClasses['java.text.Format']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_text_ParsePosition = {
  staticObject: {
    new (
      arg0: number,
    ): AllJavaClasses['java.text.ParsePosition']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.text.ParsePosition'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getIndex(): number
    getErrorIndex(): number
    setErrorIndex(arg0: number): void
    setIndex(arg0: number): void
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_time_chrono_Chronology = {
  staticObject: {
    of(
      arg0: string,
    ): AllJavaClasses['java.time.chrono.Chronology']['instanceObject']
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.Chronology']['instanceObject']
    ofLocale(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.Chronology']['instanceObject']
    getAvailableChronologies(): AllJavaClasses['java.util.Set']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.time.chrono.Chronology'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.time.chrono.Chronology']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    getId(): string
    range(
      arg0: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    getDisplayName(
      arg0: AllJavaClasses['java.time.format.TextStyle']['instanceObject'],
      arg1: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    date(
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    date(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    date(
      arg0: AllJavaClasses['java.time.chrono.Era']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    eras(): AllJavaClasses['java.util.List']['instanceObject']
    epochSecond(
      arg0: AllJavaClasses['java.time.chrono.Era']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: number,
      arg4: number,
      arg5: number,
      arg6: number,
      arg7: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): number
    epochSecond(
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
      arg4: number,
      arg5: number,
      arg6: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): number
    isLeapYear(arg0: number): boolean
    eraOf(
      arg0: number,
    ): AllJavaClasses['java.time.chrono.Era']['instanceObject']
    localDateTime(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    getCalendarType(): string
    dateEpochDay(
      arg0: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    dateNow(): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    dateNow(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    dateNow(
      arg0: AllJavaClasses['java.time.Clock']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    prolepticYear(
      arg0: AllJavaClasses['java.time.chrono.Era']['instanceObject'],
      arg1: number,
    ): number
    dateYearDay(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    dateYearDay(
      arg0: AllJavaClasses['java.time.chrono.Era']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    resolveDate(
      arg0: AllJavaClasses['java.util.Map']['instanceObject'],
      arg1: AllJavaClasses['java.time.format.ResolverStyle']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    zonedDateTime(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    zonedDateTime(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    period(
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    isIsoBased(): boolean
  } & Omit<
    AllJavaClasses['java.lang.Comparable']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_time_temporal_ChronoField = {
  staticObject: {
    NANO_OF_SECOND: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    NANO_OF_DAY: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    MICRO_OF_SECOND: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    MICRO_OF_DAY: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    MILLI_OF_SECOND: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    MILLI_OF_DAY: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    SECOND_OF_MINUTE: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    SECOND_OF_DAY: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    MINUTE_OF_HOUR: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    MINUTE_OF_DAY: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    HOUR_OF_AMPM: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    CLOCK_HOUR_OF_AMPM: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    HOUR_OF_DAY: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    CLOCK_HOUR_OF_DAY: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    AMPM_OF_DAY: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    DAY_OF_WEEK: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    ALIGNED_DAY_OF_WEEK_IN_MONTH: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    ALIGNED_DAY_OF_WEEK_IN_YEAR: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    DAY_OF_MONTH: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    DAY_OF_YEAR: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    EPOCH_DAY: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    ALIGNED_WEEK_OF_MONTH: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    ALIGNED_WEEK_OF_YEAR: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    MONTH_OF_YEAR: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    PROLEPTIC_MONTH: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    YEAR_OF_ERA: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    YEAR: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    ERA: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    INSTANT_SECONDS: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    OFFSET_SECONDS: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
    values(): AllJavaClasses['java.time.temporal.ChronoField']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['java.time.temporal.ChronoField']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.time.temporal.ChronoField'
    toString(): string
    range(): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    getDisplayName(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    checkValidIntValue(arg0: number): number
    isSupportedBy(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): boolean
    isTimeBased(): boolean
    getFrom(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): number
    adjustInto(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    checkValidValue(arg0: number): number
    rangeRefinedBy(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    isDateBased(): boolean
    getBaseUnit(): AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject']
    getRangeUnit(): AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>) &
    Omit<
      AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_chrono_ChronoLocalDate = {
  staticObject: {
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    timeLineOrder(): AllJavaClasses['java.util.Comparator']['instanceObject']
  }
  instanceObject: (({
    __javaClass: 'java.time.chrono.ChronoLocalDate'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    format(
      arg0: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
    ): string
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    until(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
    until(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    adjustInto(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    isAfter(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
    ): boolean
    isBefore(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
    ): boolean
    isLeapYear(): boolean
    lengthOfMonth(): number
    lengthOfYear(): number
    toEpochDay(): number
    atTime(
      arg0: AllJavaClasses['java.time.LocalTime']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    isEqual(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
    ): boolean
    getEra(): AllJavaClasses['java.time.chrono.Era']['instanceObject']
    getChronology(): AllJavaClasses['java.time.chrono.Chronology']['instanceObject']
  } & Omit<
    AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_chrono_ChronoPeriod = {
  staticObject: {
    between(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
      arg1: AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.time.chrono.ChronoPeriod'
    get(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    normalized(): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    isZero(): boolean
    isNegative(): boolean
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    getUnits(): AllJavaClasses['java.util.List']['instanceObject']
    negated(): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    multipliedBy(
      arg0: number,
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    addTo(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    subtractFrom(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    getChronology(): AllJavaClasses['java.time.chrono.Chronology']['instanceObject']
  } & Omit<
    AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_time_LocalTime = {
  staticObject: {
    MIN: AllJavaClasses['java.time.LocalTime']['instanceObject']
    MAX: AllJavaClasses['java.time.LocalTime']['instanceObject']
    MIDNIGHT: AllJavaClasses['java.time.LocalTime']['instanceObject']
    NOON: AllJavaClasses['java.time.LocalTime']['instanceObject']
    of(
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    of(
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    of(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    now(): AllJavaClasses['java.time.LocalTime']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.Clock']['instanceObject'],
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    ofInstant(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    ofNanoOfDay(
      arg0: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    ofSecondOfDay(
      arg0: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
  }
  instanceObject: (((({
    __javaClass: 'java.time.LocalTime'
    get(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.time.LocalTime']['instanceObject'],
    ): number
    getLong(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    format(
      arg0: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
    ): string
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    getNano(): number
    getHour(): number
    getMinute(): number
    getSecond(): number
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    until(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
    plusNanos(
      arg0: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    plusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    plusHours(
      arg0: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    plusMinutes(
      arg0: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    minusHours(
      arg0: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    minusMinutes(
      arg0: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    minusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    minusNanos(
      arg0: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    truncatedTo(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    adjustInto(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    atOffset(
      arg0: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    isAfter(
      arg0: AllJavaClasses['java.time.LocalTime']['instanceObject'],
    ): boolean
    isBefore(
      arg0: AllJavaClasses['java.time.LocalTime']['instanceObject'],
    ): boolean
    toSecondOfDay(): number
    toEpochSecond(
      arg0: AllJavaClasses['java.time.LocalDate']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): number
    withHour(
      arg0: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    withMinute(
      arg0: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    withSecond(
      arg0: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    withNano(
      arg0: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    toNanoOfDay(): number
    atDate(
      arg0: AllJavaClasses['java.time.LocalDate']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_OffsetTime = {
  staticObject: {
    MIN: AllJavaClasses['java.time.OffsetTime']['instanceObject']
    MAX: AllJavaClasses['java.time.OffsetTime']['instanceObject']
    of(
      arg0: AllJavaClasses['java.time.LocalTime']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    of(
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
      arg4: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    now(): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.Clock']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    ofInstant(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
  }
  instanceObject: (((({
    __javaClass: 'java.time.OffsetTime'
    get(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.time.OffsetTime']['instanceObject'],
    ): number
    getLong(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    format(
      arg0: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
    ): string
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getOffset(): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    getNano(): number
    getHour(): number
    getMinute(): number
    getSecond(): number
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    until(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
    plusNanos(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    plusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    plusHours(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    plusMinutes(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    minusHours(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    minusMinutes(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    minusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    minusNanos(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    truncatedTo(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    adjustInto(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    isAfter(
      arg0: AllJavaClasses['java.time.OffsetTime']['instanceObject'],
    ): boolean
    isBefore(
      arg0: AllJavaClasses['java.time.OffsetTime']['instanceObject'],
    ): boolean
    toLocalTime(): AllJavaClasses['java.time.LocalTime']['instanceObject']
    isEqual(
      arg0: AllJavaClasses['java.time.OffsetTime']['instanceObject'],
    ): boolean
    toEpochSecond(
      arg0: AllJavaClasses['java.time.LocalDate']['instanceObject'],
    ): number
    withHour(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    withMinute(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    withSecond(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    withNano(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    atDate(
      arg0: AllJavaClasses['java.time.LocalDate']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    withOffsetSameInstant(
      arg0: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    withOffsetSameLocal(
      arg0: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_LocalDate = {
  staticObject: {
    MIN: AllJavaClasses['java.time.LocalDate']['instanceObject']
    MAX: AllJavaClasses['java.time.LocalDate']['instanceObject']
    EPOCH: AllJavaClasses['java.time.LocalDate']['instanceObject']
    of(
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    of(
      arg0: number,
      arg1: AllJavaClasses['java.time.Month']['instanceObject'],
      arg2: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    now(): AllJavaClasses['java.time.LocalDate']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.Clock']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    ofInstant(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    ofEpochDay(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    ofYearDay(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
  }
  instanceObject: (((({
    __javaClass: 'java.time.LocalDate'
    get(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
    ): number
    getLong(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    format(
      arg0: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
    ): string
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    getYear(): number
    getMonthValue(): number
    getDayOfMonth(): number
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    until(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
    ): AllJavaClasses['java.time.Period']['instanceObject']
    until(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
    until(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    plusDays(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    minusDays(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    adjustInto(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    isAfter(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
    ): boolean
    isBefore(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
    ): boolean
    isLeapYear(): boolean
    lengthOfMonth(): number
    lengthOfYear(): number
    getMonth(): AllJavaClasses['java.time.Month']['instanceObject']
    toEpochDay(): number
    getDayOfWeek(): AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    getDayOfYear(): number
    withDayOfMonth(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    withDayOfYear(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    plusWeeks(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    withMonth(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    plusMonths(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    withYear(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    plusYears(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    minusMonths(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    atTime(
      arg0: AllJavaClasses['java.time.LocalTime']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    atTime(
      arg0: AllJavaClasses['java.time.LocalTime']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    atTime(
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    atTime(
      arg0: AllJavaClasses['java.time.OffsetTime']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    atTime(
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    atTime(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    isEqual(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
    ): boolean
    getEra(): AllJavaClasses['java.time.chrono.Era']['instanceObject']
    getEra(): AllJavaClasses['java.time.chrono.IsoEra']['instanceObject']
    getChronology(): AllJavaClasses['java.time.chrono.Chronology']['instanceObject']
    getChronology(): AllJavaClasses['java.time.chrono.IsoChronology']['instanceObject']
    minusYears(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    minusWeeks(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    datesUntil(
      arg0: AllJavaClasses['java.time.LocalDate']['instanceObject'],
      arg1: AllJavaClasses['java.time.Period']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    datesUntil(
      arg0: AllJavaClasses['java.time.LocalDate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    atStartOfDay(): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    atStartOfDay(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    toEpochSecond(
      arg0: AllJavaClasses['java.time.LocalTime']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): number
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_Month = {
  staticObject: {
    JANUARY: AllJavaClasses['java.time.Month']['instanceObject']
    FEBRUARY: AllJavaClasses['java.time.Month']['instanceObject']
    MARCH: AllJavaClasses['java.time.Month']['instanceObject']
    APRIL: AllJavaClasses['java.time.Month']['instanceObject']
    MAY: AllJavaClasses['java.time.Month']['instanceObject']
    JUNE: AllJavaClasses['java.time.Month']['instanceObject']
    JULY: AllJavaClasses['java.time.Month']['instanceObject']
    AUGUST: AllJavaClasses['java.time.Month']['instanceObject']
    SEPTEMBER: AllJavaClasses['java.time.Month']['instanceObject']
    OCTOBER: AllJavaClasses['java.time.Month']['instanceObject']
    NOVEMBER: AllJavaClasses['java.time.Month']['instanceObject']
    DECEMBER: AllJavaClasses['java.time.Month']['instanceObject']
    values(): AllJavaClasses['java.time.Month']['instanceObject'][]
    valueOf(arg0: string): AllJavaClasses['java.time.Month']['instanceObject']
    of(arg0: number): AllJavaClasses['java.time.Month']['instanceObject']
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.Month']['instanceObject']
  }
  instanceObject: (({
    __javaClass: 'java.time.Month'
    get(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    length(arg0: boolean): number
    getLong(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    getValue(): number
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    minLength(): number
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    getDisplayName(
      arg0: AllJavaClasses['java.time.format.TextStyle']['instanceObject'],
      arg1: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    minus(arg0: number): AllJavaClasses['java.time.Month']['instanceObject']
    plus(arg0: number): AllJavaClasses['java.time.Month']['instanceObject']
    adjustInto(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    firstDayOfYear(arg0: boolean): number
    maxLength(): number
    firstMonthOfQuarter(): AllJavaClasses['java.time.Month']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>) &
    Omit<
      AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_Period = {
  staticObject: {
    ZERO: AllJavaClasses['java.time.Period']['instanceObject']
    of(
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.Period']['instanceObject']
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.Period']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.time.Period']['instanceObject']
    between(
      arg0: AllJavaClasses['java.time.LocalDate']['instanceObject'],
      arg1: AllJavaClasses['java.time.LocalDate']['instanceObject'],
    ): AllJavaClasses['java.time.Period']['instanceObject']
    ofDays(arg0: number): AllJavaClasses['java.time.Period']['instanceObject']
    ofYears(arg0: number): AllJavaClasses['java.time.Period']['instanceObject']
    ofMonths(arg0: number): AllJavaClasses['java.time.Period']['instanceObject']
    ofWeeks(arg0: number): AllJavaClasses['java.time.Period']['instanceObject']
  }
  instanceObject: (({
    __javaClass: 'java.time.Period'
    get(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    normalized(): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    normalized(): AllJavaClasses['java.time.Period']['instanceObject']
    isZero(): boolean
    getMonths(): number
    isNegative(): boolean
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.Period']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.Period']['instanceObject']
    getUnits(): AllJavaClasses['java.util.List']['instanceObject']
    negated(): AllJavaClasses['java.time.Period']['instanceObject']
    negated(): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    multipliedBy(
      arg0: number,
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    multipliedBy(
      arg0: number,
    ): AllJavaClasses['java.time.Period']['instanceObject']
    plusDays(arg0: number): AllJavaClasses['java.time.Period']['instanceObject']
    minusDays(
      arg0: number,
    ): AllJavaClasses['java.time.Period']['instanceObject']
    addTo(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    subtractFrom(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plusMonths(
      arg0: number,
    ): AllJavaClasses['java.time.Period']['instanceObject']
    toTotalMonths(): number
    getDays(): number
    plusYears(
      arg0: number,
    ): AllJavaClasses['java.time.Period']['instanceObject']
    minusMonths(
      arg0: number,
    ): AllJavaClasses['java.time.Period']['instanceObject']
    getChronology(): AllJavaClasses['java.time.chrono.Chronology']['instanceObject']
    getChronology(): AllJavaClasses['java.time.chrono.IsoChronology']['instanceObject']
    minusYears(
      arg0: number,
    ): AllJavaClasses['java.time.Period']['instanceObject']
    getYears(): number
    withYears(
      arg0: number,
    ): AllJavaClasses['java.time.Period']['instanceObject']
    withMonths(
      arg0: number,
    ): AllJavaClasses['java.time.Period']['instanceObject']
    withDays(arg0: number): AllJavaClasses['java.time.Period']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_chrono_IsoChronology = {
  staticObject: {
    INSTANCE: AllJavaClasses['java.time.chrono.IsoChronology']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.time.chrono.IsoChronology'
    getId(): string
    range(
      arg0: AllJavaClasses['java.time.temporal.ChronoField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    date(
      arg0: AllJavaClasses['java.time.chrono.Era']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    date(
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    date(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    date(
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    date(
      arg0: AllJavaClasses['java.time.chrono.Era']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    date(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    eras(): AllJavaClasses['java.util.List']['instanceObject']
    epochSecond(
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
      arg4: number,
      arg5: number,
      arg6: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): number
    isLeapYear(arg0: number): boolean
    eraOf(
      arg0: number,
    ): AllJavaClasses['java.time.chrono.IsoEra']['instanceObject']
    eraOf(
      arg0: number,
    ): AllJavaClasses['java.time.chrono.Era']['instanceObject']
    localDateTime(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    localDateTime(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    getCalendarType(): string
    dateEpochDay(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    dateEpochDay(
      arg0: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    dateNow(
      arg0: AllJavaClasses['java.time.Clock']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    dateNow(): AllJavaClasses['java.time.LocalDate']['instanceObject']
    dateNow(
      arg0: AllJavaClasses['java.time.Clock']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    dateNow(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    dateNow(): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    dateNow(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    prolepticYear(
      arg0: AllJavaClasses['java.time.chrono.Era']['instanceObject'],
      arg1: number,
    ): number
    dateYearDay(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    dateYearDay(
      arg0: AllJavaClasses['java.time.chrono.Era']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    dateYearDay(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    dateYearDay(
      arg0: AllJavaClasses['java.time.chrono.Era']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    resolveDate(
      arg0: AllJavaClasses['java.util.Map']['instanceObject'],
      arg1: AllJavaClasses['java.time.format.ResolverStyle']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    resolveDate(
      arg0: AllJavaClasses['java.util.Map']['instanceObject'],
      arg1: AllJavaClasses['java.time.format.ResolverStyle']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    zonedDateTime(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    zonedDateTime(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    zonedDateTime(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    zonedDateTime(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    period(
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    period(
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.Period']['instanceObject']
    isIsoBased(): boolean
  } & Omit<
    AllJavaClasses['java.time.chrono.AbstractChronology']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_chrono_Era = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.time.chrono.Era'
    get(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    getLong(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    getValue(): number
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    getDisplayName(
      arg0: AllJavaClasses['java.time.format.TextStyle']['instanceObject'],
      arg1: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    adjustInto(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
  } & Omit<
    AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_chrono_IsoEra = {
  staticObject: {
    BCE: AllJavaClasses['java.time.chrono.IsoEra']['instanceObject']
    CE: AllJavaClasses['java.time.chrono.IsoEra']['instanceObject']
    values(): AllJavaClasses['java.time.chrono.IsoEra']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['java.time.chrono.IsoEra']['instanceObject']
    of(
      arg0: number,
    ): AllJavaClasses['java.time.chrono.IsoEra']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.time.chrono.IsoEra'
    getValue(): number
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>) &
    Omit<
      AllJavaClasses['java.time.chrono.Era']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_ZonedDateTime = {
  staticObject: {
    of(
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
      arg4: number,
      arg5: number,
      arg6: number,
      arg7: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    of(
      arg0: AllJavaClasses['java.time.LocalDate']['instanceObject'],
      arg1: AllJavaClasses['java.time.LocalTime']['instanceObject'],
      arg2: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    of(
      arg0: AllJavaClasses['java.time.LocalDateTime']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    now(): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.Clock']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    ofInstant(
      arg0: AllJavaClasses['java.time.LocalDateTime']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
      arg2: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    ofInstant(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    ofLocal(
      arg0: AllJavaClasses['java.time.LocalDateTime']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneId']['instanceObject'],
      arg2: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    ofStrict(
      arg0: AllJavaClasses['java.time.LocalDateTime']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
      arg2: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
  }
  instanceObject: ((({
    __javaClass: 'java.time.ZonedDateTime'
    get(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getLong(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    format(
      arg0: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
    ): string
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getOffset(): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    getNano(): number
    getYear(): number
    getMonthValue(): number
    getDayOfMonth(): number
    getHour(): number
    getMinute(): number
    getSecond(): number
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    getZone(): AllJavaClasses['java.time.ZoneId']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    until(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
    plusNanos(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    plusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    plusDays(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    plusHours(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    plusMinutes(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    minusDays(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    minusHours(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    minusMinutes(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    minusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    minusNanos(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    truncatedTo(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    getMonth(): AllJavaClasses['java.time.Month']['instanceObject']
    getDayOfWeek(): AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    getDayOfYear(): number
    withDayOfMonth(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    withDayOfYear(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    plusWeeks(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    withMonth(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    plusMonths(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    withYear(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    plusYears(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    minusMonths(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    toLocalTime(): AllJavaClasses['java.time.LocalTime']['instanceObject']
    minusYears(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    minusWeeks(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    toLocalDateTime(): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    toLocalDateTime(): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    withHour(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    withMinute(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    withSecond(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    withNano(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    toLocalDate(): AllJavaClasses['java.time.LocalDate']['instanceObject']
    toLocalDate(): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    withZoneSameInstant(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    withZoneSameInstant(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    toOffsetDateTime(): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    withZoneSameLocal(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    withZoneSameLocal(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    withLaterOffsetAtOverlap(): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    withLaterOffsetAtOverlap(): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    withEarlierOffsetAtOverlap(): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    withEarlierOffsetAtOverlap(): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    withFixedOffsetZone(): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_chrono_ChronoZonedDateTime = {
  staticObject: {
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    timeLineOrder(): AllJavaClasses['java.util.Comparator']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.time.chrono.ChronoZonedDateTime'
    get(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    getLong(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    format(
      arg0: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
    ): string
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getOffset(): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    toInstant(): AllJavaClasses['java.time.Instant']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    getZone(): AllJavaClasses['java.time.ZoneId']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    isAfter(
      arg0: AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject'],
    ): boolean
    isBefore(
      arg0: AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject'],
    ): boolean
    toLocalTime(): AllJavaClasses['java.time.LocalTime']['instanceObject']
    isEqual(
      arg0: AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject'],
    ): boolean
    getChronology(): AllJavaClasses['java.time.chrono.Chronology']['instanceObject']
    toEpochSecond(): number
    toLocalDateTime(): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    toLocalDate(): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    withZoneSameInstant(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    withZoneSameLocal(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    withLaterOffsetAtOverlap(): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    withEarlierOffsetAtOverlap(): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
  } & Omit<
    AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_DayOfWeek = {
  staticObject: {
    MONDAY: AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    TUESDAY: AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    WEDNESDAY: AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    THURSDAY: AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    FRIDAY: AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    SATURDAY: AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    SUNDAY: AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    values(): AllJavaClasses['java.time.DayOfWeek']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    of(arg0: number): AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.DayOfWeek']['instanceObject']
  }
  instanceObject: (({
    __javaClass: 'java.time.DayOfWeek'
    get(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    getLong(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    getValue(): number
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    getDisplayName(
      arg0: AllJavaClasses['java.time.format.TextStyle']['instanceObject'],
      arg1: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    minus(arg0: number): AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    plus(arg0: number): AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    adjustInto(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>) &
    Omit<
      AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_OffsetDateTime = {
  staticObject: {
    MIN: AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    MAX: AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    of(
      arg0: AllJavaClasses['java.time.LocalDateTime']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    of(
      arg0: AllJavaClasses['java.time.LocalDate']['instanceObject'],
      arg1: AllJavaClasses['java.time.LocalTime']['instanceObject'],
      arg2: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    of(
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
      arg4: number,
      arg5: number,
      arg6: number,
      arg7: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.Clock']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    now(): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    ofInstant(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    timeLineOrder(): AllJavaClasses['java.util.Comparator']['instanceObject']
  }
  instanceObject: (((({
    __javaClass: 'java.time.OffsetDateTime'
    get(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.time.OffsetDateTime']['instanceObject'],
    ): number
    getLong(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    format(
      arg0: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
    ): string
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getOffset(): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    getNano(): number
    toInstant(): AllJavaClasses['java.time.Instant']['instanceObject']
    getYear(): number
    getMonthValue(): number
    getDayOfMonth(): number
    getHour(): number
    getMinute(): number
    getSecond(): number
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    until(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
    plusNanos(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    plusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    plusDays(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    plusHours(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    plusMinutes(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    minusDays(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    minusHours(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    minusMinutes(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    minusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    minusNanos(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    truncatedTo(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    adjustInto(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    isAfter(
      arg0: AllJavaClasses['java.time.OffsetDateTime']['instanceObject'],
    ): boolean
    isBefore(
      arg0: AllJavaClasses['java.time.OffsetDateTime']['instanceObject'],
    ): boolean
    getMonth(): AllJavaClasses['java.time.Month']['instanceObject']
    getDayOfWeek(): AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    getDayOfYear(): number
    withDayOfMonth(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    withDayOfYear(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    plusWeeks(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    withMonth(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    plusMonths(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    withYear(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    plusYears(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    minusMonths(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    toLocalTime(): AllJavaClasses['java.time.LocalTime']['instanceObject']
    isEqual(
      arg0: AllJavaClasses['java.time.OffsetDateTime']['instanceObject'],
    ): boolean
    minusYears(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    minusWeeks(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    toEpochSecond(): number
    toLocalDateTime(): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    withHour(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    withMinute(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    withSecond(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    withNano(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    toLocalDate(): AllJavaClasses['java.time.LocalDate']['instanceObject']
    toZonedDateTime(): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    withOffsetSameInstant(
      arg0: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    withOffsetSameLocal(
      arg0: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    atZoneSameInstant(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    atZoneSimilarLocal(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    toOffsetTime(): AllJavaClasses['java.time.OffsetTime']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_chrono_AbstractChronology = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.time.chrono.AbstractChronology'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.time.chrono.Chronology']['instanceObject'],
    ): number
    resolveDate(
      arg0: AllJavaClasses['java.util.Map']['instanceObject'],
      arg1: AllJavaClasses['java.time.format.ResolverStyle']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.time.chrono.Chronology']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_format_FormatStyle = {
  staticObject: {
    FULL: AllJavaClasses['java.time.format.FormatStyle']['instanceObject']
    LONG: AllJavaClasses['java.time.format.FormatStyle']['instanceObject']
    MEDIUM: AllJavaClasses['java.time.format.FormatStyle']['instanceObject']
    SHORT: AllJavaClasses['java.time.format.FormatStyle']['instanceObject']
    values(): AllJavaClasses['java.time.format.FormatStyle']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['java.time.format.FormatStyle']['instanceObject']
  }
  instanceObject: { __javaClass: 'java.time.format.FormatStyle' } & Omit<
    AllJavaClasses['java.lang.Enum']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_time_format_DecimalStyle = {
  staticObject: {
    STANDARD: AllJavaClasses['java.time.format.DecimalStyle']['instanceObject']
    of(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): AllJavaClasses['java.time.format.DecimalStyle']['instanceObject']
    getAvailableLocales(): AllJavaClasses['java.util.Set']['instanceObject']
    ofDefaultLocale(): AllJavaClasses['java.time.format.DecimalStyle']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.time.format.DecimalStyle'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getZeroDigit(): AllJavaClasses['char']['instanceObject']
    getDecimalSeparator(): AllJavaClasses['char']['instanceObject']
    getPositiveSign(): AllJavaClasses['char']['instanceObject']
    getNegativeSign(): AllJavaClasses['char']['instanceObject']
    withZeroDigit(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.time.format.DecimalStyle']['instanceObject']
    withPositiveSign(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.time.format.DecimalStyle']['instanceObject']
    withNegativeSign(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.time.format.DecimalStyle']['instanceObject']
    withDecimalSeparator(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.time.format.DecimalStyle']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_text_Format = {
  staticObject: object
  instanceObject: (({
    __javaClass: 'java.text.Format'
    clone(): AllJavaClasses['java.lang.Object']['instanceObject']
    format(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.StringBuffer']['instanceObject'],
      arg2: AllJavaClasses['java.text.FieldPosition']['instanceObject'],
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    format(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): string
    parseObject(
      arg0: string,
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    parseObject(
      arg0: string,
      arg1: AllJavaClasses['java.text.ParsePosition']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    formatToCharacterIterator(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.text.AttributedCharacterIterator']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<AllJavaClasses['java.lang.Cloneable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_lang_StringBuffer = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    new (
      arg0: string,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    new (
      arg0: number,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    new (): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
  }
  instanceObject: (((({
    __javaClass: 'java.lang.StringBuffer'
    length(): number
    toString(): string
    append(
      arg0: AllJavaClasses['char']['instanceObject'][],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: number,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    append(
      arg0: number,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    append(
      arg0: number,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'][],
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    append(
      arg0: boolean,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    append(
      arg0: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: number,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: boolean,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: string,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.StringBuffer']['instanceObject'],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: string,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.StringBuffer']['instanceObject'],
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    reverse(): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    reverse(): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    getChars(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['char']['instanceObject'][],
      arg3: number,
    ): void
    compareTo(
      arg0: AllJavaClasses['java.lang.StringBuffer']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    indexOf(arg0: string, arg1: number): number
    indexOf(arg0: string): number
    insert(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: boolean,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    insert(
      arg0: number,
      arg1: string,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'][],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'][],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'][],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'][],
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    insert(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    insert(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    insert(
      arg0: number,
      arg1: string,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    insert(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    insert(
      arg0: number,
      arg1: boolean,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    insert(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    charAt(arg0: number): AllJavaClasses['char']['instanceObject']
    codePointAt(arg0: number): number
    codePointBefore(arg0: number): number
    codePointCount(arg0: number, arg1: number): number
    offsetByCodePoints(arg0: number, arg1: number): number
    lastIndexOf(arg0: string, arg1: number): number
    lastIndexOf(arg0: string): number
    substring(arg0: number): string
    substring(arg0: number, arg1: number): string
    replace(
      arg0: number,
      arg1: number,
      arg2: string,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    replace(
      arg0: number,
      arg1: number,
      arg2: string,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    repeat(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    repeat(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    repeat(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    repeat(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    codePoints(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    subSequence(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.CharSequence']['instanceObject']
    chars(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    delete(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    delete(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    setLength(arg0: number): void
    capacity(): number
    ensureCapacity(arg0: number): void
    trimToSize(): void
    setCharAt(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'],
    ): void
    appendCodePoint(
      arg0: number,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    appendCodePoint(
      arg0: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    deleteCharAt(
      arg0: number,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    deleteCharAt(
      arg0: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Appendable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_AbstractStringBuilder = {
  staticObject: object
  instanceObject: (({
    __javaClass: 'java.lang.AbstractStringBuilder'
    length(): number
    toString(): string
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'][],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: string,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.StringBuffer']['instanceObject'],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: boolean,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    reverse(): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    getChars(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['char']['instanceObject'][],
      arg3: number,
    ): void
    indexOf(arg0: string, arg1: number): number
    indexOf(arg0: string): number
    insert(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'][],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: boolean,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: string,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'][],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    charAt(arg0: number): AllJavaClasses['char']['instanceObject']
    codePointAt(arg0: number): number
    codePointBefore(arg0: number): number
    codePointCount(arg0: number, arg1: number): number
    offsetByCodePoints(arg0: number, arg1: number): number
    lastIndexOf(arg0: string, arg1: number): number
    lastIndexOf(arg0: string): number
    substring(arg0: number, arg1: number): string
    substring(arg0: number): string
    replace(
      arg0: number,
      arg1: number,
      arg2: string,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    repeat(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    repeat(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    codePoints(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    subSequence(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.CharSequence']['instanceObject']
    chars(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    delete(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    setLength(arg0: number): void
    capacity(): number
    ensureCapacity(arg0: number): void
    trimToSize(): void
    setCharAt(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'],
    ): void
    appendCodePoint(
      arg0: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    deleteCharAt(
      arg0: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Appendable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_text_FieldPosition = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.text.Format$Field']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.text.FieldPosition']['instanceObject']
    new (
      arg0: AllJavaClasses['java.text.Format$Field']['instanceObject'],
    ): AllJavaClasses['java.text.FieldPosition']['instanceObject']
    new (
      arg0: number,
    ): AllJavaClasses['java.text.FieldPosition']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.text.FieldPosition'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getField(): number
    setBeginIndex(arg0: number): void
    setEndIndex(arg0: number): void
    getFieldAttribute(): AllJavaClasses['java.text.Format$Field']['instanceObject']
    getBeginIndex(): number
    getEndIndex(): number
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_text_Format$Field = {
  staticObject: object
  instanceObject: { __javaClass: 'java.text.Format$Field' } & Omit<
    AllJavaClasses['java.text.AttributedCharacterIterator$Attribute']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_text_AttributedCharacterIterator$Attribute = {
  staticObject: {
    LANGUAGE: AllJavaClasses['java.text.AttributedCharacterIterator$Attribute']['instanceObject']
    READING: AllJavaClasses['java.text.AttributedCharacterIterator$Attribute']['instanceObject']
    INPUT_METHOD_SEGMENT: AllJavaClasses['java.text.AttributedCharacterIterator$Attribute']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.text.AttributedCharacterIterator$Attribute'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_text_AttributedCharacterIterator = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.text.AttributedCharacterIterator'
    getAttributes(): AllJavaClasses['java.util.Map']['instanceObject']
    getAttribute(
      arg0: AllJavaClasses['java.text.AttributedCharacterIterator$Attribute']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getRunStart(): number
    getRunStart(arg0: AllJavaClasses['java.util.Set']['instanceObject']): number
    getRunStart(
      arg0: AllJavaClasses['java.text.AttributedCharacterIterator$Attribute']['instanceObject'],
    ): number
    getRunLimit(arg0: AllJavaClasses['java.util.Set']['instanceObject']): number
    getRunLimit(
      arg0: AllJavaClasses['java.text.AttributedCharacterIterator$Attribute']['instanceObject'],
    ): number
    getRunLimit(): number
    getAllAttributeKeys(): AllJavaClasses['java.util.Set']['instanceObject']
  } & Omit<
    AllJavaClasses['java.text.CharacterIterator']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_text_CharacterIterator = {
  staticObject: { DONE: AllJavaClasses['char']['instanceObject'] }
  instanceObject: {
    __javaClass: 'java.text.CharacterIterator'
    clone(): AllJavaClasses['java.lang.Object']['instanceObject']
    next(): AllJavaClasses['char']['instanceObject']
    last(): AllJavaClasses['char']['instanceObject']
    first(): AllJavaClasses['char']['instanceObject']
    current(): AllJavaClasses['char']['instanceObject']
    previous(): AllJavaClasses['char']['instanceObject']
    getIndex(): number
    getBeginIndex(): number
    getEndIndex(): number
    setIndex(arg0: number): AllJavaClasses['char']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Cloneable']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_time_zone_ZoneOffsetTransition = {
  staticObject: {
    of(
      arg0: AllJavaClasses['java.time.LocalDateTime']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
      arg2: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.zone.ZoneOffsetTransition']['instanceObject']
  }
  instanceObject: (({
    __javaClass: 'java.time.zone.ZoneOffsetTransition'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.time.zone.ZoneOffsetTransition']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    getDuration(): AllJavaClasses['java.time.Duration']['instanceObject']
    isGap(): boolean
    getDateTimeAfter(): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    toEpochSecond(): number
    getOffsetBefore(): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    getOffsetAfter(): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    getDateTimeBefore(): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    isValidOffset(
      arg0: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): boolean
    isOverlap(): boolean
    getInstant(): AllJavaClasses['java.time.Instant']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_InstantSource = {
  staticObject: {
    offset(
      arg0: AllJavaClasses['java.time.InstantSource']['instanceObject'],
      arg1: AllJavaClasses['java.time.Duration']['instanceObject'],
    ): AllJavaClasses['java.time.InstantSource']['instanceObject']
    system(): AllJavaClasses['java.time.InstantSource']['instanceObject']
    fixed(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
    ): AllJavaClasses['java.time.InstantSource']['instanceObject']
    tick(
      arg0: AllJavaClasses['java.time.InstantSource']['instanceObject'],
      arg1: AllJavaClasses['java.time.Duration']['instanceObject'],
    ): AllJavaClasses['java.time.InstantSource']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.time.InstantSource'
    millis(): number
    instant(): AllJavaClasses['java.time.Instant']['instanceObject']
    withZone(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.Clock']['instanceObject']
  }
}
type AllJavaClass_java_nio_channels_FileChannel = {
  staticObject: {
    open(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.OpenOption']['instanceObject'][],
    ): AllJavaClasses['java.nio.channels.FileChannel']['instanceObject']
    open(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.util.Set']['instanceObject'],
      arg2: AllJavaClasses['java.nio.file.attribute.FileAttribute']['instanceObject'][],
    ): AllJavaClasses['java.nio.channels.FileChannel']['instanceObject']
  }
  instanceObject: ((({
    __javaClass: 'java.nio.channels.FileChannel'
    lock(
      arg0: number,
      arg1: number,
      arg2: boolean,
    ): AllJavaClasses['java.nio.channels.FileLock']['instanceObject']
    lock(): AllJavaClasses['java.nio.channels.FileLock']['instanceObject']
    size(): number
    position(): number
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.channels.FileChannel']['instanceObject']
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.channels.SeekableByteChannel']['instanceObject']
    map(
      arg0: AllJavaClasses['java.nio.channels.FileChannel$MapMode']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: AllJavaClasses['java.lang.foreign.Arena']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    map(
      arg0: AllJavaClasses['java.nio.channels.FileChannel$MapMode']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    write(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
      arg1: number,
    ): number
    write(arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject']): number
    write(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): number
    write(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][],
    ): number
    read(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
      arg1: number,
    ): number
    read(arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject']): number
    read(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): number
    read(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][],
    ): number
    transferTo(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['java.nio.channels.WritableByteChannel']['instanceObject'],
    ): number
    tryLock(
      arg0: number,
      arg1: number,
      arg2: boolean,
    ): AllJavaClasses['java.nio.channels.FileLock']['instanceObject']
    tryLock(): AllJavaClasses['java.nio.channels.FileLock']['instanceObject']
    force(arg0: boolean): void
    truncate(
      arg0: number,
    ): AllJavaClasses['java.nio.channels.SeekableByteChannel']['instanceObject']
    truncate(
      arg0: number,
    ): AllJavaClasses['java.nio.channels.FileChannel']['instanceObject']
    transferFrom(
      arg0: AllJavaClasses['java.nio.channels.ReadableByteChannel']['instanceObject'],
      arg1: number,
      arg2: number,
    ): number
  } & Omit<
    AllJavaClasses['java.nio.channels.spi.AbstractInterruptibleChannel']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.nio.channels.SeekableByteChannel']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.nio.channels.GatheringByteChannel']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.nio.channels.ScatteringByteChannel']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_nio_channels_FileLock = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.nio.channels.FileLock'
    size(): number
    toString(): string
    position(): number
    close(): void
    release(): void
    channel(): AllJavaClasses['java.nio.channels.FileChannel']['instanceObject']
    isValid(): boolean
    acquiredBy(): AllJavaClasses['java.nio.channels.Channel']['instanceObject']
    isShared(): boolean
    overlaps(arg0: number, arg1: number): boolean
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.AutoCloseable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_foreign_MemorySegment = {
  staticObject: {
    NULL: AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    mismatch(
      arg0: AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject'],
      arg4: number,
      arg5: number,
    ): number
    copy(
      arg0: AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject'],
      arg1: AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject'],
      arg2: number,
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: number,
      arg5: number,
    ): void
    copy(
      arg0: AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject'],
      arg1: AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject'],
      arg2: number,
      arg3: AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject'],
      arg4: AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject'],
      arg5: number,
      arg6: number,
    ): void
    copy(
      arg0: AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject'],
      arg3: number,
      arg4: number,
    ): void
    copy(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject'],
      arg3: AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject'],
      arg4: number,
      arg5: number,
    ): void
    ofArray(
      arg0: number[],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    ofArray(
      arg0: number[],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    ofArray(
      arg0: number[],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    ofArray(
      arg0: number[],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    ofArray(
      arg0: number[],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    ofArray(
      arg0: AllJavaClasses['char']['instanceObject'][],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    ofArray(
      arg0: number[],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    ofBuffer(
      arg0: AllJavaClasses['java.nio.Buffer']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    ofAddress(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.lang.foreign.MemorySegment'
    scope(): AllJavaClasses['java.lang.foreign.MemorySegment$Scope']['instanceObject']
    get(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfLong']['instanceObject'],
      arg1: number,
    ): number
    get(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfChar']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['char']['instanceObject']
    get(
      arg0: AllJavaClasses['java.lang.foreign.AddressLayout']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    get(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfFloat']['instanceObject'],
      arg1: number,
    ): number
    get(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfDouble']['instanceObject'],
      arg1: number,
    ): number
    get(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfShort']['instanceObject'],
      arg1: number,
    ): number
    get(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfByte']['instanceObject'],
      arg1: number,
    ): number
    get(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfBoolean']['instanceObject'],
      arg1: number,
    ): boolean
    get(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfInt']['instanceObject'],
      arg1: number,
    ): number
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    hashCode(): number
    load(): void
    mismatch(
      arg0: AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject'],
    ): number
    toArray(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfLong']['instanceObject'],
    ): number[]
    toArray(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfDouble']['instanceObject'],
    ): number[]
    toArray(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfInt']['instanceObject'],
    ): number[]
    toArray(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfChar']['instanceObject'],
    ): AllJavaClasses['char']['instanceObject'][]
    toArray(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfShort']['instanceObject'],
    ): number[]
    toArray(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfByte']['instanceObject'],
    ): number[]
    toArray(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfFloat']['instanceObject'],
    ): number[]
    fill(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    elements(
      arg0: AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    spliterator(
      arg0: AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject'],
    ): AllJavaClasses['java.util.Spliterator']['instanceObject']
    set(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfLong']['instanceObject'],
      arg1: number,
      arg2: number,
    ): void
    set(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfDouble']['instanceObject'],
      arg1: number,
      arg2: number,
    ): void
    set(
      arg0: AllJavaClasses['java.lang.foreign.AddressLayout']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject'],
    ): void
    set(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfByte']['instanceObject'],
      arg1: number,
      arg2: number,
    ): void
    set(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfShort']['instanceObject'],
      arg1: number,
      arg2: number,
    ): void
    set(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfChar']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['char']['instanceObject'],
    ): void
    set(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfInt']['instanceObject'],
      arg1: number,
      arg2: number,
    ): void
    set(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfBoolean']['instanceObject'],
      arg1: number,
      arg2: boolean,
    ): void
    set(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfFloat']['instanceObject'],
      arg1: number,
      arg2: number,
    ): void
    isNative(): boolean
    address(): number
    isReadOnly(): boolean
    isLoaded(): boolean
    unload(): void
    force(): void
    copyFrom(
      arg0: AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    byteSize(): number
    asSlice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    asSlice(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    asSlice(
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    asSlice(
      arg0: number,
      arg1: AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    heapBase(): AllJavaClasses['java.util.Optional']['instanceObject']
    isAccessibleBy(
      arg0: AllJavaClasses['java.lang.Thread']['instanceObject'],
    ): boolean
    reinterpret(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    reinterpret(
      arg0: AllJavaClasses['java.lang.foreign.Arena']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    reinterpret(
      arg0: number,
      arg1: AllJavaClasses['java.lang.foreign.Arena']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    asReadOnly(): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    isMapped(): boolean
    asOverlappingSlice(
      arg0: AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject'],
    ): AllJavaClasses['java.util.Optional']['instanceObject']
    segmentOffset(
      arg0: AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject'],
    ): number
    asByteBuffer(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    getUtf8String(arg0: number): string
    setUtf8String(arg0: number, arg1: string): void
    getAtIndex(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfChar']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['char']['instanceObject']
    getAtIndex(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfLong']['instanceObject'],
      arg1: number,
    ): number
    getAtIndex(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfDouble']['instanceObject'],
      arg1: number,
    ): number
    getAtIndex(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfShort']['instanceObject'],
      arg1: number,
    ): number
    getAtIndex(
      arg0: AllJavaClasses['java.lang.foreign.AddressLayout']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    getAtIndex(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfInt']['instanceObject'],
      arg1: number,
    ): number
    getAtIndex(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfByte']['instanceObject'],
      arg1: number,
    ): number
    getAtIndex(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfBoolean']['instanceObject'],
      arg1: number,
    ): boolean
    getAtIndex(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfFloat']['instanceObject'],
      arg1: number,
    ): number
    setAtIndex(
      arg0: AllJavaClasses['java.lang.foreign.AddressLayout']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject'],
    ): void
    setAtIndex(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfBoolean']['instanceObject'],
      arg1: number,
      arg2: boolean,
    ): void
    setAtIndex(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfChar']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['char']['instanceObject'],
    ): void
    setAtIndex(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfShort']['instanceObject'],
      arg1: number,
      arg2: number,
    ): void
    setAtIndex(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfByte']['instanceObject'],
      arg1: number,
      arg2: number,
    ): void
    setAtIndex(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfInt']['instanceObject'],
      arg1: number,
      arg2: number,
    ): void
    setAtIndex(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfFloat']['instanceObject'],
      arg1: number,
      arg2: number,
    ): void
    setAtIndex(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfLong']['instanceObject'],
      arg1: number,
      arg2: number,
    ): void
    setAtIndex(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfDouble']['instanceObject'],
      arg1: number,
      arg2: number,
    ): void
  }
}
type AllJavaClass_java_lang_foreign_MemorySegment$Scope = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.foreign.MemorySegment$Scope'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    hashCode(): number
    isAlive(): boolean
  }
}
type AllJavaClass_java_lang_foreign_ValueLayout$OfLong = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.foreign.ValueLayout$OfLong'
    withOrder(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withOrder(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfLong']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfLong']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfLong']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.ValueLayout$OfLong']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_foreign_ValueLayout = {
  staticObject: {
    ADDRESS: AllJavaClasses['java.lang.foreign.AddressLayout']['instanceObject']
    JAVA_BYTE: AllJavaClasses['java.lang.foreign.ValueLayout$OfByte']['instanceObject']
    JAVA_BOOLEAN: AllJavaClasses['java.lang.foreign.ValueLayout$OfBoolean']['instanceObject']
    JAVA_CHAR: AllJavaClasses['java.lang.foreign.ValueLayout$OfChar']['instanceObject']
    JAVA_SHORT: AllJavaClasses['java.lang.foreign.ValueLayout$OfShort']['instanceObject']
    JAVA_INT: AllJavaClasses['java.lang.foreign.ValueLayout$OfInt']['instanceObject']
    JAVA_LONG: AllJavaClasses['java.lang.foreign.ValueLayout$OfLong']['instanceObject']
    JAVA_FLOAT: AllJavaClasses['java.lang.foreign.ValueLayout$OfFloat']['instanceObject']
    JAVA_DOUBLE: AllJavaClasses['java.lang.foreign.ValueLayout$OfDouble']['instanceObject']
    ADDRESS_UNALIGNED: AllJavaClasses['java.lang.foreign.AddressLayout']['instanceObject']
    JAVA_CHAR_UNALIGNED: AllJavaClasses['java.lang.foreign.ValueLayout$OfChar']['instanceObject']
    JAVA_SHORT_UNALIGNED: AllJavaClasses['java.lang.foreign.ValueLayout$OfShort']['instanceObject']
    JAVA_INT_UNALIGNED: AllJavaClasses['java.lang.foreign.ValueLayout$OfInt']['instanceObject']
    JAVA_LONG_UNALIGNED: AllJavaClasses['java.lang.foreign.ValueLayout$OfLong']['instanceObject']
    JAVA_FLOAT_UNALIGNED: AllJavaClasses['java.lang.foreign.ValueLayout$OfFloat']['instanceObject']
    JAVA_DOUBLE_UNALIGNED: AllJavaClasses['java.lang.foreign.ValueLayout$OfDouble']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.lang.foreign.ValueLayout'
    carrier(): AllJavaClasses['java.lang.Class']['instanceObject']
    order(): AllJavaClasses['java.nio.ByteOrder']['instanceObject']
    arrayElementVarHandle(
      arg0: number[],
    ): AllJavaClasses['java.lang.invoke.VarHandle']['instanceObject']
    withOrder(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_foreign_AddressLayout = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.foreign.AddressLayout'
    withOrder(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withOrder(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.AddressLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.AddressLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.AddressLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.AddressLayout']['instanceObject']
    withTargetLayout(
      arg0: AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.AddressLayout']['instanceObject']
    withoutTargetLayout(): AllJavaClasses['java.lang.foreign.AddressLayout']['instanceObject']
    targetLayout(): AllJavaClasses['java.util.Optional']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_foreign_MemoryLayout = {
  staticObject: {
    sequenceLayout(
      arg0: number,
      arg1: AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.SequenceLayout']['instanceObject']
    sequenceLayout(
      arg0: AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.SequenceLayout']['instanceObject']
    paddingLayout(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.PaddingLayout']['instanceObject']
    structLayout(
      arg0: AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject'][],
    ): AllJavaClasses['java.lang.foreign.StructLayout']['instanceObject']
    unionLayout(
      arg0: AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject'][],
    ): AllJavaClasses['java.lang.foreign.UnionLayout']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.lang.foreign.MemoryLayout'
    name(): AllJavaClasses['java.util.Optional']['instanceObject']
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    byteOffset(
      arg0: AllJavaClasses['java.lang.foreign.MemoryLayout$PathElement']['instanceObject'][],
    ): number
    varHandle(
      arg0: AllJavaClasses['java.lang.foreign.MemoryLayout$PathElement']['instanceObject'][],
    ): AllJavaClasses['java.lang.invoke.VarHandle']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    byteOffsetHandle(
      arg0: AllJavaClasses['java.lang.foreign.MemoryLayout$PathElement']['instanceObject'][],
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    sliceHandle(
      arg0: AllJavaClasses['java.lang.foreign.MemoryLayout$PathElement']['instanceObject'][],
    ): AllJavaClasses['java.lang.invoke.MethodHandle']['instanceObject']
    select(
      arg0: AllJavaClasses['java.lang.foreign.MemoryLayout$PathElement']['instanceObject'][],
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    byteSize(): number
    byteAlignment(): number
  }
}
type AllJavaClass_java_lang_foreign_MemoryLayout$PathElement = {
  staticObject: {
    sequenceElement(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout$PathElement']['instanceObject']
    sequenceElement(): AllJavaClasses['java.lang.foreign.MemoryLayout$PathElement']['instanceObject']
    sequenceElement(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout$PathElement']['instanceObject']
    groupElement(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout$PathElement']['instanceObject']
    groupElement(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout$PathElement']['instanceObject']
    dereferenceElement(): AllJavaClasses['java.lang.foreign.MemoryLayout$PathElement']['instanceObject']
  }
  instanceObject: { __javaClass: 'java.lang.foreign.MemoryLayout$PathElement' }
}
type AllJavaClass_java_lang_foreign_SequenceLayout = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.foreign.SequenceLayout'
    flatten(): AllJavaClasses['java.lang.foreign.SequenceLayout']['instanceObject']
    elementLayout(): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.SequenceLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.SequenceLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withElementCount(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.SequenceLayout']['instanceObject']
    reshape(
      arg0: number[],
    ): AllJavaClasses['java.lang.foreign.SequenceLayout']['instanceObject']
    elementCount(): number
  } & Omit<
    AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_foreign_PaddingLayout = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.foreign.PaddingLayout'
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.PaddingLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.PaddingLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.PaddingLayout']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_foreign_StructLayout = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.foreign.StructLayout'
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.GroupLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.StructLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.GroupLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.StructLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.GroupLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.StructLayout']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.foreign.GroupLayout']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_foreign_GroupLayout = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.foreign.GroupLayout'
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.GroupLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.GroupLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.GroupLayout']['instanceObject']
    memberLayouts(): AllJavaClasses['java.util.List']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_foreign_UnionLayout = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.foreign.UnionLayout'
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.GroupLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.UnionLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.GroupLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.UnionLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.GroupLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.UnionLayout']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.foreign.GroupLayout']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_foreign_ValueLayout$OfByte = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.foreign.ValueLayout$OfByte'
    withOrder(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withOrder(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfByte']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfByte']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfByte']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.ValueLayout$OfByte']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_foreign_ValueLayout$OfBoolean = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.foreign.ValueLayout$OfBoolean'
    withOrder(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withOrder(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfBoolean']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfBoolean']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfBoolean']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.ValueLayout$OfBoolean']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_foreign_ValueLayout$OfChar = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.foreign.ValueLayout$OfChar'
    withOrder(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withOrder(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfChar']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfChar']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfChar']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.ValueLayout$OfChar']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_foreign_ValueLayout$OfShort = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.foreign.ValueLayout$OfShort'
    withOrder(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withOrder(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfShort']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfShort']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfShort']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.ValueLayout$OfShort']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_foreign_ValueLayout$OfInt = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.foreign.ValueLayout$OfInt'
    withOrder(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withOrder(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfInt']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfInt']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfInt']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.ValueLayout$OfInt']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_foreign_ValueLayout$OfFloat = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.foreign.ValueLayout$OfFloat'
    withOrder(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withOrder(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfFloat']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfFloat']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfFloat']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.ValueLayout$OfFloat']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_foreign_ValueLayout$OfDouble = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.foreign.ValueLayout$OfDouble'
    withOrder(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withOrder(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfDouble']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withByteAlignment(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfDouble']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.ValueLayout$OfDouble']['instanceObject']
    withName(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject']
    withoutName(): AllJavaClasses['java.lang.foreign.ValueLayout$OfDouble']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.foreign.ValueLayout']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_foreign_Arena = {
  staticObject: {
    global(): AllJavaClasses['java.lang.foreign.Arena']['instanceObject']
    ofAuto(): AllJavaClasses['java.lang.foreign.Arena']['instanceObject']
    ofConfined(): AllJavaClasses['java.lang.foreign.Arena']['instanceObject']
    ofShared(): AllJavaClasses['java.lang.foreign.Arena']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.lang.foreign.Arena'
    scope(): AllJavaClasses['java.lang.foreign.MemorySegment$Scope']['instanceObject']
    close(): void
    allocate(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.foreign.SegmentAllocator']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.AutoCloseable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_lang_foreign_SegmentAllocator = {
  staticObject: {
    slicingAllocator(
      arg0: AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.SegmentAllocator']['instanceObject']
    prefixAllocator(
      arg0: AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.SegmentAllocator']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.lang.foreign.SegmentAllocator'
    allocate(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfFloat']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    allocate(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfLong']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    allocate(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfDouble']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    allocate(
      arg0: AllJavaClasses['java.lang.foreign.AddressLayout']['instanceObject'],
      arg1: AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    allocate(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    allocate(
      arg0: AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    allocate(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfByte']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    allocate(
      arg0: number,
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    allocate(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfChar']['instanceObject'],
      arg1: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    allocate(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfInt']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    allocate(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfShort']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    allocateArray(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfDouble']['instanceObject'],
      arg1: number[],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    allocateArray(
      arg0: AllJavaClasses['java.lang.foreign.MemoryLayout']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    allocateArray(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfChar']['instanceObject'],
      arg1: AllJavaClasses['char']['instanceObject'][],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    allocateArray(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfByte']['instanceObject'],
      arg1: number[],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    allocateArray(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfShort']['instanceObject'],
      arg1: number[],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    allocateArray(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfInt']['instanceObject'],
      arg1: number[],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    allocateArray(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfFloat']['instanceObject'],
      arg1: number[],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    allocateArray(
      arg0: AllJavaClasses['java.lang.foreign.ValueLayout$OfLong']['instanceObject'],
      arg1: number[],
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
    allocateUtf8String(
      arg0: string,
    ): AllJavaClasses['java.lang.foreign.MemorySegment']['instanceObject']
  }
}
type AllJavaClass_java_nio_channels_FileChannel$MapMode = {
  staticObject: {
    READ_ONLY: AllJavaClasses['java.nio.channels.FileChannel$MapMode']['instanceObject']
    READ_WRITE: AllJavaClasses['java.nio.channels.FileChannel$MapMode']['instanceObject']
    PRIVATE: AllJavaClasses['java.nio.channels.FileChannel$MapMode']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.nio.channels.FileChannel$MapMode'
    toString(): string
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_MappedByteBuffer = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.MappedByteBuffer'
    reset(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    load(): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    clear(): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    clear(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    clear(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    position(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    limit(arg0: number): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    limit(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    limit(
      arg0: number,
    ): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    mark(): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    mark(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    mark(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    compact(): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    compact(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    isLoaded(): boolean
    force(): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    force(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
  } & Omit<
    AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_nio_channels_spi_AbstractInterruptibleChannel = {
  staticObject: object
  instanceObject: (({
    __javaClass: 'java.nio.channels.spi.AbstractInterruptibleChannel'
    isOpen(): boolean
    close(): void
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.nio.channels.Channel']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.nio.channels.InterruptibleChannel']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_nio_channels_InterruptibleChannel = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.channels.InterruptibleChannel'
    close(): void
  } & Omit<
    AllJavaClasses['java.nio.channels.Channel']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_nio_channels_GatheringByteChannel = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.channels.GatheringByteChannel'
    write(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): number
    write(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][],
    ): number
  } & Omit<
    AllJavaClasses['java.nio.channels.WritableByteChannel']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_nio_channels_ScatteringByteChannel = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.channels.ScatteringByteChannel'
    read(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): number
    read(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][],
    ): number
  } & Omit<
    AllJavaClasses['java.nio.channels.ReadableByteChannel']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_nio_channels_AsynchronousFileChannel = {
  staticObject: {
    open(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.util.Set']['instanceObject'],
      arg2: AllJavaClasses['java.util.concurrent.ExecutorService']['instanceObject'],
      arg3: AllJavaClasses['java.nio.file.attribute.FileAttribute']['instanceObject'][],
    ): AllJavaClasses['java.nio.channels.AsynchronousFileChannel']['instanceObject']
    open(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.OpenOption']['instanceObject'][],
    ): AllJavaClasses['java.nio.channels.AsynchronousFileChannel']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.nio.channels.AsynchronousFileChannel'
    lock(
      arg0: number,
      arg1: number,
      arg2: boolean,
    ): AllJavaClasses['java.util.concurrent.Future']['instanceObject']
    lock(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.nio.channels.CompletionHandler']['instanceObject'],
    ): void
    lock(
      arg0: number,
      arg1: number,
      arg2: boolean,
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.nio.channels.CompletionHandler']['instanceObject'],
    ): void
    lock(): AllJavaClasses['java.util.concurrent.Future']['instanceObject']
    size(): number
    write(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.util.concurrent.Future']['instanceObject']
    write(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.nio.channels.CompletionHandler']['instanceObject'],
    ): void
    read(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.util.concurrent.Future']['instanceObject']
    read(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.nio.channels.CompletionHandler']['instanceObject'],
    ): void
    tryLock(): AllJavaClasses['java.nio.channels.FileLock']['instanceObject']
    tryLock(
      arg0: number,
      arg1: number,
      arg2: boolean,
    ): AllJavaClasses['java.nio.channels.FileLock']['instanceObject']
    force(arg0: boolean): void
    truncate(
      arg0: number,
    ): AllJavaClasses['java.nio.channels.AsynchronousFileChannel']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.nio.channels.AsynchronousChannel']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_util_concurrent_Future = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.concurrent.Future'
    get(
      arg0: number,
      arg1: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    get(): AllJavaClasses['java.lang.Object']['instanceObject']
    state(): AllJavaClasses['java.util.concurrent.Future$State']['instanceObject']
    isDone(): boolean
    cancel(arg0: boolean): boolean
    isCancelled(): boolean
    resultNow(): AllJavaClasses['java.lang.Object']['instanceObject']
    exceptionNow(): AllJavaClasses['java.lang.Throwable']['instanceObject']
  }
}
type AllJavaClass_java_util_concurrent_Future$State = {
  staticObject: {
    RUNNING: AllJavaClasses['java.util.concurrent.Future$State']['instanceObject']
    SUCCESS: AllJavaClasses['java.util.concurrent.Future$State']['instanceObject']
    FAILED: AllJavaClasses['java.util.concurrent.Future$State']['instanceObject']
    CANCELLED: AllJavaClasses['java.util.concurrent.Future$State']['instanceObject']
    values(): AllJavaClasses['java.util.concurrent.Future$State']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['java.util.concurrent.Future$State']['instanceObject']
  }
  instanceObject: { __javaClass: 'java.util.concurrent.Future$State' } & Omit<
    AllJavaClasses['java.lang.Enum']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_nio_channels_CompletionHandler = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.channels.CompletionHandler'
    completed(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    failed(
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
  }
}
type AllJavaClass_java_util_concurrent_ExecutorService = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.util.concurrent.ExecutorService'
    shutdown(): void
    isTerminated(): boolean
    close(): void
    isShutdown(): boolean
    submit(
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.concurrent.Future']['instanceObject']
    submit(
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
    ): AllJavaClasses['java.util.concurrent.Future']['instanceObject']
    submit(
      arg0: AllJavaClasses['java.util.concurrent.Callable']['instanceObject'],
    ): AllJavaClasses['java.util.concurrent.Future']['instanceObject']
    invokeAny(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    invokeAny(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    invokeAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    invokeAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    awaitTermination(
      arg0: number,
      arg1: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): boolean
    shutdownNow(): AllJavaClasses['java.util.List']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.concurrent.Executor']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.AutoCloseable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_util_concurrent_Callable = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.concurrent.Callable'
    call(): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_java_util_concurrent_Executor = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.concurrent.Executor'
    execute(arg0: AllJavaClasses['java.lang.Runnable']['instanceObject']): void
  }
}
type AllJavaClass_java_nio_channels_AsynchronousChannel = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.channels.AsynchronousChannel'
    close(): void
  } & Omit<
    AllJavaClasses['java.nio.channels.Channel']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_nio_file_PathMatcher = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.file.PathMatcher'
    matches(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): boolean
  }
}
type AllJavaClass_java_nio_file_attribute_UserPrincipalLookupService = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.file.attribute.UserPrincipalLookupService'
    lookupPrincipalByName(
      arg0: string,
    ): AllJavaClasses['java.nio.file.attribute.UserPrincipal']['instanceObject']
    lookupPrincipalByGroupName(
      arg0: string,
    ): AllJavaClasses['java.nio.file.attribute.GroupPrincipal']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_file_attribute_UserPrincipal = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.file.attribute.UserPrincipal'
  } & Omit<
    AllJavaClasses['java.security.Principal']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_security_Principal = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.security.Principal'
    getName(): string
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    implies(
      arg0: AllJavaClasses['javax.security.auth.Subject']['instanceObject'],
    ): boolean
  }
}
type AllJavaClass_javax_security_auth_Subject = {
  staticObject: {
    new (): AllJavaClasses['javax.security.auth.Subject']['instanceObject']
    new (
      arg0: boolean,
      arg1: AllJavaClasses['java.util.Set']['instanceObject'],
      arg2: AllJavaClasses['java.util.Set']['instanceObject'],
      arg3: AllJavaClasses['java.util.Set']['instanceObject'],
    ): AllJavaClasses['javax.security.auth.Subject']['instanceObject']
    current(): AllJavaClasses['javax.security.auth.Subject']['instanceObject']
    getSubject(
      arg0: AllJavaClasses['java.security.AccessControlContext']['instanceObject'],
    ): AllJavaClasses['javax.security.auth.Subject']['instanceObject']
    doAs(
      arg0: AllJavaClasses['javax.security.auth.Subject']['instanceObject'],
      arg1: AllJavaClasses['java.security.PrivilegedAction']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    doAs(
      arg0: AllJavaClasses['javax.security.auth.Subject']['instanceObject'],
      arg1: AllJavaClasses['java.security.PrivilegedExceptionAction']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    callAs(
      arg0: AllJavaClasses['javax.security.auth.Subject']['instanceObject'],
      arg1: AllJavaClasses['java.util.concurrent.Callable']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    doAsPrivileged(
      arg0: AllJavaClasses['javax.security.auth.Subject']['instanceObject'],
      arg1: AllJavaClasses['java.security.PrivilegedAction']['instanceObject'],
      arg2: AllJavaClasses['java.security.AccessControlContext']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    doAsPrivileged(
      arg0: AllJavaClasses['javax.security.auth.Subject']['instanceObject'],
      arg1: AllJavaClasses['java.security.PrivilegedExceptionAction']['instanceObject'],
      arg2: AllJavaClasses['java.security.AccessControlContext']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'javax.security.auth.Subject'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    setReadOnly(): void
    getPrincipals(): AllJavaClasses['java.util.Set']['instanceObject']
    getPrincipals(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.util.Set']['instanceObject']
    isReadOnly(): boolean
    getPublicCredentials(): AllJavaClasses['java.util.Set']['instanceObject']
    getPublicCredentials(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.util.Set']['instanceObject']
    getPrivateCredentials(): AllJavaClasses['java.util.Set']['instanceObject']
    getPrivateCredentials(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.util.Set']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_security_AccessControlContext = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.security.AccessControlContext']['instanceObject'],
      arg1: AllJavaClasses['java.security.DomainCombiner']['instanceObject'],
    ): AllJavaClasses['java.security.AccessControlContext']['instanceObject']
    new (
      arg0: AllJavaClasses['java.security.ProtectionDomain']['instanceObject'][],
    ): AllJavaClasses['java.security.AccessControlContext']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.security.AccessControlContext'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    hashCode(): number
    checkPermission(
      arg0: AllJavaClasses['java.security.Permission']['instanceObject'],
    ): void
    getDomainCombiner(): AllJavaClasses['java.security.DomainCombiner']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_security_DomainCombiner = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.security.DomainCombiner'
    combine(
      arg0: AllJavaClasses['java.security.ProtectionDomain']['instanceObject'][],
      arg1: AllJavaClasses['java.security.ProtectionDomain']['instanceObject'][],
    ): AllJavaClasses['java.security.ProtectionDomain']['instanceObject'][]
  }
}
type AllJavaClass_java_security_ProtectionDomain = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.security.CodeSource']['instanceObject'],
      arg1: AllJavaClasses['java.security.PermissionCollection']['instanceObject'],
    ): AllJavaClasses['java.security.ProtectionDomain']['instanceObject']
    new (
      arg0: AllJavaClasses['java.security.CodeSource']['instanceObject'],
      arg1: AllJavaClasses['java.security.PermissionCollection']['instanceObject'],
      arg2: AllJavaClasses['java.lang.ClassLoader']['instanceObject'],
      arg3: AllJavaClasses['java.security.Principal']['instanceObject'][],
    ): AllJavaClasses['java.security.ProtectionDomain']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.security.ProtectionDomain'
    toString(): string
    getClassLoader(): AllJavaClasses['java.lang.ClassLoader']['instanceObject']
    getCodeSource(): AllJavaClasses['java.security.CodeSource']['instanceObject']
    implies(
      arg0: AllJavaClasses['java.security.Permission']['instanceObject'],
    ): boolean
    getPermissions(): AllJavaClasses['java.security.PermissionCollection']['instanceObject']
    getPrincipals(): AllJavaClasses['java.security.Principal']['instanceObject'][]
    staticPermissionsOnly(): boolean
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_security_CodeSource = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.net.URL']['instanceObject'],
      arg1: AllJavaClasses['java.security.cert.Certificate']['instanceObject'][],
    ): AllJavaClasses['java.security.CodeSource']['instanceObject']
    new (
      arg0: AllJavaClasses['java.net.URL']['instanceObject'],
      arg1: AllJavaClasses['java.security.CodeSigner']['instanceObject'][],
    ): AllJavaClasses['java.security.CodeSource']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.security.CodeSource'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getLocation(): AllJavaClasses['java.net.URL']['instanceObject']
    getCertificates(): AllJavaClasses['java.security.cert.Certificate']['instanceObject'][]
    implies(
      arg0: AllJavaClasses['java.security.CodeSource']['instanceObject'],
    ): boolean
    getCodeSigners(): AllJavaClasses['java.security.CodeSigner']['instanceObject'][]
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_security_cert_Certificate = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.security.cert.Certificate'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getType(): string
    getEncoded(): number[]
    verify(
      arg0: AllJavaClasses['java.security.PublicKey']['instanceObject'],
    ): void
    verify(
      arg0: AllJavaClasses['java.security.PublicKey']['instanceObject'],
      arg1: string,
    ): void
    verify(
      arg0: AllJavaClasses['java.security.PublicKey']['instanceObject'],
      arg1: AllJavaClasses['java.security.Provider']['instanceObject'],
    ): void
    getPublicKey(): AllJavaClasses['java.security.PublicKey']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_security_PublicKey = {
  staticObject: { serialVersionUID: number }
  instanceObject: { __javaClass: 'java.security.PublicKey' } & Omit<
    AllJavaClasses['java.security.Key']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_security_Key = {
  staticObject: { serialVersionUID: number }
  instanceObject: {
    __javaClass: 'java.security.Key'
    getEncoded(): number[]
    getFormat(): string
    getAlgorithm(): string
  } & Omit<
    AllJavaClasses['java.io.Serializable']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_security_Provider = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.security.Provider'
    getName(): string
    remove(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    remove(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    get(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    put(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getProperty(arg0: string): string
    toString(): string
    values(): AllJavaClasses['java.util.Collection']['instanceObject']
    load(arg0: AllJavaClasses['java.io.InputStream']['instanceObject']): void
    clear(): void
    replace(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    replace(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    replaceAll(
      arg0: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
    ): void
    elements(): AllJavaClasses['java.util.Enumeration']['instanceObject']
    merge(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    entrySet(): AllJavaClasses['java.util.Set']['instanceObject']
    putAll(arg0: AllJavaClasses['java.util.Map']['instanceObject']): void
    putIfAbsent(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    compute(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    forEach(
      arg0: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
    ): void
    computeIfAbsent(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    keys(): AllJavaClasses['java.util.Enumeration']['instanceObject']
    keySet(): AllJavaClasses['java.util.Set']['instanceObject']
    getOrDefault(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    computeIfPresent(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getVersion(): number
    getService(
      arg0: string,
      arg1: string,
    ): AllJavaClasses['java.security.Provider$Service']['instanceObject']
    configure(
      arg0: string,
    ): AllJavaClasses['java.security.Provider']['instanceObject']
    isConfigured(): boolean
    getVersionStr(): string
    getInfo(): string
    getServices(): AllJavaClasses['java.util.Set']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.Properties']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_security_Provider$Service = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.security.Provider']['instanceObject'],
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: AllJavaClasses['java.util.List']['instanceObject'],
      arg5: AllJavaClasses['java.util.Map']['instanceObject'],
    ): AllJavaClasses['java.security.Provider$Service']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.security.Provider$Service'
    toString(): string
    newInstance(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getType(): string
    getClassName(): string
    getAttribute(arg0: string): string
    getProvider(): AllJavaClasses['java.security.Provider']['instanceObject']
    getAlgorithm(): string
    supportsParameter(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_util_Properties = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.util.Properties']['instanceObject'],
    ): AllJavaClasses['java.util.Properties']['instanceObject']
    new (arg0: number): AllJavaClasses['java.util.Properties']['instanceObject']
    new (): AllJavaClasses['java.util.Properties']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.Properties'
    remove(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    remove(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    size(): number
    get(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    put(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getProperty(arg0: string): string
    getProperty(arg0: string, arg1: string): string
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    values(): AllJavaClasses['java.util.Collection']['instanceObject']
    hashCode(): number
    clone(): AllJavaClasses['java.lang.Object']['instanceObject']
    load(arg0: AllJavaClasses['java.io.Reader']['instanceObject']): void
    load(arg0: AllJavaClasses['java.io.InputStream']['instanceObject']): void
    store(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: string,
    ): void
    store(
      arg0: AllJavaClasses['java.io.Writer']['instanceObject'],
      arg1: string,
    ): void
    clear(): void
    isEmpty(): boolean
    replace(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    replace(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    replaceAll(
      arg0: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
    ): void
    contains(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    list(arg0: AllJavaClasses['java.io.PrintStream']['instanceObject']): void
    list(arg0: AllJavaClasses['java.io.PrintWriter']['instanceObject']): void
    elements(): AllJavaClasses['java.util.Enumeration']['instanceObject']
    merge(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    entrySet(): AllJavaClasses['java.util.Set']['instanceObject']
    putAll(arg0: AllJavaClasses['java.util.Map']['instanceObject']): void
    putIfAbsent(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    compute(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    setProperty(
      arg0: string,
      arg1: string,
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    forEach(
      arg0: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
    ): void
    containsKey(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    computeIfAbsent(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    storeToXML(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: string,
      arg2: string,
    ): void
    storeToXML(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): void
    storeToXML(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: string,
    ): void
    keys(): AllJavaClasses['java.util.Enumeration']['instanceObject']
    keySet(): AllJavaClasses['java.util.Set']['instanceObject']
    containsValue(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    getOrDefault(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    computeIfPresent(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    save(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: string,
    ): void
    loadFromXML(
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
    ): void
    propertyNames(): AllJavaClasses['java.util.Enumeration']['instanceObject']
    stringPropertyNames(): AllJavaClasses['java.util.Set']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.Hashtable']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_io_Reader = {
  staticObject: {
    nullReader(): AllJavaClasses['java.io.Reader']['instanceObject']
  }
  instanceObject: (({
    __javaClass: 'java.io.Reader'
    reset(): void
    read(arg0: AllJavaClasses['char']['instanceObject'][]): number
    read(
      arg0: AllJavaClasses['char']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): number
    read(arg0: AllJavaClasses['java.nio.CharBuffer']['instanceObject']): number
    read(): number
    close(): void
    mark(arg0: number): void
    transferTo(arg0: AllJavaClasses['java.io.Writer']['instanceObject']): number
    skip(arg0: number): number
    markSupported(): boolean
    ready(): boolean
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Readable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<AllJavaClasses['java.io.Closeable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_io_Writer = {
  staticObject: {
    nullWriter(): AllJavaClasses['java.io.Writer']['instanceObject']
  }
  instanceObject: ((({
    __javaClass: 'java.io.Writer'
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.io.Writer']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.io.Writer']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.io.Writer']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    flush(): void
    write(arg0: number): void
    write(
      arg0: AllJavaClasses['char']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): void
    write(arg0: string): void
    write(arg0: string, arg1: number, arg2: number): void
    write(arg0: AllJavaClasses['char']['instanceObject'][]): void
    close(): void
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Appendable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.io.Closeable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<AllJavaClasses['java.io.Flushable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_io_PrintStream = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: boolean,
      arg2: string,
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: boolean,
      arg2: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    new (arg0: string): AllJavaClasses['java.io.PrintStream']['instanceObject']
    new (
      arg0: string,
      arg1: string,
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    new (
      arg0: string,
      arg1: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
      arg1: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: boolean,
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
  }
  instanceObject: (({
    __javaClass: 'java.io.PrintStream'
    println(arg0: string): void
    println(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
    println(arg0: number): void
    println(arg0: AllJavaClasses['char']['instanceObject'][]): void
    println(arg0: number): void
    println(): void
    println(arg0: boolean): void
    println(arg0: AllJavaClasses['char']['instanceObject']): void
    println(arg0: number): void
    println(arg0: number): void
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    flush(): void
    format(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    format(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    charset(): AllJavaClasses['java.nio.charset.Charset']['instanceObject']
    printf(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    printf(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    write(arg0: number[]): void
    write(arg0: number[], arg1: number, arg2: number): void
    write(arg0: number): void
    print(arg0: string): void
    print(arg0: AllJavaClasses['char']['instanceObject'][]): void
    print(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
    print(arg0: boolean): void
    print(arg0: AllJavaClasses['char']['instanceObject']): void
    print(arg0: number): void
    print(arg0: number): void
    print(arg0: number): void
    print(arg0: number): void
    close(): void
    writeBytes(arg0: number[]): void
    checkError(): boolean
  } & Omit<
    AllJavaClasses['java.io.FilterOutputStream']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Appendable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<AllJavaClasses['java.io.Closeable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_io_FilterOutputStream = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
    ): AllJavaClasses['java.io.FilterOutputStream']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.io.FilterOutputStream'
    flush(): void
    write(arg0: number[], arg1: number, arg2: number): void
    write(arg0: number[]): void
    write(arg0: number): void
    close(): void
  } & Omit<
    AllJavaClasses['java.io.OutputStream']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_Hashtable = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.util.Map']['instanceObject'],
    ): AllJavaClasses['java.util.Hashtable']['instanceObject']
    new (): AllJavaClasses['java.util.Hashtable']['instanceObject']
    new (arg0: number): AllJavaClasses['java.util.Hashtable']['instanceObject']
    new (
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.util.Hashtable']['instanceObject']
  }
  instanceObject: ((({
    __javaClass: 'java.util.Hashtable'
    remove(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    remove(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    size(): number
    get(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    put(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    values(): AllJavaClasses['java.util.Collection']['instanceObject']
    hashCode(): number
    clone(): AllJavaClasses['java.lang.Object']['instanceObject']
    clear(): void
    isEmpty(): boolean
    replace(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    replace(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    replaceAll(
      arg0: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
    ): void
    contains(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    elements(): AllJavaClasses['java.util.Enumeration']['instanceObject']
    merge(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    entrySet(): AllJavaClasses['java.util.Set']['instanceObject']
    putAll(arg0: AllJavaClasses['java.util.Map']['instanceObject']): void
    putIfAbsent(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    compute(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    forEach(
      arg0: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
    ): void
    containsKey(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    computeIfAbsent(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    keys(): AllJavaClasses['java.util.Enumeration']['instanceObject']
    keySet(): AllJavaClasses['java.util.Set']['instanceObject']
    containsValue(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    getOrDefault(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    computeIfPresent(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.Dictionary']['instanceObject'],
    '__javaClass'
  >) &
    Omit<AllJavaClasses['java.util.Map']['instanceObject'], '__javaClass'>) &
    Omit<
      AllJavaClasses['java.lang.Cloneable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_util_Dictionary = {
  staticObject: {
    new (): AllJavaClasses['java.util.Dictionary']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.Dictionary'
    remove(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    size(): number
    get(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    put(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    isEmpty(): boolean
    elements(): AllJavaClasses['java.util.Enumeration']['instanceObject']
    keys(): AllJavaClasses['java.util.Enumeration']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_security_CodeSigner = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.security.cert.CertPath']['instanceObject'],
      arg1: AllJavaClasses['java.security.Timestamp']['instanceObject'],
    ): AllJavaClasses['java.security.CodeSigner']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.security.CodeSigner'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getSignerCertPath(): AllJavaClasses['java.security.cert.CertPath']['instanceObject']
    getTimestamp(): AllJavaClasses['java.security.Timestamp']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_security_cert_CertPath = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.security.cert.CertPath'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getCertificates(): AllJavaClasses['java.util.List']['instanceObject']
    getType(): string
    getEncoded(arg0: string): number[]
    getEncoded(): number[]
    getEncodings(): AllJavaClasses['java.util.Iterator']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_security_Timestamp = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.util.Date']['instanceObject'],
      arg1: AllJavaClasses['java.security.cert.CertPath']['instanceObject'],
    ): AllJavaClasses['java.security.Timestamp']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.security.Timestamp'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getSignerCertPath(): AllJavaClasses['java.security.cert.CertPath']['instanceObject']
    getTimestamp(): AllJavaClasses['java.util.Date']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_util_Date = {
  staticObject: {
    new (arg0: string): AllJavaClasses['java.util.Date']['instanceObject']
    new (
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
      arg4: number,
      arg5: number,
    ): AllJavaClasses['java.util.Date']['instanceObject']
    new (
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
      arg4: number,
    ): AllJavaClasses['java.util.Date']['instanceObject']
    new (): AllJavaClasses['java.util.Date']['instanceObject']
    new (arg0: number): AllJavaClasses['java.util.Date']['instanceObject']
    new (
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.util.Date']['instanceObject']
    from(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
    ): AllJavaClasses['java.util.Date']['instanceObject']
    parse(arg0: string): number
    UTC(
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
      arg4: number,
      arg5: number,
    ): number
  }
  instanceObject: ((({
    __javaClass: 'java.util.Date'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    clone(): AllJavaClasses['java.lang.Object']['instanceObject']
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(arg0: AllJavaClasses['java.util.Date']['instanceObject']): number
    before(arg0: AllJavaClasses['java.util.Date']['instanceObject']): boolean
    after(arg0: AllJavaClasses['java.util.Date']['instanceObject']): boolean
    getTime(): number
    toInstant(): AllJavaClasses['java.time.Instant']['instanceObject']
    getYear(): number
    setTime(arg0: number): void
    getSeconds(): number
    getMonth(): number
    setDate(arg0: number): void
    setMonth(arg0: number): void
    getHours(): number
    setHours(arg0: number): void
    getMinutes(): number
    setMinutes(arg0: number): void
    setSeconds(arg0: number): void
    setYear(arg0: number): void
    getDate(): number
    getDay(): number
    toLocaleString(): string
    toGMTString(): string
    getTimezoneOffset(): number
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.Cloneable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_security_PrivilegedAction = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.security.PrivilegedAction'
    run(): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_java_security_PrivilegedExceptionAction = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.security.PrivilegedExceptionAction'
    run(): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_java_nio_file_attribute_GroupPrincipal = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.file.attribute.GroupPrincipal'
  } & Omit<
    AllJavaClasses['java.nio.file.attribute.UserPrincipal']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_ModuleLayer$Controller = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.ModuleLayer$Controller'
    addReads(
      arg0: AllJavaClasses['java.lang.Module']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Module']['instanceObject'],
    ): AllJavaClasses['java.lang.ModuleLayer$Controller']['instanceObject']
    addExports(
      arg0: AllJavaClasses['java.lang.Module']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.Module']['instanceObject'],
    ): AllJavaClasses['java.lang.ModuleLayer$Controller']['instanceObject']
    addOpens(
      arg0: AllJavaClasses['java.lang.Module']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.Module']['instanceObject'],
    ): AllJavaClasses['java.lang.ModuleLayer$Controller']['instanceObject']
    layer(): AllJavaClasses['java.lang.ModuleLayer']['instanceObject']
    enableNativeAccess(
      arg0: AllJavaClasses['java.lang.Module']['instanceObject'],
    ): AllJavaClasses['java.lang.ModuleLayer$Controller']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_lang_reflect_RecordComponent = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.lang.reflect.RecordComponent'
    getName(): string
    toString(): string
    getAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getDeclaredAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getGenericSignature(): string
    getGenericType(): AllJavaClasses['java.lang.reflect.Type']['instanceObject']
    getType(): AllJavaClasses['java.lang.Class']['instanceObject']
    getAnnotatedType(): AllJavaClasses['java.lang.reflect.AnnotatedType']['instanceObject']
    getDeclaringRecord(): AllJavaClasses['java.lang.Class']['instanceObject']
    getAccessor(): AllJavaClasses['java.lang.reflect.Method']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.reflect.AnnotatedElement']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_nio_charset_CharsetDecoder = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.charset.CharsetDecoder'
    reset(): AllJavaClasses['java.nio.charset.CharsetDecoder']['instanceObject']
    maxCharsPerByte(): number
    onMalformedInput(
      arg0: AllJavaClasses['java.nio.charset.CodingErrorAction']['instanceObject'],
    ): AllJavaClasses['java.nio.charset.CharsetDecoder']['instanceObject']
    onUnmappableCharacter(
      arg0: AllJavaClasses['java.nio.charset.CodingErrorAction']['instanceObject'],
    ): AllJavaClasses['java.nio.charset.CharsetDecoder']['instanceObject']
    decode(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    decode(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
      arg1: AllJavaClasses['java.nio.CharBuffer']['instanceObject'],
      arg2: boolean,
    ): AllJavaClasses['java.nio.charset.CoderResult']['instanceObject']
    flush(
      arg0: AllJavaClasses['java.nio.CharBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.charset.CoderResult']['instanceObject']
    charset(): AllJavaClasses['java.nio.charset.Charset']['instanceObject']
    replacement(): string
    malformedInputAction(): AllJavaClasses['java.nio.charset.CodingErrorAction']['instanceObject']
    unmappableCharacterAction(): AllJavaClasses['java.nio.charset.CodingErrorAction']['instanceObject']
    replaceWith(
      arg0: string,
    ): AllJavaClasses['java.nio.charset.CharsetDecoder']['instanceObject']
    averageCharsPerByte(): number
    isAutoDetecting(): boolean
    isCharsetDetected(): boolean
    detectedCharset(): AllJavaClasses['java.nio.charset.Charset']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_charset_CodingErrorAction = {
  staticObject: {
    IGNORE: AllJavaClasses['java.nio.charset.CodingErrorAction']['instanceObject']
    REPLACE: AllJavaClasses['java.nio.charset.CodingErrorAction']['instanceObject']
    REPORT: AllJavaClasses['java.nio.charset.CodingErrorAction']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.nio.charset.CodingErrorAction'
    toString(): string
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_charset_CoderResult = {
  staticObject: {
    UNDERFLOW: AllJavaClasses['java.nio.charset.CoderResult']['instanceObject']
    OVERFLOW: AllJavaClasses['java.nio.charset.CoderResult']['instanceObject']
    unmappableForLength(
      arg0: number,
    ): AllJavaClasses['java.nio.charset.CoderResult']['instanceObject']
    malformedForLength(
      arg0: number,
    ): AllJavaClasses['java.nio.charset.CoderResult']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.nio.charset.CoderResult'
    length(): number
    toString(): string
    isUnderflow(): boolean
    throwException(): void
    isOverflow(): boolean
    isError(): boolean
    isMalformed(): boolean
    isUnmappable(): boolean
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_charset_CharsetEncoder = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.charset.CharsetEncoder'
    reset(): AllJavaClasses['java.nio.charset.CharsetEncoder']['instanceObject']
    onMalformedInput(
      arg0: AllJavaClasses['java.nio.charset.CodingErrorAction']['instanceObject'],
    ): AllJavaClasses['java.nio.charset.CharsetEncoder']['instanceObject']
    onUnmappableCharacter(
      arg0: AllJavaClasses['java.nio.charset.CodingErrorAction']['instanceObject'],
    ): AllJavaClasses['java.nio.charset.CharsetEncoder']['instanceObject']
    maxBytesPerChar(): number
    encode(
      arg0: AllJavaClasses['java.nio.CharBuffer']['instanceObject'],
      arg1: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
      arg2: boolean,
    ): AllJavaClasses['java.nio.charset.CoderResult']['instanceObject']
    encode(
      arg0: AllJavaClasses['java.nio.CharBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    flush(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.charset.CoderResult']['instanceObject']
    canEncode(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): boolean
    canEncode(arg0: AllJavaClasses['char']['instanceObject']): boolean
    charset(): AllJavaClasses['java.nio.charset.Charset']['instanceObject']
    replacement(): number[]
    isLegalReplacement(arg0: number[]): boolean
    malformedInputAction(): AllJavaClasses['java.nio.charset.CodingErrorAction']['instanceObject']
    unmappableCharacterAction(): AllJavaClasses['java.nio.charset.CodingErrorAction']['instanceObject']
    averageBytesPerChar(): number
    replaceWith(
      arg0: number[],
    ): AllJavaClasses['java.nio.charset.CharsetEncoder']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_util_SortedMap = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.SortedMap'
    values(): AllJavaClasses['java.util.Collection']['instanceObject']
    entrySet(): AllJavaClasses['java.util.Set']['instanceObject']
    keySet(): AllJavaClasses['java.util.Set']['instanceObject']
    reversed(): AllJavaClasses['java.util.SortedMap']['instanceObject']
    reversed(): AllJavaClasses['java.util.SequencedMap']['instanceObject']
    comparator(): AllJavaClasses['java.util.Comparator']['instanceObject']
    firstKey(): AllJavaClasses['java.lang.Object']['instanceObject']
    putFirst(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    putLast(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    subMap(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.SortedMap']['instanceObject']
    headMap(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.SortedMap']['instanceObject']
    tailMap(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.SortedMap']['instanceObject']
    lastKey(): AllJavaClasses['java.lang.Object']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.SequencedMap']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_SequencedMap = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.SequencedMap'
    reversed(): AllJavaClasses['java.util.SequencedMap']['instanceObject']
    sequencedKeySet(): AllJavaClasses['java.util.SequencedSet']['instanceObject']
    sequencedValues(): AllJavaClasses['java.util.SequencedCollection']['instanceObject']
    sequencedEntrySet(): AllJavaClasses['java.util.SequencedSet']['instanceObject']
    putFirst(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    putLast(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    firstEntry(): AllJavaClasses['java.util.Map$Entry']['instanceObject']
    lastEntry(): AllJavaClasses['java.util.Map$Entry']['instanceObject']
    pollFirstEntry(): AllJavaClasses['java.util.Map$Entry']['instanceObject']
    pollLastEntry(): AllJavaClasses['java.util.Map$Entry']['instanceObject']
  } & Omit<AllJavaClasses['java.util.Map']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_util_SequencedSet = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.util.SequencedSet'
    reversed(): AllJavaClasses['java.util.SequencedSet']['instanceObject']
    reversed(): AllJavaClasses['java.util.SequencedCollection']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.SequencedCollection']['instanceObject'],
    '__javaClass'
  >) &
    Omit<AllJavaClasses['java.util.Set']['instanceObject'], '__javaClass'>
}
type AllJavaClass_io_netty_util_Attribute = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.util.Attribute'
    remove(): void
    get(): AllJavaClasses['java.lang.Object']['instanceObject']
    set(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
    key(): AllJavaClasses['io.netty.util.AttributeKey']['instanceObject']
    compareAndSet(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    getAndSet(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getAndRemove(): AllJavaClasses['java.lang.Object']['instanceObject']
    setIfAbsent(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_io_netty_util_AttributeKey = {
  staticObject: {
    valueOf(
      arg0: string,
    ): AllJavaClasses['io.netty.util.AttributeKey']['instanceObject']
    valueOf(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['io.netty.util.AttributeKey']['instanceObject']
    newInstance(
      arg0: string,
    ): AllJavaClasses['io.netty.util.AttributeKey']['instanceObject']
    exists(arg0: string): boolean
  }
  instanceObject: { __javaClass: 'io.netty.util.AttributeKey' } & Omit<
    AllJavaClasses['io.netty.util.AbstractConstant']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_io_netty_util_AbstractConstant = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'io.netty.util.AbstractConstant'
    name(): string
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['io.netty.util.AbstractConstant']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    id(): number
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['io.netty.util.Constant']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_io_netty_util_Constant = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.util.Constant'
    name(): string
    id(): number
  } & Omit<
    AllJavaClasses['java.lang.Comparable']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_io_netty_channel_Channel = {
  staticObject: object
  instanceObject: (({
    __javaClass: 'io.netty.channel.Channel'
    parent(): AllJavaClasses['io.netty.channel.Channel']['instanceObject']
    flush(): AllJavaClasses['io.netty.channel.Channel']['instanceObject']
    isOpen(): boolean
    isRegistered(): boolean
    id(): AllJavaClasses['io.netty.channel.ChannelId']['instanceObject']
    unsafe(): AllJavaClasses['io.netty.channel.Channel$Unsafe']['instanceObject']
    read(): AllJavaClasses['io.netty.channel.Channel']['instanceObject']
    isActive(): boolean
    config(): AllJavaClasses['io.netty.channel.ChannelConfig']['instanceObject']
    isWritable(): boolean
    localAddress(): AllJavaClasses['java.net.SocketAddress']['instanceObject']
    remoteAddress(): AllJavaClasses['java.net.SocketAddress']['instanceObject']
    closeFuture(): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    bytesBeforeWritable(): number
    bytesBeforeUnwritable(): number
    eventLoop(): AllJavaClasses['io.netty.channel.EventLoop']['instanceObject']
    metadata(): AllJavaClasses['io.netty.channel.ChannelMetadata']['instanceObject']
    alloc(): AllJavaClasses['io.netty.buffer.ByteBufAllocator']['instanceObject']
    pipeline(): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
  } & Omit<
    AllJavaClasses['io.netty.util.AttributeMap']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['io.netty.channel.ChannelOutboundInvoker']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_io_netty_channel_ChannelId = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'io.netty.channel.ChannelId'
    asShortText(): string
    asLongText(): string
  } & Omit<
    AllJavaClasses['java.io.Serializable']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_io_netty_channel_Channel$Unsafe = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.channel.Channel$Unsafe'
    flush(): void
    register(
      arg0: AllJavaClasses['io.netty.channel.EventLoop']['instanceObject'],
      arg1: AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject'],
    ): void
    write(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject'],
    ): void
    connect(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
      arg1: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
      arg2: AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject'],
    ): void
    close(
      arg0: AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject'],
    ): void
    bind(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
      arg1: AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject'],
    ): void
    localAddress(): AllJavaClasses['java.net.SocketAddress']['instanceObject']
    voidPromise(): AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject']
    remoteAddress(): AllJavaClasses['java.net.SocketAddress']['instanceObject']
    recvBufAllocHandle(): AllJavaClasses['io.netty.channel.RecvByteBufAllocator$Handle']['instanceObject']
    closeForcibly(): void
    outboundBuffer(): AllJavaClasses['io.netty.channel.ChannelOutboundBuffer']['instanceObject']
    disconnect(
      arg0: AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject'],
    ): void
    deregister(
      arg0: AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject'],
    ): void
    beginRead(): void
  }
}
type AllJavaClass_io_netty_channel_EventLoop = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'io.netty.channel.EventLoop'
    parent(): AllJavaClasses['io.netty.channel.EventLoopGroup']['instanceObject']
  } & Omit<
    AllJavaClasses['io.netty.util.concurrent.OrderedEventExecutor']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['io.netty.channel.EventLoopGroup']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_io_netty_channel_EventLoopGroup = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.channel.EventLoopGroup'
    next(): AllJavaClasses['io.netty.channel.EventLoop']['instanceObject']
    register(
      arg0: AllJavaClasses['io.netty.channel.Channel']['instanceObject'],
      arg1: AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    register(
      arg0: AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    register(
      arg0: AllJavaClasses['io.netty.channel.Channel']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
  } & Omit<
    AllJavaClasses['io.netty.util.concurrent.EventExecutorGroup']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_io_netty_channel_ChannelFuture = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.channel.ChannelFuture'
    await(): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    isVoid(): boolean
    sync(): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    channel(): AllJavaClasses['io.netty.channel.Channel']['instanceObject']
    awaitUninterruptibly(): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    addListener(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    addListeners(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'][],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    removeListeners(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'][],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    removeListener(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    syncUninterruptibly(): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
  } & Omit<
    AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_io_netty_util_concurrent_GenericFutureListener = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.util.concurrent.GenericFutureListener'
    operationComplete(
      arg0: AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject'],
    ): void
  } & Omit<
    AllJavaClasses['java.util.EventListener']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_io_netty_util_concurrent_Future = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.util.concurrent.Future'
    cause(): AllJavaClasses['java.lang.Throwable']['instanceObject']
    cancel(arg0: boolean): boolean
    await(
      arg0: number,
      arg1: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): boolean
    await(): AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject']
    await(arg0: number): boolean
    sync(): AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject']
    awaitUninterruptibly(): AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject']
    awaitUninterruptibly(arg0: number): boolean
    awaitUninterruptibly(
      arg0: number,
      arg1: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): boolean
    addListener(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject']
    addListeners(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'][],
    ): AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject']
    removeListeners(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'][],
    ): AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject']
    removeListener(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject']
    syncUninterruptibly(): AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject']
    isCancellable(): boolean
    getNow(): AllJavaClasses['java.lang.Object']['instanceObject']
    isSuccess(): boolean
  } & Omit<
    AllJavaClasses['java.util.concurrent.Future']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_EventListener = {
  staticObject: object
  instanceObject: { __javaClass: 'java.util.EventListener' }
}
type AllJavaClass_io_netty_channel_ChannelPromise = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'io.netty.channel.ChannelPromise'
    await(): AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject']
    sync(): AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject']
    channel(): AllJavaClasses['io.netty.channel.Channel']['instanceObject']
    awaitUninterruptibly(): AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject']
    addListener(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject']
    addListeners(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'][],
    ): AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject']
    removeListeners(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'][],
    ): AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject']
    removeListener(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject']
    syncUninterruptibly(): AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject']
    setSuccess(
      arg0: void,
    ): AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject']
    setSuccess(): AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject']
    trySuccess(): boolean
    unvoid(): AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject']
    setFailure(
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject']
  } & Omit<
    AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['io.netty.util.concurrent.Promise']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_io_netty_util_concurrent_Promise = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.util.concurrent.Promise'
    await(): AllJavaClasses['io.netty.util.concurrent.Promise']['instanceObject']
    sync(): AllJavaClasses['io.netty.util.concurrent.Promise']['instanceObject']
    awaitUninterruptibly(): AllJavaClasses['io.netty.util.concurrent.Promise']['instanceObject']
    addListener(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.Promise']['instanceObject']
    addListeners(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'][],
    ): AllJavaClasses['io.netty.util.concurrent.Promise']['instanceObject']
    removeListeners(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'][],
    ): AllJavaClasses['io.netty.util.concurrent.Promise']['instanceObject']
    removeListener(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.Promise']['instanceObject']
    syncUninterruptibly(): AllJavaClasses['io.netty.util.concurrent.Promise']['instanceObject']
    setUncancellable(): boolean
    setSuccess(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.Promise']['instanceObject']
    tryFailure(
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): boolean
    trySuccess(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    setFailure(
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.Promise']['instanceObject']
  } & Omit<
    AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_io_netty_util_concurrent_EventExecutorGroup = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'io.netty.util.concurrent.EventExecutorGroup'
    shutdown(): void
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    next(): AllJavaClasses['io.netty.util.concurrent.EventExecutor']['instanceObject']
    schedule(
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.ScheduledFuture']['instanceObject']
    schedule(
      arg0: AllJavaClasses['java.util.concurrent.Callable']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.ScheduledFuture']['instanceObject']
    submit(
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject']
    submit(
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject']
    submit(
      arg0: AllJavaClasses['java.util.concurrent.Callable']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject']
    shutdownNow(): AllJavaClasses['java.util.List']['instanceObject']
    isShuttingDown(): boolean
    terminationFuture(): AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject']
    shutdownGracefully(): AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject']
    shutdownGracefully(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject']
    scheduleWithFixedDelay(
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.ScheduledFuture']['instanceObject']
    scheduleAtFixedRate(
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.ScheduledFuture']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.concurrent.ScheduledExecutorService']['instanceObject'],
    '__javaClass'
  >) &
    Omit<AllJavaClasses['java.lang.Iterable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_io_netty_util_concurrent_EventExecutor = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.util.concurrent.EventExecutor'
    parent(): AllJavaClasses['io.netty.util.concurrent.EventExecutorGroup']['instanceObject']
    next(): AllJavaClasses['io.netty.util.concurrent.EventExecutor']['instanceObject']
    newSucceededFuture(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject']
    newFailedFuture(
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject']
    inEventLoop(): boolean
    inEventLoop(
      arg0: AllJavaClasses['java.lang.Thread']['instanceObject'],
    ): boolean
    newProgressivePromise(): AllJavaClasses['io.netty.util.concurrent.ProgressivePromise']['instanceObject']
    newPromise(): AllJavaClasses['io.netty.util.concurrent.Promise']['instanceObject']
  } & Omit<
    AllJavaClasses['io.netty.util.concurrent.EventExecutorGroup']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_io_netty_util_concurrent_ProgressivePromise = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'io.netty.util.concurrent.ProgressivePromise'
    await(): AllJavaClasses['io.netty.util.concurrent.ProgressivePromise']['instanceObject']
    sync(): AllJavaClasses['io.netty.util.concurrent.ProgressivePromise']['instanceObject']
    awaitUninterruptibly(): AllJavaClasses['io.netty.util.concurrent.ProgressivePromise']['instanceObject']
    addListener(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.ProgressivePromise']['instanceObject']
    addListeners(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'][],
    ): AllJavaClasses['io.netty.util.concurrent.ProgressivePromise']['instanceObject']
    removeListeners(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'][],
    ): AllJavaClasses['io.netty.util.concurrent.ProgressivePromise']['instanceObject']
    removeListener(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.ProgressivePromise']['instanceObject']
    syncUninterruptibly(): AllJavaClasses['io.netty.util.concurrent.ProgressivePromise']['instanceObject']
    tryProgress(arg0: number, arg1: number): boolean
    setProgress(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.util.concurrent.ProgressivePromise']['instanceObject']
    setSuccess(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.ProgressivePromise']['instanceObject']
    setFailure(
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.ProgressivePromise']['instanceObject']
  } & Omit<
    AllJavaClasses['io.netty.util.concurrent.Promise']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['io.netty.util.concurrent.ProgressiveFuture']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_io_netty_util_concurrent_ProgressiveFuture = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.util.concurrent.ProgressiveFuture'
    await(): AllJavaClasses['io.netty.util.concurrent.ProgressiveFuture']['instanceObject']
    sync(): AllJavaClasses['io.netty.util.concurrent.ProgressiveFuture']['instanceObject']
    awaitUninterruptibly(): AllJavaClasses['io.netty.util.concurrent.ProgressiveFuture']['instanceObject']
    addListener(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.ProgressiveFuture']['instanceObject']
    addListeners(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'][],
    ): AllJavaClasses['io.netty.util.concurrent.ProgressiveFuture']['instanceObject']
    removeListeners(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'][],
    ): AllJavaClasses['io.netty.util.concurrent.ProgressiveFuture']['instanceObject']
    removeListener(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'],
    ): AllJavaClasses['io.netty.util.concurrent.ProgressiveFuture']['instanceObject']
    syncUninterruptibly(): AllJavaClasses['io.netty.util.concurrent.ProgressiveFuture']['instanceObject']
  } & Omit<
    AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_io_netty_util_concurrent_ScheduledFuture = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'io.netty.util.concurrent.ScheduledFuture'
  } & Omit<
    AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.util.concurrent.ScheduledFuture']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_util_concurrent_ScheduledFuture = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.util.concurrent.ScheduledFuture'
  } & Omit<
    AllJavaClasses['java.util.concurrent.Delayed']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.util.concurrent.Future']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_util_concurrent_Delayed = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.concurrent.Delayed'
    getDelay(
      arg0: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): number
  } & Omit<
    AllJavaClasses['java.lang.Comparable']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_concurrent_ScheduledExecutorService = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.concurrent.ScheduledExecutorService'
    schedule(
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): AllJavaClasses['java.util.concurrent.ScheduledFuture']['instanceObject']
    schedule(
      arg0: AllJavaClasses['java.util.concurrent.Callable']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): AllJavaClasses['java.util.concurrent.ScheduledFuture']['instanceObject']
    scheduleWithFixedDelay(
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): AllJavaClasses['java.util.concurrent.ScheduledFuture']['instanceObject']
    scheduleAtFixedRate(
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): AllJavaClasses['java.util.concurrent.ScheduledFuture']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.concurrent.ExecutorService']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_io_netty_util_concurrent_OrderedEventExecutor = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.util.concurrent.OrderedEventExecutor'
  } & Omit<
    AllJavaClasses['io.netty.util.concurrent.EventExecutor']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_io_netty_channel_RecvByteBufAllocator$Handle = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.channel.RecvByteBufAllocator$Handle'
    reset(
      arg0: AllJavaClasses['io.netty.channel.ChannelConfig']['instanceObject'],
    ): void
    allocate(
      arg0: AllJavaClasses['io.netty.buffer.ByteBufAllocator']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    continueReading(): boolean
    lastBytesRead(): number
    lastBytesRead(arg0: number): void
    attemptedBytesRead(): number
    attemptedBytesRead(arg0: number): void
    readComplete(): void
    incMessagesRead(arg0: number): void
    guess(): number
  }
}
type AllJavaClass_io_netty_channel_ChannelConfig = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.channel.ChannelConfig'
    setWriteSpinCount(
      arg0: number,
    ): AllJavaClasses['io.netty.channel.ChannelConfig']['instanceObject']
    getAllocator(): AllJavaClasses['io.netty.buffer.ByteBufAllocator']['instanceObject']
    setAllocator(
      arg0: AllJavaClasses['io.netty.buffer.ByteBufAllocator']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelConfig']['instanceObject']
    setAutoRead(
      arg0: boolean,
    ): AllJavaClasses['io.netty.channel.ChannelConfig']['instanceObject']
    setAutoClose(
      arg0: boolean,
    ): AllJavaClasses['io.netty.channel.ChannelConfig']['instanceObject']
    getWriteSpinCount(): number
    isAutoClose(): boolean
    getRecvByteBufAllocator(): AllJavaClasses['io.netty.channel.RecvByteBufAllocator']['instanceObject']
    setWriteBufferLowWaterMark(
      arg0: number,
    ): AllJavaClasses['io.netty.channel.ChannelConfig']['instanceObject']
    getMessageSizeEstimator(): AllJavaClasses['io.netty.channel.MessageSizeEstimator']['instanceObject']
    setConnectTimeoutMillis(
      arg0: number,
    ): AllJavaClasses['io.netty.channel.ChannelConfig']['instanceObject']
    setMaxMessagesPerRead(
      arg0: number,
    ): AllJavaClasses['io.netty.channel.ChannelConfig']['instanceObject']
    setMessageSizeEstimator(
      arg0: AllJavaClasses['io.netty.channel.MessageSizeEstimator']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelConfig']['instanceObject']
    getConnectTimeoutMillis(): number
    setRecvByteBufAllocator(
      arg0: AllJavaClasses['io.netty.channel.RecvByteBufAllocator']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelConfig']['instanceObject']
    getWriteBufferWaterMark(): AllJavaClasses['io.netty.channel.WriteBufferWaterMark']['instanceObject']
    setWriteBufferWaterMark(
      arg0: AllJavaClasses['io.netty.channel.WriteBufferWaterMark']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelConfig']['instanceObject']
    getWriteBufferLowWaterMark(): number
    getMaxMessagesPerRead(): number
    setWriteBufferHighWaterMark(
      arg0: number,
    ): AllJavaClasses['io.netty.channel.ChannelConfig']['instanceObject']
    getWriteBufferHighWaterMark(): number
    getOptions(): AllJavaClasses['java.util.Map']['instanceObject']
    isAutoRead(): boolean
    getOption(
      arg0: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    setOptions(arg0: AllJavaClasses['java.util.Map']['instanceObject']): boolean
    setOption(
      arg0: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
  }
}
type AllJavaClass_io_netty_buffer_ByteBufAllocator = {
  staticObject: {
    DEFAULT: AllJavaClasses['io.netty.buffer.ByteBufAllocator']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'io.netty.buffer.ByteBufAllocator'
    buffer(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    buffer(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    buffer(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    directBuffer(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    directBuffer(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    directBuffer(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    compositeBuffer(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    compositeBuffer(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    ioBuffer(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    ioBuffer(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    ioBuffer(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    heapBuffer(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    heapBuffer(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    heapBuffer(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    compositeHeapBuffer(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    compositeHeapBuffer(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    compositeDirectBuffer(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    compositeDirectBuffer(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    calculateNewCapacity(arg0: number, arg1: number): number
    isDirectBufferPooled(): boolean
  }
}
type AllJavaClass_io_netty_buffer_ByteBuf = {
  staticObject: {
    new (): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
  }
  instanceObject: ((({
    __javaClass: 'io.netty.buffer.ByteBuf'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): string
    toString(
      arg0: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): string
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    indexOf(arg0: number, arg1: number, arg2: number): number
    getBoolean(arg0: number): boolean
    getByte(arg0: number): number
    getShort(arg0: number): number
    getChar(arg0: number): AllJavaClasses['char']['instanceObject']
    getInt(arg0: number): number
    getLong(arg0: number): number
    getFloat(arg0: number): number
    getDouble(arg0: number): number
    clear(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.channels.GatheringByteChannel']['instanceObject'],
      arg2: number,
    ): number
    getBytes(
      arg0: number,
      arg1: number[],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.channels.FileChannel']['instanceObject'],
      arg2: number,
      arg3: number,
    ): number
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    isDirect(): boolean
    hasArray(): boolean
    array(): number[]
    arrayOffset(): number
    writeInt(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readInt(): number
    setBoolean(
      arg0: number,
      arg1: boolean,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setByte(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setChar(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setShort(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setInt(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setLong(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setFloat(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setDouble(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    copy(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    copy(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    unwrap(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    capacity(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    capacity(): number
    isReadOnly(): boolean
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    slice(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    duplicate(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['java.nio.channels.GatheringByteChannel']['instanceObject'],
      arg1: number,
    ): number
    readBytes(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['java.nio.channels.FileChannel']['instanceObject'],
      arg1: number,
      arg2: number,
    ): number
    readBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: number[],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: number[],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
      arg1: number,
    ): number
    writeBytes(
      arg0: AllJavaClasses['java.nio.channels.ScatteringByteChannel']['instanceObject'],
      arg1: number,
    ): number
    writeBytes(
      arg0: AllJavaClasses['java.nio.channels.FileChannel']['instanceObject'],
      arg1: number,
      arg2: number,
    ): number
    writeBytes(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    order(): AllJavaClasses['java.nio.ByteOrder']['instanceObject']
    order(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeChar(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readChar(): AllJavaClasses['char']['instanceObject']
    writeFloat(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readFloat(): number
    skipBytes(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBoolean(): boolean
    readByte(): number
    readUnsignedByte(): number
    readShort(): number
    readUnsignedShort(): number
    readLong(): number
    readDouble(): number
    getUnsignedShort(arg0: number): number
    writeBoolean(
      arg0: boolean,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeByte(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeShort(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeLong(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeDouble(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    isReadable(): boolean
    isReadable(arg0: number): boolean
    isWritable(): boolean
    isWritable(arg0: number): boolean
    setIndex(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    alloc(): AllJavaClasses['io.netty.buffer.ByteBufAllocator']['instanceObject']
    readableBytes(): number
    nioBufferCount(): number
    maxCapacity(): number
    markReaderIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    resetReaderIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    markWriterIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    internalNioBuffer(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    readerIndex(): number
    readerIndex(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    resetWriterIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    discardReadBytes(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    ensureWritable(arg0: number, arg1: boolean): number
    ensureWritable(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getUnsignedByte(arg0: number): number
    getUnsignedShortLE(arg0: number): number
    getUnsignedMedium(arg0: number): number
    getMediumLE(arg0: number): number
    writableBytes(): number
    maxWritableBytes(): number
    writerIndex(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writerIndex(): number
    readMediumLE(): number
    writeMedium(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readShortLE(): number
    bytesBefore(arg0: number, arg1: number, arg2: number): number
    bytesBefore(arg0: number, arg1: number): number
    bytesBefore(arg0: number): number
    retainedDuplicate(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeFloatLE(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getCharSequence(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): AllJavaClasses['java.lang.CharSequence']['instanceObject']
    setDoubleLE(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readDoubleLE(): number
    forEachByteDesc(
      arg0: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject'],
    ): number
    forEachByteDesc(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject'],
    ): number
    readCharSequence(
      arg0: number,
      arg1: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): AllJavaClasses['java.lang.CharSequence']['instanceObject']
    getUnsignedInt(arg0: number): number
    getDoubleLE(arg0: number): number
    forEachByte(
      arg0: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject'],
    ): number
    forEachByte(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject'],
    ): number
    writeMediumLE(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeShortLE(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    hasMemoryAddress(): boolean
    readUnsignedInt(): number
    readRetainedSlice(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    retainedSlice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    retainedSlice(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setCharSequence(
      arg0: number,
      arg1: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg2: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): number
    writeLongLE(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readUnsignedIntLE(): number
    readFloatLE(): number
    setMediumLE(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readUnsignedMedium(): number
    memoryAddress(): number
    writeDoubleLE(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getUnsignedIntLE(arg0: number): number
    writeCharSequence(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): number
    isContiguous(): boolean
    getIntLE(arg0: number): number
    setShortLE(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeIntLE(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setFloatLE(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: number[],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['java.io.InputStream']['instanceObject'],
      arg2: number,
    ): number
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.channels.FileChannel']['instanceObject'],
      arg2: number,
      arg3: number,
    ): number
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.channels.ScatteringByteChannel']['instanceObject'],
      arg2: number,
    ): number
    writeZero(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    nioBuffer(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    nioBuffer(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    setIntLE(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setLongLE(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readMedium(): number
    readIntLE(): number
    readLongLE(): number
    asByteBuf(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    retain(
      arg0: number,
    ): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    retain(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    retain(): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    retain(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getShortLE(arg0: number): number
    setZero(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    touch(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    touch(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    touch(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    touch(): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    nioBuffers(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][]
    nioBuffers(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][]
    getMedium(arg0: number): number
    getLongLE(arg0: number): number
    getFloatLE(arg0: number): number
    setMedium(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readSlice(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    maxFastWritableBytes(): number
    discardSomeReadBytes(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readUnsignedMediumLE(): number
    getUnsignedMediumLE(arg0: number): number
    readUnsignedShortLE(): number
    asReadOnly(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['io.netty.buffer.ByteBufConvertible']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_io_netty_util_ByteProcessor = {
  staticObject: {
    FIND_NUL: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject']
    FIND_NON_NUL: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject']
    FIND_CR: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject']
    FIND_NON_CR: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject']
    FIND_LF: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject']
    FIND_NON_LF: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject']
    FIND_SEMI_COLON: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject']
    FIND_COMMA: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject']
    FIND_ASCII_SPACE: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject']
    FIND_CRLF: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject']
    FIND_NON_CRLF: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject']
    FIND_LINEAR_WHITESPACE: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject']
    FIND_NON_LINEAR_WHITESPACE: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'io.netty.util.ByteProcessor'
    process(arg0: number): boolean
  }
}
type AllJavaClass_io_netty_util_ReferenceCounted = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.util.ReferenceCounted'
    release(): boolean
    release(arg0: number): boolean
    retain(): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    retain(
      arg0: number,
    ): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    refCnt(): number
    touch(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    touch(): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
  }
}
type AllJavaClass_io_netty_buffer_ByteBufConvertible = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.buffer.ByteBufConvertible'
    asByteBuf(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
  }
}
type AllJavaClass_io_netty_buffer_CompositeByteBuf = {
  staticObject: {
    new (
      arg0: AllJavaClasses['io.netty.buffer.ByteBufAllocator']['instanceObject'],
      arg1: boolean,
      arg2: number,
      arg3: AllJavaClasses['java.lang.Iterable']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    new (
      arg0: AllJavaClasses['io.netty.buffer.ByteBufAllocator']['instanceObject'],
      arg1: boolean,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    new (
      arg0: AllJavaClasses['io.netty.buffer.ByteBufAllocator']['instanceObject'],
      arg1: boolean,
      arg2: number,
      arg3: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'][],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'io.netty.buffer.CompositeByteBuf'
    toString(): string
    getByte(arg0: number): number
    clear(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    clear(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: number[],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.channels.GatheringByteChannel']['instanceObject'],
      arg2: number,
    ): number
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.channels.FileChannel']['instanceObject'],
      arg2: number,
      arg3: number,
    ): number
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: number[],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    component(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    isDirect(): boolean
    hasArray(): boolean
    array(): number[]
    arrayOffset(): number
    writeInt(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeInt(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setBoolean(
      arg0: number,
      arg1: boolean,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setBoolean(
      arg0: number,
      arg1: boolean,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setByte(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setByte(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setChar(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setChar(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setShort(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setShort(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setInt(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setInt(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setLong(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setLong(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setFloat(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setFloat(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setDouble(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setDouble(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    copy(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    unwrap(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    capacity(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    capacity(): number
    capacity(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    readBytes(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    readBytes(
      arg0: number[],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    readBytes(
      arg0: number[],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeBytes(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: number[],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: number[],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeBytes(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    order(): AllJavaClasses['java.nio.ByteOrder']['instanceObject']
    writeChar(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeChar(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeFloat(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeFloat(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    skipBytes(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    skipBytes(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeBoolean(
      arg0: boolean,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeBoolean(
      arg0: boolean,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeByte(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeByte(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeShort(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeShort(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeLong(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeLong(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeDouble(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeDouble(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setIndex(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setIndex(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    alloc(): AllJavaClasses['io.netty.buffer.ByteBufAllocator']['instanceObject']
    decompose(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.util.List']['instanceObject']
    nioBufferCount(): number
    markReaderIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    markReaderIndex(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    resetReaderIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    resetReaderIndex(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    markWriterIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    markWriterIndex(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    internalNioBuffer(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    readerIndex(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    readerIndex(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    resetWriterIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    resetWriterIndex(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    discardReadBytes(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    discardReadBytes(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    ensureWritable(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    ensureWritable(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writerIndex(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writerIndex(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    maxNumComponents(): number
    writeMedium(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeMedium(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    addComponent(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    addComponent(
      arg0: boolean,
      arg1: number,
      arg2: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    addComponent(
      arg0: boolean,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    addComponent(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    addComponents(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'][],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    addComponents(
      arg0: boolean,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'][],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    addComponents(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Iterable']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    addComponents(
      arg0: boolean,
      arg1: AllJavaClasses['java.lang.Iterable']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    addComponents(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'][],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    addComponents(
      arg0: AllJavaClasses['java.lang.Iterable']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    hasMemoryAddress(): boolean
    memoryAddress(): number
    componentAtOffset(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    removeComponent(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    internalComponent(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    numComponents(): number
    toByteIndex(arg0: number): number
    consolidate(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    consolidate(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    toComponentIndex(arg0: number): number
    removeComponents(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['java.io.InputStream']['instanceObject'],
      arg2: number,
    ): number
    setBytes(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: number[],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: number[],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.channels.FileChannel']['instanceObject'],
      arg2: number,
      arg3: number,
    ): number
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.channels.ScatteringByteChannel']['instanceObject'],
      arg2: number,
    ): number
    writeZero(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeZero(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    nioBuffer(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    retain(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    retain(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    retain(
      arg0: number,
    ): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    retain(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    retain(): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    retain(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setZero(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setZero(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    touch(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    touch(): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    touch(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    touch(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    touch(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    touch(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    nioBuffers(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][]
    nioBuffers(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][]
    setMedium(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setMedium(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    discardSomeReadBytes(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    discardSomeReadBytes(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    addFlattenedComponents(
      arg0: boolean,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    internalComponentAtOffset(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    discardReadComponents(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
  } & Omit<
    AllJavaClasses['io.netty.buffer.AbstractReferenceCountedByteBuf']['instanceObject'],
    '__javaClass'
  >) &
    Omit<AllJavaClasses['java.lang.Iterable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_io_netty_buffer_AbstractReferenceCountedByteBuf = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.buffer.AbstractReferenceCountedByteBuf'
    release(): boolean
    release(arg0: number): boolean
    retain(): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    retain(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    retain(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    retain(
      arg0: number,
    ): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    refCnt(): number
    touch(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    touch(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    touch(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    touch(): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
  } & Omit<
    AllJavaClasses['io.netty.buffer.AbstractByteBuf']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_io_netty_buffer_AbstractByteBuf = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.buffer.AbstractByteBuf'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    toString(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): string
    toString(
      arg0: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): number
    indexOf(arg0: number, arg1: number, arg2: number): number
    getBoolean(arg0: number): boolean
    getByte(arg0: number): number
    getShort(arg0: number): number
    getChar(arg0: number): AllJavaClasses['char']['instanceObject']
    getInt(arg0: number): number
    getLong(arg0: number): number
    getFloat(arg0: number): number
    getDouble(arg0: number): number
    clear(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeInt(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readInt(): number
    setBoolean(
      arg0: number,
      arg1: boolean,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setByte(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setChar(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setShort(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setInt(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setLong(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setFloat(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setDouble(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    copy(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    isReadOnly(): boolean
    slice(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    duplicate(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: number[],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['java.nio.channels.GatheringByteChannel']['instanceObject'],
      arg1: number,
    ): number
    readBytes(
      arg0: AllJavaClasses['java.nio.channels.FileChannel']['instanceObject'],
      arg1: number,
      arg2: number,
    ): number
    readBytes(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['java.nio.channels.ScatteringByteChannel']['instanceObject'],
      arg1: number,
    ): number
    writeBytes(
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
      arg1: number,
    ): number
    writeBytes(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: number[],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['java.nio.channels.FileChannel']['instanceObject'],
      arg1: number,
      arg2: number,
    ): number
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    order(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeChar(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readChar(): AllJavaClasses['char']['instanceObject']
    writeFloat(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readFloat(): number
    skipBytes(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBoolean(): boolean
    readByte(): number
    readUnsignedByte(): number
    readShort(): number
    readUnsignedShort(): number
    readLong(): number
    readDouble(): number
    getUnsignedShort(arg0: number): number
    writeBoolean(
      arg0: boolean,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeByte(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeShort(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeLong(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeDouble(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    isReadable(): boolean
    isReadable(arg0: number): boolean
    isWritable(): boolean
    isWritable(arg0: number): boolean
    setIndex(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readableBytes(): number
    maxCapacity(): number
    markReaderIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    resetReaderIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    markWriterIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readerIndex(): number
    readerIndex(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    resetWriterIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    discardReadBytes(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    ensureWritable(arg0: number, arg1: boolean): number
    ensureWritable(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getUnsignedByte(arg0: number): number
    getUnsignedShortLE(arg0: number): number
    getUnsignedMedium(arg0: number): number
    getMediumLE(arg0: number): number
    writableBytes(): number
    maxWritableBytes(): number
    writerIndex(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writerIndex(): number
    readMediumLE(): number
    writeMedium(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readShortLE(): number
    bytesBefore(arg0: number, arg1: number): number
    bytesBefore(arg0: number, arg1: number, arg2: number): number
    bytesBefore(arg0: number): number
    retainedDuplicate(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getCharSequence(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): AllJavaClasses['java.lang.CharSequence']['instanceObject']
    forEachByteDesc(
      arg0: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject'],
    ): number
    forEachByteDesc(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject'],
    ): number
    readCharSequence(
      arg0: number,
      arg1: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): AllJavaClasses['java.lang.CharSequence']['instanceObject']
    getUnsignedInt(arg0: number): number
    forEachByte(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject'],
    ): number
    forEachByte(
      arg0: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject'],
    ): number
    writeMediumLE(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeShortLE(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readUnsignedInt(): number
    readRetainedSlice(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    retainedSlice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    retainedSlice(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setCharSequence(
      arg0: number,
      arg1: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg2: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): number
    writeLongLE(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readUnsignedIntLE(): number
    setMediumLE(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readUnsignedMedium(): number
    getUnsignedIntLE(arg0: number): number
    writeCharSequence(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): number
    getIntLE(arg0: number): number
    setShortLE(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeIntLE(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeZero(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    nioBuffer(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    setIntLE(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setLongLE(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readMedium(): number
    readIntLE(): number
    readLongLE(): number
    getShortLE(arg0: number): number
    setZero(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    nioBuffers(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][]
    getMedium(arg0: number): number
    getLongLE(arg0: number): number
    setMedium(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readSlice(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    discardSomeReadBytes(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readUnsignedMediumLE(): number
    getUnsignedMediumLE(arg0: number): number
    readUnsignedShortLE(): number
    asReadOnly(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
  } & Omit<
    AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_io_netty_channel_RecvByteBufAllocator = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.channel.RecvByteBufAllocator'
    newHandle(): AllJavaClasses['io.netty.channel.RecvByteBufAllocator$Handle']['instanceObject']
  }
}
type AllJavaClass_io_netty_channel_MessageSizeEstimator = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.channel.MessageSizeEstimator'
    newHandle(): AllJavaClasses['io.netty.channel.MessageSizeEstimator$Handle']['instanceObject']
  }
}
type AllJavaClass_io_netty_channel_MessageSizeEstimator$Handle = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.channel.MessageSizeEstimator$Handle'
    size(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): number
  }
}
type AllJavaClass_io_netty_channel_WriteBufferWaterMark = {
  staticObject: {
    DEFAULT: AllJavaClasses['io.netty.channel.WriteBufferWaterMark']['instanceObject']
    new (
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.channel.WriteBufferWaterMark']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'io.netty.channel.WriteBufferWaterMark'
    toString(): string
    high(): number
    low(): number
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_io_netty_channel_ChannelOption = {
  staticObject: {
    ALLOCATOR: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    RCVBUF_ALLOCATOR: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    MESSAGE_SIZE_ESTIMATOR: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    CONNECT_TIMEOUT_MILLIS: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    MAX_MESSAGES_PER_READ: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    MAX_MESSAGES_PER_WRITE: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    WRITE_SPIN_COUNT: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    WRITE_BUFFER_HIGH_WATER_MARK: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    WRITE_BUFFER_LOW_WATER_MARK: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    WRITE_BUFFER_WATER_MARK: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    ALLOW_HALF_CLOSURE: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    AUTO_READ: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    AUTO_CLOSE: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    SO_BROADCAST: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    SO_KEEPALIVE: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    SO_SNDBUF: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    SO_RCVBUF: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    SO_REUSEADDR: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    SO_LINGER: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    SO_BACKLOG: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    SO_TIMEOUT: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    IP_TOS: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    IP_MULTICAST_ADDR: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    IP_MULTICAST_IF: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    IP_MULTICAST_TTL: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    IP_MULTICAST_LOOP_DISABLED: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    TCP_NODELAY: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    TCP_FASTOPEN_CONNECT: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    TCP_FASTOPEN: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    DATAGRAM_CHANNEL_ACTIVE_ON_REGISTRATION: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    SINGLE_EVENTEXECUTOR_PER_GROUP: AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    valueOf(
      arg0: string,
    ): AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    valueOf(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    newInstance(
      arg0: string,
    ): AllJavaClasses['io.netty.channel.ChannelOption']['instanceObject']
    exists(arg0: string): boolean
  }
  instanceObject: {
    __javaClass: 'io.netty.channel.ChannelOption'
    validate(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
  } & Omit<
    AllJavaClasses['io.netty.util.AbstractConstant']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_io_netty_channel_ChannelOutboundBuffer = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.channel.ChannelOutboundBuffer'
    remove(
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): boolean
    remove(): boolean
    size(): number
    isEmpty(): boolean
    current(): AllJavaClasses['java.lang.Object']['instanceObject']
    isWritable(): boolean
    bytesBeforeWritable(): number
    bytesBeforeUnwritable(): number
    getUserDefinedWritability(arg0: number): boolean
    totalPendingWriteBytes(): number
    forEachFlushedMessage(
      arg0: AllJavaClasses['io.netty.channel.ChannelOutboundBuffer$MessageProcessor']['instanceObject'],
    ): void
    setUserDefinedWritability(arg0: number, arg1: boolean): void
    nioBufferSize(): number
    nioBufferCount(): number
    currentProgress(): number
    removeBytes(arg0: number): void
    recycle(): void
    addFlush(): void
    progress(arg0: number): void
    nioBuffers(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][]
    nioBuffers(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][]
    addMessage(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject'],
    ): void
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_io_netty_channel_ChannelOutboundBuffer$MessageProcessor = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.channel.ChannelOutboundBuffer$MessageProcessor'
    processMessage(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
  }
}
type AllJavaClass_io_netty_channel_ChannelMetadata = {
  staticObject: {
    new (
      arg0: boolean,
    ): AllJavaClasses['io.netty.channel.ChannelMetadata']['instanceObject']
    new (
      arg0: boolean,
      arg1: number,
    ): AllJavaClasses['io.netty.channel.ChannelMetadata']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'io.netty.channel.ChannelMetadata'
    defaultMaxMessagesPerRead(): number
    hasDisconnect(): boolean
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_io_netty_channel_ChannelPipeline = {
  staticObject: object
  instanceObject: (({
    __javaClass: 'io.netty.channel.ChannelPipeline'
    remove(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject']
    remove(
      arg0: AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    remove(
      arg0: string,
    ): AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject']
    get(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject']
    get(
      arg0: string,
    ): AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject']
    context(
      arg0: AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelHandlerContext']['instanceObject']
    context(
      arg0: string,
    ): AllJavaClasses['io.netty.channel.ChannelHandlerContext']['instanceObject']
    context(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelHandlerContext']['instanceObject']
    flush(): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    replace(
      arg0: string,
      arg1: string,
      arg2: AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject']
    replace(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject']
    replace(
      arg0: AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    last(): AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject']
    toMap(): AllJavaClasses['java.util.Map']['instanceObject']
    first(): AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject']
    names(): AllJavaClasses['java.util.List']['instanceObject']
    addFirst(
      arg0: string,
      arg1: AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    addFirst(
      arg0: AllJavaClasses['io.netty.util.concurrent.EventExecutorGroup']['instanceObject'],
      arg1: AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject'][],
    ): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    addFirst(
      arg0: AllJavaClasses['io.netty.util.concurrent.EventExecutorGroup']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    addFirst(
      arg0: AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject'][],
    ): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    addLast(
      arg0: AllJavaClasses['io.netty.util.concurrent.EventExecutorGroup']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    addLast(
      arg0: string,
      arg1: AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    addLast(
      arg0: AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject'][],
    ): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    addLast(
      arg0: AllJavaClasses['io.netty.util.concurrent.EventExecutorGroup']['instanceObject'],
      arg1: AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject'][],
    ): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    removeFirst(): AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject']
    removeLast(): AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject']
    channel(): AllJavaClasses['io.netty.channel.Channel']['instanceObject']
    fireChannelActive(): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    fireChannelRead(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    firstContext(): AllJavaClasses['io.netty.channel.ChannelHandlerContext']['instanceObject']
    lastContext(): AllJavaClasses['io.netty.channel.ChannelHandlerContext']['instanceObject']
    fireChannelWritabilityChanged(): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    fireExceptionCaught(
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    fireChannelInactive(): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    fireChannelUnregistered(): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    fireUserEventTriggered(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    fireChannelRegistered(): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    fireChannelReadComplete(): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    addBefore(
      arg0: AllJavaClasses['io.netty.util.concurrent.EventExecutorGroup']['instanceObject'],
      arg1: string,
      arg2: string,
      arg3: AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    addBefore(
      arg0: string,
      arg1: string,
      arg2: AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    addAfter(
      arg0: string,
      arg1: string,
      arg2: AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
    addAfter(
      arg0: AllJavaClasses['io.netty.util.concurrent.EventExecutorGroup']['instanceObject'],
      arg1: string,
      arg2: string,
      arg3: AllJavaClasses['io.netty.channel.ChannelHandler']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelPipeline']['instanceObject']
  } & Omit<
    AllJavaClasses['io.netty.channel.ChannelInboundInvoker']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['io.netty.channel.ChannelOutboundInvoker']['instanceObject'],
      '__javaClass'
    >) &
    Omit<AllJavaClasses['java.lang.Iterable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_io_netty_channel_ChannelInboundInvoker = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.channel.ChannelInboundInvoker'
    fireChannelActive(): AllJavaClasses['io.netty.channel.ChannelInboundInvoker']['instanceObject']
    fireChannelRead(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelInboundInvoker']['instanceObject']
    fireChannelWritabilityChanged(): AllJavaClasses['io.netty.channel.ChannelInboundInvoker']['instanceObject']
    fireExceptionCaught(
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelInboundInvoker']['instanceObject']
    fireChannelInactive(): AllJavaClasses['io.netty.channel.ChannelInboundInvoker']['instanceObject']
    fireChannelUnregistered(): AllJavaClasses['io.netty.channel.ChannelInboundInvoker']['instanceObject']
    fireUserEventTriggered(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelInboundInvoker']['instanceObject']
    fireChannelRegistered(): AllJavaClasses['io.netty.channel.ChannelInboundInvoker']['instanceObject']
    fireChannelReadComplete(): AllJavaClasses['io.netty.channel.ChannelInboundInvoker']['instanceObject']
  }
}
type AllJavaClass_io_netty_channel_ChannelOutboundInvoker = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.channel.ChannelOutboundInvoker'
    flush(): AllJavaClasses['io.netty.channel.ChannelOutboundInvoker']['instanceObject']
    write(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    write(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    read(): AllJavaClasses['io.netty.channel.ChannelOutboundInvoker']['instanceObject']
    connect(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
      arg1: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
      arg2: AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    connect(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
      arg1: AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    connect(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    connect(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
      arg1: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    close(
      arg0: AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    close(): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    bind(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    bind(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
      arg1: AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    newSucceededFuture(): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    newFailedFuture(
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    writeAndFlush(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    writeAndFlush(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    voidPromise(): AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject']
    newProgressivePromise(): AllJavaClasses['io.netty.channel.ChannelProgressivePromise']['instanceObject']
    newPromise(): AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject']
    disconnect(): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    disconnect(
      arg0: AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    deregister(
      arg0: AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    deregister(): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
  }
}
type AllJavaClass_io_netty_channel_ChannelProgressivePromise = {
  staticObject: object
  instanceObject: (({
    __javaClass: 'io.netty.channel.ChannelProgressivePromise'
    await(): AllJavaClasses['io.netty.channel.ChannelProgressivePromise']['instanceObject']
    sync(): AllJavaClasses['io.netty.channel.ChannelProgressivePromise']['instanceObject']
    awaitUninterruptibly(): AllJavaClasses['io.netty.channel.ChannelProgressivePromise']['instanceObject']
    addListener(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelProgressivePromise']['instanceObject']
    addListeners(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'][],
    ): AllJavaClasses['io.netty.channel.ChannelProgressivePromise']['instanceObject']
    removeListeners(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'][],
    ): AllJavaClasses['io.netty.channel.ChannelProgressivePromise']['instanceObject']
    removeListener(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelProgressivePromise']['instanceObject']
    syncUninterruptibly(): AllJavaClasses['io.netty.channel.ChannelProgressivePromise']['instanceObject']
    setProgress(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.channel.ChannelProgressivePromise']['instanceObject']
    setSuccess(): AllJavaClasses['io.netty.channel.ChannelProgressivePromise']['instanceObject']
    setSuccess(
      arg0: void,
    ): AllJavaClasses['io.netty.channel.ChannelProgressivePromise']['instanceObject']
    unvoid(): AllJavaClasses['io.netty.channel.ChannelProgressivePromise']['instanceObject']
    setFailure(
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelProgressivePromise']['instanceObject']
  } & Omit<
    AllJavaClasses['io.netty.util.concurrent.ProgressivePromise']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['io.netty.channel.ChannelProgressiveFuture']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['io.netty.channel.ChannelPromise']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_io_netty_channel_ChannelProgressiveFuture = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'io.netty.channel.ChannelProgressiveFuture'
    await(): AllJavaClasses['io.netty.channel.ChannelProgressiveFuture']['instanceObject']
    sync(): AllJavaClasses['io.netty.channel.ChannelProgressiveFuture']['instanceObject']
    awaitUninterruptibly(): AllJavaClasses['io.netty.channel.ChannelProgressiveFuture']['instanceObject']
    addListener(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelProgressiveFuture']['instanceObject']
    addListeners(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'][],
    ): AllJavaClasses['io.netty.channel.ChannelProgressiveFuture']['instanceObject']
    removeListeners(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'][],
    ): AllJavaClasses['io.netty.channel.ChannelProgressiveFuture']['instanceObject']
    removeListener(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelProgressiveFuture']['instanceObject']
    syncUninterruptibly(): AllJavaClasses['io.netty.channel.ChannelProgressiveFuture']['instanceObject']
  } & Omit<
    AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['io.netty.util.concurrent.ProgressiveFuture']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_io_netty_util_AttributeMap = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.util.AttributeMap'
    attr(
      arg0: AllJavaClasses['io.netty.util.AttributeKey']['instanceObject'],
    ): AllJavaClasses['io.netty.util.Attribute']['instanceObject']
    hasAttr(
      arg0: AllJavaClasses['io.netty.util.AttributeKey']['instanceObject'],
    ): boolean
  }
}
type AllJavaClass_net_rwhps_server_net_handler_bio_PackagingSocket = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.net.Socket']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.net.handler.bio.PackagingSocket']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.net.handler.bio.PackagingSocket'
    close(): void
    getType(): AllJavaClasses['net.rwhps.server.net.core.TypeConnect']['instanceObject']
    getInputStream(): AllJavaClasses['java.io.InputStream']['instanceObject']
    getLocalPort(): number
    getRemoteSocketAddressString(): string
    isClosed(): boolean
    setType(
      arg0: AllJavaClasses['net.rwhps.server.net.core.TypeConnect']['instanceObject'],
    ): void
    getOutputStream(): AllJavaClasses['java.io.OutputStream']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_net_Socket = {
  staticObject: {
    new (): AllJavaClasses['java.net.Socket']['instanceObject']
    new (
      arg0: AllJavaClasses['java.net.Proxy']['instanceObject'],
    ): AllJavaClasses['java.net.Socket']['instanceObject']
    new (
      arg0: AllJavaClasses['java.net.InetAddress']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.net.Socket']['instanceObject']
    new (
      arg0: string,
      arg1: number,
    ): AllJavaClasses['java.net.Socket']['instanceObject']
    new (
      arg0: string,
      arg1: number,
      arg2: boolean,
    ): AllJavaClasses['java.net.Socket']['instanceObject']
    new (
      arg0: AllJavaClasses['java.net.InetAddress']['instanceObject'],
      arg1: number,
      arg2: boolean,
    ): AllJavaClasses['java.net.Socket']['instanceObject']
    new (
      arg0: AllJavaClasses['java.net.InetAddress']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['java.net.InetAddress']['instanceObject'],
      arg3: number,
    ): AllJavaClasses['java.net.Socket']['instanceObject']
    new (
      arg0: string,
      arg1: number,
      arg2: AllJavaClasses['java.net.InetAddress']['instanceObject'],
      arg3: number,
    ): AllJavaClasses['java.net.Socket']['instanceObject']
    setSocketImplFactory(
      arg0: AllJavaClasses['java.net.SocketImplFactory']['instanceObject'],
    ): void
  }
  instanceObject: ({
    __javaClass: 'java.net.Socket'
    toString(): string
    connect(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): void
    connect(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
      arg1: number,
    ): void
    close(): void
    getPort(): number
    getInputStream(): AllJavaClasses['java.io.InputStream']['instanceObject']
    getChannel(): AllJavaClasses['java.nio.channels.SocketChannel']['instanceObject']
    bind(arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject']): void
    getLocalPort(): number
    getRemoteSocketAddress(): AllJavaClasses['java.net.SocketAddress']['instanceObject']
    isClosed(): boolean
    isConnected(): boolean
    isBound(): boolean
    getInetAddress(): AllJavaClasses['java.net.InetAddress']['instanceObject']
    getLocalAddress(): AllJavaClasses['java.net.InetAddress']['instanceObject']
    isInputShutdown(): boolean
    isOutputShutdown(): boolean
    sendUrgentData(arg0: number): void
    shutdownInput(): void
    shutdownOutput(): void
    supportedOptions(): AllJavaClasses['java.util.Set']['instanceObject']
    getLocalSocketAddress(): AllJavaClasses['java.net.SocketAddress']['instanceObject']
    setTcpNoDelay(arg0: boolean): void
    getTcpNoDelay(): boolean
    setSoLinger(arg0: boolean, arg1: number): void
    getSoLinger(): number
    setOOBInline(arg0: boolean): void
    getOOBInline(): boolean
    setSoTimeout(arg0: number): void
    getSoTimeout(): number
    setSendBufferSize(arg0: number): void
    getSendBufferSize(): number
    setReceiveBufferSize(arg0: number): void
    getReceiveBufferSize(): number
    setKeepAlive(arg0: boolean): void
    getKeepAlive(): boolean
    setTrafficClass(arg0: number): void
    getTrafficClass(): number
    setReuseAddress(arg0: boolean): void
    getReuseAddress(): boolean
    setPerformancePreferences(arg0: number, arg1: number, arg2: number): void
    getOption(
      arg0: AllJavaClasses['java.net.SocketOption']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    setOption(
      arg0: AllJavaClasses['java.net.SocketOption']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.net.Socket']['instanceObject']
    getOutputStream(): AllJavaClasses['java.io.OutputStream']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<AllJavaClasses['java.io.Closeable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_net_InetAddress = {
  staticObject: {
    getByName(
      arg0: string,
    ): AllJavaClasses['java.net.InetAddress']['instanceObject']
    getAllByName(
      arg0: string,
    ): AllJavaClasses['java.net.InetAddress']['instanceObject'][]
    getByAddress(
      arg0: number[],
    ): AllJavaClasses['java.net.InetAddress']['instanceObject']
    getByAddress(
      arg0: string,
      arg1: number[],
    ): AllJavaClasses['java.net.InetAddress']['instanceObject']
    getLoopbackAddress(): AllJavaClasses['java.net.InetAddress']['instanceObject']
    getLocalHost(): AllJavaClasses['java.net.InetAddress']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.net.InetAddress'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getHostAddress(): string
    getAddress(): number[]
    getHostName(): string
    isLinkLocalAddress(): boolean
    isMulticastAddress(): boolean
    isAnyLocalAddress(): boolean
    isLoopbackAddress(): boolean
    isSiteLocalAddress(): boolean
    isMCGlobal(): boolean
    isMCNodeLocal(): boolean
    isMCLinkLocal(): boolean
    isMCSiteLocal(): boolean
    isMCOrgLocal(): boolean
    isReachable(
      arg0: AllJavaClasses['java.net.NetworkInterface']['instanceObject'],
      arg1: number,
      arg2: number,
    ): boolean
    isReachable(arg0: number): boolean
    getCanonicalHostName(): string
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_net_NetworkInterface = {
  staticObject: {
    getByName(
      arg0: string,
    ): AllJavaClasses['java.net.NetworkInterface']['instanceObject']
    networkInterfaces(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    getNetworkInterfaces(): AllJavaClasses['java.util.Enumeration']['instanceObject']
    getByIndex(
      arg0: number,
    ): AllJavaClasses['java.net.NetworkInterface']['instanceObject']
    getByInetAddress(
      arg0: AllJavaClasses['java.net.InetAddress']['instanceObject'],
    ): AllJavaClasses['java.net.NetworkInterface']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.net.NetworkInterface'
    getName(): string
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    isVirtual(): boolean
    getParent(): AllJavaClasses['java.net.NetworkInterface']['instanceObject']
    getIndex(): number
    inetAddresses(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    getInetAddresses(): AllJavaClasses['java.util.Enumeration']['instanceObject']
    getInterfaceAddresses(): AllJavaClasses['java.util.List']['instanceObject']
    getSubInterfaces(): AllJavaClasses['java.util.Enumeration']['instanceObject']
    subInterfaces(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    getDisplayName(): string
    isUp(): boolean
    isLoopback(): boolean
    isPointToPoint(): boolean
    supportsMulticast(): boolean
    getHardwareAddress(): number[]
    getMTU(): number
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_channels_SocketChannel = {
  staticObject: {
    open(
      arg0: AllJavaClasses['java.net.ProtocolFamily']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.SocketChannel']['instanceObject']
    open(): AllJavaClasses['java.nio.channels.SocketChannel']['instanceObject']
    open(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.SocketChannel']['instanceObject']
  }
  instanceObject: (((({
    __javaClass: 'java.nio.channels.SocketChannel'
    write(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): number
    write(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][],
    ): number
    write(arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject']): number
    read(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): number
    read(arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject']): number
    read(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][],
    ): number
    connect(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): boolean
    bind(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.NetworkChannel']['instanceObject']
    bind(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.SocketChannel']['instanceObject']
    socket(): AllJavaClasses['java.net.Socket']['instanceObject']
    isConnected(): boolean
    getLocalAddress(): AllJavaClasses['java.net.SocketAddress']['instanceObject']
    shutdownInput(): AllJavaClasses['java.nio.channels.SocketChannel']['instanceObject']
    shutdownOutput(): AllJavaClasses['java.nio.channels.SocketChannel']['instanceObject']
    validOps(): number
    isConnectionPending(): boolean
    finishConnect(): boolean
    getRemoteAddress(): AllJavaClasses['java.net.SocketAddress']['instanceObject']
    setOption(
      arg0: AllJavaClasses['java.net.SocketOption']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.SocketChannel']['instanceObject']
    setOption(
      arg0: AllJavaClasses['java.net.SocketOption']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.NetworkChannel']['instanceObject']
  } & Omit<
    AllJavaClasses['java.nio.channels.spi.AbstractSelectableChannel']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.nio.channels.ByteChannel']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.nio.channels.ScatteringByteChannel']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.nio.channels.GatheringByteChannel']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.nio.channels.NetworkChannel']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_net_ProtocolFamily = {
  staticObject: object
  instanceObject: { __javaClass: 'java.net.ProtocolFamily'; name(): string }
}
type AllJavaClass_java_nio_channels_NetworkChannel = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.channels.NetworkChannel'
    bind(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.NetworkChannel']['instanceObject']
    getLocalAddress(): AllJavaClasses['java.net.SocketAddress']['instanceObject']
    supportedOptions(): AllJavaClasses['java.util.Set']['instanceObject']
    getOption(
      arg0: AllJavaClasses['java.net.SocketOption']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    setOption(
      arg0: AllJavaClasses['java.net.SocketOption']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.NetworkChannel']['instanceObject']
  } & Omit<
    AllJavaClasses['java.nio.channels.Channel']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_net_SocketOption = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.net.SocketOption'
    name(): string
    type(): AllJavaClasses['java.lang.Class']['instanceObject']
  }
}
type AllJavaClass_java_nio_channels_spi_AbstractSelectableChannel = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.channels.spi.AbstractSelectableChannel'
    isRegistered(): boolean
    register(
      arg0: AllJavaClasses['java.nio.channels.Selector']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.SelectionKey']['instanceObject']
    provider(): AllJavaClasses['java.nio.channels.spi.SelectorProvider']['instanceObject']
    isBlocking(): boolean
    keyFor(
      arg0: AllJavaClasses['java.nio.channels.Selector']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.SelectionKey']['instanceObject']
    blockingLock(): AllJavaClasses['java.lang.Object']['instanceObject']
    configureBlocking(
      arg0: boolean,
    ): AllJavaClasses['java.nio.channels.SelectableChannel']['instanceObject']
  } & Omit<
    AllJavaClasses['java.nio.channels.SelectableChannel']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_nio_channels_SelectionKey = {
  staticObject: {
    OP_READ: number
    OP_WRITE: number
    OP_CONNECT: number
    OP_ACCEPT: number
  }
  instanceObject: {
    __javaClass: 'java.nio.channels.SelectionKey'
    cancel(): void
    attachment(): AllJavaClasses['java.lang.Object']['instanceObject']
    attach(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    channel(): AllJavaClasses['java.nio.channels.SelectableChannel']['instanceObject']
    isReadable(): boolean
    isWritable(): boolean
    isValid(): boolean
    selector(): AllJavaClasses['java.nio.channels.Selector']['instanceObject']
    interestOps(): number
    interestOps(
      arg0: number,
    ): AllJavaClasses['java.nio.channels.SelectionKey']['instanceObject']
    readyOps(): number
    interestOpsOr(arg0: number): number
    interestOpsAnd(arg0: number): number
    isConnectable(): boolean
    isAcceptable(): boolean
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_channels_SelectableChannel = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.nio.channels.SelectableChannel'
    isRegistered(): boolean
    register(
      arg0: AllJavaClasses['java.nio.channels.Selector']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.nio.channels.SelectionKey']['instanceObject']
    register(
      arg0: AllJavaClasses['java.nio.channels.Selector']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.SelectionKey']['instanceObject']
    provider(): AllJavaClasses['java.nio.channels.spi.SelectorProvider']['instanceObject']
    validOps(): number
    isBlocking(): boolean
    keyFor(
      arg0: AllJavaClasses['java.nio.channels.Selector']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.SelectionKey']['instanceObject']
    blockingLock(): AllJavaClasses['java.lang.Object']['instanceObject']
    configureBlocking(
      arg0: boolean,
    ): AllJavaClasses['java.nio.channels.SelectableChannel']['instanceObject']
  } & Omit<
    AllJavaClasses['java.nio.channels.spi.AbstractInterruptibleChannel']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.nio.channels.Channel']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_nio_channels_Selector = {
  staticObject: {
    open(): AllJavaClasses['java.nio.channels.Selector']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.nio.channels.Selector'
    isOpen(): boolean
    provider(): AllJavaClasses['java.nio.channels.spi.SelectorProvider']['instanceObject']
    close(): void
    keys(): AllJavaClasses['java.util.Set']['instanceObject']
    select(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
      arg1: number,
    ): number
    select(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): number
    select(): number
    select(arg0: number): number
    selectedKeys(): AllJavaClasses['java.util.Set']['instanceObject']
    selectNow(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): number
    selectNow(): number
    wakeup(): AllJavaClasses['java.nio.channels.Selector']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<AllJavaClasses['java.io.Closeable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_channels_spi_SelectorProvider = {
  staticObject: {
    provider(): AllJavaClasses['java.nio.channels.spi.SelectorProvider']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.nio.channels.spi.SelectorProvider'
    inheritedChannel(): AllJavaClasses['java.nio.channels.Channel']['instanceObject']
    openSocketChannel(
      arg0: AllJavaClasses['java.net.ProtocolFamily']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.SocketChannel']['instanceObject']
    openSocketChannel(): AllJavaClasses['java.nio.channels.SocketChannel']['instanceObject']
    openDatagramChannel(
      arg0: AllJavaClasses['java.net.ProtocolFamily']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.DatagramChannel']['instanceObject']
    openDatagramChannel(): AllJavaClasses['java.nio.channels.DatagramChannel']['instanceObject']
    openPipe(): AllJavaClasses['java.nio.channels.Pipe']['instanceObject']
    openSelector(): AllJavaClasses['java.nio.channels.spi.AbstractSelector']['instanceObject']
    openServerSocketChannel(
      arg0: AllJavaClasses['java.net.ProtocolFamily']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.ServerSocketChannel']['instanceObject']
    openServerSocketChannel(): AllJavaClasses['java.nio.channels.ServerSocketChannel']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_channels_DatagramChannel = {
  staticObject: {
    open(
      arg0: AllJavaClasses['java.net.ProtocolFamily']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.DatagramChannel']['instanceObject']
    open(): AllJavaClasses['java.nio.channels.DatagramChannel']['instanceObject']
  }
  instanceObject: (((({
    __javaClass: 'java.nio.channels.DatagramChannel'
    write(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][],
    ): number
    write(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): number
    write(arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject']): number
    read(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][],
    ): number
    read(arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject']): number
    read(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): number
    connect(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.DatagramChannel']['instanceObject']
    bind(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.NetworkChannel']['instanceObject']
    bind(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.DatagramChannel']['instanceObject']
    send(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
      arg1: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): number
    socket(): AllJavaClasses['java.net.DatagramSocket']['instanceObject']
    disconnect(): AllJavaClasses['java.nio.channels.DatagramChannel']['instanceObject']
    isConnected(): boolean
    getLocalAddress(): AllJavaClasses['java.net.SocketAddress']['instanceObject']
    validOps(): number
    getRemoteAddress(): AllJavaClasses['java.net.SocketAddress']['instanceObject']
    receive(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['java.net.SocketAddress']['instanceObject']
    setOption(
      arg0: AllJavaClasses['java.net.SocketOption']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.NetworkChannel']['instanceObject']
    setOption(
      arg0: AllJavaClasses['java.net.SocketOption']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.DatagramChannel']['instanceObject']
  } & Omit<
    AllJavaClasses['java.nio.channels.spi.AbstractSelectableChannel']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.nio.channels.ByteChannel']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.nio.channels.ScatteringByteChannel']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.nio.channels.GatheringByteChannel']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.nio.channels.MulticastChannel']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_net_DatagramSocket = {
  staticObject: {
    new (
      arg0: number,
      arg1: AllJavaClasses['java.net.InetAddress']['instanceObject'],
    ): AllJavaClasses['java.net.DatagramSocket']['instanceObject']
    new (
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): AllJavaClasses['java.net.DatagramSocket']['instanceObject']
    new (): AllJavaClasses['java.net.DatagramSocket']['instanceObject']
    new (
      arg0: number,
    ): AllJavaClasses['java.net.DatagramSocket']['instanceObject']
    setDatagramSocketImplFactory(
      arg0: AllJavaClasses['java.net.DatagramSocketImplFactory']['instanceObject'],
    ): void
  }
  instanceObject: ({
    __javaClass: 'java.net.DatagramSocket'
    connect(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): void
    connect(
      arg0: AllJavaClasses['java.net.InetAddress']['instanceObject'],
      arg1: number,
    ): void
    close(): void
    getPort(): number
    getChannel(): AllJavaClasses['java.nio.channels.DatagramChannel']['instanceObject']
    bind(arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject']): void
    getBroadcast(): boolean
    getLocalPort(): number
    getRemoteSocketAddress(): AllJavaClasses['java.net.SocketAddress']['instanceObject']
    send(
      arg0: AllJavaClasses['java.net.DatagramPacket']['instanceObject'],
    ): void
    disconnect(): void
    isClosed(): boolean
    isConnected(): boolean
    isBound(): boolean
    getInetAddress(): AllJavaClasses['java.net.InetAddress']['instanceObject']
    getLocalAddress(): AllJavaClasses['java.net.InetAddress']['instanceObject']
    supportedOptions(): AllJavaClasses['java.util.Set']['instanceObject']
    getLocalSocketAddress(): AllJavaClasses['java.net.SocketAddress']['instanceObject']
    setSoTimeout(arg0: number): void
    getSoTimeout(): number
    setSendBufferSize(arg0: number): void
    getSendBufferSize(): number
    setReceiveBufferSize(arg0: number): void
    getReceiveBufferSize(): number
    setTrafficClass(arg0: number): void
    getTrafficClass(): number
    setReuseAddress(arg0: boolean): void
    getReuseAddress(): boolean
    receive(
      arg0: AllJavaClasses['java.net.DatagramPacket']['instanceObject'],
    ): void
    setBroadcast(arg0: boolean): void
    joinGroup(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
      arg1: AllJavaClasses['java.net.NetworkInterface']['instanceObject'],
    ): void
    leaveGroup(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
      arg1: AllJavaClasses['java.net.NetworkInterface']['instanceObject'],
    ): void
    getOption(
      arg0: AllJavaClasses['java.net.SocketOption']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    setOption(
      arg0: AllJavaClasses['java.net.SocketOption']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.net.DatagramSocket']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<AllJavaClasses['java.io.Closeable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_net_DatagramPacket = {
  staticObject: {
    new (
      arg0: number[],
      arg1: number,
      arg2: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): AllJavaClasses['java.net.DatagramPacket']['instanceObject']
    new (
      arg0: number[],
      arg1: number,
      arg2: AllJavaClasses['java.net.InetAddress']['instanceObject'],
      arg3: number,
    ): AllJavaClasses['java.net.DatagramPacket']['instanceObject']
    new (
      arg0: number[],
      arg1: number,
      arg2: number,
      arg3: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): AllJavaClasses['java.net.DatagramPacket']['instanceObject']
    new (
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.net.DatagramPacket']['instanceObject']
    new (
      arg0: number[],
      arg1: number,
    ): AllJavaClasses['java.net.DatagramPacket']['instanceObject']
    new (
      arg0: number[],
      arg1: number,
      arg2: number,
      arg3: AllJavaClasses['java.net.InetAddress']['instanceObject'],
      arg4: number,
    ): AllJavaClasses['java.net.DatagramPacket']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.net.DatagramPacket'
    getLength(): number
    setLength(arg0: number): void
    getAddress(): AllJavaClasses['java.net.InetAddress']['instanceObject']
    getPort(): number
    getOffset(): number
    getData(): number[]
    setAddress(
      arg0: AllJavaClasses['java.net.InetAddress']['instanceObject'],
    ): void
    setPort(arg0: number): void
    setSocketAddress(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): void
    getSocketAddress(): AllJavaClasses['java.net.SocketAddress']['instanceObject']
    setData(arg0: number[], arg1: number, arg2: number): void
    setData(arg0: number[]): void
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_net_DatagramSocketImplFactory = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.net.DatagramSocketImplFactory'
    createDatagramSocketImpl(): AllJavaClasses['java.net.DatagramSocketImpl']['instanceObject']
  }
}
type AllJavaClass_java_net_DatagramSocketImpl = {
  staticObject: {
    new (): AllJavaClasses['java.net.DatagramSocketImpl']['instanceObject']
  }
  instanceObject: ({ __javaClass: 'java.net.DatagramSocketImpl' } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.net.SocketOptions']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_net_SocketOptions = {
  staticObject: {
    TCP_NODELAY: number
    SO_BINDADDR: number
    SO_REUSEADDR: number
    SO_REUSEPORT: number
    SO_BROADCAST: number
    IP_MULTICAST_IF: number
    IP_MULTICAST_IF2: number
    IP_MULTICAST_LOOP: number
    IP_TOS: number
    SO_LINGER: number
    SO_TIMEOUT: number
    SO_SNDBUF: number
    SO_RCVBUF: number
    SO_KEEPALIVE: number
    SO_OOBINLINE: number
  }
  instanceObject: {
    __javaClass: 'java.net.SocketOptions'
    getOption(
      arg0: number,
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    setOption(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
  }
}
type AllJavaClass_java_nio_channels_MulticastChannel = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.channels.MulticastChannel'
    join(
      arg0: AllJavaClasses['java.net.InetAddress']['instanceObject'],
      arg1: AllJavaClasses['java.net.NetworkInterface']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.MembershipKey']['instanceObject']
    join(
      arg0: AllJavaClasses['java.net.InetAddress']['instanceObject'],
      arg1: AllJavaClasses['java.net.NetworkInterface']['instanceObject'],
      arg2: AllJavaClasses['java.net.InetAddress']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.MembershipKey']['instanceObject']
    close(): void
  } & Omit<
    AllJavaClasses['java.nio.channels.NetworkChannel']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_nio_channels_MembershipKey = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.channels.MembershipKey'
    group(): AllJavaClasses['java.net.InetAddress']['instanceObject']
    block(
      arg0: AllJavaClasses['java.net.InetAddress']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.MembershipKey']['instanceObject']
    channel(): AllJavaClasses['java.nio.channels.MulticastChannel']['instanceObject']
    isValid(): boolean
    drop(): void
    unblock(
      arg0: AllJavaClasses['java.net.InetAddress']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.MembershipKey']['instanceObject']
    networkInterface(): AllJavaClasses['java.net.NetworkInterface']['instanceObject']
    sourceAddress(): AllJavaClasses['java.net.InetAddress']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_channels_Pipe = {
  staticObject: {
    open(): AllJavaClasses['java.nio.channels.Pipe']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.nio.channels.Pipe'
    source(): AllJavaClasses['java.nio.channels.Pipe$SourceChannel']['instanceObject']
    sink(): AllJavaClasses['java.nio.channels.Pipe$SinkChannel']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_channels_Pipe$SourceChannel = {
  staticObject: object
  instanceObject: (({
    __javaClass: 'java.nio.channels.Pipe$SourceChannel'
    validOps(): number
  } & Omit<
    AllJavaClasses['java.nio.channels.spi.AbstractSelectableChannel']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.nio.channels.ReadableByteChannel']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.nio.channels.ScatteringByteChannel']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_nio_channels_Pipe$SinkChannel = {
  staticObject: object
  instanceObject: (({
    __javaClass: 'java.nio.channels.Pipe$SinkChannel'
    validOps(): number
  } & Omit<
    AllJavaClasses['java.nio.channels.spi.AbstractSelectableChannel']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.nio.channels.WritableByteChannel']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['java.nio.channels.GatheringByteChannel']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_nio_channels_spi_AbstractSelector = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.channels.spi.AbstractSelector'
    isOpen(): boolean
    provider(): AllJavaClasses['java.nio.channels.spi.SelectorProvider']['instanceObject']
    close(): void
  } & Omit<
    AllJavaClasses['java.nio.channels.Selector']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_nio_channels_ServerSocketChannel = {
  staticObject: {
    open(
      arg0: AllJavaClasses['java.net.ProtocolFamily']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.ServerSocketChannel']['instanceObject']
    open(): AllJavaClasses['java.nio.channels.ServerSocketChannel']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.nio.channels.ServerSocketChannel'
    accept(): AllJavaClasses['java.nio.channels.SocketChannel']['instanceObject']
    bind(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.nio.channels.ServerSocketChannel']['instanceObject']
    bind(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.NetworkChannel']['instanceObject']
    bind(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.ServerSocketChannel']['instanceObject']
    socket(): AllJavaClasses['java.net.ServerSocket']['instanceObject']
    getLocalAddress(): AllJavaClasses['java.net.SocketAddress']['instanceObject']
    validOps(): number
    setOption(
      arg0: AllJavaClasses['java.net.SocketOption']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.NetworkChannel']['instanceObject']
    setOption(
      arg0: AllJavaClasses['java.net.SocketOption']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.nio.channels.ServerSocketChannel']['instanceObject']
  } & Omit<
    AllJavaClasses['java.nio.channels.spi.AbstractSelectableChannel']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.nio.channels.NetworkChannel']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_net_ServerSocket = {
  staticObject: {
    new (): AllJavaClasses['java.net.ServerSocket']['instanceObject']
    new (
      arg0: number,
    ): AllJavaClasses['java.net.ServerSocket']['instanceObject']
    new (
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.net.ServerSocket']['instanceObject']
    new (
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['java.net.InetAddress']['instanceObject'],
    ): AllJavaClasses['java.net.ServerSocket']['instanceObject']
    setSocketFactory(
      arg0: AllJavaClasses['java.net.SocketImplFactory']['instanceObject'],
    ): void
  }
  instanceObject: ({
    __javaClass: 'java.net.ServerSocket'
    toString(): string
    accept(): AllJavaClasses['java.net.Socket']['instanceObject']
    close(): void
    getChannel(): AllJavaClasses['java.nio.channels.ServerSocketChannel']['instanceObject']
    bind(arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject']): void
    bind(
      arg0: AllJavaClasses['java.net.SocketAddress']['instanceObject'],
      arg1: number,
    ): void
    getLocalPort(): number
    isClosed(): boolean
    isBound(): boolean
    getInetAddress(): AllJavaClasses['java.net.InetAddress']['instanceObject']
    supportedOptions(): AllJavaClasses['java.util.Set']['instanceObject']
    getLocalSocketAddress(): AllJavaClasses['java.net.SocketAddress']['instanceObject']
    setSoTimeout(arg0: number): void
    getSoTimeout(): number
    setReceiveBufferSize(arg0: number): void
    getReceiveBufferSize(): number
    setReuseAddress(arg0: boolean): void
    getReuseAddress(): boolean
    setPerformancePreferences(arg0: number, arg1: number, arg2: number): void
    getOption(
      arg0: AllJavaClasses['java.net.SocketOption']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    setOption(
      arg0: AllJavaClasses['java.net.SocketOption']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.net.ServerSocket']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<AllJavaClasses['java.io.Closeable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_net_SocketImplFactory = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.net.SocketImplFactory'
    createSocketImpl(): AllJavaClasses['java.net.SocketImpl']['instanceObject']
  }
}
type AllJavaClass_java_net_SocketImpl = {
  staticObject: {
    new (): AllJavaClasses['java.net.SocketImpl']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.net.SocketImpl'
    toString(): string
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.net.SocketOptions']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_net_rwhps_server_net_core_TypeConnect = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.net.core.TypeConnect'
    getVersion(): string
    processConnect(
      arg0: AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject'],
    ): void
    getTypeConnect(
      arg0: AllJavaClasses['net.rwhps.server.net.core.ConnectionAgreement']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.net.core.TypeConnect']['instanceObject']
    setData(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
    getAbstractNetConnect(): AllJavaClasses['net.rwhps.server.net.core.server.AbstractNetConnect']['instanceObject']
  }
}
type AllJavaClass_net_rwhps_server_io_packet_Packet = {
  staticObject: {
    Companion: AllJavaClasses['net.rwhps.server.io.packet.Packet$Companion']['instanceObject']
    new (
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject']
    new (
      arg0: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject'],
      arg1: number[],
    ): AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject']
    access$getSerializer$cp(): AllJavaClasses['net.rwhps.server.struct.SerializerTypeAll$TypeSerializer']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.io.packet.Packet'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getBytes(): number[]
    getType(): AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    getStatus(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
    setStatus(
      arg0: AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject'],
    ): void
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_io_packet_Packet$Companion = {
  staticObject: {
    new (
      arg0: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.io.packet.Packet$Companion']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.io.packet.Packet$Companion'
    getSerializer$Server_Core(): AllJavaClasses['net.rwhps.server.struct.SerializerTypeAll$TypeSerializer']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_kotlin_jvm_internal_DefaultConstructorMarker = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlin.jvm.internal.DefaultConstructorMarker'
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_struct_SerializerTypeAll$TypeSerializer = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.struct.SerializerTypeAll$TypeSerializer'
    write(
      arg0: AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    read(
      arg0: AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_net_rwhps_server_io_GameOutputStream = {
  staticObject: {
    Companion: AllJavaClasses['net.rwhps.server.io.GameOutputStream$Companion']['instanceObject']
    new (): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    new (
      arg0: AllJavaClasses['net.rwhps.server.io.output.AbstractByteArrayOutputStream']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    new (
      arg0: AllJavaClasses['net.rwhps.server.io.output.AbstractByteArrayOutputStream']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    intToBytes(arg0: number): number[]
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.io.GameOutputStream'
    size(): number
    reset(): void
    close(): void
    writeInt(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    transferTo(
      arg0: AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject'],
    ): void
    writeBytes(
      arg0: number[],
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    writeFloat(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    writeFloat(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    writeBoolean(
      arg0: boolean,
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    writeByte(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    writeByte(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    writeShort(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    writeLong(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    writeString(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    createPacket(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject']
    createPacket(
      arg0: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject']
    flushMapData(arg0: number, arg1: number[]): void
    getByteArray(): number[]
    writeIsString(
      arg0: AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject'],
    ): void
    writeIsString(arg0: string): void
    writeBackwardsInt(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    flushEncodeData(
      arg0: AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject'],
    ): void
    flushEncodeData(
      arg0: AllJavaClasses['net.rwhps.server.io.output.CompressOutputStream']['instanceObject'],
    ): void
    getByteBuf(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeIsInt(
      arg0: AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject'],
    ): void
    writeIsInt(
      arg0: AllJavaClasses['java.lang.Integer']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    transferToFixedLength(
      arg0: AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject'],
      arg1: number,
    ): void
    writeBytesAndLength(
      arg0: number[],
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    writeBackwardsShort(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    writeEnum(arg0: AllJavaClasses['java.lang.Enum']['instanceObject']): void
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<AllJavaClasses['java.io.Closeable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_io_GameOutputStream$Companion = {
  staticObject: {
    new (
      arg0: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream$Companion']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.io.GameOutputStream$Companion'
    intToBytes(arg0: number): number[]
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_io_output_AbstractByteArrayOutputStream = {
  staticObject: {
    Companion: AllJavaClasses['net.rwhps.server.io.output.AbstractByteArrayOutputStream$Companion']['instanceObject']
    DEFAULT_SIZE: number
    new (): AllJavaClasses['net.rwhps.server.io.output.AbstractByteArrayOutputStream']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.io.output.AbstractByteArrayOutputStream'
    size(): number
    reset(): void
    toString(arg0: string): string
    toString(
      arg0: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): string
    toString(): string
    write(arg0: AllJavaClasses['java.io.InputStream']['instanceObject']): number
    write(arg0: number): void
    write(arg0: number[], arg1: number, arg2: number): void
    close(): void
    writeBytes(arg0: number[]): void
    writeTo(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
    ): void
    toByteArray(): number[]
  } & Omit<
    AllJavaClasses['java.io.OutputStream']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_net_rwhps_server_io_output_AbstractByteArrayOutputStream$Companion =
  {
    staticObject: {
      new (
        arg0: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
      ): AllJavaClasses['net.rwhps.server.io.output.AbstractByteArrayOutputStream$Companion']['instanceObject']
    }
    instanceObject: {
      __javaClass: 'net.rwhps.server.io.output.AbstractByteArrayOutputStream$Companion'
    } & Omit<
      AllJavaClasses['java.lang.Object']['instanceObject'],
      '__javaClass'
    >
  }
type AllJavaClass_net_rwhps_server_io_GameInputStream = {
  staticObject: {
    Companion: AllJavaClasses['net.rwhps.server.io.GameInputStream$Companion']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject']
    new (
      arg0: AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject']
    new (
      arg0: AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject']
    new (
      arg0: number[],
      arg1: number,
    ): AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject']
    new (
      arg0: number[],
      arg1: number,
      arg2: number,
      arg3: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject']
    new (
      arg0: number[],
    ): AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject']
    new (
      arg0: AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject']
    readHeadInt(
      arg0: AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject'],
    ): number
    readHeadInt(arg0: number[]): number
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.io.GameInputStream'
    toString(): string
    close(): void
    readInt(): number
    readAllBytes(): number[]
    getSize(): number
    readNBytes(arg0: number): number[]
    transferTo(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
    ): void
    skip(arg0: number): void
    readFloat(): number
    readBoolean(): boolean
    readByte(): number
    readShort(): number
    readLong(): number
    readString(): string
    readStreamBytes(): number[]
    getDecodeBytes(): number[]
    readBackwardsShort(): number
    readStreamBytesNew(): number[]
    readBackwardsInt(): number
    getParseVersion(): number
    readIsString(): string
    getDecodeStream(
      arg0: boolean,
    ): AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject']
    readIsInt(): number
    getStream(): AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject']
    transferToFixedLength(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: number,
    ): void
    readEnum(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.Enum']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<AllJavaClasses['java.io.Closeable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_io_GameInputStream$Companion = {
  staticObject: {
    new (
      arg0: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.io.GameInputStream$Companion']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.io.GameInputStream$Companion'
    readHeadInt(
      arg0: AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject'],
    ): number
    readHeadInt(arg0: number[]): number
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_util_PacketType = {
  staticObject: {
    Companion: AllJavaClasses['net.rwhps.server.util.PacketType$Companion']['instanceObject']
    SERVER_DEBUG_RECEIVE: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    SERVER_DEBUG: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    GET_SERVER_INFO_RECEIVE: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    GET_SERVER_INFO: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    UPDATA_CLASS_RECEIVE: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    STATUS_RESULT: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    PREREGISTER_INFO_RECEIVE: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    PREREGISTER_INFO: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    PASSWD_ERROR: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    REGISTER_PLAYER: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    SERVER_INFO: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    TEAM_LIST: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    HEART_BEAT: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    HEART_BEAT_RESPONSE: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    CHAT_RECEIVE: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    CHAT: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    PACKET_DOWNLOAD_PENDING: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    KICK: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    DISCONNECT: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    START_GAME: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    ACCEPT_START_GAME: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    RETURN_TO_BATTLEROOM: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    TICK: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    GAMECOMMAND_RECEIVE: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    SYNCCHECKSUM_STATUS: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    SYNC_CHECK: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    SYNC: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    RELAY_117: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    RELAY_118_117_RETURN: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    RELAY_POW: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    RELAY_POW_RECEIVE: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    RELAY_VERSION_INFO: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    RELAY_BECOME_SERVER: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    FORWARD_CLIENT_ADD: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    FORWARD_CLIENT_REMOVE: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    PACKET_FORWARD_CLIENT_FROM: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    PACKET_FORWARD_CLIENT_TO: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    PACKET_FORWARD_CLIENT_TO_REPEATED: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    PACKET_RECONNECT_TO: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    EMPTYP_ACKAGE: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    NOT_RESOLVED: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    values(): AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    getEntries(): AllJavaClasses['kotlin.enums.EnumEntries']['instanceObject']
    access$getTypeMap$cp(): AllJavaClasses['net.rwhps.server.struct.map.IntMap']['instanceObject']
    access$getNullPacket$cp(): AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.util.PacketType'
    getTypeIntBytes(): number[]
    getTypeInt(): number
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_util_PacketType$Companion = {
  staticObject: {
    new (
      arg0: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.PacketType$Companion']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.util.PacketType$Companion'
    from(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject']
    getNullPacket(): AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_kotlin_enums_EnumEntries = {
  staticObject: object
  instanceObject: ({ __javaClass: 'kotlin.enums.EnumEntries' } & Omit<
    AllJavaClasses['java.util.List']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['kotlin.jvm.internal.markers.KMappedMarker']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_kotlin_jvm_internal_markers_KMappedMarker = {
  staticObject: object
  instanceObject: { __javaClass: 'kotlin.jvm.internal.markers.KMappedMarker' }
}
type AllJavaClass_net_rwhps_server_struct_map_IntMap = {
  staticObject: {
    new (
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.struct.map.IntMap']['instanceObject']
    new (): AllJavaClasses['net.rwhps.server.struct.map.IntMap']['instanceObject']
    new (
      arg0: number,
      arg1: boolean,
      arg2: number,
      arg3: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.map.IntMap']['instanceObject']
    new (
      arg0: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.map.IntMap']['instanceObject']
    new (
      arg0: boolean,
      arg1: number,
      arg2: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.map.IntMap']['instanceObject']
    new (
      arg0: number,
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.map.IntMap']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.struct.map.IntMap'
    remove(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    remove(arg0: number): AllJavaClasses['java.lang.Object']['instanceObject']
    remove(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    remove(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    get(arg0: number): AllJavaClasses['java.lang.Object']['instanceObject']
    get(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    containsKey(arg0: number): boolean
    containsKey(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    getOrDefault(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getOrDefault(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
  } & Omit<
    AllJavaClasses['net.rwhps.server.struct.map.BaseMap']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_net_rwhps_server_struct_map_BaseMap = {
  staticObject: {
    Companion: AllJavaClasses['net.rwhps.server.struct.map.BaseMap$Companion']['instanceObject']
    new (
      arg0: AllJavaClasses['java.util.Map']['instanceObject'],
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.map.BaseMap']['instanceObject']
  }
  instanceObject: ((({
    __javaClass: 'net.rwhps.server.struct.map.BaseMap'
    remove(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    size(): number
    get(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    get(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.func.Prov']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    get(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    put(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    toString(): string
    values(): AllJavaClasses['java.util.Collection']['instanceObject']
    clear(): void
    isEmpty(): boolean
    entrySet(): AllJavaClasses['java.util.Set']['instanceObject']
    putAll(arg0: AllJavaClasses['java.util.Map']['instanceObject']): void
    find(
      arg0: AllJavaClasses['net.rwhps.server.func.FindMapKV']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.func.KeyValue']['instanceObject']
    find(
      arg0: AllJavaClasses['net.rwhps.server.func.FindMapKV']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.func.FindMapKV']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.func.KeyValue']['instanceObject']
    containsKey(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    keySet(): AllJavaClasses['java.util.Set']['instanceObject']
    containsValue(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    getOrDefault(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getSize(): number
    getEntries(): AllJavaClasses['java.util.Set']['instanceObject']
    getKeys(): AllJavaClasses['java.util.Set']['instanceObject']
    getValues(): AllJavaClasses['java.util.Collection']['instanceObject']
    toArrayKey(): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    eachAllFind(
      arg0: AllJavaClasses['net.rwhps.server.func.FindMapKV']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.func.ConsMap']['instanceObject'],
    ): void
    eachControl(
      arg0: AllJavaClasses['net.rwhps.server.func.FindMapKV']['instanceObject'],
    ): void
    eachControl(
      arg0: AllJavaClasses['net.rwhps.server.func.FindMapE']['instanceObject'],
    ): void
    toArrayValues(): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    eachAllFinds(
      arg0: AllJavaClasses['net.rwhps.server.func.FindMapKV']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.func.FindMapKV']['instanceObject'],
      arg2: AllJavaClasses['net.rwhps.server.func.ConsMap']['instanceObject'],
    ): AllJavaClasses['kotlin.Unit']['instanceObject']
    eachFind(
      arg0: AllJavaClasses['net.rwhps.server.func.FindMapKV']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.func.ConsMap']['instanceObject'],
    ): AllJavaClasses['kotlin.Unit']['instanceObject']
    eachAll(
      arg0: AllJavaClasses['net.rwhps.server.func.ConsMap']['instanceObject'],
    ): void
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<AllJavaClasses['java.util.Map']['instanceObject'], '__javaClass'>) &
    Omit<
      AllJavaClasses['kotlin.jvm.internal.markers.KMutableMap']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['kotlin.jvm.internal.markers.KMappedMarker']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_net_rwhps_server_struct_map_BaseMap$Companion = {
  staticObject: {
    new (
      arg0: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.map.BaseMap$Companion']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.struct.map.BaseMap$Companion'
    toSeq(
      arg0: AllJavaClasses['java.util.Set']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    toSeq(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_struct_list_Seq = {
  staticObject: {
    Companion: AllJavaClasses['net.rwhps.server.struct.list.Seq$Companion']['instanceObject']
    new (
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
      arg1: boolean,
      arg2: number,
      arg3: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    new (
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
      arg1: number,
      arg2: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    new (
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
      arg1: number,
    ): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    new (): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    new (
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    new (
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    new (
      arg0: boolean,
      arg1: number,
      arg2: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    new (
      arg0: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    new (
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
      arg1: number,
      arg2: boolean,
      arg3: number,
      arg4: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    new (
      arg0: number,
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    new (
      arg0: number,
      arg1: boolean,
      arg2: number,
      arg3: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    new (
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    access$getSerializer$cp(): AllJavaClasses['net.rwhps.server.struct.SerializerTypeAll$TypeSerializer']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.struct.list.Seq'
    clone(): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    clone(): AllJavaClasses['java.lang.Object']['instanceObject']
    toArray(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    toArray(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject'][]
    elements(): AllJavaClasses['java.lang.Object']['instanceObject'][]
    elements(): AllJavaClasses['java.lang.Object']['instanceObject']
  } & Omit<
    AllJavaClasses['net.rwhps.server.struct.list.BaseSeq']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_net_rwhps_server_struct_list_Seq$Companion = {
  staticObject: {
    new (
      arg0: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.list.Seq$Companion']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.struct.list.Seq$Companion'
    getSerializer(): AllJavaClasses['net.rwhps.server.struct.SerializerTypeAll$TypeSerializer']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_struct_list_BaseSeq = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.util.List']['instanceObject'],
      arg1: AllJavaClasses['kotlin.jvm.functions.Function1']['instanceObject'],
      arg2: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.list.BaseSeq']['instanceObject']
  }
  instanceObject: ((({
    __javaClass: 'net.rwhps.server.struct.list.BaseSeq'
    remove(arg0: number): AllJavaClasses['java.lang.Object']['instanceObject']
    remove(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    size(): number
    get(arg0: number): AllJavaClasses['java.lang.Object']['instanceObject']
    toString(): string
    clone(): AllJavaClasses['java.lang.Object']['instanceObject']
    indexOf(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): number
    clear(): void
    lastIndexOf(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    isEmpty(): boolean
    add(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    add(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    subList(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.util.List']['instanceObject']
    toArray(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject'][]
    toArray(): AllJavaClasses['java.lang.Object']['instanceObject'][]
    toArray(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    contains(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    elements(): AllJavaClasses['java.lang.Object']['instanceObject']
    addAll(
      arg0: number,
      arg1: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    addAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    first(): AllJavaClasses['java.lang.Object']['instanceObject']
    find(
      arg0: AllJavaClasses['net.rwhps.server.func.FindSeq']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.func.FindSeq']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    find(
      arg0: AllJavaClasses['net.rwhps.server.func.FindSeq']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    set(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getSize(): number
    peek(): AllJavaClasses['java.lang.Object']['instanceObject']
    removeFirst(): AllJavaClasses['java.lang.Object']['instanceObject']
    removeAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    retainAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    listIterator(
      arg0: number,
    ): AllJavaClasses['java.util.ListIterator']['instanceObject']
    listIterator(): AllJavaClasses['java.util.ListIterator']['instanceObject']
    containsAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    pop(): AllJavaClasses['java.lang.Object']['instanceObject']
    any(): boolean
    eachControlAll(
      arg0: AllJavaClasses['net.rwhps.server.func.FindSeq']['instanceObject'],
    ): void
    eachAllFind(
      arg0: AllJavaClasses['net.rwhps.server.func.FindSeq']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.func.ConsSeq']['instanceObject'],
    ): void
    eachAllFinds(
      arg0: AllJavaClasses['net.rwhps.server.func.FindSeq']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.func.FindSeq']['instanceObject'],
      arg2: AllJavaClasses['net.rwhps.server.func.ConsSeq']['instanceObject'],
    ): AllJavaClasses['kotlin.Unit']['instanceObject']
    eachFind(
      arg0: AllJavaClasses['net.rwhps.server.func.FindSeq']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.func.ConsSeq']['instanceObject'],
    ): AllJavaClasses['kotlin.Unit']['instanceObject']
    removeAt(arg0: number): AllJavaClasses['java.lang.Object']['instanceObject']
    eachAll(
      arg0: AllJavaClasses['net.rwhps.server.func.ConsSeq']['instanceObject'],
    ): void
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<AllJavaClasses['java.util.List']['instanceObject'], '__javaClass'>) &
    Omit<
      AllJavaClasses['kotlin.jvm.internal.markers.KMutableList']['instanceObject'],
      '__javaClass'
    >) &
    Omit<
      AllJavaClasses['kotlin.jvm.internal.markers.KMappedMarker']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_kotlin_jvm_functions_Function1 = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlin.jvm.functions.Function1'
    invoke(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
  } & Omit<AllJavaClasses['kotlin.Function']['instanceObject'], '__javaClass'>
}
type AllJavaClass_kotlin_Function = {
  staticObject: object
  instanceObject: { __javaClass: 'kotlin.Function' }
}
type AllJavaClass_net_rwhps_server_func_FindSeq = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.func.FindSeq'
    invoke(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_net_rwhps_server_func_ConsSeq = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.func.ConsSeq'
    invoke(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
  }
}
type AllJavaClass_kotlin_Unit = {
  staticObject: { INSTANCE: AllJavaClasses['kotlin.Unit']['instanceObject'] }
  instanceObject: { __javaClass: 'kotlin.Unit'; toString(): string } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_kotlin_jvm_internal_markers_KMutableList = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlin.jvm.internal.markers.KMutableList'
  } & Omit<
    AllJavaClasses['kotlin.jvm.internal.markers.KMutableCollection']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_kotlin_jvm_internal_markers_KMutableCollection = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlin.jvm.internal.markers.KMutableCollection'
  } & Omit<
    AllJavaClasses['kotlin.jvm.internal.markers.KMutableIterable']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_kotlin_jvm_internal_markers_KMutableIterable = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlin.jvm.internal.markers.KMutableIterable'
  } & Omit<
    AllJavaClasses['kotlin.jvm.internal.markers.KMappedMarker']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_net_rwhps_server_func_Prov = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.func.Prov'
    get(): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_net_rwhps_server_func_KeyValue = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.func.KeyValue']['instanceObject']
    copy$default(
      arg0: AllJavaClasses['net.rwhps.server.func.KeyValue']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: number,
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.func.KeyValue']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.func.KeyValue'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getValue(): AllJavaClasses['java.lang.Object']['instanceObject']
    getKey(): AllJavaClasses['java.lang.Object']['instanceObject']
    copy(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.func.KeyValue']['instanceObject']
    component1(): AllJavaClasses['java.lang.Object']['instanceObject']
    component2(): AllJavaClasses['java.lang.Object']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_func_FindMapKV = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.func.FindMapKV'
    invoke(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_net_rwhps_server_func_ConsMap = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.func.ConsMap'
    invoke(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
  }
}
type AllJavaClass_net_rwhps_server_func_FindMapE = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.func.FindMapE'
    invoke(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
  }
}
type AllJavaClass_kotlin_jvm_internal_markers_KMutableMap = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlin.jvm.internal.markers.KMutableMap'
  } & Omit<
    AllJavaClasses['kotlin.jvm.internal.markers.KMappedMarker']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_net_rwhps_server_io_output_CompressOutputStream = {
  staticObject: {
    Companion: AllJavaClasses['net.rwhps.server.io.output.CompressOutputStream$Companion']['instanceObject']
    new (
      arg0: string,
      arg1: AllJavaClasses['net.rwhps.server.io.output.DisableSyncByteArrayOutputStream']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.io.output.CompressOutputStream']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.io.output.CompressOutputStream'
    getHead(): string
  } & Omit<
    AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_net_rwhps_server_io_output_CompressOutputStream$Companion = {
  staticObject: {
    new (
      arg0: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.io.output.CompressOutputStream$Companion']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.io.output.CompressOutputStream$Companion'
    getZipOutputStream(
      arg0: string,
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.io.output.CompressOutputStream']['instanceObject']
    get7zOutputStream(
      arg0: string,
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.io.output.CompressOutputStream']['instanceObject']
    getGzipOutputStream(
      arg0: string,
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.io.output.CompressOutputStream']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_io_output_DisableSyncByteArrayOutputStream =
  {
    staticObject: {
      new (): AllJavaClasses['net.rwhps.server.io.output.DisableSyncByteArrayOutputStream']['instanceObject']
      new (
        arg0: number,
        arg1: number,
        arg2: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
      ): AllJavaClasses['net.rwhps.server.io.output.DisableSyncByteArrayOutputStream']['instanceObject']
      new (
        arg0: number,
      ): AllJavaClasses['net.rwhps.server.io.output.DisableSyncByteArrayOutputStream']['instanceObject']
    }
    instanceObject: {
      __javaClass: 'net.rwhps.server.io.output.DisableSyncByteArrayOutputStream'
      size(): number
      reset(): void
      write(
        arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
      ): number
      write(arg0: number[], arg1: number, arg2: number): void
      write(arg0: number): void
      writeBytes(arg0: number[]): void
      writeTo(
        arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      ): void
      toByteArray(): number[]
    } & Omit<
      AllJavaClasses['net.rwhps.server.io.output.AbstractByteArrayOutputStream']['instanceObject'],
      '__javaClass'
    >
  }
type AllJavaClass_net_rwhps_server_func_Control$EventNext = {
  staticObject: {
    CONTINUE: AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
    STOPPED: AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
    values(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
    getEntries(): AllJavaClasses['kotlin.enums.EnumEntries']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.func.Control$EventNext'
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_net_core_server_AbstractNetConnect = {
  staticObject: {
    new (
      arg0: AllJavaClasses['net.rwhps.server.net.core.ConnectionAgreement']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.net.core.server.AbstractNetConnect']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.net.core.server.AbstractNetConnect'
    debug(
      arg0: AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject'],
    ): void
    getPort(): number
    getVersion(): string
    getIpCountryAll(): string
    getIpLong24(): string
    getIpCountry(): string
    getIp(): string
    disconnect(): void
    setNumberOfRetries(arg0: number): void
    setTryBoolean(arg0: boolean): void
    getNumberOfRetries(): number
    lastReceivedTime(): void
    getTryBoolean(): boolean
    receivePacket(
      arg0: AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject'],
    ): void
    exCommand(
      arg0: AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject'],
    ): boolean
    sendPacket(
      arg0: AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject'],
    ): void
    isDis(): boolean
    sendDebug(arg0: string): void
    setDis(arg0: boolean): void
    getConnectReceiveData(): AllJavaClasses['net.rwhps.server.data.temp.ConnectReceiveData']['instanceObject']
    getLastReceivedTime(): number
    getUseConnectionAgreement(): string
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_data_temp_ConnectReceiveData = {
  staticObject: {
    new (): AllJavaClasses['net.rwhps.server.data.temp.ConnectReceiveData']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.data.temp.ConnectReceiveData'
    getInputPassword(): boolean
    setInputPassword(arg0: boolean): void
    setReceiveBigPacket(arg0: boolean): void
    getReceiveBigPacket(): boolean
    getReceiveBigPacketCount(): AllJavaClasses['net.rwhps.server.data.totalizer.TimeAndNumber']['instanceObject']
    setReceiveBigPacketCount(
      arg0: AllJavaClasses['net.rwhps.server.data.totalizer.TimeAndNumber']['instanceObject'],
    ): void
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_data_totalizer_TimeAndNumber = {
  staticObject: {
    new (
      arg0: number,
      arg1: number,
    ): AllJavaClasses['net.rwhps.server.data.totalizer.TimeAndNumber']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.data.totalizer.TimeAndNumber'
    reset(): void
    getCount(): number
    checkStatus(): boolean
    setCount(arg0: number): void
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_net_GroupNet = {
  staticObject: {
    new (): AllJavaClasses['net.rwhps.server.net.GroupNet']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.net.GroupNet'
    remove(
      arg0: AllJavaClasses['net.rwhps.server.net.core.ConnectionAgreement']['instanceObject'],
    ): void
    remove(
      arg0: AllJavaClasses['io.netty.channel.Channel']['instanceObject'],
    ): void
    flush(): AllJavaClasses['io.netty.channel.group.ChannelGroup']['instanceObject']
    add(
      arg0: AllJavaClasses['io.netty.channel.Channel']['instanceObject'],
    ): void
    add(
      arg0: AllJavaClasses['net.rwhps.server.net.core.ConnectionAgreement']['instanceObject'],
    ): void
    broadcast(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
    disconnect(): void
    broadcastAndUDP(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_io_netty_channel_group_ChannelGroup = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'io.netty.channel.group.ChannelGroup'
    name(): string
    flush(
      arg0: AllJavaClasses['io.netty.channel.group.ChannelMatcher']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.group.ChannelGroup']['instanceObject']
    flush(): AllJavaClasses['io.netty.channel.group.ChannelGroup']['instanceObject']
    find(
      arg0: AllJavaClasses['io.netty.channel.ChannelId']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.Channel']['instanceObject']
    write(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['io.netty.channel.group.ChannelMatcher']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    write(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    write(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['io.netty.channel.group.ChannelMatcher']['instanceObject'],
      arg2: boolean,
    ): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    close(): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    close(
      arg0: AllJavaClasses['io.netty.channel.group.ChannelMatcher']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    writeAndFlush(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['io.netty.channel.group.ChannelMatcher']['instanceObject'],
      arg2: boolean,
    ): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    writeAndFlush(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    writeAndFlush(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['io.netty.channel.group.ChannelMatcher']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    disconnect(
      arg0: AllJavaClasses['io.netty.channel.group.ChannelMatcher']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    disconnect(): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    deregister(
      arg0: AllJavaClasses['io.netty.channel.group.ChannelMatcher']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    deregister(): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    flushAndWrite(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['io.netty.channel.group.ChannelMatcher']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    flushAndWrite(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    newCloseFuture(
      arg0: AllJavaClasses['io.netty.channel.group.ChannelMatcher']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    newCloseFuture(): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
  } & Omit<AllJavaClasses['java.util.Set']['instanceObject'], '__javaClass'>) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_io_netty_channel_group_ChannelMatcher = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.channel.group.ChannelMatcher'
    matches(
      arg0: AllJavaClasses['io.netty.channel.Channel']['instanceObject'],
    ): boolean
  }
}
type AllJavaClass_io_netty_channel_group_ChannelGroupFuture = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'io.netty.channel.group.ChannelGroupFuture'
    group(): AllJavaClasses['io.netty.channel.group.ChannelGroup']['instanceObject']
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    cause(): AllJavaClasses['io.netty.channel.group.ChannelGroupException']['instanceObject']
    find(
      arg0: AllJavaClasses['io.netty.channel.Channel']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelFuture']['instanceObject']
    await(): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    sync(): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    awaitUninterruptibly(): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    addListener(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    addListeners(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'][],
    ): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    removeListeners(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'][],
    ): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    removeListener(
      arg0: AllJavaClasses['io.netty.util.concurrent.GenericFutureListener']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    syncUninterruptibly(): AllJavaClasses['io.netty.channel.group.ChannelGroupFuture']['instanceObject']
    isPartialFailure(): boolean
    isPartialSuccess(): boolean
    isSuccess(): boolean
  } & Omit<
    AllJavaClasses['io.netty.util.concurrent.Future']['instanceObject'],
    '__javaClass'
  >) &
    Omit<AllJavaClasses['java.lang.Iterable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_io_netty_channel_group_ChannelGroupException = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.group.ChannelGroupException']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'io.netty.channel.group.ChannelGroupException'
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
  } & Omit<
    AllJavaClasses['io.netty.channel.ChannelException']['instanceObject'],
    '__javaClass'
  >) &
    Omit<AllJavaClasses['java.lang.Iterable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_io_netty_channel_ChannelException = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelException']['instanceObject']
    new (
      arg0: string,
    ): AllJavaClasses['io.netty.channel.ChannelException']['instanceObject']
    new (
      arg0: string,
      arg1: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['io.netty.channel.ChannelException']['instanceObject']
    new (): AllJavaClasses['io.netty.channel.ChannelException']['instanceObject']
  }
  instanceObject: { __javaClass: 'io.netty.channel.ChannelException' } & Omit<
    AllJavaClasses['java.lang.RuntimeException']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_RuntimeException = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['java.lang.RuntimeException']['instanceObject']
    new (
      arg0: string,
      arg1: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['java.lang.RuntimeException']['instanceObject']
    new (
      arg0: string,
    ): AllJavaClasses['java.lang.RuntimeException']['instanceObject']
    new (): AllJavaClasses['java.lang.RuntimeException']['instanceObject']
  }
  instanceObject: { __javaClass: 'java.lang.RuntimeException' } & Omit<
    AllJavaClasses['java.lang.Exception']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_Exception = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['java.lang.Exception']['instanceObject']
    new (
      arg0: string,
      arg1: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['java.lang.Exception']['instanceObject']
    new (arg0: string): AllJavaClasses['java.lang.Exception']['instanceObject']
    new (): AllJavaClasses['java.lang.Exception']['instanceObject']
  }
  instanceObject: { __javaClass: 'java.lang.Exception' } & Omit<
    AllJavaClasses['java.lang.Throwable']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_kotlin_jvm_functions_Function0 = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlin.jvm.functions.Function0'
    invoke(): AllJavaClasses['java.lang.Object']['instanceObject']
  } & Omit<AllJavaClasses['kotlin.Function']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_game_event_core_AbstractGlobalEvent = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.event.core.AbstractGlobalEvent'
  } & Omit<
    AllJavaClasses['net.rwhps.server.game.event.core.AbstractEventCore']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_net_rwhps_server_game_event_core_AbstractEventCore = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.event.core.AbstractEventCore'
    status(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
  }
}
type AllJavaClass_net_rwhps_server_game_event_global_NetConnectNewEvent = {
  staticObject: {
    new (
      arg0: AllJavaClasses['net.rwhps.server.net.core.ConnectionAgreement']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.event.global.NetConnectNewEvent']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.game.event.global.NetConnectNewEvent'
    status(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
    setResult(arg0: boolean): void
    getResult(): boolean
    getConnectionAgreement(): AllJavaClasses['net.rwhps.server.net.core.ConnectionAgreement']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['net.rwhps.server.game.event.core.AbstractGlobalEvent']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_net_rwhps_server_game_event_global_ServerConsolePrintEvent = {
  staticObject: {
    new (
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.game.event.global.ServerConsolePrintEvent']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.game.event.global.ServerConsolePrintEvent'
    status(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
    getPrint(): string
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['net.rwhps.server.game.event.core.AbstractGlobalEvent']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_net_rwhps_server_game_event_global_ServerHessLoadEvent = {
  staticObject: {
    new (
      arg0: string,
      arg1: AllJavaClasses['net.rwhps.server.game.headless.core.AbstractGameModule']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.event.global.ServerHessLoadEvent']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.game.event.global.ServerHessLoadEvent'
    status(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
    getGameModule(): AllJavaClasses['net.rwhps.server.game.headless.core.AbstractGameModule']['instanceObject']
    getLoadID(): string
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['net.rwhps.server.game.event.core.AbstractGlobalEvent']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_net_rwhps_server_game_headless_core_AbstractGameModule = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.headless.core.AbstractGameModule'
    getGameFast(): AllJavaClasses['net.rwhps.server.game.headless.core.AbstractGameFast']['instanceObject']
    getGameUnitData(): AllJavaClasses['net.rwhps.server.game.headless.core.AbstractGameUnitData']['instanceObject']
    getGameHessData(): AllJavaClasses['net.rwhps.server.game.headless.core.AbstractGameHessData']['instanceObject']
    getEventManage(): AllJavaClasses['net.rwhps.server.game.event.EventManage']['instanceObject']
    getGameFunction(): AllJavaClasses['net.rwhps.server.game.headless.core.AbstractGameFunction']['instanceObject']
    getUseClassLoader(): AllJavaClasses['java.lang.ClassLoader']['instanceObject']
    getGameLinkData(): AllJavaClasses['net.rwhps.server.game.headless.core.link.AbstractLinkGameData']['instanceObject']
    getGameScriptRoot(): AllJavaClasses['net.rwhps.server.game.headless.core.scripts.AbstractScriptRoot']['instanceObject']
    getGameLinkNet(): AllJavaClasses['net.rwhps.server.game.headless.core.link.AbstractLinkGameNet']['instanceObject']
    getGameLinkFunction(): AllJavaClasses['net.rwhps.server.game.headless.core.link.AbstractLinkGameFunction']['instanceObject']
    getGameScriptMultiPlayer(): AllJavaClasses['net.rwhps.server.game.headless.core.scripts.AbstractScriptMultiPlayer']['instanceObject']
    getRoom(): AllJavaClasses['net.rwhps.server.game.room.ServerRoom']['instanceObject']
  }
}
type AllJavaClass_net_rwhps_server_game_headless_core_AbstractGameFast = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.headless.core.AbstractGameFast'
    filteredPacket(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
  }
}
type AllJavaClass_net_rwhps_server_game_headless_core_AbstractGameUnitData = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.headless.core.AbstractGameUnitData'
    reloadUnitData(): void
    getUnitData(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.struct.map.OrderedMap']['instanceObject']
    getRwModLoadInfo(): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    getUseMod(): boolean
    setUseMod(arg0: boolean): void
  }
}
type AllJavaClass_net_rwhps_server_struct_map_OrderedMap = {
  staticObject: {
    new (
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.struct.map.OrderedMap']['instanceObject']
    new (): AllJavaClasses['net.rwhps.server.struct.map.OrderedMap']['instanceObject']
    new (
      arg0: number,
      arg1: boolean,
      arg2: number,
      arg3: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.map.OrderedMap']['instanceObject']
    new (
      arg0: number,
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.map.OrderedMap']['instanceObject']
    new (
      arg0: boolean,
      arg1: number,
      arg2: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.map.OrderedMap']['instanceObject']
    new (
      arg0: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.map.OrderedMap']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.struct.map.OrderedMap'
  } & Omit<
    AllJavaClasses['net.rwhps.server.struct.map.BaseMap']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_net_rwhps_server_game_headless_core_AbstractGameHessData = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.headless.core.AbstractGameHessData'
    clean(): void
    getTickHess(): number
    getTickNetHess(): number
    existPlayer(arg0: number): boolean
    getDefPlayerData(): AllJavaClasses['net.rwhps.server.game.headless.core.link.AbstractLinkPlayerData']['instanceObject']
    getGameOverData(): AllJavaClasses['net.rwhps.server.game.event.game.ServerGameOverEvent$GameOverData']['instanceObject']
    getPlayerData(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.game.headless.core.link.AbstractLinkPlayerData']['instanceObject']
    getPlayerAIData(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.game.headless.core.link.AbstractLinkPlayerData']['instanceObject']
    getHeadlessAIServer(): AllJavaClasses['net.rwhps.server.net.core.server.AbstractNetConnectServer']['instanceObject']
    getPlayerBirthPointXY(): void
    getWin(arg0: number): boolean
  }
}
type AllJavaClass_net_rwhps_server_game_headless_core_link_AbstractLinkPlayerData =
  {
    staticObject: object
    instanceObject: {
      __javaClass: 'net.rwhps.server.game.headless.core.link.AbstractLinkPlayerData'
      getName(): string
      setColor(arg0: number): void
      getCredits(): number
      setCredits(arg0: number): void
      getExperimentalsKilled(): number
      getExperimentalsLost(): number
      updateDate(): void
      getSurvive(): boolean
      getSite(): number
      getTeam(): number
      setTeam(arg0: number): void
      setSite(arg0: number): void
      getColor(): number
      getUnitsLost(): number
      setStartUnit(arg0: number): void
      getBuildingsKilled(): number
      getBuildingsLost(): number
      getStartUnit(): number
      setAiDifficulty(arg0: number): void
      removePlayer(): void
      getConnectHexID(): string
      getUnitsKilled(): number
      getAiDifficulty(): number
    }
  }
type AllJavaClass_net_rwhps_server_game_event_game_ServerGameOverEvent$GameOverData =
  {
    staticObject: {
      new (
        arg0: number,
        arg1: AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject'],
        arg2: AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject'],
        arg3: string,
        arg4: AllJavaClasses['net.rwhps.server.struct.map.ObjectMap']['instanceObject'],
        arg5: string,
      ): AllJavaClasses['net.rwhps.server.game.event.game.ServerGameOverEvent$GameOverData']['instanceObject']
      copy$default(
        arg0: AllJavaClasses['net.rwhps.server.game.event.game.ServerGameOverEvent$GameOverData']['instanceObject'],
        arg1: number,
        arg2: AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject'],
        arg3: AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject'],
        arg4: string,
        arg5: AllJavaClasses['net.rwhps.server.struct.map.ObjectMap']['instanceObject'],
        arg6: string,
        arg7: number,
        arg8: AllJavaClasses['java.lang.Object']['instanceObject'],
      ): AllJavaClasses['net.rwhps.server.game.event.game.ServerGameOverEvent$GameOverData']['instanceObject']
    }
    instanceObject: {
      __javaClass: 'net.rwhps.server.game.event.game.ServerGameOverEvent$GameOverData'
      equals(
        arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      ): boolean
      toString(): string
      hashCode(): number
      copy(
        arg0: number,
        arg1: AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject'],
        arg2: AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject'],
        arg3: string,
        arg4: AllJavaClasses['net.rwhps.server.struct.map.ObjectMap']['instanceObject'],
        arg5: string,
      ): AllJavaClasses['net.rwhps.server.game.event.game.ServerGameOverEvent$GameOverData']['instanceObject']
      component1(): number
      component2(): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
      component4(): string
      component5(): AllJavaClasses['net.rwhps.server.struct.map.ObjectMap']['instanceObject']
      component3(): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
      getPlayerData(): AllJavaClasses['net.rwhps.server.struct.map.ObjectMap']['instanceObject']
      component6(): string
      getMapName(): string
      getWinPlayerList(): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
      getAllPlayerList(): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
      getGameTime(): number
      getReplayName(): string
    } & Omit<
      AllJavaClasses['java.lang.Object']['instanceObject'],
      '__javaClass'
    >
  }
type AllJavaClass_net_rwhps_server_struct_map_ObjectMap = {
  staticObject: {
    Companion: AllJavaClasses['net.rwhps.server.struct.map.ObjectMap$Companion']['instanceObject']
    new (
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.struct.map.ObjectMap']['instanceObject']
    new (): AllJavaClasses['net.rwhps.server.struct.map.ObjectMap']['instanceObject']
    new (
      arg0: number,
      arg1: boolean,
      arg2: number,
      arg3: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.map.ObjectMap']['instanceObject']
    new (
      arg0: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.map.ObjectMap']['instanceObject']
    new (
      arg0: boolean,
      arg1: number,
      arg2: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.map.ObjectMap']['instanceObject']
    new (
      arg0: number,
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.map.ObjectMap']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.struct.map.ObjectMap'
  } & Omit<
    AllJavaClasses['net.rwhps.server.struct.map.BaseMap']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_net_rwhps_server_struct_map_ObjectMap$Companion = {
  staticObject: {
    new (
      arg0: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.map.ObjectMap$Companion']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.struct.map.ObjectMap$Companion'
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['net.rwhps.server.struct.map.ObjectMap']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_net_core_server_AbstractNetConnectServer = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.net.core.server.AbstractNetConnectServer'
    gameSummon(arg0: string, arg1: number, arg2: number): void
    getPlayer(): AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject']
    sendPing(): void
    sendKick(arg0: string): void
    sendChatMessage(arg0: string, arg1: string, arg2: number): void
    receiveCommand(
      arg0: AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject'],
    ): void
    sendTeamData(
      arg0: AllJavaClasses['net.rwhps.server.io.output.CompressOutputStream']['instanceObject'],
    ): void
    receiveChat(
      arg0: AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject'],
    ): void
    sendServerInfo(arg0: boolean): void
    sendStartGame(): void
    getGameSaveData(
      arg0: AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject'],
    ): number[]
    sendGameSave(
      arg0: AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject'],
    ): void
    registerConnection(
      arg0: AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject'],
    ): void
    getPlayerInfo(
      arg0: AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject'],
    ): boolean
    receiveCheckPacket(
      arg0: AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject'],
    ): void
    sendSystemMessage(arg0: string): void
    sendErrorPasswd(): void
    sendSurrender(): void
    getSupportedversionGame(): string
    sendRelayServerTypeReply(
      arg0: AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject'],
    ): void
    getSupportedversionBeta(): boolean
    sendRelayServerType(
      arg0: string,
      arg1: AllJavaClasses['kotlin.jvm.functions.Function1']['instanceObject'],
    ): void
    getPermissionStatus(): AllJavaClasses['net.rwhps.server.net.core.DataPermissionStatus$ServerStatus']['instanceObject']
    getSupportedVersionInt(): number
  }
}
type AllJavaClass_net_rwhps_server_game_player_PlayerHess = {
  staticObject: {
    new (
      arg0: AllJavaClasses['net.rwhps.server.net.core.server.AbstractNetConnectServer']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.util.file.load.I18NBundle']['instanceObject'],
      arg2: AllJavaClasses['net.rwhps.server.game.headless.core.link.AbstractLinkPlayerData']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject']
    new (
      arg0: AllJavaClasses['net.rwhps.server.net.core.server.AbstractNetConnectServer']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.util.file.load.I18NBundle']['instanceObject'],
      arg2: AllJavaClasses['net.rwhps.server.game.headless.core.link.AbstractLinkPlayerData']['instanceObject'],
      arg3: number,
      arg4: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject']
    playerJumpsToAnotherServer$default(
      arg0: AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject'],
      arg1: string,
      arg2: number,
      arg3: number,
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    kickPlayer$default(
      arg0: AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject'],
      arg1: string,
      arg2: number,
      arg3: number,
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.player.PlayerHess'
    getName(): string
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    hashCode(): number
    clear(): void
    getData(arg0: string): AllJavaClasses['java.lang.Object']['instanceObject']
    getData(
      arg0: string,
      arg1: AllJavaClasses['net.rwhps.server.func.Prov']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getData(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getCredits(): number
    setCredits(arg0: number): void
    getExperimentalsKilled(): number
    getExperimentalsLost(): number
    updateDate(): void
    getSurvive(): boolean
    getSite(): number
    getTeam(): number
    setTeam(arg0: number): void
    setSite(arg0: number): void
    getNoSay(): boolean
    setNoSay(arg0: boolean): void
    kickPlayer(arg0: string, arg1: number): void
    kickPlayer(arg0: string): void
    getinput(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): string
    isAi(): boolean
    isAdmin(): boolean
    sendPopUps(
      arg0: string,
      arg1: AllJavaClasses['kotlin.jvm.functions.Function1']['instanceObject'],
    ): void
    setAdmin(arg0: boolean): void
    addData(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    removeData(arg0: string): void
    setCon(
      arg0: AllJavaClasses['net.rwhps.server.net.core.server.AbstractNetConnectServer']['instanceObject'],
    ): void
    getCon(): AllJavaClasses['net.rwhps.server.net.core.server.AbstractNetConnectServer']['instanceObject']
    getUnitsLost(): number
    setStartUnit(arg0: number): void
    getBuildingsKilled(): number
    getBuildingsLost(): number
    getStartUnit(): number
    setAiDifficulty(arg0: number): void
    getConnectHexID(): string
    getUnitsKilled(): number
    getAiDifficulty(): number
    setMuteTime(arg0: number): void
    getLastSentMessage(): string
    sendMessage(
      arg0: AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject'],
      arg1: string,
    ): void
    getAutoAdmin(): boolean
    getTimeTemp(): number
    setLastSentMessage(arg0: string): void
    setKickTime(arg0: number): void
    getMuteTime(): number
    setSuperAdmin(arg0: boolean): void
    getKickTime(): number
    setTimeTemp(arg0: number): void
    getLastMessageTime(): number
    setLastMoveTime(arg0: number): void
    getStatusData(): AllJavaClasses['net.rwhps.server.struct.map.ObjectMap']['instanceObject']
    getPlayerInfo(): string
    getLastMoveTime(): number
    getSuperAdmin(): boolean
    setAutoAdmin(arg0: boolean): void
    setLastMessageTime(arg0: number): void
    sendSystemMessage(arg0: string): void
    getI18NBundle(): AllJavaClasses['net.rwhps.server.util.file.load.I18NBundle']['instanceObject']
    getPlayerPrivateData(): AllJavaClasses['net.rwhps.server.game.headless.core.link.AbstractLinkPlayerData']['instanceObject']
    setPlayerPrivateData(
      arg0: AllJavaClasses['net.rwhps.server.game.headless.core.link.AbstractLinkPlayerData']['instanceObject'],
    ): void
    playerJumpsToAnotherServer(arg0: string): void
    playerJumpsToAnotherServer(arg0: string, arg1: number): void
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_util_file_load_I18NBundle = {
  staticObject: {
    new (
      arg0: AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.file.load.I18NBundle']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.file.load.I18NBundle']['instanceObject']
    access$getLanguageData$p(
      arg0: AllJavaClasses['net.rwhps.server.util.file.load.I18NBundle']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.map.OrderedMap']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.util.file.load.I18NBundle'
    getinput(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): string
    getinputt(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): string
    addLanguageData(
      arg0: AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject'],
    ): void
    addLang$Server_Core(arg0: string, arg1: string, arg2: boolean): boolean
    addLang$Server_Core(
      arg0: AllJavaClasses['net.rwhps.server.util.file.load.LoadIni']['instanceObject'],
      arg1: boolean,
    ): boolean
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_util_file_FileUtils = {
  staticObject: {
    Companion: AllJavaClasses['net.rwhps.server.util.file.FileUtils$Companion']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
      arg1: boolean,
      arg2: number,
      arg3: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    new (
      arg0: string,
      arg1: boolean,
      arg2: number,
      arg3: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
      arg1: string,
      arg2: boolean,
      arg3: boolean,
      arg4: number,
      arg5: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    new (
      arg0: string,
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    getFile(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    getPath(arg0: string): string
    writeByteOutputStream$default(
      arg0: AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject'],
      arg1: boolean,
      arg2: number,
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.io.FileOutputStream']['instanceObject']
    access$setDefaultFilePath$cp(arg0: string): void
    access$getDefaultFilePath$cp(): string
    getTempDirectory(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    getMyFilePath(): string
    writeFile$default(
      arg0: AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: boolean,
      arg3: number,
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    readFileListString(
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    readFileString(
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
    ): string
    getTempFile(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    setFilePath(arg0: string): void
    getMyCoreJarStream(): AllJavaClasses['java.io.InputStream']['instanceObject']
    writeFileByte$default(
      arg0: AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject'],
      arg1: number[],
      arg2: boolean,
      arg3: number,
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    getInternalFileStream(
      arg0: string,
    ): AllJavaClasses['java.io.InputStream']['instanceObject']
    getFolder(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    getFolder(): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    getFolder(
      arg0: string,
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    splicePath(arg0: string, arg1: string): string
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.util.file.FileUtils'
    getName(): string
    length(): number
    delete(): boolean
    setReadOnly(): boolean
    copy(
      arg0: AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject'],
    ): void
    getFile(): AllJavaClasses['java.io.File']['instanceObject']
    getPath(): string
    toFile(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    exists(): boolean
    createNewFile(): void
    mkdir(): void
    setPosixFilePermissions(
      arg0: AllJavaClasses['java.nio.file.attribute.PosixFilePermission']['instanceObject'][],
    ): void
    notExists(): boolean
    toFolder(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    getZipDecoder(): AllJavaClasses['net.rwhps.server.util.compression.core.AbstractDecoder']['instanceObject']
    writeFileByte(arg0: number[], arg1: boolean): void
    readFileByte(): number[]
    getFilePollingList(): AllJavaClasses['net.rwhps.server.struct.map.OrderedMap']['instanceObject']
    readFileStringData(): string
    readInputsStream(): AllJavaClasses['java.io.InputStreamReader']['instanceObject']
    getFileList(): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    getInputsStream(): AllJavaClasses['java.io.FileInputStream']['instanceObject']
    writeByteOutputStream(
      arg0: boolean,
    ): AllJavaClasses['java.io.FileOutputStream']['instanceObject']
    getFileListNotNullSizeSort(): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    getFileListNotNullSize(): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    readFileListStringData(): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    getMd5(): string
    writeFile(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: boolean,
    ): void
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_util_file_FileUtils$Companion = {
  staticObject: {
    new (
      arg0: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils$Companion']['instanceObject']
    getFolder$default(
      arg0: AllJavaClasses['net.rwhps.server.util.file.FileUtils$Companion']['instanceObject'],
      arg1: string,
      arg2: boolean,
      arg3: number,
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    access$cehckFolderPath(
      arg0: AllJavaClasses['net.rwhps.server.util.file.FileUtils$Companion']['instanceObject'],
      arg1: string,
      arg2: string,
    ): string
    setFilePath$default(
      arg0: AllJavaClasses['net.rwhps.server.util.file.FileUtils$Companion']['instanceObject'],
      arg1: string,
      arg2: number,
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.util.file.FileUtils$Companion'
    getFile(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    getPath(arg0: string): string
    getTempDirectory(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    getMyFilePath(): string
    readFileListString(
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    readFileString(
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
    ): string
    getTempFile(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    setFilePath(arg0: string): void
    getMyCoreJarStream(): AllJavaClasses['java.io.InputStream']['instanceObject']
    getInternalFileStream(
      arg0: string,
    ): AllJavaClasses['java.io.InputStream']['instanceObject']
    getFolder(): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    getFolder(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    getFolder(
      arg0: string,
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    splicePath(arg0: string, arg1: string): string
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_file_attribute_PosixFilePermission = {
  staticObject: {
    OWNER_READ: AllJavaClasses['java.nio.file.attribute.PosixFilePermission']['instanceObject']
    OWNER_WRITE: AllJavaClasses['java.nio.file.attribute.PosixFilePermission']['instanceObject']
    OWNER_EXECUTE: AllJavaClasses['java.nio.file.attribute.PosixFilePermission']['instanceObject']
    GROUP_READ: AllJavaClasses['java.nio.file.attribute.PosixFilePermission']['instanceObject']
    GROUP_WRITE: AllJavaClasses['java.nio.file.attribute.PosixFilePermission']['instanceObject']
    GROUP_EXECUTE: AllJavaClasses['java.nio.file.attribute.PosixFilePermission']['instanceObject']
    OTHERS_READ: AllJavaClasses['java.nio.file.attribute.PosixFilePermission']['instanceObject']
    OTHERS_WRITE: AllJavaClasses['java.nio.file.attribute.PosixFilePermission']['instanceObject']
    OTHERS_EXECUTE: AllJavaClasses['java.nio.file.attribute.PosixFilePermission']['instanceObject']
    values(): AllJavaClasses['java.nio.file.attribute.PosixFilePermission']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['java.nio.file.attribute.PosixFilePermission']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.nio.file.attribute.PosixFilePermission'
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_io_FileOutputStream = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.io.FileDescriptor']['instanceObject'],
    ): AllJavaClasses['java.io.FileOutputStream']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
      arg1: boolean,
    ): AllJavaClasses['java.io.FileOutputStream']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
    ): AllJavaClasses['java.io.FileOutputStream']['instanceObject']
    new (
      arg0: string,
      arg1: boolean,
    ): AllJavaClasses['java.io.FileOutputStream']['instanceObject']
    new (
      arg0: string,
    ): AllJavaClasses['java.io.FileOutputStream']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.io.FileOutputStream'
    write(arg0: number): void
    write(arg0: number[]): void
    write(arg0: number[], arg1: number, arg2: number): void
    close(): void
    getChannel(): AllJavaClasses['java.nio.channels.FileChannel']['instanceObject']
    getFD(): AllJavaClasses['java.io.FileDescriptor']['instanceObject']
  } & Omit<
    AllJavaClasses['java.io.OutputStream']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_io_FileDescriptor = {
  staticObject: {
    in: AllJavaClasses['java.io.FileDescriptor']['instanceObject']
    out: AllJavaClasses['java.io.FileDescriptor']['instanceObject']
    err: AllJavaClasses['java.io.FileDescriptor']['instanceObject']
    new (): AllJavaClasses['java.io.FileDescriptor']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.io.FileDescriptor'
    sync(): void
    valid(): boolean
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_util_compression_core_AbstractDecoder = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.util.compression.core.AbstractDecoder'
    close(): void
    getTheFileNameOfTheSpecifiedSuffixInTheZip(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    getSpecifiedSuffixInThePackage(
      arg0: string,
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.map.OrderedMap']['instanceObject']
    getSpecifiedSuffixInThePackageAllFileNameAndPath(
      arg0: AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.map.OrderedMap']['instanceObject']
    getTheFileBytesOfTheSpecifiedSuffixInTheZip(
      arg0: AllJavaClasses['net.rwhps.server.game.GameMaps$MapData']['instanceObject'],
    ): number[]
    getZipAllBytes(
      arg0: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.map.OrderedMap']['instanceObject']
    setPhysicalOrder(arg0: boolean): void
    getZipNameInputStream(
      arg0: string,
    ): AllJavaClasses['java.io.InputStream']['instanceObject']
  } & Omit<AllJavaClasses['java.io.Closeable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_game_GameMaps$MapData = {
  staticObject: {
    new (
      arg0: AllJavaClasses['net.rwhps.server.game.GameMaps$MapType']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.game.GameMaps$MapFileType']['instanceObject'],
      arg2: string,
      arg3: string,
    ): AllJavaClasses['net.rwhps.server.game.GameMaps$MapData']['instanceObject']
    new (
      arg0: AllJavaClasses['net.rwhps.server.game.GameMaps$MapType']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.game.GameMaps$MapFileType']['instanceObject'],
      arg2: string,
    ): AllJavaClasses['net.rwhps.server.game.GameMaps$MapData']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.GameMaps$MapData'
    clean(): void
    getMapFileName(): string
    readMap(): void
    getMapType(): AllJavaClasses['net.rwhps.server.game.GameMaps$MapType']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_game_GameMaps$MapType = {
  staticObject: {
    DefaultMap: AllJavaClasses['net.rwhps.server.game.GameMaps$MapType']['instanceObject']
    CustomMap: AllJavaClasses['net.rwhps.server.game.GameMaps$MapType']['instanceObject']
    SavedGames: AllJavaClasses['net.rwhps.server.game.GameMaps$MapType']['instanceObject']
    values(): AllJavaClasses['net.rwhps.server.game.GameMaps$MapType']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.game.GameMaps$MapType']['instanceObject']
    getEntries(): AllJavaClasses['kotlin.enums.EnumEntries']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.GameMaps$MapType'
    getFileType(): string
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_game_GameMaps$MapFileType = {
  staticObject: {
    File: AllJavaClasses['net.rwhps.server.game.GameMaps$MapFileType']['instanceObject']
    Zip: AllJavaClasses['net.rwhps.server.game.GameMaps$MapFileType']['instanceObject']
    WebDownLoad: AllJavaClasses['net.rwhps.server.game.GameMaps$MapFileType']['instanceObject']
    values(): AllJavaClasses['net.rwhps.server.game.GameMaps$MapFileType']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.game.GameMaps$MapFileType']['instanceObject']
    getEntries(): AllJavaClasses['kotlin.enums.EnumEntries']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.GameMaps$MapFileType'
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_io_InputStreamReader = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
      arg1: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): AllJavaClasses['java.io.InputStreamReader']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['java.io.InputStreamReader']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
    ): AllJavaClasses['java.io.InputStreamReader']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
      arg1: AllJavaClasses['java.nio.charset.CharsetDecoder']['instanceObject'],
    ): AllJavaClasses['java.io.InputStreamReader']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.io.InputStreamReader'
    read(
      arg0: AllJavaClasses['char']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): number
    read(arg0: AllJavaClasses['java.nio.CharBuffer']['instanceObject']): number
    read(): number
    close(): void
    getEncoding(): string
    ready(): boolean
  } & Omit<AllJavaClasses['java.io.Reader']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_io_FileInputStream = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.io.FileDescriptor']['instanceObject'],
    ): AllJavaClasses['java.io.FileInputStream']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
    ): AllJavaClasses['java.io.FileInputStream']['instanceObject']
    new (
      arg0: string,
    ): AllJavaClasses['java.io.FileInputStream']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.io.FileInputStream'
    read(): number
    read(arg0: number[]): number
    read(arg0: number[], arg1: number, arg2: number): number
    close(): void
    readAllBytes(): number[]
    readNBytes(arg0: number): number[]
    transferTo(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
    ): number
    skip(arg0: number): number
    available(): number
    getChannel(): AllJavaClasses['java.nio.channels.FileChannel']['instanceObject']
    getFD(): AllJavaClasses['java.io.FileDescriptor']['instanceObject']
  } & Omit<
    AllJavaClasses['java.io.InputStream']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_net_rwhps_server_util_file_load_LoadIni = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.file.load.LoadIni']['instanceObject']
    new (
      arg0: AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.file.load.LoadIni']['instanceObject']
    readString$default(
      arg0: AllJavaClasses['net.rwhps.server.util.file.load.LoadIni']['instanceObject'],
      arg1: string,
      arg2: string,
      arg3: number,
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): string
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.util.file.load.LoadIni'
    readInt(arg0: string, arg1: number): number
    readFloat(arg0: string, arg1: number): number
    readBoolean(arg0: string, arg1: boolean): boolean
    readLong(arg0: string, arg1: number): number
    readString(arg0: string, arg1: string): string
    readString(arg0: string): string
    getData$Server_Core(): AllJavaClasses['net.rwhps.server.struct.map.OrderedMap']['instanceObject']
    setObject(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_net_core_DataPermissionStatus$ServerStatus =
  {
    staticObject: {
      InitialConnection: AllJavaClasses['net.rwhps.server.net.core.DataPermissionStatus$ServerStatus']['instanceObject']
      CertifiedEnd: AllJavaClasses['net.rwhps.server.net.core.DataPermissionStatus$ServerStatus']['instanceObject']
      values(): AllJavaClasses['net.rwhps.server.net.core.DataPermissionStatus$ServerStatus']['instanceObject'][]
      valueOf(
        arg0: string,
      ): AllJavaClasses['net.rwhps.server.net.core.DataPermissionStatus$ServerStatus']['instanceObject']
      getEntries(): AllJavaClasses['kotlin.enums.EnumEntries']['instanceObject']
    }
    instanceObject: {
      __javaClass: 'net.rwhps.server.net.core.DataPermissionStatus$ServerStatus'
    } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>
  }
type AllJavaClass_net_rwhps_server_game_event_EventManage = {
  staticObject: {
    new (): AllJavaClasses['net.rwhps.server.game.event.EventManage']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.event.EventManage'
    registerListener(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): void
    fire(
      arg0: AllJavaClasses['net.rwhps.server.game.event.core.AbstractEvent']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.concurrent.fature.AbstractFuture']['instanceObject']
  } & Omit<
    AllJavaClasses['net.rwhps.server.game.event.AbstractEventManage']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_net_rwhps_server_util_concurrent_fature_AbstractFuture = {
  staticObject: {
    new (
      arg0: AllJavaClasses['kotlinx.coroutines.Deferred']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.concurrent.fature.AbstractFuture']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.util.concurrent.fature.AbstractFuture'
    cause(): AllJavaClasses['java.lang.Throwable']['instanceObject']
    isDone(): boolean
    cancel(arg0: boolean): boolean
    await(): void
    await(
      arg0: number,
      arg1: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): boolean
    sync(): void
    isCancelled(): boolean
    awaitUninterruptible(): void
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.util.concurrent.Future']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_kotlinx_coroutines_Deferred = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlinx.coroutines.Deferred'
    await(
      arg0: AllJavaClasses['kotlin.coroutines.Continuation']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getCompletionExceptionOrNull(): AllJavaClasses['java.lang.Throwable']['instanceObject']
    getCompleted(): AllJavaClasses['java.lang.Object']['instanceObject']
    getOnAwait(): AllJavaClasses['kotlinx.coroutines.selects.SelectClause1']['instanceObject']
  } & Omit<
    AllJavaClasses['kotlinx.coroutines.Job']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_kotlin_coroutines_Continuation = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlin.coroutines.Continuation'
    getContext(): AllJavaClasses['kotlin.coroutines.CoroutineContext']['instanceObject']
    resumeWith(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
  }
}
type AllJavaClass_kotlin_coroutines_CoroutineContext = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlin.coroutines.CoroutineContext'
    get(
      arg0: AllJavaClasses['kotlin.coroutines.CoroutineContext$Key']['instanceObject'],
    ): AllJavaClasses['kotlin.coroutines.CoroutineContext$Element']['instanceObject']
    plus(
      arg0: AllJavaClasses['kotlin.coroutines.CoroutineContext']['instanceObject'],
    ): AllJavaClasses['kotlin.coroutines.CoroutineContext']['instanceObject']
    fold(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['kotlin.jvm.functions.Function2']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    minusKey(
      arg0: AllJavaClasses['kotlin.coroutines.CoroutineContext$Key']['instanceObject'],
    ): AllJavaClasses['kotlin.coroutines.CoroutineContext']['instanceObject']
  }
}
type AllJavaClass_kotlin_coroutines_CoroutineContext$Element = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlin.coroutines.CoroutineContext$Element'
    get(
      arg0: AllJavaClasses['kotlin.coroutines.CoroutineContext$Key']['instanceObject'],
    ): AllJavaClasses['kotlin.coroutines.CoroutineContext$Element']['instanceObject']
    getKey(): AllJavaClasses['kotlin.coroutines.CoroutineContext$Key']['instanceObject']
    fold(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['kotlin.jvm.functions.Function2']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    minusKey(
      arg0: AllJavaClasses['kotlin.coroutines.CoroutineContext$Key']['instanceObject'],
    ): AllJavaClasses['kotlin.coroutines.CoroutineContext']['instanceObject']
  } & Omit<
    AllJavaClasses['kotlin.coroutines.CoroutineContext']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_kotlin_coroutines_CoroutineContext$Key = {
  staticObject: object
  instanceObject: { __javaClass: 'kotlin.coroutines.CoroutineContext$Key' }
}
type AllJavaClass_kotlin_jvm_functions_Function2 = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlin.jvm.functions.Function2'
    invoke(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
  } & Omit<AllJavaClasses['kotlin.Function']['instanceObject'], '__javaClass'>
}
type AllJavaClass_kotlinx_coroutines_selects_SelectClause1 = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlinx.coroutines.selects.SelectClause1'
  } & Omit<
    AllJavaClasses['kotlinx.coroutines.selects.SelectClause']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_kotlinx_coroutines_selects_SelectClause = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlinx.coroutines.selects.SelectClause'
    getOnCancellationConstructor(): AllJavaClasses['kotlin.jvm.functions.Function3']['instanceObject']
    getClauseObject(): AllJavaClasses['java.lang.Object']['instanceObject']
    getProcessResFunc(): AllJavaClasses['kotlin.jvm.functions.Function3']['instanceObject']
    getRegFunc(): AllJavaClasses['kotlin.jvm.functions.Function3']['instanceObject']
  }
}
type AllJavaClass_kotlin_jvm_functions_Function3 = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlin.jvm.functions.Function3'
    invoke(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
  } & Omit<AllJavaClasses['kotlin.Function']['instanceObject'], '__javaClass'>
}
type AllJavaClass_kotlinx_coroutines_Job = {
  staticObject: {
    Key: AllJavaClasses['kotlinx.coroutines.Job$Key']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'kotlinx.coroutines.Job'
    join(
      arg0: AllJavaClasses['kotlin.coroutines.Continuation']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getParent(): AllJavaClasses['kotlinx.coroutines.Job']['instanceObject']
    start(): boolean
    cancel(
      arg0: AllJavaClasses['java.util.concurrent.CancellationException']['instanceObject'],
    ): void
    cancel(): void
    cancel(
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): boolean
    isActive(): boolean
    plus(
      arg0: AllJavaClasses['kotlinx.coroutines.Job']['instanceObject'],
    ): AllJavaClasses['kotlinx.coroutines.Job']['instanceObject']
    isCancelled(): boolean
    getChildren(): AllJavaClasses['kotlin.sequences.Sequence']['instanceObject']
    isCompleted(): boolean
    invokeOnCompletion(
      arg0: AllJavaClasses['kotlin.jvm.functions.Function1']['instanceObject'],
    ): AllJavaClasses['kotlinx.coroutines.DisposableHandle']['instanceObject']
    invokeOnCompletion(
      arg0: boolean,
      arg1: boolean,
      arg2: AllJavaClasses['kotlin.jvm.functions.Function1']['instanceObject'],
    ): AllJavaClasses['kotlinx.coroutines.DisposableHandle']['instanceObject']
    attachChild(
      arg0: AllJavaClasses['kotlinx.coroutines.ChildJob']['instanceObject'],
    ): AllJavaClasses['kotlinx.coroutines.ChildHandle']['instanceObject']
    getCancellationException(): AllJavaClasses['java.util.concurrent.CancellationException']['instanceObject']
    getOnJoin(): AllJavaClasses['kotlinx.coroutines.selects.SelectClause0']['instanceObject']
  } & Omit<
    AllJavaClasses['kotlin.coroutines.CoroutineContext$Element']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_kotlinx_coroutines_Job$Key = {
  staticObject: object
  instanceObject: ({ __javaClass: 'kotlinx.coroutines.Job$Key' } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['kotlin.coroutines.CoroutineContext$Key']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_util_concurrent_CancellationException = {
  staticObject: {
    new (): AllJavaClasses['java.util.concurrent.CancellationException']['instanceObject']
    new (
      arg0: string,
    ): AllJavaClasses['java.util.concurrent.CancellationException']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.concurrent.CancellationException'
  } & Omit<
    AllJavaClasses['java.lang.IllegalStateException']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_IllegalStateException = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['java.lang.IllegalStateException']['instanceObject']
    new (
      arg0: string,
      arg1: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['java.lang.IllegalStateException']['instanceObject']
    new (
      arg0: string,
    ): AllJavaClasses['java.lang.IllegalStateException']['instanceObject']
    new (): AllJavaClasses['java.lang.IllegalStateException']['instanceObject']
  }
  instanceObject: { __javaClass: 'java.lang.IllegalStateException' } & Omit<
    AllJavaClasses['java.lang.RuntimeException']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_kotlin_sequences_Sequence = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlin.sequences.Sequence'
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
  }
}
type AllJavaClass_kotlinx_coroutines_DisposableHandle = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlinx.coroutines.DisposableHandle'
    dispose(): void
  }
}
type AllJavaClass_kotlinx_coroutines_ChildHandle = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlinx.coroutines.ChildHandle'
    getParent(): AllJavaClasses['kotlinx.coroutines.Job']['instanceObject']
    childCancelled(
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): boolean
  } & Omit<
    AllJavaClasses['kotlinx.coroutines.DisposableHandle']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_kotlinx_coroutines_ChildJob = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlinx.coroutines.ChildJob'
    parentCancelled(
      arg0: AllJavaClasses['kotlinx.coroutines.ParentJob']['instanceObject'],
    ): void
  } & Omit<
    AllJavaClasses['kotlinx.coroutines.Job']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_kotlinx_coroutines_ParentJob = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlinx.coroutines.ParentJob'
    getChildJobCancellationCause(): AllJavaClasses['java.util.concurrent.CancellationException']['instanceObject']
  } & Omit<
    AllJavaClasses['kotlinx.coroutines.Job']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_kotlinx_coroutines_selects_SelectClause0 = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlinx.coroutines.selects.SelectClause0'
  } & Omit<
    AllJavaClasses['kotlinx.coroutines.selects.SelectClause']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_net_rwhps_server_game_event_core_AbstractEvent = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.event.core.AbstractEvent'
  } & Omit<
    AllJavaClasses['net.rwhps.server.game.event.core.AbstractEventCore']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_net_rwhps_server_game_event_AbstractEventManage = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.event.AbstractEventManage']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.event.AbstractEventManage'
    registerListener(
      arg0: AllJavaClasses['net.rwhps.server.game.event.core.EventListenerHost']['instanceObject'],
    ): void
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_game_event_core_EventListenerHost = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.event.core.EventListenerHost'
    handleException(
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): void
  }
}
type AllJavaClass_net_rwhps_server_game_headless_core_AbstractGameFunction = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.headless.core.AbstractGameFunction'
    suspendMainThreadOperations(
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
    ): void
  }
}
type AllJavaClass_net_rwhps_server_game_headless_core_link_AbstractLinkGameData =
  {
    staticObject: object
    instanceObject: {
      __javaClass: 'net.rwhps.server.game.headless.core.link.AbstractLinkGameData'
      setFog(arg0: number): void
      getIncome(): number
      getFog(): number
      setMaxUnit(arg0: number): void
      getNukes(): boolean
      setNukes(arg0: boolean): void
      getCredits(): number
      setIncome(arg0: number): void
      setCredits(arg0: number): void
      getMaxUnit(): number
      getTeamOperationsSyncObject(): AllJavaClasses['java.lang.Object']['instanceObject']
      getSharedcontrol(): boolean
      getAiDifficuld(): number
      setSharedcontrol(arg0: boolean): void
      setStartingunits(arg0: number): void
      getStartingunits(): number
      setAiDifficuld(arg0: number): void
    }
  }
type AllJavaClass_net_rwhps_server_game_headless_core_scripts_AbstractScriptRoot =
  {
    staticObject: object
    instanceObject: {
      __javaClass: 'net.rwhps.server.game.headless.core.scripts.AbstractScriptRoot'
    }
  }
type AllJavaClass_net_rwhps_server_game_headless_core_link_AbstractLinkGameNet =
  {
    staticObject: object
    instanceObject: {
      __javaClass: 'net.rwhps.server.game.headless.core.link.AbstractLinkGameNet'
      newConnect(arg0: string, arg1: string): void
      startHeadlessServer(arg0: number, arg1: string): void
      closeHeadlessServer(): void
      reBootServer(
        arg0: AllJavaClasses['kotlin.jvm.functions.Function0']['instanceObject'],
      ): void
    }
  }
type AllJavaClass_net_rwhps_server_game_headless_core_link_AbstractLinkGameFunction =
  {
    staticObject: object
    instanceObject: {
      __javaClass: 'net.rwhps.server.game.headless.core.link.AbstractLinkGameFunction'
      saveGame(): void
      getGameFps(): number
      pauseGame(arg0: boolean): void
      battleRoom(arg0: number): void
      allPlayerSync(): void
      getGameDelta(): number
    }
  }
type AllJavaClass_net_rwhps_server_game_headless_core_scripts_AbstractScriptMultiPlayer =
  {
    staticObject: object
    instanceObject: {
      __javaClass: 'net.rwhps.server.game.headless.core.scripts.AbstractScriptMultiPlayer'
      addAi(): void
      multiplayerStart(): void
    }
  }
type AllJavaClass_net_rwhps_server_game_room_ServerRoom = {
  staticObject: {
    new (
      arg0: AllJavaClasses['net.rwhps.server.game.headless.core.AbstractGameModule']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.room.ServerRoom']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.room.ServerRoom'
    roomID: string
    roomStartGame$Server_Core(): void
    battleRoom$Server_Core(): void
    setRoomID(arg0: string): void
    getCall(): AllJavaClasses['net.rwhps.server.game.manage.CallManage']['instanceObject']
    getMaps(): AllJavaClasses['net.rwhps.server.game.GameMaps']['instanceObject']
    getEndTime(): number
    isAfk(): boolean
    getRoomID(): string
    setAfk(arg0: boolean): void
    setGameOverData$Server_Core(
      arg0: AllJavaClasses['net.rwhps.server.game.event.game.ServerGameOverEvent$GameOverData']['instanceObject'],
    ): void
    getGameOverData$Server_Core(): AllJavaClasses['net.rwhps.server.game.event.game.ServerGameOverEvent$GameOverData']['instanceObject']
    getFlagData(): AllJavaClasses['net.rwhps.server.data.temp.ServerCacheFlag']['instanceObject']
    getStartTime(): number
    getReplayFileName(): string
    isStartGame(): boolean
    getClientHandler(): AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler']['instanceObject']
    setReplayFileName(arg0: string): void
    getPlayerManage(): AllJavaClasses['net.rwhps.server.game.manage.PlayerManage']['instanceObject']
    setStartGame(arg0: boolean): void
    setFlagData(
      arg0: AllJavaClasses['net.rwhps.server.data.temp.ServerCacheFlag']['instanceObject'],
    ): void
    gr$Server_Core(): void
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_game_manage_CallManage = {
  staticObject: {
    new (
      arg0: AllJavaClasses['net.rwhps.server.game.headless.core.AbstractGameModule']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.manage.CallManage']['instanceObject']
    killAllPlayer$default(
      arg0: AllJavaClasses['net.rwhps.server.game.manage.CallManage']['instanceObject'],
      arg1: string,
      arg2: number,
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.manage.CallManage'
    startCheckThread(): void
    sendSystemMessage(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): void
    sendSystemMessage(arg0: string): void
    syncAllPlayer(): void
    killAllPlayer(arg0: string): void
    killAllPlayer(): void
    sendSystemTeamMessageLocal(
      arg0: number,
      arg1: string,
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): void
    sendSystemMessageLocal(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): void
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_game_GameMaps = {
  staticObject: {
    new (): AllJavaClasses['net.rwhps.server.game.GameMaps']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.GameMaps'
    getMapData(): AllJavaClasses['net.rwhps.server.game.GameMaps$MapData']['instanceObject']
    getMapName(): string
    setMapPlayer(arg0: string): void
    getMapPlayer(): string
    getMapType(): AllJavaClasses['net.rwhps.server.game.GameMaps$MapType']['instanceObject']
    setMapData(
      arg0: AllJavaClasses['net.rwhps.server.game.GameMaps$MapData']['instanceObject'],
    ): void
    setMapName(arg0: string): void
    setMapType(
      arg0: AllJavaClasses['net.rwhps.server.game.GameMaps$MapType']['instanceObject'],
    ): void
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_data_temp_ServerCacheFlag = {
  staticObject: {
    new (): AllJavaClasses['net.rwhps.server.data.temp.ServerCacheFlag']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.data.temp.ServerCacheFlag'
    getForcedCloseSendMsg(): boolean
    setForcedCloseSendMsg(arg0: boolean): void
    setSendGameStatusFlag(arg0: boolean): void
    getSendGameStatusFlag(): boolean
    getOneSay(): boolean
    getAiWarn(): boolean
    setOneSay(arg0: boolean): void
    setAi(arg0: boolean): void
    getAi(): boolean
    setAiWarn(arg0: boolean): void
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_util_game_command_CommandHandler = {
  staticObject: {
    new (
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.util.game.command.CommandHandler'
    register(
      arg0: string,
      arg1: string,
      arg2: AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$CommandRunner']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$Command']['instanceObject']
    register(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$CommandRunner']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$Command']['instanceObject']
    register(
      arg0: string,
      arg1: string,
      arg2: AllJavaClasses['net.rwhps.server.func.ConsSeq']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$Command']['instanceObject']
    register(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: AllJavaClasses['net.rwhps.server.func.ConsSeq']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$Command']['instanceObject']
    handleMessage(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$CommandResponse']['instanceObject']
    handleMessage(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$CommandResponse']['instanceObject']
    setPrefix(arg0: string): void
    removeCommand(arg0: string): void
    getCommandList(): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_util_game_command_CommandHandler$Command = {
  staticObject: {
    new (
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$CommandRunner']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$Command']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.util.game.command.CommandHandler$Command'
    text: string
    paramText: string
    description: string
    params: AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$CommandParam']['instanceObject'][]
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_util_game_command_CommandHandler$CommandParam =
  {
    staticObject: {
      new (
        arg0: string,
        arg1: boolean,
        arg2: boolean,
      ): AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$CommandParam']['instanceObject']
    }
    instanceObject: {
      __javaClass: 'net.rwhps.server.util.game.command.CommandHandler$CommandParam'
      name: string
      optional: boolean
      variadic: boolean
    } & Omit<
      AllJavaClasses['java.lang.Object']['instanceObject'],
      '__javaClass'
    >
  }
type AllJavaClass_net_rwhps_server_util_game_command_CommandHandler$CommandRunner =
  {
    staticObject: object
    instanceObject: {
      __javaClass: 'net.rwhps.server.util.game.command.CommandHandler$CommandRunner'
      accept(
        arg0: string[],
        arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      ): void
    }
  }
type AllJavaClass_net_rwhps_server_util_game_command_CommandHandler$CommandResponse =
  {
    staticObject: {
      new (
        arg0: AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$ResponseType']['instanceObject'],
        arg1: AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$Command']['instanceObject'],
        arg2: string,
      ): AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$CommandResponse']['instanceObject']
    }
    instanceObject: {
      __javaClass: 'net.rwhps.server.util.game.command.CommandHandler$CommandResponse'
      type: AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$ResponseType']['instanceObject']
      command: AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$Command']['instanceObject']
      runCommand: string
    } & Omit<
      AllJavaClasses['java.lang.Object']['instanceObject'],
      '__javaClass'
    >
  }
type AllJavaClass_net_rwhps_server_util_game_command_CommandHandler$ResponseType =
  {
    staticObject: {
      noCommand: AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$ResponseType']['instanceObject']
      unknownCommand: AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$ResponseType']['instanceObject']
      fewArguments: AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$ResponseType']['instanceObject']
      manyArguments: AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$ResponseType']['instanceObject']
      valid: AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$ResponseType']['instanceObject']
      values(): AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$ResponseType']['instanceObject'][]
      valueOf(
        arg0: string,
      ): AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler$ResponseType']['instanceObject']
    }
    instanceObject: {
      __javaClass: 'net.rwhps.server.util.game.command.CommandHandler$ResponseType'
    } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>
  }
type AllJavaClass_net_rwhps_server_game_manage_PlayerManage = {
  staticObject: {
    new (
      arg0: AllJavaClasses['net.rwhps.server.game.headless.core.AbstractGameModule']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.manage.PlayerManage']['instanceObject']
    addAbstractPlayer$default(
      arg0: AllJavaClasses['net.rwhps.server.game.manage.PlayerManage']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.net.core.server.AbstractNetConnectServer']['instanceObject'],
      arg2: AllJavaClasses['net.rwhps.server.game.headless.core.link.AbstractLinkPlayerData']['instanceObject'],
      arg3: AllJavaClasses['net.rwhps.server.util.file.load.I18NBundle']['instanceObject'],
      arg4: number,
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.manage.PlayerManage'
    playerGroup: AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    playerAll: AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
    findPlayer(
      arg0: AllJavaClasses['net.rwhps.server.func.StrCons']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject']
    getPlayer(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject']
    addAI$Server_Core(): void
    addAbstractPlayer(
      arg0: AllJavaClasses['net.rwhps.server.net.core.server.AbstractNetConnectServer']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.game.headless.core.link.AbstractLinkPlayerData']['instanceObject'],
      arg2: AllJavaClasses['net.rwhps.server.util.file.load.I18NBundle']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject']
    cleanPlayerAllData(): void
    runPlayerArrayDataRunnable(
      arg0: AllJavaClasses['kotlin.jvm.functions.Function1']['instanceObject'],
    ): void
    getPlayersNameOnTheSameTeam(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.struct.list.Seq']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_func_StrCons = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.func.StrCons'
    invoke(arg0: string): void
    invoke(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): void
  }
}
type AllJavaClass_net_rwhps_server_game_event_global_ServerLoadEvent = {
  staticObject: {
    new (): AllJavaClasses['net.rwhps.server.game.event.global.ServerLoadEvent']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.game.event.global.ServerLoadEvent'
    status(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['net.rwhps.server.game.event.core.AbstractGlobalEvent']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_net_rwhps_server_game_event_global_ServerStartTypeEvent = {
  staticObject: {
    new (
      arg0: AllJavaClasses['net.rwhps.server.net.core.IRwHps$NetType']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.event.global.ServerStartTypeEvent']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.game.event.global.ServerStartTypeEvent'
    status(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
    getServerNetType(): AllJavaClasses['net.rwhps.server.net.core.IRwHps$NetType']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['net.rwhps.server.game.event.core.AbstractGlobalEvent']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_net_rwhps_server_net_core_IRwHps$NetType = {
  staticObject: {
    Companion: AllJavaClasses['net.rwhps.server.net.core.IRwHps$NetType$Companion']['instanceObject']
    ServerProtocol: AllJavaClasses['net.rwhps.server.net.core.IRwHps$NetType']['instanceObject']
    ServerProtocolOld: AllJavaClasses['net.rwhps.server.net.core.IRwHps$NetType']['instanceObject']
    ServerTestProtocol: AllJavaClasses['net.rwhps.server.net.core.IRwHps$NetType']['instanceObject']
    RelayProtocol: AllJavaClasses['net.rwhps.server.net.core.IRwHps$NetType']['instanceObject']
    RelayMulticastProtocol: AllJavaClasses['net.rwhps.server.net.core.IRwHps$NetType']['instanceObject']
    DedicatedToTheBackend: AllJavaClasses['net.rwhps.server.net.core.IRwHps$NetType']['instanceObject']
    NullProtocol: AllJavaClasses['net.rwhps.server.net.core.IRwHps$NetType']['instanceObject']
    values(): AllJavaClasses['net.rwhps.server.net.core.IRwHps$NetType']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.net.core.IRwHps$NetType']['instanceObject']
    getEntries(): AllJavaClasses['kotlin.enums.EnumEntries']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.net.core.IRwHps$NetType'
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_net_core_IRwHps$NetType$Companion = {
  staticObject: {
    new (
      arg0: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.net.core.IRwHps$NetType$Companion']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.net.core.IRwHps$NetType$Companion'
    from(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.net.core.IRwHps$NetType']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_plugin_Plugin = {
  staticObject: {
    new (): AllJavaClasses['net.rwhps.server.plugin.Plugin']['instanceObject']
    loadLang$default(
      arg0: AllJavaClasses['net.rwhps.server.plugin.Plugin']['instanceObject'],
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: boolean,
      arg5: number,
      arg6: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    loadLang$default(
      arg0: AllJavaClasses['net.rwhps.server.plugin.Plugin']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['net.rwhps.server.util.file.load.LoadIni']['instanceObject'],
      arg3: boolean,
      arg4: number,
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.plugin.Plugin'
    pluginDataFileUtils: AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    init(): void
    registerEvents(
      arg0: AllJavaClasses['net.rwhps.server.game.event.EventManage']['instanceObject'],
    ): void
    registerGlobalEvents(
      arg0: AllJavaClasses['net.rwhps.server.game.event.EventGlobalManage']['instanceObject'],
    ): void
    getPluginDataFileUtils(): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    registerRelayCommands(
      arg0: AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler']['instanceObject'],
    ): void
    registerServerCommands(
      arg0: AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler']['instanceObject'],
    ): void
    registerCoreCommands(
      arg0: AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler']['instanceObject'],
    ): void
    registerRelayClientCommands(
      arg0: AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler']['instanceObject'],
    ): void
    registerServerClientCommands(
      arg0: AllJavaClasses['net.rwhps.server.util.game.command.CommandHandler']['instanceObject'],
    ): void
    setPluginDataFileUtils$Server_Core(
      arg0: AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject'],
    ): void
    loadLang(arg0: string, arg1: string, arg2: string): boolean
    loadLang(
      arg0: string,
      arg1: AllJavaClasses['net.rwhps.server.util.file.load.LoadIni']['instanceObject'],
    ): boolean
    loadLang(arg0: string, arg1: string, arg2: string, arg3: boolean): boolean
    loadLang(
      arg0: string,
      arg1: AllJavaClasses['net.rwhps.server.util.file.load.LoadIni']['instanceObject'],
      arg2: boolean,
    ): boolean
    onDisable(): void
    onEnable(): void
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_game_event_EventGlobalManage = {
  staticObject: {
    new (): AllJavaClasses['net.rwhps.server.game.event.EventGlobalManage']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.event.EventGlobalManage'
    registerListener(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): void
    fire(
      arg0: AllJavaClasses['net.rwhps.server.game.event.core.AbstractGlobalEvent']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.concurrent.fature.AbstractFuture']['instanceObject']
  } & Omit<
    AllJavaClasses['net.rwhps.server.game.event.AbstractEventManage']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_net_rwhps_server_game_event_game_PlayerBanEvent = {
  staticObject: {
    new (
      arg0: AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.event.game.PlayerBanEvent']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.game.event.game.PlayerBanEvent'
    status(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
    getPlayer(): AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['net.rwhps.server.game.event.core.AbstractEvent']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_net_rwhps_server_game_event_game_PlayerChatEvent = {
  staticObject: {
    new (
      arg0: AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['net.rwhps.server.game.event.game.PlayerChatEvent']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.game.event.game.PlayerChatEvent'
    getMessage(): string
    status(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
    getPlayer(): AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['net.rwhps.server.game.event.core.AbstractEvent']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_net_rwhps_server_game_event_game_PlayerIpBanEvent = {
  staticObject: {
    new (
      arg0: AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.event.game.PlayerIpBanEvent']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.game.event.game.PlayerIpBanEvent'
    status(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
    getPlayer(): AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['net.rwhps.server.game.event.core.AbstractEvent']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_net_rwhps_server_game_event_game_PlayerIpUnBanEvent = {
  staticObject: {
    new (
      arg0: AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.event.game.PlayerIpUnBanEvent']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.game.event.game.PlayerIpUnBanEvent'
    status(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
    getPlayer(): AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['net.rwhps.server.game.event.core.AbstractEvent']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_net_rwhps_server_game_event_game_PlayerJoinEvent = {
  staticObject: {
    new (
      arg0: AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.event.game.PlayerJoinEvent']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.game.event.game.PlayerJoinEvent'
    status(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
    getPlayer(): AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['net.rwhps.server.game.event.core.AbstractEvent']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_net_rwhps_server_game_event_game_PlayerLeaveEvent = {
  staticObject: {
    new (
      arg0: AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.event.game.PlayerLeaveEvent']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.game.event.game.PlayerLeaveEvent'
    status(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
    getPlayer(): AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['net.rwhps.server.game.event.core.AbstractEvent']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_net_rwhps_server_game_event_game_PlayerOperationUnitEvent = {
  staticObject: {
    new (
      arg0: AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject'],
      arg2: string,
      arg3: number,
      arg4: number,
    ): AllJavaClasses['net.rwhps.server.game.event.game.PlayerOperationUnitEvent']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.game.event.game.PlayerOperationUnitEvent'
    resultStatus: boolean
    status(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
    getPlayer(): AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject']
    getUnitName(): string
    getGameCommandActions(): AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    getX(): number
    getY(): number
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['net.rwhps.server.game.event.core.AbstractEvent']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_net_rwhps_server_game_enums_GameCommandActions = {
  staticObject: {
    Companion: AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions$Companion']['instanceObject']
    MOVE: AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    ATTACK: AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    BUILD: AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    REPAIR: AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    LOADINTO: AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    UNLOADAT: AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    RECLAIM: AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    ATTACKMOVE: AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    LOADUP: AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    PATROL: AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    GUARD: AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    GUARDAT: AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    TOUCHTARGET: AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    FOLLOW: AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    TRIGGERACTION: AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    TRIGGERACTIONWHENINRANGE: AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    SETPASSIVETARGET: AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    UNKNOWN: AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    values(): AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    getEntries(): AllJavaClasses['kotlin.enums.EnumEntries']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.enums.GameCommandActions'
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_game_enums_GameCommandActions$Companion = {
  staticObject: {
    new (
      arg0: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions$Companion']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.enums.GameCommandActions$Companion'
    from(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
    from(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.game.enums.GameCommandActions']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_game_event_game_PlayerUnBanEvent = {
  staticObject: {
    new (
      arg0: AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.event.game.PlayerUnBanEvent']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.game.event.game.PlayerUnBanEvent'
    status(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
    getPlayer(): AllJavaClasses['net.rwhps.server.game.player.PlayerHess']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['net.rwhps.server.game.event.core.AbstractEvent']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_net_rwhps_server_game_event_game_ServerGameOverEvent = {
  staticObject: {
    new (
      arg0: AllJavaClasses['net.rwhps.server.game.event.game.ServerGameOverEvent$GameOverData']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.event.game.ServerGameOverEvent']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.game.event.game.ServerGameOverEvent'
    status(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
    getGameOverData(): AllJavaClasses['net.rwhps.server.game.event.game.ServerGameOverEvent$GameOverData']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['net.rwhps.server.game.event.core.AbstractEvent']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_net_rwhps_server_game_event_game_ServerGameStartEvent = {
  staticObject: {
    new (): AllJavaClasses['net.rwhps.server.game.event.game.ServerGameStartEvent']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.game.event.game.ServerGameStartEvent'
    status(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['net.rwhps.server.game.event.core.AbstractEvent']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_net_rwhps_server_game_event_game_ServerHessStartPort = {
  staticObject: {
    new (): AllJavaClasses['net.rwhps.server.game.event.game.ServerHessStartPort']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.game.event.game.ServerHessStartPort'
    status(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['net.rwhps.server.game.event.core.AbstractEvent']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_net_rwhps_server_game_manage_HeadlessModuleManage = {
  staticObject: {
    INSTANCE: AllJavaClasses['net.rwhps.server.game.manage.HeadlessModuleManage']['instanceObject']
    hpsLoader: string
    addGameModule(
      arg0: string,
      arg1: AllJavaClasses['net.rwhps.server.game.headless.core.AbstractGameModule']['instanceObject'],
    ): void
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.manage.HeadlessModuleManage'
    getHps(): AllJavaClasses['net.rwhps.server.game.headless.core.AbstractGameModule']['instanceObject']
    setHpsLoader(arg0: string): void
    getHpsLoader(): string
    getHessLoaderMap(): AllJavaClasses['net.rwhps.server.struct.map.ObjectMap']['instanceObject']
    initHPS(): boolean
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_game_enums_GameInternalUnits = {
  staticObject: {
    Companion: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits$Companion']['instanceObject']
    extractor: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    landFactory: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    airFactory: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    seaFactory: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    commandCenter: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    turret: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    antiAirTurret: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    builder: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    tank: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    hoverTank: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    artillery: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    helicopter: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    airShip: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    gunShip: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    missileShip: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    gunBoat: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    megaTank: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    laserTank: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    hovercraft: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    ladybug: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    battleShip: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    tankDestroyer: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    heavyTank: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    heavyHoverTank: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    laserDefence: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    dropship: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    tree: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    repairbay: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    NukeLaucher: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    AntiNukeLaucher: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    mammothTank: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    experimentalTank: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    experimentalLandFactory: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    crystalResource: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    wall_v: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    fabricator: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    attackSubmarine: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    builderShip: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    amphibiousJet: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    supplyDepot: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    experimentalHoverTank: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    turret_artillery: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    turret_flamethrower: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    fogRevealer: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    spreadingFire: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    antiAirTurretT2: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    turretT2: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    turretT3: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    damagingBorder: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    zoneMarker: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    editorOrBuilder: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    UNKNOWN: AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    values(): AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    getEntries(): AllJavaClasses['kotlin.enums.EnumEntries']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.enums.GameInternalUnits'
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_game_enums_GameInternalUnits$Companion = {
  staticObject: {
    new (
      arg0: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits$Companion']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.enums.GameInternalUnits$Companion'
    from(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
    from(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.game.enums.GameInternalUnits']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
interface AllJavaClasses {
  'net.rwhps.server.game.event.global.NetConnectCloseEvent': AllJavaClass_net_rwhps_server_game_event_global_NetConnectCloseEvent
  'net.rwhps.server.net.core.ConnectionAgreement': AllJavaClass_net_rwhps_server_net_core_ConnectionAgreement
  'io.netty.channel.ChannelHandlerContext': AllJavaClass_io_netty_channel_ChannelHandlerContext
  'io.netty.channel.ChannelHandler': AllJavaClass_io_netty_channel_ChannelHandler
  'java.lang.Throwable': AllJavaClass_java_lang_Throwable
  'java.io.PrintWriter': AllJavaClass_java_io_PrintWriter
  'java.nio.charset.Charset': AllJavaClass_java_nio_charset_Charset
  'java.lang.Object': AllJavaClass_java_lang_Object
  'java.lang.Class': AllJavaClass_java_lang_Class
  'java.lang.ClassLoader': AllJavaClass_java_lang_ClassLoader
  'java.io.InputStream': AllJavaClass_java_io_InputStream
  'java.io.OutputStream': AllJavaClass_java_io_OutputStream
  'java.io.Closeable': AllJavaClass_java_io_Closeable
  'java.lang.AutoCloseable': AllJavaClass_java_lang_AutoCloseable
  'java.io.Flushable': AllJavaClass_java_io_Flushable
  'java.net.URL': AllJavaClass_java_net_URL
  'java.net.URLStreamHandler': AllJavaClass_java_net_URLStreamHandler
  'java.net.URI': AllJavaClass_java_net_URI
  'java.lang.Comparable': AllJavaClass_java_lang_Comparable
  'java.io.Serializable': AllJavaClass_java_io_Serializable
  'java.net.URLConnection': AllJavaClass_java_net_URLConnection
  'java.security.Permission': AllJavaClass_java_security_Permission
  'java.security.PermissionCollection': AllJavaClass_java_security_PermissionCollection
  'java.util.Enumeration': AllJavaClass_java_util_Enumeration
  'java.util.Iterator': AllJavaClass_java_util_Iterator
  'java.util.function.Consumer': AllJavaClass_java_util_function_Consumer
  'java.util.stream.Stream': AllJavaClass_java_util_stream_Stream
  'java.util.Optional': AllJavaClass_java_util_Optional
  'java.util.function.Function': AllJavaClass_java_util_function_Function
  'java.util.function.Predicate': AllJavaClass_java_util_function_Predicate
  'java.util.function.Supplier': AllJavaClass_java_util_function_Supplier
  'java.lang.Runnable': AllJavaClass_java_lang_Runnable
  'java.util.Comparator': AllJavaClass_java_util_Comparator
  'java.util.function.ToIntFunction': AllJavaClass_java_util_function_ToIntFunction
  'java.util.function.ToLongFunction': AllJavaClass_java_util_function_ToLongFunction
  'java.util.function.ToDoubleFunction': AllJavaClass_java_util_function_ToDoubleFunction
  'java.util.function.IntFunction': AllJavaClass_java_util_function_IntFunction
  'java.util.function.BiConsumer': AllJavaClass_java_util_function_BiConsumer
  'java.util.stream.Collector': AllJavaClass_java_util_stream_Collector
  'java.util.function.BinaryOperator': AllJavaClass_java_util_function_BinaryOperator
  'java.util.function.BiFunction': AllJavaClass_java_util_function_BiFunction
  'java.util.stream.Collector$Characteristics': AllJavaClass_java_util_stream_Collector$Characteristics
  'java.lang.Enum': AllJavaClass_java_lang_Enum
  'java.lang.constant.Constable': AllJavaClass_java_lang_constant_Constable
  'java.util.Set': AllJavaClass_java_util_Set
  'java.util.Collection': AllJavaClass_java_util_Collection
  'java.util.Spliterator': AllJavaClass_java_util_Spliterator
  'java.lang.Iterable': AllJavaClass_java_lang_Iterable
  'java.util.List': AllJavaClass_java_util_List
  'java.util.function.UnaryOperator': AllJavaClass_java_util_function_UnaryOperator
  'java.util.ListIterator': AllJavaClass_java_util_ListIterator
  'java.util.SequencedCollection': AllJavaClass_java_util_SequencedCollection
  'java.util.stream.Stream$Builder': AllJavaClass_java_util_stream_Stream$Builder
  'java.util.stream.IntStream': AllJavaClass_java_util_stream_IntStream
  'java.util.OptionalInt': AllJavaClass_java_util_OptionalInt
  'java.util.function.IntConsumer': AllJavaClass_java_util_function_IntConsumer
  'java.util.function.IntSupplier': AllJavaClass_java_util_function_IntSupplier
  'java.util.PrimitiveIterator$OfInt': AllJavaClass_java_util_PrimitiveIterator$OfInt
  'java.lang.Integer': AllJavaClass_java_lang_Integer
  'java.lang.invoke.MethodHandles$Lookup': AllJavaClass_java_lang_invoke_MethodHandles$Lookup
  'java.lang.invoke.MethodHandleInfo': AllJavaClass_java_lang_invoke_MethodHandleInfo
  'java.lang.invoke.MethodType': AllJavaClass_java_lang_invoke_MethodType
  'java.lang.invoke.TypeDescriptor$OfField': AllJavaClass_java_lang_invoke_TypeDescriptor$OfField
  'java.lang.invoke.TypeDescriptor': AllJavaClass_java_lang_invoke_TypeDescriptor
  'java.lang.invoke.TypeDescriptor$OfMethod': AllJavaClass_java_lang_invoke_TypeDescriptor$OfMethod
  'java.lang.reflect.Member': AllJavaClass_java_lang_reflect_Member
  'java.lang.invoke.MethodHandle': AllJavaClass_java_lang_invoke_MethodHandle
  'java.lang.reflect.Method': AllJavaClass_java_lang_reflect_Method
  'java.lang.reflect.TypeVariable': AllJavaClass_java_lang_reflect_TypeVariable
  'java.lang.reflect.Type': AllJavaClass_java_lang_reflect_Type
  'java.lang.reflect.GenericDeclaration': AllJavaClass_java_lang_reflect_GenericDeclaration
  'java.lang.reflect.AnnotatedElement': AllJavaClass_java_lang_reflect_AnnotatedElement
  'java.lang.annotation.Annotation': AllJavaClass_java_lang_annotation_Annotation
  'java.lang.reflect.AnnotatedType': AllJavaClass_java_lang_reflect_AnnotatedType
  'java.lang.reflect.Executable': AllJavaClass_java_lang_reflect_Executable
  'java.lang.reflect.Parameter': AllJavaClass_java_lang_reflect_Parameter
  'java.lang.reflect.AccessibleObject': AllJavaClass_java_lang_reflect_AccessibleObject
  'java.lang.reflect.Constructor': AllJavaClass_java_lang_reflect_Constructor
  'java.lang.invoke.MethodHandles$Lookup$ClassOption': AllJavaClass_java_lang_invoke_MethodHandles$Lookup$ClassOption
  'java.lang.invoke.VarHandle': AllJavaClass_java_lang_invoke_VarHandle
  'java.lang.invoke.VarHandle$AccessMode': AllJavaClass_java_lang_invoke_VarHandle$AccessMode
  'java.lang.reflect.Field': AllJavaClass_java_lang_reflect_Field
  char: AllJavaClass_char
  'java.lang.CharSequence': AllJavaClass_java_lang_CharSequence
  'java.lang.Number': AllJavaClass_java_lang_Number
  'java.lang.constant.ConstantDesc': AllJavaClass_java_lang_constant_ConstantDesc
  'java.util.PrimitiveIterator': AllJavaClass_java_util_PrimitiveIterator
  'java.util.function.IntUnaryOperator': AllJavaClass_java_util_function_IntUnaryOperator
  'java.util.function.ObjIntConsumer': AllJavaClass_java_util_function_ObjIntConsumer
  'java.util.stream.IntStream$Builder': AllJavaClass_java_util_stream_IntStream$Builder
  'java.util.Spliterator$OfInt': AllJavaClass_java_util_Spliterator$OfInt
  'java.util.Spliterator$OfPrimitive': AllJavaClass_java_util_Spliterator$OfPrimitive
  'java.util.function.IntPredicate': AllJavaClass_java_util_function_IntPredicate
  'java.util.function.IntBinaryOperator': AllJavaClass_java_util_function_IntBinaryOperator
  'java.util.stream.BaseStream': AllJavaClass_java_util_stream_BaseStream
  'java.util.stream.LongStream': AllJavaClass_java_util_stream_LongStream
  'java.util.OptionalLong': AllJavaClass_java_util_OptionalLong
  'java.util.function.LongConsumer': AllJavaClass_java_util_function_LongConsumer
  'java.util.function.LongSupplier': AllJavaClass_java_util_function_LongSupplier
  'java.util.PrimitiveIterator$OfLong': AllJavaClass_java_util_PrimitiveIterator$OfLong
  'java.lang.Long': AllJavaClass_java_lang_Long
  'java.util.function.LongUnaryOperator': AllJavaClass_java_util_function_LongUnaryOperator
  'java.util.function.ObjLongConsumer': AllJavaClass_java_util_function_ObjLongConsumer
  'java.util.stream.LongStream$Builder': AllJavaClass_java_util_stream_LongStream$Builder
  'java.util.Spliterator$OfLong': AllJavaClass_java_util_Spliterator$OfLong
  'java.util.function.LongPredicate': AllJavaClass_java_util_function_LongPredicate
  'java.util.function.LongFunction': AllJavaClass_java_util_function_LongFunction
  'java.util.function.LongBinaryOperator': AllJavaClass_java_util_function_LongBinaryOperator
  'java.util.function.LongToIntFunction': AllJavaClass_java_util_function_LongToIntFunction
  'java.util.stream.DoubleStream': AllJavaClass_java_util_stream_DoubleStream
  'java.util.OptionalDouble': AllJavaClass_java_util_OptionalDouble
  'java.util.function.DoubleConsumer': AllJavaClass_java_util_function_DoubleConsumer
  'java.util.function.DoubleSupplier': AllJavaClass_java_util_function_DoubleSupplier
  'java.util.PrimitiveIterator$OfDouble': AllJavaClass_java_util_PrimitiveIterator$OfDouble
  'java.lang.Double': AllJavaClass_java_lang_Double
  'java.util.function.DoubleUnaryOperator': AllJavaClass_java_util_function_DoubleUnaryOperator
  'java.util.function.ObjDoubleConsumer': AllJavaClass_java_util_function_ObjDoubleConsumer
  'java.util.stream.DoubleStream$Builder': AllJavaClass_java_util_stream_DoubleStream$Builder
  'java.util.Spliterator$OfDouble': AllJavaClass_java_util_Spliterator$OfDouble
  'java.util.function.DoublePredicate': AllJavaClass_java_util_function_DoublePredicate
  'java.util.function.DoubleFunction': AllJavaClass_java_util_function_DoubleFunction
  'java.util.function.DoubleBinaryOperator': AllJavaClass_java_util_function_DoubleBinaryOperator
  'java.util.function.DoubleToIntFunction': AllJavaClass_java_util_function_DoubleToIntFunction
  'java.util.function.DoubleToLongFunction': AllJavaClass_java_util_function_DoubleToLongFunction
  'java.util.stream.DoubleStream$DoubleMapMultiConsumer': AllJavaClass_java_util_stream_DoubleStream$DoubleMapMultiConsumer
  'java.util.DoubleSummaryStatistics': AllJavaClass_java_util_DoubleSummaryStatistics
  'java.util.function.LongToDoubleFunction': AllJavaClass_java_util_function_LongToDoubleFunction
  'java.util.stream.LongStream$LongMapMultiConsumer': AllJavaClass_java_util_stream_LongStream$LongMapMultiConsumer
  'java.util.LongSummaryStatistics': AllJavaClass_java_util_LongSummaryStatistics
  'java.util.function.IntToLongFunction': AllJavaClass_java_util_function_IntToLongFunction
  'java.util.function.IntToDoubleFunction': AllJavaClass_java_util_function_IntToDoubleFunction
  'java.util.stream.IntStream$IntMapMultiConsumer': AllJavaClass_java_util_stream_IntStream$IntMapMultiConsumer
  'java.util.IntSummaryStatistics': AllJavaClass_java_util_IntSummaryStatistics
  'java.security.Guard': AllJavaClass_java_security_Guard
  'java.net.FileNameMap': AllJavaClass_java_net_FileNameMap
  'java.util.Map': AllJavaClass_java_util_Map
  'java.util.Map$Entry': AllJavaClass_java_util_Map$Entry
  'java.net.ContentHandlerFactory': AllJavaClass_java_net_ContentHandlerFactory
  'java.net.ContentHandler': AllJavaClass_java_net_ContentHandler
  'java.net.Proxy': AllJavaClass_java_net_Proxy
  'java.net.Proxy$Type': AllJavaClass_java_net_Proxy$Type
  'java.net.SocketAddress': AllJavaClass_java_net_SocketAddress
  'java.net.URLStreamHandlerFactory': AllJavaClass_java_net_URLStreamHandlerFactory
  'java.lang.Package': AllJavaClass_java_lang_Package
  'java.lang.NamedPackage': AllJavaClass_java_lang_NamedPackage
  'java.lang.Module': AllJavaClass_java_lang_Module
  'java.lang.module.ModuleDescriptor': AllJavaClass_java_lang_module_ModuleDescriptor
  'java.nio.ByteBuffer': AllJavaClass_java_nio_ByteBuffer
  'java.nio.Buffer': AllJavaClass_java_nio_Buffer
  'java.nio.ByteOrder': AllJavaClass_java_nio_ByteOrder
  'java.nio.CharBuffer': AllJavaClass_java_nio_CharBuffer
  'java.lang.Appendable': AllJavaClass_java_lang_Appendable
  'java.lang.Readable': AllJavaClass_java_lang_Readable
  'java.nio.ShortBuffer': AllJavaClass_java_nio_ShortBuffer
  'java.nio.IntBuffer': AllJavaClass_java_nio_IntBuffer
  'java.nio.LongBuffer': AllJavaClass_java_nio_LongBuffer
  'java.nio.FloatBuffer': AllJavaClass_java_nio_FloatBuffer
  'java.nio.DoubleBuffer': AllJavaClass_java_nio_DoubleBuffer
  'java.lang.module.ModuleDescriptor$Builder': AllJavaClass_java_lang_module_ModuleDescriptor$Builder
  'java.lang.module.ModuleDescriptor$Version': AllJavaClass_java_lang_module_ModuleDescriptor$Version
  'java.lang.module.ModuleDescriptor$Exports': AllJavaClass_java_lang_module_ModuleDescriptor$Exports
  'java.lang.module.ModuleDescriptor$Opens': AllJavaClass_java_lang_module_ModuleDescriptor$Opens
  'java.lang.module.ModuleDescriptor$Provides': AllJavaClass_java_lang_module_ModuleDescriptor$Provides
  'java.lang.module.ModuleDescriptor$Requires': AllJavaClass_java_lang_module_ModuleDescriptor$Requires
  'java.lang.ModuleLayer': AllJavaClass_java_lang_ModuleLayer
  'java.lang.module.Configuration': AllJavaClass_java_lang_module_Configuration
  'java.lang.module.ModuleFinder': AllJavaClass_java_lang_module_ModuleFinder
  'java.nio.file.Path': AllJavaClass_java_nio_file_Path
  'java.nio.file.WatchKey': AllJavaClass_java_nio_file_WatchKey
  'java.nio.file.Watchable': AllJavaClass_java_nio_file_Watchable
  'java.nio.file.WatchService': AllJavaClass_java_nio_file_WatchService
  'java.util.concurrent.TimeUnit': AllJavaClass_java_util_concurrent_TimeUnit
  'java.time.Duration': AllJavaClass_java_time_Duration
  'java.time.temporal.TemporalUnit': AllJavaClass_java_time_temporal_TemporalUnit
  'java.time.temporal.Temporal': AllJavaClass_java_time_temporal_Temporal
  'java.time.temporal.TemporalField': AllJavaClass_java_time_temporal_TemporalField
  'java.time.temporal.TemporalAccessor': AllJavaClass_java_time_temporal_TemporalAccessor
  'java.time.temporal.TemporalQuery': AllJavaClass_java_time_temporal_TemporalQuery
  'java.time.temporal.ValueRange': AllJavaClass_java_time_temporal_ValueRange
  'java.time.format.ResolverStyle': AllJavaClass_java_time_format_ResolverStyle
  'java.util.Locale': AllJavaClass_java_util_Locale
  'java.util.Locale$Category': AllJavaClass_java_util_Locale$Category
  'java.util.Locale$FilteringMode': AllJavaClass_java_util_Locale$FilteringMode
  'java.util.Locale$IsoCountryCode': AllJavaClass_java_util_Locale$IsoCountryCode
  'java.lang.Cloneable': AllJavaClass_java_lang_Cloneable
  'java.time.temporal.TemporalAdjuster': AllJavaClass_java_time_temporal_TemporalAdjuster
  'java.time.temporal.TemporalAmount': AllJavaClass_java_time_temporal_TemporalAmount
  'java.time.temporal.ChronoUnit': AllJavaClass_java_time_temporal_ChronoUnit
  'java.lang.Thread': AllJavaClass_java_lang_Thread
  'java.lang.ThreadGroup': AllJavaClass_java_lang_ThreadGroup
  'java.lang.Thread$UncaughtExceptionHandler': AllJavaClass_java_lang_Thread$UncaughtExceptionHandler
  'java.lang.StackTraceElement': AllJavaClass_java_lang_StackTraceElement
  'java.lang.Thread$Builder$OfPlatform': AllJavaClass_java_lang_Thread$Builder$OfPlatform
  'java.lang.Thread$Builder': AllJavaClass_java_lang_Thread$Builder
  'java.util.concurrent.ThreadFactory': AllJavaClass_java_util_concurrent_ThreadFactory
  'java.lang.Thread$Builder$OfVirtual': AllJavaClass_java_lang_Thread$Builder$OfVirtual
  'java.lang.Thread$State': AllJavaClass_java_lang_Thread$State
  'java.nio.file.WatchEvent$Kind': AllJavaClass_java_nio_file_WatchEvent$Kind
  'java.nio.file.WatchEvent$Modifier': AllJavaClass_java_nio_file_WatchEvent$Modifier
  'java.nio.file.LinkOption': AllJavaClass_java_nio_file_LinkOption
  'java.nio.file.OpenOption': AllJavaClass_java_nio_file_OpenOption
  'java.nio.file.CopyOption': AllJavaClass_java_nio_file_CopyOption
  'java.io.File': AllJavaClass_java_io_File
  'java.io.FilenameFilter': AllJavaClass_java_io_FilenameFilter
  'java.io.FileFilter': AllJavaClass_java_io_FileFilter
  'java.nio.file.FileSystem': AllJavaClass_java_nio_file_FileSystem
  'java.nio.file.spi.FileSystemProvider': AllJavaClass_java_nio_file_spi_FileSystemProvider
  'java.nio.file.AccessMode': AllJavaClass_java_nio_file_AccessMode
  'java.nio.file.attribute.FileAttribute': AllJavaClass_java_nio_file_attribute_FileAttribute
  'java.nio.channels.SeekableByteChannel': AllJavaClass_java_nio_channels_SeekableByteChannel
  'java.nio.channels.ByteChannel': AllJavaClass_java_nio_channels_ByteChannel
  'java.nio.channels.ReadableByteChannel': AllJavaClass_java_nio_channels_ReadableByteChannel
  'java.nio.channels.Channel': AllJavaClass_java_nio_channels_Channel
  'java.nio.channels.WritableByteChannel': AllJavaClass_java_nio_channels_WritableByteChannel
  'java.nio.file.DirectoryStream': AllJavaClass_java_nio_file_DirectoryStream
  'java.nio.file.DirectoryStream$Filter': AllJavaClass_java_nio_file_DirectoryStream$Filter
  'java.nio.file.FileStore': AllJavaClass_java_nio_file_FileStore
  'java.nio.file.attribute.FileStoreAttributeView': AllJavaClass_java_nio_file_attribute_FileStoreAttributeView
  'java.nio.file.attribute.AttributeView': AllJavaClass_java_nio_file_attribute_AttributeView
  'java.nio.file.attribute.FileAttributeView': AllJavaClass_java_nio_file_attribute_FileAttributeView
  'java.nio.file.attribute.BasicFileAttributes': AllJavaClass_java_nio_file_attribute_BasicFileAttributes
  'java.nio.file.attribute.FileTime': AllJavaClass_java_nio_file_attribute_FileTime
  'java.time.Instant': AllJavaClass_java_time_Instant
  'java.time.Clock': AllJavaClass_java_time_Clock
  'java.time.ZoneId': AllJavaClass_java_time_ZoneId
  'java.time.format.TextStyle': AllJavaClass_java_time_format_TextStyle
  'java.time.zone.ZoneRules': AllJavaClass_java_time_zone_ZoneRules
  'java.time.ZoneOffset': AllJavaClass_java_time_ZoneOffset
  'java.time.LocalDateTime': AllJavaClass_java_time_LocalDateTime
  'java.time.chrono.ChronoLocalDateTime': AllJavaClass_java_time_chrono_ChronoLocalDateTime
  'java.time.format.DateTimeFormatter': AllJavaClass_java_time_format_DateTimeFormatter
  'java.text.ParsePosition': AllJavaClass_java_text_ParsePosition
  'java.time.chrono.Chronology': AllJavaClass_java_time_chrono_Chronology
  'java.time.temporal.ChronoField': AllJavaClass_java_time_temporal_ChronoField
  'java.time.chrono.ChronoLocalDate': AllJavaClass_java_time_chrono_ChronoLocalDate
  'java.time.chrono.ChronoPeriod': AllJavaClass_java_time_chrono_ChronoPeriod
  'java.time.LocalTime': AllJavaClass_java_time_LocalTime
  'java.time.OffsetTime': AllJavaClass_java_time_OffsetTime
  'java.time.LocalDate': AllJavaClass_java_time_LocalDate
  'java.time.Month': AllJavaClass_java_time_Month
  'java.time.Period': AllJavaClass_java_time_Period
  'java.time.chrono.IsoChronology': AllJavaClass_java_time_chrono_IsoChronology
  'java.time.chrono.Era': AllJavaClass_java_time_chrono_Era
  'java.time.chrono.IsoEra': AllJavaClass_java_time_chrono_IsoEra
  'java.time.ZonedDateTime': AllJavaClass_java_time_ZonedDateTime
  'java.time.chrono.ChronoZonedDateTime': AllJavaClass_java_time_chrono_ChronoZonedDateTime
  'java.time.DayOfWeek': AllJavaClass_java_time_DayOfWeek
  'java.time.OffsetDateTime': AllJavaClass_java_time_OffsetDateTime
  'java.time.chrono.AbstractChronology': AllJavaClass_java_time_chrono_AbstractChronology
  'java.time.format.FormatStyle': AllJavaClass_java_time_format_FormatStyle
  'java.time.format.DecimalStyle': AllJavaClass_java_time_format_DecimalStyle
  'java.text.Format': AllJavaClass_java_text_Format
  'java.lang.StringBuffer': AllJavaClass_java_lang_StringBuffer
  'java.lang.AbstractStringBuilder': AllJavaClass_java_lang_AbstractStringBuilder
  'java.text.FieldPosition': AllJavaClass_java_text_FieldPosition
  'java.text.Format$Field': AllJavaClass_java_text_Format$Field
  'java.text.AttributedCharacterIterator$Attribute': AllJavaClass_java_text_AttributedCharacterIterator$Attribute
  'java.text.AttributedCharacterIterator': AllJavaClass_java_text_AttributedCharacterIterator
  'java.text.CharacterIterator': AllJavaClass_java_text_CharacterIterator
  'java.time.zone.ZoneOffsetTransition': AllJavaClass_java_time_zone_ZoneOffsetTransition
  'java.time.InstantSource': AllJavaClass_java_time_InstantSource
  'java.nio.channels.FileChannel': AllJavaClass_java_nio_channels_FileChannel
  'java.nio.channels.FileLock': AllJavaClass_java_nio_channels_FileLock
  'java.lang.foreign.MemorySegment': AllJavaClass_java_lang_foreign_MemorySegment
  'java.lang.foreign.MemorySegment$Scope': AllJavaClass_java_lang_foreign_MemorySegment$Scope
  'java.lang.foreign.ValueLayout$OfLong': AllJavaClass_java_lang_foreign_ValueLayout$OfLong
  'java.lang.foreign.ValueLayout': AllJavaClass_java_lang_foreign_ValueLayout
  'java.lang.foreign.AddressLayout': AllJavaClass_java_lang_foreign_AddressLayout
  'java.lang.foreign.MemoryLayout': AllJavaClass_java_lang_foreign_MemoryLayout
  'java.lang.foreign.MemoryLayout$PathElement': AllJavaClass_java_lang_foreign_MemoryLayout$PathElement
  'java.lang.foreign.SequenceLayout': AllJavaClass_java_lang_foreign_SequenceLayout
  'java.lang.foreign.PaddingLayout': AllJavaClass_java_lang_foreign_PaddingLayout
  'java.lang.foreign.StructLayout': AllJavaClass_java_lang_foreign_StructLayout
  'java.lang.foreign.GroupLayout': AllJavaClass_java_lang_foreign_GroupLayout
  'java.lang.foreign.UnionLayout': AllJavaClass_java_lang_foreign_UnionLayout
  'java.lang.foreign.ValueLayout$OfByte': AllJavaClass_java_lang_foreign_ValueLayout$OfByte
  'java.lang.foreign.ValueLayout$OfBoolean': AllJavaClass_java_lang_foreign_ValueLayout$OfBoolean
  'java.lang.foreign.ValueLayout$OfChar': AllJavaClass_java_lang_foreign_ValueLayout$OfChar
  'java.lang.foreign.ValueLayout$OfShort': AllJavaClass_java_lang_foreign_ValueLayout$OfShort
  'java.lang.foreign.ValueLayout$OfInt': AllJavaClass_java_lang_foreign_ValueLayout$OfInt
  'java.lang.foreign.ValueLayout$OfFloat': AllJavaClass_java_lang_foreign_ValueLayout$OfFloat
  'java.lang.foreign.ValueLayout$OfDouble': AllJavaClass_java_lang_foreign_ValueLayout$OfDouble
  'java.lang.foreign.Arena': AllJavaClass_java_lang_foreign_Arena
  'java.lang.foreign.SegmentAllocator': AllJavaClass_java_lang_foreign_SegmentAllocator
  'java.nio.channels.FileChannel$MapMode': AllJavaClass_java_nio_channels_FileChannel$MapMode
  'java.nio.MappedByteBuffer': AllJavaClass_java_nio_MappedByteBuffer
  'java.nio.channels.spi.AbstractInterruptibleChannel': AllJavaClass_java_nio_channels_spi_AbstractInterruptibleChannel
  'java.nio.channels.InterruptibleChannel': AllJavaClass_java_nio_channels_InterruptibleChannel
  'java.nio.channels.GatheringByteChannel': AllJavaClass_java_nio_channels_GatheringByteChannel
  'java.nio.channels.ScatteringByteChannel': AllJavaClass_java_nio_channels_ScatteringByteChannel
  'java.nio.channels.AsynchronousFileChannel': AllJavaClass_java_nio_channels_AsynchronousFileChannel
  'java.util.concurrent.Future': AllJavaClass_java_util_concurrent_Future
  'java.util.concurrent.Future$State': AllJavaClass_java_util_concurrent_Future$State
  'java.nio.channels.CompletionHandler': AllJavaClass_java_nio_channels_CompletionHandler
  'java.util.concurrent.ExecutorService': AllJavaClass_java_util_concurrent_ExecutorService
  'java.util.concurrent.Callable': AllJavaClass_java_util_concurrent_Callable
  'java.util.concurrent.Executor': AllJavaClass_java_util_concurrent_Executor
  'java.nio.channels.AsynchronousChannel': AllJavaClass_java_nio_channels_AsynchronousChannel
  'java.nio.file.PathMatcher': AllJavaClass_java_nio_file_PathMatcher
  'java.nio.file.attribute.UserPrincipalLookupService': AllJavaClass_java_nio_file_attribute_UserPrincipalLookupService
  'java.nio.file.attribute.UserPrincipal': AllJavaClass_java_nio_file_attribute_UserPrincipal
  'java.security.Principal': AllJavaClass_java_security_Principal
  'javax.security.auth.Subject': AllJavaClass_javax_security_auth_Subject
  'java.security.AccessControlContext': AllJavaClass_java_security_AccessControlContext
  'java.security.DomainCombiner': AllJavaClass_java_security_DomainCombiner
  'java.security.ProtectionDomain': AllJavaClass_java_security_ProtectionDomain
  'java.security.CodeSource': AllJavaClass_java_security_CodeSource
  'java.security.cert.Certificate': AllJavaClass_java_security_cert_Certificate
  'java.security.PublicKey': AllJavaClass_java_security_PublicKey
  'java.security.Key': AllJavaClass_java_security_Key
  'java.security.Provider': AllJavaClass_java_security_Provider
  'java.security.Provider$Service': AllJavaClass_java_security_Provider$Service
  'java.util.Properties': AllJavaClass_java_util_Properties
  'java.io.Reader': AllJavaClass_java_io_Reader
  'java.io.Writer': AllJavaClass_java_io_Writer
  'java.io.PrintStream': AllJavaClass_java_io_PrintStream
  'java.io.FilterOutputStream': AllJavaClass_java_io_FilterOutputStream
  'java.util.Hashtable': AllJavaClass_java_util_Hashtable
  'java.util.Dictionary': AllJavaClass_java_util_Dictionary
  'java.security.CodeSigner': AllJavaClass_java_security_CodeSigner
  'java.security.cert.CertPath': AllJavaClass_java_security_cert_CertPath
  'java.security.Timestamp': AllJavaClass_java_security_Timestamp
  'java.util.Date': AllJavaClass_java_util_Date
  'java.security.PrivilegedAction': AllJavaClass_java_security_PrivilegedAction
  'java.security.PrivilegedExceptionAction': AllJavaClass_java_security_PrivilegedExceptionAction
  'java.nio.file.attribute.GroupPrincipal': AllJavaClass_java_nio_file_attribute_GroupPrincipal
  'java.lang.ModuleLayer$Controller': AllJavaClass_java_lang_ModuleLayer$Controller
  'java.lang.reflect.RecordComponent': AllJavaClass_java_lang_reflect_RecordComponent
  'java.nio.charset.CharsetDecoder': AllJavaClass_java_nio_charset_CharsetDecoder
  'java.nio.charset.CodingErrorAction': AllJavaClass_java_nio_charset_CodingErrorAction
  'java.nio.charset.CoderResult': AllJavaClass_java_nio_charset_CoderResult
  'java.nio.charset.CharsetEncoder': AllJavaClass_java_nio_charset_CharsetEncoder
  'java.util.SortedMap': AllJavaClass_java_util_SortedMap
  'java.util.SequencedMap': AllJavaClass_java_util_SequencedMap
  'java.util.SequencedSet': AllJavaClass_java_util_SequencedSet
  'io.netty.util.Attribute': AllJavaClass_io_netty_util_Attribute
  'io.netty.util.AttributeKey': AllJavaClass_io_netty_util_AttributeKey
  'io.netty.util.AbstractConstant': AllJavaClass_io_netty_util_AbstractConstant
  'io.netty.util.Constant': AllJavaClass_io_netty_util_Constant
  'io.netty.channel.Channel': AllJavaClass_io_netty_channel_Channel
  'io.netty.channel.ChannelId': AllJavaClass_io_netty_channel_ChannelId
  'io.netty.channel.Channel$Unsafe': AllJavaClass_io_netty_channel_Channel$Unsafe
  'io.netty.channel.EventLoop': AllJavaClass_io_netty_channel_EventLoop
  'io.netty.channel.EventLoopGroup': AllJavaClass_io_netty_channel_EventLoopGroup
  'io.netty.channel.ChannelFuture': AllJavaClass_io_netty_channel_ChannelFuture
  'io.netty.util.concurrent.GenericFutureListener': AllJavaClass_io_netty_util_concurrent_GenericFutureListener
  'io.netty.util.concurrent.Future': AllJavaClass_io_netty_util_concurrent_Future
  'java.util.EventListener': AllJavaClass_java_util_EventListener
  'io.netty.channel.ChannelPromise': AllJavaClass_io_netty_channel_ChannelPromise
  'io.netty.util.concurrent.Promise': AllJavaClass_io_netty_util_concurrent_Promise
  'io.netty.util.concurrent.EventExecutorGroup': AllJavaClass_io_netty_util_concurrent_EventExecutorGroup
  'io.netty.util.concurrent.EventExecutor': AllJavaClass_io_netty_util_concurrent_EventExecutor
  'io.netty.util.concurrent.ProgressivePromise': AllJavaClass_io_netty_util_concurrent_ProgressivePromise
  'io.netty.util.concurrent.ProgressiveFuture': AllJavaClass_io_netty_util_concurrent_ProgressiveFuture
  'io.netty.util.concurrent.ScheduledFuture': AllJavaClass_io_netty_util_concurrent_ScheduledFuture
  'java.util.concurrent.ScheduledFuture': AllJavaClass_java_util_concurrent_ScheduledFuture
  'java.util.concurrent.Delayed': AllJavaClass_java_util_concurrent_Delayed
  'java.util.concurrent.ScheduledExecutorService': AllJavaClass_java_util_concurrent_ScheduledExecutorService
  'io.netty.util.concurrent.OrderedEventExecutor': AllJavaClass_io_netty_util_concurrent_OrderedEventExecutor
  'io.netty.channel.RecvByteBufAllocator$Handle': AllJavaClass_io_netty_channel_RecvByteBufAllocator$Handle
  'io.netty.channel.ChannelConfig': AllJavaClass_io_netty_channel_ChannelConfig
  'io.netty.buffer.ByteBufAllocator': AllJavaClass_io_netty_buffer_ByteBufAllocator
  'io.netty.buffer.ByteBuf': AllJavaClass_io_netty_buffer_ByteBuf
  'io.netty.util.ByteProcessor': AllJavaClass_io_netty_util_ByteProcessor
  'io.netty.util.ReferenceCounted': AllJavaClass_io_netty_util_ReferenceCounted
  'io.netty.buffer.ByteBufConvertible': AllJavaClass_io_netty_buffer_ByteBufConvertible
  'io.netty.buffer.CompositeByteBuf': AllJavaClass_io_netty_buffer_CompositeByteBuf
  'io.netty.buffer.AbstractReferenceCountedByteBuf': AllJavaClass_io_netty_buffer_AbstractReferenceCountedByteBuf
  'io.netty.buffer.AbstractByteBuf': AllJavaClass_io_netty_buffer_AbstractByteBuf
  'io.netty.channel.RecvByteBufAllocator': AllJavaClass_io_netty_channel_RecvByteBufAllocator
  'io.netty.channel.MessageSizeEstimator': AllJavaClass_io_netty_channel_MessageSizeEstimator
  'io.netty.channel.MessageSizeEstimator$Handle': AllJavaClass_io_netty_channel_MessageSizeEstimator$Handle
  'io.netty.channel.WriteBufferWaterMark': AllJavaClass_io_netty_channel_WriteBufferWaterMark
  'io.netty.channel.ChannelOption': AllJavaClass_io_netty_channel_ChannelOption
  'io.netty.channel.ChannelOutboundBuffer': AllJavaClass_io_netty_channel_ChannelOutboundBuffer
  'io.netty.channel.ChannelOutboundBuffer$MessageProcessor': AllJavaClass_io_netty_channel_ChannelOutboundBuffer$MessageProcessor
  'io.netty.channel.ChannelMetadata': AllJavaClass_io_netty_channel_ChannelMetadata
  'io.netty.channel.ChannelPipeline': AllJavaClass_io_netty_channel_ChannelPipeline
  'io.netty.channel.ChannelInboundInvoker': AllJavaClass_io_netty_channel_ChannelInboundInvoker
  'io.netty.channel.ChannelOutboundInvoker': AllJavaClass_io_netty_channel_ChannelOutboundInvoker
  'io.netty.channel.ChannelProgressivePromise': AllJavaClass_io_netty_channel_ChannelProgressivePromise
  'io.netty.channel.ChannelProgressiveFuture': AllJavaClass_io_netty_channel_ChannelProgressiveFuture
  'io.netty.util.AttributeMap': AllJavaClass_io_netty_util_AttributeMap
  'net.rwhps.server.net.handler.bio.PackagingSocket': AllJavaClass_net_rwhps_server_net_handler_bio_PackagingSocket
  'java.net.Socket': AllJavaClass_java_net_Socket
  'java.net.InetAddress': AllJavaClass_java_net_InetAddress
  'java.net.NetworkInterface': AllJavaClass_java_net_NetworkInterface
  'java.nio.channels.SocketChannel': AllJavaClass_java_nio_channels_SocketChannel
  'java.net.ProtocolFamily': AllJavaClass_java_net_ProtocolFamily
  'java.nio.channels.NetworkChannel': AllJavaClass_java_nio_channels_NetworkChannel
  'java.net.SocketOption': AllJavaClass_java_net_SocketOption
  'java.nio.channels.spi.AbstractSelectableChannel': AllJavaClass_java_nio_channels_spi_AbstractSelectableChannel
  'java.nio.channels.SelectionKey': AllJavaClass_java_nio_channels_SelectionKey
  'java.nio.channels.SelectableChannel': AllJavaClass_java_nio_channels_SelectableChannel
  'java.nio.channels.Selector': AllJavaClass_java_nio_channels_Selector
  'java.nio.channels.spi.SelectorProvider': AllJavaClass_java_nio_channels_spi_SelectorProvider
  'java.nio.channels.DatagramChannel': AllJavaClass_java_nio_channels_DatagramChannel
  'java.net.DatagramSocket': AllJavaClass_java_net_DatagramSocket
  'java.net.DatagramPacket': AllJavaClass_java_net_DatagramPacket
  'java.net.DatagramSocketImplFactory': AllJavaClass_java_net_DatagramSocketImplFactory
  'java.net.DatagramSocketImpl': AllJavaClass_java_net_DatagramSocketImpl
  'java.net.SocketOptions': AllJavaClass_java_net_SocketOptions
  'java.nio.channels.MulticastChannel': AllJavaClass_java_nio_channels_MulticastChannel
  'java.nio.channels.MembershipKey': AllJavaClass_java_nio_channels_MembershipKey
  'java.nio.channels.Pipe': AllJavaClass_java_nio_channels_Pipe
  'java.nio.channels.Pipe$SourceChannel': AllJavaClass_java_nio_channels_Pipe$SourceChannel
  'java.nio.channels.Pipe$SinkChannel': AllJavaClass_java_nio_channels_Pipe$SinkChannel
  'java.nio.channels.spi.AbstractSelector': AllJavaClass_java_nio_channels_spi_AbstractSelector
  'java.nio.channels.ServerSocketChannel': AllJavaClass_java_nio_channels_ServerSocketChannel
  'java.net.ServerSocket': AllJavaClass_java_net_ServerSocket
  'java.net.SocketImplFactory': AllJavaClass_java_net_SocketImplFactory
  'java.net.SocketImpl': AllJavaClass_java_net_SocketImpl
  'net.rwhps.server.net.core.TypeConnect': AllJavaClass_net_rwhps_server_net_core_TypeConnect
  'net.rwhps.server.io.packet.Packet': AllJavaClass_net_rwhps_server_io_packet_Packet
  'net.rwhps.server.io.packet.Packet$Companion': AllJavaClass_net_rwhps_server_io_packet_Packet$Companion
  'kotlin.jvm.internal.DefaultConstructorMarker': AllJavaClass_kotlin_jvm_internal_DefaultConstructorMarker
  'net.rwhps.server.struct.SerializerTypeAll$TypeSerializer': AllJavaClass_net_rwhps_server_struct_SerializerTypeAll$TypeSerializer
  'net.rwhps.server.io.GameOutputStream': AllJavaClass_net_rwhps_server_io_GameOutputStream
  'net.rwhps.server.io.GameOutputStream$Companion': AllJavaClass_net_rwhps_server_io_GameOutputStream$Companion
  'net.rwhps.server.io.output.AbstractByteArrayOutputStream': AllJavaClass_net_rwhps_server_io_output_AbstractByteArrayOutputStream
  'net.rwhps.server.io.output.AbstractByteArrayOutputStream$Companion': AllJavaClass_net_rwhps_server_io_output_AbstractByteArrayOutputStream$Companion
  'net.rwhps.server.io.GameInputStream': AllJavaClass_net_rwhps_server_io_GameInputStream
  'net.rwhps.server.io.GameInputStream$Companion': AllJavaClass_net_rwhps_server_io_GameInputStream$Companion
  'net.rwhps.server.util.PacketType': AllJavaClass_net_rwhps_server_util_PacketType
  'net.rwhps.server.util.PacketType$Companion': AllJavaClass_net_rwhps_server_util_PacketType$Companion
  'kotlin.enums.EnumEntries': AllJavaClass_kotlin_enums_EnumEntries
  'kotlin.jvm.internal.markers.KMappedMarker': AllJavaClass_kotlin_jvm_internal_markers_KMappedMarker
  'net.rwhps.server.struct.map.IntMap': AllJavaClass_net_rwhps_server_struct_map_IntMap
  'net.rwhps.server.struct.map.BaseMap': AllJavaClass_net_rwhps_server_struct_map_BaseMap
  'net.rwhps.server.struct.map.BaseMap$Companion': AllJavaClass_net_rwhps_server_struct_map_BaseMap$Companion
  'net.rwhps.server.struct.list.Seq': AllJavaClass_net_rwhps_server_struct_list_Seq
  'net.rwhps.server.struct.list.Seq$Companion': AllJavaClass_net_rwhps_server_struct_list_Seq$Companion
  'net.rwhps.server.struct.list.BaseSeq': AllJavaClass_net_rwhps_server_struct_list_BaseSeq
  'kotlin.jvm.functions.Function1': AllJavaClass_kotlin_jvm_functions_Function1
  'kotlin.Function': AllJavaClass_kotlin_Function
  'net.rwhps.server.func.FindSeq': AllJavaClass_net_rwhps_server_func_FindSeq
  'net.rwhps.server.func.ConsSeq': AllJavaClass_net_rwhps_server_func_ConsSeq
  'kotlin.Unit': AllJavaClass_kotlin_Unit
  'kotlin.jvm.internal.markers.KMutableList': AllJavaClass_kotlin_jvm_internal_markers_KMutableList
  'kotlin.jvm.internal.markers.KMutableCollection': AllJavaClass_kotlin_jvm_internal_markers_KMutableCollection
  'kotlin.jvm.internal.markers.KMutableIterable': AllJavaClass_kotlin_jvm_internal_markers_KMutableIterable
  'net.rwhps.server.func.Prov': AllJavaClass_net_rwhps_server_func_Prov
  'net.rwhps.server.func.KeyValue': AllJavaClass_net_rwhps_server_func_KeyValue
  'net.rwhps.server.func.FindMapKV': AllJavaClass_net_rwhps_server_func_FindMapKV
  'net.rwhps.server.func.ConsMap': AllJavaClass_net_rwhps_server_func_ConsMap
  'net.rwhps.server.func.FindMapE': AllJavaClass_net_rwhps_server_func_FindMapE
  'kotlin.jvm.internal.markers.KMutableMap': AllJavaClass_kotlin_jvm_internal_markers_KMutableMap
  'net.rwhps.server.io.output.CompressOutputStream': AllJavaClass_net_rwhps_server_io_output_CompressOutputStream
  'net.rwhps.server.io.output.CompressOutputStream$Companion': AllJavaClass_net_rwhps_server_io_output_CompressOutputStream$Companion
  'net.rwhps.server.io.output.DisableSyncByteArrayOutputStream': AllJavaClass_net_rwhps_server_io_output_DisableSyncByteArrayOutputStream
  'net.rwhps.server.func.Control$EventNext': AllJavaClass_net_rwhps_server_func_Control$EventNext
  'net.rwhps.server.net.core.server.AbstractNetConnect': AllJavaClass_net_rwhps_server_net_core_server_AbstractNetConnect
  'net.rwhps.server.data.temp.ConnectReceiveData': AllJavaClass_net_rwhps_server_data_temp_ConnectReceiveData
  'net.rwhps.server.data.totalizer.TimeAndNumber': AllJavaClass_net_rwhps_server_data_totalizer_TimeAndNumber
  'net.rwhps.server.net.GroupNet': AllJavaClass_net_rwhps_server_net_GroupNet
  'io.netty.channel.group.ChannelGroup': AllJavaClass_io_netty_channel_group_ChannelGroup
  'io.netty.channel.group.ChannelMatcher': AllJavaClass_io_netty_channel_group_ChannelMatcher
  'io.netty.channel.group.ChannelGroupFuture': AllJavaClass_io_netty_channel_group_ChannelGroupFuture
  'io.netty.channel.group.ChannelGroupException': AllJavaClass_io_netty_channel_group_ChannelGroupException
  'io.netty.channel.ChannelException': AllJavaClass_io_netty_channel_ChannelException
  'java.lang.RuntimeException': AllJavaClass_java_lang_RuntimeException
  'java.lang.Exception': AllJavaClass_java_lang_Exception
  'kotlin.jvm.functions.Function0': AllJavaClass_kotlin_jvm_functions_Function0
  'net.rwhps.server.game.event.core.AbstractGlobalEvent': AllJavaClass_net_rwhps_server_game_event_core_AbstractGlobalEvent
  'net.rwhps.server.game.event.core.AbstractEventCore': AllJavaClass_net_rwhps_server_game_event_core_AbstractEventCore
  'net.rwhps.server.game.event.global.NetConnectNewEvent': AllJavaClass_net_rwhps_server_game_event_global_NetConnectNewEvent
  'net.rwhps.server.game.event.global.ServerConsolePrintEvent': AllJavaClass_net_rwhps_server_game_event_global_ServerConsolePrintEvent
  'net.rwhps.server.game.event.global.ServerHessLoadEvent': AllJavaClass_net_rwhps_server_game_event_global_ServerHessLoadEvent
  'net.rwhps.server.game.headless.core.AbstractGameModule': AllJavaClass_net_rwhps_server_game_headless_core_AbstractGameModule
  'net.rwhps.server.game.headless.core.AbstractGameFast': AllJavaClass_net_rwhps_server_game_headless_core_AbstractGameFast
  'net.rwhps.server.game.headless.core.AbstractGameUnitData': AllJavaClass_net_rwhps_server_game_headless_core_AbstractGameUnitData
  'net.rwhps.server.struct.map.OrderedMap': AllJavaClass_net_rwhps_server_struct_map_OrderedMap
  'net.rwhps.server.game.headless.core.AbstractGameHessData': AllJavaClass_net_rwhps_server_game_headless_core_AbstractGameHessData
  'net.rwhps.server.game.headless.core.link.AbstractLinkPlayerData': AllJavaClass_net_rwhps_server_game_headless_core_link_AbstractLinkPlayerData
  'net.rwhps.server.game.event.game.ServerGameOverEvent$GameOverData': AllJavaClass_net_rwhps_server_game_event_game_ServerGameOverEvent$GameOverData
  'net.rwhps.server.struct.map.ObjectMap': AllJavaClass_net_rwhps_server_struct_map_ObjectMap
  'net.rwhps.server.struct.map.ObjectMap$Companion': AllJavaClass_net_rwhps_server_struct_map_ObjectMap$Companion
  'net.rwhps.server.net.core.server.AbstractNetConnectServer': AllJavaClass_net_rwhps_server_net_core_server_AbstractNetConnectServer
  'net.rwhps.server.game.player.PlayerHess': AllJavaClass_net_rwhps_server_game_player_PlayerHess
  'net.rwhps.server.util.file.load.I18NBundle': AllJavaClass_net_rwhps_server_util_file_load_I18NBundle
  'net.rwhps.server.util.file.FileUtils': AllJavaClass_net_rwhps_server_util_file_FileUtils
  'net.rwhps.server.util.file.FileUtils$Companion': AllJavaClass_net_rwhps_server_util_file_FileUtils$Companion
  'java.nio.file.attribute.PosixFilePermission': AllJavaClass_java_nio_file_attribute_PosixFilePermission
  'java.io.FileOutputStream': AllJavaClass_java_io_FileOutputStream
  'java.io.FileDescriptor': AllJavaClass_java_io_FileDescriptor
  'net.rwhps.server.util.compression.core.AbstractDecoder': AllJavaClass_net_rwhps_server_util_compression_core_AbstractDecoder
  'net.rwhps.server.game.GameMaps$MapData': AllJavaClass_net_rwhps_server_game_GameMaps$MapData
  'net.rwhps.server.game.GameMaps$MapType': AllJavaClass_net_rwhps_server_game_GameMaps$MapType
  'net.rwhps.server.game.GameMaps$MapFileType': AllJavaClass_net_rwhps_server_game_GameMaps$MapFileType
  'java.io.InputStreamReader': AllJavaClass_java_io_InputStreamReader
  'java.io.FileInputStream': AllJavaClass_java_io_FileInputStream
  'net.rwhps.server.util.file.load.LoadIni': AllJavaClass_net_rwhps_server_util_file_load_LoadIni
  'net.rwhps.server.net.core.DataPermissionStatus$ServerStatus': AllJavaClass_net_rwhps_server_net_core_DataPermissionStatus$ServerStatus
  'net.rwhps.server.game.event.EventManage': AllJavaClass_net_rwhps_server_game_event_EventManage
  'net.rwhps.server.util.concurrent.fature.AbstractFuture': AllJavaClass_net_rwhps_server_util_concurrent_fature_AbstractFuture
  'kotlinx.coroutines.Deferred': AllJavaClass_kotlinx_coroutines_Deferred
  'kotlin.coroutines.Continuation': AllJavaClass_kotlin_coroutines_Continuation
  'kotlin.coroutines.CoroutineContext': AllJavaClass_kotlin_coroutines_CoroutineContext
  'kotlin.coroutines.CoroutineContext$Element': AllJavaClass_kotlin_coroutines_CoroutineContext$Element
  'kotlin.coroutines.CoroutineContext$Key': AllJavaClass_kotlin_coroutines_CoroutineContext$Key
  'kotlin.jvm.functions.Function2': AllJavaClass_kotlin_jvm_functions_Function2
  'kotlinx.coroutines.selects.SelectClause1': AllJavaClass_kotlinx_coroutines_selects_SelectClause1
  'kotlinx.coroutines.selects.SelectClause': AllJavaClass_kotlinx_coroutines_selects_SelectClause
  'kotlin.jvm.functions.Function3': AllJavaClass_kotlin_jvm_functions_Function3
  'kotlinx.coroutines.Job': AllJavaClass_kotlinx_coroutines_Job
  'kotlinx.coroutines.Job$Key': AllJavaClass_kotlinx_coroutines_Job$Key
  'java.util.concurrent.CancellationException': AllJavaClass_java_util_concurrent_CancellationException
  'java.lang.IllegalStateException': AllJavaClass_java_lang_IllegalStateException
  'kotlin.sequences.Sequence': AllJavaClass_kotlin_sequences_Sequence
  'kotlinx.coroutines.DisposableHandle': AllJavaClass_kotlinx_coroutines_DisposableHandle
  'kotlinx.coroutines.ChildHandle': AllJavaClass_kotlinx_coroutines_ChildHandle
  'kotlinx.coroutines.ChildJob': AllJavaClass_kotlinx_coroutines_ChildJob
  'kotlinx.coroutines.ParentJob': AllJavaClass_kotlinx_coroutines_ParentJob
  'kotlinx.coroutines.selects.SelectClause0': AllJavaClass_kotlinx_coroutines_selects_SelectClause0
  'net.rwhps.server.game.event.core.AbstractEvent': AllJavaClass_net_rwhps_server_game_event_core_AbstractEvent
  'net.rwhps.server.game.event.AbstractEventManage': AllJavaClass_net_rwhps_server_game_event_AbstractEventManage
  'net.rwhps.server.game.event.core.EventListenerHost': AllJavaClass_net_rwhps_server_game_event_core_EventListenerHost
  'net.rwhps.server.game.headless.core.AbstractGameFunction': AllJavaClass_net_rwhps_server_game_headless_core_AbstractGameFunction
  'net.rwhps.server.game.headless.core.link.AbstractLinkGameData': AllJavaClass_net_rwhps_server_game_headless_core_link_AbstractLinkGameData
  'net.rwhps.server.game.headless.core.scripts.AbstractScriptRoot': AllJavaClass_net_rwhps_server_game_headless_core_scripts_AbstractScriptRoot
  'net.rwhps.server.game.headless.core.link.AbstractLinkGameNet': AllJavaClass_net_rwhps_server_game_headless_core_link_AbstractLinkGameNet
  'net.rwhps.server.game.headless.core.link.AbstractLinkGameFunction': AllJavaClass_net_rwhps_server_game_headless_core_link_AbstractLinkGameFunction
  'net.rwhps.server.game.headless.core.scripts.AbstractScriptMultiPlayer': AllJavaClass_net_rwhps_server_game_headless_core_scripts_AbstractScriptMultiPlayer
  'net.rwhps.server.game.room.ServerRoom': AllJavaClass_net_rwhps_server_game_room_ServerRoom
  'net.rwhps.server.game.manage.CallManage': AllJavaClass_net_rwhps_server_game_manage_CallManage
  'net.rwhps.server.game.GameMaps': AllJavaClass_net_rwhps_server_game_GameMaps
  'net.rwhps.server.data.temp.ServerCacheFlag': AllJavaClass_net_rwhps_server_data_temp_ServerCacheFlag
  'net.rwhps.server.util.game.command.CommandHandler': AllJavaClass_net_rwhps_server_util_game_command_CommandHandler
  'net.rwhps.server.util.game.command.CommandHandler$Command': AllJavaClass_net_rwhps_server_util_game_command_CommandHandler$Command
  'net.rwhps.server.util.game.command.CommandHandler$CommandParam': AllJavaClass_net_rwhps_server_util_game_command_CommandHandler$CommandParam
  'net.rwhps.server.util.game.command.CommandHandler$CommandRunner': AllJavaClass_net_rwhps_server_util_game_command_CommandHandler$CommandRunner
  'net.rwhps.server.util.game.command.CommandHandler$CommandResponse': AllJavaClass_net_rwhps_server_util_game_command_CommandHandler$CommandResponse
  'net.rwhps.server.util.game.command.CommandHandler$ResponseType': AllJavaClass_net_rwhps_server_util_game_command_CommandHandler$ResponseType
  'net.rwhps.server.game.manage.PlayerManage': AllJavaClass_net_rwhps_server_game_manage_PlayerManage
  'net.rwhps.server.func.StrCons': AllJavaClass_net_rwhps_server_func_StrCons
  'net.rwhps.server.game.event.global.ServerLoadEvent': AllJavaClass_net_rwhps_server_game_event_global_ServerLoadEvent
  'net.rwhps.server.game.event.global.ServerStartTypeEvent': AllJavaClass_net_rwhps_server_game_event_global_ServerStartTypeEvent
  'net.rwhps.server.net.core.IRwHps$NetType': AllJavaClass_net_rwhps_server_net_core_IRwHps$NetType
  'net.rwhps.server.net.core.IRwHps$NetType$Companion': AllJavaClass_net_rwhps_server_net_core_IRwHps$NetType$Companion
  'net.rwhps.server.plugin.Plugin': AllJavaClass_net_rwhps_server_plugin_Plugin
  'net.rwhps.server.game.event.EventGlobalManage': AllJavaClass_net_rwhps_server_game_event_EventGlobalManage
  'net.rwhps.server.game.event.game.PlayerBanEvent': AllJavaClass_net_rwhps_server_game_event_game_PlayerBanEvent
  'net.rwhps.server.game.event.game.PlayerChatEvent': AllJavaClass_net_rwhps_server_game_event_game_PlayerChatEvent
  'net.rwhps.server.game.event.game.PlayerIpBanEvent': AllJavaClass_net_rwhps_server_game_event_game_PlayerIpBanEvent
  'net.rwhps.server.game.event.game.PlayerIpUnBanEvent': AllJavaClass_net_rwhps_server_game_event_game_PlayerIpUnBanEvent
  'net.rwhps.server.game.event.game.PlayerJoinEvent': AllJavaClass_net_rwhps_server_game_event_game_PlayerJoinEvent
  'net.rwhps.server.game.event.game.PlayerLeaveEvent': AllJavaClass_net_rwhps_server_game_event_game_PlayerLeaveEvent
  'net.rwhps.server.game.event.game.PlayerOperationUnitEvent': AllJavaClass_net_rwhps_server_game_event_game_PlayerOperationUnitEvent
  'net.rwhps.server.game.enums.GameCommandActions': AllJavaClass_net_rwhps_server_game_enums_GameCommandActions
  'net.rwhps.server.game.enums.GameCommandActions$Companion': AllJavaClass_net_rwhps_server_game_enums_GameCommandActions$Companion
  'net.rwhps.server.game.event.game.PlayerUnBanEvent': AllJavaClass_net_rwhps_server_game_event_game_PlayerUnBanEvent
  'net.rwhps.server.game.event.game.ServerGameOverEvent': AllJavaClass_net_rwhps_server_game_event_game_ServerGameOverEvent
  'net.rwhps.server.game.event.game.ServerGameStartEvent': AllJavaClass_net_rwhps_server_game_event_game_ServerGameStartEvent
  'net.rwhps.server.game.event.game.ServerHessStartPort': AllJavaClass_net_rwhps_server_game_event_game_ServerHessStartPort
  'net.rwhps.server.game.manage.HeadlessModuleManage': AllJavaClass_net_rwhps_server_game_manage_HeadlessModuleManage
  'net.rwhps.server.game.enums.GameInternalUnits': AllJavaClass_net_rwhps_server_game_enums_GameInternalUnits
  'net.rwhps.server.game.enums.GameInternalUnits$Companion': AllJavaClass_net_rwhps_server_game_enums_GameInternalUnits$Companion
}
