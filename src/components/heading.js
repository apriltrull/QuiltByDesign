import React from "react";
import ReactDOM from "react-router-dom";
import "../assets/stylesheets/heading.css";

export default class NavComponent extends React.Component {

	render () {
		return (
			<nav>
				<div className="navWide">
					<div className="wideDiv">
						<a href="/main">Home</a>
						<a href="/introduction">Professional Team</a>
            <a href="/progress">Gallery</a>
            <a href = "/testimonials">Testimonials</a>
            <a href = "/tips">Creative Tips</a>
            <a href = "/contact">Contact</a>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
					<div className="narrowLinks">
						<a href="/main" onClick={this.burgerToggle}>Home</a>
						<a href="/introduction" onClick={this.burgerToggle}>Professional Team</a>
						<a href="/progress" onClick={this.burgerToggle}>Gallery</a>
            <a href ="/testimonials" onClick={this.burgerToggle}>Testimonials</a>
            <a href = "/tips" onClick={this.burgerToggle}>Creative Tips</a>
            <a href = "/contact" onClick={this.burgerToggle}>Contact</a>
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
