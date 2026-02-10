import React, { useEffect, useRef, useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import gsap from 'gsap';
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {

    const menuRef = useRef();
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (menuOpen) {
            gsap.to(menuRef.current, {
                height: 0,
                duration: 0.3,
                ease: 'power2.inOut'
            });
            setMenuOpen(false);
        }
    }, [location.pathname]);

    function handleClick() {
        if (!menuOpen) {
            gsap.to(menuRef.current, {
                height: '18rem',
                duration: 0.5,
                ease: 'power2.inOut'
            });
            setMenuOpen(true);
        } else {
            gsap.to(menuRef.current, {
                height: 0,
                duration: 0.3, // Closing is fast
                ease: 'power2.inOut'
            });
            setMenuOpen(false);
        }
    }

    return (
        <section className='relative z-[12]'>
            <div>
                <nav className='fixed top-0 left-0 w-full flex items-start justify-between px-4 py-2'>
                    <h1 className='md:text-[2vw] text-[5vw]'>
                        <Link to="/" className="">savya.studio</Link>
                    </h1>

                    <div>
                        <div className="flex items-center justify-end m-0 p-0">
                            <button
                                onClick={handleClick}
                                aria-label={menuOpen ? "Close menu" : "Open menu"}
                                className="cursor-pointer  outline-none border-none bg-transparent focus-visible:ring-2"
                                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="black"
                                    viewBox="0 0 103 103"
                                    width="60"
                                    height="60"
                                    style={{ transition: "0.4s" }}
                                >
                                    <path d="M103 94V9a9 9 0 0 1-9-9H9a9 9 0 0 1-9 9v85a9 9 0 0 1 9 9h85a9 9 0 0 1 9-9Z"></path>
                                    {/* Animated Menu/X Lines */}
                                    <rect
                                        x="26"
                                        y="38"
                                        width="51"
                                        height="2"
                                        rx="2"
                                        fill="white"
                                        style={{
                                            transition: "transform 0.4s cubic-bezier(.87,-0.41,.19,1.44), opacity 0.4s",
                                            transformOrigin: "51.5px 52px",
                                            transform: menuOpen
                                                ? "translateY(13px) rotate(45deg)"
                                                : "none",
                                            opacity: 1
                                        }}
                                    />
                                    <rect
                                        x="26"
                                        y="51"
                                        width="51"
                                        height="2"
                                        rx="2"
                                        fill="white"
                                        style={{
                                            transition: "opacity 0.25s",
                                            opacity: menuOpen ? 0 : 1
                                        }}
                                    />
                                    <rect
                                        x="26"
                                        y="64"
                                        width="51"
                                        height="2"
                                        rx="2"
                                        fill="white"
                                        style={{
                                            transition: "transform 0.4s cubic-bezier(.87,-0.41,.19,1.44), opacity 0.4s",
                                            transformOrigin: "51.5px 52px",
                                            transform: menuOpen
                                                ? "translateY(-13px) rotate(-45deg)"
                                                : "none",
                                            opacity: 1
                                        }}
                                    />
                                </svg>
                            </button>
                        </div>

                        <div ref={menuRef} className='w-full relative h-[0rem] bg-black text-white overflow-hidden transition-all duration-500'>
                            <nav className='flex flex-col gap-1 text-[1.7rem] pb-1 border-b border-dashed border-gray-500'>
                                <ul className='flex flex-col px-3 py-3'>
                                    <li>
                                        <Link className='cursor-pointer' to="/work">Work</Link>
                                    </li>
                                    <li>
                                        <Link className='cursor-pointer' to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link className='cursor-pointer' to="/play">Play</Link>
                                    </li>
                                </ul>
                            </nav>

                            <nav className='border-b border-dashed border-gray-500'>
                                <ul className='flex gap-5 px-3 py-5 text-[1.7rem]'>
                                    <li>
                                        <a href="https://www.instagram.com/1.savya/" target="_blank" rel="noopener noreferrer">
                                            <FaInstagram />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/savya-sharma-5641072a3/" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedinIn />
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                            <nav>
                                <ul className='py-5 px-3 text-[.8rem]'>
                                    <li>&copy; {new Date().getFullYear()} SAVYASTUDIO</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
}

export default Menu;