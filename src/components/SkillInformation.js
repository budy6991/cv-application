import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DisplayEducation from "./DisplayEducation";

export class SkillInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      open: false,
    };
  }

  handleClickToOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleSubmit = (event) => {
    let id = "id" + Math.random().toString(16).slice(2);
    event.preventDefault();
    this.setState({
      open: false,
    });
    this.props.handleEducationInformation({
      name: this.state.name,
      description: this.state.description,
      id,
    });
    this.setState({
      name: "",
      description: "",
    });
  };

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  render() {
    return (
      <div
        className="col-start-2 col-end-3 row-start-2 row-end-4 p-4 flex flex-col overflow-scroll
          "
      >
        <div>
          <div className="flex justify-between">
            <h1 className=" text-xl text-blue-700">Skill Set</h1>
            <button
              className="rounded-full bg-white p-1 hover:shadow-md hover:bg-blue-600 hover:text-white"
              onClick={this.handleClickToOpen}
            >
              Add
            </button>
          </div>
        </div>
        <div stlye={{}}>
          <Dialog
            open={this.state.open}
            onClose={this.handleSubmit}
            className="p-2 m-4"
          >
            <DialogTitle>{"Education"}</DialogTitle>
            <DialogContent>
              <form onSubmit={this.handleSubmit}>
                <DialogContent>
                  <input
                    type="text"
                    placeholder="Degree"
                    className="text-center"
                    onChange={this.handleName}
                  ></input>
                </DialogContent>
                <DialogContent>
                  <input
                    type="text"
                    placeholder="University"
                    className="text-center"
                    onChange={this.handleDescription}
                  ></input>
                </DialogContent>
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                className="hover:animate-pulse"
                onClick={this.handleSubmit}
                type="submit"
                color="primary"
                autoFocus
              >
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default SkillInformation;
