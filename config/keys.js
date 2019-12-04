require("dotenv").config();

module.exports = {
  mongoURI: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@profiles-tr91n.mongodb.net/test?retryWrites=true&w=majority`
};
