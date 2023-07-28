import {
    Container,
    Box,
    Typography,
  } from "@mui/material";
  import styles from "../../styles/Home.module.css";
  import React from "react";
import SQL_Error from "../../components/SQLInjection/error";
import SQL_Blind from "../../components/SQLInjection/blind";
import SQL_Login from "../../components/SQLInjection/login";
import SQL_NoSQL from "../../components/SQLInjection/nosql";

  
  const SQLInjection = () => {
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
            SQL Injection
          </Typography>
        </Box>
        <Container>
          <Box sx={{ paddingBottom: "10vh" }}>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Criteria
              </Typography>
            </Box>
          </Box>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Types of SQL Injection
              </Typography>
              <SQL_Error title="Error-Based"/>
              <SQL_Blind title="Blind"/>
              <SQL_Login title="Login Bypass"/>
              <SQL_NoSQL title="NoSQL"/>
            </Box>
            <Box sx={{ paddingBottom: "10vh" }}></Box>
        </Container>

        
      </Box>
    );
  };
  
  export default SQLInjection;
  