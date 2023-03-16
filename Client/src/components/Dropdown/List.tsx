import React, { FC } from 'react'
import { useDropdown } from './dropdown-context'
interface Props {
  children: string | React.ReactNode
}
const List: FC<Props> = ({ children }) => {
  const { show } = useDropdown()
  return (
    <>
      {show && (
        <div className='absolute left-0 z-20 w-full bg-white rounded-lg shadow-sm top-full max-h-[300px] overflow-y-auto'>
          {children}
        </div>
      )}
    </>
  )
}

export default List
