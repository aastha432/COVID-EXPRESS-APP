# Express React Starter

This is a template for using Express and React in the same project. It is based on Create React App.

Read the article: [Introducing Express React Starter](https://medium.com/burke-knows-words/introducing-express-react-starter-b6d299206a3a)

OR...

## Prerequisites
* [create-react-app](https://github.com/facebookincubator/create-react-app)

## Installing

```bash
git clone 'https://github.com/aastha432/COVID-FOOD-EXPRESS' app-name
cd app-name
npm install
```

## Environment variables setup

You need to create a **.env** file in the root directory of your application where README.md is present.
The contents of the **.env** is as follows...

```bash
DATABASE = "Your_mongoDb_connection_string"
SECRET = "Your_secret_variable_for_token_creation"
```


## Running The App

The template can be run in development, or in production. For development, use the following workflow.

### Start the Express Server
The Express server is running at port 3001 in development.

```bash
node server/server.js
```

### Start Create React App
The React server is running at port 3000 in development.

```bash
npm start
```

### For starting the entire application
You just need to start the React server, express server gets fired up automatically.

```bash
npm start
```




### What Is Happening Here?

Create React App and the Express server are running on different processes. This is so that React can still use in memory Webpack to do hot reloads really fast.

All AJAX/fetch requests to `/api` are sent back to the Express server which is serving all `/api` routes from the `routes/index.js` file. This is done via a proxy setup in the `package.json` file.

## Building For Production

In production, you want Express to serve up your app.

### Build Your App

```bash
npm build
```

Now simply visit the Express app at 'http://localhost:3001' and you will see your app served from the 'build' folder. That's all there is to it!
