"use client";
import { Container } from "@mui/material/Container";
import { AppBar } from "@mui/material/AppBar";
import { useState } from "react";
import { Toolbar } from "@mui/material/Toolbar";
import { Box } from "@mui/material/Box";
import { Typography } from "@mui/material/Typography";
import { Button } from "@mui/material/Button";
import { MenuItem } from "@mui/material/MenuItem";
import { Drawer } from "@mui/material/Drawer";
import { Menu } from "@mui/material/Menu";
// import { MenuIcon } from "@mui/icons-material/MenuIcon";
import { SignOutButton } from "@clerk/nextjs";
import { Divider } from "@mui/material/Divider";
import Link from "next/link";

const logoStyle = {
  width: "140px",
  height: "auto",
  cursor: "pointer",
};

export default function AppNavBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor: "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              {/* <img alt="logo of site" style={logoStyle} /> */}
              <Box sx={{ display: { xs: "none", md: "flex" }, ml: 2 }}>
                <Button
                  onClick={() => scrollToSection("about")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    About
                  </Typography>
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <Link href="/sign-in" passHref>
                <Button
                  color="primary"
                  variant="outlined"
                  sx={{ width: "100%" }}
                >
                  Sign in
                </Button>
              </Link>
              <Link href="/sign-up" passHref>
                <Button
                  color="primary"
                  variant="contained"
                  sx={{ width: "100%" }}
                >
                  Sign up
                </Button>
              </Link>
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                {/* <MenuIcon /> */}
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <MenuItem onClick={() => scrollToSection("about")}>
                    About
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <Link href="/sign-up" passHref>
                      <Button
                        color="primary"
                        variant="contained"
                        sx={{ width: "100%" }}
                      >
                        Sign up
                      </Button>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/sign-in" passHref>
                      <Button
                        color="primary"
                        variant="outlined"
                        sx={{ width: "100%" }}
                      >
                        Sign in
                      </Button>
                    </Link>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
