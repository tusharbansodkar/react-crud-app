import {
  ModeEditOutlined,
  DeleteOutlineOutlined,
  Edit,
} from "@mui/icons-material";
import { Button, Stack, IconButton } from "@mui/material";
import { useState } from "react";
import { ModalBox } from "./ModalBox";

const ActionButtons = ({ handleDelete, id, handleEdit }) => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = () => {
    setIsEdit(true);
    setOpen(true);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(close);
    setIsEdit(false);
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <Button
        variant="outlined"
        color="secondary"
        size="small"
        onClick={handleEditClick}
      >
        <ModeEditOutlined />
      </Button>
      <Button
        variant="outlined"
        color="error"
        size="small"
        onClick={() => handleDelete(id)}
      >
        <DeleteOutlineOutlined />
      </Button>
      <ModalBox
        open={open}
        handleClose={handleClose}
        isEdit={isEdit || false}
        id={id}
        handleEdit={handleEdit}
      />
    </Stack>
  );
};
export default ActionButtons;
