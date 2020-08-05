import React, { Component } from 'react';

class Graph extends Component {

    constructor(props) {
      super(props);
      this.testSlider = React.createRef();
    }

    // test = () => {
    //     let currentDay = new Date().getDay();
    
    //     let test = this.testSlider.current;
    
    //     test.onclick = function (event) {
    //       let target = event.target;
    
    //       target.classList.add('active');
    //     }
    // };
  
    render() {
        return (
            <div className="toggle__spend" >
                <div className="graph"></div>
                
                <div className="days" ref={this.testSlider} onClick={this.test} >
                    <div className="day" >Mo</div>
                    <div className="day active" >Tu</div>
                    <div className="day" >We</div>
                    <div className="day" >Th</div>
                    <div className="day" >Fr</div>
                    <div className="day" >Sa</div>
                    <div className="day" >Su</div>
                </div>

            </div>
        )
    }
}

export default Graph;