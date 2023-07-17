import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import cupofcoffee from '../../assets/cupofcoffee.svg'
import {
  BannerContainer,
  IconWrapper,
  InfContainer,
  MenuListContainer,
  TextContainerInf,
  TitleContainer,
  TitleListContainer,
} from './styles'
import { ProductsList } from './components/ProductsList'

export function Home() {
  return (
    <>
      <BannerContainer>
        <InfContainer>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleContainer>
          <TextContainerInf>
            <div>
              <IconWrapper backgroundColor="yellow-dark">
                <ShoppingCart size={16} color="#FFF" weight="fill" />
              </IconWrapper>
              Compra simples e segura
            </div>
            <div>
              <IconWrapper backgroundColor="gray-700">
                <Package size={16} color="#FFF" weight="fill" />
              </IconWrapper>
              Embalagem mantém o café intacto
            </div>
            <div>
              <IconWrapper backgroundColor="yellow-medium">
                <Timer size={16} color="#FFF" weight="fill" />
              </IconWrapper>
              Entrega rápida e rastreada
            </div>
            <div>
              <IconWrapper backgroundColor="purple-medium">
                <Coffee size={16} color="#FFF" weight="fill" />
              </IconWrapper>
              O café chega fresquinho até você
            </div>
          </TextContainerInf>
        </InfContainer>
        <img
          src={cupofcoffee}
          alt="Imagem de um copo de café termico"
          color="transparent"
        />
      </BannerContainer>

      <TitleListContainer>
        <h1 className="title">Nossos cafés</h1>
      </TitleListContainer>
      <MenuListContainer>
        <ProductsList />
        <ProductsList />
        <ProductsList />
        <ProductsList />
        <ProductsList />
        <ProductsList />
        <ProductsList />
        <ProductsList />
        <ProductsList />
        <ProductsList />
        <ProductsList />
        <ProductsList />
        <ProductsList />
        <ProductsList />
      </MenuListContainer>
    </>
  )
}
