import { SummaryList } from '../Summary'
import {
  ItemsToPay,
  LabelContainer,
  ListToPay,
  Navlink,
  TitleToPayContainer,
  ToPayContainer,
} from './styled'

export function ProductsToPay() {
  return (
    <ToPayContainer>
      <TitleToPayContainer>Cafés selecionados</TitleToPayContainer>
      <ItemsToPay>
        <SummaryList />
        <SummaryList />
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
