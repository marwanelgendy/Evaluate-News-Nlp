# Evaluate-News-Nlp

Bulid A web tool that allows users to Run Natural Language Processing (NLP)on articales or blogs found on other website 
 
 Using an exciting new api called Aylien, we can build a simple web interface to interact with their NLP system. This tool will give us back pertinent information about the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

 Node and express will be the webserver and routing, and webpack will be our build tool of choice. Using webpack, we will set up the app to have development and production environments, each with their own set of tools and commands.

We will also use Jest to test our route and other JavaScript functions of our application

### Setup the  project

 - Step 1 : you need to install and configure webpack 
```
npm install 
npm i webpack webpack-cli 
```
 - Step 2: you need to change all your css file into Sass style 
          and Minify js and styles in the production environment.
 - Step 3:Choose the necessary installation for your development mode

```
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
```

- Step 4: Creating layouts and page design
- Step 5: Add Service workers
- Step 6: Using APIs and creating requests to external urls
          ou can find the API here. Once you create an account with MeaningCloud, you will be given a license key to start using the API. This API does not require an SDK

## Run the project in development and production mode.

### Run in development mode:
to start the webpack dev start server at port 8080

`$ npm run build-dev`

### Run in production mode:
`npm run build-prod ` to start server at port 8081

` npm run start`

## Configs

Here, we have two webpack config files for both development mode(webpack.config.dev.js) 
and production mode(webpack.config.prod.js )

We also have a package.json to manage dependencies
 ## Testing
1-Testing the handleSubmit functionality.
2-Testing the urlChecker functionality.
3-Testing the server functionality.

  To run test, use the command
 `npm run test`


 ## Offline Functionality
 The project must have set up service workers in webpack.
 test that the site should be available even when you stop your local server .
