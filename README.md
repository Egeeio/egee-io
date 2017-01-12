[![Build Status](https://travis-ci.org/egee-irl/egeeio.svg?branch=master)](https://travis-ci.org/egee-irl/egeeio)

# Egee.io
This is the repository for the official [Egee.io](egee.io) website, authored by Egee and built from contributions & feedback from the [Egee.io community](https://discord.gg/tVyBHAU).

# How To Contribute
Egee.io is an Open Source gaming community and as such, contributions in the form of pull requests and or suggestions are highly encouraged. The easiest way to contribute is through the [issues](https://github.com/egee-irl/egeeio/issues) section of this repository. Simply create a new issue or comment on an existing issue. 

If you are more _technically_ inclined, feel free to peruse the codebase and create pull requests to fix things like typos or bugs on the site.

# Site Structure
The Egee.io website is an EmberJS app and as such follows a very specific convention and file/folder structure. At the top level, the only two folders that are important to contributors are the **App** and **Public** folders.

* **app** is where the actual website lives
  * **helpers** where some of the JavaScript for fancy features like the NavBar and Dialogs live
  * **styles** where the CSS & LESS lives
  * **Templates** where the components, pages, and views that comprise the website live
* **public** is where assets for the website lives

If you see a typo or other issue that manifests itself in a view on the site, you will probably find it in the **App** > **Templates** folder structure. If it is JavaScript related, the **Helpers** folder is where you'll want to look.

Since the site doesn't handle user input and doesn't store data, there aren't any models or controllers; only a handful of helpers and components.

# Building & Testing
If you've made a substantial change to the website and want to see your change before submitting a pull request, you will need to build the site locally. Ember has a built in web server for development and testing so you don't need to worry about serving up the actual website. It's really easy - I promise!

### Prerequisites
In order to build the site, you'll need the following packages installed:

* [Git](http://git-scm.com/) - For getting latest and pushing changes
* [Node.js](http://nodejs.org/) (with NPM) - The JavaScript engine that powers Ember
* [Bower](http://bower.io/) - A JavaScript package manager similar to NPM
* [Ember CLI](http://ember-cli.com/) - The power Ember-CLI

### Installation
The following commands assume you are on some flavor of Linux. If you are on Windows or macOS, you are on your own!

* `npm install -g ember-cli`
* `npm install -g bower`
* `git clone https://github.com/egee-irl/egeeio.git` to this repository
*  cd into the new directory
* `npm install`
* `bower install`

### Building & Serving
Ember comes with its very own web server for development and testing purposes. The web server isn't publicly accessible (unless you forward the port which you should **not** do) and runs on port 8080.

* `ember serve`
* Visit the site and test your changes at [http://localhost:8080](http://localhost:8080)

# Site Architecture
If you are anything like me then you love to learn about technology and why people choose the frameworks and libraries they do.

The Egee.io website is built using EmberJS, a pure JavaScript web framework based on the Model-View-ViewModel pattern. The website is served on Nginx using Ubuntu.

### Frontend
The frontend user-facing part of the website is written using a templating engine called [Handlebars](https://guides.emberjs.com/v2.8.0/templates/handlebars-basics/) and is an integral part of EmberJS. Material Design Light is the CSS library for the overall styling, Font Awesome is used for icons, and the website font is Lato.

### Backend
The backend of the website consists of a half-dozen JavaScript helper functions, and a few Ember components. JQuery is used for a couple things, such as for modal dialogs and image slideshows. The Ember router handles the few routes the website has.

### Web Server
While EmberJS runs on NodeJS, the website is served up using Nginx due to its simplicity and great configuration out of the box (on Ubuntu). Early in development, the Ember-cli server was used to host the site before the switch to Nginx was made.

# License
The Egee.io website is proudly licensed under the MIT license. Feel free to take any part of the website and fork it to make it your own. 
