import { menus } from "../menus/menus";

// Translate
import "../i18n";
import { useTranslation } from "react-i18next";
import MenuPageComponent from "./MenuPageComponent";

const Assiettes = () => {
  const { t } = useTranslation();
  return (
    <MenuPageComponent
      title={t("menus_section.assiettes")}
      menuChoice={menus().assiettes}
    />
  );
};

export default Assiettes;
