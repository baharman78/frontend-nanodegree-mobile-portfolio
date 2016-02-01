# Grunt Boilerplate
Brent Harman

## Grunt Commands

### `default`

This command will run project files within src folder on local host

### `minify`

This command transfers minified src files into dist folder, and then changes css, js, and html file locations to minified versions

###### Make sure to read documentations for [https://www.npmjs.com/package/grunt-processhtml-prepend](https://www.npmjs.com/package/grunt-processhtml-prepend) before running minify command.

###### Html files will need to be modified to allow plugin to work

### `validate-js`

This command runs jslint on files in src folder

### `publish`

This command runs minified versions of code on localhost

### `test`

This command will erase files from gh-pages subtree branch, transfer src files to gh-pages subtree branch, and commit them.

### `deploy`

This command will erase files from gh-pages subtree branch, transfer dist files to gh-pages subtree branch, and commit them.

### `pageinsights`

This command runs google pageinsights on specified websites in terms of a desktop

### `pageinsightsm`

This command runs google pageinsights on specified websites in terms of a mobile device

## grunt-boilerplate Setup
Initially used javasalazar's boilerplate as starting point for Gruntfile.js and package.json. [https://github.com/javsalazar/grunt-boilerplate](https://github.com/javsalazar/grunt-boilerplate)

### Initial Git Initialization
  * Copy Grunt.js and package.json files into project folder
  * Create src, img_src, and .gitignore file within project folder
  * Type node_modules within .gitignore file
  * Run `git init` from command line

### Getting Ready

* verify node is installed, can do `node -v` to check version, if doesn't error we are good.
* update npm to latest version `npm update -g npm`
* create a directory for you project and cd into it.
* once in your directory install grunt-cli `npm install -g grunt-cli`

if all went well above the we are ready to use Grunt.  

### Place Your Project Files In The app/ and img_src/ Folders

* Copy project files into src folder
* Copy images into img_src folder

### Install Grunt Plugins

since we have the packages.json file we don't have to manually install each plugin like so: `npm install grunt-responsive-images --save-dev`.  Instead do `npm install` on the root directory of project to install all plugins at once.

** Ready For Gruntfile.js

Now that the project and directories structure is set take a look at Grunfile.js and make any necessary changes to the settings or options of each task.
