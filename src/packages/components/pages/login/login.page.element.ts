import { LitElement, html, customElement, property, TemplateResult } from 'lit-element';
import '../../molecules/input-email/input.email.element';

import { style } from './login.page.styles';

@customElement('login-page')
export class HomeElement extends LitElement {
  @property({ type: String }) prop1 = '';
  @property({ type: String }) prop2 = '';

  static get styles() {
    return style;
  }
  public render(): TemplateResult {
    return html`
      <main>
        <h1>Login</h1>
        <input-email-element />
      </main>
    `;
  }
}
