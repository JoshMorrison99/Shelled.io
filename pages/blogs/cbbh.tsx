import { Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";

const cbbh = () => {
    return (
        <Box
            className={styles.container}
            sx={{ backgroundColor: "primary.background_website" }}
            pt={5}
        >
            <Container>
                <Typography
                    sx={{
                        color: "primary.main",
                    }}
                >
                    <Typography mb={-2} variant="h2">
                        CBBH Review
                    </Typography>
                    <pre>2023/07/28 8:39AM</pre>
                    <Divider color="#42403f" />
                    <Typography mt={6} variant="h5">
                        Description
                    </Typography>
                    <Typography>
                    The Bug Bounty Hunter Job Role Path is for individuals who want to enter the world of Bug Bounty Hunting with little to no prior experience. This path covers core web application security assessment and bug bounty hunting concepts and provides a deep understanding of the attack tactics used during bug bounty hunting. Armed with the necessary theoretical background, multiple practical exercises, and a proven bug bounty hunting methodology, students will go through all bug bounty hunting stages, from reconnaissance and bug identification to exploitation, documentation, and communication to vendors/programs. Upon completing this job role path, you will have become proficient in the most common bug bounty hunting and attack techniques against web applications and be in the position of professionally reporting bugs to a vendor.
                    </Typography>
                    <Box mt={5}/>
                    <img src="/cbbh.png" width={1326/1.2} height={940/1.2}  />
                    <Box mt={5}/>
                    <Typography>
                    The course has 20 modules:
                    </Typography>
                    <ul>
                        <li>Web Requests</li>
                        <li>Introduction to Web Applications</li>
                        <li>Using Web Proxies</li>
                        <li>Information Gathering - Web Edition</li>
                        <li>Attacking Web Applications with Ffuf</li>
                        <li>JavaScript Deobfuscation</li>
                        <li>Cross-Site Scripting (XSS)</li>
                        <li>SQL Injection Fundamentals</li>
                        <li>SQLMap Essentials</li>
                        <li>Command Injections</li>
                        <li>File Upload Attacks</li>
                        <li>Server-side Attacks</li>
                        <li>Login Brute Forcing</li>
                        <li>Broken Authentication</li>
                        <li>Web Attacks</li>
                        <li>File Inclusion</li>
                        <li>Session Security</li>
                        <li>Web Service & API Attacks</li>
                        <li>Hacking WordPress</li>
                        <li>Bug Bounty Hunting Process</li>
                    </ul>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                        Motivation
                    </Typography>
                    <Typography>
                    Before taking this exam I had recently graduated with a bachelors degree in computer science and been actively doing bug bounty for about 8 months. In this time I had found and successfully reported 10 security vulnerabilities on HackerOne and had learned quite a bit from bug bounty writeups, YouTube videos, CTFs, university courses, and podcasts. The motivation for getting this certification was to bring my bug bounty skills to the next level.
                    </Typography>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                        Review
                    </Typography>
                    <Typography>
                    Due to having studied bug bounty previously I had already knew a lot of the information that the course provides. With that being said, I still learned a lot of tips/tricks and expanded/hardened my knowledge in web vulnerabilities. The most valuable part in taking the course is being able to read the information and then actively test the information on a vulnerable target.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    The course is well structured, teaching you about the base knowledge first and then diving into the specific vulnerabilities. Something that I really appreciate from this course is that there isn't much fluff material, everything taught in the course is valuable as a bug bounty hunter. The exam is fair and if you know the material taught in the course then there won't be much struggle with the exam.
                    </Typography>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                        Tips
                    </Typography>
                    <ul>
                        <li>You will need to provide a well documented report at the end of the exam, make sure to take screenshots and notes as you work through the exam so you don't need to spend a lot of time re-exploiting the machine to get the screenshots.</li>
                        <li>Create a cheat sheet with the course material so it is easier to find the command needed to exploit the vulnerability or get a foothold on the machine.</li>
                    </ul>
                    <Box pt={25}/>
                </Typography>
            </Container>
        </Box>
    );
};

export default cbbh;
