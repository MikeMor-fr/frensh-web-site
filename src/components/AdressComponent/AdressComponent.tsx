import { Button } from "@mui/material";

// Translate
import "../../i18n";
import { useTranslation } from "react-i18next";

import "./AdressComponent.scss";

const AdresseComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h4 className='address-title'>{t("address_section.address")}</h4>
      <div className='address-button'>
        <a
          className='nostyle'
          target='_blank'
          href="https://www.google.com/maps/place/FREN'SH/@43.6102952,7.1269581,17z/data=!4m9!1m2!2m1!1s2000+route+du+bord+de+mer,+Au+bout+du+parking+de+la+SIESTA,+06600+ANTIBES!3m5!1s0x12cdd50e6b25c739:0x9edceab291e64707!8m2!3d43.6117094!4d7.127393!15sCkkyMDAwIHJvdXRlIGR1IGJvcmQgZGUgbWVyLCBBdSBib3V0IGR1IHBhcmtpbmcgZGUgbGEgU0lFU1RBLCAwNjYwMCBBTlRJQkVTWkkiRzIwMDAgcm91dGUgZHUgYm9yZCBkZSBtZXIgYXUgYm91dCBkdSBwYXJraW5nIGRlIGxhIHNpZXN0YSAwNjYwMCBhbnRpYmVzkgEKcmVzdGF1cmFudA"
          rel='noreferrer'
        >
          <Button fullWidth className='button' variant='contained' size='large'>
            {t("address_section.button")}
          </Button>
        </a>
      </div>

      <address className='address'>
        <div>{t("address_section.address1")}</div>
        <div>{t("address_section.address2")}</div>
        <div>{t("address_section.address3")}</div>
      </address>
    </div>
  );
};

export default AdresseComponent;
