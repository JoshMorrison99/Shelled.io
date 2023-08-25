import { Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const AWS_Athena = () => {

    const example = `
    {
        "timestamp":"2023-08-06T13:06:57.869364286-04:00",
        "hash":{
           "body_md5":"0d6a49ad0a9c1fd5fd374a4984c4c763",
           "body_mmh3":"314312011",
           "body_sha256":"b5245345231f1d454416876a76d1de2ef826f97d2f7819b2d82a0c7995726ace",
           "body_simhash":"9814101219004351334",
           "header_md5":"91ecd6f42cf378af66934eac1f223be3",
           "header_mmh3":"-1122951683",
           "header_sha256":"083c5f3cd8ce90f154de0703d5e2e7e8bb30e863afbd466006492acbe8899397",
           "header_simhash":"10967304262780689263"
        },
        "port":"80",
        "url":"http://ans.rkai.next.airbnb.com",
        "input":"ans.rkai.next.airbnb.com",
        "title":"Invalid URL",
        "scheme":"http",
        "webserver":"AkamaiGHost",
        "content_type":"text/html",
        "method":"GET",
        "host":"23.47.144.152",
        "path":"/",
        "favicon_path":"/favicon.ico",
        "time":"30.184397ms",
        "a":[
           "23.47.144.152",
           "23.47.144.137"
        ],
        "cname":[
           "w.airbnb.com.edgekey.net",
           "e74147.a.akamaiedge.net"
        ],
        "words":8,
        "lines":8,
        "status_code":400,
        "content_length":209,
        "failed":false
     }`

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
                        AWS Athena
                    </Typography>
                    <pre>2023/08/06 8:17PM</pre>
                    <Divider color="#42403f" />
                    <Typography mt={6} variant="h5">
                        Description
                    </Typography>
                    <Typography>
                    In this post I created and documented a project I made in the goal to learn how to use AWS Athena. The project involves creating two S3 buckets, using the AWS Glue crawlers and database, and finally querying data using AWS Athena. 
                    </Typography>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                        AWS Athena Description
                    </Typography>
                    <Typography>
                    Amazon Athena is an interactive query service offered by Amazon Web Services (AWS) that allows you to analyze data in Amazon S3 using standard SQL queries. It's part of AWS's larger suite of data analytics and big data processing services. Athena is designed to provide a serverless and easy-to-use way to analyze and gain insights from large datasets without the need to set up and manage complex infrastructure.
                    </Typography>
                    <img src="/aws_athena_1.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                        Step 1: Data Collection
                    </Typography>
                    <Typography>
                    The first step in the process of using Athena is to have data. Athena supports various data formats like CSV, TSV, JSON, Parquet and others. I will collect some data and upload it to S3 in JSON format. We will then use Athena to query that data. Athena allows us to use S3 as a SQL database.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    Note: Athena also supports compressed files such as `gzip (.gz)` and `Zlib (.bz2)`. Compressing your data in S3 and then using Athena to query the data could save you some money.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    I will use the `httpx` tool from project discovery to collect some information on `*.airbnb.com` subdomains. This is the command I will use. This command is collecting information such as status code, title, content-length, IP, CNAME, etc... and outputting the data into JSON format.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {"cat airbnb.com.txt | httpx -sc -cl -title -ct -location -favicon -rt -lc -wc -server -td -ip -cname -cdn --json -o airbnb.json"}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    JSON Data Example 
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="bash">
                        {example}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                        Step 2: Uploading Data to S3
                    </Typography>
                    <Typography>
                    I will create a new S3 bucket and call it `airbnb-subdomains`. I will leave all the other options as default because we will not be using this bucket publicly.
                    </Typography>
                    <img src="/aws_athena_2.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    With the bucket created, I will now upload my JSON data.
                    </Typography>
                    <img src="/aws_athena_3.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <img src="/aws_athena_4.png" style={{width: "100%", height: "100%"}}  />
                    <Typography mt={6} variant="h5">
                    Step 3: Set up Query Result S3 Bucket
                    </Typography>
                    <Typography>
                    When you run a query using Amazon Athena, the result of the query will be put into an S3 bucket. We will need to create another S3 bucket which will house our SQL query results from Athena.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    I will create another S3 bucket and call it `airbnb-subdomains-destination`. Once again I will leave the rest of the settings as default.
                    </Typography>
                    <img src="/aws_athena_5.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    The S3 bucket dashboard should now contain both your `airbnb-subdomain` bucket which houses the JSON data for the `airbnb` subdomains, and you should also have the `airbnb-subdomains-destination` bucket which will house the Athena SQL query results.
                    </Typography>
                    <img src="/aws_athena_6.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Going over to the Athena dashboard we can see that we are being prompted to setup a destination for our queries to go (`airbnb-subdomains-destination`).
                    </Typography>
                    <img src="/aws_athena_7.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Go to setting and select the destination S3 bucket.
                    </Typography>
                    <img src="/aws_athena_8.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Chose the destination bucket.
                    </Typography>
                    <img src="/aws_athena_9.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Save
                    </Typography>
                    <img src="/aws_athena_10.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 4: Defining/Detecting your Schema
                    </Typography>
                    <Typography>
                    We will now need to tell Athena how our data is structured. We can do this in 2 ways:
                    </Typography>
                    <ol>
                        <li>AWS Glue</li>
                        <li>Manually creating a table</li>
                    </ol>
                    <Box mt={5}/>
                    <Typography>
                    AWS Glue is used to structure our schema automatically. It works by having a crawler crawl our S3 bucket and discover the Schema that way. Alternatively, we can enter how our schema should be manually. 
                    </Typography>
                    <img src="/aws_athena_11.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    The manual way of adding the schema is quite tedious. As you can see, we will need to enter the column name and the column type for each column in the schema.
                    </Typography>
                    <img src="/aws_athena_12.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 5: AWS Glue
                    </Typography>
                    <Typography>
                    Using AWS glue will allow us to click a few buttons and how our JSON data schema created for us via crawlers. 
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    Go to AWS Glue &gt; Crawlers and the click on "Create crawler"
                    </Typography>
                    <img src="/aws_athena_13.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    We will name the AWS Glue crawler `airbnb-crawler`. Then click on "Next"
                    </Typography>
                    <img src="/aws_athena_14.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    From here we what to "Add a data source".
                    </Typography>
                    <img src="/aws_athena_15.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Inside the "Add a data source", we will want to specify that we are using S3 as our data source and give the path to the S3 bucket containing the JSON data.
                    </Typography>
                    <img src="/aws_athena_16.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    With our data source setup, click on "Next".
                    </Typography>
                    <img src="/aws_athena_17.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    This next step involves creating an IAM role for the AWS Glue crawler in order to give the crawler permissions to read S3 data.
                    </Typography>
                    <img src="/aws_athena_18.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Our new IAM role is created, click on "Next"
                    </Typography>
                    <img src="/aws_athena_19.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    We will now need to create an AWS Glue database. This database will house all the tables created by the crawler.
                    </Typography>
                    <img src="/aws_athena_20.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Create an AWS Glue database, we will call it `airbnb-database`. Click "Create database"
                    </Typography>
                    <img src="/aws_athena_21.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <img src="/aws_athena_22.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    With the AWS Glue database created, we can select it as the target database for our crawler to use. We can also configure a crawler schedule. I have it set as "On demand" meaning I can click to run it, but other options are: hourly, daily, weekly, monthly and custom.
                    </Typography>
                    <img src="/aws_athena_23.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Review and create. Click on "Create crawler".
                    </Typography>
                    <img src="/aws_athena_24.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    The crawler is now created and setup to output the tables in the database we created. Lets run the crawler to get our JSON schema.
                    </Typography>
                    <img src="/aws_athena_25.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    The JSON file I used is quite small, so it only took 48 seconds to crawl
                    </Typography>
                    <img src="/aws_athena_26.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    With the crawler finished, we can see that the AWS Glue database we created now has tables.
                    </Typography>
                    <img src="/aws_athena_27.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    By clicking on the name of the database, we can see what type the AWS Glue crawler identified each column as. As you can see in the image below, the AWS Glue crawler identified the "port" column as being string. This is not an issue, but if I wanted it to be an integer, I can edit the schema if I want to.
                    </Typography>
                    <img src="/aws_athena_28.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 6: Querying Data with AWS Athena
                    </Typography>
                    <Typography>
                    Going back to AWS Athena we can see that there is now an option to select the AWS Glue database we created.
                    </Typography>
                    <img src="/aws_athena_29.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Click to "Preview Table"
                    </Typography>
                    <img src="/aws_athena_30.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    This will run a SQL query returning 10 results
                    </Typography>
                    <img src="/aws_athena_31.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Results
                    </Typography>
                    <img src="/aws_athena_32.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 7: More SQL
                    </Typography>
                    <Typography>
                    You have successfully used AWS Athena to query data from an S3 bucket. Here are some more queries I did just to get an understanding.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    Get only the URLs
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="sql">
                        {'SELECT url FROM "airbnb-database"."airbnb_subdomains" limit 10;'}
                    </SyntaxHighlighter>
                    <img src="/aws_athena_33.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Get only the URLs on port 80
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="sql">
                        {'SELECT url FROM "airbnb-database"."airbnb_subdomains" WHERE port = \'80\';'}
                    </SyntaxHighlighter>
                    <img src="/aws_athena_34.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Note that Athena doesn't allow for double quotes to denote string literals. You need to use single quote when denoting string literals. The query below will cause the following error due to this: COLUMN_NOT_FOUND: line 1:68: Column '80' cannot be resolved or requester is not authorized to access requested resources
                    </Typography>
                    <Box mt={5}/>
                    <SyntaxHighlighter className="syntax" language="sql">
                        {'SELECT url FROM "airbnb-database"."airbnb_subdomains" WHERE port = "80";'}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    Get only the URLs using nginx as the webserver
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="sql">
                        {'SELECT url, webserver FROM "airbnb-database"."airbnb_subdomains" WHERE webserver = \'nginx\';'}
                    </SyntaxHighlighter>
                    <img src="/aws_athena_35.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Get all the URLs that have a status code of 403
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="sql">
                        {'SELECT "url", "status_code" FROM "airbnb-database"."airbnb_subdomains" where "status_code" = 403;'}
                    </SyntaxHighlighter>
                    <img src="/aws_athena_36.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Note on Pricing
                    </Typography>
                    <Typography>
                    With per query billing, you can get started quickly and pay only for the data scanned by queries you run. You are charged for the number of bytes scanned per query, rounded up to the nearest megabyte, with a 10 MB minimum per query. There are no charges for Data Definition Language (DDL) statements like CREATE, ALTER, or DROP TABLE statements for managing partitions, or failed queries. Canceled queries are billed for the total amount of data scanned when the query is canceled.
                    </Typography>
                    <Box mt={5}/>
                    <img src="/aws_athena_37.png" style={{width: "50%", height: "50%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Example SQL Query and Note on Compression
                    </Typography>
                    <Typography>
                    Consider a table with 4 equally sized columns, stored as an uncompressed text file with a total size of 3 TB on Amazon S3. Running a query to get data from a single column of the table requires Amazon Athena to scan the entire file because text formats can't be split.  
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    This query would cost: $15. (Price for 3 TB scanned is 3 * $5/TB = $15.)  
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    If you compress your file using GZIP, you might see 3:1 compression gains. In this case, you would have a compressed file with a size of 1 TB. The same query on this file would cost $5. Athena has to scan the entire file again, but because it's three times smaller in size, you pay one-third of what you did before. If you compress your file and also convert it to a columnar format like Apache Parquet, achieving 3:1 compression, you would still end up with 1 TB of data on S3. But, in this case, because Parquet is columnar, Athena can read only the column that is relevant for the query being run. Because the query in question only references a single column, Athena reads only that column and can avoid reading three-fourths of the file. Since Athena only reads one-fourth of the file, it scans just 0.25TB of data from S3.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    This query would cost: $1.25. There is a 3x savings from compression and 4x savings for reading only one column. (File size = 3TB/3 = 1 TB. Data scanned when reading a single column = 1TB/4 = 0.25 TB. Price for 0.25 TB = 0.25 * $5/TB = $1.25)
                    </Typography>
                    <Box pt={25}/>
                </Typography>
            </Container>
        </Box>
    );
};

export default AWS_Athena;
