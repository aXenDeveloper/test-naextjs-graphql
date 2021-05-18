import { query } from "../../database";

const productsQuery = async () => {
  try {
    const results = await query(`SELECT * FROM products`);


    /* const test = results.map(el => {
      return {
        id: el.id,
        name: el.name,
        price: el.price
      }
    }); */

    return results;
  } catch (e) {
    return e;
  }
}

export default productsQuery;