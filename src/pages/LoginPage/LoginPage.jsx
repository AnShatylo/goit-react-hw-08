import css from './LoginPage.module.css'
import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginPage() {
    return (
        <div className={css.login}>
            <h2>Login Page</h2>
            <LoginForm/>
        </div>
    )
};
