# dotenv-config

[![npm version](https://badge.fury.io/js/dotenv-config.svg)](https://www.npmjs.com/package/dotenv-config)
![node](https://img.shields.io/node/v/dotenv-config.svg)
[![Build Status](https://travis-ci.org/tetrash/dotenv-config.svg?branch=master)](https://travis-ci.org/tetrash/dotenv-config)
[![codecov](https://codecov.io/gh/tetrash/dotenv-config/branch/master/graph/badge.svg)](https://codecov.io/gh/tetrash/dotenv-config)
[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

Module that loads environment variables and verify their presence

## How to use it

This module requires `config` file that look like this:

**config.json**
```json
{
  "test": {
    "require": true,
    "env": "HOST"
  },
  "port": "PORT",
  "default": {
    "require": true,
    "env": "DEFAULT",
    "default": "default value"
  }
}
```

and optionally `.env` file with saved environment variables:

**.env**
```.env
HOST=localhost
PORT=4000
```

---
#### Usage:

**index.js**
```javascript
const config = require('dotenv-config')();

console.log(config.test); // localhost

module.exports = config;
```

---
## Additional settings

```javascript
const config = require('dotenv-config');

const settings = {
  envPath: '.env', // relative to project path
  configPath: 'config.json' // relative to project path
};

config(settings);
```

### Setting default routes

It is possible to change the default paths to `config` and `.env`
by setting this environment variables:

```..env
DOTENV_CONFIG_ENVFILE=default/path/to/env/file
DOTENV_CONFIG_CONFIGFILE=default/path/to/config/file
```
