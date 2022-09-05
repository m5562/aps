import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(new Date());
  useEffect(()=>{
    setInterval(setTime(new Date()), 1000)
  })




  return (
      <div>timer: {time.toLocaleTimeString()}</div>
  );
};
export default Timer;
