import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 32px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const FormTitle = styled.div`
  margin-left: 160px;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme['gray-700']};
`

export const FormContainer = styled.form`
  width: 640px;
  display: grid;
  grid-template-columns: 200px 300px 60px;
  justify-content: center;
  margin-left: 160px;
  padding: 40px;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-200']};
  gap: 16px;

  :focus {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme['gray-700']};
    border: 1px solid ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['gray-300']};
  }
`
export const DeliveryInformation = styled(FormContainer)`
  width: 530px;
  height: 21px;
  display: flex;
  flex-direction: column;
  margin-left: -22px;
  gap: 0;
  padding: 25px;
  font-family: roboto;
  margin-top: -16px;
  margin-bottom: 16px;
`
export const ComplementDeliveryInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const PlaceDeliveryInformation = styled.p`
  font-size: 14px;
  margin-left: 30px;
`
const Input = styled.input`
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 4px;
  background: ${(props) => props.theme['gray-300']};
  padding: 8px;
  font-family: Roboto;
  font-size: 14px;
  color: ${(props) => props.theme['gray-700']};
`
export const CepInput = styled(Input)`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`

export const RoadInput = styled(Input)`
  grid-column: 1 / 4;
  grid-row: 3 / 4;
`
export const NumberInput = styled(Input)`
  grid-column: 1 /2;
  grid-row: 4 / 5;
`
export const ComplementInput = styled(Input)`
  grid-column: 2 / 4;
  grid-row: 4/ 5;
`
export const InputNeighborhood = styled(Input)`
  grid-column: 1 / 2;
  grid-row: 5 / 6;
`
export const CityInput = styled(Input)`
  grid-column: 2 / 3;
  grid-row: 5 / 6;
`
export const StateInput = styled(Input)`
  grid-column: 3 / 4;
  grid-row: 5 / 6;
`
