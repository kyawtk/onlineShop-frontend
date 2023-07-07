import { Link } from "react-router-dom"
import './Home.scss'
import {FaArrowRight} from 'react-icons/fa'
const Home = () => {
  return (
    <div className="home">
        <Link to='/shop'>Go shopping <FaArrowRight/></Link>
    </div>
  )
}

export default Home