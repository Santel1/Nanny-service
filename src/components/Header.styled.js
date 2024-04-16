import styled from "styled-components";

export const StyledHeaderContainer = styled.header`
  display: flex;
  align-items: center;

  &.transparentHeader {
    z-index: 3;
    position: absolute;
    padding: 20px 96px;
    display: flex;
    width: auto;
    top: 32px;
    left: 0px;
    right: 0px;
    background-color: rgba(255, 255, 255, 0);
    border-bottom: 1px solid rgba(251, 251, 251, 0.4);
    .navContainer {
      width: 100%;
      display: flex;
      align-items: center;
    }

    .logoContainer {
      display: flex;
      justify-self: flex-start;
    }

    .sectionContainer {
      display: flex;
      gap: 40px;
      align-items: center;
      margin-left: auto;
      margin-right: 92px;
    }
    .loginBtn {
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 16px;
      line-height: 125%;
      letter-spacing: -0.01em;
      color: var(--primary-color-white);
      border: 1px solid rgba(251, 251, 251, 0.4);
      background-color: transparent;
      border-radius: 30px;
      padding: 14px 39px;
      transition: all 0.3s;
      &.loginBtn:hover,
      .loginBtn:focus {
        color: var(--primary-color-white);
        background-color: var(--primary-color-green);
      }
    }
    .registerBtn {
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 16px;
      line-height: 125%;
      letter-spacing: -0.01em;
      color: var(--primary-color-white);
      border-radius: 30px;
      padding: 14px 40px;
      background-color: var(--primary-color-green);
      transition: all 0.3s;
      &.registerBtn:hover,
      .registerBtn:focus {
        color: var(--primary-color-green);
        background-color: var(--primary-color-white);
      }
    }
  }

  &.greenHeader {
    background-color: var(--primary-color-green);
    padding: 28px 128px;
    margin-bottom: 64px;
    .navContainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logoContainer {
      display: flex;
      align-items: center;
    }

    .sectionContainer {
      display: flex;
      gap: 40px;
      align-items: center;
    }
    .loginBtn {
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 16px;
      line-height: 125%;
      letter-spacing: -0.01em;
      color: var(--primary-color-white);
      border: 1px solid rgba(251, 251, 251, 0.4);
      background-color: transparent;
      border-radius: 30px;
      padding: 14px 39px;
      transition: all 0.3s;
      &.loginBtn:hover,
      .loginBtn :focus {
        color: var(--primary-color-green);
        background-color: var(--primary-color-white);
      }
    }
    .registerBtn {
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 16px;
      line-height: 125%;
      letter-spacing: -0.01em;
      color: var(--primary-color-white);
      border: 1px solid rgba(251, 251, 251, 0.4);
      background-color: transparent;
      border-radius: 30px;
      padding: 14px 39px;
      transition: all 0.3s;
      &.registerBtn:hover,
      .registerBtn:focus {
        color: var(--primary-color-green);
        background-color: var(--primary-color-white);
      }
    }
  }

  .logo {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 24px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: var(--primary-color-white);
  }
  .link {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: -0.01em;
    color: var(--primary-color-white);
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 8px;
      height: 8px;
      background-color: white;
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &.active::after,
    &:hover::after {
      opacity: 1;
    }
  }

  .loginBtn {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: -0.01em;
    color: var(--primary-color-white);
    border: 1px solid rgba(251, 251, 251, 0.4);
    background-color: transparent;
    border-radius: 30px;
    padding: 14px 39px;
  }
  .registerBtn {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: -0.01em;
    color: var(--primary-color-white);
    border-radius: 30px;
    padding: 14px 40px;
    background-color: var(--primary-color-green);
  }
  .logoutBtn {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: -0.01em;
    color: var(--primary-color-white);
    border: 1px solid rgba(251, 251, 251, 0.4);
    background-color: transparent;
    border-radius: 30px;
    padding: 14px 39px;
    transition: all 0.3s;
    &.logoutBtn:hover,
    .logoutBtn:focus {
      color: var(--primary-color-green);
      background-color: var(--primary-color-white);
    }
  }
  .userName {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 111%;
    letter-spacing: -0.01em;
    color: #fbfbfb;
  }

  .authWrapper {
    display: flex;
    gap: 8px;

    &.userWrapper {
      gap: 24px;
    }
  }
  .usernameWrapper {
    display: flex;
    gap: 14px;
    align-items: center;
  }
  .userIcon {
    fill: var(--primary-color-green);
  }
  .userIconWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    background-color: var(--primary-color-white);
  }
`;
