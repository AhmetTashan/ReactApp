import React, {Component} from "react";
import {Container} from "reactstrap";


import PostComponent from "./PostComponent/PostComponent";
// import CategoryComponent from "./CategoryComponent/CategoryComponent";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Container>

					{/*<CategoryComponent/>*/}

					<PostComponent/>

				</Container>
			</div>
		);
	}
}
