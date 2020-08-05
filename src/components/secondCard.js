import React from "react";

const SecondCard = () => {
    return (
        <div className="main__card second__card" > 
            <div className="main__card__top">
                <div className="main__card__balance">
                    $1,261.40
                </div>
                <div className="main__card__text">
                    current ballance
                </div>
            </div>
            <div className="main__card__number">
                <div className="part">6372</div>
                <div className="part">9294</div>
                <div className="part">3247</div>
                <div className="part">1389</div>
            </div>
        </div>
    );
}

export default SecondCard;