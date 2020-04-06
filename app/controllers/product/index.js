import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['page'],
    page: 1,
    actions: {
        deleteProduct(id) {
            let confirmed = confirm('Are you sure want to delete this record?');
            if(confirmed) {
                let product = this.store.peekRecord('product', id);
                product.deleteRecord();
                product.save();
            }
        }
    }
});
