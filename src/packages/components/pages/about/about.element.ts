import { LitElement, html, customElement } from 'lit-element';

@customElement('app-root')
export class AboutElement extends LitElement {
  render() {
    return html`
      <main>
        <h1>About</h1>
      </main>
    `;
  }
}
