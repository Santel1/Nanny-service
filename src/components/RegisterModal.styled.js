import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 100%;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 3;
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledRegisterModal = styled.form`
  @media screen and (min-width: 320px) {
    display: flex;
    position: relative;
    flex-direction: column;
    box-sizing: border-box;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 566px;
    padding: 30px;
    border-radius: 30px;
    background-color: var(--primary-color-white);

    .formTitle {
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 40px;
      line-height: 120%;
      letter-spacing: -0.02em;
      color: var(--primary-color-black);
      margin-bottom: 20px;
    }
    .formText {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 16px;
      line-height: 125%;
      color: rgba(17, 16, 28, 0.5);
      margin-bottom: 40px;
    }
    .inputForm {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 40px;
    }
    .inputWrapper {
    }
    .registerInput {
      border: 1px solid rgba(17, 16, 28, 0.1);
      border-radius: 12px;
      padding: 16px;
      width: 100%;
      box-sizing: border-box;
      outline: none;
    }
    .signAuth.pass {
      position: relative;
    }

    .registerModalBtn {
      border-radius: 30px;
      padding: 16px;
      align-items: center;
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 16px;
      line-height: 125%;
      letter-spacing: -0.01em;
      color: var(--primary-color-white);
      background-color: var(--primary-color-green);
      &.registerModalBtn:hover,
      .registerModalBtn:focus {
        color: var(--primary-color-green);
        background-color: var(--secondary-color-green);
      }
    }
    .icon-wrapper {
      position: absolute;
      right: 18px;
      top: 16px;
      background-color: transparent;
    }
    .icon-eye {
      fill: transparent;
      stroke: var(--primary-color-black);
    }
    .closeBtn {
      position: absolute;
      top: 20px;
      right: 20px;
      background-color: transparent;
    }
    .closeBtnImage {
      stroke: var(--primary-color-black);
      transition: all 0.3s;
      &:hover {
        stroke: red;
      }
    }
  }
  @media screen and (min-width: 768px) {
    padding: 64px;
  }
`;
