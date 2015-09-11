import DS from "ember-data";

export default DS.Model.extend({
  description: DS.attr("string", {
    defaultValue: false
  }),
  name: DS.attr("string", {
    defaultValue: false
  }),
  patches: DS.hasMany("patch", {
    async: false
  })
});
