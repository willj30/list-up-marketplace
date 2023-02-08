const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// ****MISSING CONFIG FOLDER****
// import sequelize connection
const sequelize = require('./config/connection');

// ****MISSING ****
// express handlebars
const exphbs = require('express-handlebars');

// ****MISSING****
// express middleware
const session = require('express-session');
app.use(session(sess));




app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
app.listen(PORT, () => 
  console.log(`App listening on port ${PORT}!`));
});