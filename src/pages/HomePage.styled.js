import styled from "styled-components";
export const HomePageStyled = styled.div`
  @media screen and (min-width: 320px) {
    .homePageLeftSection {
      height: calc(100vh - 125px);
      padding: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--primary-color-green);
    }
    .homePageTitle {
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 45px;
      line-height: 100%;
      letter-spacing: -0.03em;
      color: var(--primary-color-white);
      margin-bottom: 28px;
    }
    .homePageSubtitle {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 28px;
      line-height: 107%;
      letter-spacing: -0.02em;
      color: var(--primary-color-white);
      margin-bottom: 64px;
    }
    .homePageBtn {
      display: flex;
      gap: 18px;
      align-items: center;
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 20px;
      line-height: 120%;
      letter-spacing: -0.01em;
      color: var(--primary-color-white);
      fill: var(--primary-color-white);
      border: 1px solid rgba(251, 251, 251, 0.4);
      border-radius: 30px;
      padding: 18px 50px;
      background-color: transparent;
      transition: background-color 0.3s, color 0.3s, fill 0.3s;
      &.homePageBtn:hover,
      .homePageBtn:focus {
        background-color: var(--primary-color-white);
        color: var(--primary-color-green);
        fill: var(--primary-color-green);
      }
    }

    .homePageRightSection {
      display: none;
    }
    .homePageImg {
    }
    .righSectionInfo {
    }
    .textWrapper {
    }
    .infoText {
    }
    .infoNumber {
    }
    .iconWrapper {
    }
  }
  @media screen and (min-width: 768px) {
    padding: 32px;
    box-sizing: border-box;
    border-radius: 32px;
    overflow: hidden;
    display: flex;
    height: 100vh;
    .homePageLeftSection {
      height: auto;
      border-top-left-radius: 32px;
      border-bottom-left-radius: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      background-color: var(--primary-color-green);
    }
    .homePageTitle {
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 70px;
      line-height: 100%;
      letter-spacing: -0.03em;
      color: var(--primary-color-white);
      margin-bottom: 28px;
    }
    .homePageSubtitle {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 28px;
      line-height: 107%;
      letter-spacing: -0.02em;
      color: var(--primary-color-white);
      margin-bottom: 64px;
    }
    .homePageBtn {
      display: flex;
      gap: 18px;
      align-items: center;
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 20px;
      line-height: 120%;
      letter-spacing: -0.01em;
      color: var(--primary-color-white);
      fill: var(--primary-color-white);
      border: 1px solid rgba(251, 251, 251, 0.4);
      border-radius: 30px;
      padding: 18px 50px;
      background-color: transparent;
      transition: background-color 0.3s, color 0.3s, fill 0.3s;
      &.homePageBtn:hover,
      .homePageBtn:focus {
        background-color: var(--primary-color-white);
        color: var(--primary-color-green);
        fill: var(--primary-color-green);
      }
    }

    .homePageRightSection {
      display: block;
      position: relative;
      overflow: hidden;
      border-top-right-radius: 32px;
      border-bottom-right-radius: 32px;
      width: 50%;
    }
    .homePageImg {
      height: 100%;
      object-fit: cover;
    }
    .righSectionInfo {
      display: flex;
      align-items: center;
      gap: 16px;
      position: absolute;
      background-color: var(--primary-color-white);
      padding: 32px;
      border-radius: 13px;
      right: 50px;
      bottom: 50px;
    }
    .textWrapper {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .infoText {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 16px;
      color: rgba(17, 16, 28, 0.5);
    }
    .infoNumber {
      font-family: var(--font-family);
      font-weight: 700;
      font-size: 24px;
      color: #11101c;
    }
    .iconWrapper {
      display: flex;
      background-color: var(--primary-color-green);
      width: 54px;
      height: 54px;
      border-radius: 13px;
      align-items: center;
      justify-content: center;
    }
  }
  @media screen and (min-width: 1024px) {
    padding: 32px;
    box-sizing: border-box;
    border-radius: 32px;
    overflow: hidden;
    display: flex;
    height: 100vh;
    .homePageLeftSection {
      border-top-left-radius: 32px;
      border-bottom-left-radius: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      background-color: var(--primary-color-green);
    }
    .homePageTitle {
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 70px;
      line-height: 100%;
      letter-spacing: -0.03em;
      color: var(--primary-color-white);
      margin-bottom: 28px;
    }
    .homePageSubtitle {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 28px;
      line-height: 107%;
      letter-spacing: -0.02em;
      color: var(--primary-color-white);
      margin-bottom: 64px;
    }
    .homePageBtn {
      display: flex;
      gap: 18px;
      align-items: center;
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 20px;
      line-height: 120%;
      letter-spacing: -0.01em;
      color: var(--primary-color-white);
      fill: var(--primary-color-white);
      border: 1px solid rgba(251, 251, 251, 0.4);
      border-radius: 30px;
      padding: 18px 50px;
      background-color: transparent;
      transition: background-color 0.3s, color 0.3s, fill 0.3s;
      &.homePageBtn:hover,
      .homePageBtn:focus {
        background-color: var(--primary-color-white);
        color: var(--primary-color-green);
        fill: var(--primary-color-green);
      }
    }

    .homePageRightSection {
      position: relative;
      overflow: hidden;
      border-top-right-radius: 32px;
      border-bottom-right-radius: 32px;
      width: 50%;
    }
    .homePageImg {
      height: 100%;
      object-fit: cover;
    }
    .righSectionInfo {
      display: flex;
      align-items: center;
      gap: 16px;
      position: absolute;
      background-color: var(--primary-color-white);
      padding: 32px;
      border-radius: 13px;
      right: 50px;
      bottom: 50px;
    }
    .textWrapper {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .infoText {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 16px;
      color: rgba(17, 16, 28, 0.5);
    }
    .infoNumber {
      font-family: var(--font-family);
      font-weight: 700;
      font-size: 24px;
      color: #11101c;
    }
    .iconWrapper {
      display: flex;
      background-color: var(--primary-color-green);
      width: 54px;
      height: 54px;
      border-radius: 13px;
      align-items: center;
      justify-content: center;
    }
  }

  /* .homePageLeftSection {
    border-top-left-radius: 32px;
    border-bottom-left-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    background-color: var(--primary-color-green);
  }
  .homePageTitle {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 70px;
    line-height: 100%;
    letter-spacing: -0.03em;
    color: var(--primary-color-white);
    margin-bottom: 28px;
  }
  .homePageSubtitle {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 28px;
    line-height: 107%;
    letter-spacing: -0.02em;
    color: var(--primary-color-white);
    margin-bottom: 64px;
  }
  .homePageBtn {
    display: flex;
    gap: 18px;
    align-items: center;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -0.01em;
    color: var(--primary-color-white);
    fill: var(--primary-color-white);
    border: 1px solid rgba(251, 251, 251, 0.4);
    border-radius: 30px;
    padding: 18px 50px;
    background-color: transparent;
    transition: background-color 0.3s, color 0.3s, fill 0.3s;
    &.homePageBtn:hover,
    .homePageBtn:focus {
      background-color: var(--primary-color-white);
      color: var(--primary-color-green);
      fill: var(--primary-color-green);
    }
  }

  .homePageRightSection {
    position: relative;
    overflow: hidden;
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
    width: 50%;
  }
  .homePageImg {
    height: 100%;
    object-fit: cover;
  }
  .righSectionInfo {
    display: flex;
    align-items: center;
    gap: 16px;
    position: absolute;
    background-color: var(--primary-color-white);
    padding: 32px;
    border-radius: 13px;
    right: 50px;
    bottom: 50px;
  }
  .textWrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .infoText {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    color: rgba(17, 16, 28, 0.5);
  }
  .infoNumber {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 24px;
    color: #11101c;
  }
  .iconWrapper {
    display: flex;
    background-color: var(--primary-color-green);
    width: 54px;
    height: 54px;
    border-radius: 13px;
    align-items: center;
    justify-content: center;
  } */
`;
