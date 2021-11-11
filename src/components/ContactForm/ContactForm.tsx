import { Typography, Grid, TextField, Button } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },

  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      color: "red",
    },
    "&:hover fieldset": {
      color: "yellow",
    },
    "&.Mui-focused fieldset": {
      color: "green",
    },
  },
});

const ContactForm = () => {
  return (
    <div style={{ margin: "50px" }}>
      <Typography gutterBottom variant='h3' align='center' color='white'>
        Nous contacter
      </Typography>
      <div style={{ marginTop: "20%" }}>
        <form>
          <Grid container spacing={5}>
            <Grid xs={12} item>
              <CssTextField
                placeholder='Enter name'
                label='Name'
                variant='standard'
                fullWidth
                required
                color='error'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type='email'
                placeholder='Enter email'
                label='Email'
                variant='standard'
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Message'
                multiline
                rows={8}
                placeholder='Type your message here'
                variant='standard'
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' color='primary'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
