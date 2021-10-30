import "./ImageArea.scss";

interface ImageAreaProps {
  image: string;
}

const ImageArea = (props: ImageAreaProps) => {
  const { image } = props;
  return (
    <div className='image-area'>
      <img src={image} alt='n' />
    </div>
  );
};

export default ImageArea;
