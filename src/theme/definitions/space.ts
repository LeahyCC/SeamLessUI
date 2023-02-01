export const spaceNames = [
  'none',
  's100',
  's200',
  's300',
  's400',
  's500',
  's600',
  's700',
  's800',
  's900',
] as const
export type Space = typeof spaceNames[number]

export type SizeValue =
  | `${number}px`
  | `${number}rem`
  | `${number}%`
  | '0'
  | `${number}vh`
  | `${number}vw`
