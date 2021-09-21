import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class GetPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: props.initialModalState,
			fade: true
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal,
			fade: !this.state.fade

		});
	}

	render() {
		return (
			<div>
				<Button color="danger" onClick={this.toggle}>TOGGLE</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle}
				       fade={this.state.fade}
				       className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
					<ModalBody>



					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
						<Button color="secondary" onClick={this.toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}


export default GetPost;