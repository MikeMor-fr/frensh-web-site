import TextArea from "../TextArea/TextArea";
import ImageArea from "../ImageArea/ImageArea";
import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface InfoCardLeftProps {
  title: string;
  description: string;
  image: string;
}

const InfoCardLeft = (props: InfoCardLeftProps): JSX.Element => {
  const { title, description, image } = props;
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      spacing={2}
      alignItems='center'
      direction={mobileScreen ? "column-reverse" : "row"}
    >
      <Grid item xs={12} md={6}>
        <ImageArea image={image} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextArea title={title} description={description} />
      </Grid>
    </Grid>
  );
};

export default InfoCardLeft;
