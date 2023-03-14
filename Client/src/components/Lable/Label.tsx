import React, { FC } from 'react'
import PropTypes from 'prop-types'
import classNames from '~/utils/classNames'

interface Props {
  children: string | React.ReactNode
  className?: string
  htmlFor?: string
}

const Label: FC<Props> = ({ children, htmlFor, className }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames(
        `inline-block self-start text-sm font-medium cursor-pointer text-text2 dark:text-text3 ${className} `
      )}
    >
      {children}
    </label>
  )
}

export default Label
