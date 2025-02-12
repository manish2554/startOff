import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
const NavSignUp = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const usrname = () => {
    return <span>Username need to edit</span>;
  };
  const usr = () => {
    //condition here for user type; client consumer & admin ... financer

    switch (5) {
      case 1:
        return "Client";
      case 2:
        return "admin";
      case 3:
        return "financer";
      default:
        return "Consumer";
    }
  };

  const cartoff = () => {
    if (usr() === "Consumer") {
      return <i className="fas fa-shopping-cart fa-2x"></i>;
    }
  };
  return (
    <div className="mx-3">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Dropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            className="nav-link"
            size="sm"
          >
            <DropdownToggle caret>
              <i className="fas fa-user fa-2x"></i>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>{usrname()}</DropdownItem>
              <DropdownItem>
                <NavLink to={"/Profile/" + usr()} className="nav-link">
                  <i class="fas fa-id-card"></i> Profile
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to={"/Setting/" + usr()} className="nav-link">
                  <i class="fas fa-user-cog"></i> Setting
                </NavLink>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <NavLink
                  to="/SignOut"
                  className="nav-link bg-danger btn text-light"
                >
                  Sign Out
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li className="nav-item">
          <NavLink className="p-3 ml-3 nav-link" to="/cart">
            {cartoff()}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavSignUp;
