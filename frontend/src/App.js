import React from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import {BrowserRouter as Router , Route} from 'react-router-dom' ; 
import Home from './components/home/home.component';
import Create from './components/create/create.component';
import Blogs from './components/blogs/blogs.component';
import Login from './components/login/login.component';
import Blog from './components/blog/blog';
import Edit from './components/update/update.component'
// this above thing is used to route links to particular react components

function App() {

   //now we need to put things that we need to route in the router element
 
   return (
    <Router>
       <div className="App">
          <Navbar/>
          <div className="upper">
             <Route path="/" exact component={Home}></Route>
             <Route path="/blogs" component={Blogs}></Route>
             <Route path="/blog/:id" exact component={Blog}></Route>
             <Route path="/blog/:id/edit" exact component={Edit}></Route>
             <Route path="/create"  component={Create}></Route>
             <Route path="/login" component={Login}></Route>
          </div>
          <Footer/>
       </div>
    </Router>
    
  );
}

export default App;


        
          
         
          