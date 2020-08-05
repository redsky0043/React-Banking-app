import React from 'react';
import { Link } from "react-router-dom";

import './FirstPage.scss';
import Start_button from '../../components/Start_button'

const FirstPage = () => (
  <div className="firstPage">
    <div className="container">
      <div className="wrapper">
        <h1 className="firstPage__header">
          Ulix
        </h1>
        <p className="firstPage__about">
          Ulix is the Visa debit card and mobile app that connected your money <br /> to friends, famiy, brands and experiences
        </p>
        <Link to='/authorization'>
          <Start_button name='Get Started' />
        </Link>
      </div>
    </div>
  </div>
);

export default FirstPage;