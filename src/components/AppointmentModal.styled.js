import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  box-sizing: content-box;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 3;
  overflow: auto;
`;

export const StyledAppointmentModal = styled.form`
  display: flex;
  position: absolute;
  flex-direction: column;
  box-sizing: border-box;
  width: 566px;
  padding: 64px;
  border-radius: 30px;
  background-color: var(--primary-color-white);
  z-index: 4;

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
    &.time {
      position: relative;
    }
    .timeBtn {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 50%;
      transform: translateY(-50%);
      right: 18px;
      background-color: transparent;
    }

    .timeIcon {
      stroke: var(--primary-color-black);
      fill: transparent;
    }
  }
  .appointmentInput {
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

  .appointmentModalBtn {
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
    transition: all 0.3s;
    &.appointmentModalBtn:hover,
    .appointmentModalBtn:focus {
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
  .commentInput {
    border: 1px solid rgba(17, 16, 28, 0.1);
    border-radius: 12px;
    padding: 16px 18px;
    resize: none;
    width: 100%;
    height: 116px;
    box-sizing: border-box;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    color: var(--primary-color-black);
    outline: none;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .nannyInfoModal {
    display: flex;
    gap: 14px;
    margin-bottom: 40px;
    box-sizing: border-box;
  }

  .nannyImg {
    border-radius: 15px;
    width: 44px;
    height: 44px;
  }

  .textWrapper {
    font-family: var(--font-family);
    font-weight: 500;
  }

  .nannyTextModal {
    font-size: 12px;
    line-height: 133%;
    color: rgba(17, 16, 28, 0.5);
    margin-bottom: 4px;
  }

  .nannyNameModal {
    font-size: 16px;
    line-height: 150%;
    color: var(--primary-color-black);
  }
`;
