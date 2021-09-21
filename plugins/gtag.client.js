import Vue from "vue";
import VueGtag from "vue-gtag";

export default ({ isDev, app, $config: { googleApiId } }) => {
  if (!isDev) {
    Vue.use(
      VueGtag,
      {
        config: { id: googleApiId }
      },
      app.router
    );
  } else {
    console.log("Skipping GA in development");
  }
};
