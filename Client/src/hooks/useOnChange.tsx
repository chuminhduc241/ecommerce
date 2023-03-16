import React, { useState } from 'react'
import { debounce } from 'lodash'

export default function useOnChange(time = 0) {
  const [value, setValue] = useState<string | null>(null)
  const handleOnChange = debounce((e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }, time)
  return [value, handleOnChange]
}
