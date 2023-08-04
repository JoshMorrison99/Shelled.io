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
import MySQL_Connect from "../../components/MySQL/connecting";
import MySQL_List_Databases from "../../components/MySQL/list_databases";
import MySQL_List_Tables from "../../components/MySQL/list_tables";
import MySQL_List_Content from "../../components/MySQL/list_content";
import MySQL_Bruteforce from "../../components/MySQL/bruteforce";
import MySQL_Fileread from "../../components/MySQL/file_read";
  
  const MySQL = () => {
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
           Attacking MySQL
          </Typography>
        </Box>
        <Container>
          <Box sx={{ paddingBottom: "10vh" }}>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Criteria
              </Typography>
              <MySQL_Connect title="Connect"/>
              <MySQL_List_Databases title="List Databases"/>
              <MySQL_List_Tables title="List Tables"/>
              <MySQL_List_Content title="List Content"/>

            </Box>
          </Box>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Attacks
              </Typography>
              <MySQL_Bruteforce title="Password Bruteforce"/>
              <MySQL_Fileread title="File Read"/>

            </Box>
            
            <Box sx={{ paddingBottom: "10vh" }}></Box>
        </Container>

        
      </Box>
    );
  };
  
  export default MySQL;
  