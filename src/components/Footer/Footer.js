import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "./Footer.css";

export default function Footer() {
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#39aebc" }}>
        <Toolbar variant="dense">
          <Typography variant="h6" fontSize="small">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              // sx={{ mr: 2 }}
            >
              <CopyrightIcon sx={{ fontSize: 15 }}/>
            </IconButton>
            By Mangesh Sodnar
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
