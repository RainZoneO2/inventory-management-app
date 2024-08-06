import { Stack } from "@mui/material/Stack";
import InventoryEntry from "./InventoryEntry";

const InventoryList = ({ itemsToShow, addItem, removeItem }) => {
  return (
    <Stack width="800px" height="300px" spacing={2} overflow="auto">
      {itemsToShow.map(({ name, quantity }) => (
        <InventoryEntry
          key={name}
          name={name}
          quantity={quantity}
          addItem={addItem}
          removeItem={removeItem}
        />
      ))}
    </Stack>
  );
};

export default InventoryList;
