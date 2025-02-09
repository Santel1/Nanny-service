import styled from "styled-components";

export const StyledNannyContainer = styled.div`
  @media screen and (min-width: 320px) {
    .nannyList {
      display: flex;
      flex-direction: column;
      margin-bottom: 64px;
      gap: 32px;
      font-family: var(--font-family);
      color: var(--primary-color-black);
    }
    .nannyListItem {
      position: relative;
      background: var(--primary-color-white);
      border-radius: 24px;
      padding: 36px;
    }
    .nannyImg {
      overflow: hidden;
      border-radius: 20px;
      width: 66px;
      height: 66px;
      border: 2px solid rgba(16, 57, 49, 0.2);
      padding: 10px;
    }
    .nannyInfo {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      margin-bottom: 8px;
    }
    .profession {
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: var(--secondary-color-grey);
    }
    .nannySectionWrapper {
      display: flex;
      flex-wrap: wrap;

      gap: 10px;
    }
    .nannyLocation {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .locationIco {
      fill: transparent;
      stroke: var(--primary-color-black);
    }
    .nannyRating {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .favoriteNannyBtn {
      position: absolute;
      top: 30px;
      right: 30px;
      background-color: transparent;
      .iconHeart {
        fill: transparent;
        stroke: var(--primary-color-black);
        transition: all 0.3s;
      }
      .iconHeart:hover {
        stroke: red;
      }
      .active {
        fill: red;
        stroke: red;
        transition: all 0.3s;
      }
    }

    .nannyStyledPrice {
      color: var(--price-color-green);
    }
    .nannyName {
      font-weight: 500;
      font-size: 24px;
      line-height: 100%;
      margin-bottom: 24px;
    }
    .nannyBio {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 24px;
    }
    .nannyBio p {
      border-radius: 24px;
      padding: 8px 16px;
      background-color: var(--primary-color-grey);
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: var(--secondary-color-grey);
    }
    .styledSpan {
      color: var(--primary-color-black);
      &.age {
        text-decoration: underline;
        text-decoration-skip-ink: none;
      }
    }
    .nannyAbout {
      font-weight: 400;
      font-size: 16px;
      line-height: 125%;
      color: rgba(17, 16, 28, 0.5);
      margin-bottom: 14px;
    }
    .readMoreBtn {
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      text-decoration: underline;
      padding: 10px;
      border-radius: 24px;
      text-decoration-skip-ink: none;
      color: var(--primary-color-black);
      background-color: transparent;
      transition: all 0.3s;
      &.readMoreBtn:hover,
      .readMoreBtn:focus {
        color: var(--primary-color-green);
        background-color: var(--primary-color-grey);
      }
    }

    .reviewsList {
      margin-bottom: 48px;
    }
    .rewiewsListItem {
      margin-bottom: 25px;
    }
    .iconUser {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      width: 44px;
      height: 44px;
      background-color: rgba(16, 57, 49, 0.2);
      font-weight: 500;
      font-size: 20px;
      line-height: 100%;
    }
    .userWrapper {
      display: flex;
      gap: 12px;
    }
    .userName {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-bottom: 18px;
      font-weight: 500;
      font-size: 16px;
      line-height: 125%;
    }
    .userRating {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      line-height: 129%;
    }
    .commentText {
      font-weight: 400;
      font-size: 16px;
      line-height: 125%;
      color: rgba(17, 16, 28, 0.5);
    }
    .appointmentBtn {
      font-family: var(--font-family);
      border-radius: 30px;
      padding: 14px 28px;
      background-color: var(--primary-color-green);
      color: var(--primary-color-white);
      font-weight: 500;
      font-size: 16px;
      line-height: 125%;
      letter-spacing: -0.01em;
      transition: all 0.3s;
      &.appointmentBtn:hover,
      .appointmentBtn:focus {
        color: var(--primary-color-green);
        background-color: var(--secondary-color-green);
      }
    }
    .filterErrorText {
      text-align: center;
      font-weight: 500;
      font-size: 20px;
      line-height: 120%;
      letter-spacing: -0.02em;
    }
    .loadMoreWrapper {
      display: flex;
      justify-content: center;
    }
    .loadMoreBtn {
      display: flex;
      justify-content: center;
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 16px;
      line-height: 125%;
      letter-spacing: -0.01em;
      background-color: var(--primary-color-green);
      color: var(--primary-color-white);
      border-radius: 30px;
      padding: 14px;
      width: 159px;
      height: 48px;
    }
  }
  @media screen and (min-width: 768px) {
    .nannyList {
      display: flex;
      flex-direction: column;
      margin-bottom: 64px;
      gap: 32px;
      font-family: var(--font-family);
      color: var(--primary-color-black);
    }
    .nannyListItem {
      background: var(--primary-color-white);
      border-radius: 24px;
      padding: 36px;
    }
 
    .nannyImg {
      overflow: hidden;
      border-radius: 20px;
      width: 66px;
      height: 66px;
      border: 2px solid rgba(16, 57, 49, 0.2);
      padding: 10px;
    }
    .nannyInfo {
      display: flex;
      flex-wrap: wrap;

      justify-content: space-between;
      align-items: center;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      margin-bottom: 8px;
    }
    .profession {
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: var(--secondary-color-grey);
    }
    .nannySectionWrapper {
      display: flex;
      gap: 32px;
    }
    .nannyLocation {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .locationIco {
      fill: transparent;
      stroke: var(--primary-color-black);
    }
    .nannyRating {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .favoriteNannyBtn {
      background-color: transparent;
      .iconHeart {
        fill: transparent;
        stroke: var(--primary-color-black);
        transition: all 0.3s;
      }
      .iconHeart:hover {
        stroke: red;
      }
      .active {
        fill: red;
        stroke: red;
        transition: all 0.3s;
      }
    }

    .nannyStyledPrice {
      color: var(--price-color-green);
    }
    .nannyName {
      font-weight: 500;
      font-size: 24px;
      line-height: 100%;
      margin-bottom: 24px;
    }
    .nannyBio {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 24px;
    }
    .nannyBio p {
      border-radius: 24px;
      padding: 8px 16px;
      background-color: var(--primary-color-grey);
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: var(--secondary-color-grey);
    }

    .styledSpan {
      color: var(--primary-color-black);
      &.age {
        text-decoration: underline;
        text-decoration-skip-ink: none;
      }
    }
    .nannyAbout {
      font-weight: 400;
      font-size: 16px;
      line-height: 125%;
      color: rgba(17, 16, 28, 0.5);
      margin-bottom: 14px;
    }
    .readMoreBtn {
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      text-decoration: underline;
      padding: 10px;
      border-radius: 24px;
      text-decoration-skip-ink: none;
      color: var(--primary-color-black);
      background-color: transparent;
      transition: all 0.3s;
      &.readMoreBtn:hover,
      .readMoreBtn:focus {
        color: var(--primary-color-green);
        background-color: var(--primary-color-grey);
      }
    }
 
    .reviewsList {
      margin-bottom: 48px;
    }
    .rewiewsListItem {
      margin-bottom: 25px;
    }
    .iconUser {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      width: 44px;
      height: 44px;
      background-color: rgba(16, 57, 49, 0.2);
      font-weight: 500;
      font-size: 20px;
      line-height: 100%;
    }
    .userWrapper {
      display: flex;
      gap: 12px;
    }
    .userName {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-bottom: 18px;
      font-weight: 500;
      font-size: 16px;
      line-height: 125%;
    }
    .userRating {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      line-height: 129%;
    }
    .commentText {
      font-weight: 400;
      font-size: 16px;
      line-height: 125%;
      color: rgba(17, 16, 28, 0.5);
    }
    .appointmentBtn {
      font-family: var(--font-family);
      border-radius: 30px;
      padding: 14px 28px;
      background-color: var(--primary-color-green);
      color: var(--primary-color-white);
      font-weight: 500;
      font-size: 16px;
      line-height: 125%;
      letter-spacing: -0.01em;
      transition: all 0.3s;
      &.appointmentBtn:hover,
      .appointmentBtn:focus {
        color: var(--primary-color-green);
        background-color: var(--secondary-color-green);
      }
    }
    .filterErrorText {
      text-align: center;
      font-weight: 500;
      font-size: 20px;
      line-height: 120%;
      letter-spacing: -0.02em;
    }
    .loadMoreWrapper {
      display: flex;
      justify-content: center;
    }
    .loadMoreBtn {
      display: flex;
      justify-content: center;
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 16px;
      line-height: 125%;
      letter-spacing: -0.01em;
      background-color: var(--primary-color-green);
      color: var(--primary-color-white);
      border-radius: 30px;
      padding: 14px;
      width: 159px;
      height: 48px;
    }
  }
  @media screen and (min-width: 1024px) {
    .nannyList {
      display: flex;
      flex-direction: column;
      margin-bottom: 64px;
      gap: 32px;
      font-family: var(--font-family);
      color: var(--primary-color-black);
    }
    .nannyListItem {
      display: flex;
      gap: 24px;
      background: var(--primary-color-white);
      border-radius: 24px;
      padding: 36px;
    }
    .nannyImgWrapper {
      align-self: flex-start;
      flex-shrink: 0;
      display: flex;
      border: 2px solid rgba(16, 57, 49, 0.2);
      border-radius: 30px;
      padding: 12px;
    }
    .nannyImg {
      overflow: hidden;
      border-radius: 15px;
      width: 96px;
      height: 96px;
      border: none;
      padding: 0;
    }
    .nannyInfo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      margin-bottom: 8px;
    }
    .profession {
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: var(--secondary-color-grey);
    }
    .nannySectionWrapper {
      display: flex;
      gap: 32px;
    }
    .nannyLocation {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .locationIco {
      fill: transparent;
      stroke: var(--primary-color-black);
    }
    .nannyRating {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .favoriteNannyBtn {
      position: relative;
      top: 0;
      right: 0;
      background-color: transparent;
      .iconHeart {
        fill: transparent;
        stroke: var(--primary-color-black);
        transition: all 0.3s;
      }
      .iconHeart:hover {
        stroke: red;
      }
      .active {
        fill: red;
        stroke: red;
        transition: all 0.3s;
      }
    }

    .nannyStyledPrice {
      color: var(--price-color-green);
    }
    .nannyName {
      font-weight: 500;
      font-size: 24px;
      line-height: 100%;
      margin-bottom: 24px;
    }
    .nannyBio {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 24px;
    }
    .nannyBio p {
      border-radius: 24px;
      padding: 8px 16px;
      background-color: var(--primary-color-grey);
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: var(--secondary-color-grey);
    }
    .styledSpan {
      color: var(--primary-color-black);
      &.age {
        text-decoration: underline;
        text-decoration-skip-ink: none;
      }
    }
    .nannyAbout {
      font-weight: 400;
      font-size: 16px;
      line-height: 125%;
      color: rgba(17, 16, 28, 0.5);
      margin-bottom: 14px;
    }
    .readMoreBtn {
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      text-decoration: underline;
      padding: 10px;
      border-radius: 24px;
      text-decoration-skip-ink: none;
      color: var(--primary-color-black);
      background-color: transparent;
      transition: all 0.3s;
      &.readMoreBtn:hover,
      .readMoreBtn:focus {
        color: var(--primary-color-green);
        background-color: var(--primary-color-grey);
      }
    }
 
    .reviewsList {
      margin-bottom: 48px;
    }
    .rewiewsListItem {
      margin-bottom: 25px;
    }
    .iconUser {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      width: 44px;
      height: 44px;
      background-color: rgba(16, 57, 49, 0.2);
      font-weight: 500;
      font-size: 20px;
      line-height: 100%;
    }
    .userWrapper {
      display: flex;
      gap: 12px;
    }
    .userName {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-bottom: 18px;
      font-weight: 500;
      font-size: 16px;
      line-height: 125%;
    }
    .userRating {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      line-height: 129%;
    }
    .commentText {
      font-weight: 400;
      font-size: 16px;
      line-height: 125%;
      color: rgba(17, 16, 28, 0.5);
    }
    .appointmentBtn {
      font-family: var(--font-family);
      border-radius: 30px;
      padding: 14px 28px;
      background-color: var(--primary-color-green);
      color: var(--primary-color-white);
      font-weight: 500;
      font-size: 16px;
      line-height: 125%;
      letter-spacing: -0.01em;
      transition: all 0.3s;
      &.appointmentBtn:hover,
      .appointmentBtn:focus {
        color: var(--primary-color-green);
        background-color: var(--secondary-color-green);
      }
    }
    .filterErrorText {
      text-align: center;
      font-weight: 500;
      font-size: 20px;
      line-height: 120%;
      letter-spacing: -0.02em;
    }
    .loadMoreWrapper {
      display: flex;
      justify-content: center;
    }
    .loadMoreBtn {
      display: flex;
      justify-content: center;
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 16px;
      line-height: 125%;
      letter-spacing: -0.01em;
      background-color: var(--primary-color-green);
      color: var(--primary-color-white);
      border-radius: 30px;
      padding: 14px;
      width: 159px;
      height: 48px;
    }
  }
`;
