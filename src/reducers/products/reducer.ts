import { ProductProps } from '../../interfaces/product.interface'

type ActionType = 'add' | 'delete'

interface Action<T> {
  type: ActionType
  item?: T
  id?: string
}

function productsReducer(
  products: ProductProps[],
  action: Action<ProductProps>,
): ProductProps[] {
  switch (action.type) {
    case 'add':
      if (action.item) {
        return [...products, action.item]
      }
      return products

    case 'delete':
      return products.filter((product) => product.id !== action.id)

    default:
      throw Error('Unknown action: ' + action.type)
  }
}

export { productsReducer }
