import { useState } from 'react';
import M from 'materialize-css';

function SignUp({ list, include }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cEmail, setCEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setcPassword] = useState('');

  const handleSubmit = (e) => {
    if (email !== cEmail) {
      M.toast({
        html: 'Email informados não correspondem...',
        classes: 'rounded',
      });
      e.preventDefault();
    } else if (password !== cPassword) {
      M.toast({
        html: 'Password informados não correspondem...!',
        classes: 'rounded',
      });

      e.preventDefault();
    } else {
      const newUser = { name, email, password };
      include(newUser);
    }
    //M.Toast.dismissAll();
  };

  return (
    <span className="box">
      <h3>SignUp</h3>
      <div className="row">
        <form className="col s12" action="/">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="name"
                type="text"
                className="validate"
                onChange={(e) => setName(e.target.value)}
              />
              <label for="name">name:</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="email"
                type="email"
                className="validate"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="email">e-mail:</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="cEmail"
                type="email"
                className="validate"
                onChange={(e) => setCEmail(e.target.value)}
              />
              <label for="cEmail">confirm e-mail:</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="password"
                type="password"
                className="validate"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="password">password:</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="cPassword"
                type="password"
                className="validate"
                onChange={(e) => setcPassword(e.target.value)}
              />
              <label for="cPassword">confirm password:</label>
            </div>
          </div>
          <div className="row">
            <button
              className="waves-effect waves-light btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </span>
  );
}

export default SignUp;
