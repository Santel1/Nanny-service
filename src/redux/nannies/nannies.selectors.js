import { createSelector } from "@reduxjs/toolkit";

const selectNannies = (state) => state.nanny;

export const selectAllNannies = createSelector(
  selectNannies,
  (nanny) => nanny.nannies
);

export const selectNanniesIsLoading = createSelector(
  selectNannies,
  (nanny) => nanny.isLoading
);

export const selectNannyiesFavorites = createSelector(
  selectNannies,
  (nanny) => nanny.favorites
);

export const selectNannyiesFilter = createSelector(
  selectNannies,
  (nanny) => nanny.selectedFilter
);
