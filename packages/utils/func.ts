export function isNil(value: any): boolean {
  return value == null || value == undefined
}

export function fromPairs(pairs: any[]) {
  let index = -1,
    length = pairs ? pairs.length : 0,
    result: { [key: string]: any } = {}
  while (++index < length) {
    let pair = pairs[index]
    result[pair[0]] = pair[1]
  }
  return result
}
