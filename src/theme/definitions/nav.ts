import { ColorValue } from './color'

export const NavColors = [
  'mainNavBgColor',
  'mainNavGradient',
  'mainNavHoverColor',
  'mainNavActiveColorMain',
  'mainNavActiveColor',
  'subNavBgColor',
  'subNavShadowColor',
] as const
export type NavColor = typeof NavColors[number]

export type NavGradientValue =
  `linear-gradient(${number}deg, ${ColorValue} 0%, ${ColorValue} 100%)`
