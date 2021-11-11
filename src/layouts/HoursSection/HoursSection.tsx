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

const HoursSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <TitleSection title={t("hours_section.title")} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2%",
        }}
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
    </>
  );
};

export default HoursSection;
