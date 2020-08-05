import React from 'react';
import { Link } from "react-router-dom";

import './user.scss';
import NavHeader from '../navHeader.js'

 
const User = () => {

    return (
      <div>
        <div className="container">
          <NavHeader title='profile' />
          <div className="user__photo"></div>
          <div className="user__title">
            <span className='user__title__text'>Julianna Didyk</span>
          </div>
        </div>
        <div className="user__body">
          <div className="user__body__cards">
            <div className="user__body__title">
              Cards
            </div>
            <Link to="/account" >
              <div className="user__body__row">
                <div className="user__body__icon"></div>
                <div className="user__body__name">
                  Visa 5454
                </div>
              </div>
            </Link>
            <Link to="/account" >
              <div className="user__body__row">
                <div className="user__body__icon"></div>
                <div className="user__body__name">
                  Visa 6372
                </div>
              </div>
            </Link>
          </div>
          <div className="user__body__cards">
            <div className="user__body__title">
              Settigs
            </div>
            <div className="user__body__row">
              <div className="user__body__icon__add"></div>
              <div className="user__body__name">
                Add Cards
              </div>
            </div>
            <div className="user__body__row">
              <div className="user__body__icon__password"></div>
              <div className="user__body__name">
                Change Password
              </div>
            </div>
          </div>
        </div>
        <Link to="/" > 
          <div className="user__logout">
            Logout
          </div>     
        </Link>
      </div>
    ) 
};
   
export default User