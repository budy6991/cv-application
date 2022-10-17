import React, { useState } from "react";

function InputPhoto() {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleEdit = () => {
    setFile(null);
  };

  if (file === null || file === "") {
    return (
      <div className="p-4 bg-white relative h-full w-full">
        <input
          type="file"
          id="browsePhoto"
          onChange={handleChange}
          className="absolute -translate-x-[50%]  left-[50%] -translate-y-[50%] top-[50%] outline-none border-none bg-transparent"
        />
      </div>
    );
  } else {
    return (
      <div className="p-4 bg-transparent relative group">
        <input
          type="file"
          onChange={handleChange}
          className="absolute invisible"
        />
        <img className="object-cover h-full w-full " src={file} />

        <button
          className="rounded-full bg-white p-1 mt-4 hover:shadow-md hover:bg-blue-600 hover:text-white absolute bottom-6 left-6 invisible group-hover:visible"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
    );
  }
}

export default InputPhoto;
