import "./InfoCardLeft.scss";
import TextArea from "../TextArea/TextArea";
import ImageArea from "../ImageArea/ImageArea";

interface InfoCardLeftProps {
  title: string;
  description: string;
  image: string;
}

const InfoCardLeft = (props: InfoCardLeftProps): JSX.Element => {
  const { title, description, image } = props;
  return (
    <div className='container-left'>
      <ImageArea image={image} />
      <TextArea title={title} description={description} />
    </div>
  );
};

export default InfoCardLeft;
