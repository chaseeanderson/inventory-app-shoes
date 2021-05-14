import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LogInForm/LogInForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main className="hero is-fullheight">
      <h1 className="is-size-1 mt-6">Welcome to KICKS!</h1>
      <h3 className="is-size-3">tracking shoes and taking orders :)</h3>
      <div className="hero-body">
        <div className="container columns">
          <div className="column">
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      <button className="button" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up': 'Log In'}</button>
          </div>
        </div>
      </div>
    </main>
  );
}       