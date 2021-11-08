import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import "./NavBar.scss";

export default function ButtonAppBar() {
  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.5s",
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)",
    },
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' className='app-bar'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 2 }}>
            Fren'sh
          </Typography>
          <Button href='/' color='inherit'>
            Acceuil
          </Button>
          <Button href='/menus' color='inherit'>
            Nos menus
          </Button>
          <Button href='/about' color='inherit'>
            Qui sommes nous
          </Button>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
