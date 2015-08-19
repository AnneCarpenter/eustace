import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('eustace-modules-input', 'Integration | Component | eustace modules input', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{eustace-modules-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#eustace-modules-input}}
      template block text
    {{/eustace-modules-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
