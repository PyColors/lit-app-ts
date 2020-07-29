import { LitElement, html, customElement, css, TemplateResult } from 'lit-element';

import '@lion/input/lion-input.js';

@customElement('input-element')
export class InputEmailElement extends LitElement {
  static get styles() {
    return [
      css`
        .input {
          color: #1a2b42;
          line-height: 32px;
        }
      `,
    ];
  }
  public render(): TemplateResult {
    return html`
      <lion-input class="input" slot="label"> </lion-input>
    `;
  }
}
