import Route from '@ember/routing/route';

export default Route.extend({
    queryParams: {
        page: {
            refreshModel: true
        },
        size: {
            refreshModel: true
        }
    },
    model(params) {
        return this.store.query('product', {
            page: {
                number: params.page,
                size: params.perPage
            }
        }).then((results)=>{
            return {
                products: results,
                meta: results.get('meta')
            };
        });
    },
    setupController(controller, { products, meta }) {
        this._super(controller, products);
        controller.set('meta', meta);
    }
});
