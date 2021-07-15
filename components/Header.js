import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import userDataCollection from "../util/getUserData";
import { useState, useEffect } from "react";
import Shirts from "../pages/shirts";
import PropTypes from "prop-types";
import Image from "next/image";


export default function Header(profileName) {
  const [categoriesList, setcategoriesList] = useState([]);
  const [avatar, setavatar] = useState("");
  const categoryformation = async ({ profileName }) => {
    const defaultCategories = ["Shirts", "Dresses", "Tops", "Unisex"];
    if (profileName) {
      const userData = await userDataCollection.getUserData(profileName);
      console.log("userData", userData);

      if (userData.length > 0) {
        setcategoriesList(userData[0].preference.categories);
        setavatar(
          <div>
            <Image
              className={styles.customContent}
              src={userData[0].preference.avatar}
              width="300"
              height="300"
            />
          </div>
        );
      }
    } else {
      setcategoriesList(defaultCategories);
    }
  };

  categoryformation(profileName);

  return (
    <div className={styles.description}>
      Get Personal
      <div>Welcome {profileName.profileName}</div>
      <div className={styles.nav}>
        <Link href="/">Home</Link>
        {categoriesList.map((category) => {
          console.log("category", category);
          return <Link href={category.toLowerCase()}>{category}</Link>;
        })}
        ); } }
      </div>
      <div><p>{avatar}</p> </div>
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
