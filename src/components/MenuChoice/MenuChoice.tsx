import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import { MenuChoiceProps } from "../../menus/menus";
import "./MenuChoice.scss";

const MenuChoice = (props: MenuChoiceProps) => {
  const { name, price, ingredients, img } = props;

  const avatar = (): JSX.Element => {
    if (img) {
      return (
        <Avatar
          alt={name}
          src={img}
          sx={{ width: "100%", height: "100%" }}
          variant='rounded'
        />
      );
    } else {
      return (
        <Avatar
          sx={{ bgcolor: red[500] }}
          aria-label='recipe'
          variant='rounded'
        >
          {name[0]}
        </Avatar>
      );
    }
  };

  return (
    <div className='menu-choice'>
      <div>{avatar()}</div>

      <div className='menu-choice-info'>
        <h2>{name}</h2>
        <p className='ingredient'>{ingredients}</p>
        <p className='price'>{price} €</p>
      </div>
    </div>
  );
};

export default MenuChoice;
