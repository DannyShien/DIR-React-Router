import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component{
  render(){
    return(
		<nav>
		    <div className='logo-text'>
		      <Link to="#"><h1>React Router</h1></Link>
		    </div>
		    <ul>
		        <li><Link to="/">Home</Link></li>
		        <li><Link to="/about">About</Link></li>
		        <li><Link to="/images">Images</Link></li>
		        <li><Link to="/weather">Weather</Link></li>
		        <li><Link to="/mayormessage">MayorMessage</Link></li>
		    </ul>
		</nav>   
	)
  }
}

export default NavBar;