import React, { Component } from "react";

export class ContactInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      surname: "",
      phoneNumber: "",
      email: "",
      location: "",
    };
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSurname = (event) => {
    this.setState({
      surname: event.target.value,
    });
  };

  handlePhoneNumber = (event) => {
    this.setState({
      phoneNumber: event.target.value,
    });
  };

  handleMail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleLocation = (event) => {
    this.setState({
      location: event.target.value,
    });
  };

  handleSubmit = (event) => {
    let id = "id" + Math.random().toString(16).slice(2);
    event.preventDefault();
    this.props.handleContactInformation({
      name: this.state.name,
      surname: this.state.surname,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      location: this.state.location,
      id,
    });
  };

  render() {
    return (
      <div className="w-1/2 h-1/3 flex flex-col p-4">
        <h1 className="m-2 mr-5 text-lg">Contact Information</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="mt-1 flex flex-col">
            <label>Name </label>
            <input type="text" onChange={this.handleName}></input>
          </div>
          <div className="mt-1 flex flex-col">
            <label>Surname</label>
            <input type="text" onChange={this.handleSurname}></input>
          </div>
          <div className="mt-1 flex flex-col">
            <label>Phone Number</label>
            <input type="tel" onChange={this.handlePhoneNumber}></input>
          </div>
          <div className="mt-1 flex flex-col">
            <label>Email </label>
            <input type="email" onChange={this.handleMail}></input>
          </div>
          <div className="mt-1 flex flex-col">
            <label>Location</label>
            <input type="text" onChange={this.handleLocation}></input>
          </div>
          <div className="self-end">
            <button
              className="rounded-full bg-white p-1 m-2 hover:shadow-md hover:bg-green-400 hover:text-white self-end"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactInformation;
