import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Form, Row, Button  } from "react-bootstrap"
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
  
  const { gender, preference  : { categories, size }} = users.users[name];

  console.log('SIMON:', name, categories, size, gender);

  const userCategories = { items: allCategories.filter(c => !categories.includes(c)), selected: categories};
  const userSizes = { items : allSizes.filter(s => !size.includes(s)), selected: size };

  const [preference, setPreference] = useState({ selectedGender: gender, categories, size });
  const { selectedGender } = preference;


  const handleChange = e => {
    e.persist();
    console.log(e.target.value);

    setPreference(prevState => ({
      ...prevState,
      selectedGender: e.target.value
    }));
  
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Selected Gender: ${selectedGender}`);
  };

  return (
    <>
      <Header />
      <h1>Preferences for: {name} </h1>
      <form onSubmit={handleSubmit}>

      <h4>Gender you identify yourself as:</h4>
      <Row>
      <Form.Group className={styles.gender} controlId="chkGender">
        <Form.Check  value="Male" type="radio" label="Male (he/him)" checked={selectedGender === "Male"} onChange={handleChange} />
        <Form.Check value="Female" type="radio" label="Female (she/her)" checked={selectedGender === "Female"} onChange={handleChange}/>
        <Form.Check value="Both" type="radio" label="Netural (they/them)" checked={selectedGender === "Both"} onChange={handleChange}/>
      </Form.Group>
      </Row>

      <h4>Favourite Categories: </h4>
      <DndLayout id={'categories'} items={userCategories.items} selected={userCategories.selected} className={styles.categories} />
      <h4>Favourite Sizes: </h4>
      <DndLayout id={'sizes'} items={userSizes.items} selected={userSizes.selected} className={styles.sizes} />

      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
      </form>
    </>
  )
}

export default UserProfile