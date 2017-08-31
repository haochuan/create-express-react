/**
 *
 * Environment Config
 *
 */

const env = {
  production: {
    name: 'production',
    port: 3001
  },
  dev: {
    name: 'dev',
    port: 3001
  },
  test: {
    name: 'test',
    port: 3001
  }
};
export default env[process.env.NODE_ENV];
