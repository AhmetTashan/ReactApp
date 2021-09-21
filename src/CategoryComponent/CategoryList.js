import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

class CategoryList extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		categories: [
	// 			{categoryId: 1, categoryName: "Cras justo odio"},
	// 			{categoryId: 2, categoryName: "Dapibus ac facilisis in"},
	// 			{categoryId: 3, categoryName: "Morbi leo risus"},
	// 			{categoryId: 4, categoryName: "Porta ac consectetur ac"},
	// 			{categoryId: 5, categoryName: "Vestibulum at eros"}
	// 		]
	// 	} // state kullanım #1
	// }

	state = {
		categories: [
			{categoryId: 1, categoryName: "Cras justo odio"},
			{categoryId: 2, categoryName: "Dapibus ac facilisis in"},
			{categoryId: 3, categoryName: "Morbi leo risus"},
			{categoryId: 4, categoryName: "Porta ac consectetur ac"},
			{categoryId: 5, categoryName: "Vestibulum at eros"}
		]
	} // state kullanım #2


	/*
	* changeCategory = (category) => {
		this.setState({currentCategory: category.categoryName})
	}
	* */


	render() {
		return (
			<div>
				<h4>{this.props.info.title}</h4>
				<ListGroup>
					{
						this.state.categories.map(category => (
							<ListGroupItem
								tag="a"
								href="#"
								onClick={() => this.props.changeCategory(category)}
								key={category.categoryId}>
								{category.categoryName}
							</ListGroupItem>
						))
					}
				</ListGroup>
				{/*<h5>{this.props.info.currentCategory}</h5>*/}
			</div>
		);
	}
}

export default CategoryList;
