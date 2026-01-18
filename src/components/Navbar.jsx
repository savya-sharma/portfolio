import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState('');
  const menuBtnRef = useRef(null);
  const menuLinksRef = useRef([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
      const colon = (now.getSeconds() % 2 === 0) ? ':' : ' ';
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
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15
      });
      setIsMenuOpen(true);
    } else {
      // Close menu
      gsap.to(menuLinksRef.current, {
        x: 0,
        autoAlpha: 0,
        duration: 1.2,
        ease: "power4.in",
        stagger: {
          each: 0.15,
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

  return (
    <>
      {/* Side Menu Button and Links */}
      <div className="flex flex-col items-start gap-3">
        <button
          ref={menuBtnRef}
          onClick={handleMenuToggle}
          className="menuBtn z-[100] fixed cursor-pointer -left-4 top-[25%] md:top-[45%] -rotate-90 bg-black text-white px-7 sm:px-10 py-2 sm:py-2 text-[1.05em] sm:text-[1.3em] border-none outline-none"
        >
          <h2 className="flex items-center gap-3 pointer-events-none">
            studio
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff"
              style={{ width: '1em', height: '2em', display: 'inline' }}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
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
      <nav className="bar fixed z-10 md:flex justify-between items-center top-0 left-0 w-full py-4 px-4 md:px-6 sm:px-13">
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

