import React from "react";

// Importing styles
import "./DeleteButton.css";

const DeleteButton = ({ handleDeleteUsers }) => {
  return (
    <div className="btn" onClick={handleDeleteUsers}>
      Delete Selected
    </div>
  );
};

export default DeleteButton;
