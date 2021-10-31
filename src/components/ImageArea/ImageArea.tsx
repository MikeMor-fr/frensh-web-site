import { Card, CardContent } from "@mui/material";
import "./ImageArea.scss";

interface ImageAreaProps {
  image: string;
}

const ImageArea = (props: ImageAreaProps) => {
  const { image } = props;
  return (
    <div className='image-container'>
      <Card>
        <CardContent>
          <img
            src={image}
            style={{
              height: "auto",
              width: "100%",
              borderRadius: "10px",
            }}
            alt='hey'
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageArea;
