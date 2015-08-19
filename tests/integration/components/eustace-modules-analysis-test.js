import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('eustace-modules-analysis', 'Integration | Component | eustace modules analysis', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{eustace-modules-analysis}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#eustace-modules-analysis}}
      template block text
    {{/eustace-modules-analysis}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
