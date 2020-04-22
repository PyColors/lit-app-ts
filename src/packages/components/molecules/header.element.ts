import { LitElement, html, customElement, css, TemplateResult } from 'lit-element';
import '@material/mwc-top-app-bar-fixed';
import '@material/mwc-icon-button';
import '@material/mwc-button';

@customElement('header-element')
export class HeaderElement extends LitElement {
  static get styles() {
    return [
      css`
        a {
          text-decoration: none;
        }
        [slot='title'] {
          font-family: 'Helvetica', monospace;
          -webkit-font-smoothing: antialiased;
          font-size: 1.25rem;
          line-height: 2rem;
          letter-spacing: 0.4px;
        }
        mwc-top-app-bar-fixed {
          --mdc-theme-primary: #eee;
          --mdc-theme-on-primary: black;
        }
      `,
    ];
  }
  public render(): TemplateResult {
    return html`
      <mwc-top-app-bar-fixed>
        <div slot="title">
          Py<image src="http://www.pycolors.com/v2/images/haut-de-page-hover.png" />
        </div>

        <mwc-icon-button icon="favorite" slot="actionItems"></mwc-icon-button>
        <div><!-- content --></div>
      </mwc-top-app-bar-fixed>
    `;
  }
}
