import React from 'react'
import { FaArrowDown } from "react-icons/fa6";
import { useState } from 'react';

const ButtonClassroom = () => {

    const [Level, setLevel] = useState(0);
    console.log(Level);

    const handleClick = () => {
        const targetElement = document.getElementById('classroom');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button className="btn-classroom-pick bg-transparent text-black text-[9px] sm:text-[12px] w-[70px] h-[45px] sm:w-[100px] sm:h-[60px] flex flex-col items-center justify-center gap-1" onClick={handleClick}>
            KLICKA MIG
            <FaArrowDown />
        </button>
    )
}

export default ButtonClassroom