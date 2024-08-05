import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const InventoryEntry = ({ name, quantity, addItem, removeItem }) => {
  return (
    <Box
      width="100%"
      minHeight="150px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={5}
    >
      <Typography variant="h3" color="#333" textAlign="center">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Typography>
      <Typography variant="h3" color="#333" textAlign="center">
        {quantity}
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          onClick={() => {
            addItem(name);
          }}
        >
          Add
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            removeItem(name);
          }}
        >
          Remove
        </Button>
      </Stack>
    </Box>
  );
};

export default InventoryEntry;
