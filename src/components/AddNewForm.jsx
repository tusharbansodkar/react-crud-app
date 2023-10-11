import Form from "./Form";
import { useState } from "react";

const AddNewForm = ({ handleAddNew }) => {
  const [record, setRecord] = useState({
    name: "",
    department: "",
    gender: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      ...record,
      id: Date.now(),
    };

    // send to server
    handleAddNew(newRecord);

    alert("Record enterd successfully.");
    setRecord({
      name: "",
      department: "",
      gender: "",
    });
    e.currentTarget.reset();
  };

  return (
    <Form handleSubmit={handleSubmit} setRecord={setRecord} record={record} />
  );
};
export default AddNewForm;
