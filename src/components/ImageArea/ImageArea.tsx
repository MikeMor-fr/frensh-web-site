import { Card, CardMedia } from "@mui/material";
import "./ImageArea.scss";

interface ImageAreaProps {
  image: string;
}

const ImageArea = (props: ImageAreaProps) => {
  const { image } = props;
  return (
    <Card className='image-card'>
      <CardMedia component='img' image={image} alt='hey' />
    </Card>
  );
};

export default ImageArea;
