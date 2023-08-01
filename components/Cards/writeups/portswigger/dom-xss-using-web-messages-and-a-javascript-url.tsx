import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const DOM_XSS_using_web_messages_and_a_JavaScript_URL = () => {
    return (
      <a href="/writeups/portswigger/dom-xss-using-web-messages-and-a-javascript-url.html">
        <Stack direction="row" spacing={2}>
            <img src="/portswigger.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              DOM XSS using Web Messages
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              This Portswigger DOM XSS lab contains a DOM-based redirection vulnerability that is triggered by web messaging.
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default DOM_XSS_using_web_messages_and_a_JavaScript_URL;
  