import React from "react";
import ExperienceCard from "./ExperienceCard";

function DisplayExperiece(props) {
  const experienceArray = props.experience;
  const displayAll = experienceArray.map((experience) => {
    return (
      <ExperienceCard
        job={experience.job}
        company={experience.company}
        date={experience.date}
        key={experience.id}
        id={experience.id}
        handleEdit={props.handleEdit}
        handleRemove={props.handleRemove}
      />
    );
  });
  return <div>{displayAll}</div>;
}

export default DisplayExperiece;
