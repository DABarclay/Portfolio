const { defineConfig } = require('@vue/cli-service');
const {dotenv} = require('dotenv').config();
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  publicPath: '/main/'

  
}

