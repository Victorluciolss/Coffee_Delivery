import { styled } from 'styled-components'

export const CounterContainer = styled.div`
  width: 72px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-400']};

  button {
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
  }

  .number {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme['gray-900']};
  }

  .sumSymbols {
    color: ${(props) => props.theme['purple-medium']};
  }

  .sumSymbols:hover {
    cursor: pointer;
    color: ${(props) => props.theme['purple-dark']};
  }
`
