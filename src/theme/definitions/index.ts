import {
  Color,
  GradientName,
  GradientValue,
  GlowName,
  Shadow,
  ColorValue,
} from './color'
import {
  FontFamilyOption,
  FontFamilyValue,
  FontWeight,
  FontWeightLevel,
  FontSize,
  LineHeight,
  LineHeightValue,
} from './font'
import { NavColor, NavGradientValue } from './nav'
import { SizeValue, Space } from './space'
import { BorderKey } from './border'

export type ThemeDefinition = {
  border: { [k in BorderKey]: SizeValue }
  color: { [k in Color]: ColorValue }
  gradient: { [k in GradientName]: GradientValue }
  shadow: { [k in Shadow]: string }
  glow: { [k in GlowName]: string }
  space: { [k in Space]: SizeValue }
  fontSize: { [k in FontSize]: SizeValue }
  fontWeight: { [k in FontWeight]: FontWeightLevel }
  fontFamily: { [k in FontFamilyOption]: FontFamilyValue }
  lineHeight: { [k in LineHeight]: LineHeightValue }
  nav: { [k in NavColor]: ColorValue | NavGradientValue }
}

const prefix = '--sl-t-'

export type Theme = {
  border: { [k in BorderKey]: `var(${typeof prefix}border-${BorderKey})` }
  color: { [k in Color]: `var(${typeof prefix}color-${Color})` }
  gradient: {
    [k in GradientName]: `var(${typeof prefix}gradient-${GradientName})`
  }
  shadow: { [k in Shadow]: `var(${typeof prefix}shadow-${Shadow})` }
  glow: { [k in GlowName]: `var(${typeof prefix}glow-${GlowName})` }
  space: { [k in Space]: `var(${typeof prefix}space-${Space})` }
  fontSize: { [k in FontSize]: `var(${typeof prefix}fontSize-${FontSize})` }
  fontWeight: {
    [k in FontWeight]: `var(${typeof prefix}fontWeight-${FontWeight})`
  }
  fontFamily: {
    [k in FontFamilyOption]: `var(${typeof prefix}fontFamily-${FontFamilyOption})`
  }
  lineHeight: {
    [k in LineHeight]: `var(${typeof prefix}lineHeight-${LineHeight})`
  }
  nav: { [k in NavColor]: `var(${typeof prefix}nav-${NavColor})` }
}

