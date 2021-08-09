import React, { useEffect } from "react";

import PropTypes from "prop-types";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/styles'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Link from "next/link";
import { useRouter } from 'next/router'
import SVGICON from '../src/components/SvgIcon';
import { Badge, Box, NotificationsIcon, Paper } from "@material-ui/core";
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DashboardNavbar from "../src/components/Appbar";

const drawerWidth = 100;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    '& .MuiListItemIcon-root': {
      justifyContent: 'center'
    },
    '& .MuiList-padding' : {
      padding: '8px',
    },
    '& .MuiListItem-root:hover' : {
      background: '#000',
      // padding: '8px 0'
    }
  },

  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    background: 'transparent',
    boxShadow: 'none',
    color: '#663399',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  DefaultMenuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: '#663399',
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3)
  },
  listContainer: {
    // paddingLeft: theme.spacing(4)
    textAlign: 'center'
  },
  HeaderTop: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  }
}));

export default function Demo(props) {

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <div className={classes.toolbar} /> */}
      <Box className={classes.HeaderTop}>
        <Typography variant='h5' align="center">
          GULL
        </Typography>
      </Box>
      <List>
        {["Dashboard", "about2", "about3"].map((text, index) => {
          return (
              <Link href={`/${text}`} key={text} passHref >
                <ListItem  className={classes.listContainer}>
                  <ListItemIcon >
                    {SVGICON[index]}
                  </ListItemIcon>
                  {/* <ListItemText primary={text} /> */}
                </ListItem>
              </Link>
          );
        })}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const router = useRouter()

  useEffect(() => {
    router.replace('/Dashboard')
  }, []);


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="#663399"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="#663399"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            className={classes.DefaultMenuButton}
          >
            <MenuIcon />
          </IconButton>
          <DashboardNavbar />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}






