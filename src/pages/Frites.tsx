import { menus } from "../menus/menus";

// Translate
import "../i18n";
import { useTranslation } from "react-i18next";
import MenuPageComponent from "./MenuPageComponent";

const Frites = () => {
  const { t } = useTranslation();
  return (
    <MenuPageComponent
      title={t("menus_section.frites")}
      menuChoice={menus().frites}
    />
  );
};

export default Frites;
