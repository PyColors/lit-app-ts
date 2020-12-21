import { LitElement, html, customElement, css, TemplateResult } from 'lit-element';

@customElement('footer-element')
export default class FooterElement extends LitElement {
  static get styles() {
    return [
      css`
        .app-footer {
          font-size: calc(12px + 0.5vmin);
          text-align: center;
        }

        .app-footer a {
          margin-left: 5px;
        }
      `,
    ];
  }
  protected render(): TemplateResult {
    return html`
      <p class="app-footer">
        🚽 Made with love by
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/open-wc">open-wc</a>.
      </p>
    `;
  }
}
