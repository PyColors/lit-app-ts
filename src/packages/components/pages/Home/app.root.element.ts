import { LitElement, html, customElement, property } from 'lit-element';

import { style } from './app.root.styles';

@customElement('app-root')
export class AppRootElement extends LitElement {
  @property({ type: String }) prop1 = '';
  @property({ type: String }) prop2 = '';

  static get styles() {
    return style;
  }
  render() {
    return html`
      <main>
        <h1>My app</h1>

        <p>Edit <code>src/MyApp.js</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/developing/#code-examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/open-wc">open-wc</a>.
      </p>
    `;
  }
}
