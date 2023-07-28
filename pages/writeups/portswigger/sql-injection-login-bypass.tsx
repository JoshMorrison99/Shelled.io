import { Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../../../styles/Home.module.css";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const SQL_2 = () => {
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
                        SQL Injection Login Bypass
                    </Typography>
                    <pre>2023/07/22 1:44PM</pre>
                    <Divider color="#42403f" />
                    <Typography mt={6} variant="h5">
                        Description
                    </Typography>
                    <Typography>
                    This lab contains a SQL injection vulnerability in the login function. To solve the lab, perform a SQL injection attack that logs in to the application as the administrator user. 
                    </Typography>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                        Getting Started
                    </Typography>
                    <Typography>
                        Once the lab is loaded we are greeted with a shopping website.
                    </Typography>
                    <img src="/sql_3.png" width={1237} height={596} />
                    <Box mt={5}/>
                    <Typography>
                        The website has some login functionality. To solve the lab we need to perform SQL injection to login as administrator, so lets focus on the login functionality.
                    </Typography>
                    <img src="/sql_4.png" width={826} height={402} />
                    <Box mt={5}/>
                    <Typography>
                        A common SQL query for websites to use is the following:
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="sql">
                        {"SELECT * FROM users WHERE username = 'administrator' AND password = 'shelled123!'"}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                        SQL Injection Login Bypass
                    </Typography>
                    <Typography>
                        To login as the administrator we can comment out the "AND password = 'shelled123!'" part.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="sql">
                        {"SELECT * FROM users WHERE username = 'administrator'-- AND password = 'shelled123!'"}
                    </SyntaxHighlighter>
                    <Box pt={25}/>
                </Typography>
            </Container>
        </Box>
    );
};

export default SQL_2;
