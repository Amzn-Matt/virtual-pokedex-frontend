const Navigation = ({ onSignUp, onLogin }) => {
  return (
    <div className="navigation">
      <button className="navigation__register-btn" onClick={onSignUp}>
        SignUp
      </button>
      <button className="navigation__login-btn" onClick={onLogin}>
        Log In
      </button>
    </div>
  );
};

export default Navigation;
