import React, { useState } from "react";

function EducationCard({
  degree,
  university,
  date,
  id,
  handleEdit,
  handleRemove,
}) {
  const [newDegree, setNewDegree] = useState(degree);
  const [newUniversity, setNewUniversity] = useState(university);
  const [newDate, setNewDate] = useState(date);
  const [isHovering, setIsHovering] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
    handleEdit({ newDegree, newUniversity, newDate }, id);
  };

  const handleDegreeEdit = (event) => {
    setNewDegree(event.target.value);
  };

  const handleUniversityEdit = (event) => {
    setNewUniversity(event.target.value);
  };

  const handleDateEdit = (event) => {
    setNewDate(event.target.value);
  };

  if (isHovering === null || isHovering === false) {
    return (
      <div
        className=" p-4 flex justify-between bg-white shadow-md shadow-blue-700 rounded-2xl my-2 items-center"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="text-xs font-bold">{degree}</div>
        <div className="text-xs">{university}</div>
        <div className="text-xs text-blue-500">{date}</div>
      </div>
    );
  } else {
    return (
      <div
        className=" p-4 flex justify-between bg-white shadow-lg shadow-blue-700 rounded-2xl my-2 items-center"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {isEditing === true ? (
          <div>
            <input
              value={newDegree}
              onChange={handleDegreeEdit}
              className="text-xs font-bold"
            ></input>
            <input
              className="text-xs font-extralight"
              value={newUniversity}
              onChange={handleUniversityEdit}
            ></input>
            <input
              className="text-xs text-blue-500"
              value={newDate}
              onChange={handleDateEdit}
            ></input>
            <button
              className="rounded-full bg-white p-1 hover:shadow-md hover:bg-blue-600 hover:text-white text-xs"
              onClick={stopEditing}
            >
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="text-xs font-bold">{degree}</div>
            <div className="text-xs font-extralight">{university}</div>
            <div className="text-xs text-blue-500">{date}</div>
            <button
              className="rounded-full bg-white p-1 hover:shadow-md hover:bg-blue-600 hover:text-white text-xs"
              onClick={() => startEditing()}
            >
              Edit
            </button>
            <button
              className="rounded-full bg-white p-1 hover:shadow-md hover:bg-red-600 hover:text-white text-xs"
              onClick={() => handleRemove(id)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default EducationCard;
