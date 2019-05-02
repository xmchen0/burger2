# burger2
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

Following the MVC design pattern, we used Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.

Note: This is the second version of Hello Burger as the [first version](https://github.com/xmkchen/burger) failed to deploy to Heroku due to connection issues with mySQL JAWSDB to the app.

## Preview

<a href="http://recordit.co/RGXAWlCqnS"><img src="https://media.giphy.com/media/THIeFUrXnWS5xmb2vb/giphy.gif" border="0"></a>

## Link to Heroku

* Coming soon (experiencing technical issues with deployment) - FIXED JAWSDB ADD-ON CONNECTION April 30, 2019
* April 29, 2019 - Asked for Adrian's help re: deployment

Final Product: https://hello-burger-2.herokuapp.com/

<hr> 

## Getting Started

Download zip file or Git Clone repository will get you a copy of the project up and running on your local machine for development and testing purposes.

### Document Organisation

<a href="https://imgur.com/cA1V7DU"><img src="https://i.imgur.com/cA1V7DU.png" alt="directory-burger" height="600" width="200"></a><br />

## Heroku Lessons Learned
1. Create your DB connections step by step and test it before you begin coding the functionality of your app
2. Make sure that the application actually works locally. If it doesn't work locally, it won't deploy
3. Create your empty application on Heroku by running `heroku create` (assuming you have preinstalled latest version of Heroku on your machine)
4. Deploy your code by entering `git push heroku master`
5. Use the `git remote` command to confirm that a remote named heroku has been set for your app
6. Run `heroku open` to deploy your app
7. If your Heroku app fails to deploy, run `heroku logs` to find the bugs

Find More Information on Deploying with Git on Heroku: https://devcenter.heroku.com/articles/git

## Built With

### Code Organisation
* [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) - Stands for Model-View-Controller, an architectural pattern commonly used for developing user interfaces

### Text Editor
* [Visual Studio Code](https://code.visualstudio.com/)

### Back-end
* [MySQL](https://www.mysql.com/) - Database management system
* [JAWSDB](https://www.jawsdb.com/) - JawsDB is an add-on for providing a fully functional MySQL Database server for use with your Heroku application
* [Handlebars](https://handlebarsjs.com/) - Build semantic templates effectively
* [exphbs](https://www.npmjs.com/package/express-handlebars) - Makes view engine for Express not suck
* [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping) - Stands for Object-Relational-Mapping, query and manipulate data from a database using an object-oriented paradigm
* [JavaScript](http://www.dropwizard.io/1.0.2/docs/) - Language used
* [jQuery](https://jquery.com/) - JavaScript library
* [Node.js](https://nodejs.org/en/) - Command-line applications
* [Express.js](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node
* [HTTP methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) - Request methods -> `router.get()` `router.post()` `router.put()` `router.delete()`
* [NPM](https://www.npmjs.com/) - JS library management
* [Heroku](https://www.heroku.com/) - Deploy assignment platform
* [GitHub](https://www.github.com/) - Web-based hosting service for version control using Git

### Front-end
* [HTML](https://www.w3schools.com/html/html_intro.asp) - Markup language for creating Web pages
* [CSS](https://www.w3schools.com/css/css_intro.asp) - Describes how HTML elements are to be displayed, styling and responsiveness
* [Bootstrap](https://getbootstrap.com/) - Build responsive, mobile-first projects on the web
* [Font Awesome](https://fontawesome.com/) - Vector icons and social logos on your website 
* [Google Fonts](https://fonts.google.com/) - Library of fonts

### Misc
* [Adobe Illustrator](https://www.adobe.com/ca/products/illustrator.html) - Design logos
* [Unsplash](https://unsplash.com/) - Free images and photos
* [Recordit](http://recordit.co/) - Record screencast gifs

<hr>

## Author

* **Kathy Chen** - *Eat-Da-Burger* - [xmkchen](https://github.com/xmkchen/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/xmkchen/burger/blob/master/LICENSE) file for details

## Acknowledgment

* Adrian Pearman (TA)
* UofT Coding Bootcamp 2019
