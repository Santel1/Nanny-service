import React, { useState } from "react";
import {
  FilterButton,
  FilterItem,
  FilterList,
  FilterWrapper,
  StyledFilterContainer,
} from "./Filter.styled";
import icons from "../images/icons.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectNannyiesFilter } from "../redux/nannies/nannies.selectors";
import { changeFilter } from "../redux/nannies/nanniesSlice";

const Filter = () => {
  const selectedFilter = useSelector(selectNannyiesFilter);

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const filters = [
    { label: "A to Z", value: "AtoZ" },
    { label: "Z to A", value: "ZtoA" },
    { label: "$10 or less", value: "LessThan10" },
    { label: "$10 or more", value: "GreaterThan10" },
    { label: "Popular", value: "Popular" },
    { label: "Not Popular", value: "NotPopular" },
    { label: "Show All", value: "ShowAll" },
  ];

  const handleFilterClick = (value) => {
    dispatch(changeFilter(value));
    setIsOpen(false);
  };

  return (
    <StyledFilterContainer>
      <p className="filterText">Filters</p>
      <FilterWrapper>
        <FilterButton onClick={() => setIsOpen(!isOpen)}>
          {selectedFilter
            ? filters.find((filter) => filter.value === selectedFilter).label
            : "A to Z"}
          <svg className="filterIcon" width="20" height="20">
            <use
              href={
                isOpen ? icons + "#icon-arrow-up" : icons + "#icon-arrow-down"
              }
            ></use>
          </svg>
        </FilterButton>
        {isOpen && (
          <FilterList>
            {filters.map((filter) => (
              <FilterItem
                key={filter.value}
                onClick={() => handleFilterClick(filter.value)}
              >
                {filter.label}
              </FilterItem>
            ))}
          </FilterList>
        )}
      </FilterWrapper>
    </StyledFilterContainer>
  );
};

export default Filter;
