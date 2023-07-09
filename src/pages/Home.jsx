import { Link } from "react-router-dom";
import "./Home.scss";
import { FaArrowRight, FaBalanceScaleLeft } from "react-icons/fa";
import blackshirt from "../assets/images/shirt.png";
import whiteshirt from "../assets/images/whiteshirt.png";
import redshirt from "../assets/images/redshirt.png";
import { motion } from "framer-motion";
const Home = () => {
  const cloth = {
    goleft: {
      x: -100,
      opacity:1,
     
     
      transition:{
        duration:1,
      }
     
    },
    goright: {
      opacity:1,
      x: 100,
      transition:{
      duration: 1
     }
    },
  };
  return (
    <motion.div
    transition={{
      duration:0.5
    }}
    exit={{
     
      opacity:0,

    }}  className="home" layout>
      <motion.article
      initial={
        {opacity:0,
        y:-500
        }
      }
      animate={{
        opacity:1,
        y:0
      }}
      transition={{
        delay:0.3,
        duration:1
      }}
      
      className="text">
        <h1>Discover Products for a life well lived.</h1>
        <Link to="/shop">
          Go shopping <FaArrowRight />
        </Link>
      </motion.article>
      <div className="hero">
        <motion.img initial={{
          opacity:0,
        }} variants={cloth} whileHover={{scale:1.2}} animate="goleft" src={blackshirt} alt="" />
        <motion.img initial={{
          opacity:0,
        }}animate={{
          opacity:1
        }} src={redshirt} whileHover={{scale:1.2}}  alt="" />
        <motion.img initial={{
          opacity:0,
        }} variants={cloth} whileHover={{scale:1.2}}  animate="goright" src={whiteshirt} alt="" />
      </div>
    </motion.div>
  );
};

export default Home;
