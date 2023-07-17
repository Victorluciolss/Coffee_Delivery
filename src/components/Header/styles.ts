import styled from 'styled-components'

export const HeaderContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 160px;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme['purple-light']};
    padding: 8px;
    border-radius: 6px;
  }

  span {
    font-family: Roboto;
    font-weight: 400;
    color: ${(props) => props.theme['purple-dark']};
  }

  label {
    border-radius: 6px;
    padding: 8px;
    background: ${(props) => props.theme['yellow-light']};

    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
