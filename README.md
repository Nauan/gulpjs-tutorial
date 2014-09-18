Follow the following steps to begin with GulpJS:

First step - Download and Install NodeJS and NPM (Node Package Manager):
You can find it in here: http://nodejs.org/download/ (pretty easy for all of us: Linux, Mac and even Windows)

Second step - Install GulpJS (globally):
You can to install GulpJS in your machine with just one command: npm install gulp -g

Third step - Install GulpJS (in the project):
In your project's directory, install gulpJS with this: npm install gulp --save-dev

Fourth step - Install the best plugins (one command per plugin):
Still in your project's directory, do the command: npm install <plugin-name>

Obs.: Install all plugins you want (with the same command). If you want to search for plugins visit the official page of GulpJS: http://gulpjs.com/plugins/

Fifth step - Write your gulpfile:
Still in your project's directory (again), create the gulpfile.js file. In this one, you need to develop the functions according to the plugins that you have so far.

See the awesome gulpfile.js on this repository (with comments) to understand how to setup your own.

Sixth step - Use what you've done:
In your project's directory, do the command: gulp <name-of-created-task>