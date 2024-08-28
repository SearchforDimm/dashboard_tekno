import UseAuthToken from "../hooks/UseAuthToken";
import { NavLink } from "react-router-dom";
const Main = (props) => {
  const { name } = UseAuthToken();
  const { type } = props;

  const renderWelcomeMessage = () => {
    switch (type) {
      case "dashboard":
        return <p>Welcome to Teknomadya's Dashboard</p>;
      case "workorder":
        return <p>This is Work Order Page</p>;
      case "worklog":
        return <p>This is Work Log Page</p>;
      case "calendar":
        return <p>This is Calendar Page</p>;
    }
  };

  const renderMainTab = () => {
    switch (type) {
      case "dashboard":
        return null;
      case "workorder":
        return (
          <div className="welcome-tab">
            <h3>Work Order</h3>
            <div className="button">
              <NavLink to="/dashboard">
                <div>Back</div>
              </NavLink>
            </div>
          </div>
        );
      case "worklog":
        return (
          <div className="welcome-tab">
            <h3>Work Log</h3>
            <div className="button">
              <NavLink to="/dashboard">
                <div>Back</div>
              </NavLink>
            </div>
          </div>
        );
      case "calendar":
        return (
          <div className="welcome-tab">
            <h3>Calendar</h3>
            <div className="button">
              <NavLink to="/dashboard">
                <div>Back</div>
              </NavLink>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <main className="main">
        <div className="welcome-container">
          <h1>Welcome back, {name.substring(0, name.indexOf(" "))}!</h1>
          {renderWelcomeMessage()}
        </div>
        {renderMainTab()}
      </main>
    </>
  );
};
export default Main;
