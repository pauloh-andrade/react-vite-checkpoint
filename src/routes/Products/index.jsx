import { Link } from 'react-router-dom'
import { AiFillEdit as Edit, AiOutlineDelete as Delete } from 'react-icons/ai'

import './products.css'
import productList from '../../mocks/productList'

const Products = () => {
  return (
    <main>
        <h1>LISTA DE PRODUTOS</h1>

      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Editar/Excluir</th>
              </tr>
          </thead>
          <tbody>
            {productList.map((prod, index) => (
              <tr key={index}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.description}</td>
                <td>{prod.price}</td>
                <td><Link to={`/products/update/${prod.id}`}><Edit /></Link> | <Link to={`/products/delete/${prod.id}`}><Delete/></Link></td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">Total de Produtos: {productList.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>

    </main>
  )
}

export default Products
