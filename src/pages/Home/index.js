import React from "react";
import "./index.scss";
import Header from "./components/Header";
import TabPanel from "./components/TabPanel";
import Banner from "./components/Banner";

const HomePage = () => {
  return (
    <>
      <Header />
      <TabPanel />
      <Banner />
    </>
  );
};

export default HomePage;
