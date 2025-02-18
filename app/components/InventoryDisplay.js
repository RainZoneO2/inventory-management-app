import { firestore } from "@/firebase";
import { Box, Button, Stack, Typography } from "@mui/material";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { useEffect, useState, useCallback } from "react";
import { useAuth } from "@clerk/clerk-react";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import Filter from "./Filter";
import ModalDialog from "./ModalDialog";
import InventoryList from "./InventoryList";

const auth = getAuth();

const InventoryDisplay = () => {
  const [inventory, setInventory] = useState([]);
  const [itemsToShow, setItemsToShow] = useState([]);
  const [regex, setRegex] = useState(RegExp);
  const [open, setOpen] = useState(false);

  const { getToken, userId } = useAuth();

  const signIntoFirebaseWithClerk = useCallback(async () => {
    const token = await getToken({ template: "integration_firebase" });
    const userCredentials = await signInWithCustomToken(auth, token || "");
    // The userCredentials.user object can call the methods of
    // the Firebase platform as an authenticated user.
    console.log("User:", userCredentials.user);
  }, [getToken]);

  const updateInventory = useCallback(async () => {
    const snapshot = query(collection(firestore, "inventory"));
    const docs = await getDocs(snapshot);
    const inventoryList = [];
    docs.forEach((doc) => {
      inventoryList.push({ name: doc.id, ...doc.data() });
    });
    setInventory(inventoryList);
  }, []);

  useEffect(() => {
    if (!userId) return;

    const authenticate = async () => {
      await signIntoFirebaseWithClerk();
      await updateInventory();
    };
    authenticate();
  }, [signIntoFirebaseWithClerk, updateInventory, userId]);

  useEffect(() => {
    setItemsToShow(inventory.filter((item) => regex.test(item.name)));
  }, [regex, inventory]);

  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, "inventory"), item);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      if (quantity === 1) {
        await deleteDoc(docRef);
      } else {
        await setDoc(docRef, { quantity: quantity - 1 });
      }
    }
    await updateInventory();
  };

  const addItem = async (item) => {
    const docRef = doc(collection(firestore, "inventory"), item);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      await setDoc(docRef, { quantity: quantity + 1 });
    } else {
      await setDoc(docRef, { quantity: 1 });
    }
    await updateInventory();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      {/* <Box
        width="800px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding={2.5}
        mb={-3}
      > </Box>*/}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        <Filter setRegex={setRegex} />
        <Button
          variant="contained"
          onClick={() => {
            handleOpen();
          }}
        >
          Add New Item
        </Button>
      </Stack>
      <ModalDialog handleClose={handleClose} addItem={addItem} open={open} />
      <Box border=" 1px solid #333">
        <Box
          width="100%"
          height="25%"
          bgcolor="#ADD8E6"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h2" color="#333">
            Inventory Items
          </Typography>
        </Box>
        <InventoryList
          itemsToShow={itemsToShow}
          addItem={addItem}
          removeItem={removeItem}
        />
      </Box>
    </Box>
  );
};

export default InventoryDisplay;
