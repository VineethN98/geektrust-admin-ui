import React from "react";

// Importing styles
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const ReadOnlyRow = ({ user, deleteUser, clickEditUser, selectUser }) => {
  return (
    // <tr>
    <>
      <td>
        <input type="checkbox" onClick={() => selectUser(user)} />
      </td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <FaEdit className="editButton" onClick={() => clickEditUser(user)} />{" "}
        <FaTrashAlt
          className="deleteButton"
          onClick={() => deleteUser(user.id)}
        />
      </td>
    </>
    // </tr>
  );
};

export default ReadOnlyRow;
