import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import {
  CheckoutSuccessContainer,
  ConfirmationMessage,
  DeliveryAddress,
  Icons,
} from './styled'
import illustration from '../../assets/illustration.png'

export function CheckoutSuccess() {
  return (
    <CheckoutSuccessContainer>
      <ConfirmationMessage>
        <h1 className="mensagemSuccess">Uhu! Pedido confirmado</h1>
        <h2 className="mensagemWait">
          Agora é só aguardar que logo o café chegará até você
        </h2>
        <DeliveryAddress>
          <div className="address">
            <Icons backgroundColor="purple-medium">
              <MapPin size={16} color="#fafafa" weight="fill" />
            </Icons>
            Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre,
            RS
          </div>
          <div className="deliveryTimer">
            <Icons backgroundColor="yellow-medium">
              <Timer size={16} color="#fafafa" weight="fill" />
            </Icons>
            Previsão de entrega 20 min - 30 min
          </div>
          <div className="formOfPayment">
            <Icons backgroundColor="yellow-dark">
              <CurrencyDollar size={16} color="#fafafa" />
            </Icons>
            Pagamento na entrega Cartão de Crédito
          </div>
        </DeliveryAddress>
      </ConfirmationMessage>
      <div className="deliveryImgContainer">
        <img src={illustration} alt="" />
      </div>
    </CheckoutSuccessContainer>
  )
}
