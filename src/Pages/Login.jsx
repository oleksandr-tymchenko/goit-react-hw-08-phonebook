// import LoginForm from 'components/reduxLoginComponents/LoginForm';
// import { LoginForm } from 'components/reduxComponents/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';
// import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
