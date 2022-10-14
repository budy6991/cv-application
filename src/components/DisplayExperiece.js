import React from "react";

function DisplayExperiece(props) {
  const experienceArray = props.experience;
  const displayAll = experienceArray.map((experience) => {
    return (
      <ExperienceCard
        job={experience.degree}
        company={experience.university}
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
