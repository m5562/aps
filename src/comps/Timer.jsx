import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(new Date());
  useeffect




  return (
    <>
      <div>timer: {time.toLocaleTimeString()}</div>
    </>
  );
};
export default Timer;
