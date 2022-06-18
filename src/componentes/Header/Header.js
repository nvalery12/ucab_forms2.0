import React from 'react';
import { useState } from 'react';
import "./Header.css"
import Links from './partes/Links'
import User from './partes/User'
import Logo from './partes/Logo'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Header() {
  const [ hamburgerMenu, sethamburgerMenu ] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.preventDefault();
    sethamburgerMenu(!hamburgerMenu);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <div id="hamburger">
        <IconButton variant="plain" onClick={handleClick}>
          {!hamburgerMenu ? (
            <>
              <MenuIcon sx={{color: 'white', fontSize: 40}}/>
            </>
          ) : (
            <>
              <CloseIcon sx={{color: 'white', fontSize: 40}}/>
              <Menu
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                onClick={handleClose}
                id="account-menu"
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      left: 23,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem>
                  Crear encuesta
                </MenuItem>
                <MenuItem>
                  Ver encuestas
                </MenuItem>
              </Menu>
            </>
          )}
        </IconButton>
      </div>
      <Logo/>
      <div id="menu-links">
        <Links/>
      </div>
      <User/>
    </div>
  )
}