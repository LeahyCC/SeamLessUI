import { Color } from './color'

const borderKeys = ['radiusLarge', 'radiusDefault', 'radiusSmall'] as const

export type RGBColorCustomProperty = `var(--h3-t-rgb-color-${Color})`

export type BorderKey = typeof borderKeys[number]
