import { useParams } from 'react-router-dom'

import './updateProducts.css'
import productList from '../../mocks/productList'

const UpdateProducts = () => {
  const { id } = useParams()

  const product = productList.filter((prod) => {
    if (prod.id == id) {
      return prod
    }
  })
  return (
    <main>
      <h1>Editando o produto</h1>
      <h2>Produto</h2>
      <p>Nome : {product[0].name}</p>
      <p>Preço : {product[0].price}</p>
    </main>
  )
}

export default UpdateProducts
