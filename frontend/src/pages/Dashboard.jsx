import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Main type="dashboard" />
    </>
  );
};

export default Dashboard;
