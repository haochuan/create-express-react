
# create-express-react

Get started with [create-react-app](https://github.com/facebookincubator/create-react-app) and your own [express](https://expressjs.com/) server for development and production.

## Features

- CLI to generate project structure
- Fully ES6 support
- Pre-written npm scripts to help development, testing, linting, building and deployment process
- [Eslint](https://eslint.org/) for both frontend and backend
- [Jest](https://facebook.github.io/jest/) for both frontend and backend

## Prerequisites

- [Node.js](https://nodejs.org/en/), from v0.12.x to the latest version. Using any version of v6.x.x or above is preferred.

## Installing

First of all, you should install `create-express-react` via npm as a global package, this is the CLI to generate the template for you to get started.

```
npm install create-express-react -g
```

Once you have `create-express-react`, then run it to create the template. The command below will generate a folder named `myApp` in `Desktop`.

```
cd ~/Desktop
create-express-react myApp
```

Then you need to grab `create-react-app` by running:

```
cd ~/myApp
npm install
npm run setup
```

Finally, you can start your app:

```
npm start
```


## Scripts

There are a lot of pre-written npm scripts to help you speed up the development and deployment process.

- `npm run setup`

Using official `create-react-app` to generate a folder `root/frontend` for all frontend development. Also adding the proxy setting in `root/frontend/package.json` to pass request to express server.

- `npm run start`   

Concurrently starting webpack-dev-server for react running on port `3000`, and express backend server on port `4000`. HOC will be enabled for all react related code and also the server will be restarted by [nodemon](https://github.com/remy/nodemon) if there is any change made for the backend code.

- `npm run test-server`  

Running server tests via Jest, which are in `root/server/__test__`

- `npm run test-react`   

Running react tests via Jest. There is no test file by default, you may create a folder `/root/frontend/__test__` and put all test files there.

- `npm run lint`

Run ESLint on all backend code. The config files can be found in `root/.eslintrc` and `root/.eslintignore`. __Please note that the linting for react will be auto-enabled when you run `npm run start`__

- `npm run build`

Build all the server side code into `root/dist`, then build react and move all built files (index.html, javascript, css, images, etc.) to `root/dist/public` for production 

- `npm run deploy`

Deploy the server via pm2, you can find the config file in `root/deploy.json`.

__There are also some helper npm scripts, see more details in `root/package.json`.__

## Communication

### Dev
For Development, the webpack-dev-server is running on port 3000 serving react app, and the backend express server is running on port 4000. All of the requests sent by frontend app will be passed to express server via proxy.

Web App <--- Webpack-dev-server <---> Proxy <---> Express Server

### Production
For Production, all the frontend code will be compiled and moved into a static directory inside express server. Now there is just one express server running, which is serving both the frontend app and backend endpoints.

Endpoints <--- Express Server ---> Web App

## Project Structure
TBD

## TODO
- Should we put some of the common used react libraries into `root/frontend`?
- Need to discuss the details about how to stucture express code.


## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Haochuan Liu** - *Initial work* - [_haochuan](https://haochuan.io)

## License

This project is licensed under the MIT License.


