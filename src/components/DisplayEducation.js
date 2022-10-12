import React from "react";
import EducationCard from "./EducationCard";

function DisplayEducation(props) {
  const educationArray = props.education;
  const displayAll = educationArray.map((education) => {
    return (
      <EducationCard
        degree={education.degree}
        university={education.university}
        date={education.date}
        description={education.description}
        id={education.id}
      />
    );
  });
  return <div>{displayAll}</div>;
}

export default DisplayEducation;
