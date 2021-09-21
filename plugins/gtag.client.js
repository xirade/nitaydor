import Vue from "vue";
import VueGtag from "vue-gtag";

export default ({ isDev, app }) => {
	if (!isDev){
		Vue.use(VueGtag, {
			config: { id: `${process.env.GOOGLE_ANALYTICS_ID}` }
		},
		app.router
		);
	} else {
		console.log("Skipping GA in development")
	}
}