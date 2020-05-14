import { LitElement, html, customElement, css, TemplateResult } from 'lit-element';
// import '@material/mwc-top-app-bar-fixed';
// import '@material/mwc-icon-button';
// import '@material/mwc-button';

// import '../menu/menu.element';

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
          display: inline-block;
        }

        mwc-top-app-bar-fixed {
          --mdc-theme-primary: white;
          --mdc-theme-on-primary: black;
          box-shadow: 0px 0px 2px -1px rgba(0, 0, 0, 0.2), 0px 0px 3px 0px rgba(0, 0, 0, 0.14),
            0px 1px 10px 0px rgba(0, 0, 0, 0.12);
        }

        .nav-bar {
          text-align: right;
        }
      `,
    ];
  }
  public render(): TemplateResult {
    return html`
      <mwc-top-app-bar-fixed>
        <div slot="title">Py</div>
        <div slot="title">
          <nav class="nav-bar">
            <a href="/">home</a>
            <a href="/about">about</a>
          </nav>
        </div>

        <div>
          <!-- content -->
          <menu-element></menu-element>
        </div>
      </mwc-top-app-bar-fixed>
    `;
  }
}
