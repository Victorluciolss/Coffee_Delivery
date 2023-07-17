import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentContainer, PaymentMethods, PaymentTitle } from './styled'

export function Payment() {
  return (
    <PaymentContainer>
      <PaymentTitle>
        <span>
          <CurrencyDollar size={22} color="#8047f8" />
          Pagamento
        </span>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </PaymentTitle>
      <PaymentMethods>
        <button>
          <CreditCard size={16} color="#8047f8" />
          Cartão de crédito
        </button>
        <button>
          <Bank size={16} color="#8047f8" />
          cartão de débito
        </button>
        <button>
          <Money size={16} color="#8047f8" />
          dinheiro
        </button>
      </PaymentMethods>
    </PaymentContainer>
  )
}
