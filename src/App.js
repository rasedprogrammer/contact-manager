import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import About from "../src/components/pages/About";
import Contacts from "./components/contacts/Contacts";
import EditContact from "./components/contacts/EditContact";
import { Provider } from "./Context";
import AddContact from "./components/contacts/AddContact";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/pages/NotFound";
// import "./App.css";

function App() {
	return (
		<Provider>
			<Router>
				<div className="App">
					<Header branding="Contact Manager" />
					<div className="container">
						<Switch>
							<Route exact path="/" component={Contacts} />
							<Route exact path="/contact/add" component={AddContact} />
							<Route exact path="/contact/edit/:id" component={EditContact} />
							<Route exact path="/about" component={About} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</div>
			</Router>
		</Provider>
	);
}

export default App;

// {
// 	/* <Contact
// 					name="Md. Rased Molla"
// 					email="rasedprogrammer@gmail.com"
// 					phone="01822641025"
// 				/>
// 				<Contact
// 					name="Md. Rahul Molla"
// 					email="rahul@gmail.com"
// 					phone="01844615030"
// 				/> */
// }
