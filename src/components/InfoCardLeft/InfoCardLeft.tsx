import TextArea from "../TextArea/TextArea";
import ImageArea from "../ImageArea/ImageArea";
import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import "./InfoCardLeft.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface InfoCardLeftProps {
  title: string;
  description: string;
  image: string;
}

const InfoCardLeft = (props: InfoCardLeftProps): JSX.Element => {
  const { title, description, image } = props;
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({ x: mobileScreen ? 0 : "10vh", opacity: 0 });
    }
  });

  return (
    <div ref={ref}>
      <motion.div animate={animation}>
        <Grid
          container
          spacing={2}
          alignItems='center'
          direction={mobileScreen ? "column-reverse" : "row"}
        >
          <Grid item xs={12} md={6}>
            <div className='grid-image-area-left'>
              <ImageArea image={image} />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextArea title={title} description={description} />
          </Grid>
        </Grid>
      </motion.div>
    </div>
  );
};

export default InfoCardLeft;
