// Inspired by https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_difference
export function difference<T>(...arrays: T[][]): T[] {
  return arrays.reduce((a, b) => a.filter(c => !b.includes(c)))
}

