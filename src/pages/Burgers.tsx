import { menus } from "../menus/menus";

// Translate
import "../i18n";
import { useTranslation } from "react-i18next";
import MenuPageComponent from "./MenuPageComponent";

const Burgers = () => {
  const { t } = useTranslation();
  return (
    <MenuPageComponent
      title={t("menus_section.burgers")}
      menuChoice={menus().burgers}
    />
  );
};

export default Burgers;
