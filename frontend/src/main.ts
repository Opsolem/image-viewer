import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import VueCompositionApi, { provide } from "@vue/composition-api";
import VueApollo from "vue-apollo";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { client } from "./apollo";
import VueRouter from "vue-router";

Vue.use(VueRouter);
Vue.use(VueCompositionApi);
Vue.use(VueApollo);

new Vue({
  router,
  render: h => h(App),
  setup() {
    provide(DefaultApolloClient, client);

    return {};
  },
  apolloProvider: new VueApollo({
    defaultClient: client
  })
}).$mount("#app");
