import InfoCardLeft from "../components/InfoCardLeft/InfoCardLeft";

const image =
  "https://cdn.website.dish.co/media/63/16/2232039/FRENSH-68665602-934816463534390-4347051496815198208-o.jpg";

const title1 = "À PROPOS DE NOUS";
const description1 =
  'Fren\'sh est la contraction de Fresh and French (Frais et Français). \nPourquoi ? Parce quon a souhaité créer un restaurant rapide dans lequel on trouverait des plats "street food" revisités à la française mais surtout avec des produits dont la qualité fait la renommée de la France partout dans le monde.';

const About = (): JSX.Element => {
  return (
    <div style={{ marginTop: "100px" }}>
      <InfoCardLeft title={title1} description={description1} image={image} />
    </div>
  );
};

export default About;
