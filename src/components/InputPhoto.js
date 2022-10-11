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
        <div className="p-4 bg-white">
          <input type="file" id="browsePhoto" onChange={this.handleChange} />
          <img className="bg-contain" src={this.state.file} />
        </div>
      );
    } else {
      return (
        <div className="p-4 bg-transparent">
          <input type="file" onChange={this.handleChange} />
          <img src={this.state.file} />
          <div>
            <button
              className="rounded-full bg-white p-1 mt-4 hover:shadow-md hover:bg-blue-600 hover:text-white"
              onClick={this.handleEdit}
            >
              Edit
            </button>
          </div>
        </div>
      );
    }
  }
}

export default InputPhoto;
