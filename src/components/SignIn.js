import { Link } from 'react-router-dom';
import '../App.css';

function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <span className="box">
      <h3>SigIn</h3>
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">e-mail:</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">password:</label>
            </div>
          </div>
          <div className="row">
            <Link
              to="/SignUp"
              className="waves-effect waves-light btn"
              style={{ margin: '15px' }}
            >
              Criar conta
            </Link>

            <a
              href="/"
              className="waves-effect waves-light btn"
              style={{ margin: '15px' }}
            >
              Entrar
            </a>
          </div>
        </form>
      </div>
    </span>
  );
}

export default SignIn;
