import styled from "styled-components";

export const StyledFilterContainer = styled.div`
  margin-bottom: 32px;
  .filterText {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    color: var(--secondary-color-grey);
    margin-bottom: 8px;
  }
`;

export const FilterWrapper = styled.div`
  position: relative;
`;

export const FilterButton = styled.button`
  display: flex;
  justify-content: space-between;
  border-radius: 14px;
  padding: 14px 18px;
  background-color: var(--primary-color-green);
  width: 226px;
  height: 48px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: var(--primary-color-white);
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  &:hover,
  :focus {
    color: var(--primary-color-green);
    background-color: var(--secondary-color-green);
  }
`;

export const FilterList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 12px;
  top: 56px;
  left: 0;
  z-index: 1;
  box-sizing: border-box;
  border-radius: 14px;
  padding: 14px 18px;
  width: 226px;
  box-shadow: 0 20px 69px 0 rgba(0, 0, 0, 0.07);
  background: var(--primary-color-white);
  list-style-type: none;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 111%;
  color: rgba(17, 16, 28, 0.3);
  border: 1px solid black;
`;

export const FilterItem = styled.li`
  cursor: pointer;
  &:hover {
    color: var(--primary-color-black);
  }
`;
