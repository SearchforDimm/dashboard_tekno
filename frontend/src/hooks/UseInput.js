import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UseInput = () => {
    const navigate = useNavigate();
    const [pic, setPic] = useState("");
    const [date, setDate] = useState("");
    const [due_date, setDueDate] = useState("");
    const [work_giver, setWorkGiver] = useState("");
    const [project, setProject] = useState("");
    const [account, setAccount] = useState("");
    const [work_order, setWorkOrder] = useState("");
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState("");
    const [notes, setNotes] = useState("");

    const handleSubmitForm = async () => {
       try {
            await axios.post("http://localhost:5000/tableorder", {    
                pic,
                date,
                due_date,
                work_giver,
                project,
                account,
                work_order,
                priority,
                status,
                notes
            });
            navigate("/workorder")
       } catch (error) {
        console.log(error)
       }
    }

    return {
        pic,
        date,
        due_date,
        work_giver,
        project,
        account,
        work_order,
        priority,
        status,
        notes,
        setPic,
        setDate,
        setDueDate,
        setWorkGiver,
        setProject,
        setAccount,
        setWorkOrder,
        setPriority,
        setStatus,
        setNotes,
        handleSubmitForm
    }
}

export default UseInput