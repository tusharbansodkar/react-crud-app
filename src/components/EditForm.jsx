import { useState } from "react";
import Form from "./Form";
import { data } from "../data.js";

const EditForm = ({ id, handleEdit }) => {
  const [record, setRecord] = useState(
    data.find((employee) => id === employee.id)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const index = data.findIndex((employee) => id === employee.id);
    const updateData = data.map((employee) => {
      if (employee.id === id) {
        return record;
      }
      return employee;
    });
    handleEdit(updateData);
    alert("Record edited successfully");
  };

  return (
    <Form handleSubmit={handleSubmit} setRecord={setRecord} record={record} />
  );
};
export default EditForm;
