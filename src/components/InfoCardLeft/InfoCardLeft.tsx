import "./InfoCardLeft.scss";
import TextArea from "../TextArea/TextArea";
import ImageArea from "../ImageArea/ImageArea";

const InfoCardLeft = (): JSX.Element => {
  return (
    <div className='container-left'>
      <ImageArea />
      <TextArea />
    </div>
  );
};

export default InfoCardLeft;
