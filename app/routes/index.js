/* global Ember */

var modules = [{
    description: "…",
    icon: "glyphicon-picture",
    isInput: true,
    name: "Images",
  }, {
    description: "…",
    icon: "glyphicon-list",
    isInput: true,
    name: "Metadata",
  }, {
    description: "…",
    icon: "glyphicon-save",
    isInput: true,
    name: "Names and types",
  }, {
    description: "…",
    icon: "glyphicon-folder-open",
    isInput: true,
    name: "Groups",
  }, {
    name: "Crop",
    icon: "",
    isInput: false,
    description: "…"
  }, {
    name: "Identify primary objects",
    icon: "",
    isInput: false,
    description: "…"
  }, {
    name: "Identify secondary objects",
    icon: "",
    isInput: false,
    description: "…"
  }, {
    name: "Identify tertiary objects",
    icon: "",
    isInput: false,
    description: "…"
  }, {
    name: "Measure object size",
    icon: "",
    isInput: false,
    description: "…"
  }, {
    name: "Measure object intensity",
    icon: "",
    isInput: false,
    description: "…"
}];

export default Ember.Route.extend({
  model() {
    return modules;
  },
});
