import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Users from "./Users";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>There are {users.length} users!</h3>
      <div className="cards">
        {users.map((user) => (
          <Users key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
