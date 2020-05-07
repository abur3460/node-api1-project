import React from "react";
import { Card, Button } from "semantic-ui-react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Users = ({ user }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/users/${user.id}`)
      .then((res) => {
        window.location.reload(false);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Card>
        <Card.Content>
          <Card.Header>{user.name}</Card.Header>
          <p className="bio">{user.bio}</p>
          <div className="button">Edit</div>
          <div className="button" onClick={handleDelete}>
            Delete
          </div>
        </Card.Content>
      </Card>
    </>
  );
};

export default Users;
