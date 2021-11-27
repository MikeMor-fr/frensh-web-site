import { menus } from "../menus/menus";

// Translate
import "../i18n";
import { useTranslation } from "react-i18next";
import MenuPageComponent from "./MenuPageComponent";

const HotDog = () => {
  const { t } = useTranslation();
  return (
    <MenuPageComponent
      title={t("menus_section.hot_dogs")}
      menuChoice={menus().hotdog}
    />
  );
};

export default HotDog;
