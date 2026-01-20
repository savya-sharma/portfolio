import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState('');
  const menuBtnRef = useRef(null);
  const menuLinksRef = useRef([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const barRef = useRef(null);


  // Initialize menu links to be hidden
  useEffect(() => {
    if (menuLinksRef.current.length > 0) {
      gsap.set(menuLinksRef.current, {
        x: 0,
        autoAlpha: 0
      });
    }
  }, []);

  // Update current time
  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const pad = (n) => n.toString().padStart(2, '0');
      const h = pad(now.getHours());
      const m = pad(now.getMinutes());
      const s = pad(now.getSeconds());
      const colon = ':';
      setCurrentTime(`${h} ${colon} ${m} ${colon} ${s}  IST`);
    };

    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle menu toggle
  const handleMenuToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log('Menu toggle clicked, current state:', isMenuOpen);

    if (!isMenuOpen) {
      // Open menu
      gsap.to(menuLinksRef.current, {
        x: 60,
        autoAlpha: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.15
      });
      setIsMenuOpen(true);
    } else {
      // Close menu
      gsap.to(menuLinksRef.current, {
        x: 0,
        autoAlpha: 0,
        duration: .8,
        ease: "power4.in",
        stagger: {
          each: 0.10,
          from: "end"
        }
      });
      setIsMenuOpen(false);
    }
  };

  // Smooth scroll to section (for Work link on home page)
  const handleWorkClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const page3 = document.querySelector('.page3');
      if (page3) {
        page3.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Close menu after click
    if (isMenuOpen) {
      handleMenuToggle();
    }
  };


  // bar

  useEffect(() => {
    if (!barRef?.current) return;

    const moveBar = (offset) => {
      gsap.to(barRef.current, {
        y: offset,
        duration: 1,
        ease: "power2.out"
      });
    };

    const handleMouseDown = () => moveBar(-60);
    const handleMouseUp = () => moveBar(0);

    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        gsap.to(barRef.current, {
          y: -66,
          duration: 1,
          ease: 'black.out'
        });
      } else if (e.deltaY < 0) {
        gsap.to(barRef.current, {
          y: 0,
          duration: 1,
          ease: 'black.out'
        });
      }
    };


    const barElem = barRef.current;
    barElem.addEventListener("mousedown", handleMouseDown);
    barElem.addEventListener("mouseup", handleMouseUp);
    barElem.addEventListener("mouseleave", handleMouseUp);
    barElem.addEventListener("touchstart", handleMouseDown);
    barElem.addEventListener("touchend", handleMouseUp);

    window.addEventListener("wheel", handleWheel);

    // Cleanup
    return () => {
      barElem.removeEventListener("mousedown", handleMouseDown);
      barElem.removeEventListener("mouseup", handleMouseUp);
      barElem.removeEventListener("mouseleave", handleMouseUp);
      barElem.removeEventListener("touchstart", handleMouseDown);
      barElem.removeEventListener("touchend", handleMouseUp);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [barRef]);


  return (
    <>
      {/* Side Menu Button and Links */}
      <div className="flex flex-col items-start gap-3">
        <button
          ref={menuBtnRef}
          onClick={handleMenuToggle}
          className="menuBtn z-[100] fixed cursor-pointer -left-8 top-[25%] md:top-[45%] -rotate-90 bg-black text-white px-7 sm:px-10 py-2 sm:py-2 text-[1.05em] sm:text-[1.3em] border-none outline-none"
        >
          <h2 className="flex items-center gap-3 pointer-events-none">
            studio
            <svg xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-5 sm:h-5"
              fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>

          </h2>
        </button>
        <nav
          className="menu flex flex-col text-[.8em] sm:text-[.85em] text-center gap-1.5 sm:gap-2 text-white fixed top-[22%] md:top-[42%] left-8 sm:left-12 z-[90]"
        >
          <a
            ref={(el) => (menuLinksRef.current[0] = el)}
            className="bg-black px-[.1em] py-[.3em] sm:px-[.5em] sm:py-[.5em] cursor-pointer"
            href="#"
            onClick={handleWorkClick}
          >
            Work
          </a>
          <Link
            ref={(el) => (menuLinksRef.current[1] = el)}
            className="bg-black px-[.1em] py-[.3em] sm:px-[.5em] sm:py-[.5em] cursor-pointer"
            to="/about"
            onClick={() => isMenuOpen && handleMenuToggle()}
          >
            About
          </Link>
          <Link
            ref={(el) => (menuLinksRef.current[2] = el)}
            className="bg-black px-[.1em] py-[.3em] sm:px-[.5em] sm:py-[.5em] cursor-pointer"
            to="/play"
            onClick={() => isMenuOpen && handleMenuToggle()}
          >
            Play
          </Link>
        </nav>
      </div>

      {/* Top Bar */}
      <nav
        ref={barRef}
        className="bar fixed z-10 md:flex justify-between items-center top-0 left-0 w-full py-4 px-4 md:px-6 sm:px-13 bg-white/20 shadow-[0_4px_24px_0_rgba(31,38,135,0.12)] backdrop-blur-md border border-white/30"
      >
        <h3 className="text-[1.5em] sm:text-[1.4em]">savya.studio</h3>
        <div className="flex text-[.98em] sm:text-[1.1em] items-center gap-3 sm:gap-5">
          <div className="time text-[#F45E2B]">{currentTime}</div>
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="block w-[.55em] h-[.55em] sm:w-[.6em] sm:h-[.6em] bg-[#F45E2B] rounded-full"></span>
            <span className="xs:inline">Open to work</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

