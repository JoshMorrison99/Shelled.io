import {
    Container,
    Box,
    Typography,
  } from "@mui/material";
  import styles from "../../styles/Home.module.css";
  import React from "react";
import CSRF_SameSite from "../../components/CSRF/same-site";
import CSRF_Validation from "../../components/CSRF/validation";
import CSRF_Method from "../../components/CSRF/request-method";
import CSRF_Exists_Parameter from "../../components/CSRF/exists-parameter";
import CSRF_PoC from "../../components/CSRF/general-poc";
import No_CSRF_Token from "../../components/CSRF/no-csrf-token";
import CSRF_Referer_Bad_Regex from "../../components/CSRF/referer-bad-regex";
import CSRF_Referer_Header_Removed from "../../components/CSRF/referer-header-removed";

  
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
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Criteria
              </Typography>
            </Box>
            <CSRF_SameSite title="SameSite Cookie Attribute" />
            <No_CSRF_Token title="No CSRF Token"/>
            
            <Box sx={{ paddingBottom: "10vh" }}/>

            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                CSRF Token Bypasses
              </Typography>
            </Box>
            
            <CSRF_Validation title="CSRF Token is Being Validated"/>
            <CSRF_Exists_Parameter title="CSRF Token is Being Checked if Parameter not Present"/>
            <CSRF_Method title="CSRF Token is Being Checked on Different Methods"/>

            <Box sx={{ paddingBottom: "10vh" }}/>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Referer Bypasses
              </Typography>
            </Box>
            <CSRF_Referer_Bad_Regex title="Bad Regex"/>
            <CSRF_Referer_Header_Removed title="Referer Header Removed"/>
            <Box sx={{ paddingBottom: "10vh" }}/>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                PoC
              </Typography>
            </Box>
            <CSRF_PoC title="General CSRF PoC"/>
          </Box>
          
            
            <Box sx={{ paddingBottom: "10vh" }}></Box>
        </Container>

        
      </Box>
    );
  };
  
  export default SameSite;
  