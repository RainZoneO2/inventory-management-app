"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#CFC193",
    },
    secondary: {
      main: "#A5A090",
    },
  },
  typography: {
    fontFamily: '"Source Sans Pro", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
