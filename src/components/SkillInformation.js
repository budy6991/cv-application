import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DisplaySkillSet from "./DisplaySkillSet";

function SkillInformation({
  handleSkillInformation,
  handleRemove,
  handleEdit,
  skillSet,
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (event) => {
    let id = "id" + Math.random().toString(16).slice(2);
    event.preventDefault();
    setOpen(false);
    handleSkillInformation({
      name: name,
      description: description,
      id,
    });
    setName("");
    setDescription("");
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

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
                  placeholder="Skill"
                  className="text-center"
                  onChange={handleName}
                ></input>
              </DialogContent>
              <DialogContent>
                <textarea
                  type="text"
                  placeholder="Description"
                  className="text-center"
                  onChange={handleDescription}
                ></textarea>
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
      <DisplaySkillSet
        skillSet={skillSet}
        handleEdit={handleEdit}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default SkillInformation;
