import React, { useState, useEffect, useRef } from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaChevronDown, FaClipboardList } from "react-icons/fa";
import BuyerNav from "./BuyerNav";
import TenantsNav from "./TenantsNav";
import PgHostel from "./PgHostel";
import NavModal from "./NavModal";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [planOpen, setPlanOpen] = useState(false);

  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
    const loadUser = () => {
      const data = localStorage.getItem("user");
      if (data) setUser(JSON.parse(data));
      else setUser(null);
    };

    loadUser();
    window.addEventListener("userLogin", loadUser);
    window.addEventListener("storage", loadUser);

    return () => {
      window.removeEventListener("userLogin", loadUser);
      window.removeEventListener("storage", loadUser);
    };
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setNavMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const [buyerOpen, setBuyerOpen] = useState(false);
  const [tenantOpen, setTenantOpen] = useState(false);
  const [pgOpen, setPgOpen] = useState(false);

  const closeTimer = useRef(null);

  const openBuyer = () => {
    clearTimeout(closeTimer.current);
    setBuyerOpen(true);
    setTenantOpen(false);
    setPgOpen(false);
  };

  const openTenant = () => {
    clearTimeout(closeTimer.current);
    setTenantOpen(true);
    setBuyerOpen(false);
    setPgOpen(false);
  };

  const openPg = () => {
    clearTimeout(closeTimer.current);
    setPgOpen(true);
    setBuyerOpen(false);
    setTenantOpen(false);
  };

  const closeAll = () => {
    closeTimer.current = setTimeout(() => {
      setBuyerOpen(false);
      setTenantOpen(false);
      setPgOpen(false);
    }, 200); // smooth delay
  };

  return (
    <div className="main">
      <div className="nav fixed top-0 left-0 w-full flex items-center justify-between px-5 py-2 border-b border-gray-200 bg-white z-50">
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="ml-0 sm:ml-0 md:ml-0 lg:ml-4 h-12 w-12 rounded-full bg-white shadow flex items-center justify-center overflow-hidden">
            <img
              src={assets.img}
              alt="logo"
              className="h-12 w-12 object-contain"
            />
          </div>
          <span className="text-lg  md:text-[17px] font-semibold text-teal-600">
            Iconic <span className="text-gray-700">Options</span>
          </span>
        </Link>

        <div
          className="md:hidden  text-2xl sm:text-3xl cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </div>

        <div
          className={`navbar absolute md:static top-20 left-0 w-full md:w-auto
  bg-white md:bg-transparent shadow-lg md:shadow-none
  transition-all duration-300 ease-in-out
  ${menuOpen ? "block" : "hidden md:block"}`}
        >
          <div
            className="relative"
            onMouseEnter={() => clearTimeout(closeTimer.current)}
            onMouseLeave={closeAll}
          >
            <ul
              className="flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-14 
      text-sm md:text-[15px] lg:text-base xl:text-lg 
      font-semibold text-gray-700 p-4 lg:p-0 relative"
            >
              <div className="absolute bottom-0 left-0 hidden md:block w-full">
                <div
                  className="absolute h-[2px] bg-teal-600 transition-all duration-300"
                  style={{
                    width: "33.33%",
                    left: buyerOpen
                      ? "0%"
                      : tenantOpen
                        ? "33.33%"
                        : pgOpen
                          ? "66.66%"
                          : "0%",
                    opacity: buyerOpen || tenantOpen || pgOpen ? 1 : 0,
                  }}
                />
              </div>

              <li
                className="cursor-pointer hover:text-teal-600"
                onMouseEnter={openBuyer}
                onClick={() => {
                  openBuyer();
                  setMenuOpen(false);
                }}
              >
                Buyer
              </li>

              <li
                className="cursor-pointer hover:text-teal-600"
                onMouseEnter={openTenant}
                onClick={() => {
                  openTenant();
                  setMenuOpen(false);
                }}
              >
                Tenants
              </li>

              <li
                className="cursor-pointer hover:text-teal-600"
                onMouseEnter={openPg}
                onClick={() => {
                  openPg();
                  setMenuOpen(false);
                }}
              >
                PG / Hostel
              </li>

              <li className="md:hidden border-t pt-4 space-y-3">
                <button
                  onClick={() => navigate("/postproperty")}
                  className="w-full bg-teal-600 text-white py-2 rounded-lg text-xs sm:text-sm font-semibold"
                >
                  Post Property
                </button>

                {user && (
                  <button
                    onClick={() => navigate("/subscription")}
                    className=" w-full bg-emerald-500 text-white py-2 rounded-lg text-xs sm:text-sm font-semibold"
                  >
                    My Plans
                  </button>
                )}

                {!user ? (
                  <>
                    <button
                      onClick={() => navigate("/signin")}
                      className="w-full border py-2 rounded-lg text-xs sm:text-sm"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => navigate("/signup")}
                      className="w-full bg-gray-800 text-white py-2 rounded-lg text-xs sm:text-sm"
                    >
                      Sign Up
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => navigate("/profile")}
                    className="w-full border py-2 rounded-lg text-xs sm:text-sm"
                  >
                    My Profile
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <button
            onClick={() => navigate("/postproperty")}
            className="block md:hidden lg:block relative group flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-semibold shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-110"
          >
            <span className="absolute inset-0 rounded-full border border-white/30 group-hover:blur-sm"></span>

            <span className="absolute -left-10 top-0 h-full w-10 bg-white/30 rotate-12 group-hover:translate-x-[150px] transition-all duration-700"></span>

            <span className="relative z-10 text-xs md:text-sm tracking-wide">
              Post Property
            </span>
          </button>

          {user && (
            <div>
              <button
                onClick={() => navigate("/subscription")}
                className=" md:hidden lg:hidden xl:block  relative group flex items-center gap-2 px-6 py-2 rounded-full
               bg-gradient-to-r from-teal-600 to-emerald-500
               text-white font-semibold shadow-md overflow-hidden
               transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <span className="absolute inset-0 rounded-full border border-white/25 group-hover:blur-sm"></span>

                <span
                  className="absolute -left-12 top-0 h-full w-10 bg-white/20 rotate-12 
                     group-hover:translate-x-[150px] transition-all duration-700"
                ></span>

                <span className=" relative z-10 text-xs md:text-sm tracking-wide">
                  My Plans
                </span>
              </button>
            </div>
          )}

          {!user ? (
            <div className="flex gap-4">
              <Link to="/signin">
                <button className="px-4 py-1.5 border rounded-full">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-4 py-1.5 bg-teal-600 text-white rounded-full">
                  Sign Up
                </button>
              </Link>
            </div>
          ) : (
            <div className="relative hidden md:block">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2"
              >
                <img src={user.photo} className="w-9 h-9 rounded-full border" />
                <span className="text-sm font-semibold">{user.name}</span>
                <FaChevronDown className="text-xs" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md">
                  <div
                    onClick={() => navigate("/profile")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Manage Profile
                  </div>
                  <div
                    onClick={() => navigate("/profile")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Change Password
                  </div>
                  <div
                    onClick={() => {
                      localStorage.removeItem("user");
                      window.dispatchEvent(new Event("userLogin"));
                      navigate("/");
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
                  >
                    Sign Out
                  </div>
                </div>
              )}
            </div>
          )}

          <div
            className="relative mr-3 sm:mr-0 md:mr-0 lg:mr-6 hidden md:block"
            ref={menuRef}
          >
            <button
              onClick={() => setNavMenuOpen(!navMenuOpen)}
              className="flex items-center gap-2 text-gray-700"
            >
              <FaBars />
              <span className="text-xs sm:text-sm lg:text-base font-semibold">
                Menu
              </span>
            </button>

            {navMenuOpen && (
              <div className="absolute right-0 mt-3 w-52 bg-white shadow-xl rounded-lg border z-50">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                  My Wishlist
                </div>

                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                  My Activity
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                  My Listing
                </div>

                <div
                  onClick={() => {
                    navigate("/postproperty");
                    setNavMenuOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  Post Your Property
                </div>
                <div className="relative">
                  <div
                    onClick={() => setPlanOpen(!planOpen)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm flex justify-between items-center"
                  >
                    My Subscription Plans
                    <FaChevronDown
                      className={`text-xs transition ${
                        planOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {planOpen && (
                    <div className="bg-white border-t">
                      <div
                        onClick={() => {
                          navigate("/buyer-plan");
                          setNavMenuOpen(false);
                        }}
                        className="px-6 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      >
                        Buyer Plan
                      </div>

                      <div
                        onClick={() => {
                          navigate("/tenant-plan");
                          setNavMenuOpen(false);
                        }}
                        className="px-6 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      >
                        Tenants Plan
                      </div>

                      <div
                        onClick={() => {
                          navigate("/commercial-plan");
                          setNavMenuOpen(false);
                        }}
                        className="px-6 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      >
                        Commercial Plan
                      </div>
                    </div>
                  )}
                </div>

                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                  Contact Us
                </div>
                <div className="px-4 py-2 text-xs text-gray-500 border-t">
                  Email: assist@iconicoptions.in
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {buyerOpen && (
        <div
          className="absolute top-[70px] left-0 w-full z-40"
          onMouseEnter={() => clearTimeout(closeTimer.current)}
          onMouseLeave={closeAll}
        >
          <NavModal>
            <BuyerNav />
          </NavModal>
        </div>
      )}

      {tenantOpen && (
        <div
          className="absolute top-[70px] left-0 w-full z-40"
          onMouseEnter={() => clearTimeout(closeTimer.current)}
          onMouseLeave={closeAll}
        >
          <NavModal>
            <TenantsNav />
          </NavModal>
        </div>
      )}

      {pgOpen && (
        <div
          className="absolute top-[70px] left-0 w-full z-40"
          onMouseEnter={() => clearTimeout(closeTimer.current)}
          onMouseLeave={closeAll}
        >
          <NavModal>
            <PgHostel />
          </NavModal>
        </div>
      )}
    </div>
  );
};

export default Nav;
