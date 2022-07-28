## Preliminary Instructions

1. Please make a new folder inside app folder called config and make a config.js file.

Follow this format on your config.js

```javascript 
//Database configurations

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "<PASSWORD>",
    DB: "<DBNAME>",
    dialect: "<DB BRAND>",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
```

2. Make a .env on the root file and follow this format
PORT=[PORT]
TOKEN_KEY="[TOKEN_KEY]"

Happy Hacking!