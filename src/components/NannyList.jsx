import React, { useState } from "react";
import { StyledNannyContainer } from "./NannyList.styled";
import icons from "../images/icons.svg";
import { selectAuthIsSignedIn } from "../redux/auth/auth.selectors";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  selectNannyiesFavorites,
  selectNannyiesFilter,
} from "../redux/nannies/nannies.selectors";
import { addFavorites, deleteFavorites } from "../redux/nannies/nanniesSlice";
import AppointmentModal from "./AppointmentModal";

const NannyList = ({
  nannies,
  appointmentModal,
  handleOpenAppointmentModal,
  handleCloseAppointmentModal,
}) => {
  const [selectedCardId, setSelectedCardId] = useState(null);
  const selectedFilter = useSelector(selectNannyiesFilter);
  const isLoggined = useSelector(selectAuthIsSignedIn);
  const favorites = useSelector(selectNannyiesFavorites);
  const [loadedNanniesCount, setLoadedNanniesCount] = useState(3);

  const dispatch = useDispatch();

  const sortNannies = (nannies, filter) => {
    if (!nannies) return null;

    switch (filter) {
      case "AtoZ":
        return nannies.slice().sort((a, b) => a.name.localeCompare(b.name));
      case "ZtoA":
        return nannies.slice().sort((a, b) => b.name.localeCompare(a.name));
      case "LessThan10":
        return nannies
          .slice()
          .filter((nanny) => nanny.price_per_hour <= 10)
          .sort((a, b) => b.price_per_hour - a.price_per_hour);
      case "GreaterThan10":
        return nannies
          .slice()
          .filter((nanny) => nanny.price_per_hour > 10)
          .sort((a, b) => a.price_per_hour - b.price_per_hour);
      case "Popular":
        return nannies.slice().sort((a, b) => b.rating - a.rating);
      case "NotPopular":
        return nannies.slice().sort((a, b) => a.rating - b.rating);
      case "ShowAll":
        return nannies;
      default:
        return nannies;
    }
  };

  const sortedNannies = sortNannies(nannies, selectedFilter).slice(
    0,
    loadedNanniesCount
  );

  const addToFavorites = (data) => {
    if (!isLoggined) {
      return toast.error("You must be authorized");
    }
    if (favorites.some((favorite) => favorite.id === data.id)) {
      dispatch(deleteFavorites(data));
      return;
    }
    dispatch(addFavorites(data));
  };

  const calculateAge = (birthdate) => {
    const birthday = new Date(birthdate);
    const today = new Date();
    const diff = today - birthday;
    const ageDate = new Date(diff);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return age;
  };
  const handleLoadMore = () => {
    setLoadedNanniesCount(loadedNanniesCount + 3);
  };

  return (
    <StyledNannyContainer>
      <ul className="nannyList">
        {sortedNannies !== null && sortedNannies.length > 0 ? (
          sortedNannies.map((nanny) => {
            return (
              nanny !== undefined && (
                <li key={nanny.id} className="nannyListItem">
                  <div className="nannyImgWrapper">
                    <img className="nannyImg" src={nanny.avatar_url} alt="" />
                  </div>
                  <div className="wrapper">
                    <div className="nannyInfo">
                      <p className="profession">Nanny</p>
                      <div className="nannySectionWrapper">
                        <p className="nannyLocation">
                          <svg className="locationIco" width="16" height="16">
                            <use href={icons + "#icon-map"}></use>
                          </svg>
                          {nanny.location}
                        </p>
                        <p className="nannyRating">
                          <svg className="ratingIco" width="16" height="16">
                            <use href={icons + "#icon-star"}></use>
                          </svg>{" "}
                          Rating:&nbsp;{nanny.rating}
                        </p>
                        <p className="nannyPrice">
                          Price/1 hour:&nbsp;
                          <span className="nannyStyledPrice">{`${nanny.price_per_hour}$`}</span>
                        </p>
                        <button
                          className="favoriteNannyBtn"
                          onClick={() => {
                            addToFavorites(nanny);
                          }}
                        >
                          <svg
                            className={
                              favorites.some(
                                (favorite) => favorite.id === nanny.id
                              )
                                ? "active"
                                : "iconHeart"
                            }
                            width="26"
                            height="26"
                          >
                            <use href={icons + "#icon-heart"}></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="nannyName">{nanny.name}</p>
                    <div className="nannyBio">
                      <p className="nannyAge">
                        Age:&nbsp;
                        <span className="styledSpan age">
                          {calculateAge(nanny.birthday)}
                        </span>
                      </p>
                      <p className="nannyExperience">
                        Experience:&nbsp;
                        <span className="styledSpan">{nanny.experience}</span>
                      </p>
                      <p className="nannyKidsAge">
                        Kids Age:&nbsp;
                        <span className="styledSpan">{nanny.kids_age}</span>
                      </p>
                      <p className="nannyCharakters">
                        Charakters:&nbsp;
                        <span className="styledSpan">
                          {nanny.characters
                            .map(
                              (character) =>
                                character.charAt(0).toUpperCase() +
                                character.slice(1)
                            )
                            .join(", ")}
                        </span>
                      </p>
                      <p className="nannyEducation">
                        Education:&nbsp;
                        <span className="styledSpan">{nanny.education}</span>
                      </p>
                    </div>
                    <p className="nannyAbout">{nanny.about}</p>
                    {selectedCardId !== nanny.id && (
                      <button
                        className="readMoreBtn"
                        onClick={() =>
                          setSelectedCardId(
                            selectedCardId === nanny.id ? null : nanny.id
                          )
                        }
                      >
                        Read More
                      </button>
                    )}
                    {appointmentModal && selectedCardId === nanny.id && (
                      <AppointmentModal
                        nanny={nanny}
                        onClose={handleCloseAppointmentModal}
                      />
                    )}
                    {selectedCardId === nanny.id && (
                      <div className="nannyCommentSection">
                        <ul className="reviewsList">
                          {nanny.reviews.length !== 0 &&
                            nanny.reviews.map(
                              ({ reviewer, rating, comment }, index) => {
                                return (
                                  <li key={index} className="rewiewsListItem">
                                    <div className="userWrapper">
                                      <div className="iconUser">
                                        <p>{reviewer[0]}</p>
                                      </div>
                                      <p className="userName">
                                        {reviewer}
                                        <span className="userRating">
                                          <svg
                                            className=""
                                            width="16"
                                            height="16"
                                          >
                                            <use
                                              href={icons + "#icon-star"}
                                            ></use>
                                          </svg>
                                          {rating}
                                        </span>
                                      </p>
                                    </div>
                                    <p className="commentText">{comment}</p>
                                  </li>
                                );
                              }
                            )}
                        </ul>
                        <button
                          onClick={handleOpenAppointmentModal}
                          className="appointmentBtn"
                        >
                          Make an appointment
                        </button>
                      </div>
                    )}
                  </div>
                </li>
              )
            );
          })
        ) : (
          <>
            <p className="filterErrorText">
              Unfortunately, there are no nannies that match the specified
              filter criteria.
            </p>
          </>
        )}
      </ul>
      <div className="loadMoreWrapper">
        {loadedNanniesCount < sortNannies(nannies, selectedFilter).length && (
          <button className="loadMoreBtn" onClick={handleLoadMore}>
            Load more
          </button>
        )}
      </div>
    </StyledNannyContainer>
  );
};

export default NannyList;
