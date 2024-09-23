import styles from "../ui/page.module.css"
import Navbar from "../components/Navbar"

export default function Page() {
    return (
      <div className={styles.page}>
        <Navbar />
        <div className={styles.main}>
          <p>Get Link Page</p>
        </div>
        
      </div>
      
    );
  }