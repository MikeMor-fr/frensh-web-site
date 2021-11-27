import { menus } from "../menus/menus";

// Translate
import "../i18n";
import { useTranslation } from "react-i18next";
import MenuPageComponent from "./MenuPageComponent";

const Salads = () => {
  const { t } = useTranslation();
  return (
    <MenuPageComponent
      title={t("menus_section.salades")}
      menuChoice={menus().salades}
    />
  );
};

export default Salads;
