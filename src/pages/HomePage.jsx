import React, { useEffect, useState } from "react";
import { HomePageStyled } from "./HomePage.styled";
import bgcImg from "../images/homeimg.jpg";
import icons from "../images/icons.svg";
import RegisterModal from "../components/RegisterModal";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthIsSignedIn } from "../redux/auth/auth.selectors";
import {
  selectAllNannies,
  selectNanniesIsLoading,
} from "../redux/nannies/nannies.selectors";
import { Loader } from "../components/Loader";
import { fetchData } from "../redux/nannies/nanniesThunk";

const HomePage = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const isLoading = useSelector(selectNanniesIsLoading);
  const dispatch = useDispatch();
  const isLoggined = useSelector(selectAuthIsSignedIn);
  const nannies = useSelector(selectAllNannies);

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <HomePageStyled>
      {isLoading && <Loader color={"#fff"} />}
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
            {isLoading ? (
              <p className="infoNumber">
                <Loader className="infoLoader" width={25} />
              </p>
            ) : (
              <p className="infoNumber">{11000 + nannies.length}</p>
            )}
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
