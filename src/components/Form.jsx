import React from "react";
import { Button } from "@mui/material";
export default function Form({ handleSubmit, record, setRecord }) {
  const handleChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  const handleRadioBtn = (e) => {
    setRecord({ ...record, gender: e.target.value });
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          value={record.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="department" className="form-label">
          Department
        </label>
        <input
          type="text"
          className="form-input"
          name="department"
          id="department"
          value={record.department}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <input
          type="radio"
          id="male"
          name="gender"
          value="Male"
          style={{
            marginLeft: "5px",
          }}
          onChange={handleRadioBtn}
          checked={record.gender == "Male" ? true : false}
        />
        <label
          htmlFor="male"
          style={{
            marginLeft: "5px",
          }}
        >
          Male
        </label>

        <input
          type="radio"
          id="female"
          name="gender"
          value="Female"
          style={{
            marginLeft: "5px",
          }}
          onChange={handleRadioBtn}
          checked={record.gender == "Female" ? true : false}
        />
        <label
          htmlFor="female"
          style={{
            marginLeft: "5px",
          }}
        >
          Female
        </label>
      </div>
      <Button color="success" variant="contained" size="small" type="submit">
        Submit
      </Button>
    </form>
  );
}
