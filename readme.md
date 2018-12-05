# **qhun-engine Example project**

This example project shows how to setup a project to work with the current dev version of the [qhun-engine](https://github.com/qhun-engine).

## **Requirements**

- You need a [nodejs](https://nodejs.org/en/) environment on your development machine.
- The current target browser is [Google Chrome](https://www.google.com/intl/de_ALL/chrome/). The first release of qhun-engine is targeted to all major up to date browsers.
- [Optional] [Git](https://git-scm.com/) compatible command line util for cloning this repository.

## **Installation**

After checking that the above requirements are met, install the example project via:

```bash
$ cd path/to/your/destination/folder
$ git clone https://github.com/qhun-engine/example qhun-engine-example
```

You should now find a folder in your current working directory named `qhun-engine-example`. Cd into it:

```bash
$ cd qhun-engine-example
```

This is the root folder of the example project. You need to install the dependencies declared in `package.json` via the command:

```bash
$ npm install
```

This command creates a folder called `node_modules` where npm stores all dependencies. If everything works without errors, you are now ready to start the example game!

## **First start of the example**

In order to start the example game, you should enter the following command:

```bash
npm start
```

This will call a script stored in the `package.json` file wich handles the transpiling process for TypeScript into JavaScript and the bundeling process to provide a single JavaScript file.

A new folder called `dist` has been creates containing the processed files and assets. You can think of this `dist` folder as a temp folder for storing static files that are outputted in the build process.

To access the example game, open your chrome browser and locate to [http://localhost:7500](http://localhost:7500). You should now see the example game ;)

## **Developement process**

There are two folders in the `src` directory. They contain `frontend` files (the game that is playable) and `server` files (HTTP controllers and asset providing).

The command `npm start` runs two parallel processes.

1. The first transpiles your `frontend` folder into a playable version of your code and copies static assets from your `server/public` folder into the `dist` folder.
2. An on the fly interpreting of your `server` sourcecode to start up the HTTP server.

**You need to know when to restart one of the two processes**:

- When changing frontend related files or changing assets, **you do not need to restart anything**. Just reload the game.
- When adding new files, you must restart both processes. (Exit the currently open `npm start` process and restart it).
- When changing `server` related `*.ts` files, you must restart the HTTP server.

## **Updating dependencies**

Updateing a dependency is as easy as typing:

```bash
$ npm update NAME_OF_DEPENDENCY
```

The qhun-engine is still in heavy developement process. To update these dependencies you can type:

```bash
$ npm update @qhun-engine/server @qhun-engine/engine @qhun-engine/base
```

NPM will pull the current `master` branch from the Github repository and extracts/builds all nessesary changes.