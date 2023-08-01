import { Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";

const One_Year = () => {
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
                        1'st Year Working in Cyber Security
                    </Typography>
                    <pre>2023/08/01 5:39AM</pre>
                    <Divider color="#42403f" />
                    <Typography mt={6} variant="h5">
                        Description
                    </Typography>
                    <Typography>
                    I graduated May 1'st 2022 with a bachelors degree in computer science in the stream of cyber security. After graduating, I ironically started to study cyber security more. This is mainly due to the reason I can study the areas on cyber security I was more interested in, but just didn't have time for while in school. I had started applying for jobs around this time as well and had got an offer to start on August 2'nd 2022. It has now been 1 year since working at this cyber security company and this blog post is going to outline the things I learned.
                    </Typography>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Onboarding
                    </Typography>
                    <Typography>
                    The onboarding lasted around 4 months. In this time I was learning all the different products and job roles that were in the company. It was very interesting to see all the different roles that go into making the company operate and more importantly gave me a better understanding in how a team of people can work together to get a project done.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    In this 4 month period I had learned about: 
                    </Typography>
                    <Box mt={-1}/>
                    <ul>
                        <li>Writing filters for IDS/IPS</li>
                        <li>Writing integrity monitoring rules to monitory file/folder changes on a system.</li>
                        <li>Inspecting logs and traffic with the company's product.</li>
                        <li>Creating filters, rules and models for the detection of malicious activity (I would be given a Jira ticket along with document and/or a `.pcap` file and be tasked to create filters/rules/models to successfully identify the traffic in the product without causing FP/FN).</li>
                        <li>Using Kibana to inspect logs.</li>
                        <li>Learned more about using GitHub to work with multiple people.</li>
                        <li>Learned how to setup different environments for development using vSphere and AWS.</li>
                    </ul>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Working
                    </Typography>
                    <Typography>
                    I can't say exactly what I do at my job because my company wouldn't be happy with me, but I can talk about what I learned at an abstract level. Since onboarding finished I had been working on two projects with overlapping members of different teams. 
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    In the projects I learned the following:
                    </Typography>
                    <Box mt={-1}/>
                    <ul>
                        <li>I had already knew python pretty well, but now I feel like an expert.</li>
                        <li>Learned how to use Splunk. I created multiple dashboards to visualized data in how our product compared to our competitors.</li>
                        <li>Learned how to use Jenkins. I created multiple Jenkins pipeline that run daily to categorize and process data.</li>
                        <li>Learned how to work with AWS EC2. AWS EC2 is not difficult to understand, the difficult part is understanding how the company organizes the VPC and Security Groups. Setting up a simple EC2 was a difficult task at first due to not knowing the layout of the companies AWS network and security groups.</li>
                        <li>Learned how to work with AWS ECS/ECR. Working with Docker would come up repeatedly as I needed to constantly analyze host with different OS. I also worked with Docker a lot when working with Jenkins. When I started to learn how to use AWS ECS/ECR, the hard part of knowing Docker was already out of the way.</li>
                        <li>I now have a good understanding of how to analyze Linux and Window operating systems patches for when vulnerabilities are released. </li>
                    </ul>
                    <Box mt={5}/>
                    <Typography>
                    In the past year working in cyber security I have learned a lot. I have also kept my studies up outside of work in order to purse my passion in bug bounties, which unsurprisingly has helped me numerous times in my job. 
                    </Typography>
                    <Box pt={25}/>
                </Typography>
            </Container>
        </Box>
    );
};

export default One_Year;
