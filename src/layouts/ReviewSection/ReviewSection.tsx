import { Grid } from "@mui/material";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import TitleSection from "../../components/TitleSection/TitleSection";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import "./ReviewSection.scss";

// Translate
import "../../i18n";
import { useTranslation } from "react-i18next";

const ReviewSection = () => {
  const { t } = useTranslation();
  const reviews = [1, 2, 3, 4, 5, 6];

  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  const justifyContente = (index: number): string => {
    if (mobileScreen) {
      return "center";
    } else if (index % 2 === 0) {
      return "end";
    } else {
      return "start";
    }
  };
  return (
    <div className='review-section'>
      <TitleSection title={t("review_section.title")} />

      <div style={{ margin: "100px" }}>
        <Grid container spacing={5}>
          {reviews.map((_review, index) => (
            <Grid item xs={12} md={6}>
              <div
                style={{
                  display: "flex",
                  justifyContent: justifyContente(index),
                }}
              >
                <ReviewCard
                  name={t(`review_section.review_${index + 1}.name`)}
                  comment={t(`review_section.review_${index + 1}.review`)}
                  reviews={5}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ReviewSection;
