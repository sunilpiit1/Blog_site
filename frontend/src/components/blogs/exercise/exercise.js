import React from 'react'
import './exercise.css'

const Readmore = (props) =>
{
    if(props.length>70)
    {
        return(

             <a href={props.url}> {props.children}</a>
        )
    }
    else
    {
        return(<span></span>)
    }
    
}

const Dotdot = (props) =>
{
    if(props.length>70)
    {
        return(

             <span> .... </span>
        )
    }
    else
    {
        return(<span> . </span>)
    }
    
}

export default function exercise( props ) {
    
    let temp = "/blog/" + props.id;

   const onclickHandler = () =>
   {
       window.location = temp
   }
    
    
    return (
        <div className="exercise">
            <div className="exerciseHeading">{props.title}</div>
            <img onClick={onclickHandler} className ="exerciseImage"src={props.url}></img>
            <div className="exerciseSummary">{props.summary.substr(0,70) }<Dotdot length={props.summary.length}></Dotdot><Readmore length={props.summary.length} url={temp} >Read more</Readmore></div>
            
        </div>
    )
}
