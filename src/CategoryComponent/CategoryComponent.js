import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

class CategoryComponent extends Component {
	state = {
		currentCategory: undefined
	}

	changeCategory = category => {
		this.setState({currentCategory: category.categoryName})
	};

	render() {
		let productInfo = {title: "Product List", currentCategory: this.state.currentCategory}
		let categoryInfo = {title: "Category List", currentCategory: this.state.currentCategory}

		return (
			<div>
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
			</div>
		);
	}
}

export default CategoryComponent;