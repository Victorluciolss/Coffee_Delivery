import { styled } from 'styled-components'

export const ToBuy = styled.div`
  width: 368px;
  background: ${(props) => props.theme['gray-200']};
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px 4px;
  font-family: roboto;
  color: ${(props) => props.theme['gray-800']};
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  img {
    width: 64px;
    height: 64px;
  }

  span {
    display: flex;
  }

  .amount {
    display: flex;
    gap: 8px;
    border: 1px solid ${(props) => props.theme['gray-200']};
  }
`
export const CoffeeContainer = styled.div`
  width: 280px;
  height: 61px;
  display: flex;
  flex-direction: column;

  .nameCoffee {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    gap: 8px;
  }

  .buttoCounter {
    width: 100px;
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: roboto;
    font-size: 12px;
    text-transform: uppercase;
    padding: 0 8px;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['gray-200']};
    background: ${(props) => props.theme['gray-400']};
  }

  .individualPrice {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.theme['gray-700']};
  }
`
