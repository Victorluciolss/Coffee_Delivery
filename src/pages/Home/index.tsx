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
import { v4 as uuidv4 } from 'uuid'
import expresso from '../../assets/expresso.png'
import americano from '../../assets/americano.png'
import arabe from '../../assets/arabe.png'
import cafeComLeite from '../../assets/cafeComLeite.png'
import capuccino from '../../assets/capuccino.png'
import chocolateQuente from '../../assets/chocolateQuente.png'
import cubano from '../../assets/cubano.png'
import expressoCremoso from '../../assets/expressoCremoso.png'
import havaiano from '../../assets/havaiano.png'
import irlandes from '../../assets/irlandes.png'
import latte from '../../assets/latte.png'
import macchiato from '../../assets/macchiato.png'
import mochaccino from '../../assets/mochaccino.png'
import cafeGelato from '../../assets/cafeGelado.png'

export function Home() {
  const products = [
    {
      id: uuidv4(),
      imgage: expresso,
      variants: ['Tradicional'],
      subTitle: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 'R$ 9,90',
    },
    {
      id: uuidv4(),
      imgage: americano,
      variants: ['Tradicional'],
      subTitle: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 'R$ 9,90',
    },
    {
      id: uuidv4(),
      imgage: expressoCremoso,
      variants: ['Tradicional'],
      subTitle: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 'R$ 9,90',
    },

    {
      id: uuidv4(),
      imgage: cafeGelato,
      variants: ['Tradicional ', 'Gelado'],
      subTitle: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 'R$ 9,90',
    },
    {
      id: uuidv4(),
      imgage: cafeComLeite,
      variants: ['Tradicional', 'Com Leite'],
      subTitle: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 'R$ 9,90',
    },
    {
      id: uuidv4(),
      imgage: latte,
      variants: ['Tradicional', 'Com Leite'],
      subTitle: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 'R$ 9,90',
    },
    {
      id: uuidv4(),
      imgage: capuccino,
      variants: ['Tradicional', 'Com Leite'],
      subTitle: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 'R$ 9,90',
    },
    {
      id: uuidv4(),
      imgage: macchiato,
      variants: ['Tradicional', 'Com Leite'],
      subTitle: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 'R$ 9,90',
    },
    {
      id: uuidv4(),
      imgage: mochaccino,
      variants: ['Tradicional', 'Com Leite'],
      subTitle: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 'R$ 9,90',
    },
    {
      id: uuidv4(),
      imgage: chocolateQuente,
      variants: ['Especial', 'com leite'],
      subTitle: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 'R$ 9,90',
    },
    {
      id: uuidv4(),
      imgage: cubano,
      variants: ['Especial', 'Alcoólico', 'gelado'],
      subTitle: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 'R$ 9,90',
    },
    {
      id: uuidv4(),
      imgage: havaiano,
      variants: ['Especial'],
      subTitle: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 'R$ 9,90',
    },
    {
      id: uuidv4(),
      imgage: arabe,
      variants: ['Especial'],
      subTitle: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 'R$ 9,90',
    },

    {
      id: uuidv4(),
      imgage: irlandes,
      variants: ['Especial', 'Alcoólico'],
      subTitle: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 'R$ 9,90',
    },
  ]

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
        {products.map((product, index) => (
          <ProductsList
            key={index}
            id={product.id}
            variants={product.variants}
            description={product.description}
            price={product.price}
            subTitle={product.subTitle}
            imgage={product.imgage}
          />
        ))}
      </MenuListContainer>
    </>
  )
}
