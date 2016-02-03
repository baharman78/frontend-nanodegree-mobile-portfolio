## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>

## Grunt Commands

### `responsive-img`

This command will clean src/img folder and views/images folder.  Then it will create necessary images for src folders.

### `default`

This command will run project files within src folder on local host

### `minify`

This command transfers minified src files into dist folder, and then changes css, js, and html file locations to minified versions

###### Make sure to read documentations for [https://www.npmjs.com/package/grunt-processhtml-prepend](https://www.npmjs.com/package/grunt-processhtml-prepend) before running minify command.

###### Html files will need to be modified to allow plugin to work

### `validate-js`

This command runs jslint on files in src folder

### `publish`

This command gives css files necessary vendor prefixes, and then runs minified versions of code on localhost

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

### Special considerations

All jpgs must be run through online tool on the web.  grunt-contrib-imagemin will not compress jpgs

index.html inlines style.css, and print.css.  I don't like how the automated tools leave the styles in the original css file when they copy them to the html file.  Therefore, `style.css and print.css must be copied with they're vendor prefixes into the src/index.html where they are inlined if the vendor prefixes change`

## Optimizations for views/js/main.js

|Line Numbers|Optimization|Reasoning|
|-------|------------|-----------|
|Global|replaced all querySelector() with getElementById()|getElementById() is less costly to call than querySelector()|
|Global|replaced all querySelectorAll() with getEntriesByName()|getEntriesByName() is less costly to call than querySelectorAll()|
|Global|Set length to an object, and used that to compare every time the for loop would iterate|Avoids checking length every time loop iterates|
|466|Removed jQuery statement outside of for loop|jQuery is expensive to call, so it needs to be saved in an object.  This object is then used in the for loop.|
|467-468|Used dx and newwidth for first pizza to set widths on all pizzas| All pizzas are same size, so there is no use checking every single pizza width.|
|526-528|Created array with the 5 different phases that could be used to calculate pizza position|Avoids calculating phase every time loop iterates|
|555|Decreased the number of pizzas from 200 to 36| This majorly decreases the amount of pizzas that are needed for painting.  There is no use in painting pizzas that you will never see in the browser.|

## Optimizations for views/css/style.css

|Line Numbers|Optimization|Reasoning|
|-------|------------|-----------|
|33-34|These statements were used to move pizzas to a different layer.| I did this so that the pizzas are not painted every time the browser scrolls.|
