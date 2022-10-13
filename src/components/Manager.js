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

  handleEducationInformation = (educationInformation) => {
    this.setState({
      educationInformation:
        this.state.educationInformation.concat(educationInformation),
    });
    console.log(this.state);
  };

  handleEducationEdit = (education) => {
    console.log(this.state.educationInformation);
    console.log(education);
  };

  render() {
    return (
      <div className="w-2/5 h-full bg-gray-100 shadow-lg p-5 grid grid-cols-2 grid-rows-3">
        <ContactInformation
          handleContactInformation={this.handleContactInformation}
        />
        <InputPhoto className="bg-cover" />

        <EducationInformation
          handleEducationInformation={this.handleEducationInformation}
          handleEdit={this.handleEducationEdit}
          education={this.state.educationInformation}
        />
      </div>
    );
  }
}

export default Manager;
