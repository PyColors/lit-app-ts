import { LitElement, html, customElement, TemplateResult } from 'lit-element';

@customElement('about-page')
export class AboutElement extends LitElement {
  public render(): TemplateResult {
    return html`
      <main>
        <h1>About</h1>
        <a href="/">home</a>
      </main>
    `;
  }
}
