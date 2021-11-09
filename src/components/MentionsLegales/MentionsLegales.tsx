import "./MentionsLegales.scss";

const MentionsLegales = () => {
  return (
    <div
      className='mentions'
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "50%",
        margin: "20px",
      }}
    >
      <a href='/'>Mentions Légales</a>
      <a href='/'>Modifier les paramètres des cookies </a>
      <a href='/'>Protection des données</a>
    </div>
  );
};

export default MentionsLegales;
