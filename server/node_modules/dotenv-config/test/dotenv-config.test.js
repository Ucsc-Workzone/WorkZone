'use strict';

const config = require('../lib/dotenv-config');

describe('dotenv-config.js', () => {
  it('should return validated configs', () => {
    const conf = config({ envPath: 'test/mocks/.env-1.test', configPath: 'test/mocks/config-1.test.json' });

    expect(conf).to.deep.equal({ test: 'localhost', port: '4000', default: 'default' });
  });

  it('should throw error if missing env variable', () => {
    const x = function () {
      return config({ envPath: 'test/mocks/.env-2.test', configPath: 'test/mocks/config-2.test.json' });
    };

    expect(x).to.throw('Missing required config key: missing-required');
  });

  it('should throw error if file doesnt exists', () => {
    const x = function () {
      return config({ envPath: 'not/existing/path', configPath: 'not/existing/path' });
    };

    expect(x).to.throw(`File doesn't exist: ${process.cwd()}/not/existing/path`);
  });

  it('should ignore .env file if it doesn\'t exist', () => {
    const x = function () {
      return config({ envPath: 'not/existing/path', configPath: 'test/mocks/config-3.test.json' });
    };

    expect(x).not.to.throw();
  });
});
