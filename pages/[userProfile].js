import Head from "next/head";
import styles from "../styles/Home.module.css";

import PropTypes from "prop-types";
import userDataCollection from "../util/getUserData";
import Header from "../components/Header";

const Profile = ({ postData }) => (
  <div className={styles.container}>
    <Head className="justify-content-center">
      <title>Products Listing</title>
      <meta name="description" content="Products Listing of Shirts" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header profileName={postData} />
  </div>
);

Profile.propTypes = {
  postData: PropTypes.string,
};

export const getStaticPaths = async () => {
  const userProfileData = await userDataCollection.allUsersData();
  const paths = userProfileData.map((userProfile) => ({
    params: { userProfile: userProfile.name },
  }));
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const postData = params.userProfile;
  return {
    props: {
      postData,
    },
  };
}

export default Profile;
