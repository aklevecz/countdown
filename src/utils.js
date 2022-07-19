import { intervalToDuration } from "date-fns/esm";

export const addLeadingZeros = (value) => {
  value = String(value);
  while (value.length < 2) {
    value = "0" + value;
  }
  return value;
};

export const calculateCountdown = (endDate) => {
  const currentTime = new Date();
  const endTime = new Date(endDate);
  let duration = intervalToDuration({
    start: currentTime,
    end: endTime,
  });
  return duration;
};
