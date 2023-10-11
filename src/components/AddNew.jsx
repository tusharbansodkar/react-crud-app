import { ModalBox } from "./ModalBox";
import { Button } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useGlobalContext } from "../../context";

const AddNew = () => {
  const [open, setOpen] = useState(false);
  const { handleAddNew } = useGlobalContext();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        handleAddNew={handleAddNew}
        handleClose={handleClose}
      />
    </div>
  );
};
export default AddNew;
