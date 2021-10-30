import "./InfoCard.scss";
import TextArea from "../../components/TextArea/TextArea";
import ImageArea from "../../components/ImageArea/ImageArea";

const InfosCard = (): JSX.Element => {
  return (
    <div className='container'>
      <TextArea />
      <ImageArea />
    </div>
  );
};

export default InfosCard;
