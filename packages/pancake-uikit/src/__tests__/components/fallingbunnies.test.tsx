import React from "react";
import { renderWithTheme } from "../../testHelpers";
import FallingBunnies from "../../components/FallingBunnies/FallingBunnies";

beforeEach(() => {
  jest.spyOn(global.Math, "random").mockReturnValue(0.5);
});

afterEach(() => {
  jest.spyOn(global.Math, "random").mockRestore();
});

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<FallingBunnies count={1} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c1 {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      fill: #452A7A;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c0 {
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      position: fixed;
      top: 0;
      left: 50vw;
      -webkit-transform: translate3d(0,-100%,0);
      -ms-transform: translate3d(0,-100%,0);
      transform: translate3d(0,-100%,0);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      pointer-events: none;
      z-index: 99999;
      -webkit-animation-name: dphWuA;
      animation-name: dphWuA;
      -webkit-animation-duration: 10s;
      animation-duration: 10s;
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-play-state: running;
      animation-play-state: running;
    }

    .c0:nth-child(5n + 5) {
      -webkit-animation-delay: 1.3s;
      animation-delay: 1.3s;
    }

    .c0:nth-child(3n + 2) {
      -webkit-animation-delay: 1.5s;
      animation-delay: 1.5s;
    }

    .c0:nth-child(2n + 5) {
      -webkit-animation-delay: 1.7s;
      animation-delay: 1.7s;
    }

    .c0:nth-child(3n + 10) {
      -webkit-animation-delay: 2.7s;
      animation-delay: 2.7s;
    }

    .c0:nth-child(7n + 2) {
      -webkit-animation-delay: 3.5s;
      animation-delay: 3.5s;
    }

    .c0:nth-child(4n + 5) {
      -webkit-animation-delay: 5.5s;
      animation-delay: 5.5s;
    }

    .c0:nth-child(3n + 7) {
      -webkit-animation-delay: 8s;
      animation-delay: 8s;
    }

    <div>
        <div
          class="c0"
        >
          <svg
            class="c1"
            color="text"
            height="32"
            viewBox="0 0 32 32"
            width="32"
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
        </div>
      </div>
    </DocumentFragment>
  `);
});
