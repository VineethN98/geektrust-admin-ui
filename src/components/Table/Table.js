import React, { useState, Fragment } from "react";
import ReadOnlyRow from "../ReadOnlyRow/ReadOnlyRow";
import EditableRow from "../EditableRow/EditableRow";

// Importing styles
import "./Table.css";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const Table = ({ users, setUsers, deleteUser, totalUsers }) => {
  const [editRowId, setEditRowId] = useState(null);

  const [editUserData, setEditUserData] = useState({
    name: "",
    email: "",
    role: "",
  });

  // When edit button is clicked
  //
  const clickEditUser = (user) => {
    setEditRowId(user.id);
    setEditUserData({ name: user.name, email: user.email, role: user.role });
  };

  // When the cancel edit button is clicked
  //
  const closeEditUser = () => {
    setEditRowId(null);
  };

  // When user fields are getting edited
  //
  const handleEditUserChange = (event) => {
    event.preventDefault();

    setEditUserData({
      ...editUserData,
      [event.target.name]: event.target.value,
    });
  };

  // When the user submits the editted fields
  //
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedUser = {
      id: editRowId,
      name: editUserData.name,
      email: editUserData.email,
      role: editUserData.role,
    };

    const newUsers = totalUsers.map((user) => {
      if (user.id === editRowId) {
        return { ...user, ...editedUser };
      }
      return user;
    });

    console.log(newUsers);

    setUsers(newUsers);
    setEditRowId(null);
  };

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
          <Fragment key={user.id}>
            {user.id === editRowId ? (
              <EditableRow
                key={user.id}
                editUserData={editUserData}
                handleEditUserChange={handleEditUserChange}
                handleEditFormSubmit={handleEditFormSubmit}
                closeEditUser={closeEditUser}
              />
            ) : (
              <ReadOnlyRow
                key={user.id}
                user={user}
                deleteUser={deleteUser}
                clickEditUser={clickEditUser}
              />
            )}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
