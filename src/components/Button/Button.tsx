import React, { useMemo } from 'react'

const getSizeClasses = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small': {
      return 'px-4 py-2'
    }
    case 'large': {
      return 'px-6 py-3'
    }
    default: {
      return 'px-5 py-2.5'
    }
  }
}

const getModeClasses = (isPrimary: boolean) =>
  isPrimary
    ? 'text-white bg-pink-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700'
    : 'text-slate-700 bg-transparent border-slate-700 dark:text-white dark:border-white'

const BASE_BUTTON_CLASSES =
  'cursor-pointer rounded-full border-2 font-bold leading-none inline-block'

type ButtonProps = {
  primary?: boolean
  label?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = true,
  size = 'medium',
  icon,
  iconPosition = 'left',
  label,
  ...props
}: ButtonProps) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary)
    const sizeClass = getSizeClasses(size)

    return [modeClass, sizeClass].join(' ')
  }, [primary, size])

  return (
    <button
      type="button"
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      {...props}
    >
      {!!icon ? (
        <span className="flex items-center justify-center">
          {iconPosition === 'left' && icon}
          <span className={iconPosition === 'left' ? 'ml-2' : 'mr-2'}>
            {label}
          </span>
          {iconPosition === 'right' && icon}
        </span>
      ) : label ? (
        label
      ) : (
        icon
      )}
    </button>
  )
}
