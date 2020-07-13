import React from 'react' ;
import './home.component.css';


export default function home() {
    return (
        <div className = "home1">
            
            <h1>hello world !</h1>
            <h3>This is a blog site which containg my family blogs !! </h3>
            <h5>you guys can see these blogs and can hit a like if you like it</h5>
            <button  className="btn btn-primary linkbutton"><a className="blogslink" href="/blogs">see blogs</a>  </button>
        
            
        </div>
    )
}
