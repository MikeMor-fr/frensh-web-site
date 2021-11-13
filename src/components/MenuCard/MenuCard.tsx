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
  const { title, onClickEvent } = props;

  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  if (mobileScreen) {
    return (
      <div className='menu-card'>
        <Card sx={{ maxWidth: 360 }} onClick={onClickEvent}>
          <CardMedia
            component='img'
            image={
              "https://th.bing.com/th/id/R.881df7be6ad606753dc3be6b81ab5ec9?rik=yIeh%2fBXQx77d8g&riu=http%3a%2f%2fbbqrules.de%2fwp-content%2fuploads%2f2018%2f08%2fNebraska.jpg&ehk=32Hx89oDOYFhoKqpbuaRCJuKwbV7BvVZCkqFQuNa8qc%3d&risl=&pid=ImgRaw&r=0"
            }
            alt='hamburger'
          />
          <CardContent style={{ textAlign: "center" }}>
            <Typography variant='h5'>{title}</Typography>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return (
      <div style={{ width: "70%" }}>
        <div className='overlay-image menu-card' onClick={onClickEvent}>
          <img
            className='image'
            src={
              "https://th.bing.com/th/id/R.881df7be6ad606753dc3be6b81ab5ec9?rik=yIeh%2fBXQx77d8g&riu=http%3a%2f%2fbbqrules.de%2fwp-content%2fuploads%2f2018%2f08%2fNebraska.jpg&ehk=32Hx89oDOYFhoKqpbuaRCJuKwbV7BvVZCkqFQuNa8qc%3d&risl=&pid=ImgRaw&r=0"
            }
            alt='Alt text'
          />
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
