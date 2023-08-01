import {
    Container,
    Box,
    Typography,
  } from "@mui/material";
  import styles from "../../styles/Home.module.css";
  import React from "react";
import MSSQL_Connect from "../../components/MSSQL/connecting";
import MSSQL_List_Databases from "../../components/MSSQL/list_databases";
import MSSQL_List_Tables from "../../components/MSSQL/list_tables";
import MSSQL_List_Content from "../../components/MSSQL/list_content";
import MSSQL_Change_Database from "../../components/MSSQL/change_database";
import MSSQL_Code_Execution from "../../components/MSSQL/code_execution";
import MSSQL_NTLM from "../../components/MSSQL/ntlmv2_hash";
  
  const MSSQL = () => {
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
           Attacking MSSQL
          </Typography>
        </Box>
        <Container>
          <Box sx={{ paddingBottom: "10vh" }}>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Criteria
              </Typography>
              <MSSQL_Connect title="Connect to MSSQL"/>
              <MSSQL_List_Databases title="List Databases"/>
              <MSSQL_List_Tables title="List Tables"/>
              <MSSQL_List_Content title="List Table Content"/>
              <MSSQL_Change_Database title="Change Database"/>
            </Box>
          </Box>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Attacks
              </Typography>
              <MSSQL_Code_Execution title="xp_cmdshell"/>
              <MSSQL_NTLM title="NTLMv2 Hash Capture"/>
            </Box>
            
            <Box sx={{ paddingBottom: "10vh" }}></Box>
        </Container>

        
      </Box>
    );
  };
  
  export default MSSQL;
  