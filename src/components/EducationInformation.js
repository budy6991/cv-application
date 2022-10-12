import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

class EducationInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      degree: "",
      university: "",
      date: "",
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
      degree: this.state.degree,
      university: this.state.university,
      date: this.state.date,
      description: this.state.description,
      id,
    });
  };

  handleDegree = (event) => {
    this.setState({
      degree: event.target.value,
    });
  };

  handleUniversity = (event) => {
    this.setState({
      university: event.target.value,
    });
  };

  handleDate = (event) => {
    this.setState({
      date: event.target.value,
    });
  };

  handleDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="col-start-1 col-end-2 row-start-2 row-end-3 p-4 flex flex-col">
          <div className="flex justify-between">
            <h1 className=" text-xl text-blue-700">Education</h1>
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
                    onChange={this.handleDegree}
                  ></input>
                </DialogContent>
                <DialogContent>
                  <input
                    type="text"
                    placeholder="University"
                    className="text-center"
                    onChange={this.handleUniversity}
                  ></input>
                </DialogContent>
                <DialogContent>
                  <input
                    type="text"
                    placeholder="From-To"
                    className="text-center"
                    onChange={this.handleDate}
                  ></input>
                </DialogContent>
                <DialogContent>
                  <input
                    type="text"
                    placeholder="Description"
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

export default EducationInformation;
