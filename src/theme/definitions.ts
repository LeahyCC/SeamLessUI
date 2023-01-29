type prefixType = 'sl-ui-t-'
const prefix = 'sl-ui-t-'

export type SizeValue =
  | `${number}px`
  | `${number}rem`
  | `${number}%`
  | '0'
  | `${number}vh`
  | `${number}vw`
export type ColorValue = `#${string}`
export type GradientValue = `#${string}, #${string}`
export type FontFamilyValue = string
export type LineHeightValue = `${number}`

export const alphaLevels = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] as const
export type AlphaLevel = typeof alphaLevels[number]

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

const borderKeys = ['radiusLarge', 'radiusDefault', 'radiusSmall'] as const
export type BorderKey = typeof borderKeys[number]

type BorderCustomProperty = `var(--${prefixType}border-${BorderKey})`

type BorderTheme = { [k in BorderKey]: BorderCustomProperty }

type BorderDefinition = { [k in BorderKey]: SizeValue }

export const colorNames = [
  'danger',
  'orange',
  'warning',
  'success',
  'info',
  'primary',
  'purple',
] as const
export type ColorName = typeof colorNames[number]

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
] as const
type GrayColorLevel = typeof grayColorLevels[number]

export type Color =
  | `${ColorName}${ColorLevel}`
  | `gray${GrayColorLevel}`
  | 'pageBackground'
  | 'text'
  | 'heading'
  | 'terminalText'
  | 'terminalBackground'
  | 'black'
  | 'white'

export type ColorCustomProperty = `var(--${prefixType}color-${Color})`
type ColorTheme = { [k in Color]: ColorCustomProperty }

type ColorDefinition = { [k in Color]: ColorValue }

export const gradientNames = [
  'danger',
  'orange',
  'warning',
  'success',
  'info',
  'primary',
  'purple',
  'gray',
  'dangerDark',
  'orangeDark',
  'warningDark',
  'successDark',
  'infoDark',
  'primaryDark',
  'purpleDark',
  'grayDark',
] as const
export type GradientName = typeof gradientNames[number]
export type GradientCustomProperty =
  `var(--${prefixType}gradient-${GradientName})`
type GradientTheme = { [k in GradientName]: GradientCustomProperty }
type GradientDefinition = { [k in GradientName]: GradientValue }

export type RGBColorCustomProperty = `var(--${prefixType}rgb-color-${Color})`

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

type SpaceCustomProperty = `var(--${prefixType}space-${Space})`

type SpaceTheme = { [k in Space]: SpaceCustomProperty }

type SpaceDefinition = { [k in Space]: SizeValue }

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

export type ShadowCustomProperty = `var(--${prefixType}shadow-${Shadow})`
type ShadowTheme = { [k in Shadow]: ShadowCustomProperty }
type ShadowDefinition = { [k in Shadow]: string }

const glowNames = [
  'danger',
  'orange',
  'warning',
  'success',
  'info',
  'primary',
  'purple',
  'gray',
] as const
export type GlowName = typeof glowNames[number]
export type GlowCustomProperty = `var(--${prefixType}glow-${GlowName})`

type GlowTheme = { [k in GlowName]: GlowCustomProperty }

type GlowDefinition = { [k in GlowName]: string }

export const fontFamilyOptions = ['default', 'monospace'] as const
export type FontFamilyOption = typeof fontFamilyOptions[number]
type FontFamilyCustomProperty =
  `var(--${prefixType}fontFamily-${FontFamilyOption})`
type FontFamilyTheme = { [k in FontFamilyOption]: FontFamilyCustomProperty }
type FontFamilyDefinition = { [k in FontFamilyOption]: FontFamilyValue }

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

type FontSizeCustomProperty = `var(--${prefixType}fontSize-${FontSize})`

type FontSizeTheme = { [k in FontSize]: FontSizeCustomProperty }

type FontSizeDefinition = { [k in FontSize]: SizeValue }

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

type FontWeightCustomProperty = `var(--${prefixType}fontWeight-${FontWeight})`

