import { css } from 'lit-element';

export const style = css`
  :host {
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: #1a2b42;
    max-width: 960px;
    margin: 0 auto;
    text-align: left;
    color: #fff;
  }

  main {
    flex-grow: 1;
  }

  h1 {
    font-size: 3.8em;
  }
`;
