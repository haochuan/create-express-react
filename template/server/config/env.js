/**
 *
 * Environment Config
 *
 */

const env = {
  production: {
    name: 'production',
    port: 4000
  },
  development: {
    name: 'development',
    port: 4000
  },
  test: {
    name: 'test',
    port: 4000
  }
};
export default env[process.env.NODE_ENV];
