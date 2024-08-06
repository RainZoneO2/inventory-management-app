"use client";
import { Box } from "@mui/material/Box";
import InventoryDisplay from "../components/InventoryDisplay";
import { useAuth } from "@clerk/nextjs";
import { Typography } from "@mui/material";

export default function Page() {
  const { getToken, userId } = useAuth();

  if (!userId) {
    return (
      <Typography>You need to be signed in to access this page.</Typography>
    );
  }

  const signIntoFirebaseWithClerk = async () => {
    const token = await getToken({ template: "integration_firebase" });

    const userCredentials = await signInWithCustomToken(auth, token || "");
    console.log("User:", userCredentials.user);
  };

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
      <InventoryDisplay />
    </Box>
  );
}
