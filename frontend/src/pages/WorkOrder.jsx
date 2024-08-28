import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
const WorkOrder = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Main type="workorder" />
      <Table type="workorder" />
    </>
  );
};

export default WorkOrder;
