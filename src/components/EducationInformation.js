import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { findAllByTestId } from "@testing-library/react";

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

  handleToClose = () => {
    this.setState({
      open: false,
    });
    console.log(this.state);
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

  handle;

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
            onClose={this.handleToClose}
            className="p-2 m-4"
          >
            <DialogTitle>{"Education"}</DialogTitle>
            <DialogContent>
              <form>
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
              <Button onClick={this.handleToClose} color="primary" autoFocus>
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
