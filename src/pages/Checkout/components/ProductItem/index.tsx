import { Trash } from 'phosphor-react'
import { CoffeeContainer, ToBuy } from './styled'

import { Counter } from '../../../../components/Counter'

interface ProductItensProps {
  id: string
  image: string
  subTitle: string
  price: string
}

export function ProductItem(props: ProductItensProps) {
  return (
    <ToBuy>
      <div>
        <img src={props.image} alt="" />
      </div>
      <CoffeeContainer>
        <div className="nameCoffee">
          <span>{props.subTitle}</span>
          <span className="individualPrice">{props.price}</span>
        </div>
        <div className="amount">
          <Counter />
          <button className="buttoCounter">
            <Trash size={16} color="#8047f8" />
            Remover
          </button>
        </div>
      </CoffeeContainer>
    </ToBuy>
  )
}
