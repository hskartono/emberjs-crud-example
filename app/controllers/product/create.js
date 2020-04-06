import Controller from '@ember/controller';

export default Controller.extend({
    init() {
        this._super(...arguments);
        this.product = this.store.createRecord('product');
    },
    actions: {
        saveProduct() {
            this.product.save();
            this.transitionToRoute('product');
        }
    }
});
