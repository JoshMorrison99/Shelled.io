import {
    Container,
    Box,
    Typography,
  } from "@mui/material";
  import styles from "../../styles/Home.module.css";
  import React from "react";
import CI_Semicolon from "../../components/CommandInjection/semicolon";
import CI_Newline from "../../components/CommandInjection/newline";
import CI_Background from "../../components/CommandInjection/background";
import CI_Pipe from "../../components/CommandInjection/pipe";
import CI_AND from "../../components/CommandInjection/and";
import CI_OR from "../../components/CommandInjection/or";
import CI_SubShell1 from "../../components/CommandInjection/sub-shell1";
import CI_SubShell2 from "../../components/CommandInjection/sub-shell2";
import CI_IFS from "../../components/CommandInjection/IFS";
import CI_Tabs from "../../components/CommandInjection/tabs";
import CI_Braces from "../../components/CommandInjection/brace";


  
  const Command_Injection = () => {
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
            Command Injection
          </Typography>
        </Box>
        <Container>
          <Box sx={{ paddingBottom: "10vh" }}>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Criteria
              </Typography>
              <CI_Semicolon title="Semicolon"/>
              <CI_Newline title="New Line"/>
              <CI_Background title="Background"/>
              <CI_Pipe title="Pipe"/>
              <CI_AND title="AND"/>
              <CI_OR title="OR"/>
              <CI_SubShell1 title="Sub-Shell"/>
              <CI_SubShell2 title="Sub-Shell"/>
            </Box>
          </Box>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Space Filter Bypasses
              </Typography>
              <CI_IFS title="IFS"/>
              <CI_Tabs title="Tabs"/>
              <CI_Braces title="Brace Expansion"/>
            </Box>
            <Box sx={{ paddingBottom: "10vh" }}></Box>
        </Container>

        
      </Box>
    );
  };
  
  export default Command_Injection;
  