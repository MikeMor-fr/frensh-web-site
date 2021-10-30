import "./InfoCardRight.scss";
import TextArea from "../TextArea/TextArea";
import ImageArea from "../ImageArea/ImageArea";

interface InfoCardRightProps {
  title: string;
  description: string;
  image: string;
}

const InfosCardRight = (props: InfoCardRightProps): JSX.Element => {
  const { title, description, image } = props;
  return (
    <div className='container-right'>
      <TextArea title={title} description={description} />
      <ImageArea image={image} />
    </div>
  );
};

export default InfosCardRight;
