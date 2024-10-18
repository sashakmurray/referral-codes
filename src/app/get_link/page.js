import styles from "@/ui/page.module.css";
import SearchLinksForm from "@/components/SearchLinksForm";
import {FilteredDB} from "@/get_link/server_actions.js";

export default function Page(searchParams) {

  const query = searchParams.query || '';

    return (
      <div>
        <div className={styles.page}>
          <div className={styles.main}>
            <p>Get Link Page</p>

            <SearchLinksForm/>

            <FilteredDB query={query}/>
          
          </div>
        </div>
      </div>
    );
  }