import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class User extends Component {
	state = {
		users: []
	}

	componentDidMount() { // component yerleşti/yüklendi artık çalıştır
		this.getUsers();
	}

	getUsers = () => {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then(response => response.json())
			.then(data => this.setState({users: data}));

		console.log(this.state.users)
	}

	render() {
		return (
			<div>
				<ListGroup>
					<ListGroupItem tag="a" href="#">User Name</ListGroupItem>
				</ListGroup>
			</div>
		);
	}
}

export default User;