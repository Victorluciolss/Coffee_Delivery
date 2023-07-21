import { createContext, useContext, useReducer } from 'react'
import { productsReducer } from '../reducers/products/reducer'
import { ProductProps } from '../interfaces/product.interface'

interface BagContextProviderProps {
  children?: React.ReactNode
}

interface BagContextProps {
  products: ProductProps[]
  addProductToBag(item: ProductProps): void
  deleteProductFromBag(id: string): void
}

const initialProducts: ProductProps[] = []
export const BagContext = createContext({} as BagContextProps)

export const BagContextProvider = ({ children }: BagContextProviderProps) => {
  const [products, dispatch] = useReducer(productsReducer, initialProducts)

  const addProductToBag = (item: ProductProps) => {
    dispatch({
      type: 'add',
      item,
    })
  }

  const deleteProductFromBag = (id: string) => {
    dispatch({
      type: 'delete',
      id,
    })
  }

  return (
    <BagContext.Provider
      value={{ products, addProductToBag, deleteProductFromBag }}
    >
      {children}
    </BagContext.Provider>
  )
}

export function useBag() {
  return useContext(BagContext)
}
