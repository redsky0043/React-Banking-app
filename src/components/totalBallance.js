import React from 'react';

export function TotalBallance(props) {

    const { apiData } = props;
    let arr = apiData;
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i].value.substring(2);
        let number = parseFloat(value);
        result += number;
    }

    return (
        <div>
            $ {Math.round(result)}
        </div>
    )
}

