import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
    name(i) {
        return `Product ${i}`;
    },
    weight() {
        return Math.floor(Math.random() * (50 - 1000 + 1)) + 1000 + '';
    },
    price() {
        let min = 50000;
        let max = 1000000;

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
