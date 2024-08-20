import UseAuthToken from "../hooks/UseAuthToken";

const Main = () => {
  const { name } = UseAuthToken();
  return (
    <>
      <main className="main">
        <div className="welcome-container">
          <h1>Welcome back, {name.substring(0, name.indexOf(" "))}!</h1>
          <p>Welcome to Teknomadya's Dashboard</p>
        </div>
      </main>
    </>
  );
};

export default Main;
