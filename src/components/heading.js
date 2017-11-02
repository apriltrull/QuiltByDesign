import React from "react";
import "../assets/stylesheets/heading.css";

export default class NavComponent extends React.Component {

	render () {
		return (
			<nav>
				<div className="navWide">
					<div className="wideDiv">
						<Link to ="/main.js"><a href="/main.js">Home</a></Link></Link>
						<Link to ="/introduction.js"><a href="/introduction.js">Professional Team</a></Link></Link>
            <Link to ="/progress.js"><a href="/progress.js">Gallery</a></Link></Link>
            <Link to ="/testimonials.js"><a href = "/testimonials.js">Testimonials</a></Link></Link>
            <Link to ="/tips.js"><a href = "/tips.js">Creative Tips</a></Link></Link>
            <Link to ="/contact.js"><a href = "/contact.js">Contact</a></Link></Link>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
					<div className="narrowLinks">
						<Link to ="/main.js"><a href="/main.js" onClick={this.burgerToggle}>Home</a></Link>
						<Link to ="/introduction.js"><a href="/introduction.js" onClick={this.burgerToggle}>Professional Team</a></Link>
						<Link to ="/progress.js"><a href="/progress.js" onClick={this.burgerToggle}>Gallery</a></Link>
            <Link to ="/testimonials.js"><a href ="/testimonials.js" onClick={this.burgerToggle}>Testimonials</a></Link>
            <Link to ="/tips.js"><a href = "/tips.js" onClick={this.burgerToggle}>Creative Tips</a></Link>
            <Link to ="/contact.js"><a href = "/contact.js" onClick={this.burgerToggle}>Contact</a></Link>
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
