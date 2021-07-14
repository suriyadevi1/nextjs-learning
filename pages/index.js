import Link from "next/link";
import Image from "next/image";
import summerMW from "../public/images/summer-mw.jpg";
import summerWW from "../public/images/summer-ww.jpg";
import settings from "../public/images/settings.gif";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const iconSize = {
  width: 40,
  height: 40,
};

const Index = () => {
  const [profileName, setprofileName] = useState("");
  const onChange = (event) => {
    const name = event.target.value;
    console.log("name value is", name);
    setprofileName(name);
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
          <p>Go to your 
            <Image
              src={settings}
              width={iconSize.width}
              height={iconSize.width}
            />
            <Link href={profileName}>{profileName}</Link>
          </p>
          <p>
            Go to your site{" "}
            <Link href={profileName} className="button">
              {profileName}
            </Link>
          </p>
        </div>
        <div className={styles.genericContent}>
          <p>
            Our collection of men’s has all the styles you need. Our polos come
            in a range of colours and stripes, whether you love knitted styles
            or classic long-sleeved versions
            <Image
              src={summerMW}
              alt="Summer Mens Wear"
              width="500"
              height="500"
            />
          </p>
          <p>
            Our women’s collection is brimming with everyday basics alongside
            dressier items. Go for classic stripes or florals to achieve
            effortless style, and materials like pure cotton for unbeatable
            comfort and softness.
            <Image
              src={summerWW}
              alt="Summer Womens Wear"
              width="500"
              height="500"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
