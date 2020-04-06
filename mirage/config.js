export default function() {
  this.namespace = 'api';

  this.get('/products', 'product');

  this.get('/products/:id', (schema, request) => {
    let id = request.params.id;
    return schema.product.find(id);
  });

  this.post('/products', 'product');

  this.put('/products/:id');

  this.patch('/products/:id', 'product');

  this.del('/products/:id', (schema, request) => {
    let id = request.params.id;
    schema.product.find(id).destroy();
  });
}
