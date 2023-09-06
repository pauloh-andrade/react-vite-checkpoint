import { useParams } from 'react-router-dom'

import './updateProducts.css'
import productList from '../../mocks/productList'
import { useState } from 'react'

const UpdateProducts = () => {
  const { id } = useParams()

  const productResponse = productList.filter((prod) => prod.id == id)[0]

  const [product, setProduct] = useState()

  setProduct(productResponse)
  
  return (
    <main>
      <h1>Editando o produto</h1>
      <h2>Produto</h2>
      <div>
        <form>
          <fieldset>
            <legend>Produto Selecionado</legend>
            <div>
              <label htmlFor="name">Nome do Produto: </label>
              <input type='text' name='name' value={product?.name} defaultValue={product.name}/>
            </div>
            <div>
              <label htmlFor="description">Descrição do Produto: </label>
              <input type='text' name='description' value={product?.description} defaultValue={product.description}/>
            </div>
            <div>
              <label htmlFor="price">Preço do Produto: </label>
              <input type='text' name='price' value={product?.price} defaultValue={product.price}/>
            </div>
          </fieldset>
        </form>
      </div>
      <p>Nome: {product.name}</p>
      <p>Preço: {product.price}</p>
      <p>Descrição: {product.description} </p>
    </main>
  )
}

export default UpdateProducts
