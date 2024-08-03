import { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";

const ModalDialog = ({ handleClose, addItem, open }) => {
  const [itemName, setItemName] = useState("");

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        width={400}
        bgcolor="white"
        border="2px solid #000"
        boxShadow={24}
        p={4}
        display="flex"
        flexDirection="column"
        gap={3}
        sx={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography variant="h6">Add Item</Typography>
        <Stack width="100%" direction="row" spacing={2}>
          <TextField
            variant="outlined"
            fullWidth
            value={itemName}
            onChange={(e) => {
              setItemName(e.target.value);
            }}
          />
          <Button
            variant="outlined"
            onClick={() => {
              addItem(itemName);
              setItemName("");
              handleClose();
            }}
          >
            Add
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ModalDialog;
