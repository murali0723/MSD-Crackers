import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Search = ({ CartItem }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width logo_wid">
            <Link to="/">
              <img src="/images/logo.png" alt="" width="10px" />
            </Link>
          </div>

          <Navbar />

          <div className="icon f_flex width">
            <Link to="/login">
              <button className="icon-circle-w">Login</button>
            </Link>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
