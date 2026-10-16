import React from 'react'
import { FaArrowDown } from "react-icons/fa6";
import { useState } from 'react';


// knapp komponenet för alla delar som är interaktiv för kartan
const ButtonClassroom = ({ id, style, onClick, children }) => {
    return (
        <button
            id={id}
            type="button"
            style={style}
            onClick={onClick}
            className="z-10 rounded-full px-3 py-2 bg-pink-500 text-white font-bold hover:scale-110 transition-transform"
        >
            {children}
        </button>
    )
}

export default ButtonClassroom