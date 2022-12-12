import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  onClick: () => void
  className?: string
}

export const Button = (props: ButtonProps) => {
  const { children, onClick, className, ...rest } = props
  return (
    <button className={className} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
