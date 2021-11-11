import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./MenuCard.scss";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface MenuCardProps {
  img: string;
  title: string;
  onClickEvent?: any;
}

const MenuCard = (props: MenuCardProps) => {
  const { img, title, onClickEvent } = props;

  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  if (mobileScreen) {
    return (
      <div className='menu-card'>
        <Card sx={{ maxWidth: 360 }} onClick={onClickEvent}>
          <CardMedia component='img' image={img} alt='hamburger' />
          <CardContent style={{ textAlign: "center" }}>
            <Typography gutterBottom variant='h5' component='div'>
              {title}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return (
      <div style={{ width: "70%" }}>
        <div className='overlay-image menu-card' onClick={onClickEvent}>
          <img className='image' src={img} alt='Alt text' />
          <div className='normal'>
            <div className='text'></div>
          </div>
          <div className='hover'>
            <div className='text'>{title}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default MenuCard;
