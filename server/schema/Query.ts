import { objectType, queryType } from 'nexus';
import { query } from '../query/database';

export const Framework = objectType({
  name: 'Framework',
  definition(t) {
    t.id('id');
    t.string('name');
  }
});

export const Query = queryType({
  definition(t) {
    t.list.field('frameworks', {
      type: 'Framework',
      resolve: async () => {
        try {
          const results = await query(`SELECT * FROM products`);

          return results;
        } catch (e) {
          return e;
        }
      }
    });
  }
});
