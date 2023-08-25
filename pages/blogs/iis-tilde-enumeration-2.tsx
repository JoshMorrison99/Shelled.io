import { Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const IIS_TILDE_ENUMERATION_PART_2 = () => {

    const syntax_1 = `
    http://44.204.75.56/secret1.txt
    http://44.204.75.56/secret_file.txt
    http://44.204.75.56/secret_credentials.txt
    http://44.204.75.56/secrets.txt
    http://44.204.75.56/secrets123.txt
    http://44.204.75.56/secretfile.txt
    http://44.204.75.56/secreted.txt
    ...`


    const syntax_2 = `
    give me 100 common files with the regex secret*.txt

  
    I can't provide you with an actual list of files, but I can generate a list of filenames that match your regex pattern "secret*.txt". Please note that this is a simulated response and not an actual list of files:
    
    1. secretfile.txt
    2. secret1.txt
    3. secret2.txt
    4. secret_document.txt
    5. secret_report.txt
    6. secret_notes.txt
    7. secret_backup.txt
    8. secret_info.txt
    9. secret_final.txt
    10. secret_archive.txt
    ...`

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
                     IIS Tilde Enumeration: Part 2
                    </Typography>
                    <pre>2023/08/14 6:50PM</pre>
                    <Divider color="#42403f" />
                    <Typography mt={6} variant="h5">
                        Description
                    </Typography>
                    <Typography>
                    In the first blog post on IIS Tilde Enumeration, we setup an IIS webserver on Windows Server 2022 using Amazon EC2. In this post we will explore IIS tilde enumeration and how this can lead to a vulnerability.
                    </Typography>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Summary
                    </Typography>
                    <ul>
                        <li>For an MS-DOS compatible filename to be created, the filename must have one of the following be true:</li>
                        <ul>
                            <li>Length of filename greater than 8</li>
                            <li>Length of extension greater than 4</li>
                        </ul>
                        <li>This tool can be used to fuzz for MS-DOS Short Names: https://github.com/bitquark/shortscan</li>
                        <li>We can use Google `BigQuery`, ChatGPT, or grep existing wordlists to create a fuzzing wordlist.</li>
                    </ul>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    IIS Short Names
                    </Typography>
                    <Typography>
                    Each time you create a new file on Windows, the operating system also generates an MS-DOS-compatible short file name in 8.3 format, to allow MS-DOS-based or 16-bit Windows-based programs to access files which have a long name. The MS-DOS short file format allows filenames to be up to 8 characters in length, followed by a period (.) and an extension of up to 3 characters. 
                    </Typography>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Example
                    </Typography>
                    <Typography>
                    The default IIS webserver location is `C:\inetpub\wwwroot`. I will create a file called `secretcredentials.txt` in that location `C:\inetpub\wwwroot\secretcredentials.txt`. 
                    </Typography>
                    <img src="/iis_2_1.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    You can see the MS-DOS-compatible short file names by using the /X switch with the dir command. The MS-DOS-compatible short file name will tell us the first 6 characters of the filename and 3 characters of the extension which is why we have `SECRET~1.TXT` short name from `secretcredentials.txt`.
                    </Typography>
                    <img src="/iis_2_2.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    I will now create a file name called `backup.zip`.
                    </Typography>
                    <img src="/iis_2_3.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    As you can see, there is no MS-DOS compatible short name for `backup.zip` because the length of the filename is not greater than 8 or is the file extension greater than 3.
                    </Typography>
                    <img src="/iis_2_4.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Here are some filename with their MS-DOS compatible short names to help you understand better.
                    </Typography>
                    <img src="/iis_2_5.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Example Directories
                    </Typography>
                    <Typography>
                    The same concept applies for directories.
                    </Typography>
                    <img src="/iis_2_6.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Attacking IIS Short Names
                    </Typography>
                    <Typography>
                    You can scan for MS-DOS compatible short names using this tool: https://github.com/bitquark/shortscan. I will once again create a file called `secretcredentials.txt`.
                    </Typography>
                    <img src="/iis_2_7.png" style={{width: "100%", height: "100%"}}  />
                    <img src="/iis_2_8.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Using the `shortscan` tool, I can scan for short name files. As you can see below, the tool detected the short name of `secretcredentials.txt`.
                    </Typography>
                    <img src="/iis_2_9.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    I will now create a folder called `example10` and run the scan again.
                    </Typography>
                    <img src="/iis_2_10.png" style={{width: "100%", height: "100%"}}  />
                    <img src="/iis_2_11.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    The scanner was able to successfully detect the folder name.
                    </Typography>
                    <img src="/iis_2_12.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    I will now create a folder called `example100`. The scanner was able to detect the short name, but not the entire folder name.
                    </Typography>
                    <img src="/iis_2_13.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Scanning Inside Directories
                    </Typography>
                    <Typography>
                    We can also use the short name scanner to scan inside of a directory. Inside the `example10` directory, I created a file called `supersecret.txt`.
                    </Typography>
                    <img src="/iis_2_14.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Running the short name scanner on that directory, we are able to get the short name of `supersecret.txt`.
                    </Typography>
                    <img src="/iis_2_15.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Short Name to Full Name
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    Here is a scenario. We found an IIS server.
                    </Typography>
                    <img src="/iis_2_16.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Using the short name scanner, we discover the following information.
                    </Typography>
                    <img src="/iis_2_17.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    To proceed from here, we need to be able to guess what the filename is called.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_1}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    Manually guessing is not efficient, we can use a `fuzzer` with a proper wordlist to fuzz for file `secret*.txt`. In order to do this we can use:
                    </Typography>
                    <ol>
                        <li>Google `BigQuery` to create our fuzzing wordlist.</li>
                        <li>ChatGPT to create our fuzzing wordlist</li>
                        <li>Grepping existing wordlist to create our fuzzing wordlist</li>
                    </ol>
                    <Box mt={5}/>
                    <Typography>
                    Google BigQuery
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="sql">
                        {"SELECT path FROM `bigquery-public-data.github_repos.files` WHERE (REGEXP_CONTAINS(path, r'(\\/(?i)siteba[a-z0-9A-Z]+\\.zip|^siteba[a-z0-9A-Z]+\\.zip)')) LIMIT 100"}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    You get 1TB of BigQuery Quota per month for free. After that, it is $5 per 1TB. Reaching this quota is not that hard as a single query will usually be 100-500GB of data processing.
                    </Typography>
                    <img src="/iis_2_18.png" style={{width: "100%", height: "100%"}}  />
                    <img src="/iis_2_19.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    ChatGPT
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_2}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    Existing Wordlists
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {"cat SecLists/Discovery/Web-Content/* | grep -E '^secret'"}
                    </SyntaxHighlighter>
                    <Box pt={25}/>
                </Typography>
            </Container>
        </Box>
    );
};

export default IIS_TILDE_ENUMERATION_PART_2;
