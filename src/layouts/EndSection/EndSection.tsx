import "./EndSection.scss";
import SvgIcon from "@mui/material/SvgIcon";

import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import DeckIcon from "@mui/icons-material/Deck";
import AccessibleIcon from "@mui/icons-material/Accessible";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import FestivalIcon from "@mui/icons-material/Festival";
import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
import PetsIcon from "@mui/icons-material/Pets";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import EuroIcon from "@mui/icons-material/Euro";
import ContactlessIcon from "@mui/icons-material/Contactless";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentsIcon from "@mui/icons-material/Payments";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
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

  const services = [
    {
      icon: AccessibleIcon,
      text: t("end_section.services.handicap"),
    },
    {
      icon: DeckIcon,
      text: t("end_section.services.terrasse"),
    },
    {
      icon: LocalParkingIcon,
      text: t("end_section.services.parking"),
    },
    {
      icon: FestivalIcon,
      text: t("end_section.services.event"),
    },
    {
      icon: SmokingRoomsIcon,
      text: t("end_section.services.smoking"),
    },
    {
      icon: DeliveryDiningIcon,
      text: t("end_section.services.takeaway"),
    },
    {
      icon: PetsIcon,
      text: t("end_section.services.pets"),
    },
  ];

  const payments = [
    {
      icon: EuroIcon,
      text: t("end_section.payments.cash"),
    },
    {
      icon: ContactlessIcon,
      text: t("end_section.payments.contact"),
    },
    {
      icon: CreditScoreIcon,
      text: t("end_section.payments.mastercard"),
    },
    {
      icon: PaymentsIcon,
      text: t("end_section.payments.ticket"),
    },
    {
      icon: CreditCardIcon,
      text: t("end_section.payments.visa"),
    },
  ];

  return (
    <div className='end-section' id='contacts'>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <div
            style={{
              display: "flex",
              justifyContent: mobileScreen ? "flex-start" : "center",
              marginLeft: mobileScreen ? "20px" : "0",
            }}
          >
            <div>
              <div>
                <h4>{t("end_section.contact")}</h4>
              </div>
              <div className='footer-icons'>
                <MailOutlineIcon />
                <a href='mailto:frensh.antibes@gmail.com' className='contact'>
                  {t("end_section.email")}
                </a>
              </div>
              <div className='footer-icons'>
                <PhoneAndroidTwoToneIcon />
                <a href='tel:+33493959620' className='contact'>
                  {t("end_section.phone")}
                </a>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={3}>
          <div
            style={{
              display: "flex",
              justifyContent: mobileScreen ? "flex-start" : "center",
              marginLeft: mobileScreen ? "20px" : "0",
            }}
          >
            <div>
              <div>
                <h4>{t("end_section.follow")}</h4>
              </div>
              <div className='footer-icons'>
                <a
                  className='nostyle'
                  href='https://www.facebook.com/SnackFrensh/'
                >
                  <FacebookTwoToneIcon fontSize='large' />
                </a>
                <p>Facebook</p>
              </div>
              <div className='footer-icons'>
                <a
                  className='nostyle'
                  href='https://instagram.com/snack_frensh?utm_medium=copy_link'
                >
                  <InstagramIcon fontSize='large' />
                </a>
                <p>Instagram</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div
            style={{
              display: "flex",
              justifyContent: mobileScreen ? "flex-start" : "center",
              marginLeft: mobileScreen ? "20px" : "0",
            }}
          >
            <div>
              <div>
                <h4>{t("end_section.service")}</h4>
              </div>
              {services.map((thing, index) => (
                <div className='footer-icons' key={index}>
                  <SvgIcon component={thing.icon} />
                  <p className='icon-paragraph'>{thing.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div
            style={{
              display: "flex",
              justifyContent: mobileScreen ? "flex-start" : "center",
              marginLeft: mobileScreen ? "20px" : "0",
            }}
          >
            <div>
              <div>
                <h4>{t("end_section.payment")}</h4>
              </div>
              {payments.map((thing, index) => (
                <div className='footer-icons' key={index}>
                  <SvgIcon component={thing.icon} />
                  <p className='icon-paragraph'>{thing.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default EndSection;
