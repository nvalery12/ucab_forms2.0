import * as React from 'react';
import './UserConfig.css'
import CuentaConfif from './partes/CuentaConfig'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import SecurityIcon from '@mui/icons-material/Security';
import PublicIcon from '@mui/icons-material/Public';

const drawerWidth = 140;

export default function UserConfig() {
  var iconos = [<PersonIcon fontSize="large"/>,<SecurityIcon fontSize="large"/>,<PublicIcon fontSize="large"/>];

  return (
    <Box className='sidebar-container' sx={{ height: window.innerHeight-77.9}}>
      <Toolbar disableGutters className='sidebar-menu' sx={{ height: '100%', justifyContent: "center", alignItems: "start" }}>
        <Box sx={{ overflow: 'auto'}}>
          <List sx={{ color: '#22968C'}}>
            {['Cuenta', 'Seguridad', 'Localización'].map((text, index) => (
              <ListItem sx={{ margin: '10px 0px'  }} key={text} disablePadding>
                <ListItemButton sx={{ display: 'grid', justifyContent: 'center'}}>
                  <ListItemIcon sx={{ color: '#22968C',justifyContent: 'center'}}>
                    {iconos[index]}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <CuentaConfif/>
      </Box>
    </Box>
  );
}
