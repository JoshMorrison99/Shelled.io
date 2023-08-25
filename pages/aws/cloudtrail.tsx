import { Container, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const AWS_Cloudtrail = () => {

    const syntax1 = `
    {
        "eventVersion": "1.09",
        "userIdentity": {
            "type": "Root",
            "principalId": "{REDACTED}",
            "arn": "arn:aws:iam::{REDACTED}:root",
            "accountId": "{REDACTED}",
            "accessKeyId": "{REDACTED}",
            "sessionContext": {
                "attributes": {
                    "creationDate": "2023-08-08T10:02:37Z",
                    "mfaAuthenticated": "true"
                }
            }
        },
        "eventTime": "2023-08-08T10:58:34Z",
        "eventSource": "cloudtrail.amazonaws.com",
        "eventName": "CreateTrail",
        "awsRegion": "us-east-1",
        "sourceIPAddress": "{REDACTED}",
        "userAgent": "AWS Internal",
        "requestParameters": {
            "name": "management-events",
            "s3BucketName": "aws-cloudtrail-logs-{REDACTED}",
            "includeGlobalServiceEvents": true,
            "isMultiRegionTrail": true,
            "isOrganizationTrail": false
        },
        "responseElements": {
            "name": "management-events",
            "s3BucketName": "aws-cloudtrail-logs-{REDACTED}",
            "includeGlobalServiceEvents": true,
            "isMultiRegionTrail": true,
            "trailARN": "arn:aws:cloudtrail:us-east-1:{REDACTED}:trail/management-events",
            "logFileValidationEnabled": false,
            "isOrganizationTrail": false
        },
        "requestID": "64328535-d386-43c3-a0b2-d20383ae8412",
        "eventID": "6c6a15cc-57cd-4c99-9751-0f6abe528182",
        "readOnly": false,
        "eventType": "AwsApiCall",
        "managementEvent": true,
        "recipientAccountId": "{REDACTED}",
        "eventCategory": "Management",
        "sessionCredentialFromConsole": "true"
    }`

    const syntax2 = `
    {
        "eventVersion": "1.08",
        "userIdentity": {
            "type": "Root",
            "principalId": "{REDACTED}",
            "arn": "arn:aws:iam::{REDACTED}:root",
            "accountId": "{REDACTED}",
            "accessKeyId": "{REDACTED}",
            "sessionContext": {
                "sessionIssuer": {},
                "webIdFederationData": {},
                "attributes": {
                    "creationDate": "2023-08-06T10:13:05Z",
                    "mfaAuthenticated": "true"
                }
            }
        },
        "eventTime": "2023-08-06T17:17:51Z",
        "eventSource": "s3.amazonaws.com",
        "eventName": "CreateBucket",
        "awsRegion": "us-east-1",
        "sourceIPAddress": "{REDACTED}",
        "userAgent": "[S3Console/0.4, aws-internal/3 aws-sdk-java/1.12.488 Linux/5.10.184-153.749.amzn2int.x86_64 OpenJDK_64-Bit_Server_VM/25.372-b08 java/1.8.0_372 vendor/Oracle_Corporation cfg/retry-mode/standard]",
        "requestParameters": {
            "bucketName": "airbnb-subdomains",
            "Host": "s3.amazonaws.com"
        },
        "responseElements": null,
        "additionalEventData": {
            "SignatureVersion": "SigV4",
            "CipherSuite": "ECDHE-RSA-AES128-GCM-SHA256",
            "bytesTransferredIn": 0,
            "AuthenticationMethod": "AuthHeader",
            "x-amz-id-2": "7Cex/yo9qP/fQ8hiz0pDeAXV6JeU2BfliohJlP/+xH5dWXkuHwM6W/r4DbkX+WY/pIZNiYecvwc=",
            "bytesTransferredOut": 0
        },
        "requestID": "WSXJ81ZQDE5AW0M3",
        "eventID": "ff456ad8-2f5c-49bc-a8cc-a2c81df501e2",
        "readOnly": false,
        "eventType": "AwsApiCall",
        "managementEvent": true,
        "recipientAccountId": "{REDACTED}",
        "vpcEndpointId": "vpce-f40dc59d",
        "eventCategory": "Management",
        "tlsDetails": {
            "tlsVersion": "TLSv1.2",
            "cipherSuite": "ECDHE-RSA-AES128-GCM-SHA256",
            "clientProvidedHostHeader": "s3.amazonaws.com"
        }
    }`

    const syntax3 = `
    - GetTotal (billingconsole.amazonaws.com)
    - ListBuckets (S3.amazonaws.com)
    - GetBucketAcl (S3.amazonaws.com)
    - GetBucketVersioning (S3.amazonaws.com)
    - GetBucketPolicyStatus (S3.amazonaws.com)
    - LookupEvents (cloudtrail.amazonaws.com)
    - FilterLogEvents (logs.amazonaws.com)`

    const syntax4 = `
    S3
    Lambda
    DynamoDB
    S3 Outposts
    Managed Blockchain
    Managed Blockchain network
    S3 Object Lambda
    Lake Formation
    Cognito Identity Pools
    Kendra Ranking
    SageMaker metrics experiment trail component
    EBS direct APIs
    S3 Access Point
    DynamoDB Streams
    CloudTrail
    GuardDuty detector
    EMR write-ahead log workspace
    Amazon Verified Permissions
    FinSpace
    CodeWhisperer
    Systems Manager
    SageMaker feature store
    Medical Imaging data store`

    const syntax5 = `
    {
        "eventVersion": "1.08",
        "userIdentity": {
            "type": "AWSService",
            "invokedBy": "cloudtrail.amazonaws.com"
        },
        "eventTime": "2023-08-08T14:46:48Z",
        "eventSource": "s3.amazonaws.com",
        "eventName": "PutObject",
        "awsRegion": "us-east-1",
        "sourceIPAddress": "cloudtrail.amazonaws.com",
        "userAgent": "cloudtrail.amazonaws.com",
        "requestParameters": {
            "bucketName": "aws-cloudtrail-logs-{REDACTED}",
            "Host": "aws-cloudtrail-logs-{REDACTED}.s3.us-east-1.amazonaws.com",
            "x-amz-acl": "bucket-owner-full-control",
            "x-amz-server-side-encryption": "AES256",
            "key": "AWSLogs/{REDACTED}/CloudTrail/us-east-1/2023/08/08/{REDACTED}_CloudTrail_us-east-1_20230808T1445Z_pZ3Iuksq3l2eQoiN.json.gz"
        },
        "responseElements": {
            "x-amz-server-side-encryption": "AES256"
        },
        "additionalEventData": {
            "SignatureVersion": "SigV4",
            "CipherSuite": "ECDHE-RSA-AES128-GCM-SHA256",
            "bytesTransferredIn": 1303,
            "SSEApplied": "SSE_S3",
            "AuthenticationMethod": "AuthHeader",
            "x-amz-id-2": "RWqWLHpU7t/Ja8bg/ed0Ko6k3wVkmvt+lfwJsqzoiMZMcN5kQk8rc3eW4QXWJTiC3AmqYj50roc=",
            "bytesTransferredOut": 0
        },
        "requestID": "WT3ZJZ3NQ64J5G3P",
        "eventID": "dc126a50-ded9-4b0b-8667-561e59e78e20",
        "readOnly": false,
        "resources": [
            {
                "type": "AWS::S3::Object",
                "ARN": "arn:aws:s3:::aws-cloudtrail-logs-{REDACTED}-e7974f37/AWSLogs/{REDACTED}/CloudTrail/us-east-1/2023/08/08/{REDACTED}_CloudTrail_us-east-1_20230808T1445Z_pZ3Iuksq3l2eQoiN.json.gz"
            },
            {
                "accountId": "{REDACTED}",
                "type": "AWS::S3::Bucket",
                "ARN": "arn:aws:s3:::aws-cloudtrail-logs-{REDACTED}"
            }
        ],
        "eventType": "AwsApiCall",
        "managementEvent": false,
        "recipientAccountId": "{REDACTED}",
        "sharedEventID": "71d29c0c-d7d3-467c-982b-73d556938fc8",
        "eventCategory": "Data"
    }`

    const syntax6 = `
    CreateBucket
    DeleteBucket
    DeleteBucketCors
    DeleteBucketEncryption
    DeleteBucketLifecycle
    DeleteBucketPolicy
    DeleteBucketReplication
    DeleteBucketTagging
    DeleteBucketPublicAccessBlock
    GetBucketAcl
    GetBucketCors
    GetBucketEncryption
    GetBucketLifecycle
    GetBucketLocation
    GetBucketLogging
    GetBucketNotification
    GetObjectLockConfiguration
    GetBucketPolicy
    GetBucketReplication
    GetBucketRequestPayment
    GetBucketTagging
    GetBucketVersioning
    GetBucketWebsite
    GetBucketPublicAccessBlock
    ListBuckets
    PutBucketAcl
    PutBucketCors
    PutBucketEncryption
    PutBucketLifecycle
    PutBucketLogging
    PutBucketNotification
    PutBucketPolicy
    PutBucketReplication
    PutBucketRequestPayment
    PutBucketTagging
    PutBucketVersioning
    PutBucketWebsite
    PutBucketPublicAccessBlock`

    const syntax7 = `
    AbortMultipartUpload
    CompleteMultipartUpload
    DeleteObjects
    DeleteObject
    GetObject
    GetObjectAcl
    GetObjectAttributes
    GetObjectTagging
    HeadObject
    CreateMultipartUpload
    ListParts
    PostObject
    RestoreObject
    PutObject
    PutObjectAcl
    PutObjectTagging
    CopyObject
    UploadPart
    UploadPartCopy`
    
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
                        AWS CloudTrail
                    </Typography>
                    <pre>2023/08/08 5:42PM</pre>
                    <Divider color="#42403f" />
                    <Typography mt={6} variant="h5">
                        Description
                    </Typography>
                    <Typography>
                    AWS CloudTrail is an AWS service that helps you enable operational and risk auditing, governance, and compliance of your AWS account. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface, and AWS SDKs and APIs.
                    </Typography>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                        Summary
                    </Typography>
                        <ul>
                            <li>AWS `CloudTrail` has different event type:</li>
                            <ul>
                                <li>Managed Events (Enabled by Default)</li>
                                <ul>
                                    <li>These type of events are used to analyze what activity is occurring in the AWS environment. This is events like `EventName: GetTotal, EventSource: billing.amazonaws.com`. This kind of event fires when someone clicks to view the billing page.</li>
                                </ul>
                            </ul>
                            <ul>
                                <li>Data Events (Disabled by Default)</li>
                                <ul>
                                    <li>These type of events are used to analyze activity of a specific resource. A specific resource could be something like an S3 bucket. When you enable data events on an S3 bucket this allows you to see events such as `EventName: PutBucket, EventSource s3.amazonaws.com`. This event fires when someone puts an object in an S3 bucket.</li>
                                    <li>The Managed Events on an S3 bucket included events like the following: CreateBucket, DeleteBucket, ListBuckets, GetBucketAcl, ... The Managed Events are events that occur at the `bucket-level`, while the Data Events are events that occur at the `object-level`.</li>
                                </ul>
                                <li>Insight Event (Disabled by Default)</li>
                                <ul>
                                    <li>Helps you identify and respond to unusual activity associated with API calls and API error rates by continuously analyzing `CloudTrail` management events.</li>
                                </ul>
                            </ul>
                            <li>AWS `CloudTrail` will only track Managed Events in the `Event History` of the `CloudTrail` console. If you want to view `Data Events` or `Insight Events`, you will need to configure the `CloudTrail` with `CloudWatch` logs.</li>
                        </ul>
                        <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 1: Creating a Trail
                    </Typography>
                    <Typography>
                    To create a CloudTrail start by giving it a name. CloudTrail needs a location to store the log data, so when creating a CloudTrail there is an option to create a new S3 bucket or select an existing one. 
                    </Typography>
                    <img src="/aws_cloudtrail_1.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    There is an option to enable CloudWatch. If you want to capture "Data Events" from a resource, this will need to be enabled.
                    </Typography>
                    <img src="/aws_cloudtrail_2.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Next we will need to setup the type of events we want to capture. I will dig into this in Step 2 by showing how to change the event type if wanted.
                    </Typography>
                    <img src="/aws_cloudtrail_3.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 2: Choosing the Type of Log Events
                    </Typography>
                    <Typography>
                    Using the `Quick Trail Create` option, I clicked "Create trail" and then was taken to this page. As you can see, we now have a new S3 bucket created call `aws-cloudtrail-logs-learning`. We also have a `CloudTrail` called `management-events`.
                    </Typography>
                    <img src="/aws_cloudtrail_4.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    By clicking on the name of the `CloudTrail`, we will be taken to the configuration settings.
                    </Typography>
                    <img src="/aws_cloudtrail_5.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    In the configuration settings, there are the types of log events that `CloudTrail` will capture. As you can see, we have three types of log events: management events, data events, and insight events. By default, AWS CloudTrail trails log all management events, and don't include data or CloudTrail Insights events.
                    </Typography>
                    <img src="/aws_cloudtrail_6.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Management Events
                    </Typography>
                    <Typography>
                    Management events capture management operations, such as API use, that are performed on resources in your AWS account. These are also known as `control plane operations`. Management events can also include non-API events that occur in your account, such as the `ConsoleLogin` event that occurs when a user signs in to your AWS account.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    Data Events
                    </Typography>
                    <Typography>
                    By default, trails do not log data events. Data events show the resource operations performed on or within a resource, such as when a user uploads a file to an S3 bucket. These are also known as `data plane operations`.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    Insight Events
                    </Typography>
                    <Typography>
                    By default, trails do not log Insights events. `CloudTrail` Insights helps you identify and respond to unusual activity associated with API calls and API error rates by continuously analyzing `CloudTrail` management events. If you enable `CloudTrail` Insights, and `CloudTrail` detects unusual activity, Insights events are delivered to the destination S3 bucket for your trail. Unlike other types of events, Insights events are logged only when `CloudTrail` detects changes in your account's API usage that differ significantly from the account's typical usage patterns.
                    </Typography>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 3: Analyzing Management Events
                    </Typography>
                    <Typography>
                    As explained earlier, management event are enabled by default when creating a `CloudTrail` and captures the information involving operations performed on AWS resources.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    To start analyzing the Management Event Logs, we can go to the "Event History" tab. As you can see, we have access to the `Event name`, `Event time`, `User name`, `Event source`, `Resource type` and `Resource name`.
                    </Typography>
                    <img src="/aws_cloudtrail_7.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    CreateTrail Event
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="json">
                        {syntax1}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    CreateBucket Event
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="json">
                        {syntax2}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Step 4: Event History
                    </Typography>
                    <Typography>
                    Event history shows you the last 90 days of Management Events. Event history does not show Data Events or Insights Events; This is what the Event history looks like:
                    </Typography>
                    <img src="/aws_cloudtrail_8.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    Example of some Event Names with their Event Source
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="text">
                        {syntax3}
                    </SyntaxHighlighter>
                    <Typography mt={6} variant="h5">
                    Step 5: Analyzing Data Events
                    </Typography>
                    <Typography>
                    By default, data events are going to be disabled when creating a new `CloudTrail`. Data events show the resource operations performed on or within a resource. We can go to the `CloudTrail` settings and enable Data Events.
                    </Typography>
                    <img src="/aws_cloudtrail_9.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    When we enable data events, we will be prompted to select a "Data Event Type". The data event type allows you to choose the source of data events to log. Here are the following options:
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="text">
                        {syntax4}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    I will be turning on Data Events for S3. Note that there is the option to select multiple Data Event Types. For the "Log selector template" option I set it to "Log all events". The other options are to "Log readOnly events", "Log writeOnlyEvents" or "Custom".
                    </Typography>
                    <img src="/aws_cloudtrail_10.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    `CloudTrail` does not populate data events in the `CloudTrail` event history.
                    </Typography>
                    <img src="/aws_cloudtrail_11.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    In order to capture the "Data Events" in `CloudTrail`, we will need to setup `CloudWatch` logs.
                    </Typography>
                    <img src="/aws_cloudtrail_12.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    I just uploaded an image to an S3 bucket. As you can see, their are no logs for `EventName: PutObject` in the Event History.
                    </Typography>
                    <img src="/aws_cloudtrail_13.png" style={{width: "100%", height: "100%"}}  />
                    <Box mt={5}/>
                    <Typography>
                    However, if I go to `CloudWatch`, I can see that the `EventName: PutObject` indeed happend.
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="json">
                        {syntax5}
                    </SyntaxHighlighter>
                    <Box mt={10}/>
                    <Typography mt={6} variant="h5">
                    Data Events vs Management Events in S3
                    </Typography>
                    <Typography>
                    Management Events occur at the bucket-level and Data Events occur at the object-level. To get a better understanding of this, here are the actions that are tracked in their respective Event type.
                    </Typography>
                    <Box mt={5}/>
                    <Typography>
                    Management Events for S3
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="text">
                        {syntax6}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography>
                    Data Events for S3
                    </Typography>
                    <SyntaxHighlighter className="syntax" language="text">
                        {syntax7}
                    </SyntaxHighlighter>
                    <Box mt={5}/>
                    <Typography mt={6} variant="h5">
                    Pricing
                    </Typography>
                    <ul>
                        <li>$2.00 per 100,000 management events</li>
                        <li>$0.10 per 100,000 data events</li>
                        <li>$0.35 per 100,000 insight events</li>
                    </ul>
                    <Box pt={25}/>
                </Typography>
            </Container>
        </Box>
    );
};

export default AWS_Cloudtrail;
