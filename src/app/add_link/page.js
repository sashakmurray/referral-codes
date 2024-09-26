import styles from "../ui/page.module.css";
import Link from 'next/link';
import Navbar from "../components/Navbar"

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className={styles.page}>
        <main className={styles.main}>
          Add link

          <div className={styles.primary}>
            <select>
              <option value="Link">Referral link</option>
              <option value="Code">Promo code</option>
            </select>

            <br />
            <input type="text"/>

            <br />
            <button type="submit">Submit</button>
          
          </div>
        </main>
      </div>
    </div>
  );

}