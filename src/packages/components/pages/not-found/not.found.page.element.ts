import { LitElement, html, customElement, TemplateResult } from 'lit-element';

import { style } from './not.found.page.styles';

@customElement('not-found-page')
export class NotFoundElement extends LitElement {
  static get styles() {
    return style;
  }
  public render(): TemplateResult {
    return html`
      <main>
        <h1>Not found</h1>
      </main>
    `;
  }
}
