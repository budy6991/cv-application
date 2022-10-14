import React, { Component } from "react";
import ContactInformation from "./ContactInformation";
import EducationInformation from "./EducationInformation";
import InputPhoto from "./InputPhoto";
import PracticalInformation from "./PracticalInformation";
import SkillInformation from "./SkillInformation";

class Manager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactInformation: [],
      educationInformation: [],
      practicalInformation: [],
      skillInformation: [],
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

  handlePracticalInformation = (practicalInformation) => {
    this.setState({
      practicalInformation:
        this.state.practicalInformation.concat(practicalInformation),
    });
  };

  handleSkillInformation = (skillInformation) => {
    this.setState({
      skillInformation: this.state.skillInformation.concat(skillInformation),
    });
  };

  handleEducationEdit = (education, id) => {
    this.setState({
      educationInformation: this.state.educationInformation.map(
        (educationCard) => {
          if (educationCard.id === id) {
            educationCard.degree = education.newDegree;
            educationCard.university = education.newUniversity;
            educationCard.date = education.newDate;
          }
          return educationCard;
        }
      ),
    });
  };

  handleExperienceEdit = (experience, id) => {
    this.setState({
      practicalInformation: this.state.practicalInformation.map(
        (experienceCard) => {
          if (experienceCard.id === id) {
            experienceCard.job = experience.newJob;
            experienceCard.company = experience.newCompany;
            experienceCard.date = experience.newDate;
          }
          return experienceCard;
        }
      ),
    });
  };

  handleEducationRemove = (id) => {
    this.setState({
      educationInformation: this.state.educationInformation.filter(
        (educationCard) => {
          return educationCard.id != id;
        }
      ),
    });
  };

  handleExperienceRemove = (id) => {
    this.setState({
      practicalInformation: this.state.practicalInformation.filter(
        (experienceCard) => {
          return experienceCard.id != id;
        }
      ),
    });
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
          handleRemove={this.handleEducationRemove}
          education={this.state.educationInformation}
        />
        <PracticalInformation
          handlePracticalInformation={this.handlePracticalInformation}
          handleEdit={this.handleExperienceEdit}
          handleRemove={this.handleExperienceRemove}
          experience={this.state.practicalInformation}
        />

        <SkillInformation
          handleSkillInformation={this.handleSkillInformation}
        />
      </div>
    );
  }
}

export default Manager;
