import { ModalBox } from "./ModalBox";
import { Button } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { useState } from "react";

const AddNew = ({ handleAddNew }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(close);
  };

  return (
    <div style={{ width: "100vw", marginBottom: "10px", textAlign: "right" }}>
      <Button
        variant="contained"
        size="small"
        color="success"
        startIcon={<AddOutlined />}
        sx={{ marginRight: "50px" }}
        onClick={handleOpen}
      >
        Add New
      </Button>
      <ModalBox
        open={open}
        handleClose={handleClose}
        handleAddNew={handleAddNew}
      />
    </div>
  );
};
export default AddNew;
