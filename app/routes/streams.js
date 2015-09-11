import Ember from "ember";

export default Ember.Route.extend({
  model() {
    this.store.createRecord("stream", {
      description: "Maecenas sit amet volutpat eros.",
      id: 1,
      name: "Maecenas sit amet volutpat eros"
    });

    this.store.createRecord("patch", {
      description: "Aenean in risus tellus.",
      id: 1,
      name: "Aenean in risus tellus",
      stream: this.store.peekRecord("stream", 1)
    });

    return this.store.peekAll("stream");
  }
});
