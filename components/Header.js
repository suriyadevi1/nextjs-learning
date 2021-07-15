import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import userDataCollection from "../util/getUserData";
import { useState, useEffect } from "react";
import Shirts from "../pages/shirts";
import PropTypes from "prop-types";

/* async function Categoryformation({ profileName }) {
  let categoriesList = [];
  if (profileName) {
    let userProfileData = await userDataCollection.getUserData(profileName);
    console.log("userProfileData", userProfileData);

    if (userProfileData.length > 0) {
      categoriesList = userProfileData[0].preference.categories;
    }

    console.log("categoriesList is ", categoriesList);
    if (categoriesList.length > 0) {
      categoriesList.map((category) => {
        console.log("category", category);
        return <Link href={category}>{category}</Link>;
      });
    }
  } else {
    return (
      <div>
        <Shirts name={profileName}>
          <Link href="/shirts">Shirts</Link>
        </Shirts>
        <Link href="/dresses">Dresses</Link>
        <Link href="/tops">Tops</Link>
        <Link href="/unisex">Unisex</Link>
      </div>
    );
  }
} */

export default function Header(profileName) {
  const [categoriesList, setcategoriesList] = useState([]);
  const categoryformation = async ({ profileName }) => {
    const defaultCategories = ["Shirts", "Dresses", "Tops", "Unisex"];
    if (profileName) {
      const userData = await userDataCollection.getUserData(profileName);
      console.log("userData", userData);

      if (userData.length > 0) {
        setcategoriesList(userData[0].preference.categories);
      }
    } else {
      setcategoriesList(defaultCategories);
    }
  };

  categoryformation(profileName);

  return (
    <div className={styles.description}>
      Get Personal
      <div className="justify-content-right">Welcome {profileName.profileName}</div>
      <div className={styles.nav}>
        <Link href="/">Home</Link>
        {categoriesList.map((category) => {
          console.log("category", category);
          return <Link href={category.toLowerCase()}>{category}</Link>;
        })}
        ); } }
      </div>
    </div>
  );
}

Header.propTypes = {
  profileName: PropTypes.string,
};

const Link = ({ children, href }) => {
  const router = useRouter();
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
    >
      {children}
      <style jsx>{`
        a {
          margin-right: 10px;
        }
      `}</style>
    </a>
  );
};
