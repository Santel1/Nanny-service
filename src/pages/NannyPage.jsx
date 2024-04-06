import React, { useEffect, useState } from "react";
import { StyledNannyPage } from "./NannyPage.styled";
import Filter from "../components/Filter";
import NannyList from "../components/NannyList";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/nannies/nanniesThunk";
import {
  selectAllNannies,
  selectNanniesIsLoading,
} from "../redux/nannies/nannies.selectors";
import { Loader } from "../components/Loader";
import TimePicker from "../components/Time";

const NannyPage = () => {
  const isLoading = useSelector(selectNanniesIsLoading);
  const [appointmentModal, setAppointmentModal] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(selectAllNannies);

  const handleOpenAppointmentModal = () => {
    setAppointmentModal(true);
    document.body.classList.add("modal-open");
  };
  const handleCloseAppointmentModal = () => {
    setAppointmentModal(false);
    document.body.classList.remove("modal-open");
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <StyledNannyPage>
      {isLoading && <Loader />}
      <Filter />
      <NannyList
        nannies={data}
        appointmentModal={appointmentModal}
        handleOpenAppointmentModal={handleOpenAppointmentModal}
        handleCloseAppointmentModal={handleCloseAppointmentModal}
      />
    </StyledNannyPage>
  );
};

export default NannyPage;
