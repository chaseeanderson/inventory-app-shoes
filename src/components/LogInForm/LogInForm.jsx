import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LogIn({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="columns" onSubmit={handleSubmit}>
        <div className="card column is-8 is-offset-2">
          <form autoComplete="off">

            <div className="card-content">
              <div className="field">
                <label className="label">Email</label>
                <input className="input" type="text" name="email" value={credentials.email} onChange={handleChange} required />
              </div>

              <div className="field">
                <label className="label">Password</label>
                <input className="input" type="password" name="password" value={credentials.password} onChange={handleChange} required />
              </div>
            </div>

            <div className="card-footer">
              <div className="card-footer-item">
                <button className="button" type="submit">LOG IN</button>
              </div>
            </div>

          </form>
        </div>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}