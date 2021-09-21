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
			.then(payload => this.setState({users: payload}));
	}

	render() {
		return (
			<div>
				<ListGroup>
					<ListGroupItem
						onClick={() => this.props.changeUser()}
						style={{cursor: "pointer"}}
						className="active"
					>Tümü</ListGroupItem>
					{
						this.state.users.map(user => (
							<ListGroupItem
								onClick={() => this.props.changeUser(user)}
								key={user.id}
								style={{cursor: "pointer"}}
							>{user.name}</ListGroupItem>
						))
					}
				</ListGroup>
			</div>
		);
	}
}

export default User;