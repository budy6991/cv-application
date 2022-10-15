import React from "react";
import SkillCard from "./SkillCard";

function DisplaySkillSet(props) {
  const skillSetArray = props.skillSet;
  const displayAll = skillSetArray.map((skill) => {
    return (
      <SkillCard
        name={skill.name}
        description={skill.description}
        key={skill.id}
        id={skill.id}
        handleEdit={props.handleEdit}
        handleRemove={props.handleRemove}
      />
    );
  });
  return <div>{displayAll}</div>;
}

export default DisplaySkillSet;
