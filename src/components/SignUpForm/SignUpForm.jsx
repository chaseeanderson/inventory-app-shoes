import { Component } from 'react';
import { signUp } from "../../utilities/users-service"

export default class SignUpForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;
      // the promise rerturned by the signup service method
      // will resolve to the user objected included in the 
      // payload of the JSON Wb Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
      // baby step
    } catch {
      // an error has occured
      this.setState({ error: 'Sign Up Failed - Try Again' })
    }
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="columns is-vcentered">
        <div className="card column is-8 is-offset-2">
        <div className="card-header">
            <p className="card-header-title is-centered">
              Sign Up Below! Already have an account? Smash the Log In button.
            </p>
          </div>
          <form autoComplete="off" onSubmit={this.handleSubmit}>

            <div className="card-content">
              <div className="field">
                <label className="label">Name</label>
                <input className="input" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
              </div>

              <div className="field">
                <label className="label">Email</label>
                <input className="input" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
              </div>

              <div className="field">
                <label className="label">Password</label>
                <input className="input" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
              </div>

              <div className="field">
                <label className="label">Confirm</label>
                <input className="input" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
              </div>
            </div>

            <div className="card-footer">
              <div className="card-footer-item pt-5">
                <button className="button" type="submit" disabled={disable}>SIGN UP</button>
              </div>
            </div>

          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}