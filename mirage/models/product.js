import { Model } from 'ember-cli-mirage';
import DS from 'ember-data';

export default Model.extend({
    name: DS.attr('string'),
    weight: DS.attr('string'),
    price: DS.attr('number')
});
