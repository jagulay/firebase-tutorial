import React from "react";
import Logo from './assets/Frontend Simplified Logo.853fbda.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  return (
    <nav>
        <div className="menu__btn">
            <FontAwesomeIcon icon={faBars} />
        </div>
        <figure className="nav__logo">
            <img src={Logo} alt="" />
        </figure>
        <div className="nav__btns">
            <button className="login__btn">Login</button>
            <button className="register__btn">Register</button>
        </div>
    </nav>
  )
};

export default Home;
