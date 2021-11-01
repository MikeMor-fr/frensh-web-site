import "./InfosSection.scss";
import InfoCardRight from "../../components/InfoCardRight/InfoCardRight";
import InfoCardLeft from "../../components/InfoCardLeft/InfoCardLeft";

const image1 =
  "https://mfacdn.cachefly.net/chooseveg/sites/2/2018/11/Fun-Vegan-Appetizers.jpg";
const title1 = "Restaurant français sympathique situé dans un coin romantique";
const description1 =
  "La cuisine française vous gâtera avec son exclusive variété de délices culinaires. L’excellente restauration rapide et les excellents plats du terroir feront plaisir à tout le monde. Goûtez par exemple à notre assortiment de burgers plébiscité ou à nos sandwichs. Goûtez aussi volontiers une tasse de café, un bon verre de vin, une boisson fraîche, un verre de bière rafraîchissant ou un thé chaud lorsque vous viendrez nous voir. Laissez-vous séduire le temps d’une pause au dessert par nos pains frais ou par notre crème glacée savoureuse. L’accueil est notre passion. Venez pour le déjeuner et passez un moment magique dans notre établissement. Un espace fumeur est réservé aux amateurs de tabac.";

const image2 =
  "https://mfacdn.cachefly.net/chooseveg/sites/2/2018/11/Fun-Vegan-Appetizers.jpg";
const title2 = "Régimes et alimentation spéciale";
const description2 =
  "Essayez notre cuisine végétarienne et végane. Nous voulons vous aider à faire attention à votre santé et vous sensibiliser à l’importance d’une alimentation saine et gourmande.";

const image3 =
  "https://mfacdn.cachefly.net/chooseveg/sites/2/2018/11/Fun-Vegan-Appetizers.jpg";
const title3 = "Places de parking particulièrement pratiques";
const description3 =
  "Nous avons des places de parking sans frais pour nos clients. Il est important pour nous que nous puissions accueillir tout le monde. Nous avons par conséquent un accès facile. Vous pouvez amener vos animaux de compagnie dans notre restaurant. Passez nous voir pendant nos horaires d’ouverture. Nous nous ferons un plaisir de vous accueillir ! Le paiement par tickets repas est accepté. Vous avez toujours la possibilité de payer en espèces. Vous n’avez pas le temps ? Alors commandez tout bonnement votre repas à emporter. Notre établissement est également disponible pour votre fête privée. N’hésitez pas à nous contacter et nous vous trouverons une date convenable. Nous sommes ouverts tous les jours de 11h00 à 19h00.";

const InfosSection = (): JSX.Element => {
  return (
    <div className='info-section'>
      <InfoCardRight title={title1} description={description1} image={image1} />
      <br />
      <InfoCardLeft title={title2} description={description2} image={image2} />
      <br />
      <InfoCardRight title={title3} description={description3} image={image3} />
    </div>
  );
};

export default InfosSection;
