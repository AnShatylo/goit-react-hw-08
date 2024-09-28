// import ContactForm from '../ContactForm/ContactForm';
// import SearchBox from '../SearchBox/SearchBox';
// import ContactList from '../ContactList/ContactList';
import Layout from '../Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
// import { selectLoading, selectError } from '../../redux/contacts/selectors';
import css from './App.module.css';
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Please wait...</b>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <div className={css.appContainer}>
          {/* <h1 className={css.appTitle}>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          {loading && !error && <b>Request in progress...</b>}
          <ContactList /> */}

          <Routes>
            <Route
              path="/register"
              element={
                <RestrictedRoute component={<RegisterPage />} redirectTo="/" />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />
          </Routes>
        </div>
      </Suspense>
    </Layout>
  );
}
