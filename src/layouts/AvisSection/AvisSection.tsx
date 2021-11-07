import { Grid } from "@mui/material";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import TitleSection from "../../components/TitleSection/TitleSection";

import "./AvisSection.scss";

const AvisSection = () => {
  const reviews = [1, 2, 3];
  return (
    <div className='avis-section'>
      <TitleSection title={"Ce que disent les Fren'sh"} />

      <div style={{ margin: "100px" }}>
        <Grid container spacing={5}>
          {reviews.map((review) => (
            <Grid item xs={12} md={4}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ReviewCard
                  img={
                    "https://th.bing.com/th/id/R.94dff47badcc963b173049603e208bcc?rik=EPCWr6IG52JjFQ&pid=ImgRaw&r=0"
                  }
                  name={"Mikael M."}
                  comment={"Super Bon !"}
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

export default AvisSection;
