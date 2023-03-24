import styles from "./ErrorPage.module.css";

function ErrorPage() {
  return (
    <section className={styles.errorContainer}>
      <div>
        <h2 className={styles.errMessage}>Page Not Found 40️⃣4</h2>
        <p className={styles.goBackMessage}>
          Go back to home page
          <a href="/games" className={styles.goBackLink}>
            Here👈
          </a>
        </p>
      </div>
    </section>
  );
}

export default ErrorPage;
