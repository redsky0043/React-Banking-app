import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './ballance.scss';
import NavHeader from '../../components/NavHeader.js'
import { CostList } from '../../components/CostList'
import { TotalBallance } from '../../components/TotalBallance'
import { fetchData } from '../../shared/fetch_data'

class Spend extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  };

  componentDidMount() {
    fetchData('spend')
      .then(data => {
        this.setState({ posts: data });
      });
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="ballance">
        <div className="container">
          <NavHeader title='ulix' />
          <div className="ballance__icon">
            <div className="ballance__icon__text">
              total expenses
            </div>
            <div className="ballance__icon__value">
              <TotalBallance apiData={posts} />
            </div>
          </div>
          <div className="toggle">
            <div >
              <Link to='/ballance' className="toggle--not_active">
                Income
              </Link>
            </div>
            <div>
              Spend
            </div>
          </div>
          {/* <Graph /> */}
          <div className="ballance__title">
            expenses
          </div>
          <CostList posts={posts} />
        </div>
      </div>
    )
  }
};

export default Spend

