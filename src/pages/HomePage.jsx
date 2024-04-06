import React, { useState } from "react";
import { HomePageStyled } from "./HomePage.styled";
import bgcImg from "../images/homeimg.png";
import icons from "../images/icons.svg";
import RegisterModal from "../components/RegisterModal";
import { useSelector } from "react-redux";
import { selectAuthIsSignedIn } from "../redux/auth/auth.selectors";

const HomePage = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const isLoggined = useSelector(selectAuthIsSignedIn);

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  return (
    <HomePageStyled>
      <div className="homePageLeftSection">
        <div>
          <h1 className="homePageTitle">
            Make Life Easier <br /> for the Family:
          </h1>
          <h2 className="homePageSubtitle">
            Find Babysitters Online for All Occasions
          </h2>
          {!isLoggined && (
            <button
              onClick={() => {
                handleOpenRegisterModal();
              }}
              className="homePageBtn"
            >
              Get started
              <svg className="homePageIco" width="18" height="18">
                <use href={icons + "#icon-arrow"}></use>
              </svg>
            </button>
          )}
        </div>
      </div>
      <div className="homePageRightSection">
        <img className="homePageImg" src={bgcImg} alt="" />
        <div className="righSectionInfo">
          <div className="iconWrapper">
            <svg className="" width="30" height="30">
              <use href={icons + "#icon-check"}></use>
            </svg>
          </div>
          <div className="textWrapper">
            <p className="infoText">Experienced nannies</p>
            <p className="infoNumber">15,000</p>
          </div>
        </div>
      </div>
      {isRegisterModalOpen && (
        <RegisterModal
          onClose={() => setIsRegisterModalOpen(false)}
        ></RegisterModal>
      )}
    </HomePageStyled>
  );
};

export default HomePage;
