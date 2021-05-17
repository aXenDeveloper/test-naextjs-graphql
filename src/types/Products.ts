import { objectType } from 'nexus';

export const Products = objectType({
  name: 'Products',
  definition(t) {
    t.id('id');
    t.nonNull.string('name');
    t.float('price');
  }
});
