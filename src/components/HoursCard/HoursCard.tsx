import { Card, CardContent, Typography } from "@mui/material";
import "./HoursCard.scss";

interface HoursCardProps {
  title: string;
}

interface Horaire {
  jour: string;
  heure: string;
}

const horaires: Horaire[] = [
  {
    jour: "Lundi",
    heure: "11h00 - 19h00",
  },
  {
    jour: "Mardi",
    heure: "11h00 - 19h00",
  },
  {
    jour: "Mercredi",
    heure: "11h00 - 19h00",
  },
  {
    jour: "Jeudi",
    heure: "11h00 - 19h00",
  },
  {
    jour: "Vendredi",
    heure: "11h00 - 19h00",
  },
  {
    jour: "Samedi",
    heure: "11h00 - 19h00",
  },
  {
    jour: "Dimanche",
    heure: "11h00 - 19h00",
  },
];

const HoursCard = (props: HoursCardProps) => {
  const { title } = props;

  return (
    <Card sx={{ maxWidth: 345 }} style={{ width: "300px" }}>
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          className='hours-title'
        >
          {title}
        </Typography>
        {horaires.map((horaire) => (
          <div className='hours'>
            <Typography variant='body1' color='text.primary'>
              {horaire.jour}
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              {horaire.heure}
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default HoursCard;
