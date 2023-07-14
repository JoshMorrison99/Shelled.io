import {
    Container,
    Box,
    Typography,
  } from "@mui/material";
  import styles from "../../styles/Home.module.css";
  import React from "react";
import CSRF_SameSite from "../../components/CSRF/same-site";
import CSRF_Validation from "../../components/CSRF/validation";
import CSRF_Exists from "../../components/CSRF/exists";
import CSRF_Method from "../../components/CSRF/request-method";
import CSRF_Exists_Parameter from "../../components/CSRF/exists-parameter";
import SyntaxHighlighter from "react-syntax-highlighter";
import CSRF_PoC from "../../components/CSRF/general-poc";

  
  const SameSite = () => {
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
            CSRF
          </Typography>
        </Box>
        <Container>
          <Box sx={{ paddingBottom: "10vh" }}>
            <CSRF_SameSite title="SameSite Cookie Attribute" />
            <CSRF_Validation title="CSRF Token is Being Validated"/>
            <CSRF_Exists title="CSRF Token is Being Checked if Value not Present"/>
            <CSRF_Exists_Parameter title="CSRF Token is Being Checked if Parameter not Present"/>
            <CSRF_Method title="CSRF Token is Being Checked on Different Methods"/>
            <CSRF_PoC title="General CSRF PoC"/>
          </Box>
          
            
            <Box sx={{ paddingBottom: "10vh" }}></Box>
        </Container>

        
      </Box>
    );
  };
  
  export default SameSite;
  