
import Layout from '../Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';

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
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
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
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo="/login"
                />
              }
            ></Route>
          </Routes>
        </div>
      </Suspense>
    </Layout>
  );
}
