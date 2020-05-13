import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from 'react-icons/fa'
import '../styles/NavItem.css'

const NavItem = ({ text, href, subNav }) => {
    const [open, setOpen] = useState(false)
    const toggleItem = () => setOpen(!open)
    return (
        <div className="sidenav">
            {!subNav &&<NavLink to={href}>
                <a>{text}</a>
            </NavLink>}
            {subNav && <div onClick={toggleItem}>{text}<FaChevronRight /></div>}
            {subNav && subNav.length > 0 && open && <div>
                {subNav.map((link) => (
                    <NavLink href={link.href} key={link.text}><a>{link.text}</a></NavLink>
                ))}
            </div>}
            <style jsx>{`

        `}</style>
        </div>
    )
}

export default NavItem;