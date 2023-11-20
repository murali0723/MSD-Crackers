import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Categories from "../../components/mainPage/Categories";

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const categoriesRef = useRef(null);

  const handleCategoriesClick = () => {
    setShowCategories(!showCategories);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target)
      ) {
        setShowCategories(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div
            className="catgrories d_flex"
            ref={categoriesRef}
            onClick={handleCategoriesClick}
          >
            <span class="fa-solid fa-border-all"></span>
            <h4>
              Categories <i className="fa fa-chevron-down"></i>
            </h4>
          </div>
          {showCategories && <Categories />}
          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              {/* <ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'> */}
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/crackers-data">Crackers Data</Link>
              </li>
              <li>
                <Link to="/crackers-stack">Crackers Stack</Link>
              </li>
              <li>
                <Link to="/shops">Shops</Link>
              </li>
              { <li>
                <Link to="/admin"></Link>
              </li> }
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
