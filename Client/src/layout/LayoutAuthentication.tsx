import React from 'react'
import { Link } from 'react-router-dom'
interface Props {
  children?: string | React.ReactNode
  heading: string
}
const LayoutAuthentication = ({ children, heading }: Props) => {
  return (
    <div className='w-full min-h-screen p-10 bg-lite relative isolate'>
      <img
        src='/ellipse.png'
        className='hidden lg:block pointer-events-none  absolute top-0 bottom-0 left-0 right-0 w-full h-full z-[-1] mx-auto'
        alt='bg'
      />
      <Link to='/'>
        <img srcSet='/logo.png 2x' alt='app' className='inline-block mb-5 lg:mb-16' />
      </Link>
      <div className='w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto'>
        <h1 className='font-semibold text-lg mb-1 lg:text-xl lg:mb-3 text-text1 text-center'>{heading}</h1>
        {children}
      </div>
    </div>
  )
}

export default LayoutAuthentication
