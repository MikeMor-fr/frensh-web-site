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
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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

  const handleClick = (path: number) => {
    history.push(`/menus/${path}`);
  };

  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.7,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
    }
  }, [inView]);
  return (
    <div className='menu-section-container'>
      <TitleSection title={t("menus_section.title")} />
      <div ref={ref}>
        <motion.div animate={animation}>
          <Grid container spacing={5}>
            {menus.map((menu, index) => (
              <Grid item xs={12} sm={6} md={4}>
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
                    onClickEvent={() => handleClick(index)}
                  />
                </div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </div>
    </div>
  );
};

export default MenusSection;
