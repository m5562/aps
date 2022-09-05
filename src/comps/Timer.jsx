import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [time, settime] = useState(new Date());

  useEffect(() => {
    function changetime() {}
    changetime();
  }, []);

  return (
    <>
      <div>{console.log(time)}</div>
    </>
  );
};
export default Timer;
