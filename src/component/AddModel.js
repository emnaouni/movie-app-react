import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title1: "",
      count: 0,
      img: ""
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  add = () => {
    this.props.addMovie(this.state);
    this.setState({ show: false });
  };
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          +
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input type="text" onChange={this.handleChange} name="title1" />
              </div>
              <div>
                <label>Image:</label>
                <input type="text" onChange={this.handleChange} name="img" />
              </div>
              <div>
                <label>Rating:</label>
                <input type="text" onChange={this.handleChange} name="count" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button onClick={this.add} variant="primary" >
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddModal;