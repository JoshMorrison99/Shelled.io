import {
    Container,
    Box,
    Typography,
  } from "@mui/material";
  import styles from "../../styles/Home.module.css";
  import React from "react";
import AWS_Cognito_Misconfigured_Attributes from "../../components/AWS_Cognito/misconfigured_attributes";
import AWS_Cognito_Misconfigured_Registration_1 from "../../components/AWS_Cognito/misconfigured_registration";
  

  
  const AWS_Cognito = () => {
    return (
      <Box
        className={styles.container}
        sx={{ backgroundColor: "primary.background_website" }}
      >
        <Box
          sx={{
            height: "100vh",
          }}
        >
          
          <Typography className={styles.center} color="primary.main" variant="h2">
            AWS Cognito
          </Typography>
        </Box>
        <Container>
          <Box sx={{ paddingBottom: "10vh" }}>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Criteria
              </Typography>
            </Box>
            
            <Box sx={{ paddingBottom: "10vh" }}/>

            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                User Pools
              </Typography>
              <AWS_Cognito_Misconfigured_Registration_1 title="Misconfigured Registration"/>
              <AWS_Cognito_Misconfigured_Attributes title="Misconfigured Attributes"/>
            </Box>
            <Box sx={{ paddingBottom: "10vh" }}/>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Identity Pools
              </Typography>
            </Box>
            <Box sx={{ paddingBottom: "10vh" }}/>
          </Box>
        <Box sx={{ paddingBottom: "10vh" }}></Box>
        </Container>

        
      </Box>
    );
  };
  
  export default AWS_Cognito;
  