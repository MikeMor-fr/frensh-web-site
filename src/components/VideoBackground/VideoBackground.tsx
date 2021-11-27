import test from "../../assets/test.mp4";
import "./VideoBackground.scss";

export const VideoBackground = () => {
  return (
    <video className='videoTag' autoPlay loop muted>
      <source src={test} type='video/mp4' />
    </video>
  );
};
