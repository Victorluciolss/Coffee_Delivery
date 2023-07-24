import { styled } from 'styled-components'

export const BannerContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`
export const InfContainer = styled.div`
  width: 588px;
  height: 124;
`
export const TitleContainer = styled.div`
  h1 {
    font-size: 48px;
    font-weight: 800;
  }

  p {
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 400;
    margin-top: 16px;
  }
`
export const TextContainerInf = styled.div`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;

  margin-top: 66px;
  gap: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

type IconWrapperProps = {
  $backgroundColor:
    | 'yellow-dark'
    | 'gray-700'
    | 'yellow-medium'
    | 'purple-medium'
}

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50px;
  background-color: ${(props) => props.theme[props.$backgroundColor]};
`
export const TitleListContainer = styled.div`
  width: 193px;
  height: 42px;
  margin-top: 54px;
  margin-left: 160px;
`

export const MenuListContainer = styled.h1`
  width: 1440px;
  height: 1645px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 32px;
  padding: 32px 160px 157px 160px;
  margin-top: 32px;
`
