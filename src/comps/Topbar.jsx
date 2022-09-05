import React, { useState, useEffect, useRef } from 'react';

   const Timer = () =>{
    const [hh, setHH] = useState(00);
    const [mm, setMM] = useState(00);
    const [ss, setSS] = useState(00);


    return (
    <>
        <div>timer: {hh}:{mm}:{ss}</div>
    </>
    );
};
export default Timer;