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

Create the folder where all server code will live.
```
mkdir server
```
Create the folder where your server boilderplate code will live.
```
mkdir server/bin
```

Add boilerplate server code to a file called www within server/bin.
```
curl -fsSL https://git.io/vDPvg > server/bin/www
```

Create the folder where your api and routes will live.
```
mkdir server/routes
```

Add a file where your routes can live.
```
touch server/routes/api.js
```

Add a file where your custom middleware will live.
```
touch server/app.js
```

(Optional) Create the folder where your tests will live.
```
mkdir tests
```

(Optional) Create the file where your tests will live.
```
touch tests/tests.js
```

## Step 2 - Install Dependencies

In your terminal, execute the following commands:

### Initialize NPM and create package.json file

Do one of the following:

If you are adding testing, run this command. You will be prompted, but you can skip them (clicking enter) until you reach "test command:". Add "mocha" for this prompt.
```
npm init
```
#### OR

If you are skipping testing, run this command. You will not be prompted and a default package.json file will be created.
```
npm init -y
```

### House Keeping - Put node_modules into .gitignore file
```
echo node_modules >> .gitignore
```

### Install Dependencies

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



