import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";

import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

import User from "./User/User";

export default class App extends Component {
	state = {currentCategory: undefined}

	changeCategory = category => {
		this.setState({currentCategory: category.categoryName})
	};

	render() {
		let productInfo = {title: "Product List", currentCategory: this.state.currentCategory}
		let categoryInfo = {title: "Category List", currentCategory: this.state.currentCategory}
		return (
			<div className="App">
				<Container>
					<Row>
						<Col>
							<Navi/>
						</Col>
					</Row>
					<Row>
						<Col xs={4}>
							<CategoryList changeCategory={this.changeCategory} info={categoryInfo}/>

						</Col>
						<Col xs={8}>
							<ProductList info={productInfo}/>
						</Col>
					</Row>
					<Row>
						<Col>
							<h1>Yazılar</h1>
						</Col>
					</Row>
					<Row>
						<Col xs={4}>
							<User/>
						</Col>
						<Col xs={8}>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
