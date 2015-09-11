import Ember from "ember";

export default Ember.Route.extend({
  model(parameters) {
    return this.store.peekRecord("stream", parameters.stream_id);
  }
});
