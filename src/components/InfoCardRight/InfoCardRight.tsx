import Grid from "@mui/material/Grid";
import TextArea from "../TextArea/TextArea";
import ImageArea from "../ImageArea/ImageArea";

import "./InfoCardRight.scss";

interface InfoCardRightProps {
  title: string;
  description: string;
  image: string;
}

const InfosCardRight = (props: InfoCardRightProps): JSX.Element => {
  const { title, description, image } = props;

  return (
    <Grid container spacing={2} alignItems='center'>
      <Grid item xs={12} md={6}>
        <TextArea title={title} description={description} />
      </Grid>
      <Grid item xs={12} md={6}>
        <div className='grid-image-area-right'>
          <ImageArea image={image} />
        </div>
      </Grid>
    </Grid>
  );
};

export default InfosCardRight;
