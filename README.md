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

Initialize NPM, which will automatically create a package.json file

(with testing) - You will be prompted with options

Fill them out, if you'd like (they don't matter and can be changed later). When you get to the "test command:" option, input "mocha"

```
npm init
```

(skip testing) - This will skip the prompts
```
npm init -y
```

House Keeping - Put node_modules into .gitignore file
```
echo node_modules >> .gitignore
```

Install Express.js, Knex.js as Dependencies.
```
npm install --save express knex
```



