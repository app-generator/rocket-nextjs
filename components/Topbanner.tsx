"use client";

import { useState } from "react";

const Topbanner = () => {
    const [show, setShow] = useState(true)
    return (
        <div className={`${show ? 'flex' : 'hidden'} text-center relative pl-4 pr-7 sm:text-base text-sm left-0 top-0 bg-[#d8e6fd] h-12 z-10 w-full text-black text-center font-[500] items-center justify-center`}>
            <img
                alt="Logo"
                className="mr-3 h-4"
                src="/Logo.png"
            />
            Rocket provides you with the boilerplate code you need to launch, FAST.
            <button className="absolute right-2 text-2xl top-1" onClick={() => setShow(false)}>&times;</button>
        </div>
    )
}

export default Topbanner;