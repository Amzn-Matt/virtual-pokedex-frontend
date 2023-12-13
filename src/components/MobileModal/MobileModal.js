import "./MobileModal.css";

function MobileModal({ onCloseModal, onSignUp, onLogin }) {
  return (
    <div className={`modal`}>
      <div className="modal__mobile-container">
        <button
          className="modal__mobile-close-btn"
          type="button"
          onClick={onCloseModal}
        ></button>
        <button
          className="modal__mobile-signup-btn"
          type="button"
          onClick={onSignUp}
        >
          {" "}
          Signup
        </button>
        <button
          className="modal__mobile-login-btn"
          type="button"
          onClick={onLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default MobileModal;
