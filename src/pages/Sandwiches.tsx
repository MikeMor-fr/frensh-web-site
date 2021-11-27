import { menus } from "../menus/menus";

// Translate
import "../i18n";
import { useTranslation } from "react-i18next";
import MenuPageComponent from "./MenuPageComponent";

const Sandwiches = () => {
  const { t } = useTranslation();
  return (
    <MenuPageComponent
      title={t("menus_section.sandwiches")}
      menuChoice={menus().sandwiches}
    />
  );
};

export default Sandwiches;
