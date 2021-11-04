import { Grid } from "@mui/material";
import { useHistory } from "react-router-dom";
import MenuCard from "../../components/MenuCard/MenuCard";
import "./MenusSection.scss";

const MenusSection = (): JSX.Element => {
  let history = useHistory();
  const menus = [
    "Nos Burgers",
    "Nos Salades",
    "Nos Frites",
    "Nos Assiettes",
    "Nos Hot Dogs",
    "Nos Sandwiches",
  ];
  const handleClick = () => {
    history.push("/menus");
  };
  return (
    <div style={{ margin: "50px" }}>
      <div className='menu-title'>
        <h1>Nos Menus</h1>
        <hr className='horizontal-line' />
      </div>

      <Grid container spacing={5}>
        {menus.map((menu) => (
          <Grid item xs={6} md={4}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <MenuCard
                img='https://cdn.website.dish.co/media/56/cd/2232074/FRENSH-66726982-906958886320148-1660964067835117568-n.jpg'
                title={menu}
                onClickEvent={handleClick}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MenusSection;
