import React from "react";
import {Link} from "react-router-dom";
import "../assets/stylesheets/heading.css";

export default class NavComponent extends React.Component {

	render () {
		return (
			<nav>
				<div className="navWide">
					<div className="wideDiv">
						<Link to="/main">Home</Link>
            <Link to="/progress">Gallery</Link>
            <Link to = "/testimonials">Testimonials</Link>
            <Link to = "/tips">Creative Tips</Link>
            <Link to = "/contact">Contact</Link>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
					<div className="narrowLinks">
						<Link to="/main" onClick={this.burgerToggle}>Home</Link>
						<Link to="/progress" onClick={this.burgerToggle}>Gallery</Link>
            <Link to ="/testimonials" onClick={this.burgerToggle}>Testimonials</Link>
            <Link to = "/tips" onClick={this.burgerToggle}>Creative Tips</Link>
            <Link to = "/contact" onClick={this.burgerToggle}>Contact</Link>
					</div>
				</div>
			</nav>
		);
	};
	burgerToggle() {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}
};
