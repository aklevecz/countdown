import React, { useEffect, useState } from "react";
import _ from "lodash";
import { addLeadingZeros, calculateCountdown } from "../utils";
import CountdownItem from "./CountdownItem";
import LoadingSpinner from "./LoadingSpinner";

const COUNT_INTERVAL_MS = 1000;

export default function Countdown({ date }) {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = calculateCountdown(date);
      setCountdown(newDate);
    }, COUNT_INTERVAL_MS);

    return () => {
      clearInterval(interval);
    };
  }, [date]);
  if (!countdown) {
    return <LoadingSpinner />;
  }
  return (
    <div className="Countdown">
      {Object.keys(countdown)
        .filter((key) => countdown[key])
        .map((key) => (
          <CountdownItem
            key={key}
            title={
              countdown[key] === 1
                ? _.startCase(key.slice(0, -1))
                : _.startCase(key)
            }
            count={addLeadingZeros(countdown[key])}
          />
        ))}
    </div>
  );
}
