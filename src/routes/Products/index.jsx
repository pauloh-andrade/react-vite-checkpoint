import { Link } from 'react-router-dom'
import { AiFillEdit as Edit } from 'react-icons/ai'

import './products.css'
import productList from '../../mocks/productList'

const Products = () => {
  return (
    <main>
      <h1>Produtos</h1>
      {productList.map((prod) => (
        <div key={prod.id}>
          {`ID: ${prod.id} | ${prod.name} | ${prod.description} | R$${prod.price},00 | `}
          <Link to={`/products/update/${prod.id} `}>
            <button>
              <Edit />
            </button>
          </Link>
        </div>
      ))}
    </main>
  )
}

export default Products
