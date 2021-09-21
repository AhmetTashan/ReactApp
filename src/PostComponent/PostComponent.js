import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import UserList from "./User/UserList";
import PostList from "./Posts/PostList";
import GetPost from "./Posts/GetPost";

class PostComponent extends Component {
	state = {
		currentUser: undefined,
		posts: [],
		modalStatus: false
	}

	componentDidMount() {
		this.getPosts();
	}

	showModal = () => {
		if (this.state.modalStatus === false) {
			this.setState({modalStatus: true})
		} else {
			this.setState({modalStatus: false})
		}

		console.log(this.state.modalStatus)
	}

	changeUser = user => {
		if (user)
			this.setState({currentUser: {id: user.id, name: user.name}})
		else
			this.setState({currentUser: undefined})

		this.getPosts(user);
	}

	getPosts = (user) => {
		let postListUrl = 'https://jsonplaceholder.typicode.com/posts';
		if (user) {
			postListUrl += '?userId=' + user.id;
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

		let userInfo = {
			currentUser: this.state.currentUser,
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
						<UserList changeUser={this.changeUser} info={userInfo}/>
					</Col>
					<Col xs={8}>
						<GetPost initialModalState={this.state.modalStatus}/> {/*tıklandığında bu modal çalışsın*/}

						<PostList showModal={this.showModal} info={postInfo}/>
					</Col>
				</Row>

			</div>
		);
	}
}

export default PostComponent;