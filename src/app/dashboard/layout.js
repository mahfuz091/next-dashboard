"use client";
import React, { useState } from "react";
import Sidebar from "../ui/dashboard/Sidebar/Sidebar";
import styles from "../ui/dashboard/dashboard.module.css";
import Navbar from "../ui/dashboard/Navbar/Navbar";

const DashboardLayout = ({ children }) => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div>
      <Navbar OpenSidebar={OpenSidebar} />
      <div className={styles.container}>
        <div
          className={
            openSidebarToggle
              ? `${styles.menu} ${styles.menuOpen}`
              : styles.menu
          }
        >
          <Sidebar />
        </div>
        <div className={styles.content}>
          {children}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
