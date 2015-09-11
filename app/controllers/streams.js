import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    create() {
      this.store.createRecord("patch", {
        description: "foo",
        name: "bar",
        stream: this.store.peekRecord("stream", 1)
      });
    }
  }
});
