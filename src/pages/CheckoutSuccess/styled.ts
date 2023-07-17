import styled from 'styled-components'

export const CheckoutSuccessContainer = styled.div`
  display: flex;
  margin-left: 160px;
  gap: 102px;

  .deliveryImgContainer {
    margin-top: 160px;
  }
`
export const ConfirmationMessage = styled.div`
  display: flex;
  flex-direction: column;
  .mensagemSuccess {
    font-weight: 800;
    margin-bottom: 4px;
    color: ${(props) => props.theme['yellow-dark']};
  }
  .mensagemWait {
    font-family: roboto;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 40px;
  }
`

export const DeliveryAddress = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  padding: 40px;
  position: relative;
  background: ${(props) => `linear-gradient(#fff, #fff) padding-box,
    linear-gradient(90deg, ${props.theme['yellow-dark']}, ${props.theme['purple-medium']}) border-box`};
  border: 1px solid transparent;
  border-radius: 6px 36px;

  .address {
    width: 350px;
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    gap: 20px;
  }
  .deliveryTimer {
    width: 185px;
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    gap: 20px;
  }
  .formOfPayment {
    width: 200px;
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    gap: 20px;
  }
`

type IconProps = {
  backgroundColor: 'yellow-dark' | 'yellow-medium' | 'purple-medium'
}

export const Icons = styled.div<IconProps>`
  width: 32px;
  height: 32px;
  padding: 8px;
  border-radius: 100px;
  background-color: ${(props) => props.theme[props.backgroundColor]};
`
