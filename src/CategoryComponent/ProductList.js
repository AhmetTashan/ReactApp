import React, {Component} from 'react';

class ProductList extends Component {
	render() {
		return (
			<div>
				<h4>{this.props.info.title} - <small>{this.props.info.currentCategory}</small></h4>
			</div>
		);
	}
}

export default ProductList;