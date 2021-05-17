import { query } from "../../database";

const productsQuery = async () => {
  try {
    const results = await query(`SELECT * FROM products`);
    return results;
  } catch (e) {
    return e;
  }
}

export default productsQuery;