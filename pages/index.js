import Link from "next/link";
import Image from "next/image";
import summerMW from "../public/images/summer-mw.jpg";
import summerWW from "../public/images/summer-ww.jpg";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import userDataCollection from "../util/getUserData";

const hpGenericcontent = () => {
  return (
    <div className={styles.genericContent}>
      <p>
        Our collection of men’s has all the styles you need. Our polos come in a
        range of colours and stripes, whether you love knitted styles or classic
        long-sleeved versions
        <Image src={summerMW} alt="Summer Mens Wear" width="500" height="500" />
      </p>
      <p>
        Our women’s collection is brimming with everyday basics alongside
        dressier items. Go for classic stripes or florals to achieve effortless
        style, and materials like pure cotton for unbeatable comfort and
        softness.
        <Image
          src={summerWW}
          alt="Summer Womens Wear"
          width="500"
          height="500"
        />
      </p>
    </div>
  );
};

const Index = () => {
  const [profileName, setprofileName] = useState("");
  const [hpContent, sethpContent] = useState("");
  const [avatar, setavatar] = useState("");

  const onChange = async (event) => {
    const userName = event.target.value;
    const userProfileData = await userDataCollection.getUserData(userName);
    if (userProfileData.length > 0) {
      sethpContent(userProfileData[0].preference.hpContent);
      setprofileName(userName);
      setavatar(
        <div>
          <Image
            className={styles.customContent}
            src={userProfileData[0].preference.avatar}
            width="300"
            height="300"
          />
        </div>
      );
    } else {
      sethpContent(hpGenericcontent());
      setprofileName(userName);
    }
  };

  return (
    <div className={styles.description}>
      Get Personal
      <div className={styles.homepage}>
        <input
          className={styles.textfield}
          onChange={onChange}
          type="text"
          name="username"
          placeholder="Type your profile name"
          value={profileName}
        /> 
        <div>
          <p>
            Go to your profile
            <Link href={profileName}>{profileName}</Link>
          </p>
          <p>
            Go to your site
            <Link href={profileName} className="button">
              {profileName}
            </Link>
          </p>
        </div>
        <div className={styles.customContent}> <p>{hpContent} </p>
        <p>{avatar}</p> </div>
      </div>
    </div>
  );
};

export default Index;
