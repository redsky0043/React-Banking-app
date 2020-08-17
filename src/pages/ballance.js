import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './ballance.scss';
import NavHeader from './navHeader.js'
import { fetchData } from '../shared/fetch_data'
import { CostList } from '../components/costList'
import { TotalBallance } from '../components/totalBallance'
import Test from './test'

class Ballance extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  };

  componentDidMount() {
    fetchData('income')
      .then(data => {
        this.setState({ posts: data });
      });
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="ballance">
        <div className="container">

          <NavHeader display='none' title='ulix' />

          <div className="ballance__icon">
            <div className="ballance__icon__text">
              total income
            </div>
            <div className="ballance__icon__value">
              <TotalBallance apiData={posts} />
            </div>
          </div>

          <div className="toggle">
            <div >
              Income
            </div>
            <div >
              <Link to='/spend' className="toggle--not_active">
                Spend
              </Link>
            </div>
          </div>

          <Test />

          <div className="ballance__title">
            Income
          </div>

          <CostList posts={posts} />

        </div>
      </div>
    )
  }
};

export default Ballance

