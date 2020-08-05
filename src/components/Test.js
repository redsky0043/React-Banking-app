import React from 'react';
import Chart from 'react-apexcharts'

import { fetchData } from '../shared/fetch_data'

class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'apexchart-example'
                },
                xaxis: {
                    categories: ['', '', '', '', '', '', '', '']
                },
            },
            series: [{
                name: 'income',
                data: [2200, 942, 100, 291, 1566, 984, 423, 1566, 873],
            }],
            posts: [],
        }
    }

    componentDidMount() {
        fetchData('income')
            .then(data => {
                this.setState({
                    posts: data
                });
            });
    };

    

    getDataOfSpend = () => {
        let [{ data }] = this.state.series;
        let dataApi = this.state.posts;
        let outputApi = dataApi.map((info) => {
            return (
                parseFloat(info.value.substring(2))
            )
        })
        return (
            data.concat(outputApi)
        )



    };

    render() {
        return (
            <div className="chart__wrapper" >
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="area"
                    width={330}
                    height={200}
                />
                {/* {this.getDataOfSpend()} */}
            </div>
        )
    }
}

export default Test;






















        // this.setState(prevState => ({
        //     ...prevState,
        //     series: {
        //         ...prevState.series,
        //         data: [...outputApi]
        //     }
        // }));