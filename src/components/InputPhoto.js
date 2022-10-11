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

  render() {
    if (this.state.file === null || this.state.file === "") {
      return (
        <div className="w-1/2 h-1/3 flex justify-center items-center m-9 ml-9 p-2 bg-white">
          <input type="file" onChange={this.handleChange} />
          <img src={this.state.file} />
        </div>
      );
    } else {
      return (
        <div className="w-1/2 h-1/3 flex justify-center items-center m-9 ml-9 p-2 bg-transparent">
          <input type="file" onChange={this.handleChange} />
          <img src={this.state.file} />
        </div>
      );
    }
  }
}

export default InputPhoto;
