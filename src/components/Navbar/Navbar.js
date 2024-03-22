import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

export default function Navbar({children}) {
  return (

      <AppBar position="static" sx={{ backgroundColor: "#39aebc"}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <HourglassTopIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
          {children}
          </Typography>
        </Toolbar>
      </AppBar>

  );
}

