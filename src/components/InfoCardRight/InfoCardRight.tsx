import "./InfoCardRight.scss";
import TextArea from "../TextArea/TextArea";
import ImageArea from "../ImageArea/ImageArea";

const InfosCardRight = (): JSX.Element => {
  return (
    <div className='container-right'>
      <TextArea />
      <ImageArea />
    </div>
  );
};

export default InfosCardRight;
