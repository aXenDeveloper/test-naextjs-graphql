import { FieldResolver } from 'nexus';
import { query } from '../../database';

const productDelete: FieldResolver<'Query', 'productAdd'> = async (parent, { id }) => {
  try {
    await query(`DELETE FROM products WHERE id=${id}`);

    return `Deleted product ID: ${id}`;
  } catch (e) {
    return e;
  }
};

export default productDelete;
