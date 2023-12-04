"use client";

const Topbanner = () => {
    return (
        <div className="px-4 sm:text-base text-sm left-0 top-0 bg-[#d8e6fd] h-12 z-10 w-full text-black text-center font-[500] flex items-center justify-center">
            <img
                alt="Logo"
                className="mr-3 h-4"
                src="/Logo.png"
            />
            Rocket provides you with the boilerplate code you need to launch, FAST.
        </div>
    )
}

export default Topbanner;