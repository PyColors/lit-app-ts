import { LitElement, html, customElement, css, TemplateResult } from 'lit-element';

import '@lion/input-email/lion-input-email.js';

@customElement('input-email-element')
export class InputEmailElement extends LitElement {
  static get styles() {
    return [
      css`
        .input-email {
          color: #1a2b42;
          line-height: 32px;
        }
      `,
    ];
  }
  protected render(): TemplateResult {
    return html`
      <lion-input-email
        class="input-email"
        label="Please enter your email address"
        name="email"
      ></lion-input-email>
    `;
  }
}
