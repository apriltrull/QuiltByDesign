import React from "react";
import ReactDom from "react-dom";
import "../assets/stylesheets/heading.css";
import Introduction from "./assets/components/introduction.js";
import Progress from "./assets/components/progress.js";
import Testimonials from "./assets/components/testimonials.js";
import Tips from "./assets/components/tips.js";
import Contact from "./assets/components/contact.js";


const NavComponent = React.createClass({
	render: function() {
		return (
			<nav>
				<div className="navWide">
					<div className="wideDiv">
						<a href="/main">Home</a>
						<a href="/introduction">Owners</a>
						<a href="/progress">Gallery</a>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
					<div className="narrowLinks">
						<a href="/main" onClick={this.burgerToggle}>Home</a>
						<a href="/introduction" onClick={this.burgerToggle}>Owners</a>
						<a href="/progress" onClick={this.burgerToggle}>Gallery</a>
					</div>
				</div>
			</nav>
		);
	},
	burgerToggle: function() {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}
});

ReactDOM.render(<NavComponent />, document.querySelector('navbar'));
