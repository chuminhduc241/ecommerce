import React, { FC } from 'react'

interface Props {
  children: React.ReactNode
}

const FormGroup: FC<Props> = ({ children }) => {
  return <div className='flex flex-col mb-4 lg:mb-6 gap-y-2 lg:gap-y-3'>{children}</div>
}

export default FormGroup
