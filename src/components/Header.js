import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ currentUser, logout }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <Nav>
        <NavItem>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/recycleindex" className="nav-link">
            View Current Items For Sale
          </NavLink>
        </NavItem>

        {currentUser && (
          <>
            <NavItem>
              <NavLink to="/myrecycles" className="nav-link">
                My Listings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/recyclenew" className="nav-link">
                Add Your Item For Sale
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="nav-link" onClick={handleClick}>
                Log Out
              </NavLink>
            </NavItem>
          </>
        )}

        {!currentUser && (
          <>
            <NavItem>
              <NavLink to="/signin" className="nav-link">
                Sign In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup" className="nav-link">
                Sign Up
              </NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </>
  );
};

export default Header;
