import MenuCard from "../../components/MenuCard/MenuCard";
import "./MenusSection.css";

const MenusSection = (): JSX.Element => {
  return (
    <>
      <h1>Nos Menus</h1>
      <div className='container'>
        <hr className='beautiful-line' />
      </div>
      <div className='menu-section'>
        <MenuCard
          img='https://cdn.website.dish.co/media/56/cd/2232074/FRENSH-66726982-906958886320148-1660964067835117568-n.jpg'
          title='Burger'
        />
        <MenuCard
          img='https://cdn.website.dish.co/media/56/cd/2232074/FRENSH-66726982-906958886320148-1660964067835117568-n.jpg'
          title='Burger'
        />
      </div>
    </>
  );
};

export default MenusSection;
