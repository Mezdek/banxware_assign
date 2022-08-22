import React from "react";
import style from "./style.module.css";

export default function Index({ setRange, ranges, selectedRange = "1D" }) {
  return (
    <div className={style.main}>
      {ranges.map((range, index) => (
        <div
          key={index}
          className={`${style.item} ${
            selectedRange === range && style.selected
          }`}
          onClick={() => {
            setRange(range);
          }}
        >
          {range}
        </div>
      ))}
    </div>
  );
}
