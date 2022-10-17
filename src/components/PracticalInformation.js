import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DisplayExperiece from "./DisplayExperiece";

function PracticalInformation({
  handlePracticalInformation,
  experience,
  handleRemove,
  handleEdit,
}) {
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleJob = (event) => {
    setJob(event.target.value);
  };

  const handleCompany = (event) => {
    setCompany(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    let id = "id" + Math.random().toString(16).slice(2);
    event.preventDefault();
    setOpen(false);
    handlePracticalInformation({
      job: job,
      company: company,
      date: date,
      id,
    });
    setJob("");
    setCompany("");
    setDate("");
  };

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
                  placeholder="Job"
                  className="text-center"
                  onChange={handleJob}
                ></input>
              </DialogContent>
              <DialogContent>
                <input
                  type="text"
                  placeholder="Company"
                  className="text-center"
                  onChange={handleCompany}
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
      <DisplayExperiece
        experience={experience}
        handleRemove={handleRemove}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default PracticalInformation;
