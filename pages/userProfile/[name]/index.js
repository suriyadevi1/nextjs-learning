import { useRouter } from 'next/router'
// import Link from 'next/link'
import DndLayout from "../../../dndLayout";
import Header from '../../../components/Header'

import users from '../../../public/data/users.json'

const UserProfile = () => {
  const router = useRouter()
  const { name } = router.query

  console.log('SIMON1:', users.users);
  const { preference } = users.users[name];

  console.log('SIMON:', name, preference);


const items = ['Shirts', 'Tops', 'Unisex']; 
const selected = ['Dresses'];

  return (
    <>
      <Header />
      <h1>Preferences for: {name} </h1>
      <h2>Categories: </h2>
      <DndLayout id={'categories'} items={items} selected={selected} />

    </>
  )
}
// const Home = ({ productsList }) => (
//   <div>
//     <Head className="justify-content-center">
//       <title>Preferences</title>
//       <meta name="description" content="Products Listing of Simon" />
//       <link rel="icon" href="/favicon.ico" />
//     </Head>
//     <Header/>
//     <div className={styles.heading}>
//     <h1>User Preference</h1>
//     </div>
//     {/* <Layout productsList={productsList} /> */}
//     <footer className={styles.footer}>
//       <a>This is learning project</a>
//     </footer>
//   </div>
// );

// Home.propTypes = {
//   productsList: PropTypes.object,
// };

// export const getStaticProps = async () => {
//   const value = { response : { favouriteCategories :['dresses', 'flowers'] } };
//   return {
//     props: {
//       productsList: value.response,
//     },
//   };
// };


export default UserProfile