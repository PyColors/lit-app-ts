import { LitElement, html, customElement, css, TemplateResult } from 'lit-element';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-layout.js';
import '../menu/menu.element';

@customElement('header-element')
export default class HeaderElement extends LitElement {
  static get styles() {
    return [
      css`
        app-header {
          background-color: #000;
          color: white;
        }
        app-toolbar {
          width: 1200px;
          margin: auto;
        }
      `,
    ];
  }
  protected render(): TemplateResult {
    return html`
      <app-header reveals>
        <app-toolbar>
          <div main-title>Lit App</div>
          <menu-element></menu-element>
        </app-toolbar>
      </app-header>
      <app-drawer id="drawer" swipe-open></app-drawer>
    `;
  }
}
