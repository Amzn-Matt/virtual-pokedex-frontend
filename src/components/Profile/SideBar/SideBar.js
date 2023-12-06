import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__profile-info">
        <p className="sidebar__name">Trainer Name</p>
      </div>
      <div className="sidebar__profile-manager">
        <button className="sidebar__edit-btn" type="button">
          Change Profile Data
        </button>
        <button className="sidebar__logout-btn" type="button">
          Log out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
