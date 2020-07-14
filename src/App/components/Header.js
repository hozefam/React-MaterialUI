import React from 'react';
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
  Icon,
} from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

export default function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid container>
          <Grid item>
            <InputBase></InputBase>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color='secondary'>
                <NotificationsNoneIcon></NotificationsNoneIcon>
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={2} color='primary'>
                <ChatBubbleOutline></ChatBubbleOutline>
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewIcon></PowerSettingsNewIcon>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
