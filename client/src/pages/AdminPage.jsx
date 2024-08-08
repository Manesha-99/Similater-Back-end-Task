import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginDetails, setLoginDetails] = useState([]);

  useEffect(() => {
    const fetchLoginDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "http://localhost:5000/admin/login-details",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setLoginDetails(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLoginDetails();
  }, []);

  const handleCreateUser = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/admin/create-user",
        { email, password },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("User created successfully");
      setEmail("");
      setPassword("");
      
      const res = await axios.get('http://localhost:5000/admin/users', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);

    } catch (err) {
      console.error(err);
      alert("Failed to create user");
    }
  };

  return (
    <>
      <div>
        <h1>Admin Panel</h1>
        <div>
          <h2>Create User</h2>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleCreateUser}>Create User</button>
        </div>
        <div>
          <h2>Login Details</h2>
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Device Name</th>
                <th>Login Time</th>
              </tr>
            </thead>
            <tbody>
              {loginDetails.map((detail) => (
                <tr key={detail.id}>
                  <td>{detail.email}</td>
                  <td>{detail.device_name}</td>
                  <td>{new Date(detail.login_time).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
