export function mergeObject<T extends object>(lhs: T, rhs: T): T {
  const obj = {...lhs}
  for(const [key, value] of Object.entries(rhs)) {
    if(obj[key]) {
      switch(typeof obj[key]) {
        case 'function': 
          obj[key] = (() => {
            const func = function(...args: unknown[]) {
              obj[key].call(obj, ...args)
              value.call(obj, ...args)
            }
            func.bind(obj)
            return func
          })()
          break
        case 'object':
          obj[key] = mergeObject(obj[key], value)
          break
        default:
          obj[key] = value
      }
    }
  }
  return obj
}