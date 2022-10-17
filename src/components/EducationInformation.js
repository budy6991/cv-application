import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DisplayEducation from "./DisplayEducation";

function EducationInformation({
  handleEducationInformation,
  education,
  handleEdit,
  handleRemove,
}) {
  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const [date, setDate] = useState("");
  const [open, setOpen] = useState("");

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (event) => {
    let id = "id" + Math.random().toString(16).slice(2);
    event.preventDefault();
    setOpen(false);
    handleEducationInformation({
      degree: degree,
      university: university,
      date: date,
      id,
    });
    setDegree("");
    setUniversity("");
    setDate("");
  };

  const handleDegree = (event) => {
    setDegree(event.target.value);
  };

  const handleUniversity = (event) => {
    setUniversity(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  return (
    <div
      className="col-start-1 col-end-2 row-start-2 row-end-3 p-4 flex flex-col overflow-scroll
      "
    >
      <div>
        <div className="flex justify-between">
          <h1 className=" text-xl text-blue-700">Education</h1>
          <button
            className="rounded-full bg-white p-1 hover:shadow-md hover:bg-blue-600 hover:text-white"
            onClick={handleClickToOpen}
          >
            Add
          </button>
        </div>
      </div>
      <div stlye={{}}>
        <Dialog open={open} onClose={handleSubmit} className="p-2 m-4">
          <DialogTitle>{"Education"}</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <DialogContent>
                <input
                  type="text"
                  placeholder="Degree"
                  className="text-center"
                  onChange={handleDegree}
                ></input>
              </DialogContent>
              <DialogContent>
                <input
                  type="text"
                  placeholder="University"
                  className="text-center"
                  onChange={handleUniversity}
                ></input>
              </DialogContent>
              <DialogContent>
                <input
                  type="text"
                  placeholder="From-To"
                  className="text-center"
                  onChange={handleDate}
                ></input>
              </DialogContent>
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              className="hover:animate-pulse"
              onClick={handleSubmit}
              type="submit"
              color="primary"
              autoFocus
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <DisplayEducation
        education={education}
        handleEdit={handleEdit}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default EducationInformation;
