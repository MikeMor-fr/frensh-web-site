import TitleSection from "../../components/TitleSection/TitleSection";
import HoursCard from "../../components/HoursCard/HoursCard";
import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./HoursSection.scss";

import adressImg from "./adresse.jpg";

// Translate
import "../../i18n";
import { useTranslation } from "react-i18next";
import ImageArea from "../../components/ImageArea/ImageArea";

const HoursSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <TitleSection title={t("hours_section.title")} />
      <Grid container spacing={20}>
        <Grid item xs={12} md={6}>
          <div
            style={{
              display: "flex",
              justifyContent: mobileScreen ? "center" : "flex-end",
            }}
          >
            <HoursCard title={t("hours_section.hours")} />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              display: "flex",
              justifyContent: mobileScreen ? "center" : "flex-start",
            }}
          >
            <ImageArea image={adressImg} />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default HoursSection;
