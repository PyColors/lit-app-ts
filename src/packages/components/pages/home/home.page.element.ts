import { LitElement, html, customElement, property, TemplateResult } from 'lit-element';

import { style } from './home.page.styles';

@customElement('home-page')
export class HomeElement extends LitElement {
  static get styles() {
    return style;
  }
  public render(): TemplateResult {
    return html`
      <main>
        <h1>LitElement <br />TypeScript App</h1>
      </main>
    `;
  }
}
