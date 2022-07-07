import React, { useState, useEffect } from "react";
import axios from "axios";

// Importing react components
import Table from "../Table/Table";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";

// Importing styles
import "./AdminPage.css";

const API_URL =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await axios.get(API_URL);
      setUsers(response.data);
      setAllUsers(response.data);
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

  // Search Users
  //
  const handleSearchUser = (event) => {
    event.preventDefault();

    if (event.target.value === "") {
      setQuery("");
    }

    setQuery(event.target.value);
  };

  useEffect(() => {
    // Return all users if query is empty
    //
    if (query === "") {
      setUsers(allUsers);
      return;
    }

    // Search for users if query is not empty
    //
    const searchedUsers = users.filter((user) => {
      if (user.name.toLowerCase().includes(query.toLowerCase())) {
        return user;
      } else if (user.email.toLowerCase().includes(query.toLowerCase())) {
        return user;
      } else if (user.role.toLowerCase().includes(query.toLowerCase())) {
        return user;
      }
    });
    setUsers(searchedUsers);
  }, [query]);

  return (
    <div>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <div className="container">
          <SearchBar handleSearchUser={handleSearchUser} />
          <Table
            totalUsers={users}
            users={currentUsers}
            setUsers={setUsers}
            deleteUser={deleteUser}
          />
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={users.length}
            paginate={paginate}
            prevPage={prevPage}
            nextPage={nextPage}
            selectedPage={currentPage}
          />
        </div>
      )}
    </div>
  );
};

export default AdminPage;
