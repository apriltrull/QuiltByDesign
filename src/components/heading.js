import React from "react";
import "../assets/stylesheets/heading.css";

export default class NavComponent extends React.Component {

	render () {
		return (
			<nav>
				<div className="navWide">
					<div className="wideDiv">
						<a href="./components/main.js">Home</a>
						<a href="./components/introduction.js">Professional Team</a>
						<a href="./components/progress.js">Gallery</a>
            <a href = "./components/testimonials.js">Testimonials</a>
            <a href = "./components/tips.js">Creative Tips</a>
            <a href = "./components/contact.js">Contact</a>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
					<div className="narrowLinks">
						<a href="./components/main.js" onClick={this.burgerToggle}>Home</a>
						<a href="./components/introduction.js" onClick={this.burgerToggle}>Professional Team</a>
						<a href="./components/progress.js" onClick={this.burgerToggle}>Gallery</a>
            <a href ="./components/testimonials.js" onClick={this.burgerToggle}>Testimonials</a>
            <a href = "./components/tips.js" onClick={this.burgerToggle}>Creative Tips</a>
            <a href = "./components/contact.js" onClick={this.burgerToggle}>Contact</a>
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
