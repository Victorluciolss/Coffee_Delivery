import { Payment } from './components/Payment'
import { ProductsToPay } from './components/ProductsToPay'
import {
  ZipCodeInput,
  CheckoutContainer,
  CityInput,
  ComplementDeliveryInformation,
  ComplementInput,
  DeliveryInformation,
  FormContainer,
  FormTitle,
  NeighborhoodInput,
  NumberInput,
  PlaceDeliveryInformation,
  RoadInput,
  StateInput,
  Wrapper,
} from './styled'
import { MapPinLine } from 'phosphor-react'

import { useForm } from 'react-hook-form'

export function Checkout() {
  const { register, handleSubmit } = useForm()

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
          <ZipCodeInput
            id="zipCode"
            type="text"
            placeholder="CEP"
            {...register('zipCode')}
          />
          <RoadInput
            id="road"
            type="text"
            placeholder="Rua"
            {...register('road')}
          />
          <NumberInput
            id="number"
            type="text"
            placeholder="Número"
            {...register('Num')}
          />
          <ComplementInput
            id="complement"
            type="text"
            placeholder="Complemento - opcional"
            {...register('complement')}
          />
          <NeighborhoodInput
            id="neighborhood"
            type="text"
            placeholder="Bairro"
            {...register('neighborhood')}
          />
          <CityInput
            id="city"
            type="text"
            placeholder="Cidade"
            {...register('city')}
          />
          <StateInput
            id="state"
            type="text"
            placeholder="UF"
            {...register('state')}
          />
        </FormContainer>
        <Payment />
      </Wrapper>
      <ProductsToPay />
    </CheckoutContainer>
  )
}
