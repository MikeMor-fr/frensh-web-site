import { Card, CardMedia } from "@mui/material";
import "./ImageArea.scss";

interface ImageAreaProps {
  image: string;
}

const ImageArea = (props: ImageAreaProps) => {
  const { image } = props;
  return (
    <div className='image-container'>
      <Card style={{ width: "70%" }}>
        <CardMedia component='img' image={image} alt='hey' />
      </Card>
    </div>
  );
};

export default ImageArea;
