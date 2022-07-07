import React from "react";

// Importing styles
import { FaWindowClose } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

//prettier-ignore
const EditableRow = ({
  editUserData,
  handleEditUserChange,
  handleEditFormSubmit,
  closeEditUser,
}) => {
  return (
    <>
      <td></td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Edit Name"
          name="name"
          value={editUserData.name}
          onChange={handleEditUserChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Edit Email"
          name="email"
          value={editUserData.email}
          onChange={handleEditUserChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Edit Role"
          name="role"
          value={editUserData.role}
          onChange={handleEditUserChange}
        ></input>
      </td>
      <td>
        <FaCheck onClick={handleEditFormSubmit} />{" "}
        <FaWindowClose onClick={closeEditUser} />
      </td>
    </>
  );
};

export default EditableRow;
