import React, { Component } from "react";

export class SkillCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: null,
      newName: this.props.name,
      newDescription: this.props.description,
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

  handleNameEdit = (event) => {
    this.setState({
      newName: event.target.value,
    });
  };

  handleDescriptionEdit = (event) => {
    this.setState({
      newDescription: event.target.value,
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
    const { name, description } = this.props;

    const { isHovering } = this.state;
    if (isHovering === null || isHovering === false) {
      return (
        <div
          className=" p-4 flex justify-between bg-white shadow-md shadow-blue-700 rounded-2xl my-2 items-center"
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          <div className="text-xs font-bold">{name}</div>
          <div className="text-xs font-extralight">{description}</div>
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
                value={this.state.newName}
                onChange={this.handleNameEdit}
                className="text-xs font-bold"
              ></input>
              <input
                className="text-xs font-extralight"
                value={this.state.newDescription}
                onChange={this.handleDescriptionEdit}
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
              <div className="text-xs font-bold">{name}</div>
              <div className="text-xs font-extralight">{description}</div>
              <button
                className="rounded-full bg-white p-1 hover:shadow-md hover:bg-blue-600 hover:text-white text-xs"
                onClick={() => this.startEditing()}
              >
                Edit
              </button>
              <button
                className="rounded-full bg-white p-1 hover:shadow-md hover:bg-red-600 hover:text-white text-xs"
                onClick={() => this.props.handleRemove(this.props.id)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      );
    }
  }
}

export default SkillCard;
