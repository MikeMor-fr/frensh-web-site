import MenuChoiceSection from "../layouts/MenuChoiceSection/MenuChoiceSection";
import { menus } from "../menus/menus";

const Burgers = () => {
  return <MenuChoiceSection menuChoice={menus.burgers} />;
};

export default Burgers;
