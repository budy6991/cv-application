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
      didSubmit: null,
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

  handleEdit = () => {
    this.setState({
      didSubmit: false,
    });
  };

  handleSubmit = (event) => {
    let id = "id" + Math.random().toString(16).slice(2);
    event.preventDefault();
    this.setState({
      didSubmit: true,
    });
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
    const { name, surname, phoneNumber, email, location, didSubmit } =
      this.state;

    if (didSubmit === null || didSubmit === false) {
      return (
        //Returns the form either the fields are empty or during editing.
        <div className="w-1/2 h-1/3 flex flex-col p-4">
          <h1 className="m-2 mr-5 text-xl text-blue-700">
            Contact Information
          </h1>
          <form onSubmit={this.handleSubmit}>
            <div className="mt-1 flex flex-col">
              <label>Name </label>
              <input
                value={name}
                className="focus:bg-transparent focus:outline-none text-blue-700"
                type="text"
                onChange={this.handleName}
              ></input>
            </div>
            <div className="mt-1 flex flex-col">
              <label>Surname</label>
              <input
                value={surname}
                className="focus:bg-transparent focus:outline-none text-blue-700"
                type="text"
                onChange={this.handleSurname}
              ></input>
            </div>
            <div className="mt-1 flex flex-col">
              <label>Phone Number</label>
              <input
                value={phoneNumber}
                className="focus:bg-transparent focus:outline-none text-blue-700"
                type="tel"
                onChange={this.handlePhoneNumber}
              ></input>
            </div>
            <div className="mt-1 flex flex-col">
              <label>Email </label>
              <input
                value={email}
                className="focus:bg-transparent focus:outline-none text-blue-700"
                type="email"
                onChange={this.handleMail}
              ></input>
            </div>
            <div className="mt-1 flex flex-col">
              <label>Location</label>
              <input
                value={location}
                className="focus:bg-transparent focus:outline-none text-blue-700"
                type="text"
                onChange={this.handleLocation}
              ></input>
            </div>
            <div className=" w-full flex justify-end">
              <button
                className="rounded-full bg-white p-1 mt-4 hover:shadow-md hover:bg-blue-600 hover:text-white "
                type="submit"
                onClick={this.displayContactInformation}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        // Returns the output value styled differently.
        <div className="w-1/2 h-1/3 flex flex-col p-4">
          <h1 className="m-2 mr-5 text-xl  text-blue-700">
            Contact Information
          </h1>
          <div className="mt-1 flex flex-col">
            <label>Name </label>
            <h2 className="text-blue-700 text-right">{name}</h2>
          </div>
          <div className="mt-1 flex flex-col">
            <label>Surname</label>
            <h2 className="text-blue-700 text-right">{surname}</h2>
          </div>
          <div className="mt-1 flex flex-col">
            <label>Phone Number</label>
            <h2 className="text-blue-700 text-right">{phoneNumber}</h2>
          </div>
          <div className="mt-1 flex flex-col">
            <label>Email </label>
            <h2 className="text-blue-700 text-right">{email}</h2>
          </div>
          <div className="mt-1 flex flex-col">
            <label>Location</label>
            <h2 className="text-blue-700 text-right">{location}</h2>
          </div>
          <div className=" w-full flex justify-end">
            <button
              className="rounded-full bg-white p-1 mt-4 hover:shadow-md hover:bg-blue-600 hover:text-white "
              type="submit"
              onClick={this.handleEdit}
            >
              Edit
            </button>
          </div>
        </div>
      );
    }
  }
}

export default ContactInformation;
