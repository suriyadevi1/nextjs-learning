import Link from "next/link";
import Image from 'next/image'
import profilePic from '../public/images/summer-mw.jpg'
import styles from "../styles/Home.module.css";

const Index = () => (
  <div className={styles.description}> Get Personal 
 <div className={styles.homepage}>
    <p>Go to your profile <Link href="/shirts" className="button">Suriya</Link></p>
   <p>Go to your site <Link href="/dresses" className="button">Suriya</Link></p>  
    <p>Our collection of men’s tops has all the styles you need. Our polos come in a range of colours and stripes, whether you love knitted styles or classic long-sleeved versions. Our tops come in classic cotton for everyday wear and are perfect for casual downtime. Choose moisture-wicking fabric for jogging or working out at home</p>
    <Image src={profilePic} alt="Picture of the author" width="400" height="400"/>
 
 </div>
 </div>
);

export default Index;