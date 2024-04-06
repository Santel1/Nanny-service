import React, { useState } from "react";
import { useSelector } from "react-redux";
import NannyList from "../components/NannyList";
import { selectNannyiesFavorites } from "../redux/nannies/nannies.selectors";
import { StyledFavoritePage } from "./FavoritesPage.styled";
import Filter from "../components/Filter";

const FavoritesPage = () => {
  const data = useSelector(selectNannyiesFavorites);
  const [appointmentModal, setAppointmentModal] = useState(false);

  return (
    <StyledFavoritePage>
      <Filter />
      <NannyList
        nannies={data}
        appointmentModal={appointmentModal}
        setAppointmentModal={setAppointmentModal}
      />
    </StyledFavoritePage>
  );
};

export default FavoritesPage;
