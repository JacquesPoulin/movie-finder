import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/_header.scss';

const Header = () => {
	return (
		<div className='header'>
			<nav>
				<ul>
					<NavLink
						to='/'
						className={(nav) => (nav.isActive ? 'nav-active' : '')}>
						<li>Home Page</li>
					</NavLink>
					<NavLink
						to='/wishlist'
						className={(nav) => (nav.isActive ? 'nav-active' : '')}>
						<li>Wishlist</li>
					</NavLink>
				</ul>
			</nav>
			<h1>FIND THE MOVIE</h1>
		</div>
	);
};

export default Header;
