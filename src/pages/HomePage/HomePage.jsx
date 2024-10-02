import css from './HomePage.module.css';
import { FaSearch, FaTags, FaLock, FaSyncAlt } from 'react-icons/fa';


export default function HomePage() {
  return (
    <div className={css.homepageContainer}>
    <h1 className={css.homepageTitle}>Welcome to Your Contact Book!</h1>
    <p className={css.homepageDescription}>
      A convenient and intuitive app for storing and managing all your contacts in one place.
      Our tool will help you easily organize important connections, from business partners to friends and family.
    </p>

    <h2 className={css.featuresTitle}>Key Features:</h2>
    <ul className={css.featuresList}>
      <li className={css.featureItem}>
        <FaSearch className={css.featureIcon} /> <strong>Quick Access:</strong> Instantly find the contact you need with smart search.
      </li>
      <li className={css.featureItem}>
        <FaTags className={css.featureIcon} /> <strong>Organize Easily:</strong> Add categories and notes to each contact.
      </li>
      <li className={css.featureItem}>
        <FaLock className={css.featureIcon} /> <strong>Security:</strong> Your data is protected with modern encryption technology.
      </li>
      <li className={css.featureItem}>
        <FaSyncAlt className={css.featureIcon} /> <strong>Synchronization:</strong> Access your contacts from any device — phone, tablet, or computer.
      </li>
    </ul>

    <p className={css.homepageFooter}>
      Make contact management simpler and more efficient! Start using it now and never lose important connections.
    </p>
  </div>
  );
}
