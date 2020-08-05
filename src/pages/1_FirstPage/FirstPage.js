import React from 'react';
import { Link } from "react-router-dom";

import './FirstPage.scss';
import StartButton from '../../components/StartButton'

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
          <StartButton name='Get Started' />
        </Link>
      </div>
    </div>
  </div>
);

export default FirstPage;