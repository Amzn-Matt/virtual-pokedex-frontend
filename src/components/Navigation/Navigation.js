import { VscThreeBars } from "react-icons/vsc";

const Navigation = ({ onSignUp, onLogin, onMobileBtn }) => {
  return (
    <div className="navigation">
      <button className="navigation__register-btn" onClick={onSignUp}>
        SignUp
      </button>
      <button className="navigation__login-btn" onClick={onLogin}>
        Log In
      </button>
      <button className="navigation__mobile-btn" onClick={onMobileBtn}>
        <VscThreeBars className="mobile__icon" />
      </button>
    </div>
  );
};

export default Navigation;
