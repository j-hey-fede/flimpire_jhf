import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import { Sidebar } from '..'
import useStyles from './styles';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.menubutton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 4 }} onClick={()=> {}}>
              {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && 'Search...'}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick= {() => {}} >
                Login &nbsp; <AccountCircle />
              </Button>
            ): (
              <Button
                color="inherit"
                component={Link}
                to='/profile/:id'
                className={classes.linkButton}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar 
                  style={{ width: 30, height: 30 }} 
                  alt="profile" 
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eyhIau9Wqaz8_VhUIomLWgHaHa%26pid%3DApi%26h%3D160&f=1&ipt=7526256e4922a063c75d605e1b7d9d3c07b8c8e9c6398fa47511abbc2eb8106b&ipo=images"

                  />
              </Button>
            )}
          </div>
          {isMobile && 'Search...'}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
            {isMobile ? (
              <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                classes={{ paper: classes.drawerPaper }}
                ModalProps={{ keepMounted: true }}
                onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              >
                <Sidebar setMobileOpen={setMobileOpen} />
              </Drawer>
            ) : (
              <Drawer variant="permanent" open classes={{ paper: classes.drawerPaper}}>
                <Sidebar setMobileOpen={setMobileOpen}/>
              </Drawer>
            )}
        </nav>
      </div>
    </>
  )
}

export default NavBar