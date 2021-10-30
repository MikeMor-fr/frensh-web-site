import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./MenuCard.scss";

interface MenuCardProps {
  img: string;
  title: string;
}

const MenuCard = (props: MenuCardProps) => {
  const { img, title } = props;

  return (
    <div className='menu-card'>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component='img' height='50%' image={img} alt='hamburger' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default MenuCard;
