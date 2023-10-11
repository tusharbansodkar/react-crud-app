import { Modal, Box, Typography } from "@mui/material";
import AddNewForm from "./AddNewForm";
import EditForm from "./EditForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export function ModalBox({
  open,
  handleClose,
  handleAddNew,
  isEdit,
  id,
  handleEdit,
}) {
  return (
    <Modal open={open} onClose={handleClose} id={id || ""}>
      <Box sx={style}>
        <Typography variant="h5" fontWeight="bold">
          Add New Employee Record
        </Typography>
        {isEdit ? (
          <EditForm id={id} handleEdit={handleEdit} />
        ) : (
          <AddNewForm handleAddNew={handleAddNew} />
        )}
      </Box>
    </Modal>
  );
}
