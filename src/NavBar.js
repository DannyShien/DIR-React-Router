import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component{
  render(){
    return(
		<nav>
		    <div className='title'>
		      <Link to="#"><h1>WebSiteName</h1></Link>
		    </div>
		    <ul>
		        <li><Link to="/">Home</Link></li>
		        <li><Link to="/one">One</Link></li>
		        <li><Link to="/two">Two</Link></li>
		        <li><Link to="/three">Three</Link></li>
		        <li><Link to="/four">Four</Link></li>
		    </ul>
		</nav>   
	)
  }
}

export default NavBar;