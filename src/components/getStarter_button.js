import React from "react";

const Button = (props) => {
    return (
      <button className="firstPage__btn" type='submit' >
        {props.name}
      </button>
    );
}

export default Button;

