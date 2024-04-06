import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { StyledHeaderContainer } from "./Header.styled";
import icons from "../images/icons.svg";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthIsSignedIn,
  selectAuthUserData,
} from "../redux/auth/auth.selectors";
import { logoutUser } from "../redux/auth/authThunk";

const Header = ({ isHomePage }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const isSignedId = useSelector(selectAuthIsSignedIn);
  const user = useSelector(selectAuthUserData);
  const dispatch = useDispatch();

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
    document.body.classList.add("modal-open");
  };
  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
    document.body.classList.add("modal-open");
  };
  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
    document.body.classList.remove("modal-open");
  };
  const logOut = () => {
    dispatch(logoutUser());
  };
  return (
    <StyledHeaderContainer
      className={isHomePage ? "transparentHeader" : "greenHeader"}
    >
      <nav className="navContainer">
        <div className="logoContainer">
          <NavLink className="logo" to="home">
            <p className="logoText">Nanny.Services</p>
          </NavLink>
        </div>
        <div className="sectionContainer">
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/nanny">
            Nanny
          </NavLink>
          {!isHomePage && isSignedId && (
            <NavLink className="link" to="/favorites">
              Favorites
            </NavLink>
          )}
        </div>
        <div className={`authWrapper ${isSignedId ? "userWrapper" : ""}`}>
          {!isSignedId ? (
            <>
              {" "}
              <button
                onClick={() => {
                  handleOpenLoginModal();
                }}
                className="loginBtn"
              >
                Login
              </button>
              <button
                onClick={() => {
                  handleOpenRegisterModal();
                }}
                className="registerBtn"
              >
                Register
              </button>
            </>
          ) : (
            <>
              <div className="usernameWrapper">
                <div className="userIconWrapper">
                  <svg className="userIcon" width="24" height="24">
                    <use href={icons + "#icon-user"}></use>
                  </svg>
                </div>
                <p className="userName">{user.name.split(" ")[0]}</p>
              </div>
              <button className="logoutBtn" onClick={logOut}>
                Log out
              </button>
            </>
          )}
          {isLoginModalOpen && <LoginModal onClose={handleCloseLoginModal} />}
          {isRegisterModalOpen && (
            <RegisterModal onClose={handleCloseRegisterModal}></RegisterModal>
          )}
        </div>
      </nav>
    </StyledHeaderContainer>
  );
};

export default Header;
