import { Grid } from "@mui/material";
import { useHistory } from "react-router-dom";
import MenuCard from "../../components/MenuCard/MenuCard";
import TitleSection from "../../components/TitleSection/TitleSection";
import "./MenusSection.scss";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

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

  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  const justifyContente = (index: number) => {
    switch (index) {
      case 0:
        return "end";
      case 1:
        return "center";
      case 2:
        return "start";
      case 3:
        return "end";
      case 4:
        return "center";
      case 5:
        return "start";
      default:
        break;
    }
  };

  const handleClick = () => {
    history.push("/menus");
  };
  return (
    <div className='menu-section-container'>
      <TitleSection title={"Nos Menus"} />

      <Grid container spacing={5}>
        {menus.map((menu, index) => (
          <Grid item xs={6} md={4}>
            <div
              style={{
                display: "flex",
                justifyContent: mobileScreen
                  ? "center"
                  : justifyContente(index),
              }}
            >
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
