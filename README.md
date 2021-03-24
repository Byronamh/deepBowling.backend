# deepBowling.backend

Deepbowling is a web application that analyzes bowling videos and returns a statistical analysis of the players and their scores.
This repository contains the backend for a university project called deepbowling, you can find the frontend repository [here](https://github.com/Byronamh/deepBowling.frontend).


This project employs the following technology stack:

 - Nodejs as core programming language
 - `express` and `aws-serverless-express` as core backend API framework
 - `aws-sdk` for AWS related utilities
 - Multiple [s3 buckets](https://aws.amazon.com/s3/) that work as CDN for the hosted files
 - [AWS Rekognition](https://aws.amazon.com/rekognition/) as core video entity detector and video analysis tool
 - [`serverless`](https://www.serverless.com/) as abstraction of setup/management of AWS lambdas and API gateways


## Installation
This project has the following dependencies:

 - `node: 12.x +`
 - `npm: 6.x +`

Optional for local dev:

 - [`serverless`](https://www.serverless.com/framework/docs/getting-started/) cli installed

To install this repository you simply need to run `npm install`

To run this project locally you can run the command `sls offline start`



## References

This repository relied heavily on multiple guides, but most importantly on:

 - [Mguay22 base project structure](https://github.com/mguay22/express-serverless-api)
 - [Jackson Yuan's guide for CI/CD with serverless and AWS lambda](https://www.youtube.com/watch?v=oFYFqOzJdqY&ab_channel=JacksonYuan) 
