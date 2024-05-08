import React from 'react'

const Sidebar = ({ open, setOpen }) => {

    return (
        <div className={`fixed sm:static top-0 left-0 bg-slate-700 h-full border-white border ${open ? "w-80" : "w-0 hidden"} z-10  sm:w-52 md:w-80 `}>
            sidebar desktop
        </div>
    )
}

export default Sidebar