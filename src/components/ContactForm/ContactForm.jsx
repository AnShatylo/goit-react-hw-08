import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

export default function ContactForm() {
  const dispatch = useDispatch();

  const initialValues = {
    contactName: '',
    contactNumber: '',
  };

  const validationSchema = Yup.object().shape({
    contactName: Yup.string()
      .min(3, 'Too short, min 3 letters!')
      .max(50, 'Too long, max 50 letters!')
      .required('Name is required'),
    contactNumber: Yup.string()
      .min(3, 'Too short, min 3 letters!')
      .max(15, 'Too long, max 50 letters!')
      .required('Number is required'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.contactName,
        number: values.contactNumber,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.addForm}>
        <div className={css.formGroup}>
          <label>Name</label>

          <Field type="text" className={css.input} name="contactName" />
          <ErrorMessage
            name="contactName"
            component="span"
            className={css.error}
          />
        </div>
        <div className={css.formGroup}>
          <label>Number</label>

          <Field type="text" className={css.input} name="contactNumber" />
          <ErrorMessage
            name="contactNumber"
            component="span"
            className={css.error}
          />
        </div>
        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
