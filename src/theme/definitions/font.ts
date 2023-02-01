export type FontFamilyValue = string
export type LineHeightValue = `${number}`

export type FontWeightLevel =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'

export const fontFamilyOptions = ['default', 'monospace'] as const
export type FontFamilyOption = typeof fontFamilyOptions[number]

export const fontSizes = [
  's50',
  's100',
  's200',
  's300',
  's400',
  's500',
  's600',
  's700',
  's800',
  's900',
  's1000',
] as const
export type FontSize = typeof fontSizes[number]

export const fontWeights = [
  'light',
  'default',
  'bold',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
] as const
export type FontWeight = typeof fontWeights[number]

export const lineHeights = ['single', 'default', 'heading']
export type LineHeight = typeof lineHeights[number]
