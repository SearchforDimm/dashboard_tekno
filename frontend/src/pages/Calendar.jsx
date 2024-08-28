import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
const WorkOrder = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Main type="calendar" />
    </>
  );
};

export default WorkOrder;
