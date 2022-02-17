import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Header extends Component {
	render() {
		const { branding } = this.props;
		return (
			// <div>
			// 	{/* <h1 style={{ color: "blue", fontWeight: "bold", fontSize: "50px" }}>
			// 		{branding}
			// 	</h1> */}
			// 	<h1 style={headerStyle}>{branding}</h1>
			// </div>
			<nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
				<div className="container">
					<a href="/" className="navbar-brand">
						{branding}
					</a>
					<div>
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link to="/" className="nav-link">
									<i className="fas fa-home" /> Home
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/contact/add" className="nav-link">
									<i className="fas fa-plus" /> Add Contact
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/about" className="nav-link">
									<i className="fas fa-question" /> About
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
// const headerStyle = {
// 	color: "blue",
// 	fontSize: "50px",
// };

Header.defaultProps = {
	branding: "My Contact App",
};
Header.propTypes = {
	branding: PropTypes.string.isRequired,
};
export default Header;
