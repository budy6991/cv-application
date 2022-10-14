import React from "react";
import EducationCard from "./EducationCard";

function DisplayEducation(props) {
  const educationArray = props.education;
  console.log(educationArray);
  const displayAll = educationArray.map((education) => {
    return (
      <EducationCard
        degree={education.degree}
        university={education.university}
        date={education.date}
        key={education.id}
        id={education.id}
        handleEdit={props.handleEdit}
        handleRemove={props.handleRemove}
      />
    );
  });
  return <div>{displayAll}</div>;
}

export default DisplayEducation;
