import {
  ItemsToPay,
  LabelContainer,
  ListToPay,
  Navlink,
  TitleToPayContainer,
  ToPayContainer,
} from './styled'
import { v4 as uuidv4 } from 'uuid'
import expresso from '../../../../assets/expresso.png'
import { ProductItem } from '../ProductItem'

export function ProductsToPay() {
  const productsItens = [
    {
      id: uuidv4(),
      image: expresso,
      subTitle: 'Expresso Tradicional',
      price: 'R$ 9,90',
    },
  ]
  return (
    <ToPayContainer>
      <TitleToPayContainer>Cafés selecionados</TitleToPayContainer>
      <ItemsToPay>
        {productsItens.map((productsItem, index) => (
          <ProductItem
            key={index}
            id={productsItem.id}
            image={productsItem.image}
            subTitle={productsItem.subTitle}
            price={productsItem.price}
          />
        ))}

        <ListToPay>
          <div className="totalItems">
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </div>
          <div className="totalItems">
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>R$ 33,20</span>
          </div>
        </ListToPay>
        <Navlink
          className="navlink"
          to="/CheckoutSuccess"
          title="CheckoutSuccess"
        >
          <LabelContainer>confirmar pedido</LabelContainer>
        </Navlink>
      </ItemsToPay>
    </ToPayContainer>
  )
}
