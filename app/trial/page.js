"use client";

import { useState, useEffect } from "react";
import {
  Modal,
  Stack,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import InventoryDisplay from "../components/InventoryDisplay";

export default function Page() {
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
      <Button>Sign in</Button>
      <InventoryDisplay />
    </Box>
  );
}
