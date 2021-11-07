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
        <Avatar alt={name} src={props.img} sx={{ width: 100, height: 100 }} />
      );
    } else {
      return (
        <Avatar
          sx={{ bgcolor: red[500], width: 100, height: 100 }}
          aria-label='recipe'
        >
          {name[0]}
        </Avatar>
      );
    }
  };

  return (
    <div className='review-card'>
      <Card sx={{ maxWidth: 345 }} style={{ width: "500px", height: "400px" }}>
        <div className='review-header'>
          <CardHeader avatar={avatar()} />
        </div>

        <Rating name='read-only' value={reviews} readOnly />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {comment}
          </Typography>
        </CardContent>
        <div className='review-name'>
          <CardContent>
            <Typography gutterBottom variant='h6' component='div'>
              {name}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default ReviewCard;
