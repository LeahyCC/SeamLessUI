export type ColorValue = string
export type GradientValue = `#${string}, #${string}`

export const alphaLevels = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] as const
export type AlphaLevel = typeof alphaLevels[number]

export const colorNames = [
  'danger',
  'fuschia',
  'grape',
  'info',
  'orange',
  'primary',
  'purple',
  'success',
  'warning',
] as const
export type ColorName = typeof colorNames[number]

export const mainColorNames = [
  'danger',
  'gray',
  'orange',
  'primary',
  'warning',
  'success',
] as const
export type MainColorNames = typeof mainColorNames[number]

const colorLevels = ['100', '200', '300'] as const
type ColorLevel = typeof colorLevels[number]

const grayColorLevels = [
  '0',
  '50',
  '100',
  '200',
  '250',
  '300',
  '350',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  'Primary',
  'Secondary',
] as const
type GrayColorLevel = typeof grayColorLevels[number]

export type Color =
  | `${ColorName}${ColorLevel}`
  | `${MainColorNames}Primary`
  | `${MainColorNames}Secondary`
  | `gray${GrayColorLevel}`
  | 'pageBackground'
  | 'text'
  | 'textSecondary'
  | 'heading'
  | 'terminalText'
  | 'terminalBackground'
  | 'black'
  | 'white'

export const gradientNames = [
  'danger',
  'dangerDark',
  'fuschia',
  'fuschiaDark',
  'grape',
  'grapeDark',
  'gray',
  'grayDark',
  'info',
  'infoDark',
  'orange',
  'orangeDark',
  'primary',
  'primaryDark',
  'purple',
  'purpleDark',
  'success',
  'successDark',
  'warning',
  'warningDark',
] as const
export type GradientName = typeof gradientNames[number]

const defaultShadowLevels = ['100', '200', '300'] as const
type DefaultShadowLevel = typeof defaultShadowLevels[number]

const insetShadowLevels = ['100', '200', '300'] as const
type InsetShadowLevel = typeof insetShadowLevels[number]

const embossedShadowLevels = ['100'] as const
type EmbossedShadowLevel = typeof embossedShadowLevels[number]

export type Shadow =
  | `default${DefaultShadowLevel}`
  | `inset${InsetShadowLevel}`
  | `embossed${EmbossedShadowLevel}`

const glowNames = [
  'danger',
  'fuschia',
  'grape',
  'gray',
  'info',
  'orange',
  'primary',
  'purple',
  'success',
  'warning',
] as const
export type GlowName = typeof glowNames[number]
