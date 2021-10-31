import Grid from "@mui/material/Grid";
import TextArea from "../TextArea/TextArea";
import ImageArea from "../ImageArea/ImageArea";

interface InfoCardRightProps {
  title: string;
  description: string;
}

const InfosCardRight = (props: InfoCardRightProps): JSX.Element => {
  const { title, description } = props;

  return (
    <Grid container spacing={2} alignItems='center'>
      <Grid item xs={12} md={6}>
        <TextArea title={title} description={description} />
      </Grid>
      <Grid item xs={12} md={6}>
        <ImageArea />
      </Grid>
    </Grid>
  );
};

export default InfosCardRight;
