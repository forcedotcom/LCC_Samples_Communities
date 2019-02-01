import Vue from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify';
import * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports)

Vue.use(AmplifyPlugin, AmplifyModules);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
