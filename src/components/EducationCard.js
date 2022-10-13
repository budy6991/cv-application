import React, { Component } from "react";

export class EducationCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: null,
      newDegree: this.props.degree,
      newUniversity: this.props.university,
      newDate: this.props.date,
      isHovering: false,
      isEditing: false,
    };
  }

  handleMouseOver = () => {
    this.setState({
      isHovering: true,
    });
  };

  handleMouseOut = () => {
    this.setState({
      isHovering: false,
    });
  };

  startEditing = () => {
    this.setState({
      isEditing: true,
    });
  };

  stopEditing = () => {
    this.setState({
      isEditing: false,
    });
    this.props.handleEdit(this.state, this.props.id);
  };

  handleDegreeEdit = (event) => {
    this.setState({
      newDegree: event.target.value,
    });
  };

  handleUniversityEdit = (event) => {
    this.setState({
      newUniversity: event.target.value,
    });
  };

  handleDateEdit = (event) => {
    this.setState({
      newDate: event.target.value,
    });
  };

  showButtons = () => {
    return (
      <div>
        <button className="rounded-full bg-white p-1 hover:shadow-md hover:bg-blue-600 hover:text-white">
          Edit
        </button>
        <button className="rounded-full bg-white p-1 hover:shadow-md hover:bg-red-600 hover:text-white">
          Remove
        </button>
      </div>
    );
  };

  render() {
    const { degree, university, date } = this.props;

    const { isHovering } = this.state;
    if (isHovering === null || isHovering === false) {
      return (
        <div
          className=" p-4 flex justify-between bg-white shadow-md shadow-blue-700 rounded-2xl my-2 items-center"
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
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
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          {this.state.isEditing === true ? (
            <div>
              <input
                value={this.state.newDegree}
                onChange={this.handleDegreeEdit}
                className="text-xs font-bold"
              ></input>
              <input
                className="text-xs font-extralight"
                value={this.state.newUniversity}
                onChange={this.handleUniversityEdit}
              ></input>
              <input
                className="text-xs text-blue-500"
                value={this.state.newDate}
                onChange={this.handleDateEdit}
              ></input>
              <button
                className="rounded-full bg-white p-1 hover:shadow-md hover:bg-blue-600 hover:text-white text-xs"
                onClick={this.stopEditing}
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
                onClick={() => this.startEditing()}
              >
                Edit
              </button>
              <button className="rounded-full bg-white p-1 hover:shadow-md hover:bg-red-600 hover:text-white text-xs">
                Remove
              </button>
            </div>
          )}
        </div>
      );
    }
  }
}

export default EducationCard;
