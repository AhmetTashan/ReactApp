import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import User from "./User/User";
import PostList from "./Posts/PostList";

class PostComponent extends Component {
	state = {
		currentUser: undefined,
		posts: []
	}

	componentDidMount() {
		this.getPosts();
	}


	changeUser = user => {
		if (user)
			this.setState({currentUser: {id: user.id, name: user.name}})
		else
			this.setState({currentUser: undefined})

		this.getPosts(user);
	}

	getPosts = (userId) => {
		let postListUrl = 'https://jsonplaceholder.typicode.com/posts';
		if (userId) {
			postListUrl += '?userId=' + userId.id;
		}

		fetch(postListUrl)
			.then(response => response.json())
			.then(payload => this.setState({posts: payload}))
	}

	render() {
		let postInfo = {
			currentUser: this.state.currentUser,
			posts: this.state.posts
		}

		return (
			<div>
				<Row className="m-3">
					<Col>
						<h1>Post Component</h1>
					</Col>
				</Row>
				<Row>
					<Col xs={4}>
						<User changeUser={this.changeUser}/>
					</Col>
					<Col xs={8}>
						<PostList info={postInfo}/>
					</Col>
				</Row>
			</div>
		);
	}
}

export default PostComponent;