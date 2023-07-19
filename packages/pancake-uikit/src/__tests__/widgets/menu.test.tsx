import React from "react";
import noop from "lodash/noop";
import { BrowserRouter } from "react-router-dom";
import { renderWithTheme } from "../../testHelpers";
import { Menu, menuConfig, LangType } from "../../widgets/Menu";

/**
 * @see https://jestjs.io/docs/en/manual-mocks
 */
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const langs: LangType[] = [...Array(20)].map((_, i) => ({ code: `en${i}`, language: `English${i}` }));

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <BrowserRouter>
      <Menu
        account="0xbdda50183d817c3289f895a4472eb475967dc980"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang="EN"
        cardioPriceUsd={0.23158668932877668}
        links={menuConfig}
      >
        body
      </Menu>
    </BrowserRouter>
  );

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c25 {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #452a7a;
      -webkit-transition: opacity 0.4s;
      transition: opacity 0.4s;
      opacity: 0;
      z-index: 10;
      pointer-events: none;
    }

    .c2 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    .c5 {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      fill: #8f80ba;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c7 {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      fill: #452A7A;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c13 {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      fill: #452A7A;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      margin-right: 8px;
    }

    .c3 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      border: 0;
      border-radius: 16px;
      box-shadow: 0px -1px 0px 0px rgba(14,14,44,0.4) inset;
      cursor: pointer;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-letter-spacing: 0.03em;
      -moz-letter-spacing: 0.03em;
      -ms-letter-spacing: 0.03em;
      letter-spacing: 0.03em;
      line-height: 1;
      opacity: 1;
      outline: 0;
      -webkit-transition: background-color 0.2s,opacity 0.2s;
      transition: background-color 0.2s,opacity 0.2s;
      height: 48px;
      padding: 0 24px;
      background-color: transparent;
      color: #1FC7D4;
      box-shadow: none;
      width: sm;
      height: sm;
      margin-right: 24px;
    }

    .c3:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
      opacity: 0.65;
    }

    .c3:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
      opacity: 0.85;
      -webkit-transform: translateY(1px);
      -ms-transform: translateY(1px);
      transform: translateY(1px);
      box-shadow: none;
    }

    .c3:disabled,
    .c3.pancake-button--disabled {
      background-color: #E9EAEB;
      border-color: #E9EAEB;
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    .c8 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      border: 0;
      border-radius: 16px;
      box-shadow: 0px -1px 0px 0px rgba(14,14,44,0.4) inset;
      cursor: pointer;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-letter-spacing: 0.03em;
      -moz-letter-spacing: 0.03em;
      -ms-letter-spacing: 0.03em;
      letter-spacing: 0.03em;
      line-height: 1;
      opacity: 1;
      outline: 0;
      -webkit-transition: background-color 0.2s,opacity 0.2s;
      transition: background-color 0.2s,opacity 0.2s;
      height: 32px;
      padding: 0 16px;
      background-color: #EFF4F5;
      box-shadow: none;
      color: #1FC7D4;
    }

    .c8:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
      opacity: 0.65;
    }

    .c8:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
      opacity: 0.85;
      -webkit-transform: translateY(1px);
      -ms-transform: translateY(1px);
      transform: translateY(1px);
      box-shadow: none;
    }

    .c8:disabled,
    .c8.pancake-button--disabled {
      background-color: #E9EAEB;
      border-color: #E9EAEB;
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    .c22 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      border: 0;
      border-radius: 16px;
      box-shadow: 0px -1px 0px 0px rgba(14,14,44,0.4) inset;
      cursor: pointer;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-letter-spacing: 0.03em;
      -moz-letter-spacing: 0.03em;
      -ms-letter-spacing: 0.03em;
      letter-spacing: 0.03em;
      line-height: 1;
      opacity: 1;
      outline: 0;
      -webkit-transition: background-color 0.2s,opacity 0.2s;
      transition: background-color 0.2s,opacity 0.2s;
      height: 48px;
      padding: 0 24px;
      background-color: transparent;
      color: #1FC7D4;
      box-shadow: none;
    }

    .c22:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
      opacity: 0.65;
    }

    .c22:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
      opacity: 0.85;
      -webkit-transform: translateY(1px);
      -ms-transform: translateY(1px);
      transform: translateY(1px);
      box-shadow: none;
    }

    .c22:disabled,
    .c22.pancake-button--disabled {
      background-color: #E9EAEB;
      border-color: #E9EAEB;
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    .c4 {
      color: #452A7A;
      padding: 0 8px;
      border-radius: 8px;
    }

    .c6 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .c6 .mobile-icon {
      width: 32px;
    }

    .c6 .desktop-icon {
      width: 156px;
      display: none;
    }

    .c6 .right-eye {
      -webkit-animation-delay: 20ms;
      animation-delay: 20ms;
    }

    .c6:hover .left-eye,
    .c6:hover .right-eye {
      -webkit-transform-origin: center 60%;
      -ms-transform-origin: center 60%;
      transform-origin: center 60%;
      -webkit-animation-name: beoKdG;
      animation-name: beoKdG;
      -webkit-animation-duration: 350ms;
      animation-duration: 350ms;
      -webkit-animation-iteration-count: 1;
      animation-iteration-count: 1;
    }

    .c18 {
      color: #FFB237;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      font-size: 14px;
    }

    .c14 {
      color: transparent;
      -webkit-transition: color 0.4s;
      transition: color 0.4s;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
    }

    .c12 {
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 48px;
      padding: 0 16px;
      font-size: 16px;
      background-color: transparent;
      color: #8f80ba;
      box-shadow: inset 4px 0px 0px #1FC7D4;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c12 a {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .c12 svg {
      fill: #8f80ba;
    }

    .c12:hover {
      background-color: #EFF4F5;
    }

    .c12.rainbow {
      background-clip: text;
      -webkit-animation: fKQuCC 3s ease-in-out infinite;
      animation: fKQuCC 3s ease-in-out infinite;
      background: linear-gradient(139.73deg,#E6FDFF 0%,#F3EFFF 100%);
      background-size: 400% 100%;
    }

    .c16 {
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 48px;
      padding: 0 16px;
      font-size: 16px;
      background-color: transparent;
      color: #8f80ba;
      box-shadow: none;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c16 a {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .c16 svg {
      fill: #8f80ba;
    }

    .c16:hover {
      background-color: #EFF4F5;
    }

    .c16.rainbow {
      background-clip: text;
      -webkit-animation: fKQuCC 3s ease-in-out infinite;
      animation: fKQuCC 3s ease-in-out infinite;
      background: linear-gradient(139.73deg,#E6FDFF 0%,#F3EFFF 100%);
      background-size: 400% 100%;
    }

    .c19 {
      border-radius: 16px;
      padding: 0 8px;
      border: 2px solid;
      border-color: #FFB237;
      box-shadow: none;
      color: #FFB237;
      margin-left: 8px;
    }

    .c15 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c17 {
      max-height: 48px;
      -webkit-transition: max-height 0.3s ease-out;
      transition: max-height 0.3s ease-out;
      overflow: hidden;
      border-color: transparent;
      border-style: solid;
      border-width: 1px 0;
    }

    .c20 {
      max-height: 0;
      -webkit-transition: max-height 0.3s ease-out;
      transition: max-height 0.3s ease-out;
      overflow: hidden;
      border-color: transparent;
      border-style: solid;
      border-width: 1px 0;
    }

    .c11 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      overflow-y: auto;
      overflow-x: hidden;
      height: 100%;
    }

    .c23 {
      padding: 0;
      width: 48px;
    }

    .c21 {
      -webkit-flex: none;
      -ms-flex: none;
      flex: none;
      padding: 8px 4px;
      background-color: #FFFFFF;
      border-top: solid 2px rgba(133,133,133,0.1);
    }

    .c10 {
      position: fixed;
      padding-top: 80px;
      top: 0;
      left: 0;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      background-color: #FFFFFF;
      width: 0;
      height: 100vh;
      -webkit-transition: padding-top 0.2s,width 0.2s cubic-bezier(0.4,0,0.2,1);
      transition: padding-top 0.2s,width 0.2s cubic-bezier(0.4,0,0.2,1);
      border-right: 0;
      z-index: 11;
      overflow: hidden;
      -webkit-transform: translate3d(0,0,0);
      -ms-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
      white-space: nowrap;
    }

    .c0 {
      position: relative;
      width: 100%;
    }

    .c1 {
      position: fixed;
      top: 0;
      left: 0;
      -webkit-transition: top 0.2s;
      transition: top 0.2s;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding-left: 8px;
      padding-right: 16px;
      width: 100%;
      height: 64px;
      background-color: #FFFFFF;
      border-bottom: solid 2px rgba(133,133,133,0.1);
      z-index: 20;
      -webkit-transform: translate3d(0,0,0);
      -ms-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
    }

    .c9 {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    .c24 {
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      margin-top: 64px;
      -webkit-transition: margin-top 0.2s,margin-left 0.2s cubic-bezier(0.4,0,0.2,1);
      transition: margin-top 0.2s,margin-left 0.2s cubic-bezier(0.4,0,0.2,1);
      -webkit-transform: translate3d(0,0,0);
      -ms-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
      max-width: 100%;
    }

    .c26 {
      position: fixed;
      height: 100%;
    }

    @media screen and (min-width:968px) {
      .c6 .mobile-icon {
        display: none;
      }
    }

    @media screen and (min-width:968px) {
      .c6 .desktop-icon {
        display: block;
      }
    }

    @media screen and (min-width:968px) {
      .c10 {
        border-right: 2px solid rgba(133,133,133,0.1);
        width: 56px;
      }
    }

    @media screen and (min-width:968px) {
      .c24 {
        margin-left: 56px;
        max-width: calc(100% - 56px);
      }
    }

    @media screen and (min-width:968px) {
      .c26 {
        display: none;
      }
    }

    <div
        class="c0"
      >
        <nav
          class="c1"
        >
          <div
            class="c2"
          >
            <button
              aria-label="Toggle menu"
              class="c3 c4"
              scale="md"
            >
              <svg
                class="c5"
                color="textSubtle"
                viewBox="0 0 24 24"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
                />
              </svg>
            </button>
            <a
              aria-label="Pancake home page"
              class="c6"
              href="/"
            >
              <svg
                class="c7 mobile-icon"
                color="text"
                viewBox="0 0 32 32"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.19,4.74c-1.65-1.65-3.83-2.55-6.16-2.55s-4.52,0.91-6.16,2.56L16.01,5.6l-0.87-0.87
    		c-1.65-1.65-3.84-2.56-6.17-2.56c-2.32,0-4.51,0.91-6.15,2.55c-1.65,1.65-2.56,3.84-2.55,6.16c0,2.33,0.91,4.51,2.56,6.16
    		l12.53,12.53c0.17,0.17,0.41,0.27,0.63,0.27s0.46-0.09,0.63-0.26l12.56-12.51c1.65-1.65,2.56-3.84,2.56-6.16
    		C31.74,8.57,30.84,6.39,29.19,4.74z M27.91,15.79L15.99,27.67l-11.9-11.9c-1.31-1.31-2.03-3.04-2.03-4.89S2.78,7.3,4.09,6
    		c1.3-1.3,3.04-2.02,4.88-2.02c1.85,0,3.59,0.72,4.9,2.03l1.51,1.51c0.35,0.35,0.92,0.35,1.27,0l1.49-1.49
    		c1.31-1.31,3.05-2.03,4.89-2.03c1.84,0,3.58,0.72,4.88,2.02c1.31,1.31,2.02,3.04,2.02,4.89C29.94,12.75,29.22,14.48,27.91,15.79z"
                />
              </svg>
              <svg
                class="c7 desktop-icon"
                color="text"
                viewBox="0 0 160 26"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m36.17,6.49h0c-1.23,0-2.18.38-2.84,1.13h0c-.65.75-.98,1.82-.98,3.19h0c0,1.39.36,2.47,1.09,3.22h0c.73.75,1.71,1.13,2.94,1.13h0c.66,0,1.22-.09,1.67-.27h0c.45-.17.89-.37,1.31-.6h0c.27.23.48.5.63.81h0c.15.31.23.68.23,1.09h0c0,.65-.36,1.21-1.09,1.67h0c-.73.45-1.83.68-3.32.68h0c-1.07,0-2.08-.15-3.03-.45h0c-.94-.31-1.76-.78-2.47-1.41h0c-.71-.63-1.26-1.43-1.67-2.4h0c-.41-.97-.61-2.12-.61-3.47h0c0-1.25.2-2.35.59-3.3h0c.39-.95.93-1.75,1.61-2.41h0c.68-.65,1.47-1.15,2.38-1.49h0c.91-.33,1.89-.5,2.93-.5h0c1.47,0,2.61.24,3.42.72h0c.81.48,1.21,1.1,1.21,1.85h0c0,.41-.1.77-.31,1.08h0c-.21.3-.45.54-.72.72h0c-.41-.27-.86-.51-1.33-.7h0c-.47-.19-1.02-.29-1.64-.29Zm10.96,9.03h0c.27,0,.57-.03.9-.09h0c.33-.05.58-.13.74-.22h0v-1.92l-1.73.14h0c-.45.03-.82.13-1.11.29h0c-.29.16-.43.4-.43.72h0c0,.32.12.58.37.78h0c.25.2.67.3,1.26.3Zm-.19-9.43h0c.87,0,1.66.09,2.37.26h0c.71.17,1.31.44,1.82.8h0c.51.36.89.82,1.16,1.37h0c.27.55.41,1.21.41,1.96h0v5.37h0c0,.42-.12.76-.35,1.02h0c-.23.27-.5.5-.82.69h0c-1.04.62-2.51.93-4.4.93h0c-.85,0-1.61-.08-2.29-.24h0c-.68-.16-1.26-.4-1.75-.72h0c-.49-.32-.86-.73-1.13-1.22h0c-.26-.49-.39-1.07-.39-1.73h0c0-1.1.33-1.95.98-2.54h0c.65-.59,1.67-.96,3.05-1.11h0l3.14-.33v-.17h0c0-.47-.2-.8-.61-1h0c-.41-.2-.99-.3-1.76-.3h0c-.61,0-1.21.07-1.78.2h0c-.57.13-1.09.29-1.56.48h0c-.21-.15-.38-.37-.53-.66h0c-.14-.3-.21-.61-.21-.93h0c0-.41.1-.74.3-.99h0c.2-.25.51-.47.92-.64h0c.47-.17,1.01-.3,1.64-.38h0c.63-.08,1.23-.12,1.79-.12Zm12.34,3.81v8.19h0c-.16.05-.41.09-.76.14h0c-.34.05-.7.07-1.07.07h0c-.35,0-.66-.02-.94-.07h0c-.28-.05-.52-.14-.71-.29h0c-.19-.14-.34-.34-.45-.59h0c-.1-.25-.15-.57-.15-.97h0v-7.2h0c0-.37.07-.68.2-.95h0c.14-.26.34-.49.59-.7h0c.25-.21.57-.4.95-.57h0c.37-.17.78-.31,1.21-.44h0c.43-.13.88-.23,1.34-.3h0c.47-.07.93-.11,1.4-.11h0c.77,0,1.37.15,1.82.44h0c.45.3.67.79.67,1.46h0c0,.22-.03.44-.09.66h0c-.07.21-.15.41-.24.58h0c-.34,0-.69.02-1.04.05h0c-.35.03-.69.08-1.03.15h0c-.33.06-.65.13-.95.2h0c-.29.07-.54.16-.75.25h0Zm5.28,2.38h0c0-1.06.16-1.98.48-2.75h0c.32-.77.76-1.42,1.33-1.93h0c.57-.51,1.23-.89,1.99-1.14h0c.76-.25,1.58-.37,2.46-.37h0c.32,0,.63.03.94.08h0c.3.05.55.12.74.2h0v-3.88h0c.16-.05.42-.11.77-.16h0c.35-.05.71-.08,1.08-.08h0c.35,0,.67.02.95.07h0c.28.05.52.14.71.29h0c.19.14.33.33.43.58h0c.09.25.14.58.14.98h0v11.37h0c0,.75-.35,1.35-1.05,1.8h0c-.47.31-1.07.58-1.8.81h0c-.74.23-1.59.34-2.55.34h0c-1.04,0-1.97-.14-2.79-.43h0c-.83-.29-1.52-.7-2.09-1.25h0c-.57-.54-1-1.19-1.3-1.95h0c-.29-.76-.44-1.62-.44-2.58Zm6.81-3h0c-.86,0-1.52.25-1.99.74h0c-.46.5-.69,1.25-.69,2.26h0c0,.99.21,1.74.64,2.24h0c.43.51,1.06.76,1.88.76h0c.29,0,.55-.04.78-.13h0c.23-.09.41-.19.54-.3h0v-5.28h0c-.32-.19-.71-.29-1.16-.29Zm7.66-6.07h0c0-.61.2-1.13.61-1.54h0c.41-.41.95-.62,1.62-.62h0c.67,0,1.21.21,1.62.62h0c.41.41.61.93.61,1.54h0c0,.61-.2,1.12-.61,1.53h0c-.41.42-.95.63-1.62.63h0c-.67,0-1.21-.21-1.62-.63h0c-.41-.41-.61-.92-.61-1.53Zm4.27,5.11v9.77h0c-.17.03-.43.07-.78.13h0c-.34.05-.69.08-1.04.08h0c-.35,0-.67-.02-.95-.07h0c-.28-.05-.52-.14-.71-.29h0c-.19-.14-.34-.34-.44-.59h0c-.11-.25-.16-.57-.16-.97h0V6.61h0c.18-.03.44-.07.78-.13h0c.35-.05.7-.08,1.05-.08h0c.35,0,.66.02.94.07h0c.28.05.52.14.71.29h0c.19.14.34.34.45.59h0c.1.25.15.57.15.97h0Zm14.67,3.96h0c0,.99-.15,1.88-.46,2.65h0c-.31.77-.73,1.43-1.28,1.96h0c-.55.53-1.21.93-1.98,1.2h0c-.77.27-1.63.4-2.57.4h0c-.95,0-1.8-.14-2.57-.43h0c-.77-.29-1.43-.7-1.98-1.23h0c-.55-.54-.98-1.19-1.28-1.96h0c-.31-.77-.46-1.63-.46-2.59h0c0-.95.15-1.8.46-2.57h0c.3-.77.73-1.42,1.28-1.96h0c.55-.53,1.21-.94,1.98-1.23h0c.77-.29,1.62-.43,2.57-.43h0c.94,0,1.8.15,2.57.44h0c.77.29,1.43.71,1.98,1.25h0c.55.53.97,1.18,1.28,1.95h0c.31.77.46,1.62.46,2.55Zm-8.4,0h0c0,.97.19,1.72.56,2.24h0c.37.52.9.78,1.57.78h0c.67,0,1.19-.26,1.55-.79h0c.36-.53.54-1.27.54-2.23h0c0-.96-.18-1.7-.55-2.22h0c-.37-.52-.89-.78-1.56-.78h0c-.67,0-1.19.26-1.56.78h0c-.37.52-.55,1.26-.55,2.22Zm15.84.38l-1.01-.33h0c-.71-.24-1.35-.49-1.92-.74h0c-.58-.25-1.08-.55-1.49-.9h0c-.41-.35-.74-.77-.97-1.26h0c-.23-.49-.35-1.08-.35-1.78h0c0-1.36.52-2.45,1.57-3.27h0c1.05-.81,2.52-1.22,4.41-1.22h0c.69,0,1.33.05,1.92.14h0c.59.1,1.09.25,1.52.45h0c.43.2.76.45,1,.76h0c.24.31.36.68.36,1.1h0c0,.41-.1.77-.29,1.06h0c-.19.3-.43.55-.7.76h0c-.35-.23-.82-.42-1.41-.59h0c-.59-.17-1.24-.25-1.95-.25h0c-.72,0-1.25.1-1.58.3h0c-.34.2-.51.45-.51.76h0c0,.24.11.43.32.58h0c.21.15.52.29.93.42h0l1.27.41h0c1.51.48,2.66,1.09,3.47,1.84h0c.81.74,1.21,1.75,1.21,3.03h0c0,1.36-.53,2.46-1.6,3.3h0c-1.07.84-2.65,1.26-4.73,1.26h0c-.74,0-1.42-.06-2.05-.18h0c-.63-.12-1.19-.29-1.66-.52h0c-.47-.23-.84-.52-1.1-.87h0c-.27-.34-.4-.74-.4-1.19h0c0-.46.14-.85.41-1.18h0c.27-.33.57-.59.89-.76h0c.45.35.99.66,1.64.91h0c.65.26,1.35.39,2.12.39h0c.79,0,1.34-.12,1.66-.36h0c.32-.24.48-.52.48-.84h0c0-.32-.13-.57-.38-.74h0c-.26-.17-.62-.33-1.08-.49h0Zm14.42,5.09h0c-.23.19-.53.35-.91.47h0c-.39.12-.84.18-1.37.18h0c-.65,0-1.22-.09-1.7-.28h0c-.48-.18-.8-.44-.96-.78h0c-.18-.38-.39-.99-.62-1.82h0c-.23-.83-.45-1.75-.68-2.74h0c-.23-.99-.44-2-.64-3.02h0c-.2-1.03-.35-1.93-.46-2.71h0c.22-.23.52-.42.9-.59h0c.37-.17.78-.25,1.23-.25h0c.56,0,1.02.12,1.38.37h0c.36.25.58.67.66,1.28h0c.16,1.22.3,2.22.41,3.01h0c.11.79.21,1.44.28,1.95h0c.07.5.12.88.16,1.15h0c.04.27.08.48.11.64h.1c.05-.26.13-.63.25-1.12h0c.12-.49.26-1.04.42-1.67h0c.16-.62.33-1.3.5-2.03h0c.18-.73.36-1.45.53-2.17h0c.32-.17.64-.31.95-.41h0c.31-.09.7-.14,1.16-.14h0c.56,0,1.04.09,1.44.26h0c.4.18.66.45.77.82h0c.19.71.38,1.39.55,2.05h0c.18.67.34,1.28.48,1.85h0c.15.57.28,1.07.39,1.51h0c.11.44.19.79.24,1.05h.12c.17-1.23.34-2.51.51-3.84h0c.17-1.33.33-2.69.47-4.06h0c.29-.17.59-.3.91-.38h0c.32-.08.64-.12.96-.12h0c.56,0,1.03.12,1.4.36h0c.37.24.55.65.55,1.24h0c0,.26-.04.65-.12,1.16h0c-.08.51-.18,1.08-.31,1.72h0c-.13.64-.28,1.31-.45,2.02h0c-.17.71-.33,1.39-.5,2.04h0c-.17.65-.33,1.25-.48,1.78h0c-.15.53-.29.93-.4,1.22h0c-.22.19-.56.35-1.03.47h0c-.47.12-.96.18-1.49.18h0c-1.34,0-2.13-.34-2.37-1.01h0c-.1-.29-.22-.65-.36-1.09h0c-.15-.44-.3-.92-.46-1.45h0c-.16-.53-.31-1.08-.46-1.65h0c-.14-.57-.26-1.11-.36-1.64h0c-.11.56-.24,1.14-.4,1.74h0c-.16.6-.33,1.18-.5,1.75h0c-.17.57-.32,1.09-.46,1.56h0c-.15.47-.26.85-.34,1.14Zm17.33-2.23h0c.27,0,.57-.03.9-.09h0c.33-.05.57-.13.73-.22h0v-1.92l-1.73.14h0c-.45.03-.81.13-1.1.29h0c-.29.16-.43.4-.43.72h0c0,.32.12.58.37.78h0c.25.2.67.3,1.26.3Zm-.19-9.43h0c.86,0,1.65.09,2.36.26h0c.71.17,1.32.44,1.82.8h0c.51.36.9.82,1.17,1.37h0c.27.55.41,1.21.41,1.96h0v5.37h0c0,.42-.12.76-.35,1.02h0c-.23.27-.51.5-.83.69h0c-1.04.62-2.5.93-4.39.93h0c-.85,0-1.61-.08-2.29-.24h0c-.68-.16-1.27-.4-1.76-.72h0c-.49-.32-.86-.73-1.12-1.22h0c-.27-.49-.4-1.07-.4-1.73h0c0-1.1.33-1.95.98-2.54h0c.66-.59,1.68-.96,3.05-1.11h0l3.15-.33v-.17h0c0-.47-.21-.8-.62-1h0c-.41-.2-.99-.3-1.76-.3h0c-.61,0-1.2.07-1.78.2h0c-.57.13-1.09.29-1.56.48h0c-.21-.15-.38-.37-.52-.66h0c-.15-.3-.22-.61-.22-.93h0c0-.41.1-.74.3-.99h0c.2-.25.51-.47.92-.64h0c.47-.17,1.02-.3,1.65-.38h0c.63-.08,1.23-.12,1.79-.12Zm13.6,0h0c.96,0,1.85.12,2.68.37h0c.83.25,1.53.63,2.12,1.14h0c.59.51,1.06,1.16,1.4,1.93h0c.33.77.5,1.7.5,2.77h0c0,1.03-.14,1.92-.43,2.69h0c-.29.77-.7,1.41-1.23,1.93h0c-.53.52-1.16.91-1.9,1.17h0c-.75.25-1.58.38-2.49.38h0c-.69,0-1.33-.1-1.92-.31h0v3.98h0c-.16.05-.42.1-.77.16h0c-.35.05-.71.08-1.08.08h0c-.35,0-.66-.02-.94-.07h0c-.28-.05-.52-.14-.71-.29h0c-.19-.14-.34-.34-.43-.59h0c-.1-.25-.15-.57-.15-.97h0v-11.52h0c0-.43.09-.78.28-1.05h0c.18-.27.43-.52.75-.75h0c.5-.32,1.12-.58,1.85-.77h0c.74-.19,1.56-.28,2.47-.28Zm.05,9.16h0c1.65,0,2.47-.98,2.47-2.95h0c0-1.02-.2-1.78-.61-2.28h0c-.41-.49-.99-.74-1.76-.74h0c-.31,0-.58.04-.82.11h0c-.24.07-.45.15-.62.25h0v5.28h0c.19.09.4.17.62.24h0c.23.06.47.09.72.09Z"
                />
                <path
                  d="m23.71,2.11C22.36.75,20.57.02,18.66.02s-3.7.74-5.05,2.09l-.71.71-.72-.72c-1.35-1.35-3.15-2.1-5.06-2.1S3.43.74,2.09,2.09C.74,3.44,0,5.23,0,7.14,0,9.05.75,10.84,2.1,12.19l10.27,10.27c.14.14.33.22.52.22s.38-.07.52-.21l10.29-10.25c1.35-1.35,2.09-3.14,2.09-5.05,0-1.91-.73-3.7-2.08-5.05Zm-1.05,9.06l-9.77,9.73L3.14,11.15c-1.07-1.07-1.66-2.49-1.66-4.01s.59-2.94,1.66-4c1.07-1.07,2.49-1.66,4-1.66s2.94.59,4.01,1.66l1.24,1.24c.29.29.75.29,1.04,0l1.22-1.22c1.07-1.07,2.5-1.66,4.01-1.66s2.93.59,4,1.66c1.07,1.07,1.66,2.49,1.66,4.01,0,1.51-.59,2.94-1.66,4.01Z"
                />
              </svg>
            </a>
          </div>
          <div
            class="c2"
          >
            <div>
              <button
                class="c8"
                scale="sm"
              >
                0xbd...c980
              </button>
            </div>
          </div>
        </nav>
        <div
          class="c9"
        >
          <div
            class="c10"
          >
            <div
              class="c11"
            >
              <div
                class="c12"
                role="button"
              >
                <a
                  aria-current="page"
                  class="active"
                  href="/"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    Home
                  </div>
                </a>
              </div>
              <div
                class="c15"
              >
                <div
                  class="c16"
                  role="button"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    Trade
                  </div>
                  <svg
                    class="c7"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z"
                    />
                  </svg>
                </div>
                <div
                  class="c17"
                />
              </div>
              <div
                class="c16"
                role="button"
              >
                <a
                  href="/buy"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    Buy
                  </div>
                  <div
                    class="c18 c19"
                    color="warning"
                    font-size="14px"
                  >
                    SOON
                  </div>
                </a>
              </div>
              <div
                class="c15"
              >
                <div
                  class="c12"
                  role="button"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    Info
                  </div>
                  <svg
                    class="c7"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z"
                    />
                  </svg>
                </div>
                <div
                  class="c17"
                />
              </div>
              <div
                class="c15"
              >
                <div
                  class="c16"
                  role="button"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    More
                  </div>
                  <svg
                    class="c7"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                    />
                  </svg>
                </div>
                <div
                  class="c20"
                />
              </div>
            </div>
            <div
              class="c21"
            >
              <button
                class="c22 c23"
                scale="md"
              >
                <svg
                  class="c7"
                  color="text"
                  viewBox="0 0 24 24"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            class="c24"
          >
            body
          </div>
          <div
            class="c25 c26"
            role="presentation"
          />
        </div>
      </div>
    </DocumentFragment>
  `);
});
