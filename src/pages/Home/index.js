import styles from './Home.module.css';

const HomePage = () => (
  <div className={styles.container}>
    <section>
      <ul>
        <li>
          <span>Book 1</span>
          <span>Author 1</span>
        </li>
        <li>
          <span>Book 2</span>
          <span>Author 2</span>
        </li>
        <li>
          <span>Book 3</span>
          <span>Author 3</span>
        </li>
      </ul>
    </section>
    <section>
      <form>
        <input type="text" name="book" placeholder="Book name" />
        <input type="text" name="author" placeholder="Author name" />
        <input type="submit" value="Add new Book" />
      </form>
    </section>
  </div>
);

export default HomePage;
