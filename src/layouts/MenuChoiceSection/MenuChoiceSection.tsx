import { Grid } from "@mui/material";
import MenuChoice from "../../components/MenuChoice/MenuChoice";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import "./MenuChoiceSection.scss";

// Translate
import "../../i18n";
import { useTranslation } from "react-i18next";

import { MenuChoiceProps } from "../../menus/menus";

interface MenuChoiceSectionProps {
  menuChoice: MenuChoiceProps[];
}

const MenuChoiceSection = (props: MenuChoiceSectionProps) => {
  const { t } = useTranslation();
  const { menuChoice } = props;

  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  const justifyContente = (index: number): string => {
    if (mobileScreen) {
      return "center";
    } else if (index % 2 === 0) {
      return "end";
    } else {
      return "start";
    }
  };
  return (
    <div className='review-section'>
      <div style={{ margin: "100px" }}>
        <Grid container spacing={5}>
          {menuChoice.map((menu, index) => (
            <Grid item xs={12} md={6}>
              <div
                style={{
                  display: "flex",
                  justifyContent: justifyContente(index),
                }}
              >
                <MenuChoice
                  name={menu.name}
                  ingredients={menu.ingredients}
                  price={menu.price}
                  img={menu.img}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default MenuChoiceSection;
