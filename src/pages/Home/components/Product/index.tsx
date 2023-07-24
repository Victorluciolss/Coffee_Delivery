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
import { ProductProps } from '../../../../interfaces/product.interface'

export interface TypeOfProduct extends ProductProps {
  handleAddBag(product: ProductProps): void
}

export function Product({ handleAddBag, ...product }: TypeOfProduct) {
  const { image, variants, subTitle, description, price } = product
  return (
    <>
      <CatalogContainer>
        <img src={image} alt="" />
        <VariantWrapper>
          {variants.map((variant, index) => (
            <TitleCoffee key={index}>{variant}</TitleCoffee>
          ))}
        </VariantWrapper>
        <SubTitleCoffee>{subTitle}</SubTitleCoffee>
        <InformCoffee>{description}</InformCoffee>
        <PriceContainer>
          <CoffeePrice>{price}</CoffeePrice>
          <Counter />
          <ShoppingCartSimple
            size={22}
            color="#FFF"
            onClick={() => handleAddBag(product)}
          />
        </PriceContainer>
      </CatalogContainer>
    </>
  )
}