export const theme: Theme = {
  border: {
    radiusLarge: `var(${prefix}border-radiusLarge)`,
    radiusDefault: `var(${prefix}border-radiusDefault)`,
    radiusSmall: `var(${prefix}border-radiusSmall)`,
  },
  color: {
    black: `var(${prefix}color-black)`,
    danger100: `var(${prefix}color-danger100)`,
    danger200: `var(${prefix}color-danger200)`,
    danger300: `var(${prefix}color-danger300)`,
    dangerSecondary: `var(${prefix}color-dangerSecondary)`,
    dangerPrimary: `var(${prefix}color-dangerPrimary)`,
    fuschia100: `var(${prefix}color-fuschia100)`,
    fuschia200: `var(${prefix}color-fuschia200)`,
    fuschia300: `var(${prefix}color-fuschia300)`,
    grape100: `var(${prefix}color-grape100)`,
    grape200: `var(${prefix}color-grape200)`,
    grape300: `var(${prefix}color-grape300)`,
    gray0: `var(${prefix}color-gray0)`,
    gray100: `var(${prefix}color-gray100)`,
    gray200: `var(${prefix}color-gray200)`,
    gray250: `var(${prefix}color-gray250)`,
    gray300: `var(${prefix}color-gray300)`,
    gray350: `var(${prefix}color-gray350)`,
    gray400: `var(${prefix}color-gray400)`,
    gray50: `var(${prefix}color-gray50)`,
    gray500: `var(${prefix}color-gray500)`,
    gray600: `var(${prefix}color-gray600)`,
    gray700: `var(${prefix}color-gray700)`,
    gray800: `var(${prefix}color-gray800)`,
    gray900: `var(${prefix}color-gray900)`,
    graySecondary: `var(${prefix}color-graySecondary)`,
    grayPrimary: `var(${prefix}color-grayPrimary)`,
    heading: `var(${prefix}color-heading)`,
    info100: `var(${prefix}color-info100)`,
    info200: `var(${prefix}color-info200)`,
    info300: `var(${prefix}color-info300)`,
    orange100: `var(${prefix}color-orange100)`,
    orange200: `var(${prefix}color-orange200)`,
    orange300: `var(${prefix}color-orange300)`,
    orangeSecondary: `var(${prefix}color-orangeSecondary)`,
    orangePrimary: `var(${prefix}color-orangePrimary)`,
    pageBackground: `var(${prefix}color-pageBackground)`,
    primary100: `var(${prefix}color-primary100)`,
    primary200: `var(${prefix}color-primary200)`,
    primary300: `var(${prefix}color-primary300)`,
    primarySecondary: `var(${prefix}color-primarySecondary)`,
    primaryPrimary: `var(${prefix}color-primaryPrimary)`,
    purple100: `var(${prefix}color-purple100)`,
    purple200: `var(${prefix}color-purple200)`,
    purple300: `var(${prefix}color-purple300)`,
    success100: `var(${prefix}color-success100)`,
    success200: `var(${prefix}color-success200)`,
    success300: `var(${prefix}color-success300)`,
    successPrimary: `var(${prefix}color-successPrimary)`,
    successSecondary: `var(${prefix}color-successSecondary)`,
    terminalBackground: `var(${prefix}color-terminalBackground)`,
    terminalText: `var(${prefix}color-terminalText)`,
    text: `var(${prefix}color-text)`,
    textSecondary: `var(${prefix}color-textSecondary)`,
    warning100: `var(${prefix}color-warning100)`,
    warning200: `var(${prefix}color-warning200)`,
    warning300: `var(${prefix}color-warning300)`,
    warningSecondary: `var(${prefix}color-warningSecondary)`,
    warningPrimary: `var(${prefix}color-warningPrimary)`,
    white: `var(${prefix}color-white)`,
  },
  gradient: {
    danger: `var(${prefix}gradient-danger)`,
    dangerDark: `var(${prefix}gradient-dangerDark)`,
    fuschia: `var(${prefix}gradient-fuschia)`,
    fuschiaDark: `var(${prefix}gradient-fuschiaDark)`,
    grape: `var(${prefix}gradient-grape)`,
    grapeDark: `var(${prefix}gradient-grapeDark)`,
    gray: `var(${prefix}gradient-gray)`,
    grayDark: `var(${prefix}gradient-grayDark)`,
    info: `var(${prefix}gradient-info)`,
    infoDark: `var(${prefix}gradient-infoDark)`,
    orange: `var(${prefix}gradient-orange)`,
    orangeDark: `var(${prefix}gradient-orangeDark)`,
    primary: `var(${prefix}gradient-primary)`,
    primaryDark: `var(${prefix}gradient-primaryDark)`,
    purple: `var(${prefix}gradient-purple)`,
    purpleDark: `var(${prefix}gradient-purpleDark)`,
    success: `var(${prefix}gradient-success)`,
    successDark: `var(${prefix}gradient-successDark)`,
    warning: `var(${prefix}gradient-warning)`,
    warningDark: `var(${prefix}gradient-warningDark)`,
  },
  shadow: {
    inset100: `var(${prefix}shadow-inset100)`,
    inset200: `var(${prefix}shadow-inset200)`,
    inset300: `var(${prefix}shadow-inset300)`,
    default100: `var(${prefix}shadow-default100)`,
    default200: `var(${prefix}shadow-default200)`,
    default300: `var(${prefix}shadow-default300)`,
    embossed100: `var(${prefix}shadow-embossed100)`,
  },
  glow: {
    danger: `var(${prefix}glow-danger)`,
    fuschia: `var(${prefix}glow-fuschia)`,
    grape: `var(${prefix}glow-grape)`,
    gray: `var(${prefix}glow-gray)`,
    info: `var(${prefix}glow-info)`,
    orange: `var(${prefix}glow-orange)`,
    primary: `var(${prefix}glow-primary)`,
    purple: `var(${prefix}glow-purple)`,
    success: `var(${prefix}glow-success)`,
    warning: `var(${prefix}glow-warning)`,
  },
  space: {
    none: `var(${prefix}space-none)`,
    s100: `var(${prefix}space-s100)`,
    s200: `var(${prefix}space-s200)`,
    s300: `var(${prefix}space-s300)`,
    s400: `var(${prefix}space-s400)`,
    s500: `var(${prefix}space-s500)`,
    s600: `var(${prefix}space-s600)`,
    s700: `var(${prefix}space-s700)`,
    s800: `var(${prefix}space-s800)`,
    s900: `var(${prefix}space-s900)`,
  },
  fontSize: {
    s50: `var(${prefix}fontSize-s50)`,
    s100: `var(${prefix}fontSize-s100)`,
    s200: `var(${prefix}fontSize-s200)`,
    s300: `var(${prefix}fontSize-s300)`,
    s400: `var(${prefix}fontSize-s400)`,
    s500: `var(${prefix}fontSize-s500)`,
    s600: `var(${prefix}fontSize-s600)`,
    s700: `var(${prefix}fontSize-s700)`,
    s800: `var(${prefix}fontSize-s800)`,
    s900: `var(${prefix}fontSize-s900)`,
    s1000: `var(${prefix}fontSize-s1000)`,
  },
  fontWeight: {
    light: `var(${prefix}fontWeight-light)`,
    default: `var(${prefix}fontWeight-default)`,
    bold: `var(${prefix}fontWeight-bold)`,
    h1: `var(${prefix}fontWeight-h1)`,
    h2: `var(${prefix}fontWeight-h2)`,
    h3: `var(${prefix}fontWeight-h3)`,
    h4: `var(${prefix}fontWeight-h4)`,
    h5: `var(${prefix}fontWeight-h5)`,
    h6: `var(${prefix}fontWeight-h6)`,
  },
  fontFamily: {
    default: `var(${prefix}fontFamily-default)`,
    monospace: `var(${prefix}fontFamily-monospace)`,
  },
  lineHeight: {
    single: `var(${prefix}lineHeight-single)`,
    default: `var(${prefix}lineHeight-default)`,
    heading: `var(${prefix}lineHeight-heading)`,
  },
  nav: {
    mainNavBgColor: `var(${prefix}nav-mainNavBgColor)`,
    mainNavGradient: `var(${prefix}nav-mainNavGradient)`,
    mainNavHoverColor: `var(${prefix}nav-mainNavHoverColor)`,
    mainNavActiveColorMain: `var(${prefix}nav-mainNavActiveColorMain)`,
    mainNavActiveColor: `var(${prefix}nav-mainNavActiveColor)`,
    subNavBgColor: `var(${prefix}nav-subNavBgColor)`,
    subNavShadowColor: `var(${prefix}nav-subNavShadowColor)`,
  },
}
