import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;

  &.transparentHeader {
    @media screen and (min-width: 320px) {
      display: block;
      z-index: 3;
      padding: 20px 45px;
      display: flex;
      width: auto;
      left: 0px;
      right: 0px;
      background-color: var(--primary-color-green);
      border-bottom: 1px solid rgba(251, 251, 251, 0.4);
      .navContainer {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .menuBtn {
        display: flex;
        background-color: transparent;
        box-sizing: border-box;
      }
      .mobileMenuIcon {
        stroke: var(--primary-color-white);
      }

      .logoContainer {
        display: flex;
        justify-self: flex-start;
      }

      .sectionContainer {
        display: none;
      }
      .logo {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 24px;
        line-height: 117%;
        letter-spacing: -0.02em;
        color: var(--primary-color-white);
      }
      .authWrapper {
        display: none;
      }
    }
    @media screen and (min-width: 768px) {
      position: absolute;
      padding: 20px 50px;
      display: flex;
      top: 32px;
      left: 0px;
      right: 0px;
      background-color: rgba(255, 255, 255, 0);
      .navContainer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .menuBtn {
        display: none;
      }

      .logoContainer {
        display: flex;
        justify-self: flex-start;
      }

      .sectionContainer {
        display: flex;
        gap: 40px;
        align-items: center;
        margin-right: 0;
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
    }
    @media screen and (min-width: 1024px) {
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
    }
  }

  &.greenHeader {
    @media screen and (min-width: 320px) {
      display: block;
      background-color: var(--primary-color-green);
      width: auto;
      left: 0px;
      right: 0px;
      padding: 28px 50px;
      margin-bottom: 64px;
      .navContainer {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .menuBtn {
        display: flex;
        background-color: transparent;
        box-sizing: border-box;
      }
      .mobileMenuIcon {
        stroke: var(--primary-color-white);
      }
      .logoContainer {
        display: flex;
        align-items: center;
      }

      .sectionContainer {
        display: none;
      }

      .logo {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 24px;
        line-height: 117%;
        letter-spacing: -0.02em;
        color: var(--primary-color-white);
      }

      .authWrapper {
        display: none;
      }
    }
    @media screen and (min-width: 768px) {
      display: block;
      background-color: var(--primary-color-green);
      margin-bottom: 64px;
      .navContainer {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .menuBtn {
        display: none;
      }
      .logoContainer {
        display: flex;
        align-items: center;
      }

      .sectionContainer {
        display: flex;
        gap: 20px;
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
        padding: 14px 20px;
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
        padding: 14px 20px;
        transition: all 0.3s;
        &.registerBtn:hover,
        .registerBtn:focus {
          color: var(--primary-color-green);
          background-color: var(--primary-color-white);
        }
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
        padding: 14px 20px;
        transition: all 0.3s;
        &.logoutBtn:hover,
        .logoutBtn:focus {
          color: var(--primary-color-green);
          background-color: var(--primary-color-white);
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

      .userName {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 16px;
        line-height: 111%;
        letter-spacing: -0.01em;
        color: #fbfbfb;
      }

      .authWrapper {
        display: flex;
        gap: 8px;

        &.userWrapper {
          gap: 12px;
        }
      }
      .usernameWrapper {
        display: flex;
        gap: 8px;
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
        width: 32px;
        height: 32px;
        background-color: var(--primary-color-white);
      }
    }
    @media screen and (min-width: 1024px) {
      display: block;
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
    }
  }
`;

export const StyledMobileMenu = styled.header`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    position: absolute;
    padding: 30px;
    top: 0px;
    left: 0px;
    background-color: var(--primary-color-white);
    width: 100%;
    height: 100vh;
    z-index: 9999;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
    .closeMobileBtn {
      position: absolute;
      top: 30px;
      right: 50px;
      display: flex;
      fill: black;
      stroke: black;
      background-color: transparent;
    }
    .mobileMenuLink {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 16px;
      line-height: 125%;
      letter-spacing: -0.01em;
      color: var(--primary-color-black);
      position: relative;
    }
    .loginMobileBtn {
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
      &.loginMobileBtn:hover,
      .loginMobileBtn:focus {
        color: var(--primary-color-green);
        background-color: var(--secondary-color-green);
      }
    }
    .registerMobileBtn {
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
      &.registerMobileBtn:hover,
      .registerMobileBtn:focus {
        color: var(--primary-color-green);
        background-color: var(--secondary-color-green);
      }
    }
    .usernameMobileWrapper {
      display: flex;
      gap: 20px;
    }
    .userMobileIconWrapper {
    }
    .userMobileIcon {
    }
    .userMobileName {
    }
    .logoutMobileBtn {
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
      &.logoutMobileBtn:hover,
      .logoutMobileBtn :focus {
        color: var(--primary-color-green);
        background-color: var(--secondary-color-green);
      }
    }
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
