import React from 'react';

import {Link} from 'react-router-dom';


function Navbar  () {
return (
	<nav> 

	<ul>
		<li>
		<Link to="/Home">
			Home
		</Link>
		<Link to="/About">
			About
		</Link>
		<Link to="/Contact">
			Contact
		</Link>
		</li>
		</ul>
		</nav>

);
};

export default Navbar;
