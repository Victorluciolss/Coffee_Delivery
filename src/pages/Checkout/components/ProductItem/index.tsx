import { Trash } from 'phosphor-react'
import { CoffeeContainer, ToBuy } from './styled'

import { Counter } from '../../../../components/Counter'
import { ProductItensProps } from '../../../../interfaces/productItens.interface'

export function ProductItem({
  image,
  subTitle,
  price,
  id,
  handleDeleteItem,
}: ProductItensProps) {
  return (
    <ToBuy>
      <div>
        <img src={image} alt="" />
      </div>
      <CoffeeContainer>
        <div className="nameCoffee">
          <span>{subTitle}</span>
          <span className="individualPrice">{price}</span>
        </div>
        <div className="amount">
          <Counter />
          <button className="buttoCounter" onClick={() => handleDeleteItem(id)}>
            <Trash size={16} color="#8047f8" />
            Remover
          </button>
        </div>
      </CoffeeContainer>
    </ToBuy>
  )
}
