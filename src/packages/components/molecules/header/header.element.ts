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
          --mdc-theme-primary: #fff;
          --mdc-theme-on-primary: black;
        }
      `,
    ];
  }
  public render(): TemplateResult {
    return html`
      <mwc-top-app-bar-fixed>
        <div slot="title">Py</div>

        <mwc-icon-button icon="favorite" slot="actionItems"></mwc-icon-button>
        <div>
          <!-- content -->
          <nav class="nav-bar">
            <a href="/">home</a>
            <a href="/about">about</a>
          </nav>
        </div>
      </mwc-top-app-bar-fixed>
    `;
  }
}
