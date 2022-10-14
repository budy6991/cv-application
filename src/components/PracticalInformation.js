import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DisplayExperiece from "./DisplayExperiece";

class PracticalInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job: "",
      company: "",
      date: "",
      open: false,
    };
  }

  handleClickToOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleJob = (event) => {
    this.setState({
      job: event.target.value,
    });
  };

  handleCompany = (event) => {
    this.setState({
      company: event.target.value,
    });
  };

  handleDate = (event) => {
    this.setState({
      date: event.target.value,
    });
  };

  handleSubmit = (event) => {
    let id = "id" + Math.random().toString(16).slice(2);
    event.preventDefault();
    this.setState({
      open: false,
    });
    this.props.handlePracticalInformation({
      job: this.state.job,
      company: this.state.company,
      date: this.state.date,
      id,
    });
    this.setState({
      job: "",
      company: "",
      date: "",
    });
  };

  render() {
    return (
      <div
        className="col-start-1 col-end-2 row-start-3 row-end-4 p-4 flex-col overflow-scroll
      "
      >
        <div>
          <div className="flex justify-between">
            <h1 className=" text-xl text-blue-700">Experience</h1>
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
                    placeholder="Job"
                    className="text-center"
                    onChange={this.handleJob}
                  ></input>
                </DialogContent>
                <DialogContent>
                  <input
                    type="text"
                    placeholder="Company"
                    className="text-center"
                    onChange={this.handleCompany}
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
        <DisplayExperiece experience={this.props.practicalInformation} />
      </div>
    );
  }
}

export default PracticalInformation;
