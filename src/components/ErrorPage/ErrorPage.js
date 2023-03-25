import styles from "./ErrorPage.module.css";

import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <section className={styles.errorContainer}>
      <div>
        <h2 className={styles.errMessage}>Page Not Found 40️⃣4</h2>
        <p className={styles.goBackMessage}>
          Go back to home page
          <Link to="/" className={styles.goBackLink}>
            Here👈
          </Link>
        </p>
      </div>
    </section>
  );
}

export default ErrorPage;
