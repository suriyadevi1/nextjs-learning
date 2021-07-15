import { useRouter } from 'next/router'
import Header from '../../../components/Header'
import DndLayout from '../../../dndLayout'
import users from '../../../public/data/users.json'

import styles from '../../../styles/UserProfile.module.css'

const allCategories = ['Dresses', 'Shirts', 'Tops', 'Unisex'];
const allSizes = ['S', 'M', 'L', 'XL', 'XXL'];

const UserProfile = () => {
  const router = useRouter()
  const { name } = router.query

  console.log('SIMON1:', name, users.users);
  
  const { preference  : { categories, size }} = users.users[name];

  console.log('SIMON:', name, categories, size);

  const userCategories = { items: allCategories.filter(c => !categories.includes(c)), selected: categories};
  const userSizes = { items : allSizes.filter(s => !size.includes(s)), selected: size };

  return (
    <>
      <Header />
      <h1>Preferences for: {name} </h1>
      <h2>Favourite Categories: </h2>
      <DndLayout id={'categories'} items={userCategories.items} selected={userCategories.selected} className={styles.categories} />
      <h2>Favourite Sizes: </h2>
      <DndLayout id={'sizes'} items={userSizes.items} selected={userSizes.selected} className={styles.sizes} />

    </>
  )
}

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