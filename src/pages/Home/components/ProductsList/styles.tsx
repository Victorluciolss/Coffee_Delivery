import { ShoppingCartSimple as ShoppingCartSimpleIcon } from 'phosphor-react'
import { styled } from 'styled-components'

export const TitleContainer = styled.div`
  width: 1120px;
  height: 1360px;
  border: 1px solid red;

  h1 {
    font-size: 32px;
    font-weight: 800;
  }
`

export const CatalogContainer = styled.div`
  width: 256px;
  height: 310px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  border-radius: 6px 36px;
  padding: 20px;
  background: ${(props) => props.theme['gray-200']};

  .badge {
    font-family: Roboto;
    font-size: 10px;
    font-weight: 700;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 50px;
    padding: 4px 8px;
    margin-top: 16px;
  }

  img {
    width: 120px;
    height: 120px;
    margin-top: -30px;
  }

  h2 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 16px;
  }

  p {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme['gray-600']};
    margin-top: 8px;
  }
`

export const PriceContainer = styled.label`
  width: 208px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 33px;

  .money {
    width: 67px;
    height: 31px;
    display: flex;
    align-items: center;
    justify-self: center;
    font-size: 19px;
    font-weight: 400;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const ShoppingCartSimple = styled(ShoppingCartSimpleIcon)`
  width: 38px;
  height: 38px;
  border-radius: 6px;
  padding: 8px;
  background: ${(props) => props.theme['purple-dark']};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['purple-medium']};
  }
`
