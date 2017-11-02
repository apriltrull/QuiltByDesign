import React from "react";

import "../assets/stylesheets/heading.css";


const NavComponent = React.createClass({
	render: function() {
		return (
			<nav>
				<div className="navWide">
					<div className="wideDiv">
						<a href="/main.js">Home</a>
						<a href="/introduction.js">Owners</a>
						<a href="/progress.js">Gallery</a>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
					<div className="narrowLinks">
						<a href="/main.js" onClick={this.burgerToggle}>Home</a>
						<a href="/introduction.js" onClick={this.burgerToggle}>Owners</a>
						<a href="/progress.js" onClick={this.burgerToggle}>Gallery</a>
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
