import React, { Component } from 'react'
import axios from 'axios'
import './blog.css'
import {Link} from 'react-router-dom' ;


let deleteLink ="";
let updateLink ="";


export default class blog extends Component {
    
   

    state = {
        id:null,
        title :"",
        url :"",
        summary :"",
        token:null,
        likeState : false,
        likes:null,
    }
    
    componentWillMount()
    {
        deleteLink = window.location.pathname +"/delete";
        updateLink = window.location.pathname +"/edit"

        let temp = "http://localhost:5000" + window.location.pathname;
        axios.get(temp)
        .then((blog) => {
            console.log(blog)

           this.setState({
               title : blog.data.title,
               url : blog.data.url,
               summary:blog.data.summary,
               likes:blog.data.likes,
               id:blog.data._id

           })

           
            
        })
        .catch(err => console.log("sunil you failed!!") 
        );

        axios.get('http://localhost:5000/login/gettoken')
        .then((res)=>{
             
            this.setState({
                token:res.data.token
            })
        })
    }
    
   deleteButtonHandler = () =>
   {
    let temp = "http://localhost:5000" + window.location.pathname +"/delete";
    axios.delete(temp);
    window.location = '/blogs';
   }

   likeClick = () =>
   {
       let temp = 'http://localhost:5000/login/hitlike/' + this.state.id ; 
       axios.post( temp )
       
       let temp1  = this.state.likes;
       this.setState({
           likeState:true,
           likes :temp1 +1
       })
   }
     
   like = () => {
       
       if(this.state.likeState)
       {
           return( <span class="material-icons likeAfter">favorite</span>)
       }
       else
       {
           return( <span onClick={this.likeClick} class="material-icons likeBefore">favorite_border</span>)
       }
     
   }

   likeStatement = () =>{

       if(this.state.likes==null)
       {
         return(<span className="statement">0 likes</span>)
       }
       else{
        return(<span className="statement">{this.state.likes} likes</span>)
       }
      
     
   }

   Bottompart = () => {

       if(this.state.token === 1)
       {
           return(

            <div className="blogSummary">{this.state.summary} 
                 <button onClick={this.deleteButtonHandler} className="btn btn-danger position1">Delete</button>
                 <Link to={updateLink}> <button className="btn btn-warning position2"> Update</button></Link>
                
            </div>   
            
              )
       }
       else if (this.state.token==0)
       {
           
        return(
                
            <div className="blogSummary">{this.state.summary} 
                 {this.like()}
                 {this.likeStatement()}
            </div>   
            
              )
       }
   }

   

    
   
    
    render() {
       
        window.scrollTo(0, 0);
        
        return (
            <div className="outerBoxBlog">
                <div className="innerBoxBlog">
                    <div className="blogHeading">{this.state.title}</div>
                    <img  className ="blogImage"src={this.state.url}></img>
                    {this.Bottompart()}
          
                </div>
                
              
            </div>
            
        )
       
    }

   
}


