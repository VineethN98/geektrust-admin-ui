import React from "react";

// Importing styles
import "./Table.css";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const Table = ({ users, deleteUser }) => {
  return (
    <table className="tableStyle">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <FaEdit />{" "}
              <FaTrashAlt
                className="deleteButton"
                onClick={() => deleteUser(user.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
