import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Ballance.scss';
import NavHeader from '../../components/NavHeader.js'
import { CostList } from '../../components/CostList'
import { TotalBallance } from '../../components/TotalBallance'
import DataForGraph from '../../components/DataForGraph'
import { fetchData } from '../../shared/fetch_data'

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

          <DataForGraph />

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

