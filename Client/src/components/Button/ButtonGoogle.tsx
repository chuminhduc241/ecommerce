import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/common/ErrorComponent'

interface Props {
  text: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonGoogle: FC<Props> = ({ text = 'Sign up with google', onClick = () => {} }) => {
  return (
    <button
      className='flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border gap-x-3 border-strock rounded-xl text-text2 dark:text-white dark:border-darkStroke'
      onClick={onClick}
    >
      <img srcSet='/icon-google.png 2x' alt='icon-google' />
      <span>{text}</span>
    </button>
  )
}
export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorComponent
})
