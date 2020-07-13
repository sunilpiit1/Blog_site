import React, { Component } from 'react'
import axios from 'axios'
import Exercise from './exercise/exercise'
import './blogs.component.css'




export default class blog extends Component {
    
    state = {
      
        blogs : [ ] ,
        blogNo : 1,
        maximum : 1,
      

    }
    
   
  

    componentDidMount()
    {
        
        
        axios.get('http://localhost:5000/blog')
        .then((blogs) => {
            
            this.setState({
                maximum :  blogs.data.length-1,
                blogNo: blogs.data.length-1
            })
            console.log(this.state.blogNo);
           
            let temp  = [];
            for(let i = this.state.blogNo ; i>this.state.blogNo-9 ;i--)
            {
                temp.push(blogs.data[i]);
            }

           
            this.setState({
                blogs : temp ,
                
            })
           // console.log(blogs.data.length);
            
        })
        .catch(err => console.log(err) 
        );
    }

    readMore = (event) =>{

        console.log(event.target.title);

    }

    blogsRendering = () =>
    {
       
        
       return this.state.blogs.map((blog) => {
           
        return <Exercise title={blog.title} url={blog.url} summary={blog.summary} id={blog._id}></Exercise>
       

    })
       
    }
     

    clickHandler1=()=>
    {
        
        
        let temp2 = this.state.blogNo-9;
        this.setState({
            
            blogNo: temp2
        })
        if(this.state.blogNo<0)
        {
            return
        }
       
        axios.get('http://localhost:5000/blog')
        .then((blogs) => {

            let temp  = [];
            for(let i =this.state.blogNo ; i>this.state.blogNo-9 ;i--)
            {
                if(i==-1)
                {
                    break;
                }
                else
                {
                    temp.push(blogs.data[i]);
                }
                
               
            }
            this.setState({
                blogs : temp 
            })

            
        })


       
    }

    clickHandler2=()=>
    {
        let temp2 = this.state.blogNo+9;
        this.setState({
            
            blogNo: temp2
        })
        if(this.state.blogNo>this.state.maximum)
        {
            return
        }

        axios.get('http://localhost:5000/blog')
        .then((blogs) => {

            let temp  = [];
            for(let i =this.state.blogNo ; i>this.state.blogNo-9 ;i--)
            {
                if(i==-1)
                {
                    break;
                }
                else
                {
                    temp.push(blogs.data[i]);
                }
                
               
            }
            this.setState({
                blogs : temp 
            })

            
        })
            
    
    }
    
    render() {
       
        window.scrollTo(0, 0);
        
        return (
            <div className="blogs1" id="top">
                <div className="innerdiv">
                     {this.blogsRendering()}
                    
                     
                </div>
                <div className="renderDiv">
                       
                          <button onClick={this.clickHandler2} className="btn btn-primary prev"> Prev</button>
                          <button onClick={this.clickHandler1} className="btn btn-primary"> Next</button>
                       
                </div>
              
               
            </div>
            
        )
       
    }

   
}


