import "./EndSection.scss";

import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";

const EndSection = () => {
  return (
    <div className='end-section'>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a className='nostyle' href='https://www.facebook.com/SnackFrensh/'>
          <FacebookTwoToneIcon fontSize='large' />
        </a>
        <a className='nostyle' href='https://www.facebook.com/SnackFrensh/'>
          <h4>SUIVEZ-NOUS !</h4>
        </a>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4>CONTACTEZ-NOUS :</h4>
        <MailOutlineIcon />
        <a href='mailto:frensh.antibes@gmail.com' className='contact-email'>
          frensh.antibes@gmail.com
        </a>
        <p>|</p>
        <PhoneAndroidTwoToneIcon />
        <a href='tel:+33493959620' className='contact-email'>
          +33493959620
        </a>
      </div>
    </div>
  );
};

export default EndSection;
