import { intArg, queryType, stringArg } from 'nexus';
import productsFindByIDQuery from "./query/productFindByIDQuery";
import productsQuery from "./query/ProductsQuery";

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

    t.string('hello', {
      args: { name: stringArg() },
      resolve: (parent, { name }) => `Hello ${name || 'World'}!`
    });
  }
});
