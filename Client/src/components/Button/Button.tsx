import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import classNames from '~/utils/classNames'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  className: string
  children: React.ReactNode
  isLoading?: boolean
  href?: string
  kind?: 'primary' | 'secondary' | 'ghost'
  [x: string]: any
}

const Button: FC<Props> = (props) => {
  const { type = 'button', children, kind = 'primary', className = '', isLoading = false, ...rest } = props
  const child = isLoading ? (
    <div className='w-10 h-10 border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin'></div>
  ) : (
    children
  )
  let defaultClassName = 'flex items-center justify-center p-4 text-base font-semibold rounded-xl min-h-[56px]'
  switch (kind) {
    case 'primary':
      defaultClassName = defaultClassName + ' bg-primary text-white'
      break
    case 'secondary':
      defaultClassName = defaultClassName + ' bg-secondary text-white'
      break
    case 'ghost':
      defaultClassName = defaultClassName + ' bg-secondary bg-opacity-10 text-secondary'
      break

    default:
      break
  }
  if (rest.href)
    return (
      <Link to={rest.href} className={classNames(defaultClassName, className)}>
        {child}
      </Link>
    )
  return (
    <button
      className={classNames(defaultClassName, isLoading ? 'opacity-50 pointer-events-none' : '', className)}
      type={type}
      {...rest}
    >
      {child}
    </button>
  )
}

export default Button
