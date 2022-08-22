import { useState, useEffect } from "react";
import axios from "axios";

import styles from "../styles/main.module.css";

import Head from "next/head";
import Balance from "../components/Balance";
import Chart from "../components/Chart";
import TimeRanges from "../components/TimeRanges";

import { filterData, getBalanceHistory } from "../modules/index";

const merchantName = "Merchant Foo";
const ranges = ["1D", "5D", "1M", "3M", "6M", "1Y"];
const statuses = ["BOOKED"];

export default function Home() {
  const [range, setRange] = useState("6M");
  const [data, setData] = useState([]);
  const [balance, setBalance] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [balanceHistory, setBalanceHistory] = useState([]);

  useEffect(() => {
    axios
      .get("/api/transactions")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/api/balance")
      .then((res) => {
        setBalance(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setTransactions(filterData(data, range, statuses));
  }, [range, data]);

  useEffect(() => {
    setBalanceHistory(getBalanceHistory(transactions, balance.amount));
  }, [transactions, balance]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Banxware Assessment</title>
        <meta
          name="description"
          content="A proposed solution for an assessment from Banxware for landing an internship"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>{merchantName}</h1>
        <Balance balance={balance} />
        <TimeRanges ranges={ranges} setRange={setRange} selectedRange={range} />
        <Chart balanceHistory={balanceHistory} />
      </main>
    </div>
  );
}
