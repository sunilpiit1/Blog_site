import React from 'react';
import './inputBox.css';

export default function inputBox(props) {
    return (
        <div className="divclass1">
            <div className="title1">{props.name}</div>
            <input value={props.value} onChange={props.onchange} className ="input1" placeholder={props.placeholder} name = {props.name}></input>
        </div>
    )
}
