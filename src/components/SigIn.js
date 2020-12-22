import '../App.css';

function SigIn() {
  return (
    <span className="box">
      <h3>SigIn</h3>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="email" type="email" className="validate" />
              <label for="email">e-mail:</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="password" type="password" className="validate" />
              <label for="password">password:</label>
            </div>
          </div>
          <div className="row">
            <a
              href="/SignUp"
              className="waves-effect waves-light btn"
              style={{ margin: '15px' }}
            >
              Criar conta
            </a>
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

export default SigIn;
