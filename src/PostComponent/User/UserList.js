import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class UserList extends Component {
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

	setActive = (user) => {
		// console.log(this.props.info.currentUser)
		if (this.props.info.currentUser !== undefined) {
			if (this.props.info.currentUser.id === user.id) {
				return true;
			}
		}
		return false;
	}

	render() {
		return (
			<div>
				<ListGroup>
					<ListGroupItem
						active={this.props.info.currentUser === undefined ? true : false}
						onClick={() => this.props.changeUser()}
						style={{cursor: "pointer"}}>
						All Posts
					</ListGroupItem>
					{
						this.state.users.map(user => (
							<ListGroupItem
								active={this.setActive(user)}
								onClick={() => this.props.changeUser(user)}
								key={user.id}
								style={{cursor: "pointer"}}>
								{user.name}
							</ListGroupItem>
						))
					}
				</ListGroup>
			</div>
		);
	}
}

export default UserList;