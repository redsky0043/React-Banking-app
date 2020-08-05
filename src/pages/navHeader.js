import React from 'react';
import { Link } from "react-router-dom";

const NavHeader = (props) => {
    return (
        <div className="header">
            <Link to='/account'> 
                <button className='header__card__menu'></button>
                {/* <img className="user__body__icon" src={require('../img/carts.png')} /> */}
            </Link>
            <div className="header__title">
                {props.title}
            </div>
            <Link to='/user'>
                <button className="header__card__account" type="button"></button>
            </Link>
        </div>
    )
};

export default NavHeader;