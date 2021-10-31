import TextArea from "../TextArea/TextArea";
import ImageArea from "../ImageArea/ImageArea";
import { Grid } from "@mui/material";

interface InfoCardLeftProps {
  title: string;
  description: string;
}

const InfoCardLeft = (props: InfoCardLeftProps): JSX.Element => {
  const { title, description } = props;
  return (
    <Grid container spacing={2} alignItems='center'>
      <Grid item xs={12} md={6}>
        <ImageArea />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextArea title={title} description={description} />
      </Grid>
    </Grid>
  );
};

export default InfoCardLeft;
