import MenuChoiceSection from "../layouts/MenuChoiceSection/MenuChoiceSection";
import { MenuChoiceProps } from "../menus/menus";

import TitleSection from "../components/TitleSection/TitleSection";

interface MenuPageComponentProps {
  title: string;
  menuChoice: MenuChoiceProps[];
}

const MenuPageComponent = (props: MenuPageComponentProps) => {
  const { title, menuChoice } = props;
  return (
    <div style={{ marginTop: "100px" }}>
      <TitleSection title={title} />
      <MenuChoiceSection menuChoice={menuChoice} />
    </div>
  );
};

export default MenuPageComponent;
