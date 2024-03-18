"use client";
import React, { useState } from "react";
import Sidebar from "../ui/dashboard/Sidebar/Sidebar";
import styles from "../ui/dashboard/dashboard.module.css";

const DashboardLayout = ({ children }) => {
  const { sidebarOpen, setSidebarOpen } = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      <div className={styles.content}>
        {/* <Navbar/> */}
        {children}
        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default DashboardLayout;
