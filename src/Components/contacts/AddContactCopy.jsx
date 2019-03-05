/* This file is how you would input and submit form fields without using 
state. I'm still not sure of the reason for this but I imagine it will
make sense eventually */
import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
  };

  static defaultProps = {
    name: "Fred Smith",
    email: "fredS@mail.com",
    phone: "123-456-7890"
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter name..."
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter email..."
                defaultValue={email}
                ref={this.emailInput}
              />
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control form-control-lg"
                  placeholder="Enter phone..."
                  defaultValue={phone}
                  ref={this.phoneInput}
                />
              </div>
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
