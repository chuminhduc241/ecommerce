import React, { FC } from 'react'
import { DropdownProvider } from './dropdown-context'
import List from './List'
import Select from './Select'

interface Props {
  children: string | React.ReactNode
  [k: string]: any
}

const Dropdown: FC<Props & any> = ({ children, ...props }): JSX.Element => {
  return (
    <DropdownProvider {...props}>
      <div className='relative inline-block w-full'>{children}</div>
    </DropdownProvider>
  )
}

export default Dropdown
