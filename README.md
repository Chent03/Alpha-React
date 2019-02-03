# Alpa Full Stack Assignment

This is for Alpha's coding assignment, using Node.js, Express, Mongo, and React.

## Installation

The preferred way to run the application is to run docker-compose at the root directory of the application.
```bash
docker-compose up
```
Go to localhost:4000


Second option of running the app would be to:
``` bash
cd src
touch config/dev.js
```
Copy into config/dev.js
``` javascript
module.exports = {
    "omdbAPI" : 'YOUR KEY',
    "mongoURI": 'YOUR MONGO URI'
};
```
``` bash
cd ..
npm run concurrent
```
Go to localhost:3000
