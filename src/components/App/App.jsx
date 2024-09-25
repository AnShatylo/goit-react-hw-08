import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectError } from '../../redux/contacts/selectors';
import css from './App.module.css';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useDispatch(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.appContainer}>
      <h1 className={css.appTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}



// Додала всі папки необхідні + файли. Додала слайс для аутентифікації, але треба доробити. Дати якийсь лайоут до всіх сторінок. І просту максимально стилізацію. Змінити запити.