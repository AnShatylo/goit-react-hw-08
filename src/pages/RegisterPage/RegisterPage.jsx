import RegisterForm from '../../components/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css'

export default function RegisterPage() {
  return (
    <div className={css.register}>
      <h2>Register Page</h2>
      <RegisterForm />
    </div>
  );
}
