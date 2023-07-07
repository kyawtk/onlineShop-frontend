import {  useContext } from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import './Navbar.scss'
import { CartContext } from '../context/cartContext'
const Navbar = () => {
  const {numberOfItems} = useContext(CartContext)
  return (
    <nav>
        <Link to='/'>
        <h1>Logo</h1></Link>
       <ul>
        <li>
            <Link to='/shop'>Shop</Link>
        </li>
        <li>
              <Link to='/cart'><FaShoppingCart/> <span>{numberOfItems}</span></Link>
        </li>
       </ul>
    </nav>
  )
}

export default Navbar