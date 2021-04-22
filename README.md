# Overview

On top of that, I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

## Setting up the API

I am using MeaningCloud Sentiment Analysis API for this project. Sign up for an API key. Once creating an account with MeaningCloud, licence key will be given to start using the API.

1.To configure environment variables (variables thats only belong to local system) we need to install dotenv package:

npm install dotenev
2.Create a new env file in the root of the project and fill the file with the API key:

API_ID=************************(your API key instead of *)
3.To refer ennvironmental variable I am using process.enc. in front of the variable with API credentials.

4.Create .gitignore file in the project root and add .env file. This will allow us not to push our environmental variables to Github. API key is personal!

## Getting started

- `cd` into your new folder and run:
- `npm install`
- npm i -D @babel/core @babel/preset-env babel-loader
- npm i -D style-loader node-sass css-loader sass-loader
- npm i -D clean-webpack-plugin
- npm i -D html-webpack-plugin
- npm i -D mini-css-extract-plugin
- npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

## Run Project

# 1. Production Mode
- cd into the project folder
- npm run build-prod to generate the distribution folder.
- node run start to start the express server.
- The production mode web app can be accessed at localhost:8081

# 2. Development Mode
- npm run build-dev to start the webpack dev server.
- The development mode web app can be accessed at localhost:8080

## Testing the code with Jest
npm run test to run Jest & test all test cases.

## Service Workers
Service workers are installed in order for the project to be available when server is stopped.
