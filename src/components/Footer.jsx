import React from "react";
import "./footer.css";

function Footer() {
	return (
		<div className='footer-basic'>
			<div className='footer'>
				<ul className='list-inline'>
					<li className='list-inline-item'>
						<a href='#'>Home</a>
					</li>
					<li className='list-inline-item'>
						<a href='#'>Services</a>
					</li>
					<li className='list-inline-item'>
						<a href='#'>About</a>
					</li>
					<li className='list-inline-item'>
						<a href='#'>Terms</a>
					</li>
					<li className='list-inline-item'>
						<a href='#'>Privacy Policy</a>
					</li>
				</ul>
				<p className='copyright'>Company Name © 2023</p>
			</div>
		</div>
	);
}

export default Footer;
