import { Avatar, Rating } from "@mui/material";
import { red } from "@mui/material/colors";
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
      <div>{avatar()}</div>

      <div className='rating'>
        <Rating name='read-only' value={reviews} readOnly />
        <p className='comment'>{comment}</p>
        <p className='author-name'>{name}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
