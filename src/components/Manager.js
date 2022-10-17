import React, { useState } from "react";
import ContactInformation from "./ContactInformation";
import EducationInformation from "./EducationInformation";
import InputPhoto from "./InputPhoto";
import PracticalInformation from "./PracticalInformation";
import SkillInformation from "./SkillInformation";

function Manager() {
  const [contactInformationArray, setContactInformationArray] = useState([]);
  const [educationInformationArray, setEducationInformationArray] = useState(
    []
  );
  const [practicalInformationArray, setPracticalInformationArray] = useState(
    []
  );
  const [skillInformationArray, setSkillInformationArray] = useState([]);

  const handleContactInformation = (contactInformation) => {
    setContactInformationArray(
      contactInformationArray.concat(contactInformation)
    );
  };

  const handleEducationInformation = (educationInformation) => {
    setEducationInformationArray(
      educationInformationArray.concat(educationInformation)
    );
  };

  const handlePracticalInformation = (practicalInformation) => {
    setPracticalInformationArray(
      practicalInformationArray.concat(practicalInformation)
    );
  };

  const handleSkillInformation = (skillInformation) => {
    setSkillInformationArray(skillInformationArray.concat(skillInformation));
  };

  const handleEducationEdit = (education, id) => {
    setEducationInformationArray(
      educationInformationArray.map((educationCard) => {
        if (educationCard.id === id) {
          educationCard.degree = education.newDegree;
          educationCard.university = education.newUniversity;
          educationCard.date = education.newDate;
        }
        return educationCard;
      })
    );
  };

  const handleExperienceEdit = (experience, id) => {
    setPracticalInformationArray(
      practicalInformationArray.map((experienceCard) => {
        if (experienceCard.id === id) {
          experienceCard.job = experience.newJob;
          experienceCard.company = experience.newCompany;
          experienceCard.date = experience.newDate;
        }
        return experienceCard;
      })
    );
  };

  const handleSkillEdit = (skill, id) => {
    setSkillInformationArray(
      skillInformationArray.map((skillCard) => {
        if (skillCard.id === id) {
          skillCard.name = skill.newName;
          skillCard.description = skill.newDescription;
        }
        return skillCard;
      })
    );
  };

  const handleEducationRemove = (id) => {
    setEducationInformationArray(
      educationInformationArray.filter((educationCard) => {
        return educationCard.id != id;
      })
    );
  };

  const handleExperienceRemove = (id) => {
    setPracticalInformationArray(
      practicalInformationArray.filter((experienceCard) => {
        return experienceCard.id != id;
      })
    );
  };

  const handleSkillRemove = (id) => {
    setSkillInformationArray(
      skillInformationArray.filter((skillCard) => {
        return skillCard.id != id;
      })
    );
  };

  return (
    <div className="w-2/5 h-full bg-gray-100 shadow-lg p-5 grid grid-cols-2 grid-rows-3">
      <ContactInformation handleContactInformation={handleContactInformation} />
      <InputPhoto className="bg-cover" />

      <EducationInformation
        handleEducationInformation={handleEducationInformation}
        handleEdit={handleEducationEdit}
        handleRemove={handleEducationRemove}
        education={educationInformationArray}
      />
      <PracticalInformation
        handlePracticalInformation={handlePracticalInformation}
        handleEdit={handleExperienceEdit}
        handleRemove={handleExperienceRemove}
        experience={practicalInformationArray}
      />

      <SkillInformation
        handleSkillInformation={handleSkillInformation}
        skillSet={skillInformationArray}
        handleEdit={handleSkillEdit}
        handleRemove={handleSkillRemove}
      />
    </div>
  );
}

export default Manager;
