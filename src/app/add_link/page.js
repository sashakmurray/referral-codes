import styles from "../ui/page.module.css";
import Link from 'next/link';
import Navbar from "../components/Navbar";
import SubmissionForm from "../components/SubmissionForm";

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

            <SubmissionForm />
          
          </div>
        </main>
      </div>
    </div>
  );

}