import { CardHeader, Avatar, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import "./ReviewCard.scss";

interface ReviewCardProps {
  img?: string;
  name: string;
  comment: string;
  reviews: number;
}

const ReviewCard = (props: ReviewCardProps) => {
  const { name, comment, reviews } = props;

  const avatar = (): JSX.Element => {
    if (props.img) {
      return (
        <Avatar alt={name} src={props.img} sx={{ width: 50, height: 50 }} />
      );
    } else {
      return (
        <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
          {name[0]}
        </Avatar>
      );
    }
  };

  return (
    <div className='review-card'>
      <Card sx={{ maxWidth: 345 }}>
        <div className='review-header'>
          <CardHeader avatar={avatar()} title={comment} subheader={name} />
        </div>

        <Rating name='read-only' value={reviews} readOnly />
      </Card>
    </div>
  );
};

export default ReviewCard;
