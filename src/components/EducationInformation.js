import React, { Component } from "react";

class EducationInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experience: [],
    };
  }

  render() {
    return (
      <div className="col-start-1 col-end-2 row-start-2 row-end-3 p-4 flex flex-col">
        <div className="flex justify-between">
          <h1 className=" text-xl text-blue-700">Education</h1>
          <button className="rounded-full bg-white p-1 hover:shadow-md hover:bg-blue-600 hover:text-white">
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default EducationInformation;
