import Head from 'next/head';
import { request, gql } from 'graphql-request';
import styles from '../styles/Home.module.css';
import { FC } from 'react';

type ProductType = {
  id: number;
  name: string;
  price: number;
};

type HomeType = {
  products: ProductType[];
  productFindByID: ProductType[];
};

const Home: FC<HomeType> = ({ products, productFindByID }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GrapQL - NextJS - Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          {products.map(({ id, name, price }: ProductType) => (
            <li key={id}>
              {name} - Price ${price}
            </li>
          ))}
        </ul>

        <ul>
          {productFindByID.map(({ id, name, price }: ProductType) => (
            <li key={id}>
              {name} - Price ${price}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const query = gql`
    query {
      products {
        id
        name
        price
      }
      productFindByID(id: 11) {
        id
        name
        price
      }
    }
  `;

  const data = await request('http://localhost:3000/api/graphql', query);
  const { products, productFindByID } = data;

  return {
    props: {
      products,
      productFindByID
    }
  };
}
