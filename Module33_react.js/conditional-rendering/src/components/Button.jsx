import React from "react";

function Button(props){
    return (
    <button type={props.type}>{props.name}</button>
    );
}

export default Button;