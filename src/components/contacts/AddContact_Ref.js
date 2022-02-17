import React, { Component } from "react";

class AddContact extends Component {
	constructor(props) {
		super(props);

		this.nameInput = React.createRef();
		this.emailInput = React.createRef();
		this.phoneInput = React.createRef();
	}
	onSubmit = (e) => {
		e.preventDefault();
		// console.log(this.state);
		const contact = {
			name: this.nameInput.current.value,
			email: this.emailInput.current.value,
			phone: this.phoneInput.current.value,
		};
		console.log(contact);
	};
	static defaultProps = {
		name: "Md. Rahul Molla",
		email: "rahul@gmail.com",
		phone: "01844615030",
	};
	// onChange = (e) => this.setState({ [e.target.name]: e.target.value });
	// onNameChange = (e) => this.setState({ name: e.target.value });
	// onEmailChange = (e) => this.setState({ email: e.target.value });
	// onPhoneChange = (e) => this.setState({ phone: e.target.value });
	render() {
		const { name, email, phone } = this.props;
		return (
			<div className="card mb-3">
				<div className="card-header">Add Contact</div>
				<div className="card-body">
					<form onSubmit={this.onSubmit}>
						<div className="form-group">
							<label htmlFor="name">Name</label>
							{/* input.form-control.form-control-lg */}
							<input
								type="text"
								name="name"
								placeholder="Enter your full name..."
								className="form-control form-control-lg"
								defaulvalue={name}
								ref={this.nameInput}
								// onChange={this.onChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								type="text"
								name="email"
								className="form-control form-control-lg"
								placeholder="Enter your email id..."
								defaulvalue={email}
								ref={this.emailInput}
								// onChange={this.onChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="phone">Phone</label>
							<input
								type="text"
								name="phone"
								placeholder="Enter your phone number..."
								className="form-control form-control-lg"
								defaulvalue={phone}
								ref={this.phoneInput}
								// onChange={this.onChange}
							/>
						</div>
						<input
							type="submit"
							value="Add Contact"
							className="btn btn-light btn-block mt-3"
						/>
					</form>
				</div>
			</div>
		);
	}
}

export default AddContact;
