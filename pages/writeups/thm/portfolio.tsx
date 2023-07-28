import { Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";

const Home = () => {
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
            Portfolio Writeup
          </Typography>
          <pre>2022/09/22 10:37PM</pre>
          <Divider color="#42403f" />
          <Typography mt={6} variant="h5">
            Description
          </Typography>
          <Typography>
            Portfolio is an easy machine where initial access involves
            leveraging either a NoSQL injection vulnerability or performing
            response manipulation to get access to an admin panel. The admin
            panel has a private SSH key that is password protected. You can use
            ssh2john to crack the password and SSH into the machine as user
            steve. The privilege escalation involves exploiting a SUID bit set
            on bash.
          </Typography>

          <Typography mt={4} variant="h5">
            Port Scan
          </Typography>
          <Typography>
            Port scan reveals that ports 22 and 80 are open. Port 80 is a
            website that is redirecting to http://portfolio.tm. We can confirm
            that the website is redirecting to http://portfolio.tm by entering
            the IP in the browser.
          </Typography>
          <img src="/portfolio1.png" width={701} height={302} />
          <Typography mt={4} variant="h5">
            Host File
          </Typography>
          <Typography>
            We will need to edit our /etc/hosts file. Type "vim /etc/hosts" and
            add the IP with the host name.
          </Typography>
          <img src="/portfolio2.png" width={271} height={92} />
          <Typography mt={4} variant="h5">
            Webpage
          </Typography>
          <img src="/portfolio3.png" width={1932} height={820} />
          <Typography mt={4} variant="h5">
            Directory Fuzzing
          </Typography>
          <Typography>
            After fuzzing directories, we see /admin directory is returning a
            200 status code.
          </Typography>
          <img src="/portfolio4.png" width={785} height={484} />
          <Typography mt={4} variant="h5">
            Admin Panel
          </Typography>
          <Typography>
            The admin panel is password protected. We can bypass this through
            either NoSQL injection or response manipulation.
          </Typography>
          <img src="/portfolio5.png" width={1897} height={804} />
          <Typography mt={4} variant="h5">
            Bypass 1: NoSQL Injection
          </Typography>
          <Typography>
            We can capture the request and change the password parameter.
          </Typography>
          <img src="/portfolio6.png" width={652} height={297} />
          <Typography mt={4} variant="h5">
            Bypass 2: Response Manipulation
          </Typography>
          <Typography>
            We can capture the request and ask Burp suite for the response.
          </Typography>
          <img src="/portfolio7.png" width={699} height={488} />
          <img src="/portfolio8.png" width={454} height={249} />
          <img src="/portfolio9.png" width={455} height={247} />
          <Typography mt={4} variant="h5">
            SSH Key
          </Typography>
          <Typography>
            We are redirected to a directory containing an SSH key.
          </Typography>
          <img src="/portfolio10.png" width={809} height={779} />
          <Typography mt={4} variant="h5">
            SSH Attempt
          </Typography>
          <Typography>
            We can copy and paste the ssh key into a file and try sshing into
            the machine as the user steve, but unfortunatly the ssh key is
            password protected.
          </Typography>
          <img src="/portfolio11.png" width={666} height={298} />
          <Typography mt={4} variant="h5">
            Cracking SSH
          </Typography>
          <Typography>
            We can use the tool ssh2john to convert our ssh key into a hash that
            can be cracked using john. Note: you will also need to change the
            ssh keys privileges to chmod 600.
          </Typography>
          <img src="/portfolio12.png" width={631} height={287} />
          <Typography mt={4} variant="h5">
            Privilege Escalation
          </Typography>
          <Typography>
            We can search for all SUID file with this command: "". A SUID of
            interest is /bin/bash. With this knowledge, we can use
            https://gtfobins.github.io/ to see how to escalate privileges.
          </Typography>
          <img src="/portfolio13.png" width={986} height={366} />
          <Typography mt={4} variant="h5">
            Root
          </Typography>
          <Typography>Command bash -p will give us root.</Typography>
          <img src="/portfolio14.png" width={211} height={135} />
        </Typography>
      </Container>
    </Box>
  );
};

export default Home;
