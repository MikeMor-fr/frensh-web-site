import "./InfosSection.scss";
import InfoCardRight from "../../components/InfoCardRight/InfoCardRight";
import InfoCardLeft from "../../components/InfoCardLeft/InfoCardLeft";

const InfosSection = (): JSX.Element => {
  return (
    <div className='info-section'>
      <InfoCardRight />
      <InfoCardLeft />
      <InfoCardRight />
    </div>
  );
};

export default InfosSection;
