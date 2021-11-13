import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TranslateIcon from "@mui/icons-material/Translate";

// Translate
import i18n from "../../i18n";

export default function LanguageSelect() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const chooseLanguage = (lngCode: string) => {
    i18n.changeLanguage(lngCode);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id='demo-positioned-button'
        aria-controls='demo-positioned-menu'
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <TranslateIcon />
      </Button>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={() => chooseLanguage("fr")}>Français</MenuItem>
        <MenuItem onClick={() => chooseLanguage("en")}>English</MenuItem>
      </Menu>
    </div>
  );
}
