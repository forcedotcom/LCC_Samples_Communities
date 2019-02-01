<template>
  <div id="app">
    <span>
      <img alt="Vue logo" src="./assets/logo.png" width="100" height="100">
      <img alt="AWS Amplify Logo" src="./assets/amp.jpg" width="100" height="100">
      <p>Vue + AWS Amplify!</p>
    </span>
    <SFDCS3 />
  </div>
</template>

<script>
import SFDCS3 from './components/SFDCS3.vue'
import { components } from 'aws-amplify-vue'
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

export default {
  name: 'app',
  components: {
    SFDCS3,
    ...components
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
