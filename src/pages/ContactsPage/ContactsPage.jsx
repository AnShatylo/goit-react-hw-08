import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { selectLoading, selectError } from '../../redux/contacts/selectors';
import { useSelector } from 'react-redux';
import css from './ContactsPage.module.css';

export default function ContactsPage() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <h1 className={css.appTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}
