const config = {
  mongoConnectionString:
    process.env.MONGO_URL ||
    "mongodb+srv://joefstack:QqnCVXrKAxKWOcjG@cluster0.hbn4n.mongodb.net/cluster0?retryWrites=true&w=majority",
};
module.exports = config;
