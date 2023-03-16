import React, { FC } from 'react'
import { useController } from 'react-hook-form'

interface Props {
  name: string
  type?: string
  error?: string
  control: any
  children?: string | React.ReactNode
  [rest: string]: any
}
const Textarea: FC<Props> = (props) => {
  const { control, name, placeholder = '', children, ...rest } = props
  const { field } = useController({
    control,
    name,
    defaultValue: ''
  })
  return (
    <textarea
      className='w-full px-6 py-4 text-sm font-medium bg-transparent border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white resize-none min-h-[140px] outline-none'
      placeholder={placeholder}
      {...field}
      {...rest}
    ></textarea>
  )
}

export default Textarea
