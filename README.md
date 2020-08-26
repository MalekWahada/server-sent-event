This little project example demonstrate how server sent events work
## REQUIREMENTS
to enable the project make sure to have 'yarn' or 'npm' installed as Environment variable on your local machine by running 
### `yarn -v` or `npm -v`
if not you can install node.js installer or yarn respectively from https://classic.yarnpkg.com/en/docs/install/#debian-stable  https://nodejs.org/en/download/ depending on what operating system you have

## INSTALLATION
clone the git repo into your local machine and  under the project directory, install dependencies by running:
### `yarn install`

## RUNNING THE PROJECT
run the project in your IDE and open in a browser tab (client ) this link http://localhost:8080 , then open the console and type 
`let sse = new EventSource("http://localhost:8080/stream");
sse.onmessage = console.log`
you will have console messages received from the node server (server sent events)
