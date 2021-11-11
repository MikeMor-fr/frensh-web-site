import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "./TextArea.scss";

interface TextAreaProps {
  title: string;
  description: string;
}

const TextArea = (props: TextAreaProps) => {
  const { title, description } = props;
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  const textAligne = mobileScreen ? "center" : "start";

  return (
    <div className='text-area' style={{ textAlign: textAligne }}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TextArea;
