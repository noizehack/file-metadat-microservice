#form file upload metadata microservice built on node.js
##this is built for a freecodecamp project
[freecodecamp](https://www.freecodecamp.com)

##project discription
Returns JSON data with number of bytes in uploaded file. The index.html is an example form with ajax that displays the bytes. File analyser api is at /api/fileanalyse/.

##server launch instructions
From the console run:

    node server.js

Or on Heroku the package.json should launch the server automatically

##dependencies
* node.js
* express
* multer
* uses built in node modules:
 * fs

##Example output:

    {"bytes":123456}