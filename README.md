# backend API

Creating an API to return json object.

![Architecture Diagram](/backend/diagram/architecture-diagram.png)

## Prerequisites

Since the project is using third party framework helping to deploy code to AWS account. It's required install Serverless Frameowork on your local computer. To install run:
``` npm install -g serverless ```

## Installing

Install dependencies
``` npm install ```

## Deployment

to deploy API to AWS run:
``` npm run deploy ```

Information after deploying code to AWS account.
``` 
Service Information
service: backend
stage: dev
region: us-east-1
stack: backend-dev
resources: 12
api keys:
  None
endpoints:
  GET - https://4zisfqwou1.execute-api.us-east-1.amazonaws.com/dev/display
functions:
  display: backend-dev-display
layers:
  None

Stack Outputs
DisplayLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:1234567:function:backend-dev-display:18
ServiceEndpoint: https://4zisfqwou1.execute-api.us-east-1.amazonaws.com/dev
ServerlessDeploymentBucketName: backend-dev-serverlessdeploymentbucket-ji2f0gipejp8
```
## Unit testing

To run unit test run:
``` npm run test ```
 
## Testing API endpoints

After deploy code to aws account, to test your end point run:
``` sls invoke -f display ```

## Resources
https://www.serverless.com


