import { Grid } from "@mui/material";
import { useHistory } from "react-router-dom";
import MenuCard from "../../components/MenuCard/MenuCard";
import TitleSection from "../../components/TitleSection/TitleSection";
import "./MenusSection.scss";

// Tranlate
import "../../i18n";
import { useTranslation } from "react-i18next";

const MenusSection = (): JSX.Element => {
  let history = useHistory();
  const { t } = useTranslation();
  const menus = [
    t("menus_section.burgers"),
    t("menus_section.salades"),
    t("menus_section.frites"),
    t("menus_section.assiettes"),
    t("menus_section.hot_dogs"),
    t("menus_section.sandwiches"),
  ];
  const handleClick = () => {
    history.push("/menus");
  };
  return (
    <div style={{ margin: "50px" }}>
      <TitleSection title={"Nos Menus"} />

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
