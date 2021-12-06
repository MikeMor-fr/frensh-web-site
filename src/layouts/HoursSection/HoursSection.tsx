import TitleSection from "../../components/TitleSection/TitleSection";

import HoursComponent from "../../components/HoursComponent/HoursComponent";
import AdressComponent from "../../components/AdressComponent/AdressComponent";

import { Card, CardMedia, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./HoursSection.scss";

import adressImg from "../../assets/adresse.jpg";

// Translate
import "../../i18n";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const HoursSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      animation.start({ y: "20vh", opacity: 0 });
    }
  }, [inView]);

  return (
    <>
      <TitleSection title={t("hours_section.title")} />
      <div ref={ref}>
        <motion.div animate={animation}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2%",
            }}
            ref={ref}
          >
            <Card>
              <CardMedia component='img' image={adressImg} alt='hey' />
            </Card>
          </div>
          <div>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: mobileScreen ? "center" : "flex-end",
                  }}
                >
                  <AdressComponent />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: mobileScreen ? "center" : "flex-start",
                  }}
                >
                  <HoursComponent title={t("hours_section.hours")} />
                </div>
              </Grid>
            </Grid>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HoursSection;
