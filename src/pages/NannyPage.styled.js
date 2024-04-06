import styled from "styled-components";

export const StyledNannyPage = styled.div`
  padding: 0px 128px 100px 128px;
  .inputWrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .inputLabel {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    color: #8a8a89;
  }
  .inputFilter {
    width: 226px;
    border-radius: 14px;
    padding: 18px;
    background-color: var(--primary-color-green);
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 111%;
    color: #fbfbfb;
    margin-bottom: 20px;
    position: relative;
    option {
      display: flex;
      gap: 8px;
      padding: 12px;
      margin-bottom: 8px;
      background-color: var(--primary-color-white);
      color: rgba(17, 16, 28, 0.3);
    }
    option:hover,
    option:focus {
      background-color: transparent;
      color: black;
    }
  }

  .inputFilter::after {
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    border: solid #fbfbfb;
    border-width: 0 2px 2px 0;
    padding: 5px;
    pointer-events: none;
    z-index: 1;
  }
`;
