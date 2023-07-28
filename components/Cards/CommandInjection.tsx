import {
    Typography,
    Stack,
    Grid,
  } from "@mui/material";
  
  
  const Command_Injection = () => {
    return (
      <a href="/modules/command-injection.html">
        <Stack direction="row" spacing={2}>
            <img src="/commandinjection.png" width={100} height={100}  />
          <Grid>
            <Typography sx={{
                color: "primary.main",
              }} variant="h5">
              Command Injection
            </Typography>
            <Typography sx={{
                color: "primary.main",
              }}>
              Command injection is a security vulnerability that occurs when an attacker is able to inject malicious code or commands into an application or system that executes them without proper validation or sanitization. 
            </Typography>
          </Grid>
        </Stack>
      </a>
    );
  };
  
  export default Command_Injection;
  