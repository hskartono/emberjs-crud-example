import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    weight: DS.attr(),
    price: DS.attr('number')
});
