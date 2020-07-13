import React, { Component } from 'react';
import InputBox from '../create/inputBox';
import './update.component.css'
import axios from 'axios';


export class update extends Component {
  
    state = 
    {
        title:"" ,
        link : "" ,
        summary : ""

    };

    componentDidMount()
    {    
       
       
        let temp = "http://localhost:5000" + window.location.pathname;
        axios.get(temp)
        .then((blog)=>{
           
            this.setState({
                title : blog.data.title,
                link: blog.data.url,
                summary : blog.data.summary
            })

            console.log(this.state);

        })

       
        
    }

    onSubmitHandler = (event) => {
        

        event.preventDefault();

        const blog = 
        {
            title : this.state.title,
            url : this.state.link,
            summary : this.state.summary
        }
        
        console.log(blog);
        
        let temp1 = "http://localhost:5000" + window.location.pathname +"/update";
        axios.post( temp1, blog)
        .then(()=>console.log("succeded"))
        .catch(()=>console.log("you failed"));

        window.location='/blogs';
      
    }

    titleChange = (event) =>
    {
       this.setState( {
       
        title : event.target.value
       })
      
    }

    linkChange = (event) =>
    {
       this.setState( {
       
        link : event.target.value
       })
      
    }


    summaryChange = (event) =>
    {
        this.setState( {
       
            summary : event.target.value
           })
      
    }

   

   

    render() {
        
        
        return (

            
            <div  className="createComp">
                 
                 <form  className="form1" onSubmit = {this.onSubmitHandler}>
                  <h1>UPDATE BLOG !</h1>
                  <InputBox  value={this.state.title} onchange = {this.titleChange} name="Title" placeholder = "Enter Title Here .."/>
                  <InputBox value={this.state.link} onchange = {this.linkChange}  name="Link" placeholder = "Paste link Here .."/>
                  <div className="summary">
                      <div className="summaryStyle"> Summary</div>
                   <textarea name="summary" value={this.state.summary} onChange = {this.summaryChange} className="textarea" placeholder="About this photo .."></textarea>
                  </div>
                  <div className="buttondiv1">
                    <button type="submit" className="btn btn-primary butTon"> Submit</button>
                  </div>
                  
                 


                </form>
                
            </div>
        )
    }
}

export default update;
