import { FieldResolver } from 'nexus';
import { query } from '../../database';

const productAdd: FieldResolver<'Query', 'productAdd'> = async (parent, { name, price }) => {
  try {
    await query(`INSERT INTO products (name, price) VALUES ('${name}', ${price})`);
    return `Added ${name} for price: ${price}`;
  } catch (e) {
    return e;
  }
};

export default productAdd;
