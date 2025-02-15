import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  textAlign: "center",
};

const CustomModal = ({ open, handleClose, title, children }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography className="customModal__title" variant="h5">{title}</Typography>
        <Typography sx={{ mt: 2 }}>{children}</Typography>
        <Button variant="contained" sx={{ mt: 3 }} onClick={handleClose}>
          Cerrar
        </Button>
      </Box>
    </Modal>
  );
};

export default CustomModal;
