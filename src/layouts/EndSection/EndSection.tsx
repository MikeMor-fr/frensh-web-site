import "./EndSection.scss";

import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";
import { Grid } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// Translate
import "../../i18n";
import { useTranslation } from "react-i18next";

const EndSection = () => {
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { t } = useTranslation();

  return (
    <div className='end-section' id='contacts'>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a className='nostyle' href='https://www.facebook.com/SnackFrensh/'>
          <FacebookTwoToneIcon fontSize='large' />
        </a>
        <a className='nostyle' href='https://www.facebook.com/SnackFrensh/'>
          <h4>{t("end_section.follow")}</h4>
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h4>{t("end_section.contact")}</h4>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <div
            style={{
              display: "flex",
              justifyContent: mobileScreen ? "center" : "flex-end",
            }}
          >
            <MailOutlineIcon />
            <a href='mailto:frensh.antibes@gmail.com' className='contact'>
              {t("end_section.email")}
            </a>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div
            style={{
              display: "flex",
              justifyContent: mobileScreen ? "center" : "flex-start",
            }}
          >
            <PhoneAndroidTwoToneIcon />
            <a href='tel:+33493959620' className='contact'>
              {t("end_section.phone")}
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default EndSection;
