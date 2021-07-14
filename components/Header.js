import { useRouter } from 'next/router'
import styles from "../styles/Home.module.css";
export default function Header( { name = 'simon'} ) {
  return (
    <div className={styles.description}>
      Get Personal
    <div className={styles.nav}>
      <Link href='/'>Home</Link>
      <Link href="/shirts/">Shirts</Link>
      <Link href="/dresses">Dresses</Link>
      <Link
        href={{
            pathname: '/userProfile/[name]',
            query: { name },
          }}
        >
        <a>My Preferences</a>
      </Link>
    </div>
    </div>
  )
}


const Link = ({ children, href }) => {
  const router = useRouter()
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault()
        router.push(href)
      }}
    >
      {children}
      <style jsx>{`
        a {
          margin-right: 10px;
        }
      `}</style>
    </a>
  )
}