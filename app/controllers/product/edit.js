import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        saveProduct() {
            this.model.save();
            this.transitionToRoute('product');
        }
    }
});
