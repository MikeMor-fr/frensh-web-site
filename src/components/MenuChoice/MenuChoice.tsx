import { Avatar } from "@mui/material";
import { MenuChoiceProps } from "../../menus/menus";
import "./MenuChoice.scss";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const MenuChoice = (props: MenuChoiceProps) => {
  const { name, price, ingredients, img } = props;

  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={mobileScreen ? "menu-choice-mobile" : "menu-choice"}>
      <Avatar
        alt={name}
        src={img}
        sx={{ width: 200, height: 200 }}
        variant='rounded'
      />
      <div
        className={
          mobileScreen ? "menu-choice-info-mobile" : "menu-choice-info"
        }
      >
        <h2>{name}</h2>
        <p className='ingredient'>{ingredients}</p>
        <p className='price'>{price} €</p>
      </div>
    </div>
  );
};

export default MenuChoice;
