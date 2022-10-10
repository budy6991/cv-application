import React, { Component } from "react";
import ContactInformation from "./ContactInformation";

class Manager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactInformation: [],
      educationInformation: [],
      practicalInformation: [],
    };
  }

  handleContactInformation = (contactInformation) => {
    console.log(contactInformation);
  };

  render() {
    return (
      <div className="w-1/3 h-full bg-gray-300 shadow-lg flex p-5">
        <ContactInformation
          handleContactInformation={this.handleContactInformation}
        />
      </div>
    );
  }
}

export default Manager;

//Contact information will be a div, with a form inside.
