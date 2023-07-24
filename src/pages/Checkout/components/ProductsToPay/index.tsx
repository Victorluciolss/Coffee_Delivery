import {
  ItemsToPay,
  LabelContainer,
  ListToPay,
  Navlink,
  TitleToPayContainer,
  ToPayContainer,
} from './styled'
import { ProductItem } from '../ProductItem'
import { useBag } from '../../../../context/BagContext'

export function ProductsToPay() {
  const { products, deleteProductFromBag } = useBag()
  return (
    <ToPayContainer>
      <TitleToPayContainer>Cafés selecionados</TitleToPayContainer>
      <ItemsToPay>
        {products.map((productsItem, index) => (
          <ProductItem
            key={index}
            id={productsItem.id}
            image={productsItem.image}
            subTitle={productsItem.subTitle}
            price={productsItem.price}
            handleDeleteItem={deleteProductFromBag}
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
