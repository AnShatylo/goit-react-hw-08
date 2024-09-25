import { FaPhone } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.contactItemWrapper}>
      <div className={css.contactInfoWrap}>
        <p className={css.contactElem}>
          <FaUser />
          {contact.name}
        </p>
        <p className={css.contactElem}>
          <FaPhone />
          {contact.number}
        </p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
