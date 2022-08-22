import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./style.module.css";

// import data from "../../balance_data.json";
export default function Index({ balance }) {
  return (
    <div className={style.main}>
      <div className={style.balance}>{balance.amount}</div>
      <div className={style.currency}>{balance.currency}</div>
    </div>
  );
}
