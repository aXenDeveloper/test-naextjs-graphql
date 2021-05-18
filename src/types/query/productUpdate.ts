import { FieldResolver } from 'nexus';
import { query } from '../../database';

const productUpdate: FieldResolver<'Query', 'productUpdate'> = async (
  parent,
  { id, name, price }
) => {
  try {
    await query(`UPDATE products SET price=?, name=? WHERE id=?`, [price, name, id]);
    return `Edit ID: ${id} - ${name} for price: ${price}`;
  } catch (e) {
    return e;
  }
};

export default productUpdate;
