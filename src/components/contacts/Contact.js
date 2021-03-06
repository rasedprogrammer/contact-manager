// import React from "react";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
	state = {
		showContactInfo: false,
	};
	onDeleteClick = async (id, dispatch) => {
		try {
			await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
			dispatch({ type: "DELETE_CONTACT", payload: id });
		} catch (e) {
			dispatch({ type: "DELETE_CONTACT", payload: id });
		}
	};
	render() {
		const { id, name, email, phone } = this.props.contact;
		const { showContactInfo } = this.state;
		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;
					return (
						<div className="card card-body mb-3">
							<h4>
								{name}{" "}
								<i
									onClick={() =>
										this.setState({
											showContactInfo: !this.state.showContactInfo,
										})
									}
									className="fas fa-sort-down"
									style={{ cursor: "pointer" }}
								/>
								<i
									className="fas fa-times"
									style={{ cursor: "pointer", float: "right", color: "red" }}
									onClick={this.onDeleteClick.bind(this, id, dispatch)}
								/>
								<Link to={`contact/edit/${id}`}>
									<i
										className="fas fa-pencil-alt"
										style={{
											cursor: "pointer",
											float: "right",
											color: "black",
											marginRight: "1rem",
										}}
									/>
								</Link>
							</h4>
							{showContactInfo ? (
								<ul className="list-group">
									<li className="list-group-item">Email: {email}</li>
									<li className="list-group-item">Phone Number: {phone}</li>
								</ul>
							) : null}
						</div>
					);
				}}
			</Consumer>
		);
	}
}
Contact.propTypes = {
	contact: PropTypes.object.isRequired,
	// deleteClickHandler: PropTypes.func.isRequired,
};
export default Contact;

// const Contact = (props) => {
// 	const { name, email, phone } = props.contact;
// 	onShowClick(){
// 		console.log("Hello World");
// 	};
// 	return (
// 		<div className="card card-bocy mb-3">
// 			<h4>
// 				{name}
// 				<i onClick={this.onShowClick} className="fas fa-sort-down" />
// 			</h4>
// 			<ul className="list-group">
// 				<li className="list-group-item">Email: {email}</li>
// 				<li className="list-group-item">Phone Number: {phone}</li>
// 			</ul>
// 		</div>
// 	);
// };
// import React, { Component } from 'react';
// export default Contact;

// onShowClick = () => {
// 	this.setState({ showContactInfo: !this.state.showContactInfo });
// };

// Binding Code For Complex way
// constructor() {
// 	super();
// 	this.state = {};

// 	this.onShowClick = this.onShowClick.bind(this);
// }

// Simple Way
