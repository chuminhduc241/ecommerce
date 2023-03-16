import React, { FC } from 'react'
interface Props {
  children: React.ReactNode
}

const FormRow: FC<Props> = ({ children }) => {
  return <div className='grid grid-cols-2 gap-x-[45px]'>{children}</div>
}

export default FormRow
