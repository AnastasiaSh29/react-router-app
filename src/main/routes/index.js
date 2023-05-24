import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../library/common/components/Header/Header";
import Dashboard from "../../modules/Dashboard/Dashboard";
import PostsList from "../../modules/PostsList/PostsList";
import TodoList from "../../modules/TodoList/TodoList";
import UserList from "../../modules/UserList/UserList";

function AppRoutes() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="posts" element={<PostsList />} />
        <Route path="todos" element={<TodoList />} />
        <Route path="users" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
