# Lunajoy health application

## Introduction
- Express.js is used as the framework to run Nodejs application.
- rechart is used to render bar chart
- socket.io is used to host websocket on nodejs
- socket.io-client is used as client library to establish websocket connection with server
- axios for API calls

## Project structure
- Folder lunajoy\server contains files needed to run nodejs and sqlite.
- Folder lunajoy\client contains files needed to run the reactjs frontend.

## How to run
- After cloning the repository from Github, peform following :
1. Open one terminal and navigate to /lunajoy/server.
2. run command 'npm start'. This will start the express app at port 4001. The port exposes Post API to capture new health data and a Get API to list all the heatlh data stored in the SQLite database.
3. Open another terminal and navigate to /lunajoy/client.
4. run command 'npm start'. This will start the react app.  If bar chart does not show any data, need to create 
few entries through the form and reload the page.


## TODO
- Wesocket connection is established. However, the broadcasted json with updated health records need to be rendered on bar chart. 
Authenticaion using google authenticator need to be implemented.
Beautify UI.
Validation of form entries. 
For all above, would need more time.


## Endpoints
Front end URL : http://localhost:3001
API URL : http://localhost:4001
Websocket Port : ws://localhost:8080


