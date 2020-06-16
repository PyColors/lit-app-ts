import { LitElement, html, customElement, property, TemplateResult } from 'lit-element';
import '../../molecules/input-email/input.email.element';
import '../../molecules/input/input.element';
import '@lion/button/lion-button.js';
import { style } from './login.page.styles';

@customElement('login-page')
export class HomeElement extends LitElement {
  static get styles() {
    return style;
  }
  public render(): TemplateResult {
    return html`
      <main>
        <form
          @submit=${ev => {
            ev.preventDefault();
            console.log('submit handler');
          }}
        >
          <h1>Login</h1>
          <input-email-element></input-email-element>
          <br />
          <lion-input type="password" label="Please enter your password"></lion-input>
          <lion-button @click=${() => console.log('click handler')}>Submit</lion-button>
        </form>
      </main>
    `;
  }
}
