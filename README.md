# Boilerplate Node Server

Follow this guide or clone this down to create a boilerplate server using Node, Express, and Knex.

## Step 1 - Create files and folders

In your terminal, execute the following commands:

```
touch knex.js
```

```
touch knexfile.js
```

#### Create the folder where all server code will live.
```
mkdir server
```
#### Create the folder where your server boilderplate code will live.
```
mkdir server/bin
```

#### Add boilerplate server code to a file called www within server/bin.
```
curl -fsSL https://git.io/vDPvg > server/bin/www
```

#### Create the folder where your api and routes will live.
```
mkdir server/routes
```

#### Add a file where your routes can live.
```
touch server/routes/api.js
```

#### Add a file where your custom middleware will live.
```
touch server/app.js
```

#### (Optional) Create the folder where your tests will live.
```
mkdir tests
```

#### (Optional) Create the file where your tests will live.
```
touch tests/tests.js
```

## Step 2 - Install Dependencies

In your terminal, execute the following commands:

#### Initialize NPM and create package.json file

Do one of the following:

If you are adding testing, run this command. You will be prompted, but you can skip them (clicking enter) until you reach "test command:". Add "mocha" for this prompt.
```
npm init
```
##### OR

If you are skipping testing, run this command. You will not be prompted and a default package.json file will be created.
```
npm init -y
```

#### House Keeping - Put node_modules into .gitignore file
```
echo node_modules >> .gitignore
```

#### Install Dependencies

Install Express.js, Knex.js, PostgreSQL as dependencies.
```
npm install --save express knex pg
```

Install Body Parser as a dependency.
```
npm install --save body-parser
```

Install Nodemon as a dependency.
```
npm install --save nodemon
```

If you are doing testing, install Chai.js and Mocha.js as Development Dependencies.
```
npm install --save-dev chai mocha
```

### Step 3 - Create Databases and Configure Knexfile.js and Knex.js
Run the following commands in your terminal:

#### Create your databases for development and testing
Replace "mydatabase" with whatever you would like to name your databases.
```
createdb mydatabase_dev
createdb mydatabase_test
```

#### Configure Knexfile.js

Add this code to your knexfile.js (skip the "test" part if you are skipping testing):
```javascript
'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/mydatabase_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/mydatabase_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
```

#### Configure Knex.js

Add this code to your knex.js file:
```javascript
'use strict';

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile')[environment];
const knex = require('knex')(knexConfig);

module.exports = knex;
```

### Step 4 - Setup custom middleware and initial API route

#### Add middleware to app.js file within your server folder

Add this code to app.js
```javascript
'use strict';

const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

module.exports = app;
```

#### Add initial API route to api.js within your router folder

Add this code to api.js
```javascript
'use strict';

const knex = require('../../knex');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hi from API!!!');
});

module.exports = router;
```

### Step 5 - Run server with nodemon and send http call 

Open a new tab in your terminal (make sure you are within the same directory).
Run this command to start your server
```
nodemon server/bin/www
```
The server should startup and the last line should say something like:
```
Listening on port 3001
```
In your original tab, run this command to send a call to your server
```
http GET localhost:3001/api/
```
If everything is running properly you should get a response body that says the following: 
```
Hi from API!!!
```

