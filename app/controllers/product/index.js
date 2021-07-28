import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['page', 'perPage'],
    page: 1,
    perPage: 3,
    actions: {
        deleteProduct(id) {
            let confirmed = confirm('Are you sure want to delete this record?');
            if(confirmed) {
                let product = this.store.peekRecord('product', id);
                product.deleteRecord();
                product.save();
            }
        },
        moveNext(page) {
            let maxPage = this.get('meta.pages');
            if(page < maxPage){
                page = page + 1;
                this.set('page', page);
            }
        },
        movePrev(page) {
            if(page > 1) {
                page = page - 1;
                this.set('page', page);
            }
        }
    }
});
