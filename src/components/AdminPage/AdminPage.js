import React, { useState, useEffect } from "react";
import axios from "axios";

// Importing react components
import Table from "../Table/Table";
import Pagination from "../Pagination/Pagination";

const API_URL =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [currentUsers, setCurrentUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await axios.get(API_URL);
      setUsers(response.data);
      console.log(response.data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const userSlice = users.slice(indexOfFirstUser, indexOfLastUser);
    setCurrentUsers(userSlice);
  }, [users, currentPage]);

  // Get users for the current page
  //
  //   const indexOfLastUser = currentPage * usersPerPage;
  //   const indexOfFirstUser = indexOfLastUser - usersPerPage;
  //   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change Page
  //
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Prev Page
  //
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Next Page
  //
  const nextPage = (maxPageLength) => {
    if (currentPage < maxPageLength) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Delete User
  const deleteUser = (userId) => {
    let usersLeft = [...users];
    usersLeft = usersLeft.filter((user) => user.id !== userId);
    setUsers(usersLeft);
  };

  return (
    <div>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <>
          <Table users={currentUsers} deleteUser={deleteUser} />
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={users.length}
            paginate={paginate}
            prevPage={prevPage}
            nextPage={nextPage}
            selectedPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default AdminPage;
