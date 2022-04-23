import React from "react";
import { Outlet } from "react-router-dom";
import { categories } from "../../categories";
import Directory from "../../components/directory/Directory.component";

const Home = () => {
  return (
    <>
      <Directory categories={categories} />
      <Outlet />
    </>
  );
};

export default Home;
