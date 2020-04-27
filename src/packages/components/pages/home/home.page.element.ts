import { LitElement, html, customElement, property, TemplateResult } from 'lit-element';

import { style } from './home.page.styles';

@customElement('home-page')
export class HomeElement extends LitElement {
  @property({ type: String }) prop1 = '';
  @property({ type: String }) prop2 = '';

  static get styles() {
    return style;
  }
  public render(): TemplateResult {
    return html`
      <main>
        <h1>LitElement <br />TypeScript App</h1>

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
    `;
  }
}