type FontWeightTheme = { [k in FontWeight]: FontWeightCustomProperty }

type FontWeightDefinition = { [k in FontWeight]: FontWeightLevel }

export const lineHeights = ['single', 'default', 'heading']
export type LineHeight = typeof lineHeights[number]
type LineHeightCustomProperty = `var(--${prefixType}lineHeight-${LineHeight})`
type LineHeightTheme = { [k in LineHeight]: LineHeightCustomProperty }
type LineHeightDefinition = { [k in LineHeight]: LineHeightValue }

export type Theme = {
  border: BorderTheme
  color: ColorTheme
  gradient: GradientTheme
  shadow: ShadowTheme
  glow: GlowTheme
  space: SpaceTheme
  fontSize: FontSizeTheme
  fontWeight: FontWeightTheme
  fontFamily: FontFamilyTheme
  lineHeight: LineHeightTheme
}

export type ThemeDefinition = {
  border: BorderDefinition
  color: ColorDefinition
  gradient: GradientDefinition
  shadow: ShadowDefinition
  glow: GlowDefinition
  space: SpaceDefinition
  fontSize: FontSizeDefinition
  fontWeight: FontWeightDefinition
  fontFamily: FontFamilyDefinition
  lineHeight: LineHeightDefinition
}

export const theme: Theme = {
  border: {
    radiusLarge: `var(--${prefix}border-radiusLarge)`,
    radiusDefault: `var(--${prefix}border-radiusDefault)`,
    radiusSmall: `var(--${prefix}border-radiusSmall)`,
  },
  color: {
    danger100: `var(--${prefix}color-danger100)`,
    danger200: `var(--${prefix}color-danger200)`,
    danger300: `var(--${prefix}color-danger300)`,
    orange100: `var(--${prefix}color-orange100)`,
    orange200: `var(--${prefix}color-orange200)`,
    orange300: `var(--${prefix}color-orange300)`,
    warning100: `var(--${prefix}color-warning100)`,
    warning200: `var(--${prefix}color-warning200)`,
    warning300: `var(--${prefix}color-warning300)`,
    success100: `var(--${prefix}color-success100)`,
    success200: `var(--${prefix}color-success200)`,
    success300: `var(--${prefix}color-success300)`,
    info100: `var(--${prefix}color-info100)`,
    info200: `var(--${prefix}color-info200)`,
    info300: `var(--${prefix}color-info300)`,
    primary100: `var(--${prefix}color-primary100)`,
    primary200: `var(--${prefix}color-primary200)`,
    primary300: `var(--${prefix}color-primary300)`,
    purple100: `var(--${prefix}color-purple100)`,
    purple200: `var(--${prefix}color-purple200)`,
    purple300: `var(--${prefix}color-purple300)`,
    gray0: `var(--${prefix}color-gray0)`,
    gray50: `var(--${prefix}color-gray50)`,
    gray100: `var(--${prefix}color-gray100)`,
    gray200: `var(--${prefix}color-gray200)`,
    gray250: `var(--${prefix}color-gray250)`,
    gray300: `var(--${prefix}color-gray300)`,
    gray350: `var(--${prefix}color-gray350)`,
    gray400: `var(--${prefix}color-gray400)`,
    gray500: `var(--${prefix}color-gray500)`,
    gray600: `var(--${prefix}color-gray600)`,
    gray700: `var(--${prefix}color-gray700)`,
    gray800: `var(--${prefix}color-gray800)`,
    gray900: `var(--${prefix}color-gray900)`,
    pageBackground: `var(--${prefix}color-pageBackground)`,
    text: `var(--${prefix}color-text)`,
    heading: `var(--${prefix}color-heading)`,
    terminalText: `var(--${prefix}color-terminalText)`,
    terminalBackground: `var(--${prefix}color-terminalBackground)`,
    black: `var(--${prefix}color-black)`,
    white: `var(--${prefix}color-white)`,
  },
  gradient: {
    purple: `var(--${prefix}gradient-purple)`,
    purpleDark: `var(--${prefix}gradient-purpleDark)`,
    primary: `var(--${prefix}gradient-primary)`,
    primaryDark: `var(--${prefix}gradient-primaryDark)`,
    info: `var(--${prefix}gradient-info)`,
    infoDark: `var(--${prefix}gradient-infoDark)`,
    success: `var(--${prefix}gradient-success)`,
    successDark: `var(--${prefix}gradient-successDark)`,
    warning: `var(--${prefix}gradient-warning)`,
    warningDark: `var(--${prefix}gradient-warningDark)`,
    orange: `var(--${prefix}gradient-orange)`,
    orangeDark: `var(--${prefix}gradient-orangeDark)`,
    danger: `var(--${prefix}gradient-danger)`,
    dangerDark: `var(--${prefix}gradient-dangerDark)`,
    gray: `var(--${prefix}gradient-gray)`,
    grayDark: `var(--${prefix}gradient-grayDark)`,
  },
  shadow: {
    inset100: `var(--${prefix}shadow-inset100)`,
    inset200: `var(--${prefix}shadow-inset200)`,
    inset300: `var(--${prefix}shadow-inset300)`,
    default100: `var(--${prefix}shadow-default100)`,
    default200: `var(--${prefix}shadow-default200)`,
    default300: `var(--${prefix}shadow-default300)`,
    embossed100: `var(--${prefix}shadow-embossed100)`,
  },
  glow: {
    danger: `var(--${prefix}glow-danger)`,
    orange: `var(--${prefix}glow-orange)`,
    warning: `var(--${prefix}glow-warning)`,
    success: `var(--${prefix}glow-success)`,
    info: `var(--${prefix}glow-info)`,
    primary: `var(--${prefix}glow-primary)`,
    purple: `var(--${prefix}glow-purple)`,
    gray: `var(--${prefix}glow-gray)`,
  },
  space: {
    none: `var(--${prefix}space-none)`,
    s100: `var(--${prefix}space-s100)`,
    s200: `var(--${prefix}space-s200)`,
    s300: `var(--${prefix}space-s300)`,
    s400: `var(--${prefix}space-s400)`,
    s500: `var(--${prefix}space-s500)`,
    s600: `var(--${prefix}space-s600)`,
    s700: `var(--${prefix}space-s700)`,
    s800: `var(--${prefix}space-s800)`,
    s900: `var(--${prefix}space-s900)`,
  },
  fontSize: {
    s50: `var(--${prefix}fontSize-s50)`,
    s100: `var(--${prefix}fontSize-s100)`,
    s200: `var(--${prefix}fontSize-s200)`,
    s300: `var(--${prefix}fontSize-s300)`,
    s400: `var(--${prefix}fontSize-s400)`,
    s500: `var(--${prefix}fontSize-s500)`,
    s600: `var(--${prefix}fontSize-s600)`,
    s700: `var(--${prefix}fontSize-s700)`,
    s800: `var(--${prefix}fontSize-s800)`,
    s900: `var(--${prefix}fontSize-s900)`,
    s1000: `var(--${prefix}fontSize-s1000)`,
  },
  fontWeight: {
    light: `var(--${prefix}fontWeight-light)`,
    default: `var(--${prefix}fontWeight-default)`,
    bold: `var(--${prefix}fontWeight-bold)`,
    h1: `var(--${prefix}fontWeight-h1)`,
    h2: `var(--${prefix}fontWeight-h2)`,
    h3: `var(--${prefix}fontWeight-h3)`,
    h4: `var(--${prefix}fontWeight-h4)`,
    h5: `var(--${prefix}fontWeight-h5)`,
    h6: `var(--${prefix}fontWeight-h6)`,
  },
  fontFamily: {
    default: `var(--${prefix}fontFamily-default)`,
    monospace: `var(--${prefix}fontFamily-monospace)`,
  },
  lineHeight: {
    single: `var(--${prefix}lineHeight-single)`,
    default: `var(--${prefix}lineHeight-default)`,
    heading: `var(--${prefix}lineHeight-heading)`,
  },
}
