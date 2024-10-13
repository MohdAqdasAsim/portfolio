import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  // State to track if the menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Reference for the button too

  // Toggle function to open/close menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu state
  };

  // Close the menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close the menu only if clicked outside both the menu and the button
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) && 
        buttonRef.current && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener to detect clicks outside
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef, buttonRef]);


  return (
    <nav className="w-full h-16 flex flex-row items-center justify-between sm:justify-between md:justify-normal shadow-2xl bg-charcoalGray px-3">
      <span className="w-1/2 sm:w-1/2 md:w-1/4 h-full p-2">
        <Link to="/">
          <img
            src="/logo.svg"
            alt="logo"
            className="w-full h-full hover:filter hover:brightness-[1] hover:hue-rotate-60"
          />
        </Link>
      </span>

      <span className="w-4/5 h-full items-center justify-end gap-4 leading-loose hidden sm:hidden md:flex">
        <span className="h-full flex items-center justify-center p-1">
          <Link to="/about">
            <p className="text-xl text-softWhite hover:text-mintGreen">About</p>
          </Link>
        </span>

        <span className="h-full flex items-center justify-center p-1">
          <Link to="/projects">
            <p className="text-xl text-softWhite hover:text-mintGreen">
              Projects
            </p>
          </Link>
        </span>

        <span className="h-full flex items-center justify-center p-1">
          <Link to="/contact">
            <p className="text-xl text-softWhite hover:text-mintGreen">
              Contact
            </p>
          </Link>
        </span>

        <span className="h-full flex items-center justify-center p-1">
          <Link
            to="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-warmGold hover:border-mintGreen rounded-2xl px-3"
          >
            <p className="text-xl text-warmGold hover:text-mintGreen">Resume</p>
          </Link>
        </span>
      </span>

      {/* Menu Icon */}
      <span className="w-6 h-6 flex items-center justify-end gap-4 leading-loose sm:flex md:hidden z-50">
        <span className="h-full flex items-center justify-center p-1">
          {/* Toggle the menu when clicked */}
          <span onClick={toggleMenu}>
            <img
              src={isMenuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
              alt="menu-icon"
            />
          </span>
        </span>
      </span>

      {/* Sidebar menu */}
      {isMenuOpen && (
        <div
          ref={menuRef} // Reference for the sidebar
          className={`fixed top-0 right-0 h-full w-64 bg-charcoalGray text-white transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          {/* Menu content */}
          <ul className="p-4 space-y-4">
            <li>
              <Link className="text-softWhite hover:text-mintGreen" to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link className="text-softWhite hover:text-mintGreen" to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link className="text-softWhite hover:text-mintGreen" to="/projects" onClick={toggleMenu}>Projects</Link>
            </li>
            <li>
              <Link className="text-softWhite hover:text-mintGreen" to="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
