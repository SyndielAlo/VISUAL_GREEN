import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import GrassIcon from '@mui/icons-material/Grass';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Stack } from '@mui/material';

export const mainListItems = (
  <React.Fragment>

<Stack marginTop={10}>
 <Stack my={2}>
    <ListItemButton>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    </Stack>

    <Stack my={2}>
    <ListItemButton>
      <ListItemIcon>
        < GrassIcon />
      </ListItemIcon>
      <ListItemText primary="Plant Monitor" />
    </ListItemButton>
    </Stack>

    <Stack my={1}>
    <ListItemButton>
      <ListItemIcon>
        <LibraryBooksIcon />
      </ListItemIcon>
      <ListItemText primary="Records" />
    </ListItemButton>
    </Stack>

    <Stack my={2}></Stack>
    <ListItemButton>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>

    <Stack my={2}>
    <ListItemButton>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
    </Stack>
    </Stack>
  </React.Fragment>
);

