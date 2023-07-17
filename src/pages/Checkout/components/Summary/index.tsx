import { Trash } from 'phosphor-react'
import { CoffeeContainer, ToBuy } from './styled'
import expresso from '../../../../assets/expresso.png'
import { Counter } from '../../../../components/Counter'

export function SummaryList() {
  return (
    <ToBuy>
      <div>
        <img src={expresso} alt="" />
      </div>
      <CoffeeContainer>
        <div className="nameCoffee">
          <span>Expresso Tradicional</span>
          <span className="individualPrice">R$ 9,90</span>
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
