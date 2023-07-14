import {
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../styles/Home.module.css";
import React from "react";
import LinuxCard from "../components/Cards/LinuxPrivilegeEscalation";
import WindowsCard from "../components/Cards/WindowsPrivilegeEscalation";
import BufferOverflowCard from "../components/Cards/BufferOverflow";
import Pagination from '@mui/material/Pagination';
import AttackingADCard from "../components/Cards/AttackingAD";
import CSRF from "../components/Cards/CSRF";

const Home = () => {
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
        {/* <Image
          src="/Shelled.png"
          width={300}
          height={300}
          className={styles.centerImage}
        /> */}
        <Typography className={styles.center} color="primary.main" variant="h1">
          Shelled
        </Typography>
        {/* <Script
          src="https://tryhackme.com/badge/47881"
          strategy="beforeInteractive"
        /> */}
      </Box>
      <Container>
        <Box sx={{ paddingBottom: "10vh" }}>
          <Box mb={5}>
            <Typography variant="h3" color="primary.main">
              Modules
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <LinuxCard />
            </Grid>
            <Grid item xs={6}>
              <WindowsCard />
            </Grid>
            <Grid item xs={6}>
              <BufferOverflowCard />
            </Grid>
            <Grid item xs={6}>
              <AttackingADCard />
            </Grid>
            <Grid item xs={6}>
              <CSRF />
            </Grid>
          </Grid>
          <Box display="flex"
            justifyContent="center"
            alignItems="center"
            mt={5}>
            <Pagination count={10} color="primary" sx={{ button: { color: '#000000' } }} />
          </Box>
        </Box>
        <Box sx={{ paddingBottom: "10vh" }}>
          <Box mb={5}>
            <Typography variant="h3" color="primary.main">
              Writeups
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <LinuxCard />
            </Grid>
            <Grid item xs={6}>
              <WindowsCard />
            </Grid>
            <Grid item xs={6}>
              <BufferOverflowCard />
            </Grid>
            <Grid item xs={6}>
              <AttackingADCard />
            </Grid>
          </Grid>
          <Box display="flex"
            justifyContent="center"
            alignItems="center"
            mt={5}>
            <Pagination count={10} color="primary" sx={{ button: { color: '#000000' } }} />
          </Box>
        </Box>
        <Box sx={{ paddingBottom: "10vh" }}>
          <Box mb={5}>
            <Typography variant="h3" color="primary.main">
              Blogs
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <LinuxCard />
            </Grid>
            <Grid item xs={6}>
              <WindowsCard />
            </Grid>
            <Grid item xs={6}>
              <BufferOverflowCard />
            </Grid>
            <Grid item xs={6}>
              <AttackingADCard />
            </Grid>
            
          </Grid>
          <Box display="flex"
            justifyContent="center"
            alignItems="center"
            mt={5}>
            <Pagination count={10} color="primary" sx={{ button: { color: '#000000' } }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
