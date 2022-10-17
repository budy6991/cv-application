import React, { useState } from "react";

function ContactInformation({ handleContactInformation }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [didSubmit, setDidSubmit] = useState(null);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSurname = (event) => {
    setSurname(event.target.value);
  };

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleMail = (event) => {
    setEmail(event.target.value);
  };

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleEdit = () => {
    setDidSubmit(false);
  };

  const handleSubmit = (event) => {
    let id = "id" + Math.random().toString(16).slice(2);
    event.preventDefault();
    setDidSubmit(false);
    handleContactInformation({
      name: name,
      surname: surname,
      phoneNumber: phoneNumber,
      email: email,
      location: location,
      id,
    });
  };

  if (didSubmit === null || didSubmit === false) {
    return (
      //Returns the form either the fields are empty or during editing.
      <div className="w-full h-fit p-4 ">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between ">
            <h1 className=" text-xl text-blue-700">Contact Information</h1>
            <button
              className="rounded-full bg-white p-1 hover:shadow-md hover:bg-blue-600 hover:text-white justify-end"
              type="submit"
            >
              Add
            </button>
          </div>
          <div className=" flex flex-col">
            <label>Name </label>
            <input
              value={name}
              className="focus:bg-transparent focus:outline-none text-blue-700"
              type="text"
              onChange={handleName}
            ></input>
          </div>
          <div className=" flex flex-col">
            <label>Surname</label>
            <input
              value={surname}
              className="focus:bg-transparent focus:outline-none text-blue-700"
              type="text"
              onChange={handleSurname}
            ></input>
          </div>
          <div className=" flex flex-col">
            <label>Phone Number</label>
            <input
              value={phoneNumber}
              className="focus:bg-transparent focus:outline-none text-blue-700"
              type="tel"
              onChange={handlePhoneNumber}
            ></input>
          </div>
          <div className="flex flex-col">
            <label>Email </label>
            <input
              value={email}
              className="focus:bg-transparent focus:outline-none text-blue-700"
              type="email"
              onChange={handleMail}
            ></input>
          </div>
          <div className="flex flex-col">
            <label>Location</label>
            <input
              value={location}
              className="focus:bg-transparent focus:outline-none text-blue-700"
              type="text"
              onChange={handleLocation}
            ></input>
          </div>
          <div className=" w-fit flex justify-end"></div>
        </form>
      </div>
    );
  } else {
    return (
      // Returns a div which is the output value styled differently.
      <div className="w-full h-fit p-4">
        <div className="flex justify-between ">
          <h1 className=" text-xl text-blue-700">Contact Information</h1>
          <button
            className="rounded-full bg-white p-1 hover:shadow-md hover:bg-blue-600 hover:text-white justify-end"
            type="submit"
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>
        <div className="flex flex-col">
          <label>Name </label>
          <h2 className="text-blue-700 text-right">{name}</h2>
        </div>
        <div className="flex flex-col">
          <label>Surname</label>
          <h2 className="text-blue-700 text-right">{surname}</h2>
        </div>
        <div className="flex flex-col">
          <label>Phone Number</label>
          <h2 className="text-blue-700 text-right">{phoneNumber}</h2>
        </div>
        <div className="flex flex-col">
          <label>Email </label>
          <h2 className="text-blue-700 text-right">{email}</h2>
        </div>
        <div className=" flex flex-col">
          <label>Location</label>
          <h2 className="text-blue-700 text-right">{location}</h2>
        </div>
      </div>
    );
  }
}

export default ContactInformation;
