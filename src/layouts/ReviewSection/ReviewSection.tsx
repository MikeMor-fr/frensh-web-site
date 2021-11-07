import { Grid } from "@mui/material";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import TitleSection from "../../components/TitleSection/TitleSection";

import "./ReviewSection.scss";

// Translate
import "../../i18n";
import { useTranslation } from "react-i18next";

const ReviewSection = () => {
  const { t } = useTranslation();
  const reviews = [1, 2, 3];
  return (
    <div className='review-section'>
      <TitleSection title={t("review_section.title")} />

      <div style={{ margin: "100px" }}>
        <Grid container spacing={5}>
          {reviews.map((_review, index) => (
            <Grid item xs={12} md={4}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ReviewCard
                  img={
                    "https://th.bing.com/th/id/R.94dff47badcc963b173049603e208bcc?rik=EPCWr6IG52JjFQ&pid=ImgRaw&r=0"
                  }
                  name={t(`review_section.review_${index + 1}.name`)}
                  comment={t("review_section.review_1.review")}
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
