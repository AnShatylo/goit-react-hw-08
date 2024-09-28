import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { selectIsLoading } from '../../redux/auth/selectors';
import css from './RegisterForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const handleSubmit = (values, action) => {
    dispatch(login(values));
    action.resetForm();
  };
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .min(3, 'Too short, min 3 letters!')
      .max(15, 'Too long, max 50 letters!')
      .required('Number is required'),
    password: Yup.string()
      .min(6, 'Too shott, min 6 symbols')
      .required('Password is required!'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label>Number</label>

          <Field type="email" className={css.input} name="email" />
          <ErrorMessage name="email" component="span" className={css.error} />
        </div>
        <div className={css.formGroup}>
          <label>Password</label>

          <Field type="password" className={css.input} name="password" />
          <ErrorMessage
            name="password"
            component="span"
            className={css.error}
          />
        </div>
        <button className={css.submitBtn} type="submit" disabled={isLoading}>
          Log in
        </button>
      </Form>
    </Formik>
  );
}
