import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class GetModalPost extends Component {

	render() {
		return (
			<div>
				{
					this.props.postData !== undefined ?
						<Modal isOpen={this.props.isModalOpen} toggle={this.props.toggle}>

							<ModalHeader toggle={this.props.toggle}>
								{this.props.postData.title}
							</ModalHeader>

							<ModalBody>
								<b>postId:</b> {this.props.postData.id} <br/>
								<b>userId:</b> {this.props.postData.userId} <br/>
								<b>body:</b> {this.props.postData.body}
							</ModalBody>

							<ModalFooter>
								<Button color="primary" onClick={this.props.toggle}>Update</Button>{' '}
								<Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
							</ModalFooter>

						</Modal>

						: null
				}

			</div>
		)
	}
}

export default GetModalPost;