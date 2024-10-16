import styles from "@/ui/page.module.css";
import SubmissionForm from "@/components/SubmissionForm";

export default function Page() {
  return (
    <div>
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