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
  };

  handleEducationInformation = (educationInformation) => {
    this.setState({
      educationInformation:
        this.state.educationInformation.concat(educationInformation),
    });
  };

  // handleEducationEdit = (education, id) => {
  //   this.setState({
  //     educationInformation: this.state.educationInformation.map(
  //       (educationCard) => {
  //         if (educationCard.id === id) {
  //           education.newDegree = educationCard.degree;
  //         } else {
  //           return educationCard;
  //         }
  //       }
  //     ),
  //   });
  // };

  //The problem comes to the point of implementing the handleEducationEdit, it creates a conflict in the props of DisplayEducation.

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
