import React from 'react';
import { Snackbar } from '@mui/material';

const Mysnackbar = ({ open, handleCloseBar }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={open}
      onClose={handleCloseBar}
      message="Enter task text, please !"
      sx={{ backgroundColor: 'red' }}
      transitionDuration={100}
    />
  )
}

export default Mysnackbar;