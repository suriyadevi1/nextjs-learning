import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../layout/layout";
import PropTypes from "prop-types";
import getApiResult from '../util/getApiResults'
import GenericHeader from "../components/GenericHeader";

const Dresses = ({ productsList }) => (
  <div className={styles.container}> 
    <Head className="justify-content-center">
      <title>Products Listing</title>
      <meta name="description" content="Products Listing of Dresses" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GenericHeader />
    <div className={styles.heading}>
    <h1>Products Listing of Dresses</h1>
    </div>
    <Layout productsList={productsList} />
    <footer className={styles.footer}>
      <a>This is learning project</a>
    </footer>
  </div>
);

Dresses.propTypes = {
  productsList: PropTypes.array,
};

export const getStaticProps = async () => {
  const value = await getApiResult('women_dresses');
  return {
    props: {
      productsList: value.products,
    },
  };
};

export default Dresses;
