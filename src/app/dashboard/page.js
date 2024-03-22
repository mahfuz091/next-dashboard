import React from "react";
import styles from "../ui/dashboard/dashboard.module.css";
import Chart from "../ui/dashboard/Chart/Chart";
import { cards } from "../../lib/data";
import Card from "../../Component/Card/Card";

const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        {/* <Transactions /> */}
        <Chart />
      </div>
      <div className={styles.side}>{/* <Rightbar /> */}</div>
    </div>
  );
};

export default DashboardPage;
