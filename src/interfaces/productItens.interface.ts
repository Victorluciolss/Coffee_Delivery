export interface ProductItensProps {
  id: string
  image: string
  subTitle: string
  price: string
  handleDeleteItem(id: string): void
}
