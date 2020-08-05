import React from 'react';
import { Link } from "react-router-dom";

import './account.scss';
import MainCard from '../components/mainCard'
import SecondCard from '../components/secondCard.js'
import NavHeader from '../pages/navHeader.js'
import { fetchData } from '../shared/fetch_data'
import { CostList } from '../components/costList'
// import { TotalBallance } from '../components/totalBallance'


class Account extends React.Component {
    constructor(props) {
        super(props);
        this.testSlider = React.createRef();
        this.state = {
            posts: [],
        }
    }

    sliderCard = () => {
        let left = 0;
        const row = this.testSlider.current;
        if (row.style.left === '-290px') {
            left = 0;
            row.style.left = left + 'px';
        } else {
            left = left - 290;
            row.style.left = left + 'px';
        }
    }

    componentDidMount() {
        fetchData('spend')
            .then(data => {
                this.setState({ posts: data });
            })
    };

    render() {
        const { posts } = this.state;

        return (
            <div className="account">
                <div className="container">
                    <NavHeader title='ulix' />
                    <div className="slider">
                        <div className="slider__row" ref={this.testSlider} >
                            <Link to='/ballance'>
                                <MainCard />
                            </Link>
                            <div onClick={this.sliderCard} >
                                <SecondCard />
                            </div>
                        </div>
                    </div>
                    <div className="title">
                        send money
                    </div>
                    <CostList posts={posts} />
                </div>
            </div>
        )
    }
}

export default Account