import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' color='primary'>
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