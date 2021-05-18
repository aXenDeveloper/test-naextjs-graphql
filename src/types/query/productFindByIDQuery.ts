import { FieldResolver } from 'nexus';
import { query } from '../../database';

const productsFindByIDQuery: FieldResolver<'Query', 'productFindByID'> = async (parent, { id }) => {
  try {
    const results = await query(`SELECT * FROM products WHERE id=?`, [id]);

    return results;
  } catch (e) {
    return e;
  }
};

export default productsFindByIDQuery;
