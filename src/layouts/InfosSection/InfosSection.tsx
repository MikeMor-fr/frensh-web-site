import "./InfosSection.scss";
import InfoCardRight from "../../components/InfoCardRight/InfoCardRight";
import InfoCardLeft from "../../components/InfoCardLeft/InfoCardLeft";

// Translate
import "../../i18n";
import { useTranslation } from "react-i18next";

const image1 =
  "https://mfacdn.cachefly.net/chooseveg/sites/2/2018/11/Fun-Vegan-Appetizers.jpg";
const image2 =
  "https://mfacdn.cachefly.net/chooseveg/sites/2/2018/11/Fun-Vegan-Appetizers.jpg";
const image3 =
  "https://mfacdn.cachefly.net/chooseveg/sites/2/2018/11/Fun-Vegan-Appetizers.jpg";

const InfosSection = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className='info-section'>
      <InfoCardRight
        title={t("infos_section.first.title")}
        description={t("infos_section.first.subtitle")}
        image={image1}
      />
      <br />
      <InfoCardLeft
        title={t("infos_section.second.title")}
        description={t("infos_section.second.subtitle")}
        image={image2}
      />
      <br />
      <InfoCardRight
        title={t("infos_section.third.title")}
        description={t("infos_section.third.subtitle")}
        image={image3}
      />
    </div>
  );
};

export default InfosSection;
