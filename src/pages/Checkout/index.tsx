import { Payment } from './components/Payment'
import { ProductsToPay } from './components/ProductsToPay'
import {
  CepInput,
  CheckoutContainer,
  CityInput,
  ComplementDeliveryInformation,
  ComplementInput,
  DeliveryInformation,
  FormContainer,
  FormTitle,
  InputNeighborhood,
  NumberInput,
  PlaceDeliveryInformation,
  RoadInput,
  StateInput,
  Wrapper,
} from './styled'
import { MapPinLine } from 'phosphor-react'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Wrapper>
        <FormTitle>Complete seu pedido</FormTitle>
        <FormContainer>
          <DeliveryInformation>
            <ComplementDeliveryInformation>
              <MapPinLine size={22} color="#c47f17" />
              Endereço de Entrega
            </ComplementDeliveryInformation>
            <PlaceDeliveryInformation>
              Informe o endereço onde deseja receber seu pedido
            </PlaceDeliveryInformation>
          </DeliveryInformation>
          <CepInput type="text" placeholder="CEP" />
          <RoadInput type="text" placeholder="Rua" />
          <NumberInput type="text" placeholder="Número" />
          <ComplementInput type="text" placeholder="Complemento - opcional" />
          <InputNeighborhood type="text" placeholder="Bairro" />
          <CityInput type="text" placeholder="Cidade" />
          <StateInput type="text" placeholder="UF" />
        </FormContainer>
        <Payment />
      </Wrapper>
      <ProductsToPay />
    </CheckoutContainer>
  )
}
