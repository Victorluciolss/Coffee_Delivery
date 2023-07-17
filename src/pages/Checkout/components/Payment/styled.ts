import styled from 'styled-components'

export const PaymentContainer = styled.div`
  width: 640px;
  height: 207px;
  font-family: Roboto;
  padding: 40px;
  margin-left: 160px;
  margin-top: 12px;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-200']};
`
export const PaymentTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  p {
    font-size: 14px;
    margin-left: 30px;
  }
`

export const PaymentMethods = styled.div`
  display: flex;
  gap: 12px;
  flex: 1;

  button {
    width: 178px;
    font-family: roboto;
    font-size: 12px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    gap: 8px;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['gray-400']};
    background: ${(props) => props.theme['gray-400']};
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      background: ${(props) => props.theme['gray-500']};
    }

    &:active {
      border: 1px solid ${(props) => props.theme['purple-medium']};
      background: ${(props) => props.theme['purple-light']};
    }
  }
`
