import React, { Component } from "react";
import ContactInformation from "./ContactInformation";
import EducationInformation from "./EducationInformation";
import InputPhoto from "./InputPhoto";

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
    this.setState({
      contactInformation:
        this.state.contactInformation.concat(contactInformation),
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="w-1/3 h-full bg-gray-200 shadow-lg flex  p-5">
        <ContactInformation
          handleContactInformation={this.handleContactInformation}
        />
        <InputPhoto className="w-full h-1/3 flex flex-col p-4" />
        {/* <EducationInformation className="w-1/2 h-1/3 flex flex-col p-4" /> */}
      </div>
    );
  }
}

export default Manager;

// Now that we have the contact information we need to implement methods for editing it, not removing.

// For the educational experience, the div will be scrollable, so we can add as much experiences as we want.

// Same for the pratical experinece, and implement their methods for edit, etc.
