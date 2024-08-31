import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import FormInput from "../components/FormInput";
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
