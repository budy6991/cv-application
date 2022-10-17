import React, { useState } from "react";

function SkillCard({ name, description, id, handleEdit, handleRemove }) {
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
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
    handleEdit({ newName, newDescription }, id);
  };

  const handleNameEdit = (event) => {
    setNewName(event.target.value);
  };

  const handleDescriptionEdit = (event) => {
    setNewDescription(event.target.value);
  };

  if (isHovering === null || isHovering === false) {
    return (
      <div
        className=" p-4 flex justify-between bg-white shadow-md shadow-blue-700 rounded-2xl my-2 items-center"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="text-xs font-bold">{name}</div>
        <div className="text-xs font-extralight">{description}</div>
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
              value={newName}
              onChange={handleNameEdit}
              className="text-xs font-bold"
            ></input>
            <input
              className="text-xs font-extralight"
              value={newDescription}
              onChange={handleDescriptionEdit}
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
            <div className="text-xs font-bold">{name}</div>
            <div className="text-xs font-extralight">{description}</div>
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

export default SkillCard;
