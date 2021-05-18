import { floatArg, intArg, queryType, stringArg } from 'nexus';
import productAdd from './query/productAdd';
import productsFindByIDQuery from './query/productFindByIDQuery';
import productsQuery from './query/productsQuery';

export const Query = queryType({
  definition(t) {
    t.list.field('products', {
      type: 'Products',
      resolve: productsQuery
    });

    t.list.field('productFindByID', {
      type: 'Products',
      args: { id: intArg() },
      resolve: productsFindByIDQuery
    });

    t.string('productAdd', {
      args: { name: stringArg(), price: floatArg() },
      resolve: productAdd
    });

    t.string('hello', {
      args: { name: stringArg() },
      resolve: (parent, { name }) => `Hello ${name || 'World'}!`
    });
  }
});
