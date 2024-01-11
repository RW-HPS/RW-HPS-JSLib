type AllJavaClass_net_rwhps_server_plugin_Plugin = {
  staticObject: {
    new (): AllJavaClasses['net.rwhps.server.plugin.Plugin']['instanceObject']
    loadLang$default(
      arg0: AllJavaClasses['net.rwhps.server.plugin.Plugin']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['net.rwhps.server.util.file.LoadIni']['instanceObject'],
      arg3: boolean,
      arg4: number,
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    loadLang$default(
      arg0: AllJavaClasses['net.rwhps.server.plugin.Plugin']['instanceObject'],
      arg1: string,
      arg2: string,
      arg3: string,
      arg4: boolean,
      arg5: number,
      arg6: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.plugin.Plugin'
    pluginDataFileUtils: AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    init(): void
    registerServerClientCommands(
      arg0: AllJavaClasses['net.rwhps.server.util.game.CommandHandler']['instanceObject'],
    ): void
    registerGlobalEvents(
      arg0: AllJavaClasses['net.rwhps.server.game.event.EventGlobalManage']['instanceObject'],
    ): void
    setPluginDataFileUtils$Server_Core(
      arg0: AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject'],
    ): void
    getPluginDataFileUtils(): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    registerCoreCommands(
      arg0: AllJavaClasses['net.rwhps.server.util.game.CommandHandler']['instanceObject'],
    ): void
    registerServerCommands(
      arg0: AllJavaClasses['net.rwhps.server.util.game.CommandHandler']['instanceObject'],
    ): void
    onDisable(): void
    onEnable(): void
    loadLang(
      arg0: string,
      arg1: AllJavaClasses['net.rwhps.server.util.file.LoadIni']['instanceObject'],
    ): boolean
    loadLang(
      arg0: string,
      arg1: AllJavaClasses['net.rwhps.server.util.file.LoadIni']['instanceObject'],
      arg2: boolean,
    ): boolean
    loadLang(arg0: string, arg1: string, arg2: string): boolean
    loadLang(arg0: string, arg1: string, arg2: string, arg3: boolean): boolean
    registerEvents(
      arg0: AllJavaClasses['net.rwhps.server.game.event.EventManage']['instanceObject'],
    ): void
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_util_file_FileUtils = {
  staticObject: {
    Companion: AllJavaClasses['net.rwhps.server.util.file.FileUtils$Companion']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
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
    getPath(arg0: string): string
    getFile(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    access$setDefaultFilePath$cp(arg0: string): void
    writeByteOutputStream$default(
      arg0: AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject'],
      arg1: boolean,
      arg2: number,
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.io.FileOutputStream']['instanceObject']
    access$getDefaultFilePath$cp(): string
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
    getFolder(
      arg0: string,
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    getFolder(): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    getTempFile(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    setFilePath(arg0: string): void
    splicePath(arg0: string, arg1: string): string
    getMyFilePath(): string
    writeFile$default(
      arg0: AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: boolean,
      arg3: number,
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    getMyCoreJarStream(): AllJavaClasses['java.io.InputStream']['instanceObject']
    getTempDirectory(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    readFileString(
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
    ): string
    readFileListString(
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.util.file.FileUtils'
    length(): number
    getName(): string
    delete(): boolean
    setReadOnly(): boolean
    copy(
      arg0: AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject'],
    ): void
    getPath(): string
    getFile(): AllJavaClasses['java.io.File']['instanceObject']
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
    getFileListNotNullSizeSort(): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
    getFileListNotNullSize(): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
    readFileListStringData(): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
    writeByteOutputStream(
      arg0: boolean,
    ): AllJavaClasses['java.io.FileOutputStream']['instanceObject']
    toFolder(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    getFileList(): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
    writeFile(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: boolean,
    ): void
    writeFileByte(arg0: number[], arg1: boolean): void
    readFileStringData(): string
    getMd5(): string
    readFileByte(): number[]
    readInputsStream(): AllJavaClasses['java.io.InputStreamReader']['instanceObject']
    getZipDecoder(): AllJavaClasses['net.rwhps.server.util.compression.core.AbstractDecoder']['instanceObject']
    getFilePollingList(): AllJavaClasses['net.rwhps.server.struct.OrderedMap']['instanceObject']
    getInputsStream(): AllJavaClasses['java.io.FileInputStream']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_util_file_FileUtils$Companion = {
  staticObject: {
    new (
      arg0: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils$Companion']['instanceObject']
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
    getFolder$default(
      arg0: AllJavaClasses['net.rwhps.server.util.file.FileUtils$Companion']['instanceObject'],
      arg1: string,
      arg2: boolean,
      arg3: number,
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.util.file.FileUtils$Companion'
    getPath(arg0: string): string
    getFile(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    getInternalFileStream(
      arg0: string,
    ): AllJavaClasses['java.io.InputStream']['instanceObject']
    getFolder(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    getFolder(
      arg0: string,
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    getFolder(): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    getTempFile(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    setFilePath(arg0: string): void
    splicePath(arg0: string, arg1: string): string
    getMyFilePath(): string
    getMyCoreJarStream(): AllJavaClasses['java.io.InputStream']['instanceObject']
    getTempDirectory(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    readFileString(
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
    ): string
    readFileListString(
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_kotlin_jvm_internal_DefaultConstructorMarker = {
  staticObject: object
  instanceObject: {
    __javaClass: 'kotlin.jvm.internal.DefaultConstructorMarker'
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_lang_Object = {
  staticObject: { new (): AllJavaClasses['java.lang.Object']['instanceObject'] }
  instanceObject: {
    __javaClass: 'java.lang.Object'
    wait(arg0: number): void
    wait(arg0: number, arg1: number): void
    wait(): void
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getClass(): AllJavaClasses['java.lang.Class']['instanceObject']
    notify(): void
    notifyAll(): void
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
  instanceObject: (((({
    __javaClass: 'java.lang.Class'
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
    getSuperclass(): AllJavaClasses['java.lang.Class']['instanceObject']
    cast(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getName(): string
    toGenericString(): string
    newInstance(): AllJavaClasses['java.lang.Object']['instanceObject']
    isAnnotation(): boolean
    isSynthetic(): boolean
    getClassLoader(): AllJavaClasses['java.lang.ClassLoader']['instanceObject']
    getTypeParameters(): AllJavaClasses['java.lang.reflect.TypeVariable']['instanceObject'][]
    getGenericSuperclass(): AllJavaClasses['java.lang.reflect.Type']['instanceObject']
    getPackage(): AllJavaClasses['java.lang.Package']['instanceObject']
    getPackageName(): string
    getInterfaces(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    getGenericInterfaces(): AllJavaClasses['java.lang.reflect.Type']['instanceObject'][]
    getComponentType(): AllJavaClasses['java.lang.Class']['instanceObject']
    getSigners(): AllJavaClasses['java.lang.Object']['instanceObject'][]
    getEnclosingMethod(): AllJavaClasses['java.lang.reflect.Method']['instanceObject']
    getEnclosingConstructor(): AllJavaClasses['java.lang.reflect.Constructor']['instanceObject']
    getDeclaringClass(): AllJavaClasses['java.lang.Class']['instanceObject']
    getEnclosingClass(): AllJavaClasses['java.lang.Class']['instanceObject']
    getSimpleName(): string
    getTypeName(): string
    getCanonicalName(): string
    isAnonymousClass(): boolean
    isLocalClass(): boolean
    isMemberClass(): boolean
    getClasses(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    getFields(): AllJavaClasses['java.lang.reflect.Field']['instanceObject'][]
    getMethods(): AllJavaClasses['java.lang.reflect.Method']['instanceObject'][]
    getConstructors(): AllJavaClasses['java.lang.reflect.Constructor']['instanceObject'][]
    getField(
      arg0: string,
    ): AllJavaClasses['java.lang.reflect.Field']['instanceObject']
    getMethod(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Class']['instanceObject'][],
    ): AllJavaClasses['java.lang.reflect.Method']['instanceObject']
    getConstructor(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'][],
    ): AllJavaClasses['java.lang.reflect.Constructor']['instanceObject']
    getDeclaredClasses(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    getDeclaredFields(): AllJavaClasses['java.lang.reflect.Field']['instanceObject'][]
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
    getResourceAsStream(
      arg0: string,
    ): AllJavaClasses['java.io.InputStream']['instanceObject']
    getResource(arg0: string): AllJavaClasses['java.net.URL']['instanceObject']
    desiredAssertionStatus(): boolean
    isEnum(): boolean
    getEnumConstants(): AllJavaClasses['java.lang.Object']['instanceObject'][]
    asSubclass(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.Class']['instanceObject']
    getAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    isAnnotationPresent(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): boolean
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
    getNestHost(): AllJavaClasses['java.lang.Class']['instanceObject']
    isNestmateOf(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): boolean
    getNestMembers(): AllJavaClasses['java.lang.Class']['instanceObject'][]
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
    loadClass(arg0: string): AllJavaClasses['java.lang.Class']['instanceObject']
    getName(): string
    getResourceAsStream(
      arg0: string,
    ): AllJavaClasses['java.io.InputStream']['instanceObject']
    getResource(arg0: string): AllJavaClasses['java.net.URL']['instanceObject']
    getResources(
      arg0: string,
    ): AllJavaClasses['java.util.Enumeration']['instanceObject']
    resources(
      arg0: string,
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    isRegisteredAsParallelCapable(): boolean
    getParent(): AllJavaClasses['java.lang.ClassLoader']['instanceObject']
    getUnnamedModule(): AllJavaClasses['java.lang.Module']['instanceObject']
    getDefinedPackage(
      arg0: string,
    ): AllJavaClasses['java.lang.Package']['instanceObject']
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
    read(arg0: number[], arg1: number, arg2: number): number
    read(arg0: number[]): number
    read(): number
    close(): void
    mark(arg0: number): void
    readAllBytes(): number[]
    readNBytes(arg0: number[], arg1: number, arg2: number): number
    readNBytes(arg0: number): number[]
    transferTo(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
    ): number
    skip(arg0: number): number
    available(): number
    markSupported(): boolean
    reset(): void
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
    write(arg0: number[], arg1: number, arg2: number): void
    write(arg0: number[]): void
    write(arg0: number): void
    flush(): void
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
    getQuery(): string
    getPath(): string
    getUserInfo(): string
    getAuthority(): string
    getPort(): number
    getDefaultPort(): number
    getProtocol(): string
    getHost(): string
    getFile(): string
    getRef(): string
    sameFile(arg0: AllJavaClasses['java.net.URL']['instanceObject']): boolean
    toExternalForm(): string
    toURI(): AllJavaClasses['java.net.URI']['instanceObject']
    openConnection(): AllJavaClasses['java.net.URLConnection']['instanceObject']
    openConnection(
      arg0: AllJavaClasses['java.net.Proxy']['instanceObject'],
    ): AllJavaClasses['java.net.URLConnection']['instanceObject']
    getContent(): AllJavaClasses['java.lang.Object']['instanceObject']
    getContent(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
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
    resolve(
      arg0: AllJavaClasses['java.net.URI']['instanceObject'],
    ): AllJavaClasses['java.net.URI']['instanceObject']
    resolve(arg0: string): AllJavaClasses['java.net.URI']['instanceObject']
    isAbsolute(): boolean
    normalize(): AllJavaClasses['java.net.URI']['instanceObject']
    getQuery(): string
    getPath(): string
    getUserInfo(): string
    getAuthority(): string
    getPort(): number
    getHost(): string
    getScheme(): string
    isOpaque(): boolean
    getRawFragment(): string
    getRawQuery(): string
    getRawPath(): string
    toURL(): AllJavaClasses['java.net.URL']['instanceObject']
    getRawAuthority(): string
    relativize(
      arg0: AllJavaClasses['java.net.URI']['instanceObject'],
    ): AllJavaClasses['java.net.URI']['instanceObject']
    parseServerAuthority(): AllJavaClasses['java.net.URI']['instanceObject']
    getRawSchemeSpecificPart(): string
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
    setFileNameMap(
      arg0: AllJavaClasses['java.net.FileNameMap']['instanceObject'],
    ): void
    setDefaultAllowUserInteraction(arg0: boolean): void
    getDefaultAllowUserInteraction(): boolean
    getDefaultUseCaches(arg0: string): boolean
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
    getContent(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getContent(): AllJavaClasses['java.lang.Object']['instanceObject']
    getInputStream(): AllJavaClasses['java.io.InputStream']['instanceObject']
    getPermission(): AllJavaClasses['java.security.Permission']['instanceObject']
    setRequestProperty(arg0: string, arg1: string): void
    getURL(): AllJavaClasses['java.net.URL']['instanceObject']
    setUseCaches(arg0: boolean): void
    getContentLength(): number
    getHeaderField(arg0: string): string
    getHeaderField(arg0: number): string
    getContentLengthLong(): number
    getHeaderFieldKey(arg0: number): string
    getLastModified(): number
    addRequestProperty(arg0: string, arg1: string): void
    getRequestProperty(arg0: string): string
    getRequestProperties(): AllJavaClasses['java.util.Map']['instanceObject']
    getContentType(): string
    setConnectTimeout(arg0: number): void
    getConnectTimeout(): number
    setReadTimeout(arg0: number): void
    getReadTimeout(): number
    getContentEncoding(): string
    getExpiration(): number
    getDate(): number
    getHeaderFields(): AllJavaClasses['java.util.Map']['instanceObject']
    getHeaderFieldInt(arg0: string, arg1: number): number
    getHeaderFieldLong(arg0: string, arg1: number): number
    getHeaderFieldDate(arg0: string, arg1: number): number
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
    getDefaultUseCaches(): boolean
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
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getName(): string
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
    add(
      arg0: AllJavaClasses['java.security.Permission']['instanceObject'],
    ): void
    toString(): string
    elements(): AllJavaClasses['java.util.Enumeration']['instanceObject']
    implies(
      arg0: AllJavaClasses['java.security.Permission']['instanceObject'],
    ): boolean
    setReadOnly(): void
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
    next(): AllJavaClasses['java.lang.Object']['instanceObject']
    hasNext(): boolean
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
    builder(): AllJavaClasses['java.util.stream.Stream$Builder']['instanceObject']
    concat(
      arg0: AllJavaClasses['java.util.stream.Stream']['instanceObject'],
      arg1: AllJavaClasses['java.util.stream.Stream']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    empty(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    iterate(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.UnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    iterate(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.UnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    generate(
      arg0: AllJavaClasses['java.util.function.Supplier']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    ofNullable(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
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
    count(): number
    limit(
      arg0: number,
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    toArray(): AllJavaClasses['java.lang.Object']['instanceObject'][]
    toArray(
      arg0: AllJavaClasses['java.util.function.IntFunction']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject'][]
    filter(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    collect(
      arg0: AllJavaClasses['java.util.stream.Collector']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    collect(
      arg0: AllJavaClasses['java.util.function.Supplier']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    map(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
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
      arg1: AllJavaClasses['java.util.function.BinaryOperator']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    reduce(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.BinaryOperator']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    reduce(
      arg0: AllJavaClasses['java.util.function.BinaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.Optional']['instanceObject']
    distinct(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    dropWhile(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    sorted(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    sorted(
      arg0: AllJavaClasses['java.util.Comparator']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    allMatch(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): boolean
    anyMatch(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): boolean
    findFirst(): AllJavaClasses['java.util.Optional']['instanceObject']
    mapToInt(
      arg0: AllJavaClasses['java.util.function.ToIntFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    mapToLong(
      arg0: AllJavaClasses['java.util.function.ToLongFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    mapToDouble(
      arg0: AllJavaClasses['java.util.function.ToDoubleFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    flatMapToInt(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    flatMapToLong(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    flatMapToDouble(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    forEachOrdered(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): void
    noneMatch(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): boolean
    takeWhile(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.stream.BaseStream']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_Optional = {
  staticObject: {
    empty(): AllJavaClasses['java.util.Optional']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Optional']['instanceObject']
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
    filter(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): AllJavaClasses['java.util.Optional']['instanceObject']
    stream(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    map(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
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
type AllJavaClass_java_util_function_Predicate = {
  staticObject: {
    isEqual(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.function.Predicate']['instanceObject']
    not(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): AllJavaClasses['java.util.function.Predicate']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.function.Predicate'
    test(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    or(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): AllJavaClasses['java.util.function.Predicate']['instanceObject']
    and(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
    ): AllJavaClasses['java.util.function.Predicate']['instanceObject']
    negate(): AllJavaClasses['java.util.function.Predicate']['instanceObject']
  }
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
    naturalOrder(): AllJavaClasses['java.util.Comparator']['instanceObject']
    nullsFirst(
      arg0: AllJavaClasses['java.util.Comparator']['instanceObject'],
    ): AllJavaClasses['java.util.Comparator']['instanceObject']
    nullsLast(
      arg0: AllJavaClasses['java.util.Comparator']['instanceObject'],
    ): AllJavaClasses['java.util.Comparator']['instanceObject']
    comparing(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
      arg1: AllJavaClasses['java.util.Comparator']['instanceObject'],
    ): AllJavaClasses['java.util.Comparator']['instanceObject']
    comparing(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
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
    ): AllJavaClasses['java.util.Comparator']['instanceObject']
    thenComparing(
      arg0: AllJavaClasses['java.util.function.Function']['instanceObject'],
      arg1: AllJavaClasses['java.util.Comparator']['instanceObject'],
    ): AllJavaClasses['java.util.Comparator']['instanceObject']
    thenComparing(
      arg0: AllJavaClasses['java.util.Comparator']['instanceObject'],
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
type AllJavaClass_java_util_function_IntFunction = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.function.IntFunction'
    apply(arg0: number): AllJavaClasses['java.lang.Object']['instanceObject']
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
    finisher(): AllJavaClasses['java.util.function.Function']['instanceObject']
    accumulator(): AllJavaClasses['java.util.function.BiConsumer']['instanceObject']
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
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg6: AllJavaClasses['java.lang.Object']['instanceObject'],
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
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
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
    ): AllJavaClasses['java.util.Set']['instanceObject']
    of(): AllJavaClasses['java.util.Set']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Set']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Set']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Set']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.Set'
    add(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    remove(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    hashCode(): number
    clear(): void
    isEmpty(): boolean
    contains(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    size(): number
    toArray(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject'][]
    toArray(): AllJavaClasses['java.lang.Object']['instanceObject'][]
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    spliterator(): AllJavaClasses['java.util.Spliterator']['instanceObject']
    addAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    containsAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    retainAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    removeAll(
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
    add(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    remove(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    hashCode(): number
    clear(): void
    isEmpty(): boolean
    contains(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    size(): number
    toArray(
      arg0: AllJavaClasses['java.util.function.IntFunction']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject'][]
    toArray(): AllJavaClasses['java.lang.Object']['instanceObject'][]
    toArray(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject'][]
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    spliterator(): AllJavaClasses['java.util.Spliterator']['instanceObject']
    addAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    stream(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    containsAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    retainAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    removeAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    removeIf(
      arg0: AllJavaClasses['java.util.function.Predicate']['instanceObject'],
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
    estimateSize(): number
    tryAdvance(
      arg0: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): boolean
    trySplit(): AllJavaClasses['java.util.Spliterator']['instanceObject']
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
  instanceObject: (({
    __javaClass: 'java.lang.Enum'
    name(): string
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(arg0: AllJavaClasses['java.lang.Enum']['instanceObject']): number
    getDeclaringClass(): AllJavaClasses['java.lang.Class']['instanceObject']
    ordinal(): number
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
type AllJavaClass_java_util_function_UnaryOperator = {
  staticObject: {
    identity(): AllJavaClasses['java.util.function.UnaryOperator']['instanceObject']
  }
  instanceObject: { __javaClass: 'java.util.function.UnaryOperator' } & Omit<
    AllJavaClasses['java.util.function.Function']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_stream_IntStream = {
  staticObject: {
    builder(): AllJavaClasses['java.util.stream.IntStream$Builder']['instanceObject']
    concat(
      arg0: AllJavaClasses['java.util.stream.IntStream']['instanceObject'],
      arg1: AllJavaClasses['java.util.stream.IntStream']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    empty(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    of(
      arg0: number,
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    of(
      arg0: number[],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
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
    count(): number
    limit(
      arg0: number,
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    toArray(): number[]
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    iterator(): AllJavaClasses['java.util.PrimitiveIterator$OfInt']['instanceObject']
    spliterator(): AllJavaClasses['java.util.Spliterator']['instanceObject']
    spliterator(): AllJavaClasses['java.util.Spliterator$OfInt']['instanceObject']
    filter(
      arg0: AllJavaClasses['java.util.function.IntPredicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    collect(
      arg0: AllJavaClasses['java.util.function.Supplier']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.ObjIntConsumer']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    map(
      arg0: AllJavaClasses['java.util.function.IntUnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
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
    mapToObj(
      arg0: AllJavaClasses['java.util.function.IntFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    dropWhile(
      arg0: AllJavaClasses['java.util.function.IntPredicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    sorted(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    allMatch(
      arg0: AllJavaClasses['java.util.function.IntPredicate']['instanceObject'],
    ): boolean
    anyMatch(
      arg0: AllJavaClasses['java.util.function.IntPredicate']['instanceObject'],
    ): boolean
    findFirst(): AllJavaClasses['java.util.OptionalInt']['instanceObject']
    mapToLong(
      arg0: AllJavaClasses['java.util.function.IntToLongFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    mapToDouble(
      arg0: AllJavaClasses['java.util.function.IntToDoubleFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    forEachOrdered(
      arg0: AllJavaClasses['java.util.function.IntConsumer']['instanceObject'],
    ): void
    noneMatch(
      arg0: AllJavaClasses['java.util.function.IntPredicate']['instanceObject'],
    ): boolean
    sequential(): AllJavaClasses['java.util.stream.BaseStream']['instanceObject']
    sequential(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    takeWhile(
      arg0: AllJavaClasses['java.util.function.IntPredicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    average(): AllJavaClasses['java.util.OptionalDouble']['instanceObject']
    summaryStatistics(): AllJavaClasses['java.util.IntSummaryStatistics']['instanceObject']
    asLongStream(): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    asDoubleStream(): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    boxed(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.stream.BaseStream']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_OptionalInt = {
  staticObject: {
    empty(): AllJavaClasses['java.util.OptionalInt']['instanceObject']
    of(arg0: number): AllJavaClasses['java.util.OptionalInt']['instanceObject']
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
    reverseBytes(arg0: number): number
    valueOf(arg0: number): AllJavaClasses['java.lang.Integer']['instanceObject']
    valueOf(
      arg0: string,
      arg1: number,
    ): AllJavaClasses['java.lang.Integer']['instanceObject']
    valueOf(arg0: string): AllJavaClasses['java.lang.Integer']['instanceObject']
    toHexString(arg0: number): string
    decode(arg0: string): AllJavaClasses['java.lang.Integer']['instanceObject']
    compare(arg0: number, arg1: number): number
    reverse(arg0: number): number
    toUnsignedLong(arg0: number): number
    parseInt(arg0: string): number
    parseInt(arg0: string, arg1: number): number
    parseInt(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: number,
    ): number
    sum(arg0: number, arg1: number): number
    compareUnsigned(arg0: number, arg1: number): number
    toUnsignedString(arg0: number, arg1: number): string
    toUnsignedString(arg0: number): string
    toOctalString(arg0: number): string
    toBinaryString(arg0: number): string
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
      arg1: number,
    ): AllJavaClasses['java.lang.Integer']['instanceObject']
    getInteger(
      arg0: string,
    ): AllJavaClasses['java.lang.Integer']['instanceObject']
    divideUnsigned(arg0: number, arg1: number): number
    remainderUnsigned(arg0: number, arg1: number): number
    highestOneBit(arg0: number): number
    lowestOneBit(arg0: number): number
    rotateLeft(arg0: number, arg1: number): number
    rotateRight(arg0: number, arg1: number): number
    signum(arg0: number): number
  }
  instanceObject: ({
    __javaClass: 'java.lang.Integer'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Integer']['instanceObject'],
    ): number
    byteValue(): number
    shortValue(): number
    intValue(): number
    longValue(): number
    floatValue(): number
    doubleValue(): number
  } & Omit<
    AllJavaClasses['java.lang.Number']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
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
    codePoints(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    charAt(arg0: number): AllJavaClasses['char']['instanceObject']
    subSequence(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.CharSequence']['instanceObject']
    chars(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
  }
}
type AllJavaClass_char = {
  staticObject: object
  instanceObject: { __javaClass: 'char' }
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
    and(
      arg0: AllJavaClasses['java.util.function.IntPredicate']['instanceObject'],
    ): AllJavaClasses['java.util.function.IntPredicate']['instanceObject']
    negate(): AllJavaClasses['java.util.function.IntPredicate']['instanceObject']
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
    isParallel(): boolean
    sequential(): AllJavaClasses['java.util.stream.BaseStream']['instanceObject']
    unordered(): AllJavaClasses['java.util.stream.BaseStream']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.AutoCloseable']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_stream_LongStream = {
  staticObject: {
    builder(): AllJavaClasses['java.util.stream.LongStream$Builder']['instanceObject']
    concat(
      arg0: AllJavaClasses['java.util.stream.LongStream']['instanceObject'],
      arg1: AllJavaClasses['java.util.stream.LongStream']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    empty(): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    of(
      arg0: number[],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    of(
      arg0: number,
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
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
    count(): number
    limit(
      arg0: number,
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    toArray(): number[]
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    iterator(): AllJavaClasses['java.util.PrimitiveIterator$OfLong']['instanceObject']
    spliterator(): AllJavaClasses['java.util.Spliterator']['instanceObject']
    spliterator(): AllJavaClasses['java.util.Spliterator$OfLong']['instanceObject']
    filter(
      arg0: AllJavaClasses['java.util.function.LongPredicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    collect(
      arg0: AllJavaClasses['java.util.function.Supplier']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.ObjLongConsumer']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    map(
      arg0: AllJavaClasses['java.util.function.LongUnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
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
      arg0: number,
      arg1: AllJavaClasses['java.util.function.LongBinaryOperator']['instanceObject'],
    ): number
    reduce(
      arg0: AllJavaClasses['java.util.function.LongBinaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.OptionalLong']['instanceObject']
    parallel(): AllJavaClasses['java.util.stream.BaseStream']['instanceObject']
    parallel(): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    distinct(): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    mapToObj(
      arg0: AllJavaClasses['java.util.function.LongFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    dropWhile(
      arg0: AllJavaClasses['java.util.function.LongPredicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    sorted(): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    allMatch(
      arg0: AllJavaClasses['java.util.function.LongPredicate']['instanceObject'],
    ): boolean
    anyMatch(
      arg0: AllJavaClasses['java.util.function.LongPredicate']['instanceObject'],
    ): boolean
    findFirst(): AllJavaClasses['java.util.OptionalLong']['instanceObject']
    mapToInt(
      arg0: AllJavaClasses['java.util.function.LongToIntFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    mapToDouble(
      arg0: AllJavaClasses['java.util.function.LongToDoubleFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    forEachOrdered(
      arg0: AllJavaClasses['java.util.function.LongConsumer']['instanceObject'],
    ): void
    noneMatch(
      arg0: AllJavaClasses['java.util.function.LongPredicate']['instanceObject'],
    ): boolean
    sequential(): AllJavaClasses['java.util.stream.BaseStream']['instanceObject']
    sequential(): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    takeWhile(
      arg0: AllJavaClasses['java.util.function.LongPredicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    average(): AllJavaClasses['java.util.OptionalDouble']['instanceObject']
    summaryStatistics(): AllJavaClasses['java.util.LongSummaryStatistics']['instanceObject']
    asDoubleStream(): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    boxed(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.stream.BaseStream']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_OptionalLong = {
  staticObject: {
    empty(): AllJavaClasses['java.util.OptionalLong']['instanceObject']
    of(arg0: number): AllJavaClasses['java.util.OptionalLong']['instanceObject']
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
    reverseBytes(arg0: number): number
    getLong(arg0: string): AllJavaClasses['java.lang.Long']['instanceObject']
    getLong(
      arg0: string,
      arg1: number,
    ): AllJavaClasses['java.lang.Long']['instanceObject']
    getLong(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Long']['instanceObject'],
    ): AllJavaClasses['java.lang.Long']['instanceObject']
    valueOf(arg0: string): AllJavaClasses['java.lang.Long']['instanceObject']
    valueOf(arg0: number): AllJavaClasses['java.lang.Long']['instanceObject']
    valueOf(
      arg0: string,
      arg1: number,
    ): AllJavaClasses['java.lang.Long']['instanceObject']
    toHexString(arg0: number): string
    decode(arg0: string): AllJavaClasses['java.lang.Long']['instanceObject']
    compare(arg0: number, arg1: number): number
    reverse(arg0: number): number
    sum(arg0: number, arg1: number): number
    compareUnsigned(arg0: number, arg1: number): number
    toUnsignedString(arg0: number, arg1: number): string
    toUnsignedString(arg0: number): string
    toOctalString(arg0: number): string
    toBinaryString(arg0: number): string
    divideUnsigned(arg0: number, arg1: number): number
    remainderUnsigned(arg0: number, arg1: number): number
    highestOneBit(arg0: number): number
    lowestOneBit(arg0: number): number
    rotateLeft(arg0: number, arg1: number): number
    rotateRight(arg0: number, arg1: number): number
    signum(arg0: number): number
    parseLong(arg0: string): number
    parseLong(arg0: string, arg1: number): number
    parseLong(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: number,
    ): number
    parseUnsignedLong(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: number,
    ): number
    parseUnsignedLong(arg0: string, arg1: number): number
    parseUnsignedLong(arg0: string): number
  }
  instanceObject: ({
    __javaClass: 'java.lang.Long'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(arg0: AllJavaClasses['java.lang.Long']['instanceObject']): number
    byteValue(): number
    shortValue(): number
    intValue(): number
    longValue(): number
    floatValue(): number
    doubleValue(): number
  } & Omit<
    AllJavaClasses['java.lang.Number']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
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
    and(
      arg0: AllJavaClasses['java.util.function.LongPredicate']['instanceObject'],
    ): AllJavaClasses['java.util.function.LongPredicate']['instanceObject']
    negate(): AllJavaClasses['java.util.function.LongPredicate']['instanceObject']
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
    builder(): AllJavaClasses['java.util.stream.DoubleStream$Builder']['instanceObject']
    concat(
      arg0: AllJavaClasses['java.util.stream.DoubleStream']['instanceObject'],
      arg1: AllJavaClasses['java.util.stream.DoubleStream']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    empty(): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    of(
      arg0: number,
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    of(
      arg0: number[],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    iterate(
      arg0: number,
      arg1: AllJavaClasses['java.util.function.DoublePredicate']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.DoubleUnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    iterate(
      arg0: number,
      arg1: AllJavaClasses['java.util.function.DoubleUnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    generate(
      arg0: AllJavaClasses['java.util.function.DoubleSupplier']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.stream.DoubleStream'
    min(): AllJavaClasses['java.util.OptionalDouble']['instanceObject']
    max(): AllJavaClasses['java.util.OptionalDouble']['instanceObject']
    count(): number
    limit(
      arg0: number,
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    toArray(): number[]
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    iterator(): AllJavaClasses['java.util.PrimitiveIterator$OfDouble']['instanceObject']
    spliterator(): AllJavaClasses['java.util.Spliterator']['instanceObject']
    spliterator(): AllJavaClasses['java.util.Spliterator$OfDouble']['instanceObject']
    filter(
      arg0: AllJavaClasses['java.util.function.DoublePredicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    collect(
      arg0: AllJavaClasses['java.util.function.Supplier']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.ObjDoubleConsumer']['instanceObject'],
      arg2: AllJavaClasses['java.util.function.BiConsumer']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    map(
      arg0: AllJavaClasses['java.util.function.DoubleUnaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
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
      arg0: AllJavaClasses['java.util.function.DoubleBinaryOperator']['instanceObject'],
    ): AllJavaClasses['java.util.OptionalDouble']['instanceObject']
    reduce(
      arg0: number,
      arg1: AllJavaClasses['java.util.function.DoubleBinaryOperator']['instanceObject'],
    ): number
    parallel(): AllJavaClasses['java.util.stream.BaseStream']['instanceObject']
    parallel(): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    distinct(): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    mapToObj(
      arg0: AllJavaClasses['java.util.function.DoubleFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    dropWhile(
      arg0: AllJavaClasses['java.util.function.DoublePredicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    sorted(): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    allMatch(
      arg0: AllJavaClasses['java.util.function.DoublePredicate']['instanceObject'],
    ): boolean
    anyMatch(
      arg0: AllJavaClasses['java.util.function.DoublePredicate']['instanceObject'],
    ): boolean
    findFirst(): AllJavaClasses['java.util.OptionalDouble']['instanceObject']
    mapToInt(
      arg0: AllJavaClasses['java.util.function.DoubleToIntFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    mapToLong(
      arg0: AllJavaClasses['java.util.function.DoubleToLongFunction']['instanceObject'],
    ): AllJavaClasses['java.util.stream.LongStream']['instanceObject']
    forEachOrdered(
      arg0: AllJavaClasses['java.util.function.DoubleConsumer']['instanceObject'],
    ): void
    noneMatch(
      arg0: AllJavaClasses['java.util.function.DoublePredicate']['instanceObject'],
    ): boolean
    sequential(): AllJavaClasses['java.util.stream.BaseStream']['instanceObject']
    sequential(): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    takeWhile(
      arg0: AllJavaClasses['java.util.function.DoublePredicate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.DoubleStream']['instanceObject']
    average(): AllJavaClasses['java.util.OptionalDouble']['instanceObject']
    summaryStatistics(): AllJavaClasses['java.util.DoubleSummaryStatistics']['instanceObject']
    boxed(): AllJavaClasses['java.util.stream.Stream']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.stream.BaseStream']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_OptionalDouble = {
  staticObject: {
    empty(): AllJavaClasses['java.util.OptionalDouble']['instanceObject']
    of(
      arg0: number,
    ): AllJavaClasses['java.util.OptionalDouble']['instanceObject']
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
    MAX_EXPONENT: number
    MIN_EXPONENT: number
    SIZE: number
    BYTES: number
    TYPE: AllJavaClasses['java.lang.Class']['instanceObject']
    new (arg0: number): AllJavaClasses['java.lang.Double']['instanceObject']
    new (arg0: string): AllJavaClasses['java.lang.Double']['instanceObject']
    toString(arg0: number): string
    hashCode(arg0: number): number
    min(arg0: number, arg1: number): number
    max(arg0: number, arg1: number): number
    doubleToRawLongBits(arg0: number): number
    doubleToLongBits(arg0: number): number
    longBitsToDouble(arg0: number): number
    valueOf(arg0: string): AllJavaClasses['java.lang.Double']['instanceObject']
    valueOf(arg0: number): AllJavaClasses['java.lang.Double']['instanceObject']
    toHexString(arg0: number): string
    compare(arg0: number, arg1: number): number
    isNaN(arg0: number): boolean
    isInfinite(arg0: number): boolean
    isFinite(arg0: number): boolean
    sum(arg0: number, arg1: number): number
    parseDouble(arg0: string): number
  }
  instanceObject: ({
    __javaClass: 'java.lang.Double'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Double']['instanceObject'],
    ): number
    byteValue(): number
    shortValue(): number
    intValue(): number
    longValue(): number
    floatValue(): number
    doubleValue(): number
    isNaN(): boolean
    isInfinite(): boolean
  } & Omit<
    AllJavaClasses['java.lang.Number']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
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
    and(
      arg0: AllJavaClasses['java.util.function.DoublePredicate']['instanceObject'],
    ): AllJavaClasses['java.util.function.DoublePredicate']['instanceObject']
    negate(): AllJavaClasses['java.util.function.DoublePredicate']['instanceObject']
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
    getMax(): number
    getAverage(): number
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
    getMax(): number
    getAverage(): number
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
    getMax(): number
    getAverage(): number
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
    entry(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Map$Entry']['instanceObject']
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
    ): AllJavaClasses['java.util.Map']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.Map']['instanceObject']
    of(): AllJavaClasses['java.util.Map']['instanceObject']
    ofEntries(
      arg0: AllJavaClasses['java.util.Map$Entry']['instanceObject'][],
    ): AllJavaClasses['java.util.Map']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.Map'
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
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    values(): AllJavaClasses['java.util.Collection']['instanceObject']
    hashCode(): number
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
    size(): number
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
    containsValue(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    keySet(): AllJavaClasses['java.util.Set']['instanceObject']
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
type AllJavaClass_java_lang_Module = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.lang.Module'
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
    getName(): string
    getClassLoader(): AllJavaClasses['java.lang.ClassLoader']['instanceObject']
    getResourceAsStream(
      arg0: string,
    ): AllJavaClasses['java.io.InputStream']['instanceObject']
    getAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getDeclaredAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getDescriptor(): AllJavaClasses['java.lang.module.ModuleDescriptor']['instanceObject']
    isNamed(): boolean
    isOpen(arg0: string): boolean
    isOpen(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Module']['instanceObject'],
    ): boolean
    getPackages(): AllJavaClasses['java.util.Set']['instanceObject']
    getLayer(): AllJavaClasses['java.lang.ModuleLayer']['instanceObject']
    canRead(arg0: AllJavaClasses['java.lang.Module']['instanceObject']): boolean
    isExported(arg0: string): boolean
    isExported(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Module']['instanceObject'],
    ): boolean
    canUse(arg0: AllJavaClasses['java.lang.Class']['instanceObject']): boolean
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.reflect.AnnotatedElement']['instanceObject'],
      '__javaClass'
    >
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
    exports(): AllJavaClasses['java.util.Set']['instanceObject']
    opens(): AllJavaClasses['java.util.Set']['instanceObject']
    isAutomatic(): boolean
    uses(): AllJavaClasses['java.util.Set']['instanceObject']
    provides(): AllJavaClasses['java.util.Set']['instanceObject']
    requires(): AllJavaClasses['java.util.Set']['instanceObject']
    mainClass(): AllJavaClasses['java.util.Optional']['instanceObject']
    rawVersion(): AllJavaClasses['java.util.Optional']['instanceObject']
    toNameAndVersion(): string
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
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    wrap(
      arg0: number[],
      arg1: number,
      arg2: number,
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
    get(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    get(arg0: number): number
    get(): number
    get(arg0: number[]): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    put(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    put(arg0: number): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    put(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    put(arg0: number[]): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
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
    getChar(): AllJavaClasses['char']['instanceObject']
    getChar(arg0: number): AllJavaClasses['char']['instanceObject']
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
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    putInt(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    getLong(arg0: number): number
    getLong(): number
    putLong(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    putLong(
      arg0: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    getFloat(): number
    getFloat(arg0: number): number
    putFloat(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    putFloat(
      arg0: number,
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
    clear(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    clear(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    limit(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    limit(arg0: number): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    isDirect(): boolean
    hasArray(): boolean
    array(): number[]
    array(): AllJavaClasses['java.lang.Object']['instanceObject']
    position(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    arrayOffset(): number
    mark(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    mark(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    mismatch(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): number
    asReadOnlyBuffer(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    compact(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    order(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    order(): AllJavaClasses['java.nio.ByteOrder']['instanceObject']
    alignmentOffset(arg0: number, arg1: number): number
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
    clear(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    limit(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    limit(): number
    remaining(): number
    isDirect(): boolean
    hasArray(): boolean
    array(): AllJavaClasses['java.lang.Object']['instanceObject']
    position(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    position(): number
    arrayOffset(): number
    capacity(): number
    mark(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    hasRemaining(): boolean
    isReadOnly(): boolean
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
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    wrap(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    wrap(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    wrap(
      arg0: AllJavaClasses['char']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    allocate(
      arg0: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
  }
  instanceObject: (((({
    __javaClass: 'java.nio.CharBuffer'
    get(): AllJavaClasses['char']['instanceObject']
    get(arg0: number): AllJavaClasses['char']['instanceObject']
    get(
      arg0: AllJavaClasses['char']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    get(
      arg0: AllJavaClasses['char']['instanceObject'][],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    put(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    put(arg0: string): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    put(
      arg0: AllJavaClasses['java.nio.CharBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    put(
      arg0: AllJavaClasses['char']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    put(
      arg0: string,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    put(
      arg0: AllJavaClasses['char']['instanceObject'][],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    length(): number
    toString(): string
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
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
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.nio.CharBuffer']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    clear(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    clear(): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    charAt(arg0: number): AllJavaClasses['char']['instanceObject']
    subSequence(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    subSequence(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.CharSequence']['instanceObject']
    limit(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    limit(arg0: number): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    chars(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    isDirect(): boolean
    hasArray(): boolean
    array(): AllJavaClasses['java.lang.Object']['instanceObject']
    array(): AllJavaClasses['char']['instanceObject'][]
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    position(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    arrayOffset(): number
    read(arg0: AllJavaClasses['java.nio.CharBuffer']['instanceObject']): number
    mark(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    mark(): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    mismatch(
      arg0: AllJavaClasses['java.nio.CharBuffer']['instanceObject'],
    ): number
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
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    wrap(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    allocate(
      arg0: number,
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.nio.ShortBuffer'
    get(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    get(arg0: number): number
    get(): number
    get(
      arg0: number[],
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    put(arg0: number): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    put(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    put(
      arg0: AllJavaClasses['java.nio.ShortBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    put(
      arg0: number[],
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
    limit(
      arg0: number,
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    limit(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    isDirect(): boolean
    hasArray(): boolean
    array(): number[]
    array(): AllJavaClasses['java.lang.Object']['instanceObject']
    position(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    arrayOffset(): number
    mark(): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    mark(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.ShortBuffer']['instanceObject']
    mismatch(
      arg0: AllJavaClasses['java.nio.ShortBuffer']['instanceObject'],
    ): number
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
    wrap(arg0: number[]): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    wrap(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    allocate(
      arg0: number,
    ): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.nio.IntBuffer'
    get(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    get(arg0: number): number
    get(): number
    get(arg0: number[]): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    put(arg0: number): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    put(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    put(
      arg0: AllJavaClasses['java.nio.IntBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    put(arg0: number[]): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
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
    limit(arg0: number): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    limit(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    isDirect(): boolean
    hasArray(): boolean
    array(): number[]
    array(): AllJavaClasses['java.lang.Object']['instanceObject']
    position(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    arrayOffset(): number
    mark(): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    mark(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.IntBuffer']['instanceObject']
    mismatch(
      arg0: AllJavaClasses['java.nio.IntBuffer']['instanceObject'],
    ): number
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
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    wrap(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    allocate(
      arg0: number,
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.nio.LongBuffer'
    get(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    get(arg0: number): number
    get(): number
    get(arg0: number[]): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    put(arg0: number): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    put(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    put(
      arg0: AllJavaClasses['java.nio.LongBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    put(arg0: number[]): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
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
    limit(arg0: number): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    limit(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    isDirect(): boolean
    hasArray(): boolean
    array(): number[]
    array(): AllJavaClasses['java.lang.Object']['instanceObject']
    position(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    arrayOffset(): number
    mark(): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    mark(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.LongBuffer']['instanceObject']
    mismatch(
      arg0: AllJavaClasses['java.nio.LongBuffer']['instanceObject'],
    ): number
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
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    wrap(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    allocate(
      arg0: number,
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.nio.FloatBuffer'
    get(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    get(arg0: number): number
    get(): number
    get(
      arg0: number[],
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    put(arg0: number): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    put(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    put(
      arg0: AllJavaClasses['java.nio.FloatBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    put(
      arg0: number[],
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
    limit(
      arg0: number,
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    limit(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    isDirect(): boolean
    hasArray(): boolean
    array(): number[]
    array(): AllJavaClasses['java.lang.Object']['instanceObject']
    position(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    arrayOffset(): number
    mark(): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    mark(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.FloatBuffer']['instanceObject']
    mismatch(
      arg0: AllJavaClasses['java.nio.FloatBuffer']['instanceObject'],
    ): number
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
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    wrap(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    allocate(
      arg0: number,
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.nio.DoubleBuffer'
    get(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    get(arg0: number): number
    get(): number
    get(
      arg0: number[],
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    put(arg0: number): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    put(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    put(
      arg0: AllJavaClasses['java.nio.DoubleBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    put(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    put(
      arg0: number[],
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
    limit(
      arg0: number,
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    limit(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    isDirect(): boolean
    hasArray(): boolean
    array(): number[]
    array(): AllJavaClasses['java.lang.Object']['instanceObject']
    position(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    arrayOffset(): number
    mark(): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    mark(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    slice(): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    duplicate(): AllJavaClasses['java.nio.DoubleBuffer']['instanceObject']
    mismatch(
      arg0: AllJavaClasses['java.nio.DoubleBuffer']['instanceObject'],
    ): number
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
type AllJavaClass_java_util_List = {
  staticObject: {
    copyOf(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
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
    ): AllJavaClasses['java.util.List']['instanceObject']
    of(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
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
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg6: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg7: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg8: AllJavaClasses['java.lang.Object']['instanceObject'],
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
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
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
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg5: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg6: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    of(): AllJavaClasses['java.util.List']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.util.List'
    add(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    add(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    remove(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    remove(arg0: number): AllJavaClasses['java.lang.Object']['instanceObject']
    get(arg0: number): AllJavaClasses['java.lang.Object']['instanceObject']
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    hashCode(): number
    indexOf(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): number
    clear(): void
    isEmpty(): boolean
    lastIndexOf(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    contains(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    replaceAll(
      arg0: AllJavaClasses['java.util.function.UnaryOperator']['instanceObject'],
    ): void
    size(): number
    subList(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.util.List']['instanceObject']
    toArray(): AllJavaClasses['java.lang.Object']['instanceObject'][]
    toArray(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject'][]
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    spliterator(): AllJavaClasses['java.util.Spliterator']['instanceObject']
    addAll(
      arg0: number,
      arg1: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    addAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    set(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    containsAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    retainAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    removeAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    sort(arg0: AllJavaClasses['java.util.Comparator']['instanceObject']): void
    listIterator(): AllJavaClasses['java.util.ListIterator']['instanceObject']
    listIterator(
      arg0: number,
    ): AllJavaClasses['java.util.ListIterator']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.Collection']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_util_ListIterator = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.ListIterator'
    add(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
    remove(): void
    next(): AllJavaClasses['java.lang.Object']['instanceObject']
    hasNext(): boolean
    set(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
    nextIndex(): number
    previous(): AllJavaClasses['java.lang.Object']['instanceObject']
    previousIndex(): number
    hasPrevious(): boolean
  } & Omit<
    AllJavaClasses['java.util.Iterator']['instanceObject'],
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
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.module.ModuleDescriptor$Requires']['instanceObject'],
    ): number
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
    defineModules(
      arg0: AllJavaClasses['java.lang.module.Configuration']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.Function']['instanceObject'],
    ): AllJavaClasses['java.lang.ModuleLayer']['instanceObject']
    findModule(
      arg0: string,
    ): AllJavaClasses['java.util.Optional']['instanceObject']
    parents(): AllJavaClasses['java.util.List']['instanceObject']
    configuration(): AllJavaClasses['java.lang.module.Configuration']['instanceObject']
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
    findModule(
      arg0: string,
    ): AllJavaClasses['java.util.Optional']['instanceObject']
    parents(): AllJavaClasses['java.util.List']['instanceObject']
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
    ofSystem(): AllJavaClasses['java.lang.module.ModuleFinder']['instanceObject']
    compose(
      arg0: AllJavaClasses['java.lang.module.ModuleFinder']['instanceObject'][],
    ): AllJavaClasses['java.lang.module.ModuleFinder']['instanceObject']
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
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    getName(
      arg0: number,
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    startsWith(arg0: string): boolean
    startsWith(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): boolean
    endsWith(arg0: string): boolean
    endsWith(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): boolean
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    resolve(
      arg0: string,
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    resolve(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    getParent(): AllJavaClasses['java.nio.file.Path']['instanceObject']
    isAbsolute(): boolean
    register(
      arg0: AllJavaClasses['java.nio.file.WatchService']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.WatchEvent$Kind']['instanceObject'][],
    ): AllJavaClasses['java.nio.file.WatchKey']['instanceObject']
    register(
      arg0: AllJavaClasses['java.nio.file.WatchService']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.WatchEvent$Kind']['instanceObject'][],
      arg2: AllJavaClasses['java.nio.file.WatchEvent$Modifier']['instanceObject'][],
    ): AllJavaClasses['java.nio.file.WatchKey']['instanceObject']
    getRoot(): AllJavaClasses['java.nio.file.Path']['instanceObject']
    normalize(): AllJavaClasses['java.nio.file.Path']['instanceObject']
    toRealPath(
      arg0: AllJavaClasses['java.nio.file.LinkOption']['instanceObject'][],
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    toFile(): AllJavaClasses['java.io.File']['instanceObject']
    getFileName(): AllJavaClasses['java.nio.file.Path']['instanceObject']
    getFileSystem(): AllJavaClasses['java.nio.file.FileSystem']['instanceObject']
    relativize(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    getNameCount(): number
    subpath(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    toUri(): AllJavaClasses['java.net.URI']['instanceObject']
    toAbsolutePath(): AllJavaClasses['java.nio.file.Path']['instanceObject']
    resolveSibling(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    resolveSibling(
      arg0: string,
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
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
    isValid(): boolean
    pollEvents(): AllJavaClasses['java.util.List']['instanceObject']
    cancel(): void
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
    poll(
      arg0: number,
      arg1: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): AllJavaClasses['java.nio.file.WatchKey']['instanceObject']
    poll(): AllJavaClasses['java.nio.file.WatchKey']['instanceObject']
    close(): void
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
    sleep(arg0: number): void
    toNanos(arg0: number): number
    toMillis(arg0: number): number
    convert(
      arg0: number,
      arg1: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): number
    convert(
      arg0: AllJavaClasses['java.time.Duration']['instanceObject'],
    ): number
    toMicros(arg0: number): number
    toSeconds(arg0: number): number
    toMinutes(arg0: number): number
    toHours(arg0: number): number
    toDays(arg0: number): number
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
    getDuration(): AllJavaClasses['java.time.Duration']['instanceObject']
    isDurationEstimated(): boolean
    isDateBased(): boolean
    isTimeBased(): boolean
    isSupportedBy(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): boolean
    addTo(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    between(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): number
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>) &
    Omit<
      AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_Duration = {
  staticObject: {
    ZERO: AllJavaClasses['java.time.Duration']['instanceObject']
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    of(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    between(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    ofNanos(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    ofSeconds(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    ofSeconds(
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
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.time.Duration']['instanceObject'],
    ): number
    toNanos(): number
    toMillis(): number
    toSeconds(): number
    toMinutes(): number
    toHours(): number
    toDays(): number
    getSeconds(): number
    getNano(): number
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.Duration']['instanceObject'],
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.Duration']['instanceObject'],
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    isNegative(): boolean
    isZero(): boolean
    addTo(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    getUnits(): AllJavaClasses['java.util.List']['instanceObject']
    withSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    withNanos(
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
    plusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    plusMillis(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    plusNanos(
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
    multipliedBy(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    dividedBy(
      arg0: number,
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    dividedBy(
      arg0: AllJavaClasses['java.time.Duration']['instanceObject'],
    ): number
    negated(): AllJavaClasses['java.time.Duration']['instanceObject']
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
    getDuration(): AllJavaClasses['java.time.Duration']['instanceObject']
    isDurationEstimated(): boolean
    isDateBased(): boolean
    isTimeBased(): boolean
    isSupportedBy(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): boolean
    addTo(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    between(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): number
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
    until(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
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
    isDateBased(): boolean
    isTimeBased(): boolean
    isSupportedBy(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): boolean
    adjustInto(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    rangeRefinedBy(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    getBaseUnit(): AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject']
    getRangeUnit(): AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject']
    getFrom(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): number
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
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
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
    checkValidIntValue(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
    isIntValue(): boolean
    isValidValue(arg0: number): boolean
    isFixed(): boolean
    getMinimum(): number
    getLargestMinimum(): number
    getSmallestMaximum(): number
    getMaximum(): number
    isValidIntValue(arg0: number): boolean
    checkValidValue(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): number
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
    CHINA: AllJavaClasses['java.util.Locale']['instanceObject']
    PRC: AllJavaClasses['java.util.Locale']['instanceObject']
    TAIWAN: AllJavaClasses['java.util.Locale']['instanceObject']
    UK: AllJavaClasses['java.util.Locale']['instanceObject']
    US: AllJavaClasses['java.util.Locale']['instanceObject']
    CANADA: AllJavaClasses['java.util.Locale']['instanceObject']
    CANADA_FRENCH: AllJavaClasses['java.util.Locale']['instanceObject']
    ROOT: AllJavaClasses['java.util.Locale']['instanceObject']
    PRIVATE_USE_EXTENSION: AllJavaClasses['char']['instanceObject']
    UNICODE_LOCALE_EXTENSION: AllJavaClasses['char']['instanceObject']
    new (arg0: string): AllJavaClasses['java.util.Locale']['instanceObject']
    new (
      arg0: string,
      arg1: string,
    ): AllJavaClasses['java.util.Locale']['instanceObject']
    new (
      arg0: string,
      arg1: string,
      arg2: string,
    ): AllJavaClasses['java.util.Locale']['instanceObject']
    getDefault(
      arg0: AllJavaClasses['java.util.Locale$Category']['instanceObject'],
    ): AllJavaClasses['java.util.Locale']['instanceObject']
    getDefault(): AllJavaClasses['java.util.Locale']['instanceObject']
    filter(
      arg0: AllJavaClasses['java.util.List']['instanceObject'],
      arg1: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    filter(
      arg0: AllJavaClasses['java.util.List']['instanceObject'],
      arg1: AllJavaClasses['java.util.Collection']['instanceObject'],
      arg2: AllJavaClasses['java.util.Locale$FilteringMode']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    lookup(
      arg0: AllJavaClasses['java.util.List']['instanceObject'],
      arg1: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): AllJavaClasses['java.util.Locale']['instanceObject']
    getAvailableLocales(): AllJavaClasses['java.util.Locale']['instanceObject'][]
    setDefault(arg0: AllJavaClasses['java.util.Locale']['instanceObject']): void
    setDefault(
      arg0: AllJavaClasses['java.util.Locale$Category']['instanceObject'],
      arg1: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): void
    getISOCountries(
      arg0: AllJavaClasses['java.util.Locale$IsoCountryCode']['instanceObject'],
    ): AllJavaClasses['java.util.Set']['instanceObject']
    getISOCountries(): string[]
    getISOLanguages(): string[]
    forLanguageTag(
      arg0: string,
    ): AllJavaClasses['java.util.Locale']['instanceObject']
    filterTags(
      arg0: AllJavaClasses['java.util.List']['instanceObject'],
      arg1: AllJavaClasses['java.util.Collection']['instanceObject'],
      arg2: AllJavaClasses['java.util.Locale$FilteringMode']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    filterTags(
      arg0: AllJavaClasses['java.util.List']['instanceObject'],
      arg1: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    lookupTag(
      arg0: AllJavaClasses['java.util.List']['instanceObject'],
      arg1: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): string
  }
  instanceObject: (({
    __javaClass: 'java.util.Locale'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    clone(): AllJavaClasses['java.lang.Object']['instanceObject']
    getLanguage(): string
    getDisplayName(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    getDisplayName(): string
    getScript(): string
    getCountry(): string
    getVariant(): string
    hasExtensions(): boolean
    stripExtensions(): AllJavaClasses['java.util.Locale']['instanceObject']
    getExtension(arg0: AllJavaClasses['char']['instanceObject']): string
    getExtensionKeys(): AllJavaClasses['java.util.Set']['instanceObject']
    getUnicodeLocaleAttributes(): AllJavaClasses['java.util.Set']['instanceObject']
    getUnicodeLocaleType(arg0: string): string
    getUnicodeLocaleKeys(): AllJavaClasses['java.util.Set']['instanceObject']
    toLanguageTag(): string
    getISO3Language(): string
    getISO3Country(): string
    getDisplayLanguage(): string
    getDisplayLanguage(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    getDisplayScript(): string
    getDisplayScript(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    getDisplayCountry(): string
    getDisplayCountry(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    getDisplayVariant(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    getDisplayVariant(): string
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
    addTo(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    getUnits(): AllJavaClasses['java.util.List']['instanceObject']
    subtractFrom(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
  }
}
type AllJavaClass_java_lang_Thread = {
  staticObject: {
    MIN_PRIORITY: number
    NORM_PRIORITY: number
    MAX_PRIORITY: number
    new (
      arg0: AllJavaClasses['java.lang.ThreadGroup']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['java.lang.Thread']['instanceObject']
    new (arg0: string): AllJavaClasses['java.lang.Thread']['instanceObject']
    new (
      arg0: AllJavaClasses['java.lang.ThreadGroup']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Runnable']['instanceObject'],
    ): AllJavaClasses['java.lang.Thread']['instanceObject']
    new (
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
    ): AllJavaClasses['java.lang.Thread']['instanceObject']
    new (): AllJavaClasses['java.lang.Thread']['instanceObject']
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
    currentThread(): AllJavaClasses['java.lang.Thread']['instanceObject']
    onSpinWait(): void
    holdsLock(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    dumpStack(): void
    yield(): void
    sleep(arg0: number, arg1: number): void
    sleep(arg0: number): void
    interrupted(): boolean
    activeCount(): number
    enumerate(
      arg0: AllJavaClasses['java.lang.Thread']['instanceObject'][],
    ): number
    getAllStackTraces(): AllJavaClasses['java.util.Map']['instanceObject']
    setDefaultUncaughtExceptionHandler(
      arg0: AllJavaClasses['java.lang.Thread$UncaughtExceptionHandler']['instanceObject'],
    ): void
    getDefaultUncaughtExceptionHandler(): AllJavaClasses['java.lang.Thread$UncaughtExceptionHandler']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.lang.Thread'
    run(): void
    toString(): string
    isInterrupted(): boolean
    getName(): string
    join(): void
    join(arg0: number, arg1: number): void
    join(arg0: number): void
    getThreadGroup(): AllJavaClasses['java.lang.ThreadGroup']['instanceObject']
    setContextClassLoader(
      arg0: AllJavaClasses['java.lang.ClassLoader']['instanceObject'],
    ): void
    getStackTrace(): AllJavaClasses['java.lang.StackTraceElement']['instanceObject'][]
    checkAccess(): void
    setPriority(arg0: number): void
    setDaemon(arg0: boolean): void
    start(): void
    stop(): void
    interrupt(): void
    isAlive(): boolean
    suspend(): void
    resume(): void
    getPriority(): number
    setName(arg0: string): void
    countStackFrames(): number
    isDaemon(): boolean
    getContextClassLoader(): AllJavaClasses['java.lang.ClassLoader']['instanceObject']
    getId(): number
    getState(): AllJavaClasses['java.lang.Thread$State']['instanceObject']
    getUncaughtExceptionHandler(): AllJavaClasses['java.lang.Thread$UncaughtExceptionHandler']['instanceObject']
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
      arg0: AllJavaClasses['java.lang.ThreadGroup']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['java.lang.ThreadGroup']['instanceObject']
    new (
      arg0: string,
    ): AllJavaClasses['java.lang.ThreadGroup']['instanceObject']
  }
  instanceObject: ({
    __javaClass: 'java.lang.ThreadGroup'
    toString(): string
    getName(): string
    list(): void
    getParent(): AllJavaClasses['java.lang.ThreadGroup']['instanceObject']
    checkAccess(): void
    setDaemon(arg0: boolean): void
    stop(): void
    interrupt(): void
    suspend(): void
    resume(): void
    activeCount(): number
    enumerate(
      arg0: AllJavaClasses['java.lang.ThreadGroup']['instanceObject'][],
      arg1: boolean,
    ): number
    enumerate(
      arg0: AllJavaClasses['java.lang.Thread']['instanceObject'][],
      arg1: boolean,
    ): number
    enumerate(
      arg0: AllJavaClasses['java.lang.ThreadGroup']['instanceObject'][],
    ): number
    enumerate(
      arg0: AllJavaClasses['java.lang.Thread']['instanceObject'][],
    ): number
    isDaemon(): boolean
    getMaxPriority(): number
    uncaughtException(
      arg0: AllJavaClasses['java.lang.Thread']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): void
    isDestroyed(): boolean
    setMaxPriority(arg0: number): void
    parentOf(
      arg0: AllJavaClasses['java.lang.ThreadGroup']['instanceObject'],
    ): boolean
    activeGroupCount(): number
    destroy(): void
    allowThreadSuspension(arg0: boolean): boolean
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Thread$UncaughtExceptionHandler']['instanceObject'],
      '__javaClass'
    >
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
      arg0: AllJavaClasses['java.io.PrintStream']['instanceObject'],
    ): void
    printStackTrace(): void
    printStackTrace(
      arg0: AllJavaClasses['java.io.PrintWriter']['instanceObject'],
    ): void
    fillInStackTrace(): AllJavaClasses['java.lang.Throwable']['instanceObject']
    getCause(): AllJavaClasses['java.lang.Throwable']['instanceObject']
    initCause(
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
    ): AllJavaClasses['java.lang.Throwable']['instanceObject']
    toString(): string
    getMessage(): string
    getSuppressed(): AllJavaClasses['java.lang.Throwable']['instanceObject'][]
    getLocalizedMessage(): string
    getStackTrace(): AllJavaClasses['java.lang.StackTraceElement']['instanceObject'][]
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
type AllJavaClass_java_io_PrintStream = {
  staticObject: {
    new (
      arg0: string,
      arg1: string,
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    new (arg0: string): AllJavaClasses['java.io.PrintStream']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: boolean,
      arg2: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: boolean,
      arg2: string,
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
      arg1: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
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
    println(arg0: number): void
    println(arg0: number): void
    println(arg0: number): void
    println(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
    println(arg0: AllJavaClasses['char']['instanceObject'][]): void
    println(arg0: string): void
    println(): void
    println(arg0: boolean): void
    println(arg0: AllJavaClasses['char']['instanceObject']): void
    println(arg0: number): void
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    format(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    format(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    write(arg0: number): void
    write(arg0: number[], arg1: number, arg2: number): void
    print(arg0: boolean): void
    print(arg0: number): void
    print(arg0: number): void
    print(arg0: number): void
    print(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
    print(arg0: string): void
    print(arg0: AllJavaClasses['char']['instanceObject'][]): void
    print(arg0: AllJavaClasses['char']['instanceObject']): void
    print(arg0: number): void
    flush(): void
    close(): void
    checkError(): boolean
    printf(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
    printf(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.io.PrintStream']['instanceObject']
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
type AllJavaClass_java_nio_charset_Charset = {
  staticObject: {
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
      arg0: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    contains(
      arg0: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): boolean
    decode(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.CharBuffer']['instanceObject']
    encode(
      arg0: AllJavaClasses['java.nio.CharBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    encode(
      arg0: string,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    canEncode(): boolean
    isRegistered(): boolean
    aliases(): AllJavaClasses['java.util.Set']['instanceObject']
    displayName(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    displayName(): string
    newDecoder(): AllJavaClasses['java.nio.charset.CharsetDecoder']['instanceObject']
    newEncoder(): AllJavaClasses['java.nio.charset.CharsetEncoder']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_util_SortedMap = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.SortedMap'
    values(): AllJavaClasses['java.util.Collection']['instanceObject']
    entrySet(): AllJavaClasses['java.util.Set']['instanceObject']
    keySet(): AllJavaClasses['java.util.Set']['instanceObject']
    comparator(): AllJavaClasses['java.util.Comparator']['instanceObject']
    firstKey(): AllJavaClasses['java.lang.Object']['instanceObject']
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
  } & Omit<AllJavaClasses['java.util.Map']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_charset_CharsetDecoder = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.charset.CharsetDecoder'
    charset(): AllJavaClasses['java.nio.charset.Charset']['instanceObject']
    replacement(): string
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
    reset(): AllJavaClasses['java.nio.charset.CharsetDecoder']['instanceObject']
    onMalformedInput(
      arg0: AllJavaClasses['java.nio.charset.CodingErrorAction']['instanceObject'],
    ): AllJavaClasses['java.nio.charset.CharsetDecoder']['instanceObject']
    onUnmappableCharacter(
      arg0: AllJavaClasses['java.nio.charset.CodingErrorAction']['instanceObject'],
    ): AllJavaClasses['java.nio.charset.CharsetDecoder']['instanceObject']
    maxCharsPerByte(): number
    averageCharsPerByte(): number
    malformedInputAction(): AllJavaClasses['java.nio.charset.CodingErrorAction']['instanceObject']
    unmappableCharacterAction(): AllJavaClasses['java.nio.charset.CodingErrorAction']['instanceObject']
    replaceWith(
      arg0: string,
    ): AllJavaClasses['java.nio.charset.CharsetDecoder']['instanceObject']
    isAutoDetecting(): boolean
    isCharsetDetected(): boolean
    detectedCharset(): AllJavaClasses['java.nio.charset.Charset']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_nio_charset_CoderResult = {
  staticObject: {
    UNDERFLOW: AllJavaClasses['java.nio.charset.CoderResult']['instanceObject']
    OVERFLOW: AllJavaClasses['java.nio.charset.CoderResult']['instanceObject']
    malformedForLength(
      arg0: number,
    ): AllJavaClasses['java.nio.charset.CoderResult']['instanceObject']
    unmappableForLength(
      arg0: number,
    ): AllJavaClasses['java.nio.charset.CoderResult']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.nio.charset.CoderResult'
    length(): number
    toString(): string
    throwException(): void
    isUnderflow(): boolean
    isOverflow(): boolean
    isMalformed(): boolean
    isUnmappable(): boolean
    isError(): boolean
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
type AllJavaClass_java_nio_charset_CharsetEncoder = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.charset.CharsetEncoder'
    charset(): AllJavaClasses['java.nio.charset.Charset']['instanceObject']
    replacement(): number[]
    encode(
      arg0: AllJavaClasses['java.nio.CharBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    encode(
      arg0: AllJavaClasses['java.nio.CharBuffer']['instanceObject'],
      arg1: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
      arg2: boolean,
    ): AllJavaClasses['java.nio.charset.CoderResult']['instanceObject']
    canEncode(arg0: AllJavaClasses['char']['instanceObject']): boolean
    canEncode(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): boolean
    flush(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['java.nio.charset.CoderResult']['instanceObject']
    reset(): AllJavaClasses['java.nio.charset.CharsetEncoder']['instanceObject']
    onMalformedInput(
      arg0: AllJavaClasses['java.nio.charset.CodingErrorAction']['instanceObject'],
    ): AllJavaClasses['java.nio.charset.CharsetEncoder']['instanceObject']
    onUnmappableCharacter(
      arg0: AllJavaClasses['java.nio.charset.CodingErrorAction']['instanceObject'],
    ): AllJavaClasses['java.nio.charset.CharsetEncoder']['instanceObject']
    maxBytesPerChar(): number
    malformedInputAction(): AllJavaClasses['java.nio.charset.CodingErrorAction']['instanceObject']
    unmappableCharacterAction(): AllJavaClasses['java.nio.charset.CodingErrorAction']['instanceObject']
    replaceWith(
      arg0: number[],
    ): AllJavaClasses['java.nio.charset.CharsetEncoder']['instanceObject']
    averageBytesPerChar(): number
    isLegalReplacement(arg0: number[]): boolean
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_io_File = {
  staticObject: {
    separatorChar: AllJavaClasses['char']['instanceObject']
    separator: string
    pathSeparatorChar: AllJavaClasses['char']['instanceObject']
    pathSeparator: string
    new (
      arg0: string,
      arg1: string,
    ): AllJavaClasses['java.io.File']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['java.io.File']['instanceObject']
    new (
      arg0: AllJavaClasses['java.net.URI']['instanceObject'],
    ): AllJavaClasses['java.io.File']['instanceObject']
    new (arg0: string): AllJavaClasses['java.io.File']['instanceObject']
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
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    length(): number
    toString(): string
    hashCode(): number
    compareTo(arg0: AllJavaClasses['java.io.File']['instanceObject']): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    getName(): string
    list(
      arg0: AllJavaClasses['java.io.FilenameFilter']['instanceObject'],
    ): string[]
    list(): string[]
    getParent(): string
    isAbsolute(): boolean
    delete(): boolean
    setReadOnly(): boolean
    canRead(): boolean
    getPath(): string
    toURI(): AllJavaClasses['java.net.URI']['instanceObject']
    toURL(): AllJavaClasses['java.net.URL']['instanceObject']
    getParentFile(): AllJavaClasses['java.io.File']['instanceObject']
    getAbsolutePath(): string
    getAbsoluteFile(): AllJavaClasses['java.io.File']['instanceObject']
    getCanonicalPath(): string
    getCanonicalFile(): AllJavaClasses['java.io.File']['instanceObject']
    isDirectory(): boolean
    canWrite(): boolean
    exists(): boolean
    isFile(): boolean
    isHidden(): boolean
    lastModified(): number
    createNewFile(): boolean
    deleteOnExit(): void
    listFiles(
      arg0: AllJavaClasses['java.io.FileFilter']['instanceObject'],
    ): AllJavaClasses['java.io.File']['instanceObject'][]
    listFiles(
      arg0: AllJavaClasses['java.io.FilenameFilter']['instanceObject'],
    ): AllJavaClasses['java.io.File']['instanceObject'][]
    listFiles(): AllJavaClasses['java.io.File']['instanceObject'][]
    mkdir(): boolean
    mkdirs(): boolean
    renameTo(arg0: AllJavaClasses['java.io.File']['instanceObject']): boolean
    setLastModified(arg0: number): boolean
    setWritable(arg0: boolean): boolean
    setWritable(arg0: boolean, arg1: boolean): boolean
    setReadable(arg0: boolean, arg1: boolean): boolean
    setReadable(arg0: boolean): boolean
    setExecutable(arg0: boolean): boolean
    setExecutable(arg0: boolean, arg1: boolean): boolean
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
type AllJavaClass_java_io_FilterOutputStream = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
    ): AllJavaClasses['java.io.FilterOutputStream']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.io.FilterOutputStream'
    write(arg0: number[], arg1: number, arg2: number): void
    write(arg0: number[]): void
    write(arg0: number): void
    flush(): void
    close(): void
  } & Omit<
    AllJavaClasses['java.io.OutputStream']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_io_PrintWriter = {
  staticObject: {
    new (arg0: string): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    new (
      arg0: string,
      arg1: string,
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    new (
      arg0: string,
      arg1: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
      arg1: string,
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.File']['instanceObject'],
      arg1: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
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
      arg1: boolean,
      arg2: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: boolean,
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    new (
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'java.io.PrintWriter'
    println(arg0: AllJavaClasses['char']['instanceObject'][]): void
    println(arg0: number): void
    println(arg0: number): void
    println(arg0: string): void
    println(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): void
    println(arg0: number): void
    println(arg0: AllJavaClasses['char']['instanceObject']): void
    println(arg0: boolean): void
    println(): void
    println(arg0: number): void
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.io.Writer']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.io.Writer']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.io.Writer']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    format(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    format(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    write(arg0: number): void
    write(arg0: string, arg1: number, arg2: number): void
    write(arg0: AllJavaClasses['char']['instanceObject'][]): void
    write(
      arg0: AllJavaClasses['char']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): void
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
    flush(): void
    close(): void
    checkError(): boolean
    printf(
      arg0: AllJavaClasses['java.util.Locale']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
    printf(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.io.PrintWriter']['instanceObject']
  } & Omit<AllJavaClasses['java.io.Writer']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_io_Writer = {
  staticObject: {
    nullWriter(): AllJavaClasses['java.io.Writer']['instanceObject']
  }
  instanceObject: ((({
    __javaClass: 'java.io.Writer'
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.io.Writer']['instanceObject']
    append(
      arg0: AllJavaClasses['char']['instanceObject'],
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
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.io.Writer']['instanceObject']
    write(arg0: number): void
    write(arg0: AllJavaClasses['char']['instanceObject'][]): void
    write(
      arg0: AllJavaClasses['char']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): void
    write(arg0: string): void
    write(arg0: string, arg1: number, arg2: number): void
    flush(): void
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
    getFileName(): string
    getLineNumber(): number
    getModuleName(): string
    getModuleVersion(): string
    getClassLoaderName(): string
    getClassName(): string
    getMethodName(): string
    isNativeMethod(): boolean
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
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
    supportedFileAttributeViews(): AllJavaClasses['java.util.Set']['instanceObject']
    getRootDirectories(): AllJavaClasses['java.lang.Iterable']['instanceObject']
    getFileStores(): AllJavaClasses['java.lang.Iterable']['instanceObject']
    getUserPrincipalLookupService(): AllJavaClasses['java.nio.file.attribute.UserPrincipalLookupService']['instanceObject']
    getPathMatcher(
      arg0: string,
    ): AllJavaClasses['java.nio.file.PathMatcher']['instanceObject']
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
    checkAccess(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.AccessMode']['instanceObject'][],
    ): void
    delete(arg0: AllJavaClasses['java.nio.file.Path']['instanceObject']): void
    copy(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg2: AllJavaClasses['java.nio.file.CopyOption']['instanceObject'][],
    ): void
    getPath(
      arg0: AllJavaClasses['java.net.URI']['instanceObject'],
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    getScheme(): string
    isHidden(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): boolean
    createDirectory(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.attribute.FileAttribute']['instanceObject'][],
    ): void
    getFileSystem(
      arg0: AllJavaClasses['java.net.URI']['instanceObject'],
    ): AllJavaClasses['java.nio.file.FileSystem']['instanceObject']
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
    newFileSystem(
      arg0: AllJavaClasses['java.net.URI']['instanceObject'],
      arg1: AllJavaClasses['java.util.Map']['instanceObject'],
    ): AllJavaClasses['java.nio.file.FileSystem']['instanceObject']
    newFileSystem(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.util.Map']['instanceObject'],
    ): AllJavaClasses['java.nio.file.FileSystem']['instanceObject']
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
    getFileAttributeView(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg2: AllJavaClasses['java.nio.file.LinkOption']['instanceObject'][],
    ): AllJavaClasses['java.nio.file.attribute.FileAttributeView']['instanceObject']
    newByteChannel(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.util.Set']['instanceObject'],
      arg2: AllJavaClasses['java.nio.file.attribute.FileAttribute']['instanceObject'][],
    ): AllJavaClasses['java.nio.channels.SeekableByteChannel']['instanceObject']
    move(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg2: AllJavaClasses['java.nio.file.CopyOption']['instanceObject'][],
    ): void
    isSameFile(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): boolean
    getFileStore(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): AllJavaClasses['java.nio.file.FileStore']['instanceObject']
    createSymbolicLink(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg2: AllJavaClasses['java.nio.file.attribute.FileAttribute']['instanceObject'][],
    ): void
    createLink(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): void
    readSymbolicLink(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): AllJavaClasses['java.nio.file.Path']['instanceObject']
    setAttribute(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.nio.file.LinkOption']['instanceObject'][],
    ): void
    deleteIfExists(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): boolean
    newInputStream(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.OpenOption']['instanceObject'][],
    ): AllJavaClasses['java.io.InputStream']['instanceObject']
    newOutputStream(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.OpenOption']['instanceObject'][],
    ): AllJavaClasses['java.io.OutputStream']['instanceObject']
    newDirectoryStream(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.DirectoryStream$Filter']['instanceObject'],
    ): AllJavaClasses['java.nio.file.DirectoryStream']['instanceObject']
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
type AllJavaClass_java_nio_file_attribute_BasicFileAttributes = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.file.attribute.BasicFileAttributes'
    size(): number
    isDirectory(): boolean
    isRegularFile(): boolean
    lastModifiedTime(): AllJavaClasses['java.nio.file.attribute.FileTime']['instanceObject']
    fileKey(): AllJavaClasses['java.lang.Object']['instanceObject']
    lastAccessTime(): AllJavaClasses['java.nio.file.attribute.FileTime']['instanceObject']
    creationTime(): AllJavaClasses['java.nio.file.attribute.FileTime']['instanceObject']
    isSymbolicLink(): boolean
    isOther(): boolean
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
    now(): AllJavaClasses['java.time.Instant']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.Clock']['instanceObject'],
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    ofEpochMilli(
      arg0: number,
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    ofEpochSecond(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    ofEpochSecond(
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
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    getNano(): number
    getEpochSecond(): number
    until(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    plusMillis(
      arg0: number,
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    plusNanos(
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
    toEpochMilli(): number
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
  instanceObject: {
    __javaClass: 'java.time.Clock'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    hashCode(): number
    millis(): number
    instant(): AllJavaClasses['java.time.Instant']['instanceObject']
    getZone(): AllJavaClasses['java.time.ZoneId']['instanceObject']
    withZone(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.Clock']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_time_ZoneId = {
  staticObject: {
    SHORT_IDS: AllJavaClasses['java.util.Map']['instanceObject']
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.ZoneId']['instanceObject']
    of(arg0: string): AllJavaClasses['java.time.ZoneId']['instanceObject']
    of(
      arg0: string,
      arg1: AllJavaClasses['java.util.Map']['instanceObject'],
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
    getRules(): AllJavaClasses['java.time.zone.ZoneRules']['instanceObject']
    getDisplayName(
      arg0: AllJavaClasses['java.time.format.TextStyle']['instanceObject'],
      arg1: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    normalized(): AllJavaClasses['java.time.ZoneId']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.io.Serializable']['instanceObject'],
      '__javaClass'
    >
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
    isFixedOffset(): boolean
    getValidOffsets(
      arg0: AllJavaClasses['java.time.LocalDateTime']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    getTransition(
      arg0: AllJavaClasses['java.time.LocalDateTime']['instanceObject'],
    ): AllJavaClasses['java.time.zone.ZoneOffsetTransition']['instanceObject']
    isValidOffset(
      arg0: AllJavaClasses['java.time.LocalDateTime']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): boolean
    getStandardOffset(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
    ): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    getDaylightSavings(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
    ): AllJavaClasses['java.time.Duration']['instanceObject']
    isDaylightSavings(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
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
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    of(arg0: string): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    ofHours(
      arg0: number,
    ): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    ofHoursMinutes(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    ofHoursMinutesSeconds(
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    ofTotalSeconds(
      arg0: number,
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
    getId(): string
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    getRules(): AllJavaClasses['java.time.zone.ZoneRules']['instanceObject']
    adjustInto(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
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
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
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
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
      arg4: number,
      arg5: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    of(
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
      arg4: number,
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
      arg0: AllJavaClasses['java.time.LocalDate']['instanceObject'],
      arg1: AllJavaClasses['java.time.LocalTime']['instanceObject'],
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
    now(): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.Clock']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    ofInstant(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    ofEpochSecond(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
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
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
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
    getNano(): number
    getYear(): number
    getMonthValue(): number
    getDayOfMonth(): number
    getHour(): number
    getMinute(): number
    getSecond(): number
    until(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
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
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    isEqual(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject'],
    ): boolean
    plusDays(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    plusHours(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    plusMinutes(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    plusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    plusNanos(
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
    toLocalDate(): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    toLocalDate(): AllJavaClasses['java.time.LocalDate']['instanceObject']
    getMonth(): AllJavaClasses['java.time.Month']['instanceObject']
    getDayOfYear(): number
    getDayOfWeek(): AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    toLocalTime(): AllJavaClasses['java.time.LocalTime']['instanceObject']
    withYear(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    withMonth(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    withDayOfMonth(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    withDayOfYear(
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
    plusYears(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    plusMonths(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    plusWeeks(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    minusYears(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    minusMonths(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    minusWeeks(
      arg0: number,
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
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    toEpochSecond(
      arg0: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): number
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    toInstant(
      arg0: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.Instant']['instanceObject']
    plus(
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
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    isEqual(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject'],
    ): boolean
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
    toLocalDate(): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    toLocalTime(): AllJavaClasses['java.time.LocalTime']['instanceObject']
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
      arg1: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.text.ParsePosition']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject']
    getZone(): AllJavaClasses['java.time.ZoneId']['instanceObject']
    withZone(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject']
    getChronology(): AllJavaClasses['java.time.chrono.Chronology']['instanceObject']
    getLocale(): AllJavaClasses['java.util.Locale']['instanceObject']
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
    formatTo(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Appendable']['instanceObject'],
    ): void
    parseBest(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'][],
    ): AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject']
    parseUnresolved(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.text.ParsePosition']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject']
    toFormat(): AllJavaClasses['java.text.Format']['instanceObject']
    toFormat(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.text.Format']['instanceObject']
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
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.Chronology']['instanceObject']
    of(
      arg0: string,
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
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    date(
      arg0: AllJavaClasses['java.time.chrono.Era']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    date(
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    getCalendarType(): string
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
    localDateTime(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    zonedDateTime(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    zonedDateTime(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    isLeapYear(arg0: number): boolean
    eraOf(
      arg0: number,
    ): AllJavaClasses['java.time.chrono.Era']['instanceObject']
    dateYearDay(
      arg0: AllJavaClasses['java.time.chrono.Era']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    dateYearDay(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    dateEpochDay(
      arg0: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    dateNow(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    dateNow(): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    dateNow(
      arg0: AllJavaClasses['java.time.Clock']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    prolepticYear(
      arg0: AllJavaClasses['java.time.chrono.Era']['instanceObject'],
      arg1: number,
    ): number
    eras(): AllJavaClasses['java.util.List']['instanceObject']
    resolveDate(
      arg0: AllJavaClasses['java.util.Map']['instanceObject'],
      arg1: AllJavaClasses['java.time.format.ResolverStyle']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    period(
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
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
    isDateBased(): boolean
    isTimeBased(): boolean
    isSupportedBy(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): boolean
    checkValidIntValue(arg0: number): number
    adjustInto(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    rangeRefinedBy(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    getBaseUnit(): AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject']
    getRangeUnit(): AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject']
    getFrom(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): number
    checkValidValue(arg0: number): number
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>) &
    Omit<
      AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
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
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    until(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    until(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    isEqual(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
    ): boolean
    adjustInto(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    isAfter(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
    ): boolean
    isBefore(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
    ): boolean
    toEpochDay(): number
    getChronology(): AllJavaClasses['java.time.chrono.Chronology']['instanceObject']
    isLeapYear(): boolean
    getEra(): AllJavaClasses['java.time.chrono.Era']['instanceObject']
    lengthOfMonth(): number
    lengthOfYear(): number
    atTime(
      arg0: AllJavaClasses['java.time.LocalTime']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
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
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    isNegative(): boolean
    isZero(): boolean
    addTo(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    getUnits(): AllJavaClasses['java.util.List']['instanceObject']
    multipliedBy(
      arg0: number,
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    negated(): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    subtractFrom(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    getChronology(): AllJavaClasses['java.time.chrono.Chronology']['instanceObject']
  } & Omit<
    AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
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
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
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
type AllJavaClass_java_time_LocalTime = {
  staticObject: {
    MIN: AllJavaClasses['java.time.LocalTime']['instanceObject']
    MAX: AllJavaClasses['java.time.LocalTime']['instanceObject']
    MIDNIGHT: AllJavaClasses['java.time.LocalTime']['instanceObject']
    NOON: AllJavaClasses['java.time.LocalTime']['instanceObject']
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    of(
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    of(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    of(
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
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
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
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
      arg0: AllJavaClasses['java.time.LocalTime']['instanceObject'],
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
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    toEpochSecond(
      arg0: AllJavaClasses['java.time.LocalDate']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): number
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
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
    getNano(): number
    getHour(): number
    getMinute(): number
    getSecond(): number
    until(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    plusHours(
      arg0: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    plusMinutes(
      arg0: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    plusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.LocalTime']['instanceObject']
    plusNanos(
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
    toSecondOfDay(): number
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
type AllJavaClass_java_time_LocalDate = {
  staticObject: {
    MIN: AllJavaClasses['java.time.LocalDate']['instanceObject']
    MAX: AllJavaClasses['java.time.LocalDate']['instanceObject']
    EPOCH: AllJavaClasses['java.time.LocalDate']['instanceObject']
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
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
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
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
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    toEpochSecond(
      arg0: AllJavaClasses['java.time.LocalTime']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): number
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    getYear(): number
    getMonthValue(): number
    getDayOfMonth(): number
    until(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
    until(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
    ): AllJavaClasses['java.time.Period']['instanceObject']
    until(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    isEqual(
      arg0: AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject'],
    ): boolean
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
    getMonth(): AllJavaClasses['java.time.Month']['instanceObject']
    getDayOfYear(): number
    getDayOfWeek(): AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    withYear(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    withMonth(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    withDayOfMonth(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    withDayOfYear(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    plusYears(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    plusMonths(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    plusWeeks(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    minusYears(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    minusMonths(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    minusWeeks(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    toEpochDay(): number
    getChronology(): AllJavaClasses['java.time.chrono.IsoChronology']['instanceObject']
    getChronology(): AllJavaClasses['java.time.chrono.Chronology']['instanceObject']
    isLeapYear(): boolean
    getEra(): AllJavaClasses['java.time.chrono.Era']['instanceObject']
    getEra(): AllJavaClasses['java.time.chrono.IsoEra']['instanceObject']
    lengthOfMonth(): number
    lengthOfYear(): number
    datesUntil(
      arg0: AllJavaClasses['java.time.LocalDate']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    datesUntil(
      arg0: AllJavaClasses['java.time.LocalDate']['instanceObject'],
      arg1: AllJavaClasses['java.time.Period']['instanceObject'],
    ): AllJavaClasses['java.util.stream.Stream']['instanceObject']
    atTime(
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    atTime(
      arg0: AllJavaClasses['java.time.LocalTime']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    atTime(
      arg0: AllJavaClasses['java.time.LocalTime']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    atTime(
      arg0: number,
      arg1: number,
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
    atStartOfDay(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    atStartOfDay(): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
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
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.Month']['instanceObject']
    of(arg0: number): AllJavaClasses['java.time.Month']['instanceObject']
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
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    maxLength(): number
    getDisplayName(
      arg0: AllJavaClasses['java.time.format.TextStyle']['instanceObject'],
      arg1: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    plus(arg0: number): AllJavaClasses['java.time.Month']['instanceObject']
    minus(arg0: number): AllJavaClasses['java.time.Month']['instanceObject']
    adjustInto(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    firstDayOfYear(arg0: boolean): number
    minLength(): number
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
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.Period']['instanceObject']
    of(
      arg0: number,
      arg1: number,
      arg2: number,
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
    normalized(): AllJavaClasses['java.time.Period']['instanceObject']
    normalized(): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.Period']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.Period']['instanceObject']
    isNegative(): boolean
    isZero(): boolean
    addTo(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    getUnits(): AllJavaClasses['java.util.List']['instanceObject']
    plusDays(arg0: number): AllJavaClasses['java.time.Period']['instanceObject']
    minusDays(
      arg0: number,
    ): AllJavaClasses['java.time.Period']['instanceObject']
    multipliedBy(
      arg0: number,
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    multipliedBy(
      arg0: number,
    ): AllJavaClasses['java.time.Period']['instanceObject']
    negated(): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
    negated(): AllJavaClasses['java.time.Period']['instanceObject']
    subtractFrom(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plusYears(
      arg0: number,
    ): AllJavaClasses['java.time.Period']['instanceObject']
    plusMonths(
      arg0: number,
    ): AllJavaClasses['java.time.Period']['instanceObject']
    minusYears(
      arg0: number,
    ): AllJavaClasses['java.time.Period']['instanceObject']
    minusMonths(
      arg0: number,
    ): AllJavaClasses['java.time.Period']['instanceObject']
    getChronology(): AllJavaClasses['java.time.chrono.Chronology']['instanceObject']
    getChronology(): AllJavaClasses['java.time.chrono.IsoChronology']['instanceObject']
    toTotalMonths(): number
    getDays(): number
    getYears(): number
    getMonths(): number
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
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
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
      arg0: AllJavaClasses['java.time.chrono.Era']['instanceObject'],
      arg1: number,
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    date(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    date(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    getCalendarType(): string
    epochSecond(
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
      arg4: number,
      arg5: number,
      arg6: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): number
    localDateTime(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    localDateTime(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    zonedDateTime(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    zonedDateTime(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    zonedDateTime(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    zonedDateTime(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    isLeapYear(arg0: number): boolean
    eraOf(
      arg0: number,
    ): AllJavaClasses['java.time.chrono.Era']['instanceObject']
    eraOf(
      arg0: number,
    ): AllJavaClasses['java.time.chrono.IsoEra']['instanceObject']
    dateYearDay(
      arg0: AllJavaClasses['java.time.chrono.Era']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
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
    dateEpochDay(
      arg0: number,
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    dateEpochDay(
      arg0: number,
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    dateNow(): AllJavaClasses['java.time.LocalDate']['instanceObject']
    dateNow(
      arg0: AllJavaClasses['java.time.Clock']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    dateNow(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    dateNow(): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    dateNow(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    dateNow(
      arg0: AllJavaClasses['java.time.Clock']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    prolepticYear(
      arg0: AllJavaClasses['java.time.chrono.Era']['instanceObject'],
      arg1: number,
    ): number
    eras(): AllJavaClasses['java.util.List']['instanceObject']
    resolveDate(
      arg0: AllJavaClasses['java.util.Map']['instanceObject'],
      arg1: AllJavaClasses['java.time.format.ResolverStyle']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    resolveDate(
      arg0: AllJavaClasses['java.util.Map']['instanceObject'],
      arg1: AllJavaClasses['java.time.format.ResolverStyle']['instanceObject'],
    ): AllJavaClasses['java.time.LocalDate']['instanceObject']
    period(
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.Period']['instanceObject']
    period(
      arg0: number,
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.time.chrono.ChronoPeriod']['instanceObject']
  } & Omit<
    AllJavaClasses['java.time.chrono.AbstractChronology']['instanceObject'],
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
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getOffset(): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    toEpochSecond(): number
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
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
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    toInstant(): AllJavaClasses['java.time.Instant']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    isEqual(
      arg0: AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject'],
    ): boolean
    isAfter(
      arg0: AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject'],
    ): boolean
    isBefore(
      arg0: AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject'],
    ): boolean
    getZone(): AllJavaClasses['java.time.ZoneId']['instanceObject']
    toLocalDateTime(): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    toLocalDate(): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    toLocalTime(): AllJavaClasses['java.time.LocalTime']['instanceObject']
    withEarlierOffsetAtOverlap(): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    withLaterOffsetAtOverlap(): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    withZoneSameLocal(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    withZoneSameInstant(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    getChronology(): AllJavaClasses['java.time.chrono.Chronology']['instanceObject']
  } & Omit<
    AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.Comparable']['instanceObject'],
      '__javaClass'
    >
}
type AllJavaClass_java_time_ZonedDateTime = {
  staticObject: {
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
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
    now(): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.Clock']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    ofInstant(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    ofInstant(
      arg0: AllJavaClasses['java.time.LocalDateTime']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
      arg2: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
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
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getOffset(): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    getNano(): number
    getYear(): number
    getMonthValue(): number
    getDayOfMonth(): number
    getHour(): number
    getMinute(): number
    getSecond(): number
    until(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    plusDays(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    plusHours(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    plusMinutes(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    plusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    plusNanos(
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
    getZone(): AllJavaClasses['java.time.ZoneId']['instanceObject']
    toLocalDateTime(): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    toLocalDateTime(): AllJavaClasses['java.time.chrono.ChronoLocalDateTime']['instanceObject']
    toLocalDate(): AllJavaClasses['java.time.chrono.ChronoLocalDate']['instanceObject']
    toLocalDate(): AllJavaClasses['java.time.LocalDate']['instanceObject']
    getMonth(): AllJavaClasses['java.time.Month']['instanceObject']
    getDayOfYear(): number
    getDayOfWeek(): AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    toLocalTime(): AllJavaClasses['java.time.LocalTime']['instanceObject']
    withYear(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    withMonth(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    withDayOfMonth(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    withDayOfYear(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
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
    plusYears(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    plusMonths(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    plusWeeks(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    minusYears(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    minusMonths(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    minusWeeks(
      arg0: number,
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    withEarlierOffsetAtOverlap(): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    withEarlierOffsetAtOverlap(): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    withLaterOffsetAtOverlap(): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    withLaterOffsetAtOverlap(): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    withZoneSameLocal(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    withZoneSameLocal(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    withZoneSameInstant(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    withZoneSameInstant(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.chrono.ChronoZonedDateTime']['instanceObject']
    withFixedOffsetZone(): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    toOffsetDateTime(): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
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
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    of(arg0: number): AllJavaClasses['java.time.DayOfWeek']['instanceObject']
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
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    getDisplayName(
      arg0: AllJavaClasses['java.time.format.TextStyle']['instanceObject'],
      arg1: AllJavaClasses['java.util.Locale']['instanceObject'],
    ): string
    plus(arg0: number): AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    minus(arg0: number): AllJavaClasses['java.time.DayOfWeek']['instanceObject']
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
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    of(
      arg0: AllJavaClasses['java.time.LocalDateTime']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
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
    of(
      arg0: AllJavaClasses['java.time.LocalDate']['instanceObject'],
      arg1: AllJavaClasses['java.time.LocalTime']['instanceObject'],
      arg2: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    now(): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.Clock']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    ofInstant(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
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
      arg0: AllJavaClasses['java.time.OffsetDateTime']['instanceObject'],
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
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getOffset(): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    toEpochSecond(): number
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    getNano(): number
    toInstant(): AllJavaClasses['java.time.Instant']['instanceObject']
    getYear(): number
    getMonthValue(): number
    getDayOfMonth(): number
    getHour(): number
    getMinute(): number
    getSecond(): number
    until(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    plus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    plus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
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
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    isEqual(
      arg0: AllJavaClasses['java.time.OffsetDateTime']['instanceObject'],
    ): boolean
    plusDays(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    plusHours(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    plusMinutes(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    plusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    plusNanos(
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
    withOffsetSameLocal(
      arg0: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    withOffsetSameInstant(
      arg0: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    toLocalDateTime(): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    toLocalDate(): AllJavaClasses['java.time.LocalDate']['instanceObject']
    getMonth(): AllJavaClasses['java.time.Month']['instanceObject']
    getDayOfYear(): number
    getDayOfWeek(): AllJavaClasses['java.time.DayOfWeek']['instanceObject']
    toLocalTime(): AllJavaClasses['java.time.LocalTime']['instanceObject']
    withYear(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    withMonth(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    withDayOfMonth(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    withDayOfYear(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
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
    plusYears(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    plusMonths(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    plusWeeks(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    minusYears(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    minusMonths(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    minusWeeks(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetDateTime']['instanceObject']
    atZoneSameInstant(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    atZoneSimilarLocal(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
    toOffsetTime(): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    toZonedDateTime(): AllJavaClasses['java.time.ZonedDateTime']['instanceObject']
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
    from(
      arg0: AllJavaClasses['java.time.temporal.TemporalAccessor']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    of(
      arg0: number,
      arg1: number,
      arg2: number,
      arg3: number,
      arg4: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    of(
      arg0: AllJavaClasses['java.time.LocalTime']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    now(): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.Clock']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    now(
      arg0: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    ofInstant(
      arg0: AllJavaClasses['java.time.Instant']['instanceObject'],
      arg1: AllJavaClasses['java.time.ZoneId']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    parse(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.time.format.DateTimeFormatter']['instanceObject'],
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
    query(
      arg0: AllJavaClasses['java.time.temporal.TemporalQuery']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getOffset(): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): boolean
    isSupported(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): boolean
    range(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.ValueRange']['instanceObject']
    toEpochSecond(
      arg0: AllJavaClasses['java.time.LocalDate']['instanceObject'],
    ): number
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalAdjuster']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    with(
      arg0: AllJavaClasses['java.time.temporal.TemporalField']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    getNano(): number
    getHour(): number
    getMinute(): number
    getSecond(): number
    until(
      arg0: AllJavaClasses['java.time.temporal.Temporal']['instanceObject'],
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): number
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
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.temporal.Temporal']['instanceObject']
    minus(
      arg0: number,
      arg1: AllJavaClasses['java.time.temporal.TemporalUnit']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    minus(
      arg0: AllJavaClasses['java.time.temporal.TemporalAmount']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    isEqual(
      arg0: AllJavaClasses['java.time.OffsetTime']['instanceObject'],
    ): boolean
    plusHours(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    plusMinutes(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    plusSeconds(
      arg0: number,
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    plusNanos(
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
    withOffsetSameLocal(
      arg0: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    withOffsetSameInstant(
      arg0: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): AllJavaClasses['java.time.OffsetTime']['instanceObject']
    toLocalTime(): AllJavaClasses['java.time.LocalTime']['instanceObject']
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
type AllJavaClass_java_time_chrono_AbstractChronology = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.time.chrono.AbstractChronology'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    compareTo(
      arg0: AllJavaClasses['java.time.chrono.Chronology']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
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
    withZeroDigit(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.time.format.DecimalStyle']['instanceObject']
    getPositiveSign(): AllJavaClasses['char']['instanceObject']
    withPositiveSign(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.time.format.DecimalStyle']['instanceObject']
    getNegativeSign(): AllJavaClasses['char']['instanceObject']
    withNegativeSign(
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.time.format.DecimalStyle']['instanceObject']
    getDecimalSeparator(): AllJavaClasses['char']['instanceObject']
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
    format(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): string
    format(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.StringBuffer']['instanceObject'],
      arg2: AllJavaClasses['java.text.FieldPosition']['instanceObject'],
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    formatToCharacterIterator(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.text.AttributedCharacterIterator']['instanceObject']
    parseObject(
      arg0: string,
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    parseObject(
      arg0: string,
      arg1: AllJavaClasses['java.text.ParsePosition']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
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
  instanceObject: ((({
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
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
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
    indexOf(arg0: string): number
    indexOf(arg0: string, arg1: number): number
    codePoints(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    charAt(arg0: number): AllJavaClasses['char']['instanceObject']
    codePointAt(arg0: number): number
    codePointBefore(arg0: number): number
    codePointCount(arg0: number, arg1: number): number
    offsetByCodePoints(arg0: number, arg1: number): number
    lastIndexOf(arg0: string): number
    lastIndexOf(arg0: string, arg1: number): number
    substring(arg0: number, arg1: number): string
    substring(arg0: number): string
    subSequence(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.CharSequence']['instanceObject']
    replace(
      arg0: number,
      arg1: number,
      arg2: string,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    replace(
      arg0: number,
      arg1: number,
      arg2: string,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    chars(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    delete(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    delete(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
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
      arg1: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'][],
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
      arg1: number,
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
      arg1: AllJavaClasses['char']['instanceObject'][],
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    insert(
      arg0: number,
      arg1: string,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    insert(
      arg0: number,
      arg1: boolean,
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'],
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
      arg1: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
    insert(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: boolean,
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
      arg1: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    capacity(): number
    ensureCapacity(arg0: number): void
    trimToSize(): void
    setLength(arg0: number): void
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
    reverse(): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    reverse(): AllJavaClasses['java.lang.StringBuffer']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject'],
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
      arg0: AllJavaClasses['char']['instanceObject'][],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
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
      arg0: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    append(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
    ): AllJavaClasses['java.lang.Appendable']['instanceObject']
    getChars(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['char']['instanceObject'][],
      arg3: number,
    ): void
    indexOf(arg0: string, arg1: number): number
    indexOf(arg0: string): number
    codePoints(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    charAt(arg0: number): AllJavaClasses['char']['instanceObject']
    codePointAt(arg0: number): number
    codePointBefore(arg0: number): number
    codePointCount(arg0: number, arg1: number): number
    offsetByCodePoints(arg0: number, arg1: number): number
    lastIndexOf(arg0: string, arg1: number): number
    lastIndexOf(arg0: string): number
    substring(arg0: number, arg1: number): string
    substring(arg0: number): string
    subSequence(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.CharSequence']['instanceObject']
    replace(
      arg0: number,
      arg1: number,
      arg2: string,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    chars(): AllJavaClasses['java.util.stream.IntStream']['instanceObject']
    delete(
      arg0: number,
      arg1: number,
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
      arg1: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg2: number,
      arg3: number,
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
      arg1: string,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'],
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: AllJavaClasses['char']['instanceObject'][],
      arg2: number,
      arg3: number,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    insert(
      arg0: number,
      arg1: boolean,
    ): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
    capacity(): number
    ensureCapacity(arg0: number): void
    trimToSize(): void
    setLength(arg0: number): void
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
    reverse(): AllJavaClasses['java.lang.AbstractStringBuilder']['instanceObject']
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
    getFieldAttribute(): AllJavaClasses['java.text.Format$Field']['instanceObject']
    getBeginIndex(): number
    getEndIndex(): number
    setBeginIndex(arg0: number): void
    setEndIndex(arg0: number): void
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
    last(): AllJavaClasses['char']['instanceObject']
    next(): AllJavaClasses['char']['instanceObject']
    first(): AllJavaClasses['char']['instanceObject']
    current(): AllJavaClasses['char']['instanceObject']
    getIndex(): number
    previous(): AllJavaClasses['char']['instanceObject']
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
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    compareTo(
      arg0: AllJavaClasses['java.time.zone.ZoneOffsetTransition']['instanceObject'],
    ): number
    toEpochSecond(): number
    getDuration(): AllJavaClasses['java.time.Duration']['instanceObject']
    getOffsetAfter(): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    isValidOffset(
      arg0: AllJavaClasses['java.time.ZoneOffset']['instanceObject'],
    ): boolean
    isGap(): boolean
    isOverlap(): boolean
    getOffsetBefore(): AllJavaClasses['java.time.ZoneOffset']['instanceObject']
    getDateTimeBefore(): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
    getDateTimeAfter(): AllJavaClasses['java.time.LocalDateTime']['instanceObject']
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
type AllJavaClass_java_nio_channels_FileChannel = {
  staticObject: {
    open(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.util.Set']['instanceObject'],
      arg2: AllJavaClasses['java.nio.file.attribute.FileAttribute']['instanceObject'][],
    ): AllJavaClasses['java.nio.channels.FileChannel']['instanceObject']
    open(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.nio.file.OpenOption']['instanceObject'][],
    ): AllJavaClasses['java.nio.channels.FileChannel']['instanceObject']
  }
  instanceObject: ((({
    __javaClass: 'java.nio.channels.FileChannel'
    lock(): AllJavaClasses['java.nio.channels.FileLock']['instanceObject']
    lock(
      arg0: number,
      arg1: number,
      arg2: boolean,
    ): AllJavaClasses['java.nio.channels.FileLock']['instanceObject']
    size(): number
    map(
      arg0: AllJavaClasses['java.nio.channels.FileChannel$MapMode']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.channels.FileChannel']['instanceObject']
    position(): number
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.channels.SeekableByteChannel']['instanceObject']
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
    read(arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject']): number
    read(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
      arg1: number,
    ): number
    read(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][],
    ): number
    read(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): number
    transferTo(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['java.nio.channels.WritableByteChannel']['instanceObject'],
    ): number
    truncate(
      arg0: number,
    ): AllJavaClasses['java.nio.channels.FileChannel']['instanceObject']
    truncate(
      arg0: number,
    ): AllJavaClasses['java.nio.channels.SeekableByteChannel']['instanceObject']
    tryLock(): AllJavaClasses['java.nio.channels.FileLock']['instanceObject']
    tryLock(
      arg0: number,
      arg1: number,
      arg2: boolean,
    ): AllJavaClasses['java.nio.channels.FileLock']['instanceObject']
    force(arg0: boolean): void
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
    toString(): string
    size(): number
    position(): number
    close(): void
    release(): void
    channel(): AllJavaClasses['java.nio.channels.FileChannel']['instanceObject']
    acquiredBy(): AllJavaClasses['java.nio.channels.Channel']['instanceObject']
    isShared(): boolean
    overlaps(arg0: number, arg1: number): boolean
    isValid(): boolean
  } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >) &
    Omit<
      AllJavaClasses['java.lang.AutoCloseable']['instanceObject'],
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
type AllJavaClass_java_nio_MappedByteBuffer = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.MappedByteBuffer'
    clear(): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    clear(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    clear(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    limit(
      arg0: number,
    ): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    limit(arg0: number): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    limit(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    position(
      arg0: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    position(arg0: number): AllJavaClasses['java.nio.Buffer']['instanceObject']
    load(): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    mark(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    mark(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    mark(): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    reset(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    flip(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.Buffer']['instanceObject']
    rewind(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    isLoaded(): boolean
    force(): AllJavaClasses['java.nio.MappedByteBuffer']['instanceObject']
  } & Omit<
    AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    '__javaClass'
  >
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
      arg1: AllJavaClasses['java.nio.file.OpenOption']['instanceObject'][],
    ): AllJavaClasses['java.nio.channels.AsynchronousFileChannel']['instanceObject']
    open(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
      arg1: AllJavaClasses['java.util.Set']['instanceObject'],
      arg2: AllJavaClasses['java.util.concurrent.ExecutorService']['instanceObject'],
      arg3: AllJavaClasses['java.nio.file.attribute.FileAttribute']['instanceObject'][],
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
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.nio.channels.CompletionHandler']['instanceObject'],
    ): void
    write(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.util.concurrent.Future']['instanceObject']
    read(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg3: AllJavaClasses['java.nio.channels.CompletionHandler']['instanceObject'],
    ): void
    read(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['java.util.concurrent.Future']['instanceObject']
    truncate(
      arg0: number,
    ): AllJavaClasses['java.nio.channels.AsynchronousFileChannel']['instanceObject']
    tryLock(): AllJavaClasses['java.nio.channels.FileLock']['instanceObject']
    tryLock(
      arg0: number,
      arg1: number,
      arg2: boolean,
    ): AllJavaClasses['java.nio.channels.FileLock']['instanceObject']
    force(arg0: boolean): void
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
    isDone(): boolean
    isCancelled(): boolean
    cancel(arg0: boolean): boolean
  }
}
type AllJavaClass_java_nio_channels_CompletionHandler = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.channels.CompletionHandler'
    failed(
      arg0: AllJavaClasses['java.lang.Throwable']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    completed(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
  }
}
type AllJavaClass_java_util_concurrent_ExecutorService = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.util.concurrent.ExecutorService'
    shutdown(): void
    isShutdown(): boolean
    shutdownNow(): AllJavaClasses['java.util.List']['instanceObject']
    isTerminated(): boolean
    awaitTermination(
      arg0: number,
      arg1: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): boolean
    submit(
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
    ): AllJavaClasses['java.util.concurrent.Future']['instanceObject']
    submit(
      arg0: AllJavaClasses['java.lang.Runnable']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.util.concurrent.Future']['instanceObject']
    submit(
      arg0: AllJavaClasses['java.util.concurrent.Callable']['instanceObject'],
    ): AllJavaClasses['java.util.concurrent.Future']['instanceObject']
    invokeAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    invokeAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
    invokeAny(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    invokeAny(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
      arg1: number,
      arg2: AllJavaClasses['java.util.concurrent.TimeUnit']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
  } & Omit<
    AllJavaClasses['java.util.concurrent.Executor']['instanceObject'],
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
type AllJavaClass_java_nio_file_attribute_FileAttributeView = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.file.attribute.FileAttributeView'
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
    getBlockSize(): number
    getUnallocatedSpace(): number
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
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getName(): string
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
    getPrincipals(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.util.Set']['instanceObject']
    getPrincipals(): AllJavaClasses['java.util.Set']['instanceObject']
    setReadOnly(): void
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
    getPrincipals(): AllJavaClasses['java.security.Principal']['instanceObject'][]
    getPermissions(): AllJavaClasses['java.security.PermissionCollection']['instanceObject']
    staticPermissionsOnly(): boolean
    implies(
      arg0: AllJavaClasses['java.security.Permission']['instanceObject'],
    ): boolean
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
    getAlgorithm(): string
    getFormat(): string
  } & Omit<
    AllJavaClasses['java.io.Serializable']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_security_Provider = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.security.Provider'
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
    clear(): void
    getName(): string
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
    load(arg0: AllJavaClasses['java.io.InputStream']['instanceObject']): void
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
    configure(
      arg0: string,
    ): AllJavaClasses['java.security.Provider']['instanceObject']
    isConfigured(): boolean
    getVersionStr(): string
    getInfo(): string
    getService(
      arg0: string,
      arg1: string,
    ): AllJavaClasses['java.security.Provider$Service']['instanceObject']
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
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    remove(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
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
    contains(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    replaceAll(
      arg0: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
    ): void
    list(arg0: AllJavaClasses['java.io.PrintStream']['instanceObject']): void
    list(arg0: AllJavaClasses['java.io.PrintWriter']['instanceObject']): void
    elements(): AllJavaClasses['java.util.Enumeration']['instanceObject']
    size(): number
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
    load(arg0: AllJavaClasses['java.io.Reader']['instanceObject']): void
    load(arg0: AllJavaClasses['java.io.InputStream']['instanceObject']): void
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
    save(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: string,
    ): void
    store(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: string,
    ): void
    store(
      arg0: AllJavaClasses['java.io.Writer']['instanceObject'],
      arg1: string,
    ): void
    loadFromXML(
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
    ): void
    storeToXML(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: string,
    ): void
    storeToXML(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: string,
      arg2: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): void
    storeToXML(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: string,
      arg2: string,
    ): void
    propertyNames(): AllJavaClasses['java.util.Enumeration']['instanceObject']
    stringPropertyNames(): AllJavaClasses['java.util.Set']['instanceObject']
    keys(): AllJavaClasses['java.util.Enumeration']['instanceObject']
    containsValue(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    keySet(): AllJavaClasses['java.util.Set']['instanceObject']
    getOrDefault(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    computeIfPresent(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
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
    reset(): void
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
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    replace(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg2: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    contains(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    replaceAll(
      arg0: AllJavaClasses['java.util.function.BiFunction']['instanceObject'],
    ): void
    elements(): AllJavaClasses['java.util.Enumeration']['instanceObject']
    size(): number
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
    containsValue(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    keySet(): AllJavaClasses['java.util.Set']['instanceObject']
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
    get(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    put(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    isEmpty(): boolean
    elements(): AllJavaClasses['java.util.Enumeration']['instanceObject']
    size(): number
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
    compareTo(arg0: AllJavaClasses['java.util.Date']['instanceObject']): number
    compareTo(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    getTime(): number
    setTime(arg0: number): void
    before(arg0: AllJavaClasses['java.util.Date']['instanceObject']): boolean
    after(arg0: AllJavaClasses['java.util.Date']['instanceObject']): boolean
    getDate(): number
    getSeconds(): number
    toInstant(): AllJavaClasses['java.time.Instant']['instanceObject']
    getYear(): number
    setYear(arg0: number): void
    setMonth(arg0: number): void
    setDate(arg0: number): void
    getDay(): number
    getHours(): number
    setHours(arg0: number): void
    getMinutes(): number
    setMinutes(arg0: number): void
    setSeconds(arg0: number): void
    toLocaleString(): string
    toGMTString(): string
    getTimezoneOffset(): number
    getMonth(): number
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
type AllJavaClass_java_nio_file_PathMatcher = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.nio.file.PathMatcher'
    matches(
      arg0: AllJavaClasses['java.nio.file.Path']['instanceObject'],
    ): boolean
  }
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
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_java_lang_reflect_AnnotatedElement = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.reflect.AnnotatedElement'
    getAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    isAnnotationPresent(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): boolean
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
type AllJavaClass_java_lang_Package = {
  staticObject: {
    getPackage(
      arg0: string,
    ): AllJavaClasses['java.lang.Package']['instanceObject']
    getPackages(): AllJavaClasses['java.lang.Package']['instanceObject'][]
  }
  instanceObject: ({
    __javaClass: 'java.lang.Package'
    toString(): string
    hashCode(): number
    getName(): string
    getAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    isAnnotationPresent(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): boolean
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
type AllJavaClass_java_lang_reflect_AnnotatedType = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.reflect.AnnotatedType'
    getType(): AllJavaClasses['java.lang.reflect.Type']['instanceObject']
    getAnnotatedOwnerType(): AllJavaClasses['java.lang.reflect.AnnotatedType']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.reflect.AnnotatedElement']['instanceObject'],
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
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getModifiers(): number
    getName(): string
    toGenericString(): string
    isSynthetic(): boolean
    getTypeParameters(): AllJavaClasses['java.lang.reflect.TypeVariable']['instanceObject'][]
    getDeclaringClass(): AllJavaClasses['java.lang.Class']['instanceObject']
    getAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getDeclaredAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getReturnType(): AllJavaClasses['java.lang.Class']['instanceObject']
    getParameterTypes(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    setAccessible(arg0: boolean): void
    isVarArgs(): boolean
    getParameterCount(): number
    getParameterAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][][]
    getGenericReturnType(): AllJavaClasses['java.lang.reflect.Type']['instanceObject']
    getGenericParameterTypes(): AllJavaClasses['java.lang.reflect.Type']['instanceObject'][]
    getExceptionTypes(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    getGenericExceptionTypes(): AllJavaClasses['java.lang.reflect.Type']['instanceObject'][]
    isBridge(): boolean
    isDefault(): boolean
    getDefaultValue(): AllJavaClasses['java.lang.Object']['instanceObject']
    getAnnotatedReturnType(): AllJavaClasses['java.lang.reflect.AnnotatedType']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.reflect.Executable']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_reflect_Executable = {
  staticObject: object
  instanceObject: (({
    __javaClass: 'java.lang.reflect.Executable'
    getModifiers(): number
    getName(): string
    toGenericString(): string
    isSynthetic(): boolean
    getTypeParameters(): AllJavaClasses['java.lang.reflect.TypeVariable']['instanceObject'][]
    getDeclaringClass(): AllJavaClasses['java.lang.Class']['instanceObject']
    getAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getAnnotationsByType(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getDeclaredAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getParameterTypes(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    isVarArgs(): boolean
    getAnnotatedParameterTypes(): AllJavaClasses['java.lang.reflect.AnnotatedType']['instanceObject'][]
    getParameterCount(): number
    getParameterAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][][]
    getGenericParameterTypes(): AllJavaClasses['java.lang.reflect.Type']['instanceObject'][]
    getExceptionTypes(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    getGenericExceptionTypes(): AllJavaClasses['java.lang.reflect.Type']['instanceObject'][]
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
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getModifiers(): number
    getName(): string
    isSynthetic(): boolean
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
    isNamePresent(): boolean
    getDeclaringExecutable(): AllJavaClasses['java.lang.reflect.Executable']['instanceObject']
    getParameterizedType(): AllJavaClasses['java.lang.reflect.Type']['instanceObject']
    isImplicit(): boolean
    isVarArgs(): boolean
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
    getAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    isAnnotationPresent(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): boolean
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
    isAccessible(): boolean
    canAccess(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
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
type AllJavaClass_java_lang_reflect_Member = {
  staticObject: { PUBLIC: number; DECLARED: number }
  instanceObject: {
    __javaClass: 'java.lang.reflect.Member'
    getModifiers(): number
    getName(): string
    isSynthetic(): boolean
    getDeclaringClass(): AllJavaClasses['java.lang.Class']['instanceObject']
  }
}
type AllJavaClass_java_lang_reflect_Constructor = {
  staticObject: object
  instanceObject: {
    __javaClass: 'java.lang.reflect.Constructor'
    equals(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    toString(): string
    hashCode(): number
    getModifiers(): number
    getName(): string
    toGenericString(): string
    newInstance(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    isSynthetic(): boolean
    getTypeParameters(): AllJavaClasses['java.lang.reflect.TypeVariable']['instanceObject'][]
    getDeclaringClass(): AllJavaClasses['java.lang.Class']['instanceObject']
    getAnnotation(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject']
    getDeclaredAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][]
    getParameterTypes(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    setAccessible(arg0: boolean): void
    isVarArgs(): boolean
    getParameterCount(): number
    getParameterAnnotations(): AllJavaClasses['java.lang.annotation.Annotation']['instanceObject'][][]
    getGenericParameterTypes(): AllJavaClasses['java.lang.reflect.Type']['instanceObject'][]
    getExceptionTypes(): AllJavaClasses['java.lang.Class']['instanceObject'][]
    getGenericExceptionTypes(): AllJavaClasses['java.lang.reflect.Type']['instanceObject'][]
    getAnnotatedReturnType(): AllJavaClasses['java.lang.reflect.AnnotatedType']['instanceObject']
    getAnnotatedReceiverType(): AllJavaClasses['java.lang.reflect.AnnotatedType']['instanceObject']
  } & Omit<
    AllJavaClasses['java.lang.reflect.Executable']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_java_lang_reflect_Field = {
  staticObject: object
  instanceObject: ({
    __javaClass: 'java.lang.reflect.Field'
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
    getName(): string
    toGenericString(): string
    isSynthetic(): boolean
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
    isEnumConstant(): boolean
    getType(): AllJavaClasses['java.lang.Class']['instanceObject']
    getGenericType(): AllJavaClasses['java.lang.reflect.Type']['instanceObject']
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
type AllJavaClass_net_rwhps_server_struct_Seq = {
  staticObject: {
    Companion: AllJavaClasses['net.rwhps.server.struct.Seq$Companion']['instanceObject']
    new (
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
    new (
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
      arg1: boolean,
      arg2: number,
      arg3: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
    new (): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
    new (
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
    new (
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
    new (
      arg0: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
    new (
      arg0: boolean,
      arg1: number,
      arg2: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
    new (
      arg0: number,
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
    new (
      arg0: number,
      arg1: boolean,
      arg2: number,
      arg3: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
    access$getSerializer$cp(): AllJavaClasses['net.rwhps.server.struct.SerializerTypeAll$TypeSerializer']['instanceObject']
  }
  instanceObject: { __javaClass: 'net.rwhps.server.struct.Seq' } & Omit<
    AllJavaClasses['net.rwhps.server.struct.BaseSeq']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_net_rwhps_server_struct_Seq$Companion = {
  staticObject: {
    new (
      arg0: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.Seq$Companion']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.struct.Seq$Companion'
    getSerializer(): AllJavaClasses['net.rwhps.server.struct.SerializerTypeAll$TypeSerializer']['instanceObject']
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
    close(): void
    writeInt(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    transferTo(
      arg0: AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject'],
    ): void
    reset(): void
    writeBytes(
      arg0: number[],
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    writeFloat(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    writeFloat(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    writeString(
      arg0: string,
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
    transferToFixedLength(
      arg0: AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject'],
      arg1: number,
    ): void
    writeBackwardsShort(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    writeBytesAndLength(
      arg0: number[],
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    writeEnum(arg0: AllJavaClasses['java.lang.Enum']['instanceObject']): void
    writeIsString(
      arg0: AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject'],
    ): void
    writeIsString(arg0: string): void
    writeIsInt(
      arg0: AllJavaClasses['java.lang.Integer']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    writeIsInt(
      arg0: AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject'],
    ): void
    flushEncodeData(
      arg0: AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject'],
    ): void
    flushEncodeData(
      arg0: AllJavaClasses['net.rwhps.server.io.output.CompressOutputStream']['instanceObject'],
    ): void
    flushMapData(arg0: number, arg1: number[]): void
    createPacket(
      arg0: AllJavaClasses['net.rwhps.server.util.PacketType']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject']
    createPacket(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject']
    writeBackwardsInt(
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.io.GameOutputStream']['instanceObject']
    getByteArray(): number[]
    getByteBuf(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
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
    toString(arg0: string): string
    toString(
      arg0: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): string
    toString(): string
    size(): number
    write(arg0: AllJavaClasses['java.io.InputStream']['instanceObject']): number
    write(arg0: number): void
    write(arg0: number[], arg1: number, arg2: number): void
    close(): void
    toByteArray(): number[]
    reset(): void
    writeBytes(arg0: number[]): void
    writeTo(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
    ): void
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
    readHeadInt(arg0: number[]): number
    readHeadInt(
      arg0: AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject'],
    ): number
  }
  instanceObject: ({
    __javaClass: 'net.rwhps.server.io.GameInputStream'
    toString(): string
    close(): void
    readInt(): number
    getSize(): number
    readAllBytes(): number[]
    readNBytes(arg0: number): number[]
    transferTo(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
    ): void
    skip(arg0: number): void
    readFloat(): number
    readString(): string
    readBoolean(): boolean
    readByte(): number
    readShort(): number
    readLong(): number
    transferToFixedLength(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: number,
    ): void
    readEnum(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.Enum']['instanceObject']
    readStreamBytes(): number[]
    readBackwardsInt(): number
    readIsInt(): number
    readStreamBytesNew(): number[]
    readIsString(): string
    readBackwardsShort(): number
    getDecodeBytes(): number[]
    getDecodeStream(
      arg0: boolean,
    ): AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject']
    getStream(): AllJavaClasses['net.rwhps.server.io.GameInputStream']['instanceObject']
    getParseVersion(): number
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
    setStatus(
      arg0: AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject'],
    ): void
    getStatus(): AllJavaClasses['net.rwhps.server.func.Control$EventNext']['instanceObject']
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
    access$getNullPacket$cp(): AllJavaClasses['net.rwhps.server.io.packet.Packet']['instanceObject']
    access$getTypeMap$cp(): AllJavaClasses['net.rwhps.server.struct.IntMap']['instanceObject']
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
type AllJavaClass_net_rwhps_server_struct_IntMap = {
  staticObject: {
    new (
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.struct.IntMap']['instanceObject']
    new (): AllJavaClasses['net.rwhps.server.struct.IntMap']['instanceObject']
    new (
      arg0: number,
      arg1: boolean,
      arg2: number,
      arg3: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.IntMap']['instanceObject']
    new (
      arg0: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.IntMap']['instanceObject']
    new (
      arg0: boolean,
      arg1: number,
      arg2: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.IntMap']['instanceObject']
    new (
      arg0: number,
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.IntMap']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.struct.IntMap'
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
    AllJavaClasses['net.rwhps.server.struct.BaseMap']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_net_rwhps_server_struct_BaseMap = {
  staticObject: {
    Companion: AllJavaClasses['net.rwhps.server.struct.BaseMap$Companion']['instanceObject']
    new (
      arg0: AllJavaClasses['java.util.Map']['instanceObject'],
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.BaseMap']['instanceObject']
    access$getMap$p(
      arg0: AllJavaClasses['net.rwhps.server.struct.BaseMap']['instanceObject'],
    ): AllJavaClasses['java.util.Map']['instanceObject']
  }
  instanceObject: ((({
    __javaClass: 'net.rwhps.server.struct.BaseMap'
    remove(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
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
    size(): number
    entrySet(): AllJavaClasses['java.util.Set']['instanceObject']
    putAll(arg0: AllJavaClasses['java.util.Map']['instanceObject']): void
    containsKey(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    containsValue(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    keySet(): AllJavaClasses['java.util.Set']['instanceObject']
    getOrDefault(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getSize(): number
    getEntries(): AllJavaClasses['java.util.Set']['instanceObject']
    find(
      arg0: AllJavaClasses['net.rwhps.server.func.FindMapKV']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.func.KeyValue']['instanceObject']
    find(
      arg0: AllJavaClasses['net.rwhps.server.func.FindMapKV']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.func.FindMapKV']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.func.KeyValue']['instanceObject']
    getKeys(): AllJavaClasses['java.util.Set']['instanceObject']
    getValues(): AllJavaClasses['java.util.Collection']['instanceObject']
    eachAll(
      arg0: AllJavaClasses['net.rwhps.server.func.ConsMap']['instanceObject'],
    ): void
    eachAllFind(
      arg0: AllJavaClasses['net.rwhps.server.func.FindMapKV']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.func.ConsMap']['instanceObject'],
    ): void
    eachFind(
      arg0: AllJavaClasses['net.rwhps.server.func.FindMapKV']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.func.ConsMap']['instanceObject'],
    ): AllJavaClasses['kotlin.Unit']['instanceObject']
    eachAllFinds(
      arg0: AllJavaClasses['net.rwhps.server.func.FindMapKV']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.func.FindMapKV']['instanceObject'],
      arg2: AllJavaClasses['net.rwhps.server.func.ConsMap']['instanceObject'],
    ): AllJavaClasses['kotlin.Unit']['instanceObject']
    eachControl(
      arg0: AllJavaClasses['net.rwhps.server.func.FindMapKV']['instanceObject'],
    ): void
    eachControl(
      arg0: AllJavaClasses['net.rwhps.server.func.FindMapE']['instanceObject'],
    ): void
    toArrayValues(): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
    toArrayKey(): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
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
type AllJavaClass_net_rwhps_server_struct_BaseMap$Companion = {
  staticObject: {
    new (
      arg0: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.BaseMap$Companion']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.struct.BaseMap$Companion'
    toSeq(
      arg0: AllJavaClasses['java.util.Set']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
    toSeq(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
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
type AllJavaClass_kotlin_Unit = {
  staticObject: { INSTANCE: AllJavaClasses['kotlin.Unit']['instanceObject'] }
  instanceObject: { __javaClass: 'kotlin.Unit'; toString(): string } & Omit<
    AllJavaClasses['java.lang.Object']['instanceObject'],
    '__javaClass'
  >
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
    get7zOutputStream(
      arg0: string,
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.io.output.CompressOutputStream']['instanceObject']
    getZipOutputStream(
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
      write(
        arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
      ): number
      write(arg0: number[], arg1: number, arg2: number): void
      write(arg0: number): void
      toByteArray(): number[]
      reset(): void
      writeBytes(arg0: number[]): void
      writeTo(
        arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      ): void
    } & Omit<
      AllJavaClasses['net.rwhps.server.io.output.AbstractByteArrayOutputStream']['instanceObject'],
      '__javaClass'
    >
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
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.channels.FileChannel']['instanceObject'],
      arg2: number,
      arg3: number,
    ): number
    getBytes(
      arg0: number,
      arg1: number[],
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
      arg2: number,
      arg3: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
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
    isDirect(): boolean
    hasArray(): boolean
    array(): number[]
    arrayOffset(): number
    writeInt(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readInt(): number
    copy(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    copy(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
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
    unwrap(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    capacity(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    capacity(): number
    writeBytes(
      arg0: AllJavaClasses['java.nio.channels.ScatteringByteChannel']['instanceObject'],
      arg1: number,
    ): number
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['java.nio.channels.FileChannel']['instanceObject'],
      arg1: number,
      arg2: number,
    ): number
    writeBytes(
      arg0: number[],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
      arg1: number,
    ): number
    writeBytes(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    isReadOnly(): boolean
    slice(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    duplicate(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeFloat(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readFloat(): number
    readBytes(
      arg0: number[],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['java.nio.channels.FileChannel']['instanceObject'],
      arg1: number,
      arg2: number,
    ): number
    readBytes(
      arg0: AllJavaClasses['java.nio.channels.GatheringByteChannel']['instanceObject'],
      arg1: number,
    ): number
    readBytes(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    order(): AllJavaClasses['java.nio.ByteOrder']['instanceObject']
    order(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeChar(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readChar(): AllJavaClasses['char']['instanceObject']
    isReadable(): boolean
    isReadable(arg0: number): boolean
    isWritable(): boolean
    isWritable(arg0: number): boolean
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
    getUnsignedShortLE(arg0: number): number
    getMedium(arg0: number): number
    maxWritableBytes(): number
    getMediumLE(arg0: number): number
    getUnsignedByte(arg0: number): number
    getIntLE(arg0: number): number
    alloc(): AllJavaClasses['io.netty.buffer.ByteBufAllocator']['instanceObject']
    readerIndex(): number
    readerIndex(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    resetWriterIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getUnsignedIntLE(arg0: number): number
    getFloatLE(arg0: number): number
    getLongLE(arg0: number): number
    getCharSequence(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): AllJavaClasses['java.lang.CharSequence']['instanceObject']
    setShortLE(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setMedium(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setIntLE(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    maxCapacity(): number
    getUnsignedMedium(arg0: number): number
    getShortLE(arg0: number): number
    getUnsignedInt(arg0: number): number
    setLongLE(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writerIndex(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writerIndex(): number
    markReaderIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    asReadOnly(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setFloatLE(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    resetReaderIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setDoubleLE(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.channels.FileChannel']['instanceObject'],
      arg2: number,
      arg3: number,
    ): number
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['java.io.InputStream']['instanceObject'],
      arg2: number,
    ): number
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.channels.ScatteringByteChannel']['instanceObject'],
      arg2: number,
    ): number
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
      arg1: number[],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setZero(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readableBytes(): number
    ensureWritable(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    ensureWritable(arg0: number, arg1: boolean): number
    getDoubleLE(arg0: number): number
    setCharSequence(
      arg0: number,
      arg1: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg2: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): number
    readShortLE(): number
    discardReadBytes(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setMediumLE(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readMedium(): number
    readMediumLE(): number
    markWriterIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getUnsignedShort(arg0: number): number
    writableBytes(): number
    readRetainedSlice(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeShortLE(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readUnsignedIntLE(): number
    readFloatLE(): number
    writeCharSequence(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): number
    forEachByteDesc(
      arg0: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject'],
    ): number
    forEachByteDesc(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject'],
    ): number
    readLongLE(): number
    readUnsignedInt(): number
    readSlice(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readDoubleLE(): number
    writeLongLE(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readIntLE(): number
    writeFloatLE(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeMedium(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    nioBufferCount(): number
    nioBuffer(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    nioBuffer(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    hasMemoryAddress(): boolean
    readCharSequence(
      arg0: number,
      arg1: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): AllJavaClasses['java.lang.CharSequence']['instanceObject']
    bytesBefore(arg0: number, arg1: number, arg2: number): number
    bytesBefore(arg0: number): number
    bytesBefore(arg0: number, arg1: number): number
    retainedSlice(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    retainedSlice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    retain(): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    retain(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    retain(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    retain(
      arg0: number,
    ): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    touch(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    touch(): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    touch(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    touch(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    internalNioBuffer(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    memoryAddress(): number
    forEachByte(
      arg0: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject'],
    ): number
    forEachByte(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject'],
    ): number
    retainedDuplicate(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    asByteBuf(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeMediumLE(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    isContiguous(): boolean
    readUnsignedMedium(): number
    writeZero(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeIntLE(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeDoubleLE(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    nioBuffers(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][]
    nioBuffers(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][]
    setIndex(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    discardSomeReadBytes(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getUnsignedMediumLE(arg0: number): number
    readUnsignedShortLE(): number
    readUnsignedMediumLE(): number
    maxFastWritableBytes(): number
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
    directBuffer(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    directBuffer(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    directBuffer(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    compositeBuffer(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    compositeBuffer(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    calculateNewCapacity(arg0: number, arg1: number): number
    compositeDirectBuffer(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    compositeDirectBuffer(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    compositeHeapBuffer(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    compositeHeapBuffer(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    isDirectBufferPooled(): boolean
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
    clear(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    clear(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.channels.FileChannel']['instanceObject'],
      arg2: number,
      arg3: number,
    ): number
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg2: number,
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
      arg1: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
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
      arg2: number,
      arg3: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
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
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeInt(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    copy(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBoolean(
      arg0: number,
      arg1: boolean,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBoolean(
      arg0: number,
      arg1: boolean,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setByte(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setByte(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
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
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setShort(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setInt(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setInt(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setLong(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setLong(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
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
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setDouble(
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
    writeBytes(
      arg0: number[],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
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
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeFloat(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeFloat(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    readBytes(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['java.io.OutputStream']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
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
      arg0: number[],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: number[],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
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
    order(): AllJavaClasses['java.nio.ByteOrder']['instanceObject']
    writeChar(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeChar(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    skipBytes(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    skipBytes(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBoolean(
      arg0: boolean,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBoolean(
      arg0: boolean,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeByte(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeByte(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
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
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writeDouble(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    addComponents(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Iterable']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    addComponents(
      arg0: AllJavaClasses['java.lang.Iterable']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    addComponents(
      arg0: boolean,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'][],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    addComponents(
      arg0: boolean,
      arg1: AllJavaClasses['java.lang.Iterable']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    addComponents(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'][],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    addComponents(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'][],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    removeComponent(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    numComponents(): number
    removeComponents(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    maxNumComponents(): number
    addComponent(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
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
    decompose(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.util.List']['instanceObject']
    toComponentIndex(arg0: number): number
    toByteIndex(arg0: number): number
    componentAtOffset(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    consolidate(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    consolidate(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    internalComponent(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    alloc(): AllJavaClasses['io.netty.buffer.ByteBufAllocator']['instanceObject']
    readerIndex(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readerIndex(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    resetWriterIndex(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    resetWriterIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setMedium(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setMedium(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    writerIndex(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writerIndex(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    markReaderIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    markReaderIndex(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    resetReaderIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    resetReaderIndex(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
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
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: number[],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: number[],
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
      arg2: number,
      arg3: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['java.io.InputStream']['instanceObject'],
      arg2: number,
    ): number
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.channels.ScatteringByteChannel']['instanceObject'],
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
      arg1: number[],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setBytes(
      arg0: number,
      arg1: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setZero(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setZero(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    ensureWritable(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    ensureWritable(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    discardReadBytes(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    discardReadBytes(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    markWriterIndex(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    markWriterIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeMedium(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeMedium(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    nioBufferCount(): number
    nioBuffer(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    hasMemoryAddress(): boolean
    retain(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    retain(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    retain(): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    retain(
      arg0: number,
    ): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    retain(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    retain(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    touch(): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    touch(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    touch(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    touch(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    touch(): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    touch(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    internalNioBuffer(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    memoryAddress(): number
    writeZero(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeZero(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    nioBuffers(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][]
    nioBuffers(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][]
    setIndex(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.CompositeByteBuf']['instanceObject']
    setIndex(
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
type AllJavaClass_io_netty_util_ReferenceCounted = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.util.ReferenceCounted'
    release(arg0: number): boolean
    release(): boolean
    refCnt(): number
    retain(): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    retain(
      arg0: number,
    ): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    touch(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    touch(): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
  }
}
type AllJavaClass_io_netty_buffer_AbstractReferenceCountedByteBuf = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.buffer.AbstractReferenceCountedByteBuf'
    release(): boolean
    release(arg0: number): boolean
    refCnt(): number
    retain(
      arg0: number,
    ): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    retain(): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    retain(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    retain(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    touch(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    touch(): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    touch(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['io.netty.util.ReferenceCounted']['instanceObject']
    touch(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
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
    copy(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
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
    writeBytes(
      arg0: AllJavaClasses['java.nio.channels.ScatteringByteChannel']['instanceObject'],
      arg1: number,
    ): number
    writeBytes(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
      arg1: number,
    ): number
    writeBytes(
      arg0: number[],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
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
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    isReadOnly(): boolean
    slice(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    slice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    duplicate(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeFloat(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readFloat(): number
    readBytes(
      arg0: AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: AllJavaClasses['java.nio.channels.GatheringByteChannel']['instanceObject'],
      arg1: number,
    ): number
    readBytes(
      arg0: AllJavaClasses['java.nio.ByteBuffer']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
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
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: number[],
      arg1: number,
      arg2: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readBytes(
      arg0: number[],
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
    order(
      arg0: AllJavaClasses['java.nio.ByteOrder']['instanceObject'],
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeChar(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readChar(): AllJavaClasses['char']['instanceObject']
    isReadable(): boolean
    isReadable(arg0: number): boolean
    isWritable(): boolean
    isWritable(arg0: number): boolean
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
    getUnsignedShortLE(arg0: number): number
    getMedium(arg0: number): number
    maxWritableBytes(): number
    getMediumLE(arg0: number): number
    getUnsignedByte(arg0: number): number
    getIntLE(arg0: number): number
    readerIndex(): number
    readerIndex(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    resetWriterIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getUnsignedIntLE(arg0: number): number
    getLongLE(arg0: number): number
    getCharSequence(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): AllJavaClasses['java.lang.CharSequence']['instanceObject']
    setShortLE(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setMedium(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setIntLE(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    maxCapacity(): number
    getUnsignedMedium(arg0: number): number
    getShortLE(arg0: number): number
    getUnsignedInt(arg0: number): number
    setLongLE(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writerIndex(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writerIndex(): number
    markReaderIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    asReadOnly(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    resetReaderIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
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
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setZero(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readableBytes(): number
    ensureWritable(arg0: number, arg1: boolean): number
    ensureWritable(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setCharSequence(
      arg0: number,
      arg1: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg2: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): number
    readShortLE(): number
    discardReadBytes(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    setMediumLE(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readMedium(): number
    readMediumLE(): number
    markWriterIndex(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getUnsignedShort(arg0: number): number
    writableBytes(): number
    readRetainedSlice(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeShortLE(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readUnsignedIntLE(): number
    writeCharSequence(
      arg0: AllJavaClasses['java.lang.CharSequence']['instanceObject'],
      arg1: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): number
    forEachByteDesc(
      arg0: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject'],
    ): number
    forEachByteDesc(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject'],
    ): number
    readLongLE(): number
    readUnsignedInt(): number
    readSlice(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeLongLE(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readIntLE(): number
    writeMedium(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    nioBuffer(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject']
    readCharSequence(
      arg0: number,
      arg1: AllJavaClasses['java.nio.charset.Charset']['instanceObject'],
    ): AllJavaClasses['java.lang.CharSequence']['instanceObject']
    bytesBefore(arg0: number, arg1: number): number
    bytesBefore(arg0: number): number
    bytesBefore(arg0: number, arg1: number, arg2: number): number
    retainedSlice(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    retainedSlice(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    forEachByte(
      arg0: number,
      arg1: number,
      arg2: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject'],
    ): number
    forEachByte(
      arg0: AllJavaClasses['io.netty.util.ByteProcessor']['instanceObject'],
    ): number
    retainedDuplicate(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeMediumLE(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    readUnsignedMedium(): number
    writeZero(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    writeIntLE(
      arg0: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    nioBuffers(): AllJavaClasses['java.nio.ByteBuffer']['instanceObject'][]
    setIndex(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    discardSomeReadBytes(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
    getUnsignedMediumLE(arg0: number): number
    readUnsignedShortLE(): number
    readUnsignedMediumLE(): number
  } & Omit<
    AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject'],
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
type AllJavaClass_io_netty_buffer_ByteBufConvertible = {
  staticObject: object
  instanceObject: {
    __javaClass: 'io.netty.buffer.ByteBufConvertible'
    asByteBuf(): AllJavaClasses['io.netty.buffer.ByteBuf']['instanceObject']
  }
}
type AllJavaClass_net_rwhps_server_struct_BaseSeq = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.util.List']['instanceObject'],
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.BaseSeq']['instanceObject']
    access$getList$p(
      arg0: AllJavaClasses['net.rwhps.server.struct.BaseSeq']['instanceObject'],
    ): AllJavaClasses['java.util.List']['instanceObject']
  }
  instanceObject: ((({
    __javaClass: 'net.rwhps.server.struct.BaseSeq'
    add(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    add(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    remove(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): boolean
    remove(arg0: number): AllJavaClasses['java.lang.Object']['instanceObject']
    get(arg0: number): AllJavaClasses['java.lang.Object']['instanceObject']
    toString(): string
    indexOf(arg0: AllJavaClasses['java.lang.Object']['instanceObject']): number
    clear(): void
    isEmpty(): boolean
    lastIndexOf(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): number
    contains(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): boolean
    size(): number
    subList(
      arg0: number,
      arg1: number,
    ): AllJavaClasses['java.util.List']['instanceObject']
    toArray(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject'][]
    toArray(
      arg0: AllJavaClasses['java.lang.Object']['instanceObject'][],
    ): AllJavaClasses['java.lang.Object']['instanceObject'][]
    toArray(): AllJavaClasses['java.lang.Object']['instanceObject'][]
    iterator(): AllJavaClasses['java.util.Iterator']['instanceObject']
    addAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    addAll(
      arg0: number,
      arg1: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    first(): AllJavaClasses['java.lang.Object']['instanceObject']
    set(
      arg0: number,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    getSize(): number
    peek(): AllJavaClasses['java.lang.Object']['instanceObject']
    find(
      arg0: AllJavaClasses['net.rwhps.server.func.FindSeq']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.func.FindSeq']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    find(
      arg0: AllJavaClasses['net.rwhps.server.func.FindSeq']['instanceObject'],
    ): AllJavaClasses['java.lang.Object']['instanceObject']
    containsAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    retainAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    removeAll(
      arg0: AllJavaClasses['java.util.Collection']['instanceObject'],
    ): boolean
    listIterator(): AllJavaClasses['java.util.ListIterator']['instanceObject']
    listIterator(
      arg0: number,
    ): AllJavaClasses['java.util.ListIterator']['instanceObject']
    any(): boolean
    removeFirst(): AllJavaClasses['java.lang.Object']['instanceObject']
    pop(): AllJavaClasses['java.lang.Object']['instanceObject']
    eachAll(
      arg0: AllJavaClasses['net.rwhps.server.func.ConsSeq']['instanceObject'],
    ): void
    eachAllFind(
      arg0: AllJavaClasses['net.rwhps.server.func.FindSeq']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.func.ConsSeq']['instanceObject'],
    ): void
    removeAt(arg0: number): AllJavaClasses['java.lang.Object']['instanceObject']
    eachFind(
      arg0: AllJavaClasses['net.rwhps.server.func.FindSeq']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.func.ConsSeq']['instanceObject'],
    ): AllJavaClasses['kotlin.Unit']['instanceObject']
    eachControlAll(
      arg0: AllJavaClasses['net.rwhps.server.func.FindSeq']['instanceObject'],
    ): void
    eachAllFinds(
      arg0: AllJavaClasses['net.rwhps.server.func.FindSeq']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.func.FindSeq']['instanceObject'],
      arg2: AllJavaClasses['net.rwhps.server.func.ConsSeq']['instanceObject'],
    ): AllJavaClasses['kotlin.Unit']['instanceObject']
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
    write(arg0: number[]): void
    write(arg0: number[], arg1: number, arg2: number): void
    write(arg0: number): void
    close(): void
    getFD(): AllJavaClasses['java.io.FileDescriptor']['instanceObject']
    getChannel(): AllJavaClasses['java.nio.channels.FileChannel']['instanceObject']
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
type AllJavaClass_java_io_InputStreamReader = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
      arg1: AllJavaClasses['java.nio.charset.CharsetDecoder']['instanceObject'],
    ): AllJavaClasses['java.io.InputStreamReader']['instanceObject']
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
  }
  instanceObject: {
    __javaClass: 'java.io.InputStreamReader'
    read(): number
    read(
      arg0: AllJavaClasses['char']['instanceObject'][],
      arg1: number,
      arg2: number,
    ): number
    close(): void
    getEncoding(): string
    ready(): boolean
  } & Omit<AllJavaClasses['java.io.Reader']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_util_compression_core_AbstractDecoder = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.util.compression.core.AbstractDecoder'
    close(): void
    getSpecifiedSuffixInThePackageAllFileNameAndPath(
      arg0: AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.OrderedMap']['instanceObject']
    getTheFileNameOfTheSpecifiedSuffixInTheZip(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
    getTheFileBytesOfTheSpecifiedSuffixInTheZip(
      arg0: AllJavaClasses['net.rwhps.server.game.GameMaps$MapData']['instanceObject'],
    ): number[]
    getSpecifiedSuffixInThePackage(
      arg0: string,
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.OrderedMap']['instanceObject']
    getZipNameInputStream(
      arg0: string,
    ): AllJavaClasses['java.io.InputStream']['instanceObject']
    getZipAllBytes(
      arg0: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.OrderedMap']['instanceObject']
    setPhysicalOrder(arg0: boolean): void
  } & Omit<AllJavaClasses['java.io.Closeable']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_struct_OrderedMap = {
  staticObject: {
    new (
      arg0: number,
    ): AllJavaClasses['net.rwhps.server.struct.OrderedMap']['instanceObject']
    new (): AllJavaClasses['net.rwhps.server.struct.OrderedMap']['instanceObject']
    new (
      arg0: number,
      arg1: boolean,
      arg2: number,
      arg3: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.OrderedMap']['instanceObject']
    new (
      arg0: number,
      arg1: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.OrderedMap']['instanceObject']
    new (
      arg0: boolean,
      arg1: number,
      arg2: AllJavaClasses['kotlin.jvm.internal.DefaultConstructorMarker']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.struct.OrderedMap']['instanceObject']
    new (
      arg0: boolean,
    ): AllJavaClasses['net.rwhps.server.struct.OrderedMap']['instanceObject']
  }
  instanceObject: { __javaClass: 'net.rwhps.server.struct.OrderedMap' } & Omit<
    AllJavaClasses['net.rwhps.server.struct.BaseMap']['instanceObject'],
    '__javaClass'
  >
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
    getType(): string
    getMapFileName(): string
    getMapType(): AllJavaClasses['net.rwhps.server.game.GameMaps$MapType']['instanceObject']
    setBytesMap(arg0: number[]): void
    setMapClean(arg0: boolean): void
    setMapSize(arg0: number): void
    getBytesMap(): number[]
    getMapClean(): boolean
    getZipFileName(): string
    getMapFileType(): AllJavaClasses['net.rwhps.server.game.GameMaps$MapFileType']['instanceObject']
    readMap(): AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject']
    getMapSize(): number
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_game_GameMaps$MapType = {
  staticObject: {
    defaultMap: AllJavaClasses['net.rwhps.server.game.GameMaps$MapType']['instanceObject']
    customMap: AllJavaClasses['net.rwhps.server.game.GameMaps$MapType']['instanceObject']
    savedGames: AllJavaClasses['net.rwhps.server.game.GameMaps$MapType']['instanceObject']
    values(): AllJavaClasses['net.rwhps.server.game.GameMaps$MapType']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.game.GameMaps$MapType']['instanceObject']
    getEntries(): AllJavaClasses['kotlin.enums.EnumEntries']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.GameMaps$MapType'
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_game_GameMaps$MapFileType = {
  staticObject: {
    file: AllJavaClasses['net.rwhps.server.game.GameMaps$MapFileType']['instanceObject']
    zip: AllJavaClasses['net.rwhps.server.game.GameMaps$MapFileType']['instanceObject']
    web: AllJavaClasses['net.rwhps.server.game.GameMaps$MapFileType']['instanceObject']
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
    read(arg0: number[], arg1: number, arg2: number): number
    read(arg0: number[]): number
    read(): number
    close(): void
    skip(arg0: number): number
    available(): number
    getFD(): AllJavaClasses['java.io.FileDescriptor']['instanceObject']
    getChannel(): AllJavaClasses['java.nio.channels.FileChannel']['instanceObject']
  } & Omit<
    AllJavaClasses['java.io.InputStream']['instanceObject'],
    '__javaClass'
  >
}
type AllJavaClass_net_rwhps_server_util_game_CommandHandler = {
  staticObject: {
    new (
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.game.CommandHandler']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.util.game.CommandHandler'
    register(
      arg0: string,
      arg1: string,
      arg2: AllJavaClasses['net.rwhps.server.util.game.CommandHandler$CommandRunner']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.game.CommandHandler$Command']['instanceObject']
    register(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: AllJavaClasses['net.rwhps.server.util.game.CommandHandler$CommandRunner']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.game.CommandHandler$Command']['instanceObject']
    register(
      arg0: string,
      arg1: string,
      arg2: AllJavaClasses['net.rwhps.server.func.ConsSeq']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.game.CommandHandler$Command']['instanceObject']
    register(
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: AllJavaClasses['net.rwhps.server.func.ConsSeq']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.game.CommandHandler$Command']['instanceObject']
    handleMessage(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.game.CommandHandler$CommandResponse']['instanceObject']
    handleMessage(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.game.CommandHandler$CommandResponse']['instanceObject']
    setPrefix(arg0: string): void
    getCommandList(): AllJavaClasses['net.rwhps.server.struct.Seq']['instanceObject']
    removeCommand(arg0: string): void
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_util_game_CommandHandler$Command = {
  staticObject: {
    new (
      arg0: string,
      arg1: string,
      arg2: string,
      arg3: AllJavaClasses['net.rwhps.server.util.game.CommandHandler$CommandRunner']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.game.CommandHandler$Command']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.util.game.CommandHandler$Command'
    text: string
    paramText: string
    description: string
    params: AllJavaClasses['net.rwhps.server.util.game.CommandHandler$CommandParam']['instanceObject'][]
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_util_game_CommandHandler$CommandParam = {
  staticObject: {
    new (
      arg0: string,
      arg1: boolean,
      arg2: boolean,
    ): AllJavaClasses['net.rwhps.server.util.game.CommandHandler$CommandParam']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.util.game.CommandHandler$CommandParam'
    name: string
    optional: boolean
    variadic: boolean
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_util_game_CommandHandler$CommandRunner = {
  staticObject: object
  instanceObject: {
    __javaClass: 'net.rwhps.server.util.game.CommandHandler$CommandRunner'
    accept(
      arg0: string[],
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
  }
}
type AllJavaClass_net_rwhps_server_util_game_CommandHandler$CommandResponse = {
  staticObject: {
    new (
      arg0: AllJavaClasses['net.rwhps.server.util.game.CommandHandler$ResponseType']['instanceObject'],
      arg1: AllJavaClasses['net.rwhps.server.util.game.CommandHandler$Command']['instanceObject'],
      arg2: string,
    ): AllJavaClasses['net.rwhps.server.util.game.CommandHandler$CommandResponse']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.util.game.CommandHandler$CommandResponse'
    type: AllJavaClasses['net.rwhps.server.util.game.CommandHandler$ResponseType']['instanceObject']
    command: AllJavaClasses['net.rwhps.server.util.game.CommandHandler$Command']['instanceObject']
    runCommand: string
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_util_game_CommandHandler$ResponseType = {
  staticObject: {
    noCommand: AllJavaClasses['net.rwhps.server.util.game.CommandHandler$ResponseType']['instanceObject']
    unknownCommand: AllJavaClasses['net.rwhps.server.util.game.CommandHandler$ResponseType']['instanceObject']
    fewArguments: AllJavaClasses['net.rwhps.server.util.game.CommandHandler$ResponseType']['instanceObject']
    manyArguments: AllJavaClasses['net.rwhps.server.util.game.CommandHandler$ResponseType']['instanceObject']
    valid: AllJavaClasses['net.rwhps.server.util.game.CommandHandler$ResponseType']['instanceObject']
    values(): AllJavaClasses['net.rwhps.server.util.game.CommandHandler$ResponseType']['instanceObject'][]
    valueOf(
      arg0: string,
    ): AllJavaClasses['net.rwhps.server.util.game.CommandHandler$ResponseType']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.util.game.CommandHandler$ResponseType'
  } & Omit<AllJavaClasses['java.lang.Enum']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_game_event_EventGlobalManage = {
  staticObject: {
    new (): AllJavaClasses['net.rwhps.server.game.event.EventGlobalManage']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.event.EventGlobalManage'
    fire(
      arg0: AllJavaClasses['net.rwhps.server.game.event.core.AbstractGlobalEvent']['instanceObject'],
    ): void
    registerListener(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): void
  } & Omit<
    AllJavaClasses['net.rwhps.server.game.event.AbstractEventManage']['instanceObject'],
    '__javaClass'
  >
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
type AllJavaClass_net_rwhps_server_util_file_LoadIni = {
  staticObject: {
    new (
      arg0: AllJavaClasses['java.io.InputStream']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.file.LoadIni']['instanceObject']
    new (
      arg0: AllJavaClasses['net.rwhps.server.util.file.FileUtils']['instanceObject'],
    ): AllJavaClasses['net.rwhps.server.util.file.LoadIni']['instanceObject']
    readString$default(
      arg0: AllJavaClasses['net.rwhps.server.util.file.LoadIni']['instanceObject'],
      arg1: string,
      arg2: string,
      arg3: number,
      arg4: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): string
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.util.file.LoadIni'
    readInt(arg0: string, arg1: number): number
    readFloat(arg0: string, arg1: number): number
    readString(arg0: string): string
    readString(arg0: string, arg1: string): string
    readBoolean(arg0: string, arg1: boolean): boolean
    readLong(arg0: string, arg1: number): number
    setObject(
      arg0: string,
      arg1: AllJavaClasses['java.lang.Object']['instanceObject'],
    ): void
    getData$Server_Core(): AllJavaClasses['net.rwhps.server.struct.OrderedMap']['instanceObject']
  } & Omit<AllJavaClasses['java.lang.Object']['instanceObject'], '__javaClass'>
}
type AllJavaClass_net_rwhps_server_game_event_EventManage = {
  staticObject: {
    new (): AllJavaClasses['net.rwhps.server.game.event.EventManage']['instanceObject']
  }
  instanceObject: {
    __javaClass: 'net.rwhps.server.game.event.EventManage'
    fire(
      arg0: AllJavaClasses['net.rwhps.server.game.event.core.AbstractEvent']['instanceObject'],
    ): void
    registerListener(
      arg0: AllJavaClasses['java.lang.Class']['instanceObject'],
      arg1: AllJavaClasses['java.util.function.Consumer']['instanceObject'],
    ): void
  } & Omit<
    AllJavaClasses['net.rwhps.server.game.event.AbstractEventManage']['instanceObject'],
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
interface AllJavaClasses {
  'net.rwhps.server.plugin.Plugin': AllJavaClass_net_rwhps_server_plugin_Plugin
  'net.rwhps.server.util.file.FileUtils': AllJavaClass_net_rwhps_server_util_file_FileUtils
  'net.rwhps.server.util.file.FileUtils$Companion': AllJavaClass_net_rwhps_server_util_file_FileUtils$Companion
  'kotlin.jvm.internal.DefaultConstructorMarker': AllJavaClass_kotlin_jvm_internal_DefaultConstructorMarker
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
  'java.util.function.Predicate': AllJavaClass_java_util_function_Predicate
  'java.util.function.Function': AllJavaClass_java_util_function_Function
  'java.util.function.Supplier': AllJavaClass_java_util_function_Supplier
  'java.lang.Runnable': AllJavaClass_java_lang_Runnable
  'java.util.Comparator': AllJavaClass_java_util_Comparator
  'java.util.function.ToIntFunction': AllJavaClass_java_util_function_ToIntFunction
  'java.util.function.ToLongFunction': AllJavaClass_java_util_function_ToLongFunction
  'java.util.function.ToDoubleFunction': AllJavaClass_java_util_function_ToDoubleFunction
  'java.util.stream.Stream$Builder': AllJavaClass_java_util_stream_Stream$Builder
  'java.util.function.IntFunction': AllJavaClass_java_util_function_IntFunction
  'java.util.stream.Collector': AllJavaClass_java_util_stream_Collector
  'java.util.Set': AllJavaClass_java_util_Set
  'java.util.Collection': AllJavaClass_java_util_Collection
  'java.util.Spliterator': AllJavaClass_java_util_Spliterator
  'java.lang.Iterable': AllJavaClass_java_lang_Iterable
  'java.util.function.BiConsumer': AllJavaClass_java_util_function_BiConsumer
  'java.util.function.BinaryOperator': AllJavaClass_java_util_function_BinaryOperator
  'java.util.function.BiFunction': AllJavaClass_java_util_function_BiFunction
  'java.util.stream.Collector$Characteristics': AllJavaClass_java_util_stream_Collector$Characteristics
  'java.lang.Enum': AllJavaClass_java_lang_Enum
  'java.util.function.UnaryOperator': AllJavaClass_java_util_function_UnaryOperator
  'java.util.stream.IntStream': AllJavaClass_java_util_stream_IntStream
  'java.util.OptionalInt': AllJavaClass_java_util_OptionalInt
  'java.util.function.IntConsumer': AllJavaClass_java_util_function_IntConsumer
  'java.util.function.IntSupplier': AllJavaClass_java_util_function_IntSupplier
  'java.util.stream.IntStream$Builder': AllJavaClass_java_util_stream_IntStream$Builder
  'java.util.PrimitiveIterator$OfInt': AllJavaClass_java_util_PrimitiveIterator$OfInt
  'java.lang.Integer': AllJavaClass_java_lang_Integer
  'java.lang.CharSequence': AllJavaClass_java_lang_CharSequence
  char: AllJavaClass_char
  'java.lang.Number': AllJavaClass_java_lang_Number
  'java.util.PrimitiveIterator': AllJavaClass_java_util_PrimitiveIterator
  'java.util.Spliterator$OfInt': AllJavaClass_java_util_Spliterator$OfInt
  'java.util.Spliterator$OfPrimitive': AllJavaClass_java_util_Spliterator$OfPrimitive
  'java.util.function.IntPredicate': AllJavaClass_java_util_function_IntPredicate
  'java.util.function.ObjIntConsumer': AllJavaClass_java_util_function_ObjIntConsumer
  'java.util.function.IntUnaryOperator': AllJavaClass_java_util_function_IntUnaryOperator
  'java.util.function.IntBinaryOperator': AllJavaClass_java_util_function_IntBinaryOperator
  'java.util.stream.BaseStream': AllJavaClass_java_util_stream_BaseStream
  'java.util.stream.LongStream': AllJavaClass_java_util_stream_LongStream
  'java.util.OptionalLong': AllJavaClass_java_util_OptionalLong
  'java.util.function.LongConsumer': AllJavaClass_java_util_function_LongConsumer
  'java.util.function.LongSupplier': AllJavaClass_java_util_function_LongSupplier
  'java.util.stream.LongStream$Builder': AllJavaClass_java_util_stream_LongStream$Builder
  'java.util.PrimitiveIterator$OfLong': AllJavaClass_java_util_PrimitiveIterator$OfLong
  'java.lang.Long': AllJavaClass_java_lang_Long
  'java.util.Spliterator$OfLong': AllJavaClass_java_util_Spliterator$OfLong
  'java.util.function.LongPredicate': AllJavaClass_java_util_function_LongPredicate
  'java.util.function.ObjLongConsumer': AllJavaClass_java_util_function_ObjLongConsumer
  'java.util.function.LongUnaryOperator': AllJavaClass_java_util_function_LongUnaryOperator
  'java.util.function.LongFunction': AllJavaClass_java_util_function_LongFunction
  'java.util.function.LongBinaryOperator': AllJavaClass_java_util_function_LongBinaryOperator
  'java.util.function.LongToIntFunction': AllJavaClass_java_util_function_LongToIntFunction
  'java.util.stream.DoubleStream': AllJavaClass_java_util_stream_DoubleStream
  'java.util.OptionalDouble': AllJavaClass_java_util_OptionalDouble
  'java.util.function.DoubleConsumer': AllJavaClass_java_util_function_DoubleConsumer
  'java.util.function.DoubleSupplier': AllJavaClass_java_util_function_DoubleSupplier
  'java.util.stream.DoubleStream$Builder': AllJavaClass_java_util_stream_DoubleStream$Builder
  'java.util.PrimitiveIterator$OfDouble': AllJavaClass_java_util_PrimitiveIterator$OfDouble
  'java.lang.Double': AllJavaClass_java_lang_Double
  'java.util.Spliterator$OfDouble': AllJavaClass_java_util_Spliterator$OfDouble
  'java.util.function.DoublePredicate': AllJavaClass_java_util_function_DoublePredicate
  'java.util.function.ObjDoubleConsumer': AllJavaClass_java_util_function_ObjDoubleConsumer
  'java.util.function.DoubleUnaryOperator': AllJavaClass_java_util_function_DoubleUnaryOperator
  'java.util.function.DoubleFunction': AllJavaClass_java_util_function_DoubleFunction
  'java.util.function.DoubleBinaryOperator': AllJavaClass_java_util_function_DoubleBinaryOperator
  'java.util.function.DoubleToIntFunction': AllJavaClass_java_util_function_DoubleToIntFunction
  'java.util.function.DoubleToLongFunction': AllJavaClass_java_util_function_DoubleToLongFunction
  'java.util.DoubleSummaryStatistics': AllJavaClass_java_util_DoubleSummaryStatistics
  'java.util.function.LongToDoubleFunction': AllJavaClass_java_util_function_LongToDoubleFunction
  'java.util.LongSummaryStatistics': AllJavaClass_java_util_LongSummaryStatistics
  'java.util.function.IntToLongFunction': AllJavaClass_java_util_function_IntToLongFunction
  'java.util.function.IntToDoubleFunction': AllJavaClass_java_util_function_IntToDoubleFunction
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
  'java.lang.Module': AllJavaClass_java_lang_Module
  'java.lang.annotation.Annotation': AllJavaClass_java_lang_annotation_Annotation
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
  'java.util.List': AllJavaClass_java_util_List
  'java.util.ListIterator': AllJavaClass_java_util_ListIterator
  'java.lang.module.ModuleDescriptor$Requires': AllJavaClass_java_lang_module_ModuleDescriptor$Requires
  'java.lang.ModuleLayer': AllJavaClass_java_lang_ModuleLayer
  'java.lang.module.Configuration': AllJavaClass_java_lang_module_Configuration
  'java.lang.module.ModuleFinder': AllJavaClass_java_lang_module_ModuleFinder
  'java.nio.file.Path': AllJavaClass_java_nio_file_Path
  'java.nio.file.WatchKey': AllJavaClass_java_nio_file_WatchKey
  'java.nio.file.Watchable': AllJavaClass_java_nio_file_Watchable
  'java.nio.file.WatchService': AllJavaClass_java_nio_file_WatchService
  'java.util.concurrent.TimeUnit': AllJavaClass_java_util_concurrent_TimeUnit
  'java.time.temporal.ChronoUnit': AllJavaClass_java_time_temporal_ChronoUnit
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
  'java.lang.Thread': AllJavaClass_java_lang_Thread
  'java.lang.ThreadGroup': AllJavaClass_java_lang_ThreadGroup
  'java.lang.Throwable': AllJavaClass_java_lang_Throwable
  'java.io.PrintStream': AllJavaClass_java_io_PrintStream
  'java.nio.charset.Charset': AllJavaClass_java_nio_charset_Charset
  'java.util.SortedMap': AllJavaClass_java_util_SortedMap
  'java.nio.charset.CharsetDecoder': AllJavaClass_java_nio_charset_CharsetDecoder
  'java.nio.charset.CoderResult': AllJavaClass_java_nio_charset_CoderResult
  'java.nio.charset.CodingErrorAction': AllJavaClass_java_nio_charset_CodingErrorAction
  'java.nio.charset.CharsetEncoder': AllJavaClass_java_nio_charset_CharsetEncoder
  'java.io.File': AllJavaClass_java_io_File
  'java.io.FilenameFilter': AllJavaClass_java_io_FilenameFilter
  'java.io.FileFilter': AllJavaClass_java_io_FileFilter
  'java.io.FilterOutputStream': AllJavaClass_java_io_FilterOutputStream
  'java.io.PrintWriter': AllJavaClass_java_io_PrintWriter
  'java.io.Writer': AllJavaClass_java_io_Writer
  'java.lang.StackTraceElement': AllJavaClass_java_lang_StackTraceElement
  'java.lang.Thread$UncaughtExceptionHandler': AllJavaClass_java_lang_Thread$UncaughtExceptionHandler
  'java.lang.Thread$State': AllJavaClass_java_lang_Thread$State
  'java.nio.file.WatchEvent$Kind': AllJavaClass_java_nio_file_WatchEvent$Kind
  'java.nio.file.WatchEvent$Modifier': AllJavaClass_java_nio_file_WatchEvent$Modifier
  'java.nio.file.LinkOption': AllJavaClass_java_nio_file_LinkOption
  'java.nio.file.OpenOption': AllJavaClass_java_nio_file_OpenOption
  'java.nio.file.CopyOption': AllJavaClass_java_nio_file_CopyOption
  'java.nio.file.FileSystem': AllJavaClass_java_nio_file_FileSystem
  'java.nio.file.spi.FileSystemProvider': AllJavaClass_java_nio_file_spi_FileSystemProvider
  'java.nio.file.AccessMode': AllJavaClass_java_nio_file_AccessMode
  'java.nio.file.attribute.FileAttribute': AllJavaClass_java_nio_file_attribute_FileAttribute
  'java.nio.file.attribute.BasicFileAttributes': AllJavaClass_java_nio_file_attribute_BasicFileAttributes
  'java.nio.file.attribute.FileTime': AllJavaClass_java_nio_file_attribute_FileTime
  'java.time.Instant': AllJavaClass_java_time_Instant
  'java.time.Clock': AllJavaClass_java_time_Clock
  'java.time.ZoneId': AllJavaClass_java_time_ZoneId
  'java.time.zone.ZoneRules': AllJavaClass_java_time_zone_ZoneRules
  'java.time.ZoneOffset': AllJavaClass_java_time_ZoneOffset
  'java.time.LocalDateTime': AllJavaClass_java_time_LocalDateTime
  'java.time.chrono.ChronoLocalDateTime': AllJavaClass_java_time_chrono_ChronoLocalDateTime
  'java.time.format.DateTimeFormatter': AllJavaClass_java_time_format_DateTimeFormatter
  'java.text.ParsePosition': AllJavaClass_java_text_ParsePosition
  'java.time.chrono.Chronology': AllJavaClass_java_time_chrono_Chronology
  'java.time.temporal.ChronoField': AllJavaClass_java_time_temporal_ChronoField
  'java.time.format.TextStyle': AllJavaClass_java_time_format_TextStyle
  'java.time.chrono.ChronoLocalDate': AllJavaClass_java_time_chrono_ChronoLocalDate
  'java.time.chrono.ChronoPeriod': AllJavaClass_java_time_chrono_ChronoPeriod
  'java.time.chrono.Era': AllJavaClass_java_time_chrono_Era
  'java.time.LocalTime': AllJavaClass_java_time_LocalTime
  'java.time.LocalDate': AllJavaClass_java_time_LocalDate
  'java.time.Month': AllJavaClass_java_time_Month
  'java.time.Period': AllJavaClass_java_time_Period
  'java.time.chrono.IsoChronology': AllJavaClass_java_time_chrono_IsoChronology
  'java.time.chrono.ChronoZonedDateTime': AllJavaClass_java_time_chrono_ChronoZonedDateTime
  'java.time.ZonedDateTime': AllJavaClass_java_time_ZonedDateTime
  'java.time.DayOfWeek': AllJavaClass_java_time_DayOfWeek
  'java.time.OffsetDateTime': AllJavaClass_java_time_OffsetDateTime
  'java.time.OffsetTime': AllJavaClass_java_time_OffsetTime
  'java.time.chrono.IsoEra': AllJavaClass_java_time_chrono_IsoEra
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
  'java.nio.channels.FileChannel': AllJavaClass_java_nio_channels_FileChannel
  'java.nio.channels.FileLock': AllJavaClass_java_nio_channels_FileLock
  'java.nio.channels.Channel': AllJavaClass_java_nio_channels_Channel
  'java.nio.MappedByteBuffer': AllJavaClass_java_nio_MappedByteBuffer
  'java.nio.channels.FileChannel$MapMode': AllJavaClass_java_nio_channels_FileChannel$MapMode
  'java.nio.channels.SeekableByteChannel': AllJavaClass_java_nio_channels_SeekableByteChannel
  'java.nio.channels.ByteChannel': AllJavaClass_java_nio_channels_ByteChannel
  'java.nio.channels.ReadableByteChannel': AllJavaClass_java_nio_channels_ReadableByteChannel
  'java.nio.channels.WritableByteChannel': AllJavaClass_java_nio_channels_WritableByteChannel
  'java.nio.channels.spi.AbstractInterruptibleChannel': AllJavaClass_java_nio_channels_spi_AbstractInterruptibleChannel
  'java.nio.channels.InterruptibleChannel': AllJavaClass_java_nio_channels_InterruptibleChannel
  'java.nio.channels.GatheringByteChannel': AllJavaClass_java_nio_channels_GatheringByteChannel
  'java.nio.channels.ScatteringByteChannel': AllJavaClass_java_nio_channels_ScatteringByteChannel
  'java.nio.channels.AsynchronousFileChannel': AllJavaClass_java_nio_channels_AsynchronousFileChannel
  'java.util.concurrent.Future': AllJavaClass_java_util_concurrent_Future
  'java.nio.channels.CompletionHandler': AllJavaClass_java_nio_channels_CompletionHandler
  'java.util.concurrent.ExecutorService': AllJavaClass_java_util_concurrent_ExecutorService
  'java.util.concurrent.Callable': AllJavaClass_java_util_concurrent_Callable
  'java.util.concurrent.Executor': AllJavaClass_java_util_concurrent_Executor
  'java.nio.channels.AsynchronousChannel': AllJavaClass_java_nio_channels_AsynchronousChannel
  'java.nio.file.attribute.FileAttributeView': AllJavaClass_java_nio_file_attribute_FileAttributeView
  'java.nio.file.attribute.AttributeView': AllJavaClass_java_nio_file_attribute_AttributeView
  'java.nio.file.FileStore': AllJavaClass_java_nio_file_FileStore
  'java.nio.file.attribute.FileStoreAttributeView': AllJavaClass_java_nio_file_attribute_FileStoreAttributeView
  'java.nio.file.DirectoryStream': AllJavaClass_java_nio_file_DirectoryStream
  'java.nio.file.DirectoryStream$Filter': AllJavaClass_java_nio_file_DirectoryStream$Filter
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
  'java.util.Hashtable': AllJavaClass_java_util_Hashtable
  'java.util.Dictionary': AllJavaClass_java_util_Dictionary
  'java.security.CodeSigner': AllJavaClass_java_security_CodeSigner
  'java.security.cert.CertPath': AllJavaClass_java_security_cert_CertPath
  'java.security.Timestamp': AllJavaClass_java_security_Timestamp
  'java.util.Date': AllJavaClass_java_util_Date
  'java.security.PrivilegedAction': AllJavaClass_java_security_PrivilegedAction
  'java.security.PrivilegedExceptionAction': AllJavaClass_java_security_PrivilegedExceptionAction
  'java.nio.file.attribute.GroupPrincipal': AllJavaClass_java_nio_file_attribute_GroupPrincipal
  'java.nio.file.PathMatcher': AllJavaClass_java_nio_file_PathMatcher
  'java.lang.ModuleLayer$Controller': AllJavaClass_java_lang_ModuleLayer$Controller
  'java.lang.reflect.AnnotatedElement': AllJavaClass_java_lang_reflect_AnnotatedElement
  'java.lang.Package': AllJavaClass_java_lang_Package
  'java.lang.NamedPackage': AllJavaClass_java_lang_NamedPackage
  'java.lang.reflect.TypeVariable': AllJavaClass_java_lang_reflect_TypeVariable
  'java.lang.reflect.Type': AllJavaClass_java_lang_reflect_Type
  'java.lang.reflect.GenericDeclaration': AllJavaClass_java_lang_reflect_GenericDeclaration
  'java.lang.reflect.AnnotatedType': AllJavaClass_java_lang_reflect_AnnotatedType
  'java.lang.reflect.Method': AllJavaClass_java_lang_reflect_Method
  'java.lang.reflect.Executable': AllJavaClass_java_lang_reflect_Executable
  'java.lang.reflect.Parameter': AllJavaClass_java_lang_reflect_Parameter
  'java.lang.reflect.AccessibleObject': AllJavaClass_java_lang_reflect_AccessibleObject
  'java.lang.reflect.Member': AllJavaClass_java_lang_reflect_Member
  'java.lang.reflect.Constructor': AllJavaClass_java_lang_reflect_Constructor
  'java.lang.reflect.Field': AllJavaClass_java_lang_reflect_Field
  'net.rwhps.server.struct.Seq': AllJavaClass_net_rwhps_server_struct_Seq
  'net.rwhps.server.struct.Seq$Companion': AllJavaClass_net_rwhps_server_struct_Seq$Companion
  'net.rwhps.server.struct.SerializerTypeAll$TypeSerializer': AllJavaClass_net_rwhps_server_struct_SerializerTypeAll$TypeSerializer
  'net.rwhps.server.io.GameOutputStream': AllJavaClass_net_rwhps_server_io_GameOutputStream
  'net.rwhps.server.io.GameOutputStream$Companion': AllJavaClass_net_rwhps_server_io_GameOutputStream$Companion
  'net.rwhps.server.io.output.AbstractByteArrayOutputStream': AllJavaClass_net_rwhps_server_io_output_AbstractByteArrayOutputStream
  'net.rwhps.server.io.output.AbstractByteArrayOutputStream$Companion': AllJavaClass_net_rwhps_server_io_output_AbstractByteArrayOutputStream$Companion
  'net.rwhps.server.io.GameInputStream': AllJavaClass_net_rwhps_server_io_GameInputStream
  'net.rwhps.server.io.GameInputStream$Companion': AllJavaClass_net_rwhps_server_io_GameInputStream$Companion
  'net.rwhps.server.io.packet.Packet': AllJavaClass_net_rwhps_server_io_packet_Packet
  'net.rwhps.server.io.packet.Packet$Companion': AllJavaClass_net_rwhps_server_io_packet_Packet$Companion
  'net.rwhps.server.util.PacketType': AllJavaClass_net_rwhps_server_util_PacketType
  'net.rwhps.server.util.PacketType$Companion': AllJavaClass_net_rwhps_server_util_PacketType$Companion
  'kotlin.enums.EnumEntries': AllJavaClass_kotlin_enums_EnumEntries
  'kotlin.jvm.internal.markers.KMappedMarker': AllJavaClass_kotlin_jvm_internal_markers_KMappedMarker
  'net.rwhps.server.struct.IntMap': AllJavaClass_net_rwhps_server_struct_IntMap
  'net.rwhps.server.struct.BaseMap': AllJavaClass_net_rwhps_server_struct_BaseMap
  'net.rwhps.server.struct.BaseMap$Companion': AllJavaClass_net_rwhps_server_struct_BaseMap$Companion
  'net.rwhps.server.func.Prov': AllJavaClass_net_rwhps_server_func_Prov
  'net.rwhps.server.func.KeyValue': AllJavaClass_net_rwhps_server_func_KeyValue
  'net.rwhps.server.func.FindMapKV': AllJavaClass_net_rwhps_server_func_FindMapKV
  'net.rwhps.server.func.ConsMap': AllJavaClass_net_rwhps_server_func_ConsMap
  'kotlin.Unit': AllJavaClass_kotlin_Unit
  'net.rwhps.server.func.FindMapE': AllJavaClass_net_rwhps_server_func_FindMapE
  'kotlin.jvm.internal.markers.KMutableMap': AllJavaClass_kotlin_jvm_internal_markers_KMutableMap
  'net.rwhps.server.func.Control$EventNext': AllJavaClass_net_rwhps_server_func_Control$EventNext
  'net.rwhps.server.io.output.CompressOutputStream': AllJavaClass_net_rwhps_server_io_output_CompressOutputStream
  'net.rwhps.server.io.output.CompressOutputStream$Companion': AllJavaClass_net_rwhps_server_io_output_CompressOutputStream$Companion
  'net.rwhps.server.io.output.DisableSyncByteArrayOutputStream': AllJavaClass_net_rwhps_server_io_output_DisableSyncByteArrayOutputStream
  'io.netty.buffer.ByteBuf': AllJavaClass_io_netty_buffer_ByteBuf
  'io.netty.buffer.ByteBufAllocator': AllJavaClass_io_netty_buffer_ByteBufAllocator
  'io.netty.buffer.CompositeByteBuf': AllJavaClass_io_netty_buffer_CompositeByteBuf
  'io.netty.util.ReferenceCounted': AllJavaClass_io_netty_util_ReferenceCounted
  'io.netty.buffer.AbstractReferenceCountedByteBuf': AllJavaClass_io_netty_buffer_AbstractReferenceCountedByteBuf
  'io.netty.buffer.AbstractByteBuf': AllJavaClass_io_netty_buffer_AbstractByteBuf
  'io.netty.util.ByteProcessor': AllJavaClass_io_netty_util_ByteProcessor
  'io.netty.buffer.ByteBufConvertible': AllJavaClass_io_netty_buffer_ByteBufConvertible
  'net.rwhps.server.struct.BaseSeq': AllJavaClass_net_rwhps_server_struct_BaseSeq
  'net.rwhps.server.func.FindSeq': AllJavaClass_net_rwhps_server_func_FindSeq
  'net.rwhps.server.func.ConsSeq': AllJavaClass_net_rwhps_server_func_ConsSeq
  'kotlin.jvm.internal.markers.KMutableList': AllJavaClass_kotlin_jvm_internal_markers_KMutableList
  'kotlin.jvm.internal.markers.KMutableCollection': AllJavaClass_kotlin_jvm_internal_markers_KMutableCollection
  'kotlin.jvm.internal.markers.KMutableIterable': AllJavaClass_kotlin_jvm_internal_markers_KMutableIterable
  'java.nio.file.attribute.PosixFilePermission': AllJavaClass_java_nio_file_attribute_PosixFilePermission
  'java.io.FileOutputStream': AllJavaClass_java_io_FileOutputStream
  'java.io.FileDescriptor': AllJavaClass_java_io_FileDescriptor
  'java.io.InputStreamReader': AllJavaClass_java_io_InputStreamReader
  'net.rwhps.server.util.compression.core.AbstractDecoder': AllJavaClass_net_rwhps_server_util_compression_core_AbstractDecoder
  'net.rwhps.server.struct.OrderedMap': AllJavaClass_net_rwhps_server_struct_OrderedMap
  'net.rwhps.server.game.GameMaps$MapData': AllJavaClass_net_rwhps_server_game_GameMaps$MapData
  'net.rwhps.server.game.GameMaps$MapType': AllJavaClass_net_rwhps_server_game_GameMaps$MapType
  'net.rwhps.server.game.GameMaps$MapFileType': AllJavaClass_net_rwhps_server_game_GameMaps$MapFileType
  'java.io.FileInputStream': AllJavaClass_java_io_FileInputStream
  'net.rwhps.server.util.game.CommandHandler': AllJavaClass_net_rwhps_server_util_game_CommandHandler
  'net.rwhps.server.util.game.CommandHandler$Command': AllJavaClass_net_rwhps_server_util_game_CommandHandler$Command
  'net.rwhps.server.util.game.CommandHandler$CommandParam': AllJavaClass_net_rwhps_server_util_game_CommandHandler$CommandParam
  'net.rwhps.server.util.game.CommandHandler$CommandRunner': AllJavaClass_net_rwhps_server_util_game_CommandHandler$CommandRunner
  'net.rwhps.server.util.game.CommandHandler$CommandResponse': AllJavaClass_net_rwhps_server_util_game_CommandHandler$CommandResponse
  'net.rwhps.server.util.game.CommandHandler$ResponseType': AllJavaClass_net_rwhps_server_util_game_CommandHandler$ResponseType
  'net.rwhps.server.game.event.EventGlobalManage': AllJavaClass_net_rwhps_server_game_event_EventGlobalManage
  'net.rwhps.server.game.event.core.AbstractGlobalEvent': AllJavaClass_net_rwhps_server_game_event_core_AbstractGlobalEvent
  'net.rwhps.server.game.event.core.AbstractEventCore': AllJavaClass_net_rwhps_server_game_event_core_AbstractEventCore
  'net.rwhps.server.game.event.AbstractEventManage': AllJavaClass_net_rwhps_server_game_event_AbstractEventManage
  'net.rwhps.server.game.event.core.EventListenerHost': AllJavaClass_net_rwhps_server_game_event_core_EventListenerHost
  'net.rwhps.server.util.file.LoadIni': AllJavaClass_net_rwhps_server_util_file_LoadIni
  'net.rwhps.server.game.event.EventManage': AllJavaClass_net_rwhps_server_game_event_EventManage
  'net.rwhps.server.game.event.core.AbstractEvent': AllJavaClass_net_rwhps_server_game_event_core_AbstractEvent
}
