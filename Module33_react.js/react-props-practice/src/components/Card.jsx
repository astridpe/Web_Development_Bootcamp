import React from "react";
import Avatar from "./Avatar";
import Info from "./Info"

function Card(props){
    return (
        <div>
            <div className="card">
                <div className="top">
                    <p className="info">{props.number}</p>
                    <h2 className="name">{props.name}</h2>
                    <Avatar img={props.img}/>
                </div>
                <div className="bottom">
                    <Info info={props.tel} />
                    <Info info={props.email} />
                </div>
            </div>
        </div>
    )

}

export default Card;