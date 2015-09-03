# Lightning Trader 

Sample Trader Desktop application built with [React](http://facebook.github.io/react/) and the [Lightning Design System](www.lightningdesignsystem.com). 

Check out this video for a quick walkthrough:

[![Video](http://img.youtube.com/vi/53oTIny4gN4/0.jpg)](http://www.youtube.com/watch?v=53oTIny4gN4)

The back-end is built with **Node.js** and **Socket.io**. 

## Experience the Application

The application is hosted live here: [http://lightning-trader.herokuapp.com](http://lightning-trader.herokuapp.com)


## Deploying your Own Instance

Follow the steps below to deploy your own instance:

1. Make sure you are logged in to the [Heroku Dashboard](https://dashboard.heroku.com). You can quickly create a free account if you don't have one.

2. Click the Button below to deploy the application on Heroku.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

Your own instance of the application is automatically deployed.

## Local Installation

Follow the instructions below if you prefer to install the application on your local machine:

1. Clone this repository or download and unzip [this](https://github.com/ccoenraets/lightning-trader/archive/master.zip) zip file.

1. Navigate to the **lightning-trader** directory and install the project dependencies:

    ```
    npm install
    ```

1. Type the following command to build the client application:

    ```
    npm run build-client
    ```
    
    The project is written using ECMAScript 6 including ECMAScript 6 modules.

1. Type the following command to start the server:
    
    ```
    npm start
    ```
    
1. Open a browser and access [http://localhost:3000](http://localhost:3000)    

## Using the Socket.io Feed

By default the application uses a mock feed simulated at the client-side. To use the actual Socket.io feed: 

1. Open js/app.js

1. Comment out the module import for the mock client-side feed:

    ```
    // import * as feed from './services/feed-mock';
    ```
    
1. Uncomment the module import for the real socket.io feed:

    ```
    import * as feed from './services/feed-socketio';
    ```
    
1. Rebuild the client:    

    ```
    npm run build-client
    ```