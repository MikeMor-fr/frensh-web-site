import { Grid, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import TitleSection from "../TitleSection/TitleSection";

import "./ContactForm.scss";

// Translate
import "../../i18n";
import { useTranslation } from "react-i18next";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#FAAF00",
  },

  "& .MuiInput-underline:after": {
    borderBottomColor: "#FAAF00",
  },
});

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <div style={{ margin: "40px" }}>
      <TitleSection title={t("contact_section.contactUs")} />
      <div style={{ marginTop: "15%" }}>
        <form>
          <Grid container spacing={5}>
            <Grid xs={12} item>
              <CssTextField
                placeholder={t("contact_section.enter_name")}
                label={t("contact_section.name")}
                variant='standard'
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                type='email'
                placeholder={t("contact_section.enter_email")}
                label={t("contact_section.email")}
                variant='standard'
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                label={t("contact_section.message")}
                multiline
                rows={8}
                placeholder={t("contact_section.enter_message")}
                variant='standard'
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type='submit'
                variant='contained'
                className='submit-button'
              >
                {t("contact_section.submit")}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
