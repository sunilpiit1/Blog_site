import React from 'react'
import './inputBox1.css'

export default function inputBox(props) {
    return (
        
            <div className="divclass">
                   <h5 className="title">{props.name}</h5> 
                   <input  onChange={props.onchange} className ="input" placeholder={props.placeholder} name={props.name} type={props.type} ></input>
            </div>
            
        
    )
}
