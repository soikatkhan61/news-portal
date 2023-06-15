"use client"
import React, { useState, useEffect } from 'react';
type Props = {
    time: number
}
const RealTimeClock = ({time:initial}:Props) => {
  const [time, setTime] = useState(new Date(initial));

  useEffect(() => {
    const interval = setInterval(() => {
        setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {time.toLocaleTimeString()}
    </div>
  );
};

export default RealTimeClock;
