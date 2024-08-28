import { React, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UseAuthToken = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
      refreshtoken();
  }, []);

  const refreshtoken = async () => {
      try {
          const response = await axios.get("http://localhost:5000/token");
          setToken(response.data.accessToken);
          const decoded = jwtDecode(response.data.accessToken);


          setName(decoded.name);
          setDescription(decoded.description);
      } catch (error) {
          if (error.response) {
              navigate("/");
          }
      }
  };

  return { name, token, description };
};

export default UseAuthToken;