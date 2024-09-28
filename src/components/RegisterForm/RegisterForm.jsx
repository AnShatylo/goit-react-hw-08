import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, action) => {
    dispatch(register(values));
    action.resetForm();
  };
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short, min 3 letters!')
      .max(50, 'Too long, max 50 letters!')
      .required('Name is required'),
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
          <label>Name</label>

          <Field type="text" className={css.input} name="name" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
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
        <button className={css.submitBtn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
