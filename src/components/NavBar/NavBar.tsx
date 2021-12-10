import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useHistory } from "react-router-dom";

import "./NavBar.scss";
import logoImg from "../../assets/frensh_logo.jpg";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import MenuBarOptions from "../MenuBarOptions/MenuBarOptions";

// Translate
import "../../i18n";
import { useTranslation } from "react-i18next";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "white",
  color: "black",
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
    backgroundColor: "white",
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight(): JSX.Element {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let history = useHistory();
  const handleNavigation = (route: string) => {
    history.push(route);
  };

  const mobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { t } = useTranslation();

  const listItems = [
    {
      title: t("navbar_section.home"),
      url: "/",
    },
    {
      title: t("navbar_section.event"),
      url: "/events",
    },
    {
      title: t("navbar_section.about"),
      url: "/about",
    },
  ];

  if (mobileScreen) {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position='fixed' open={open}>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              onClick={() => handleNavigation("/")}
            >
              <img src={logoImg} alt="fren'sh" />
            </IconButton>
            <Typography
              variant='h6'
              noWrap
              sx={{ flexGrow: 1 }}
              component='div'
              onClick={() => handleNavigation("/")}
            >
              {t("welcome_section.title")}
            </Typography>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='end'
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Main open={open}>
          <DrawerHeader />
        </Main>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          variant='persistent'
          anchor='right'
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {listItems.map((listItem, index) => (
              <ListItem key={index}>
                <Button
                  onClick={() => handleNavigation(listItem.url)}
                  color='inherit'
                >
                  {listItem.title}
                </Button>
              </ListItem>
            ))}
            <ListItem>
              <MenuBarOptions />
            </ListItem>
            <ListItem>
              <Button href='#contacts' color='inherit'>
                {t("navbar_section.contacts")},
              </Button>
            </ListItem>
            <ListItem>
              <LanguageSelect />
            </ListItem>
          </List>
        </Drawer>
      </Box>
    );
  } else {
    return (
      <AppBar position='fixed' className='app-bar'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2, ml: 40 }}
            onClick={() => handleNavigation("/")}
          >
            <img src={logoImg} alt="fren'sh" />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
            onClick={() => handleNavigation("/")}
          >
            {t("welcome_section.title")}
          </Typography>
          {listItems.map((listItem, index) => (
            <Button
              onClick={() => handleNavigation(listItem.url)}
              color='inherit'
            >
              {listItem.title}
            </Button>
          ))}

          <MenuBarOptions />

          <Button href='#contacts' color='inherit'>
            {t("navbar_section.contacts")}
          </Button>
          <LanguageSelect />
        </Toolbar>
      </AppBar>
    );
  }
}
