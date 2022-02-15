import { useState, useEffect } from "react";

function Clock(props) {
  const timer = useNewTimer(new Date());

  return (
    <div>
      <h2>{timer.toLocaleTimeString()}</h2>
    </div>
  );
}

function useNewTimer(currentDate) {
  const [date, setDate] = useState(currentDate);

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return date;
}

export default Clock;
