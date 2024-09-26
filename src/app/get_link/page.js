import styles from "../ui/page.module.css"
import Navbar from "../components/Navbar"

export default function Page() {
    return (
      <div><Navbar />
        <div className={styles.page}>
          <div className={styles.main}>
            <p>Get Link Page</p>
          </div>
        </div>
      </div>
    );
  }