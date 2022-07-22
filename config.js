const dotenv = require('dotenv');

dotenv.config({
    path:`${__dirname}/../environments/.env`
})

class Config{
    static PORT = process.env.PORT
    static DB_CONNECTION = process.env.DB_CONNECTION
}

module.exports = Config;