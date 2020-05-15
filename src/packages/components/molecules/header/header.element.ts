import { LitElement, html, customElement, css, TemplateResult } from 'lit-element';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-layout.js';
import '../menu/menu.element';

@customElement('header-element')
export class HeaderElement extends LitElement {
  static get styles() {
    return [
      css`
      app-header {
        background-color: white;
        --app-header-background-rear-layer: {
          /* The header is blue when condensed *\/
          background-color: dark;
        };
      }
      `,
    ];
  }
  public render(): TemplateResult {
    return html`
      <app-header reveals>
        <app-toolbar>
          <div main-title>Lit-app</div>
        </app-toolbar>
      </app-header>
      <app-drawer id="drawer" swipe-open></app-drawer>
    `;
  }
}
