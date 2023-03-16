import { createContext, useContext, useState, Dispatch, FC } from 'react'

interface Actions {
  type: string
  value: any
}
interface Props {
  children: string | React.ReactNode
}
type DropDownCompositionType = {
  Option: FC
  Select: FC
  List: FC
}

const DropdownContext = createContext<any>({})
const DropdownProvider: FC<Props & DropDownCompositionType> = ({ children, ...rest }) => {
  const [show, setShow] = useState<boolean>(false)
  const toggle = () => {
    setShow(!show)
  }
  const values = { show, setShow, toggle }
  return (
    <DropdownContext.Provider value={values} {...rest}>
      {children}
    </DropdownContext.Provider>
  )
}
function useDropdown() {
  const context = useContext(DropdownContext)
  if (typeof context === 'undefined') throw new Error('useDropdown must be used within DropdownProvider')
  return context
}
export { useDropdown, DropdownProvider }
