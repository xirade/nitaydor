import Vue from "vue";
import VueGtag from "vue-gtag";

const API_KEY = process.env.GOOGLE_ANALYTICS_ID

Vue.use(VueGtag, {
  config: { id: API_KEY},
})