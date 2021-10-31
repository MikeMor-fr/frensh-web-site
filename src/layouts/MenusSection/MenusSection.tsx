import { useHistory } from "react-router-dom";
import MenuCard from "../../components/MenuCard/MenuCard";
import "./MenusSection.scss";

const MenusSection = (): JSX.Element => {
  let history = useHistory();
  const handleClick = () => {
    history.push("/menus");
  };
  return (
    <>
      <div>
        <h1>Nos Menus</h1>
        <hr className='horizontal-line' />
      </div>

      <div className='menu-section'>
        <MenuCard
          img='https://cdn.website.dish.co/media/56/cd/2232074/FRENSH-66726982-906958886320148-1660964067835117568-n.jpg'
          title='Nos Burgers'
          onClickEvent={handleClick}
        />
        <MenuCard
          img='https://cdn.website.dish.co/media/56/cd/2232074/FRENSH-66726982-906958886320148-1660964067835117568-n.jpg'
          title='Nos Salades'
          onClickEvent={handleClick}
        />
      </div>
    </>
  );
};

export default MenusSection;
