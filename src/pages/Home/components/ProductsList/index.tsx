import {
  CatalogContainer,
  CoffeePrice,
  InformCoffee,
  PriceContainer,
  ShoppingCartSimple,
  SubTitleCoffee,
  TitleCoffee,
  VariantWrapper,
} from './styles'
import { Counter } from '../../../../components/Counter'

interface TypeOfCoffee {
  id: string
  imgage?: string
  variants: string[]
  subTitle: string
  description: string
  price: string
}

export function ProductsList(props: TypeOfCoffee) {
  return (
    <>
      <CatalogContainer>
        <img src={props.imgage} alt="" />
        <VariantWrapper>
          {props.variants.map((variant, index) => (
            <TitleCoffee key={index}>{variant}</TitleCoffee>
          ))}
        </VariantWrapper>
        <SubTitleCoffee>{props.subTitle}</SubTitleCoffee>
        <InformCoffee>{props.description}</InformCoffee>
        <PriceContainer>
          <CoffeePrice>{props.price}</CoffeePrice>
          <Counter />
          <ShoppingCartSimple size={22} color="#FFF" weight="fill" />
        </PriceContainer>
      </CatalogContainer>
    </>
  )
}
