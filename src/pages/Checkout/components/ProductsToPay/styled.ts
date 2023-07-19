import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const ToPayContainer = styled.div`
  font-family: Roboto;
  font-size: 14px;
  margin-top: 8px;
`
export const TitleToPayContainer = styled.p`
  margin-left: 6px;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme['gray-700']};
`

export const ItemsToPay = styled.div`
  width: 448px;
  padding: 30px;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px 44px;
`

export const ListToPay = styled.div`
  width: 368px;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 12px;

  .totalItems {
    display: flex;
    justify-content: space-between;
  }

  .total {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 24px;
  }
`
export const LabelContainer = styled.label`
  width: 368px;
  display: flex;
  justify-content: center;
  padding: 12px 8px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  border: ${(props) => props.theme['gray-200']};
  background-color: ${(props) => props.theme['yellow-medium']};

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const Navlink = styled(NavLink)`
  text-decoration: none;
`
