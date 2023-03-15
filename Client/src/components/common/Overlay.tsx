import React, { FC } from 'react'

const Overlay: FC = () => {
  return <div className='fixed inset-0 z-40 invisible bg-black opacity-0 overlay bg-opacity-10'></div>
}

export default Overlay
