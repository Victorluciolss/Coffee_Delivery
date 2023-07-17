import { CatalogContainer, PriceContainer, ShoppingCartSimple } from './styles'
import expresso from '../../../../assets/expresso.png'
import { Counter } from '../../../../components/Counter'

export function ProductsList() {
  return (
    <>
      <CatalogContainer>
        <img src={expresso} alt="" />
        <div className="badge">TRADICIONAL</div>
        <h2>Espresso Tradicional</h2>
        <p>O tradicional café feito com água quente e grãos moídos</p>
        <PriceContainer>
          <span className="money">R$ 9,90</span>
          <Counter />
          <ShoppingCartSimple size={22} color="#FFF" weight="fill" />
        </PriceContainer>
      </CatalogContainer>
    </>
  )
}
