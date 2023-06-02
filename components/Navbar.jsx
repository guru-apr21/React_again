import Link from "next/link";
import styles from "../styles/Home.module.css"; // import the styles

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/about" className={styles.navbar_link}>
        About
      </Link>
      <Link href="/projects" className={styles.navbar_link}>
        Projects
      </Link>
      <Link href="/contact" className={styles.navbar_link}>
        Contact
      </Link>
    </nav>
  );
}
