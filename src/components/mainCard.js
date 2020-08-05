import React from "react";

const MainCard = (props) => {
    return (
        <div className="main__card">
            <div className="main__card__top">
                <div className="main__card__balance">
                    {/* {props.value} */}
                    $ 8,402.23
                </div>
                <div className="main__card__text">
                    current ballance
                </div>
            </div>
            <div className="main__card__number">
                <div className="part">5454</div>
                <div className="part">4141</div>
                <div className="part">5687</div>
                <div className="part">6112</div>
            </div>
            <div className="button"></div>
        </div>
    );
}

export default MainCard;