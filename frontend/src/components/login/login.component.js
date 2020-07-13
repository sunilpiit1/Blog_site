import React, { Component } from 'react';
import './login.component.css' ;
import InputBox from './inputBox1';
import axios from 'axios';



export class login extends Component {

    state = 
    {
        username:"" ,
        password : "" ,
        

    };

    onSubmitHandler = (event) => {

        event.preventDefault();
         console.log("annapadi");
        const user =
        {
            username : this.state.username,
            password : this.state.password

        }
        axios.post('http://localhost:5000/login/user' , user)
        .then((res)=>{
            console.log(res);
            
           
        })

        window.location = '/';
        

      
    }

    usernameChange = (event) =>
    {
       this.setState( {
       
        username : event.target.value
       })
      
    }

    passwordChange = (event) =>
    {
       this.setState( {
       
        password : event.target.value
       })
      
    }

    render()
    {
        return (
            <div className="bigbox">
                <div className="box">
                </div>

               <form className="form" onSubmit={this.onSubmitHandler}>
                 <h1 className="heading">login form</h1>
                 <InputBox onchange={this.usernameChange} name="Username" placeholder="enter username" type ="text"/>
                 <InputBox onchange={this.passwordChange} name="Password" placeholder="enter password" type="password"/>
                 <button  onSubmit={this.onSubmitHandler} className="btn btn-primary" type="submit"> Login</button>
                 
               </form>  

            </div>
             
        )
    }
   
   
}


export default login;
