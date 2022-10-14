import React, { Component } from "react";

class InputPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  };

  handleEdit = () => {
    this.setState({
      file: null,
    });
  };

  render() {
    if (this.state.file === null || this.state.file === "") {
      return (
        <div className="p-4 bg-white relative h-full w-full">
          <input
            type="file"
            id="browsePhoto"
            onChange={this.handleChange}
            className="absolute -translate-x-[50%]  left-[50%] -translate-y-[50%] top-[50%] outline-none border-none bg-transparent"
          />
        </div>
      );
    } else {
      return (
        <div className="p-4 bg-transparent relative group">
          <input
            type="file"
            onChange={this.handleChange}
            className="absolute invisible"
          />
          <img className="object-cover h-full w-full " src={this.state.file} />

          <button
            className="rounded-full bg-white p-1 mt-4 hover:shadow-md hover:bg-blue-600 hover:text-white absolute bottom-6 left-6 invisible group-hover:visible"
            onClick={this.handleEdit}
          >
            Edit
          </button>
        </div>
      );
    }
  }
}

export default InputPhoto;
