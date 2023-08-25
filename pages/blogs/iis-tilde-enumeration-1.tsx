import { Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";

const IIS_TILDE_ENUMERATION_PART_1 = () => {
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
                     IIS Tilde Enumeration: Part 1
                    </Typography>
                    <pre>2023/08/14 12:27AM</pre>
                    <Divider color="#42403f" />
                    <Typography mt={6} variant="h5">
                        Description
                    </Typography>
                    <Typography>
                    IIS tilde directory enumeration is a technique utilized to uncover hidden files, directories, and short file names (aka the 8.3 format) on some versions of Microsoft Internet Information Services (IIS) web servers. This method takes advantage of a specific vulnerability in IIS, resulting from how it manages short file names within its directories.
                    </Typography>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 1: Setup IIS Server
                    </Typography>
                    <Typography>
                    I will be choosing Windows Server 2022 as my AMI.
                    </Typography>
                    <Box mt={5}/>
                    <img src="/iis_1_1.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    I will be creating a Key Pair in order to RDP into Windows Server 2022. You will need to select `.pem` in order to RDP.
                    </Typography>
                    <img src="/iis_1_2.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    I will select to only allow RDP to the Windows machine from my current IP address.
                    </Typography>
                    <img src="/iis_1_3.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Click "Launch machine". Machine is successfully created.
                    </Typography>
                    <img src="/iis_1_4.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 2: RDP to Windows Server 2022
                    </Typography>
                    <Typography>
                    Before we can connect using RDP client, we will need to get the password from the Key-Pair we created in step 1. In order to do this, select the EC2 instance you created and click on connect
                    </Typography>
                    <img src="/iis_1_5.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    You then want to click on "Get password"
                    </Typography>
                    <img src="/iis_1_6.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    You then want to upload the Key-Pair you created in step 1 and then select "Decrypt password".
                    </Typography>
                    <img src="/iis_1_7.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    On your local machine, use the RDP client to connect to the machine.
                    </Typography>
                    <img src="/iis_1_8.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    You will want to use the Username of Administrator and provide the Public IP address to the EC2. You will then be prompted for the password.
                    </Typography>
                    <img src="/iis_1_9.png" style={{width: "100%", height: "100%"}}  />
                    <img src="/iis_1_10.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 3: Setting up IIS
                    </Typography>
                    <Typography>
                    Open Server Manager. Windows Server Manager is a management tool provided by Microsoft for administering and managing Windows Server operating systems. It offers a centralized interface that allows administrators to perform various tasks related to server management, configuration, monitoring, and maintenance.
                    </Typography>
                    <img src="/iis_1_11.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Click on "Add Roles and Features"
                    </Typography>
                    <img src="/iis_1_12.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Select "Role-based or feature-based installation"
                    </Typography>
                    <img src="/iis_1_13.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Click "Select a server from the server pool" and choose you server.
                    </Typography>
                    <img src="/iis_1_14.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Select "Web Server (IIS)"
                    </Typography>
                    <img src="/iis_1_15.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Keep hitting Next and then Install
                    </Typography>
                    <img src="/iis_1_16.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Open "Windows Administrative Tools"
                    </Typography>
                    <img src="/iis_1_17.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Select "Internet Information Services (IIS) Manager"
                    </Typography>
                    <img src="/iis_1_18.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    This is where you can administer the IIS webserver. The location of the webserver is in `C:\inetpub\wwwroot`
                    </Typography>
                    <img src="/iis_1_19.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 4: Viewing the Webserver
                    </Typography>
                    <Typography>
                    The final step is to view our webserver from another machine. In order to do this we will first need to make sure that our EC2 instance accept traffic coming from port 80 (HTTP). You can go to your EC2 instance and change the security group inbound rules to accept all traffic on port 80.
                    </Typography>
                    <img src="/iis_1_20.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Now, we can put our public IP in the URL bar to see the default IIS webpage.
                    </Typography>
                    <img src="/iis_1_21.png" style={{width: "100%", height: "100%"}}  />
                    <Box pt={25}/>
                </Typography>
            </Container>
        </Box>
    );
};

export default IIS_TILDE_ENUMERATION_PART_1;
