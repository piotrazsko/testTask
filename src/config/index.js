import baseConfig from './base';

const config = {
  isActiveDevTool: false,
  baseUrl: 'http://localhost:3000',
};

export default Object.freeze(Object.assign({}, baseConfig, config));
