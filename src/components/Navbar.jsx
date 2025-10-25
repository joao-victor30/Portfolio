import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Code, FolderOpen, Mail, Code2 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <Code2 size={22} className="logo-icon" />
                    Developer front-End
                </div>

                <div className={`nav-buttons ${menuOpen ? 'active' : ''}`}>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}
                        onClick={closeMenu}
                    >
                        <Home size={18} className="icon" />
                        <span>Home</span>
                    </NavLink>

                    <NavLink
                        to="/skills"
                        className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}
                        onClick={closeMenu}
                    >
                        <Code size={18} className="icon" />
                        <span>Skills</span>
                    </NavLink>

                    <NavLink
                        to="/projects"
                        className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}
                        onClick={closeMenu}
                    >
                        <FolderOpen size={18} className="icon" />
                        <span>Projects</span>
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}
                        onClick={closeMenu}
                    >
                        <Mail size={18} className="icon" />
                        <span>Contact</span>
                    </NavLink>
                </div>

                <div
                    className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
