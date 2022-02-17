import React, { Component } from "react";
import { Consumer } from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";
// import App from "../../App.css";

class AddContact extends Component {
	state = {
		name: "",
		email: "",
		phone: "",
		errors: {},
	};

	onSubmit = async (dispatch, e) => {
		e.preventDefault();
		const { name, email, phone } = this.state;
		// Check for Errors
		if (name === "") {
			this.setState({ errors: { name: "Name is required" } });
			return;
		}
		if (email === "") {
			this.setState({ errors: { email: "Email is required" } });
			return;
		}
		if (phone === "") {
			this.setState({ errors: { phone: "Phone is required" } });
			return;
		}
		const newContact = {
			name,
			email,
			phone,
		};
		const res = await axios.post(
			"https://jsonplaceholder.typicode.com/users",
			newContact
		);
		dispatch({ type: "ADD_CONTACT", payload: res.data });

		this.setState({ name: "", email: "", phone: "", errors: {} });
		this.props.history.push("/");
	};
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });
	render() {
		const { name, email, phone, errors } = this.state;

		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;
					return (
						<div className="card mb-3">
							<div className="card-header">Add Contact</div>
							<div className="card-body">
								<form onSubmit={this.onSubmit.bind(this, dispatch)}>
									<TextInputGroup
										label="Name"
										name="name"
										placeholder="Enter your name"
										className="text-left"
										value={name}
										onChange={this.onChange}
										error={errors.name}
									/>
									<TextInputGroup
										label="Email"
										name="email"
										type="email"
										placeholder="Enter your email"
										value={email}
										onChange={this.onChange}
										error={errors.email}
									/>
									<TextInputGroup
										label="Phone"
										name="phone"
										type="phone"
										placeholder="Enter your phone"
										value={phone}
										onChange={this.onChange}
										error={errors.phone}
									/>
									<div class="d-grid gap-2">
										<button
											class="btn btn-light btn-outline-secondary mt-5"
											type="submit"
										>
											Add Contact
										</button>
									</div>
								</form>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default AddContact;
