import {
    Container,
    Box,
    Typography,
  } from "@mui/material";
  import styles from "../../styles/Home.module.css";
  import React from "react";
import PIVOT_Local_Port_Forward from "../../components/PivotingTunnelingPortForwarding/local-port-forward";
import PIVOT_Dynamic_Port_Forward from "../../components/PivotingTunnelingPortForwarding/dynamic-port-forwarding";
import PIVOT_Remote_Port_Forward from "../../components/PivotingTunnelingPortForwarding/remote-port-forwarding";
  
  const PIVOT = () => {
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
           Pivoting
          </Typography>
        </Box>
        <Container>
          <Box sx={{ paddingBottom: "10vh" }}>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Port Forwarding
              </Typography>
              <PIVOT_Local_Port_Forward title="Local Port Forward"/>
              <PIVOT_Dynamic_Port_Forward title="Dynamic Port Forwarding"/>
              <PIVOT_Remote_Port_Forward title="Remote Port Forwarding"/>
            </Box>
          </Box>
            <Box mb={1}>
              <Typography variant="h3" color="primary.main">
                Pivoting
              </Typography>
            </Box>
            
            <Box sx={{ paddingBottom: "10vh" }}></Box>
        </Container>

        
      </Box>
    );
  };
  
  export default PIVOT;
  