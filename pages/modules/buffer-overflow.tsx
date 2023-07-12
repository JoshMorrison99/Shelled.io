import {
    Container,
    Box,
    Typography,
  } from "@mui/material";
  import styles from "../../styles/Home.module.css";
  import React from "react";
import BufferOverflowStep0 from "../../components/BufferOverflow/Step0";
import BufferOverflowStep1 from "../../components/BufferOverflow/Step1";
import BufferOverflowStep2 from "../../components/BufferOverflow/Step2";
import BufferOverflowStep3 from "../../components/BufferOverflow/Step3";
import BufferOverflowStep4 from "../../components/BufferOverflow/Step4";
import BufferOverflowStep5 from "../../components/BufferOverflow/Step5";
import BufferOverflowStep6 from "../../components/BufferOverflow/Step6";
import BufferOverflowStep7 from "../../components/BufferOverflow/Step7";

  
  const BufferOverflow = () => {
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
            Buffer Overflow
          </Typography>
        </Box>
        <Container>
          <Box sx={{ paddingBottom: "50vh" }}>
          <BufferOverflowStep0 title="Step 0 - Download Script" />
            <BufferOverflowStep1 title="Step 1 - Fuzzing" />
            <BufferOverflowStep2 title="Step 2 - Finding the Offset by Creating Pattern" />
            <BufferOverflowStep3 title="Step 3 - Finding the Offset by Querying Pattern" />
            <BufferOverflowStep4 title="Step 4 - Finding Bad Characters by Sending Bytearray" />
            <BufferOverflowStep5 title="Step 5 - Finding Bad Characters by Querying Bytearray" />
            <BufferOverflowStep6 title="Step 6 - Finding Jump Point" />
            <BufferOverflowStep7 title="Step 7 - Exploiting" />
            </Box>
        </Container>
      </Box>
    );
  };
  
  export default BufferOverflow;
  