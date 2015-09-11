import Ember from "ember";

import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("stream", {
    path: ":stream_id"
  });

  this.route("streams");
});

export default Router;
