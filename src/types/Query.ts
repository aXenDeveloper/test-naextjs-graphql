import { queryType, stringArg } from 'nexus';
import { query } from '../database';

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

    t.string('hello', {
      args: { name: stringArg() },
      resolve: (parent, { name }) => `Hello ${name || 'World'}!`
    });
  }
});
