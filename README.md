# COMP335_P3-Form_MadLibs
Node/Express + Handlebars Forms in class lab [MadLibs]. Complete working example.

### The main thing we are focusing on is madlibs and madlibsOuput. Everything else is (Express) boilerplate, or in class given code.

### note: when running this with npm, need to go to localhost:3000/madlibs 

- when localhost:3000/madlibs is called, index.js (Express) requests router.get('/madlibs' which renders madlibs.hbs.
- madlibs.hbs gets the users input for each part of "madlibs" via an HTML form. When the user clicks Submit, the form is submitted with an HTTP POST.
- (Express) response goes back to index.js (Express) and router.post('/madlibsHandler' handles this response.
- madlibsOutput.hbs is rendered for the user and _gets the form data from req.body_.
- Note here that the name="" for each part of madlibs.hbs' form corresponds with madlibsOutput.hbs' {{}} handlebars variables. This is how the madlibs data is passed and injected into madlibsOutput.


### Soon, I will be hosting it under my Web Development Class' Heroku site. Stay tuned...
